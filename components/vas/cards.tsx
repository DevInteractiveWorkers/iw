"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useIsMobile } from "@/lib/useMobile";
import ProductCard from "../product-card";
import BorderGlow from "../border-glow/border-glow";

// Flip timing: the front/back swap happens at the midpoint, when the card is edge-on
const FLIP_MS = 700;
const FLIP_EASE = "cubic-bezier(0.45, 0.05, 0.25, 1)";
// Fades the last 20% of the box when positioned at "0 100%" with a 200% mask height
const FADE_MASK = "linear-gradient(to bottom, black 90%, transparent 100%)";
// On mobile the card flips once its bottom clears this % of the viewport's bottom edge
const FLIP_BOTTOM_INSET = 20;

interface VACardProps {
  children?: React.ReactNode;
  imageSrc: string;
  className?: string;
  style?: React.CSSProperties;
  content?: string | React.ReactNode;
}

const VACard = ({ children, imageSrc, className, content }: VACardProps) => {
  const hasContent = content ? true : false;
  const isMobile = useIsMobile();
  const cardRef = useRef<HTMLDivElement>(null);
  // Single source of truth for the flip: set by hover on desktop and by
  // viewport entry on mobile.
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const canFlip = hasContent && isFlipped;

  useEffect(() => {
    const card = cardRef.current;
    if (!isMobile || !hasContent || !card) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsFlipped(entry.isIntersecting),
      // Shrinking the viewport's bottom edge means the card only counts as
      // intersecting once it is fully visible and its bottom (the h3 label)
      // is above the bottom FLIP_BOTTOM_INSET of the screen. It flips back
      // when it leaves that zone, like hover does on desktop.
      { rootMargin: `0px 0px -${FLIP_BOTTOM_INSET}% 0px`, threshold: 1 },
    );

    observer.observe(card);

    return () => observer.disconnect();
  }, [isMobile, hasContent]);

  return (
    <div
      ref={cardRef}
      className={`group/card ${className}`}
      style={{ perspective: "1200px" }}
      // On touch devices hover events are emulated on tap and would undo the
      // scroll-triggered flip, so hover only drives the flip on desktop.
      onMouseEnter={() => !isMobile && setIsFlipped(true)}
      onMouseLeave={() => !isMobile && setIsFlipped(false)}
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
          transition: `transform ${FLIP_MS}ms ${FLIP_EASE}, box-shadow 300ms`,
          willChange: "transform",
        }}
      >
        <div
          className={`relative w-full aspect-[275/341] -mt-[25%] overflow-hidden pointer-events-none ${canFlip ? "z-0" : "z-10"}`}
          style={{
            transition: [
              `z-index 0s linear ${FLIP_MS / 2}ms`,
              `mask-position ${FLIP_MS}ms ${FLIP_EASE}`,
              `-webkit-mask-position ${FLIP_MS}ms ${FLIP_EASE}`,
            ].join(", "),
            // mask-image can't be interpolated, so keep a double-height gradient and slide it:
            // top half is solid (no fade), bottom half ends in the 80% -> 100% fade of the box
            maskImage: FADE_MASK,
            WebkitMaskImage: FADE_MASK,
            maskSize: "100% 200%",
            WebkitMaskSize: "100% 200%",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: canFlip ? "0 100%" : "0 0",
            WebkitMaskPosition: canFlip ? "0 100%" : "0 0",
          }}
        >
          <Image
            className={`object-cover object-top select-none transition-all ${canFlip && "scale-90 mt-[25%] opacity-50"}`}
            style={{
              // Blur the image itself instead of a backdrop-filter, which pops in instead of animating
              filter: canFlip ? "blur(12px)" : "blur(0px)",
              transitionDuration: `${FLIP_MS}ms`,
              transitionTimingFunction: FLIP_EASE,
            }}
            src={imageSrc}
            alt="packages"
            fill
          />
        </div>
        {hasContent && (
          <ProductCard
            glass
            backdropBlur={false}
            className="p-4 flex h-full w-full items-center justify-center"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              transform: "rotateY(-180deg)",
              opacity: canFlip ? 1 : 0,
              // Fade in once the card passes edge-on; fade out right away when flipping back
              transition: canFlip
                ? `opacity ${FLIP_MS / 2}ms ease-out ${FLIP_MS / 2.5}ms`
                : `opacity ${FLIP_MS / 3}ms ease-in`,
            }}
          >
            {content}
          </ProductCard>
        )}
        <div
          className={`relative text-center font-medium text-[clamp(1rem,1vw,1.5rem)] min-h-[4.5rem] flex items-center justify-center px-4 ${
            canFlip && "opacity-0"
          } transition-opacity duration-700 pointer-events-none`}
        >
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
