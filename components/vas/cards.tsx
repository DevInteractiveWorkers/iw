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
      <div className="text-center font-medium text-base md:text-2xl h-full flex items-center justify-center px-4 z-10 pointer-events-none">
        <h3>{children}</h3>
      </div>
    </ProductCard>
  );
  return (
    <div
      className={`flex flex-col items-start relative min-w-[300px] max-w-[500px] min-h-[400px] h-full transition-all duration-500 justify-between pointer-events-none`}
    >
      <ProductCard
        style={{
          width: "100%",
          height: "80%",
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      />
      <Image
        className="w-full h-full max-h-[80%] border-b border-white/50 z-10 object-cover object-top select-none pointer-events-none"
        src={imageSrc}
        alt="packages"
        width={275}
        height={341}
        quality={100}
      />
      <div className="text-center font-medium text-base md:text-2xl h-full flex items-center justify-center px-4 py-2 z-10 pointer-events-none">
        <h3 className="pointer-events-none">{children}</h3>
      </div>
    </div>
  );
};

export default VACard;
