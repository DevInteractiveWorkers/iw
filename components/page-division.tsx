"use client";

import { useEffect, useRef, useState } from "react";

interface PageDivisionProps {
  className?: string;
}

export default function PageDivision({ className = "" }: PageDivisionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`absolute left-0 h-px w-full overflow-hidden ${className}`}
    >
      <div
        className={`h-full w-full origin-left bg-[currentColor] transition-transform duration-1000 ease-out ${
          isVisible ? "scale-x-100" : "scale-x-0"
        }`}
      />
    </div>
  );
}
