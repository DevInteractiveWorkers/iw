"use client";

import React from "react";
import Image from "next/image";
import ProductCard from "../product-card";
import BorderGlow from "../border-glow/border-glow";

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
      <div className="relative w-full aspect-[275/341] -mt-[25%]  z-10 overflow-hidden pointer-events-none">
        <Image
          className="object-cover object-top select-none"
          src={imageSrc}
          alt="packages"
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          quality={100}
        />
      </div>
      <div className="relative text-center font-medium text-[clamp(1rem,1vw,1.5rem)] min-h-[4.5rem] flex items-center justify-center px-4 z-20 pointer-events-">
        <div className="absolute w-full h-full top-0 left-0">
          <BorderGlow
            animated
            borderRadius="0px 0px 5px 5px"
            className="w-full h-full pointer-events-auto"
            colors={[]}
          />
        </div>

        <h3>{children}</h3>
      </div>
    </ProductCard>
  );
};

export default VACard;
