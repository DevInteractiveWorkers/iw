"use client";

import BorderGlow from "./border-glow/border-glow";

export default function ProductCard({
  children,
  className,
  style,
  disableHover = false,
  shineZIndex = 10,
}: {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  disableHover?: boolean;
  shineZIndex?: number;
}) {
  return (
    <div
      className={`flex flex-col relative transition-all duration-200 ${
        disableHover ? "" : "hover:scale-105"
      } shadow-[inset_0_0_50px_rgb(221_39_45_/_0.1)] rounded 
      after:bg-[rgb(221_39_45_/_0.2)] after:backdrop-blur-md after:absolute after:pointer-events-none after:top-0 after:left-0 after:w-full after:h-full after:-z-10`}
      style={{ borderRadius: 5, ...style }}
    >
      <div
        className="absolute w-full h-full"
        style={{ zIndex: shineZIndex, borderRadius: style?.borderRadius ?? 5 }}
      >
        <BorderGlow
          animated
          borderRadius={5}
          className="w-full h-full"
          fillOpacity={0}
          colors={[]}
        />
      </div>
      <div className={className ?? "pointer-events-none"}>{children}</div>
    </div>
  );
}
