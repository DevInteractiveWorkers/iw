"use client";

import { useEffect, useState } from "react";

export default function AppLoader({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(false);
  const [hideLoader, setHideLoader] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const alreadyVisited = sessionStorage.getItem("loaded");

    if (alreadyVisited) return;

    setShowLoader(true);

    const duration = 2200;
    const startTime = performance.now();

    let animationFrame: number;

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const normalized = Math.min(elapsed / duration, 1);

      // Ease out
      const eased = normalized === 1 ? 1 : 1 - Math.pow(2, -10 * normalized);

      const value = Math.floor(eased * 100);

      setProgress(value);

      if (normalized < 1) {
        animationFrame = requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);

        // Let the 100% state be visible briefly
        setTimeout(() => {
          setHideLoader(true);

          // Remove loader after fade animation
          setTimeout(() => {
            setShowLoader(false);
            sessionStorage.setItem("loaded", "true");
          }, 700);
        }, 150);
      }
    };

    animationFrame = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      {showLoader && (
        <div
          className={`
            fixed inset-0 z-[9999]
            bg-black
            flex items-end justify-start
            transition-opacity duration-700
            ${hideLoader ? "opacity-0" : "opacity-100"}
          `}
        >
          <div
            className="
              bg-iw-red-1
              fixed
              left-0
              bottom-0
              h-[50px]
              transition-[width]
              duration-75
              ease-linear
            "
            style={{
              width: `${progress}%`,
            }}
          />
          <div className="flex flex-col items-center gap-6">
            <span
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
              {progress}%
            </span>
          </div>
        </div>
      )}

      <main
        id="app"
        className={`
          w-full
          transition-opacity
          duration-700
          ${showLoader && !hideLoader ? "opacity-0" : "opacity-100"}
        `}
      >
        {children}
      </main>
    </>
  );
}
