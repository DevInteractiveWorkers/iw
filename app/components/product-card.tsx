"use client";

import BorderGlow from "./border-glow/border-glow";

export default function ProductCard({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="flex flex-col hover:scale-105 transition-all duration-200 relative">
      <div className="absolute w-full h-full -z-10">
        <BorderGlow
          animated
          borderRadius={5}
          className="w-full h-full backdrop-blur-sm"
          backgroundColor="rgb(221 39 45 / 0.2)"
          fillOpacity={0}
          colors={[]}
        />
      </div>
      <div className={className ?? "pointer-events-none"}>{children}</div>
    </div>
  );
}
