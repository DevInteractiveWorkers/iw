"use client";

import React, { useState } from "react";
import BorderGlow from "./border-glow/border-glow";

export default function ProductCard({
  children,
  className,
  style,
  disableHover = false,
  decorative,
}: {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  disableHover?: boolean;
  decorative?: boolean;
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`flex flex-col relative transition-all duration-300 z-10 ${
        disableHover ? "" : "hover:scale-100 hover:-translate-y-[5%]"
      } shadow-[inset_0_0_50px_rgb(221_39_45_/_0.5)] rounded text-white
      after:rounded-[5px] after:backdrop-blur-md after:absolute after:pointer-events-none after:top-0 after:left-0 after:w-full after:h-full after:-z-10
      after:bg-iw-red-2`}
      style={{ borderRadius: 5, ...style }}
    >
      {/* Pointer-following shine overlay */}
      {/* <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 text-[rgb(221_39_45_/_0.5)]"
        style={{
          opacity,
          background: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, currentColor, transparent 80%)`,
        }}
      /> */}

      {decorative ? (
        <>
          <div className="absolute top-0 left-0 w-full h-full">
            <BorderGlow
              animated
              borderRadius={5}
              className="w-full h-full"
              fillOpacity={0}
              colors={[]}
            />
          </div>
          <div className={className ?? "pointer-events-none"}>{children}</div>
        </>
      ) : (
        <BorderGlow
          animated
          borderRadius={5}
          className="w-full h-full"
          fillOpacity={0}
          colors={[]}
        >
          <div className={className ?? "pointer-events-none"}>{children}</div>
        </BorderGlow>
      )}
    </div>
  );
}
