"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { whenIdle } from "./idle";
import { useIsMobile } from "@/lib/useMobile";

const loadGlobe = () => import("./globe");

const GlobePlaceholder = () => (
  <div className="h-screen w-full" aria-hidden="true" />
);

const IWGlobe = dynamic(loadGlobe, {
  ssr: false,
  loading: GlobePlaceholder,
});

const MIN_SECTION_WIDTH_RATIO = 0.5;

const MAX_OFFSET_PERCENT = 25;

export default function FollowGlobe({ dark = false }: { dark?: boolean }) {
  const [isDark, setIsDark] = useState(dark);
  const [mountGlobe, setMountGlobe] = useState(false);
  const globeRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const el = globeRef.current;
    if (!el) return;

    let cancelIdle: (() => void) | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        void loadGlobe();
        cancelIdle = whenIdle(() => setMountGlobe(true), 1500);
      },
      { rootMargin: "200px 0px" },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelIdle?.();
    };
  }, []);

  useEffect(() => {
    let frame = 0;
    let lastDark: boolean | undefined;
    let lastOffset: number | undefined;

    const update = () => {
      frame = 0;
      const globe = globeRef.current;
      if (!globe) return;

      const range = window.screen?.availHeight || window.innerHeight;
      const progress =
        range > 0 ? Math.min(Math.max(window.scrollY / range, 0), 1) : 1;
      const offset = MAX_OFFSET_PERCENT * (1 - progress);

      const bounds = globe.getBoundingClientRect();
      const minWidth = window.innerWidth * MIN_SECTION_WIDTH_RATIO;
      const sections = document.querySelectorAll<HTMLElement>(".bg-iw-red-2");

      let overlapsRed = false;
      for (let i = 0; i < sections.length && !overlapsRed; i++) {
        const el = sections[i];
        if (globe.contains(el)) continue;
        const rect = el.getBoundingClientRect();
        overlapsRed =
          rect.width >= minWidth &&
          rect.height > 0 &&
          rect.top < bounds.bottom &&
          rect.bottom > bounds.top &&
          rect.left < bounds.right &&
          rect.right > bounds.left;
      }

      const next = dark || overlapsRed;
      if (next !== lastDark) {
        lastDark = next;
        setIsDark(next);
      }

      if (offset !== lastOffset) {
        lastOffset = offset;
        globe.style.transform = `translateX(${offset}%)`;
      }
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    const resizeObserver = new ResizeObserver(schedule);
    resizeObserver.observe(document.body);
    schedule();

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      resizeObserver.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [dark]);

  return (
    <div className="fixed md:top-0 left-0 md:w-full h-full w-dvw overflow-x-hidden">
      <div
        ref={globeRef}
        className="top-0 left-0 bottom-0"
        style={{
          transform: isMobile
            ? "translateY(50%)"
            : `translateX(${MAX_OFFSET_PERCENT}%)`,
        }}
      >
        {mountGlobe ? (
          <IWGlobe dark={isDark} autoRotate={false} sway />
        ) : (
          <GlobePlaceholder />
        )}
      </div>
    </div>
  );
}
