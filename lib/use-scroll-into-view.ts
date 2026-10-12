"use client";

import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "./useMobile";

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
 * This prevents multiple sections from trying to snap
 * during the same scroll animation.
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
    enabled = false,
    onChange,
  } = options;

  const isMobile = useIsMobile();

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
   * Tracks whether this element entered during
   * another section's scroll lock.
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
    /*
     * Completely disable the scroll behavior on mobile.
     */
    if (!enabled || isMobile) return;

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
  }, [enabled, isMobile]);

  /*
   * ---------------------------------------------------------
   * Intersection observer
   * ---------------------------------------------------------
   */
  useEffect(() => {
    /*
     * Completely disable the observer on mobile.
     */
    if (!enabled || isMobile) {
      /*
       * Reset the state when switching from desktop
       * to mobile.
       */
      if (isMobile) {
        visibleRef.current = false;
        animatingRef.current = false;
        enteredDuringLockRef.current = false;
        setIsInView(false);
      }

      return;
    }

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
           * Another section is currently performing
           * an automatic scroll.
           *
           * Do not start another scroll.
           */
          if (Date.now() < globalScrollLockUntil) {
            enteredDuringLockRef.current = true;
            return;
          }

          if (animatingRef.current) return;

          animatingRef.current = true;

          /*
           * Lock ALL instances of this hook.
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
           * Release this instance after the animation.
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
    isMobile,
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
