"use client";

import { useEffect, useRef, useState } from "react";
import Reviews from "./home/reviews";

export default function StatsSection() {
  return (
    <section
      id="stats"
      className="flex flex-col items-center justify-center w-full"
    >
      <article className="w-10/12 px-2 py-10 z-10 grid grid-cols-4 items-center justify-center justify-items-center">
        <Stat title="Clients Reach Worldwide" number={1000} symbol="+" />
        <Stat title="Uptime SLA" number={99.9} symbol="%" decimal />
        <Stat title="Project Shipped" number={365} symbol="+" />
        <Stat title="Average Rating" number={5.0} symbol="stars" decimal />
      </article>
      {/* <article> */}
      <Reviews />
      {/* </article> */}
    </section>
  );
}

function Stat({
  title,
  number,
  symbol,
  decimal,
}: {
  title: string;
  number: number;
  symbol?: "+" | "%" | "stars";
  decimal?: boolean;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const duration = 2000; // Animation duration in ms
          const startTime = performance.now();

          const updateCount = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);

            // Ease-out expo for a smooth deceleration effect
            const easeProgress =
              progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            const currentVal = easeProgress * number;
            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              setCount(number);
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [number]);

  // Format the display number
  const formattedNumber = decimal
    ? count.toFixed(1)
    : Math.floor(count).toLocaleString();

  return (
    <div ref={ref} className="flex flex-col">
      <span
        className={`text-8xl font-medium flex w-max ${symbol === "stars" ? "flex-row-reverse" : "flex-row"} items-center justify-center`}
      >
        {formattedNumber}
        {symbol === "stars" ? (
          <svg
            width="70"
            height="67"
            viewBox="0 0 70 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.036 0.690964C34.3354 -0.230347 35.6388 -0.230344 35.9381 0.690967L43.5119 24.0007C43.6458 24.4127 44.0297 24.6917 44.463 24.6917L68.9723 24.6917C69.941 24.6917 70.3438 25.9313 69.56 26.5007L49.7316 40.9069C49.3811 41.1615 49.2345 41.6129 49.3683 42.0249L56.9421 65.3346C57.2415 66.256 56.187 67.0221 55.4033 66.4527L35.5748 52.0465C35.2244 51.7918 34.7498 51.7918 34.3993 52.0465L14.5708 66.4527C13.7871 67.0221 12.7326 66.256 13.032 65.3346L20.6058 42.0249C20.7397 41.6129 20.593 41.1615 20.2425 40.9069L0.414079 26.5007C-0.369635 25.9313 0.0331426 24.6917 1.00187 24.6917L25.5112 24.6917C25.9444 24.6917 26.3283 24.4127 26.4622 24.0007L34.036 0.690964Z"
              fill="white"
            />
          </svg>
        ) : (
          symbol
        )}
      </span>
      <span className="text-2xl">{title}</span>
    </div>
  );
}
