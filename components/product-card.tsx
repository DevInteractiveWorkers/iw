"use client";

import BorderGlow from "./border-glow/border-glow";

export default function ProductCard({
  children,
  className,
  style,
  disableHover = false,
}: {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  disableHover?: boolean;
}) {
  return (
    <div
      className={`flex flex-col relative transition-all duration-200 ${
        disableHover ? "" : "hover:scale-105"
      } shadow-[inset_0_0_50px_rgb(221_39_45_/_0.1)]`}
      style={style}
    >
      <div className="absolute w-full h-full -z-10">
        <BorderGlow
          animated
          borderRadius={5}
          className="w-full h-full backdrop-blur-md"
          fillOpacity={0}
          colors={[]}
        />
      </div>
      <div className={className ?? "pointer-events-none"}>{children}</div>
    </div>
  );
}
