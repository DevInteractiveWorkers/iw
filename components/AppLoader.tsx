"use client";

import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "loaded";
const SAFETY_TIMEOUT_MS = 8000;
const HOLD_MS = 150;
const FADE_MS = 700;

const WEIGHTS = {
  dom: 20,
  fonts: 25,
  load: 35,
  images: 10,
  app: 10,
} as const;

type Step = keyof typeof WEIGHTS;
const STEP_COUNT = Object.keys(WEIGHTS).length;

const CRITICAL_IMAGES = 'img[data-critical], img[fetchpriority="high"]';

type Phase = "loading" | "hiding" | "done";

export default function AppLoader({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<Phase>("loading");
  const barRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let alreadyLoaded = false;
    try {
      alreadyLoaded = sessionStorage.getItem(STORAGE_KEY) === "true";
    } catch {}

    if (alreadyLoaded) {
      setPhase("done");
      return;
    }

    const completed = new Set<Step>();
    const timers = new Set<number>();
    const cleanups: Array<() => void> = [];
    let frame = 0;
    let target = 0;
    let shown = 0;
    let finished = false;
    let disposed = false;

    const later = (fn: () => void, ms: number) => {
      const id = window.setTimeout(() => {
        timers.delete(id);
        fn();
      }, ms);
      timers.add(id);
    };

    const listen = (el: EventTarget, type: string, fn: () => void) => {
      el.addEventListener(type, fn, { once: true });
      cleanups.push(() => el.removeEventListener(type, fn));
    };

    const hide = () => {
      setPhase("hiding");
      later(() => {
        try {
          sessionStorage.setItem(STORAGE_KEY, "true");
        } catch {}
        setPhase("done");
      }, FADE_MS);
    };

    const paint = () => {
      frame = 0;
      shown = Math.min(target, shown + Math.max(1, (target - shown) * 0.2));
      const value = Math.round(shown);
      if (barRef.current) barRef.current.style.width = `${value}%`;
      if (labelRef.current) labelRef.current.textContent = `${value}%`;

      if (shown < target) {
        frame = requestAnimationFrame(paint);
      } else if (finished && target === 100) {
        later(hide, HOLD_MS);
      }
    };

    const schedulePaint = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const finish = () => {
      if (finished) return;
      finished = true;
      target = 100;
      schedulePaint();
    };

    const complete = (step: Step) => {
      if (disposed || finished || completed.has(step)) return;
      completed.add(step);
      target = Math.min(100, target + WEIGHTS[step]);
      schedulePaint();
      if (completed.size === STEP_COUNT) finish();
    };

    later(finish, SAFETY_TIMEOUT_MS);

    if (document.readyState !== "loading") complete("dom");
    else listen(document, "DOMContentLoaded", () => complete("dom"));

    if (document.fonts?.ready) {
      document.fonts.ready.then(
        () => complete("fonts"),
        () => complete("fonts"),
      );
    } else {
      complete("fonts");
    }

    if (document.readyState === "complete") complete("load");
    else listen(window, "load", () => complete("load"));

    const pending = Array.from(
      document.querySelectorAll<HTMLImageElement>(CRITICAL_IMAGES),
    ).filter((img) => !img.complete);
    if (pending.length === 0) {
      complete("images");
    } else {
      let remaining = pending.length;
      const settle = () => {
        if (--remaining === 0) complete("images");
      };
      pending.forEach((img) => {
        listen(img, "load", settle);
        listen(img, "error", settle);
      });
    }

    complete("app");

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      timers.forEach((id) => clearTimeout(id));
      cleanups.forEach((fn) => fn());
    };
  }, []);

  const loading = phase === "loading";

  return (
    <>
      {phase !== "done" && (
        <div
          role="status"
          aria-label="Loading"
          className={`
            fixed inset-0 z-[9999]
            bg-white
            text-black
            flex items-end justify-start
            transition-opacity duration-700
            [html[data-loaded]_&]:hidden
            ${loading ? "opacity-100" : "opacity-0 pointer-events-none"}
          `}
        >
          <div
            ref={barRef}
            className="
              bg-iw-red-1
              fixed
              left-0
              bottom-0
              h-[50px]
              w-0
              transition-[width]
              duration-75
              ease-linear
            "
          />
          <div className="flex flex-col items-center gap-6">
            <span
              ref={labelRef}
              className="
                lg:text-[clamp(6rem,5vw,7rem)]
                md:text-[clamp(4rem,4vw,5rem)]
                text-[clamp(2rem,8vw,3rem)]
                font-medium
                flex
                w-max
                items-center
                justify-center
                z-10
                px-6
              "
            >
              0%
            </span>
          </div>
        </div>
      )}

      <main
        id="app"
        aria-busy={loading}
        className={`
          w-full
          transition-opacity
          duration-700
          [html[data-loaded]_&]:opacity-100
          ${loading ? "opacity-0" : "opacity-100"}
        `}
      >
        {children}
      </main>
    </>
  );
}
