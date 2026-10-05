"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { whenIdle } from "./idle";
import { useIsMobile } from "@/lib/useMobile";

/** Same promise for prefetching and for `next/dynamic`, so the chunk loads once. */
const loadGlobe = () => import("./globe");

/** Reserves the globe's exact footprint so nothing shifts when it mounts. */
const GlobePlaceholder = () => (
  <div className="h-screen w-full" aria-hidden="true" />
);

// `react-globe.gl` touches `window` on import and is heavy, so it is
// client-only and split into its own chunk.
const IWGlobe = dynamic(loadGlobe, {
  ssr: false,
  loading: GlobePlaceholder,
});

/**
 * Only full-bleed sections count as a background. Small red decorations
 * (icon circles, cards) narrower than this fraction of the viewport are ignored.
 */
const MIN_SECTION_WIDTH_RATIO = 0.5;

/** Horizontal offset (as % of the globe's width) at the very top of the page. */
const MAX_OFFSET_PERCENT = 25;

export default function FollowGlobe({ dark = false }: { dark?: boolean }) {
  const [isDark, setIsDark] = useState(dark);
  const [mountGlobe, setMountGlobe] = useState(false);
  const globeRef = useRef<HTMLDivElement>(null);

  // Mount the globe once its slot is near the viewport and the main thread is idle.
  useEffect(() => {
    const el = globeRef.current;
    if (!el) return;

    let cancelIdle: (() => void) | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        void loadGlobe(); // start downloading the chunk right away
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

  // Background detection + scroll-driven position, coalesced to one read per frame.
  useEffect(() => {
    let frame = 0;
    let lastDark: boolean | undefined;
    let lastOffset: number | undefined;

    const update = () => {
      frame = 0;
      const globe = globeRef.current;
      if (!globe) return;

      // 25% at y = 0, easing linearly to 0% at one screen height of scroll.
      const range = window.screen?.availHeight || window.innerHeight;
      const progress =
        range > 0 ? Math.min(Math.max(window.scrollY / range, 0), 1) : 1;
      const offset = MAX_OFFSET_PERCENT * (1 - progress);

      // Reads first; the single style write happens at the end of the frame.
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

      // Applied directly to the element: tracks scroll without re-rendering.
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
    // Sections can move without a scroll (lazy content, images loading).
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

  const isMobile = useIsMobile();

  return (
    <div className="fixed top-0 left-0 md:w-full h-full w-dvw overflow-x-hidden">
      <div
        ref={globeRef}
        className="top-0 left-0 bottom-0"
        style={{
          transform: isMobile ? "none" : `translateX(${MAX_OFFSET_PERCENT}%)`,
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
