"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useRef, useLayoutEffect } from "react";

interface Item {
  title: string;
  link: string;
}

const ItemList = ({ items }: { items: Item[]; hover?: boolean }) => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = () => setIsOpen((prev) => !prev);

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  // 1. Determine active index based on route match
  const activeIndex = items.findIndex((item) => item.link === pathname);

  // 2. Target either hovered item or active item as fallback
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

  // 3. Update indicator position based on target index
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
  }, [targetIndex, pathname]);

  return (
    <>
      <button
        className="md:hidden w-full flex justify-end z-50"
        onClick={handleOpen}
        aria-label="Toggle navigation"
      >
        <svg
          className="w-6 h-6 text-white"
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
        className={`bg-transparent flex gap-4 relative max-md:fixed max-md:flex-col max-md:w-2/3 max-md:bg-black/85 max-md:top-0 max-md:right-0 max-md:h-full max-md:z-20 max-md:py-4 max-md:border-l max-md:rounded-l-xl max-md:backdrop-blur ${
          isOpen ? "max-md:translate-x-0" : "max-md:translate-x-full"
        } transition-all duration-100`}
        onMouseLeave={() => setHoverIndex(null)} // Reset hover when mouse leaves nav
      >
        {/* Background Highlight Indicator */}
        <div
          className="bg-white rounded transition-all duration-300 pointer-events-none"
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

        {/* Navigation Links */}
        {items.map((item, key) => {
          const isActive = item.link === pathname;
          const isHighlighted = targetIndex === key;

          return (
            <Link
              key={key}
              href={item.link}
              ref={(el) => {
                itemRefs.current[key] = el;
              }}
              aria-current={isActive ? "page" : undefined}
              className={`relative z-10 px-4 transition-all duration-150 max-md:w-max lg:text-base md:text-xs ${
                isHighlighted ? "text-black" : "text-white"
              }`}
              onMouseEnter={() => setHoverIndex(key)}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ItemList;
