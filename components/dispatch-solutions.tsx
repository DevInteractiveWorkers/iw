"use client";

import { useState } from "react";
import { Icon, IconType } from "./feature-cards";
import PixelBlast from "./why-us/pixel-blast";

export interface DispatchSolutionsProps {
  title: string;
  content: string;
  icon: IconType;
}

export default function DispatchSolutionsCards({
  title,
  content,
  icon,
}: DispatchSolutionsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Expanded card behind the button */}
      <div
        aria-hidden={!isExpanded}
        className={`absolute left-1/2 top-0 flex
          max-h-[500px] w-[280px] -translate-x-1/2
          flex-col items-center justify-center
          rounded-xl border border-iw-red-2 bg-white p-5 pt-24
          transition-opacity duration-300
          ${isExpanded ? "opacity-100" : "pointer-events-none opacity-0"}`}
        style={{ zIndex: isExpanded ? 1000 : -1 }}
      >
        {/* Content stays clear of the button */}
        <label className="pointer-events-none z-10 text-center text-2xl font-semibold">
          {title}
        </label>

        <p className="pointer-events-none z-10 mt-3 text-center text-lg text-iw-red-2">
          {content}
        </p>

        {/* Pixel background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
          <PixelBlast
            variant="square"
            pixelSize={4}
            color="#dcdcdc"
            patternScale={2}
            patternDensity={1}
            pixelSizeJitter={0}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid={false}
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.5}
            edgeFade={0.4}
            transparent
          />
        </div>
      </div>

      {/* Button remains in normal flow and reserves its space */}
      <div className="relative z-[1001] flex items-center justify-center aspec">
        <button
          type="button"
          aria-expanded={isExpanded}
          aria-label={isExpanded ? `Collapse ${title}` : `Expand ${title}`}
          className="m-5 flex aspect-square items-center justify-center rounded-full bg-iw-red-2 p-4"
        >
          <Icon icon={icon} className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
