"use client";

import Image from "next/image";
import ProductCard from "./product-card";
import { useState } from "react";
import TextCursor from "./text-animation/TextCursor";

type FolderItem = {
  title: string;
  text: string;
  src: string;
  imagePosition?: React.CSSProperties;
};

export default function Folder({ items }: { items: FolderItem[] }) {
  const [current, setCurrent] = useState(0);

  const activeItem = items[current];

  return (
    <ProductCard
      className="grid grid-cols-1 lg:grid-cols-2"
      disableHover
      style={{ borderRadius: 5, overflow: "hidden" }}
      shineZIndex={-10}
    >
      {/* Accordion */}
      <ul className="w-full">
        {items.map((item, i) => {
          const isActive = current === i;

          return (
            <li
              key={item.title}
              className="border-b border-white/20 last:border-b-0"
            >
              <button
                type="button"
                aria-expanded={isActive}
                aria-controls={`folder-content-${i}`}
                onClick={() => setCurrent(i)}
                className="
                  group
                  w-full
                  px-5 py-5
                  sm:px-7 sm:py-6
                  lg:px-10 lg:py-7
                  text-left
                "
              >
                {/* Header */}
                <div className="flex items-center justify-between gap-6">
                  <span
                    className={`
                      text-xl
                      sm:text-2xl
                      lg:text-3xl
                      font-medium
                      transition-opacity
                      duration-200
                      ${isActive ? "opacity-100" : "opacity-70"}
                    `}
                  >
                    {item.title}
                  </span>

                  <svg
                    width="11"
                    height="7"
                    viewBox="0 0 11 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className={`
                      shrink-0
                      transition-transform
                      duration-300
                      ease-out
                      ${isActive ? "rotate-0" : "-rotate-90"}
                    `}
                  >
                    <path
                      d="M4.58605 5.99828L0.294875 1.70711C-0.33509 1.07714 0.111077 0 1.00198 0H9.58432C10.4752 0 10.9214 1.07714 10.2914 1.70711L6.00026 5.99828C5.60973 6.3888 4.97657 6.3888 4.58605 5.99828Z"
                      fill="white"
                    />
                  </svg>
                </div>

                {/* Content */}
                <div
                  id={`folder-content-${i}`}
                  className={`
                    grid
                    transition-[grid-template-rows,opacity,margin]
                    duration-300
                    ease-out
                    ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100 mt-4"
                        : "grid-rows-[0fr] opacity-0 mt-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p
                      className="
                        text-sm
                        sm:text-base
                        lg:text-lg
                        font-light
                        leading-relaxed
                        max-w-xl
                      "
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Image */}
      <div
        className="
          relative
          w-full
          aspect-[4/3]
          lg:aspect-auto
          lg:min-h-full
          overflow-hidden
        "
      >
        <div>
          {items.map((item, i) => (
            <Image
              key={i}
              width={1080}
              height={1080}
              alt={item.title}
              src={item.src}
              className={`
              pointer-events-none
              absolute
              inset-0
              w-full
              h-full
              object-cover
                ${activeItem === item ? "opacity-100" : "opacity-0"}
                transition-all duration-300
                `}
              style={activeItem.imagePosition}
            />
          ))}
        </div>
      </div>
    </ProductCard>
  );
}
