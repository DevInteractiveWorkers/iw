"use client";

import React from "react";
import Image from "next/image";
import ProductCard from "../product-card";

interface VACardProps {
  children?: React.ReactNode;
  imageSrc: string;
  style?: React.CSSProperties;
}

const VACard = ({ children, imageSrc, style }: VACardProps) => {
  return (
    <ProductCard
      className="flex flex-col relative pointer-events-none w-full h-full"
      style={
        style ?? {
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginTop: "25%",
          flexShrink: 0,
        }
      }
    >
      <div className="relative w-full aspect-[275/341] -mt-[25%] border-b border-white/50 z-10 overflow-hidden">
        <Image
          className="object-cover object-top select-none pointer-events-none"
          src={imageSrc}
          alt="packages"
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          quality={100}
        />
      </div>
      <div className="text-center font-medium text-[clamp(1rem,1vw,1.5rem)] min-h-[4.5rem] flex items-center justify-center px-4 z-10 pointer-events-none">
        <h3>{children}</h3>
      </div>
    </ProductCard>
  );
};

export default VACard;
