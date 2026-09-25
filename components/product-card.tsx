"use client";

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
  return (
    <div
      className={`flex flex-col relative transition-all duration-200 ${
        disableHover ? "" : "hover:scale-105 hover:-translate-y-5"
      } dark:shadow-[inset_0_0_50px_rgb(221_39_45_/_0.1)] shadow-[inset_0_0_50px_rgb(221_39_45_/_0.5)] rounded text-white
      after:rounded-[5px] after:backdrop-blur-md after:absolute after:pointer-events-none after:top-0 after:left-0 after:w-full after:h-full after:-z-10
      after:bg-gradient-to-b  dark:after:from-[rgb(221_39_45_/_0.5)] dark:after:to-[rgb(128_2_2_/_0.5)] 
      after:from-[rgb(221_39_45_/_0.5)] after:to-[rgb(133_24_27_/_0.7)]`}
      style={{ borderRadius: 5, ...style }}
    >
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
