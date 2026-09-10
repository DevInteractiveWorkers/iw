"use client";

import { useEffect, useRef, useState } from "react";

interface UseScrollIntoViewOptions {
  threshold?: number;
  behavior?: ScrollBehavior;
  animationDuration?: number;
  exitDelay?: number;
  block?: ScrollLogicalPosition | "directional";
  offset?: number;
  enabled?: boolean;
  onChange?: (isVisible: boolean) => void;
}

/*
 * Shared between ALL instances of this hook.
 *
 * This is what prevents:
 *
 * IWVideo -> Stats -> Reviews -> ...
 *
 * from all trying to snap during the same scroll animation.
 */
let globalScrollLockUntil = 0;

export function useScrollIntoView<T extends HTMLElement = HTMLElement>(
  options: UseScrollIntoViewOptions = {},
) {
  const {
    threshold = 0.2,
    behavior = "smooth",
    animationDuration = 800,
    exitDelay = 100,
    block = "directional",
    offset = 0,
    enabled = true,
    onChange,
  } = options;

  const elementRef = useRef<T | null>(null);

  /*
   * Whether THIS element is currently considered visible.
   */
  const visibleRef = useRef(false);

  /*
   * Prevent this instance from triggering repeatedly.
   */
  const animatingRef = useRef(false);

  /*
   * Tracks whether this element has already been seen during
   * the current scroll movement.
   *
   * This is important when another section is snapping.
   */
  const enteredDuringLockRef = useRef(false);

  const directionRef = useRef<"up" | "down">("down");
  const lastScrollYRef = useRef(0);

  const [isInView, setIsInView] = useState(false);

  /*
   * ---------------------------------------------------------
   * Scroll direction
   * ---------------------------------------------------------
   */
  useEffect(() => {
    if (!enabled) return;

    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY === lastScrollYRef.current) return;

      directionRef.current = currentY > lastScrollYRef.current ? "down" : "up";

      lastScrollYRef.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [enabled]);

  /*
   * ---------------------------------------------------------
   * Intersection observer
   * ---------------------------------------------------------
   */
  useEffect(() => {
    if (!enabled) return;

    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;

        setIsInView(isIntersecting);
        onChange?.(isIntersecting);

        /*
         * -----------------------------------------------------
         * Element entered viewport
         * -----------------------------------------------------
         */
        if (isIntersecting && !visibleRef.current) {
          visibleRef.current = true;

          /*
           * If another section is currently performing
           * an automatic scroll, DO NOT start another one.
           *
           * We still mark this element as visible so that it
           * doesn't immediately trigger after the lock expires.
           */
          if (Date.now() < globalScrollLockUntil) {
            enteredDuringLockRef.current = true;
            return;
          }

          if (animatingRef.current) return;

          animatingRef.current = true;

          /*
           * Lock ALL other useScrollIntoView instances.
           *
           * Give the browser a little extra time beyond the
           * actual smooth-scroll animation to settle.
           */
          globalScrollLockUntil = Date.now() + animationDuration + 150;

          const rect = element.getBoundingClientRect();

          const currentScrollY = window.scrollY;

          const direction = directionRef.current;

          let targetScrollY: number;

          /*
           * ---------------------------------------------------
           * Directional positioning
           * ---------------------------------------------------
           */
          if (block === "directional") {
            if (direction === "down") {
              /*
               * Scrolling down:
               *
               *   ┌────────────── viewport
               *   │
               *   │  offset
               *   │
               *   │  ELEMENT
               *   │
               */
              targetScrollY = currentScrollY + rect.top - offset;
            } else {
              /*
               * Scrolling up:
               *
               *   │  ELEMENT
               *   │
               *   │  offset
               *   │
               *   └────────────── viewport
               */
              targetScrollY =
                currentScrollY + rect.bottom - window.innerHeight + offset;
            }
          } else {
            switch (block) {
              case "start":
                targetScrollY = currentScrollY + rect.top - offset;
                break;

              case "center":
                targetScrollY =
                  currentScrollY +
                  rect.top -
                  (window.innerHeight - rect.height) / 2;
                break;

              case "end":
                targetScrollY =
                  currentScrollY + rect.bottom - window.innerHeight + offset;
                break;

              default:
                targetScrollY = currentScrollY;
            }
          }

          /*
           * Don't scroll outside the document.
           */
          const maxScroll =
            document.documentElement.scrollHeight - window.innerHeight;

          targetScrollY = Math.max(0, Math.min(targetScrollY, maxScroll));

          window.scrollTo({
            top: targetScrollY,
            behavior,
          });

          /*
           * Release THIS instance after the animation.
           */
          window.setTimeout(() => {
            animatingRef.current = false;
          }, animationDuration + 150);

          return;
        }

        /*
         * -----------------------------------------------------
         * Element left viewport
         * -----------------------------------------------------
         */
        if (!isIntersecting && visibleRef.current) {
          visibleRef.current = false;

          enteredDuringLockRef.current = false;

          window.setTimeout(() => {
            animatingRef.current = false;
          }, exitDelay);
        }
      },
      {
        threshold,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [
    enabled,
    threshold,
    behavior,
    animationDuration,
    exitDelay,
    block,
    offset,
    onChange,
  ]);

  return {
    ref: elementRef,
    isInView,
  };
}
