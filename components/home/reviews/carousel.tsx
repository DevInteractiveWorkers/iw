"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";

interface CarouselProps {
  children: React.ReactNode;
  autoscroll?: boolean;
  controls?: boolean;
  reverseScroll?: boolean;
  onChange?: (index: number) => void;
  timer?: number;
  iteration?: "loop" | "once";
  autoscrollMode?: "paused" | "on-going";
  speed?: number;
  slides?: 1 | "all";
  stopOnHover?: boolean;
}

function CarouselControls({
  total,
  current,
  windowSize = 2,
  onSelect,
}: {
  total: number;
  current: number;
  windowSize?: number;
  onSelect: (index: number) => void;
}) {
  const start = Math.max(0, current - windowSize);
  const end = Math.min(total, current + windowSize);

  return (
    <div className="flex gap-3 my-5 justify-center">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Go to slide ${i + 1}`}
          aria-current={current === i}
          className={`w-2 h-2 rounded-full cursor-pointer transition-transform ${
            current === i
              ? "bg-white scale-100"
              : i < current - 1 || i > current + 1
                ? "bg-[#DD272C] scale-75"
                : "bg-[#DD272C] scale-90"
          } ${start > i || end < i ? "hidden" : ""}`}
          onClick={() => onSelect(i)}
        />
      ))}
    </div>
  );
}

export default function Carousel({
  children,
  autoscroll = false,
  controls = true,
  reverseScroll = false,
  onChange,
  timer = 3,
  iteration = "loop",
  autoscrollMode = "paused",
  speed = 50,
  slides = "all",
  stopOnHover = true,
}: CarouselProps) {
  const [current, setCurrent] = useState<number>(0);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const [restartToken, setRestartToken] = useState(0);
  const bumpRestart = () => setRestartToken((t) => t + 1);

  const dragStartXRef = useRef<number | null>(null);
  const draggingRef = useRef(false);

  const offsetRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const hoveredIndexRef = useRef<number | null>(null);

  const trackRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const childrenArray = React.Children.toArray(children);
  const carouselArray =
    autoscrollMode === "on-going"
      ? childrenArray.concat(childrenArray)
      : childrenArray;
  const total = childrenArray.length;
  const maxIndex = Math.max(0, total - 1);
  const safeCurrent = Math.min(Math.max(current, 0), maxIndex);

  const isPaused = stopOnHover && hoveredIndex !== null;

  useEffect(() => {
    if (onChange) onChange(safeCurrent);
  }, [safeCurrent, onChange]);

  useEffect(() => {
    hoveredIndexRef.current = hoveredIndex;
  }, [hoveredIndex]);

  const goToNext = useCallback(
    (wrap: boolean) => {
      setCurrent((c) => {
        if (c < maxIndex) return c + 1;
        return wrap ? 0 : c;
      });
    },
    [maxIndex],
  );

  const goToPrevious = useCallback(
    (wrap: boolean) => {
      setCurrent((c) => {
        if (c > 0) return c - 1;
        return wrap ? maxIndex : c;
      });
    },
    [maxIndex],
  );

  const advanceAuto = useCallback(() => {
    if (reverseScroll) goToPrevious(true);
    else goToNext(true);
  }, [reverseScroll, goToPrevious, goToNext]);

  useEffect(() => {
    if (!autoscroll || autoscrollMode !== "paused" || isPaused) return;

    if (iteration === "loop") {
      const id = setInterval(advanceAuto, timer * 1000);
      return () => clearInterval(id);
    }

    const id = setTimeout(advanceAuto, timer * 1000);
    return () => clearTimeout(id);
  }, [
    autoscroll,
    autoscrollMode,
    iteration,
    timer,
    isPaused,
    advanceAuto,
    restartToken,
  ]);

  useEffect(() => {
    if (!autoscroll || autoscrollMode !== "on-going") return;

    lastTimeRef.current = null;

    const step = (time: number) => {
      if (lastTimeRef.current == null) lastTimeRef.current = time;
      const delta = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      const paused = stopOnHover && hoveredIndexRef.current !== null;
      if (!paused && innerRef.current) {
        offsetRef.current += reverseScroll ? speed * delta : -speed * delta;

        const trackWidth = innerRef.current.scrollWidth / 2;
        if (reverseScroll) {
          if (offsetRef.current >= 0) offsetRef.current -= trackWidth;
        } else {
          if (offsetRef.current <= -trackWidth) offsetRef.current += trackWidth;
        }

        innerRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [autoscroll, autoscrollMode, reverseScroll, speed, stopOnHover]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (autoscrollMode === "on-going") return;
    dragStartXRef.current = e.clientX;
    draggingRef.current = true;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (autoscrollMode === "on-going") return;
    if (!draggingRef.current || dragStartXRef.current === null) return;

    const diff = e.clientX - dragStartXRef.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && safeCurrent > 0) {
        goToPrevious(false);
      } else if (diff < 0 && safeCurrent < maxIndex) {
        goToNext(false);
      }
      draggingRef.current = false;
      dragStartXRef.current = null;
      bumpRestart();
    }
  };

  const endDrag = () => {
    if (autoscrollMode === "on-going") return;
    draggingRef.current = false;
    dragStartXRef.current = null;
    bumpRestart();
  };

  const handleDotSelect = (i: number) => {
    setCurrent(i);
    bumpRestart();
  };

  return (
    <div
      className="w-full"
      onMouseLeave={() => stopOnHover && setHoveredIndex(null)}
    >
      <div
        className="w-full overflow-hidden"
        style={{ touchAction: "pan-y" }}
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
      >
        <div
          ref={innerRef}
          className="flex items-center"
          style={{
            ...(autoscrollMode === "on-going"
              ? {}
              : {
                  transform: `translateX(-${safeCurrent * 100}%)`,
                  transition: "transform 0.5s ease-in-out",
                }),
          }}
        >
          {carouselArray.map((child, index) => {
            const originalIndex = index % total;
            const isHoveredItem = hoveredIndex === originalIndex;
            return (
              <div
                key={index}
                onMouseEnter={() =>
                  stopOnHover && setHoveredIndex(originalIndex)
                }
                className={`shrink-0 flex items-center justify-center px-3 transition-transform duration-200 ${
                  isHoveredItem ? "scale-105" : ""
                }`}
                style={{
                  width: slides === 1 ? "100%" : "auto",
                }}
              >
                {child}
              </div>
            );
          })}
        </div>
      </div>

      {controls && autoscrollMode === "paused" && (
        <CarouselControls
          total={total}
          current={safeCurrent}
          onSelect={handleDotSelect}
        />
      )}
    </div>
  );
}
