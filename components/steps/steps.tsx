"use client";

import { useCallback, useContext, useEffect, useRef, useState } from "react";
import Step, { StepProp } from "./step";
import { StepsContext } from "./steps-context";

const WHEEL_SPEED = 3;
const EASING = 0.12;

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Below `md` the steps are a plain vertical stack; from `md` up they are the
// pinned horizontal strip driven by page scroll.
const isDesktop = () => window.matchMedia("(min-width: 768px)").matches;

function getOffsets(el: HTMLElement) {
  const children = Array.from(el.children) as HTMLElement[];
  const origin = children[0]?.offsetLeft ?? 0;
  return children.map((child) => child.offsetLeft - origin);
}

export default function Steps({
  id = "steps",
  intro,
  steps,
}: {
  id?: string;
  intro?: React.ReactNode;
  steps: Omit<StepProp, "index">[];
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const raf = useRef<number | null>(null);
  const pos = useRef(0);
  const target = useRef(0);
  const animateTo = useRef<(value: number) => void>(() => {});
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [slide, setSlide] = useState(0);
  const offset = intro ? 1 : 0;

  const updateEdges = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    if (!isDesktop()) {
      // Stacked: the active step is the last one whose top passed mid-screen.
      const tops = Array.from(el.children).map(
        (child) => child.getBoundingClientRect().top,
      );
      let current = 0;
      tops.forEach((top, i) => {
        if (top <= window.innerHeight / 2) current = i;
      });
      setCanScrollLeft(false);
      setCanScrollRight(false);
      setSlide(current);
      return;
    }

    setCanScrollLeft(el.scrollLeft > 1);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);

    const offsets = getOffsets(el);
    let nearest = 0;
    offsets.forEach((o, i) => {
      if (
        Math.abs(o - el.scrollLeft) < Math.abs(offsets[nearest] - el.scrollLeft)
      )
        nearest = i;
    });
    setSlide(nearest);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    const root = rootRef.current;
    if (!el || !root) return;

    const maxScroll = () => Math.max(el.scrollWidth - el.clientWidth, 0);
    const clamp = (v: number) => Math.min(Math.max(v, 0), maxScroll());

    // The root is as tall as the viewport plus the distance the strip has to
    // travel; the strip is pinned (sticky) while that distance is scrolled, so
    // ordinary page scrolling drives it in both directions.
    const measure = () => {
      root.style.height = isDesktop()
        ? `calc(100dvh + ${maxScroll() / WHEEL_SPEED}px)`
        : "";
      updateEdges();
    };

    const tick = () => {
      const diff = target.current - pos.current;
      if (Math.abs(diff) < 0.5) {
        pos.current = target.current;
        el.scrollLeft = pos.current;
        raf.current = null;
        return;
      }
      pos.current += diff * EASING;
      el.scrollLeft = pos.current;
      raf.current = requestAnimationFrame(tick);
    };

    animateTo.current = (value: number) => {
      if (prefersReducedMotion()) {
        pos.current = target.current = clamp(value);
        el.scrollLeft = pos.current;
        return;
      }
      if (raf.current === null) pos.current = el.scrollLeft;
      target.current = clamp(value);
      if (raf.current === null) raf.current = requestAnimationFrame(tick);
    };

    const onPageScroll = () => {
      if (!isDesktop()) {
        updateEdges();
        return;
      }
      animateTo.current(-root.getBoundingClientRect().top * WHEEL_SPEED);
    };

    // Focus moving to an off-screen step scrolls the strip itself; follow it
    // with the page so the two never disagree.
    const onScroll = () => {
      if (!isDesktop() || raf.current !== null) return;
      pos.current = el.scrollLeft;
      target.current = el.scrollLeft;
      const top = pageTopFor(el.scrollLeft);
      if (Math.abs(top - window.scrollY) > 1) {
        window.scrollTo({ top, behavior: "instant" });
      }
    };

    measure();
    onPageScroll();
    const observer = new ResizeObserver(() => {
      measure();
      onPageScroll();
    });
    observer.observe(el);
    Array.from(el.children).forEach((child) => observer.observe(child));

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", onPageScroll, { passive: true });
    return () => {
      observer.disconnect();
      if (raf.current !== null) cancelAnimationFrame(raf.current);
      raf.current = null;
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onPageScroll);
    };
  }, [steps.length, updateEdges]);

  // Page scroll position at which the strip sits at horizontal position `x`.
  const pageTopFor = (x: number) => {
    const root = rootRef.current;
    if (!root) return 0;
    return window.scrollY + root.getBoundingClientRect().top + x / WHEEL_SPEED;
  };

  const scrollStripTo = (value: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const max = Math.max(el.scrollWidth - el.clientWidth, 0);
    const x = Math.min(Math.max(value, 0), max);
    window.scrollTo({
      top: pageTopFor(x),
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  };

  const goTo = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    if (!isDesktop()) {
      const i = Math.min(Math.max(index + offset, 0), el.children.length - 1);
      el.children[i]?.scrollIntoView({
        behavior: prefersReducedMotion() ? "auto" : "smooth",
        block: "start",
      });
      return;
    }
    const offsets = getOffsets(el);
    const i = Math.min(Math.max(index + offset, 0), offsets.length - 1);
    scrollStripTo(offsets[i] ?? 0);
  };

  // Lands on the next/previous step's left edge instead of a viewport-wide jump.
  const scrollByStep = (direction: -1 | 1) => {
    const el = scrollRef.current;
    if (!el) return;
    const max = Math.max(el.scrollWidth - el.clientWidth, 0);
    const base = raf.current === null ? el.scrollLeft : target.current;
    const stops = getOffsets(el).map((o) => Math.min(o, max));
    const next =
      direction === 1
        ? stops.find((o) => o > base + 1)
        : [...stops].reverse().find((o) => o < base - 1);
    if (next !== undefined) scrollStripTo(next);
  };

  // Lets code outside this component (via <StepsProvider>) jump to a step.
  const ctx = useContext(StepsContext);
  const goToRef = useRef(goTo);
  goToRef.current = goTo;
  const register = ctx?.register;
  const report = ctx?.report;

  useEffect(() => {
    register?.({ goTo: (i) => goToRef.current(i) });
    return () => register?.(null);
  }, [register]);

  useEffect(() => {
    report?.(Math.max(slide - offset, 0), steps.length);
  }, [report, slide, offset, steps.length]);

  return (
    <div ref={rootRef} className="relative md:h-dvh">
      <div className="group md:sticky md:top-0 md:h-dvh md:overflow-hidden">
        <div
          ref={scrollRef}
          onScroll={updateEdges}
          className="px-[clamp(1rem,8vw,50rem)] flex flex-col gap-12 max-md:py-12 md:flex-row md:h-full md:items-center md:overflow-x-hidden"
        >
          {intro && <div className="flex shrink-0 w-full">{intro}</div>}
          {steps.map((step, i) => (
            <Step id={id} key={i} index={i + 1} {...step} />
          ))}
        </div>

        <Progress
          count={steps.length}
          active={slide - offset}
          onSelect={goTo}
        />

        <ArrowButton
          direction="left"
          visible={canScrollLeft}
          onClick={() => scrollByStep(-1)}
        />
        <ArrowButton
          direction="right"
          visible={canScrollRight}
          onClick={() => scrollByStep(1)}
        />
      </div>
    </div>
  );
}

// Dots joined by lines; filled ones are the steps already reached.
function Progress({
  count,
  active,
  onSelect,
}: {
  count: number;
  active: number;
  onSelect: (index: number) => void;
}) {
  if (count < 2) return null;

  return (
    <div className="absolute inset-x-0 bottom-20 flex items-center justify-center z-[1000] max-md:hidden">
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="flex items-center text-white">
          {i > 0 && (
            <span
              className={`h-0.5 w-8 bg-current transition-opacity duration-300 md:w-14 ${
                i <= active ? "opacity-100" : "opacity-25"
              }`}
            />
          )}
          <button
            type="button"
            aria-label={`Go to step ${i + 1}`}
            aria-current={i === active ? "step" : undefined}
            onClick={() => onSelect(i)}
            className={`relative size-3 rounded-full bg-current transition-all duration-300 after:absolute after:-inset-3 after:content-[''] ${
              i <= active ? "opacity-100" : "opacity-25"
            } ${i === active ? "scale-150" : ""}`}
          />
        </div>
      ))}
    </div>
  );
}

function ArrowButton({
  direction,
  visible,
  onClick,
}: {
  direction: "left" | "right";
  visible: boolean;
  onClick: () => void;
}) {
  const isLeft = direction === "left";

  return (
    <button
      type="button"
      aria-label={isLeft ? "Previous steps" : "Next steps"}
      onClick={onClick}
      tabIndex={visible ? 0 : -1}
      className={`absolute top-1/2 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-iw-red-2 shadow-lg transition-opacity duration-200 hover:scale-105 focus-visible:opacity-100 md:flex ${
        isLeft ? "left-2" : "right-2"
      } ${
        visible
          ? "opacity-0 group-hover:opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        className="size-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d={isLeft ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
      </svg>
    </button>
  );
}
