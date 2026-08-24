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
      className="flex flex-col relative pointer-events-none "
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
      <Image
        className="-mt-[25%] w-full h-full max-h-[95%] border-b border-white/50 z-10 object-cover object-top select-none pointer-events-none"
        src={imageSrc}
        alt="packages"
        width={275}
        height={341}
        quality={100}
      />
      <div className="text-center font-medium text-[clamp(1rem,1vw,1.5rem)] h-full flex items-center justify-center px-4 z-10 pointer-events-none">
        <h3>{children}</h3>
      </div>
    </ProductCard>
  );
};

export default VACard;
