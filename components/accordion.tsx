"use client";

import Image from "next/image";
import { useState } from "react";

interface AccordionProps {
  images: { src: string }[];
}

export default function Accordion({ images }: AccordionProps) {
  const [opened, setOpened] = useState<number | null>(null);

  return (
    <div
      className="flex w-9/12 h-[600px] gap-2 overflow-hidden"
      onMouseLeave={() => setOpened(null)}
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
            className="object-cover"
          />{" "}
        </div>
      ))}{" "}
    </div>
  );
}
