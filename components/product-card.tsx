"use client";

import BorderGlow from "./border-glow/border-glow";

export default function ProductCard({
  children,
  className,
  style,
  disableHover = false, // 1. Add the new prop with a default value
}: {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  disableHover?: boolean; // 2. Add the type definition
}) {
  return (
    <div
      // 3. Inject the hover class only if disableHover is false
      className={`flex flex-col relative transition-all duration-200 ${
        disableHover ? "" : "hover:scale-105"
      }`}
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
