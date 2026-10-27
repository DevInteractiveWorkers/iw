"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { useIsMobile } from "@/lib/useMobile";
import Icon from "./icon";

const PixelBlast = dynamic(() => import("./why-us/pixel-blast"), {
  ssr: false,
});

export interface DispatchSolutionsProps {
  title: string;
  content: string;
  icon: string;
}

function CardContent({
  title,
  content,
  icon,
}: Pick<DispatchSolutionsProps, "title" | "content"> & {
  icon?: string | false;
}) {
  return (
    <>
      {icon && (
        <div className="m-5 flex aspect-square items-center justify-center rounded-full bg-iw-red-2 p-4 z-10">
          <Icon icon={icon} className="w-6 h-6" />
        </div>
      )}
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
    </>
  );
}

export default function DispatchSolutionsCards({
  title,
  content,
  icon,
}: DispatchSolutionsProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useIsMobile();

  // Close the mobile modal with Escape
  useEffect(() => {
    if (!isMobile || !isExpanded) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsExpanded(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMobile, isExpanded]);

  if (isMobile) {
    return (
      <>
        <button
          type="button"
          aria-expanded={isExpanded}
          aria-label={`Expand ${title}`}
          onClick={() => setIsExpanded(true)}
          className="m-5 flex aspect-square items-center justify-center rounded-full bg-iw-red-2 p-4 translate-y-full"
        >
          <Icon icon={icon} className="w-6 h-6" />
        </button>

        {isExpanded &&
          createPortal(
            <div
              className="fixed inset-0 z-[1100] flex items-center justify-center bg-black/50 p-4"
              onClick={() => setIsExpanded(false)}
            >
              <div
                role="dialog"
                aria-modal="true"
                aria-label={title}
                onClick={(e) => e.stopPropagation()}
                className="relative flex max-h-[90vh] w-full max-w-[320px] flex-col items-center justify-center rounded-xl border border-iw-red-2 bg-white p-5 pt-14"
              >
                <button
                  type="button"
                  aria-label={`Close ${title}`}
                  onClick={() => setIsExpanded(false)}
                  className="absolute right-3 top-3 z-20 flex items-center justify-center rounded-full bg-iw-red-2 p-2"
                >
                  <X className="h-5 w-5 text-white" />
                </button>

                <CardContent icon={icon} title={title} content={content} />
              </div>
            </div>,
            document.body,
          )}
      </>
    );
  }

  return (
    <div
      className="relative flex items-center justify-center translate-y-1/2"
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
        <CardContent title={title} content={content} />
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
