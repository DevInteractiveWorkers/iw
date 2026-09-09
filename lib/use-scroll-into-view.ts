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

export function useScrollIntoView<T extends HTMLElement = HTMLElement>(
  options: UseScrollIntoViewOptions = {},
) {
  const {
    threshold = 0.2,
    behavior = "smooth",
    animationDuration = 700,
    exitDelay = 100,
    block = "directional",
    offset = 0,
    enabled = true,
    onChange,
  } = options;

  const elementRef = useRef<T | null>(null);

  const visibleRef = useRef(false);
  const animatingRef = useRef(false);

  const directionRef = useRef<"up" | "down">("down");
  const lastScrollYRef = useRef(0);

  const [isInView, setIsInView] = useState(false);

  /*
   * Track scroll direction
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
   * Observe target element
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

        if (animatingRef.current) return;

        /*
         * Entered viewport
         */
        if (isIntersecting && !visibleRef.current) {
          visibleRef.current = true;
          animatingRef.current = true;

          const rect = element.getBoundingClientRect();

          const currentScrollY = window.scrollY;

          const direction = directionRef.current;

          let targetScrollY: number;

          if (block === "directional") {
            if (direction === "down") {
              targetScrollY = currentScrollY + rect.top - offset;
            } else {
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
           * Keep the target inside the document.
           */
          const maxScroll =
            document.documentElement.scrollHeight - window.innerHeight;

          targetScrollY = Math.max(0, Math.min(targetScrollY, maxScroll));

          window.scrollTo({
            top: targetScrollY,
            behavior,
          });

          window.setTimeout(() => {
            animatingRef.current = false;
          }, animationDuration);

          return;
        }

        /*
         * Left viewport
         */
        if (!isIntersecting && visibleRef.current) {
          visibleRef.current = false;

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
