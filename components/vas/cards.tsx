"use client";

import React, { useState } from "react";
import Image from "next/image";
import ProductCard from "../product-card";
import BorderGlow from "../border-glow/border-glow";

interface VACardProps {
  children?: React.ReactNode;
  imageSrc: string;
  style?: React.CSSProperties;
  content?: string | React.ReactNode;
}

const VACard = ({ children, imageSrc, style, content }: VACardProps) => {
  const hasContent = content ? true : false;
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const canFlip = hasContent && isHovered;

  return (
    <div
      className="group/card"
      onMouseEnter={() => setIsHovered(true)}
      onClick={() => console.log(isHovered)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ProductCard
        className={`flex flex-col relative pointer-events-none w-full h-full transition-transform duration-300`}
        decorative
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginTop: "25%",
          flexShrink: 0,
          overflow: "visible",
          transform: canFlip ? "rotateY(-180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          className={`relative w-full aspect-[275/341] -mt-[25%] overflow-hidden pointer-events-none ${canFlip ? "z-0" : "z-10"} transition-all duration-75`}
        >
          <Image
            className={`object-cover object-top select-none transition-all duration-300 ${canFlip && isHovered && "scale-90 mt-[25%]"}`}
            src={imageSrc}
            alt="packages"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            quality={100}
          />
        </div>
        {hasContent && (
          <ProductCard
            className="p-4"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              transform: "rotateY(-180deg)",
              opacity: canFlip ? 1 : 0,
              transition: "opacity 500ms",
            }}
          >
            {content}
          </ProductCard>
        )}
        <div className="relative text-center font-medium text-[clamp(1rem,1vw,1.5rem)] min-h-[4.5rem] flex items-center justify-center px-4 z-20 group-hover/card:-z-20 pointer-events-">
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
    </div>
  );
};

export default VACard;
