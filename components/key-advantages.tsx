"use client";

import Image from "next/image";
import SplitText from "./text-animation/SplitText";
import { useCallback, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type KeyAdvantage = { src: string; title: string; description: string };

const ADVANTAGES: KeyAdvantage[] = [
  {
    src: "/dispatch/dispatch-0.png",
    title: "24/7 Coverage",
    description:
      "Dedicated dispatchers working around the clock so no call, load, or incident goes unanswered.",
  },
  {
    src: "/dispatch/dispatch-1.png",
    title: "Real-Time Visibility",
    description:
      "Live tracking and reporting that keep your team and your clients informed at every step.",
  },
  // {
  //   src: "/dispatch/dispatch-2.png",
  //   title: "Scalable Teams",
  //   description:
  //     "Grow or adjust your dispatch operation without the overhead of hiring and training in-house.",
  // },
];

/** Minimum horizontal drag distance (px) that counts as a swipe. */
const SWIPE_THRESHOLD = 50;

export default function KeyAdvantages() {
  return (
    <section className="px-[clamp(1rem,8vw,50rem)] flex flex-col items-center md:h-dvh py-10">
      <SplitText
        tag="h4"
        className="
            text-[clamp(2rem,4vw,3.75rem)]
            leading-[1.05]
            pb-6
          "
        textAlign={"center"}
        text={<>Key Advantages</>}
      />
      <KeyCarousel keys={ADVANTAGES} />
    </section>
  );
}

function KeyCarousel({ keys }: { keys: KeyAdvantage[] }) {
  const [index, setIndex] = useState(0);
  const dragStartX = useRef<number | null>(null);

  const total = keys.length;
  const goTo = useCallback(
    (i: number) => setIndex(((i % total) + total) % total),
    [total],
  );
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  if (total === 0) return null;
  const current = keys[index];

  const onPointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    dragStartX.current = null;
    if (delta > SWIPE_THRESHOLD) prev();
    else if (delta < -SWIPE_THRESHOLD) next();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    else if (e.key === "ArrowRight") next();
  };

  return (
    <div
      className="flex flex-col items-center gap-6 w-full max-w-4xl"
      role="region"
      aria-roledescription="carousel"
      aria-label="Key advantages"
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <div className="relative w-full">
        {/* Viewport */}
        <div
          className="overflow-hidden rounded-xl touch-pan-y select-none"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerLeave={() => (dragStartX.current = null)}
        >
          {/* Track */}
          <div
            className="flex transition-transform duration-500 ease-out md:h-[50vh]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {keys.map((k, i) => (
              <div
                key={k.src + i}
                className="relative w-full shrink-0 aspect-square md:aspect-video"
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${total}`}
                aria-hidden={i !== index}
              >
                <Image
                  src={k.src}
                  alt={k.title}
                  fill
                  draggable={false}
                  sizes="(min-width: 896px) 896px, 100vw"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>

        {total > 1 && (
          <>
            <CarouselArrow side="left" onClick={prev} />
            <CarouselArrow side="right" onClick={next} />
          </>
        )}
      </div>

      {/* Dots */}
      {total > 1 && (
        <div className="flex gap-2">
          {keys.map((k, i) => (
            <button
              key={k.src + i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === index
                  ? "w-8 bg-iw-red-2"
                  : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}

      {/* Current content — keyed so it re-mounts and fades in on change */}
      <div
        key={index}
        className="flex flex-col items-center gap-2 animate-fade-in-up"
        aria-live="polite"
      >
        <b className="font-semibold text-2xl text-center">{current.title}</b>
        <p className="text-center text-lg max-w-2xl">{current.description}</p>
      </div>
    </div>
  );
}

function CarouselArrow({
  side,
  onClick,
}: {
  side: "left" | "right";
  onClick: () => void;
}) {
  const Icon = side === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === "left" ? "Previous slide" : "Next slide"}
      className={`absolute top-1/2 -translate-y-1/2 ${
        side === "left" ? "left-3" : "right-3"
      } grid place-items-center size-10 rounded-full backdrop-blur backdrop-brightness-[1.1] hover:bg-iw-red-2 shadow cursor-pointer transition-colors`}
    >
      <Icon className="size-5" color="#fff" />
    </button>
  );
}
