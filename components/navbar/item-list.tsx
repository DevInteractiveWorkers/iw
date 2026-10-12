"use client";
import { usePathname } from "next/navigation";
import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import { TransitionLink } from "../link";

interface Item {
  title: string;
  link: string;
}

interface ItemListProps {
  items: Item[];
  hover?: boolean;
  isTransitioning?: boolean;
  dark?: boolean;
}

const ItemList = ({ items, isTransitioning, dark }: ItemListProps) => {
  const pathname = usePathname();
  const [currentUrl, setCurrentUrl] = useState<string>(pathname);

  useEffect(() => {
    const updateUrl = () => {
      setCurrentUrl(window.location.pathname + window.location.hash);
    };

    updateUrl();

    window.addEventListener("hashchange", updateUrl);
    return () => window.removeEventListener("hashchange", updateUrl);
  }, [pathname]);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = () => setIsOpen((prev) => !prev);

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const activeIndex = items.findIndex((item) => item.link === currentUrl);
  const targetIndex =
    hoverIndex !== null ? hoverIndex : activeIndex !== -1 ? activeIndex : null;

  const [indicatorStyle, setIndicatorStyle] = useState<{
    width: number;
    height: number;
    left: number;
    top: number;
    opacity: number;
  }>({
    width: 0,
    height: 0,
    left: 0,
    top: 0,
    opacity: 0,
  });

  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useLayoutEffect(() => {
    if (targetIndex !== null && itemRefs.current[targetIndex]) {
      const currentEl = itemRefs.current[targetIndex];
      if (currentEl) {
        setIndicatorStyle({
          width: currentEl.offsetWidth,
          height: currentEl.offsetHeight,
          left: currentEl.offsetLeft,
          top: currentEl.offsetTop,
          opacity: 1,
        });
      }
    } else {
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [targetIndex, currentUrl]);

  return (
    <>
      <button
        className="md:hidden w-full flex justify-end z-50"
        onClick={handleOpen}
        aria-label="Toggle navigation"
      >
        <svg
          className="w-6 h-6 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d={
              isOpen ? "M6 18 17.94 6M18 18 6.06 6" : "M5 7h14M5 12h14M5 17h14"
            }
          />
        </svg>
      </button>

      <div
        className={`bg-transparent flex gap-4 relative max-md:fixed max-md:flex-col max-md:w-2/3 ${dark ? "max-md:bg-black/85" : "max-md:bg-white/85"}  max-md:top-0 max-md:right-0 
          max-md:h-full max-md:z-20 max-md:py-4 max-md:border-l max-md:rounded-l-xl max-md:backdrop-blur ${
            isOpen ? "max-md:translate-x-0" : "max-md:translate-x-full"
          } transition-all duration-100`}
        onMouseLeave={() => setHoverIndex(null)}
      >
        <div
          className={`${dark ? "bg-white" : "bg-iw-red-1"} rounded transition-all duration-300 pointer-events-none`}
          style={{
            position: "absolute",
            width: `${indicatorStyle.width}px`,
            height: `${indicatorStyle.height}px`,
            left: `${indicatorStyle.left}px`,
            top: `${indicatorStyle.top}px`,
            opacity: indicatorStyle.opacity,
            zIndex: 0,
          }}
        />

        {items.map((item, key) => {
          const isActive = item.link === currentUrl;
          const isHighlighted = targetIndex === key;

          return (
            <TransitionLink
              key={key}
              href={item.link}
              ref={(el) => {
                itemRefs.current[key] = el;
              }}
              aria-current={isActive ? "page" : undefined}
              aria-disabled={isTransitioning || undefined}
              className={`relative z-10 px-4 transition-all duration-150 max-md:w-full lg:text-base md:text-xs ${
                isHighlighted
                  ? `${dark ? "text-black" : "text-white"}`
                  : `${dark ? "text-white" : "text-black"}`
              } ${isTransitioning ? "pointer-events-none" : ""}`}
              onMouseEnter={() => setHoverIndex(key)}
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </TransitionLink>
          );
        })}
      </div>
    </>
  );
};

export default ItemList;
