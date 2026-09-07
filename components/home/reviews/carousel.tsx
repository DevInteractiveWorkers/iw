"use client";
import React, { useState, useEffect, useRef } from "react";

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
}: CarouselProps) {
  const [current, setCurrent] = useState<number>(0);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragging, setDragging] = useState<boolean>(false);
  const [offset, setOffset] = useState(0);

  const trackRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const requestRef = useRef<number | null>(null);

  const childrenArray = React.Children.toArray(children);
  const carouselArray =
    autoscrollMode === "on-going"
      ? childrenArray.concat(childrenArray)
      : childrenArray;
  const total = childrenArray.length;
  const maxIndex = Math.max(0, total - 1);
  const safeCurrent = Math.min(Math.max(current, 0), maxIndex);

  useEffect(() => {
    if (onChange) onChange(safeCurrent);
  }, [safeCurrent, onChange]);

  const clearTimers = () => {
    clearInterval(intervalRef.current!);
    clearTimeout(timeoutRef.current!);
    if (requestRef.current) cancelAnimationFrame(requestRef.current);
  };

  const startAutoscroll = () => {
    if (!autoscroll) return;
    clearTimers();

    if (autoscrollMode === "paused") {
      if (iteration === "loop") {
        intervalRef.current = setInterval(() => {
          setCurrent((c) =>
            reverseScroll
              ? c > 0
                ? c - 1
                : maxIndex
              : c < maxIndex
                ? c + 1
                : 0,
          );
        }, timer * 1000);
      } else if (iteration === "once") {
        timeoutRef.current = setTimeout(() => {
          setCurrent((c) =>
            reverseScroll
              ? c > 0
                ? c - 1
                : maxIndex
              : c < maxIndex
                ? c + 1
                : 0,
          );
        }, timer * 1000);
      }
    } else if (autoscrollMode === "on-going") {
      let lastTime = performance.now();
      const animate = (time: number) => {
        const delta = (time - lastTime) / 1000;
        lastTime = time;
        setOffset((prev) =>
          reverseScroll ? prev + speed * delta : prev - speed * delta,
        );
        requestRef.current = requestAnimationFrame(animate);
      };
      requestRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    startAutoscroll();
    return clearTimers;
  }, [
    autoscroll,
    autoscrollMode,
    iteration,
    maxIndex,
    reverseScroll,
    timer,
    speed,
  ]);

  const resetAutoscroll = () => {
    if (autoscroll || iteration === "loop") {
      startAutoscroll();
    }
  };

  const handleStart = (clientX: number) => {
    if (autoscrollMode === "on-going") return;
    setDragStartX(clientX);
    setDragging(true);
    clearTimers();
  };

  const handleMove = (clientX: number) => {
    if (autoscrollMode === "on-going") return;
    if (!dragging || dragStartX === null) return;
    const diff = clientX - dragStartX;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && safeCurrent > 0) {
        setCurrent((c) => c - 1);
      } else if (diff < 0 && safeCurrent < maxIndex) {
        setCurrent((c) => c + 1);
      }
      setDragging(false);
      setDragStartX(null);
      resetAutoscroll();
    }
  };

  const handleEnd = () => {
    if (autoscrollMode === "on-going") return;
    setDragging(false);
    setDragStartX(null);
    resetAutoscroll();
  };

  useEffect(() => {
    if (autoscrollMode !== "on-going" || !trackRef.current) return;
    const trackWidth = trackRef.current.scrollWidth / 2;
    if (offset <= -trackWidth || offset >= trackWidth) {
      setOffset(0);
    }
  }, [offset, autoscrollMode]);

  const windowSize = 2;
  const start = Math.max(0, safeCurrent - windowSize);
  const end = Math.min(total, safeCurrent + windowSize);

  return (
    <div className="w-full">
      <div
        className="w-full overflow-hidden"
        ref={trackRef}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
      >
        <div
          className="flex items-center"
          style={{
            transform:
              autoscrollMode === "on-going"
                ? `translateX(${offset}px)`
                : `translateX(-${safeCurrent * 100}%)`,
            transition:
              autoscrollMode === "on-going" || dragging
                ? "none"
                : "transform 0.5s ease-in-out",
          }}
        >
          {carouselArray.map((child, index) => (
            <div
              key={index}
              className="shrink-0 flex items-center justify-center px-3"
              style={{
                width: slides === 1 ? "100%" : "auto",
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {controls && autoscrollMode === "paused" && (
        <div className="flex gap-3 my-5 justify-center">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full cursor-pointer transition-transform ${
                safeCurrent === i
                  ? "bg-white scale-100"
                  : i < safeCurrent - 1 || i > safeCurrent + 1
                    ? "bg-[#DD272C] scale-75"
                    : "bg-[#DD272C] scale-90"
              } ${start > i || end < i ? "hidden" : ""}`}
              onClick={() => {
                setCurrent(i);
                resetAutoscroll();
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
