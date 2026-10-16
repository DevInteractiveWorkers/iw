"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";

interface AccordionProps {
  images: { src: string; label?: string }[];
  imagesEffect?: CSSProperties["filter"];
  alwaysOpened?: boolean;
}

export default function Accordion({
  images,
  imagesEffect = "none",
  alwaysOpened = false,
}: AccordionProps) {
  const [opened, setOpened] = useState<number | null>(alwaysOpened ? 0 : null);

  return (
    <div
      className="flex md:w-9/12 w-full md:h-[600px] h-[50vh] max-md:flex-col gap-2 overflow-hidden"
      onMouseLeave={() => !alwaysOpened && setOpened(null)}
    >
      {images.map((img, index) => (
        <div
          key={img.src}
          onMouseEnter={() => setOpened(index)}
          className={`relative h-full overflow-hidden rounded-xl cursor-pointer transition-all duration-500 ease-in-out ${
            opened === index ? "flex-[5]" : "flex-1"
          }`}
        >
          <Image
            src={img.src}
            fill
            alt={`Image ${index + 1}`}
            sizes="(max-width: 768px) 100vw, 80vw"
            className="object-cover transition-[filter] duration-1000"
            style={{
              filter: opened === index ? "none" : imagesEffect,
            }}
          />
          {img.label && (
            <div
              className={`absolute bottom-0 left-0 w-full overflow-hidden ease-in-out from-[rgb(128,2,2)]/0 to-iw-red-3 bg-gradient-to-b ${
                opened === index
                  ? "max-w-full opacity-100"
                  : "max-w-0 opacity-0"
              }`}
              style={{ transition: "opacity 2000ms, width 500ms" }}
            >
              <span className="block p-4 font-medium text-[clamp(1rem,8vw,2rem)] text-white [text-shadow:_0px_2px_5px_rgba(128,2,2,1)] md:whitespace-nowrap">
                {img.label}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
