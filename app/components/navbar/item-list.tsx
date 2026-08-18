"use client";
import { Navbar } from "flowbite-react";
import React, { useState, useRef, useLayoutEffect } from "react";
import { navbarModel } from "./../../content/navbar";
import Link from "next/link";

const ItemList = ({
  items,
  dark,
}: {
  items: navbarModel[];
  hover?: boolean;
  dark?: boolean;
}) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
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
    if (hoverIndex !== null && itemRefs.current[hoverIndex]) {
      const currentEl = itemRefs.current[hoverIndex];
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
  }, [hoverIndex]);

  return (
    <Navbar className="bg-transparent flex gap-4 relative">
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
      {items.map((item, key) => (
        <Link
          key={key}
          href={item.link}
          ref={(el) => {
            itemRefs.current[key] = el;
          }}
          className={`relative z-10 px-4 ${hoverIndex === key ? "text-black" : "text-white"} transition-all duration-150`}
          onMouseEnter={() => setHoverIndex(key)}
        >
          {item.title}
        </Link>
      ))}
    </Navbar>
  );
};

export default ItemList;
