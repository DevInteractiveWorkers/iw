"use client";

import Icon from "@/components/icon";
import ProductCard from "@/components/product-card";
import { useCallback, useEffect, useRef, useState } from "react";

const CLAMP_LINES = 5;
const ANIMATION_MS = 500;

interface ReviewProps {
  index?: number;
  name: string;
  company?: string;
  rating: number;
  text?: string;
  fullReview?: boolean;
  fluid?: boolean;
  className?: string;
  dark?: boolean;
}

export default function ReviewComponentReviewComponent({
  index = 1,
  name,
  company,
  rating,
  text,
  fullReview,
  fluid = false,
}: ReviewProps) {
  // const reverse = index % 2 === 0;
  const [isFullReview, setIsFullReview] = useState<boolean>(fullReview ?? true);
  // True only while collapsed and settled; the line-clamp is dropped during
  // the height animation so the text can grow/shrink smoothly.
  const [clamped, setClamped] = useState<boolean>(!(fullReview ?? true));
  const [overflows, setOverflows] = useState(false);

  const textRef = useRef<HTMLParagraphElement>(null);
  const expandedRef = useRef(isFullReview);
  const animatingRef = useRef(false);
  const collapsedHeightRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const rafRef = useRef<number | undefined>(undefined);

  const measure = useCallback(() => {
    const el = textRef.current;
    if (!el) return;
    const cs = getComputedStyle(el);
    const lineHeight =
      parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.2;
    const collapsedHeight = Math.round(lineHeight * CLAMP_LINES);
    collapsedHeightRef.current = collapsedHeight;
    // scrollHeight reports the full content height even when clipped.
    const overflow = el.scrollHeight > collapsedHeight + 1;
    setOverflows(overflow);
    if (!expandedRef.current && !animatingRef.current) {
      el.style.height = overflow ? `${collapsedHeight}px` : "";
    }
  }, []);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure, text]);

  useEffect(
    () => () => {
      clearTimeout(timerRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    },
    [],
  );

  const toggle = () => {
    const el = textRef.current;
    if (!el || animatingRef.current) return;
    animatingRef.current = true;
    const expanding = !expandedRef.current;
    expandedRef.current = expanding;
    setIsFullReview(expanding);

    if (expanding) {
      el.style.height = `${collapsedHeightRef.current}px`;
      setClamped(false);
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = requestAnimationFrame(() => {
          el.style.height = `${el.scrollHeight}px`;
        });
      });
      timerRef.current = setTimeout(() => {
        el.style.height = "auto"; // follow width changes freely once open
        animatingRef.current = false;
        measure();
      }, ANIMATION_MS);
    } else {
      el.style.height = `${el.scrollHeight}px`;
      void el.offsetHeight; // commit the start height before animating
      el.style.height = `${collapsedHeightRef.current}px`;
      timerRef.current = setTimeout(() => {
        setClamped(true);
        animatingRef.current = false;
        measure();
      }, ANIMATION_MS);
    }
  };

  return (
    <ProductCard
      disableHover
      className={`flex flex-col items-start relative min-h-[400px] h-full transition-all duration-500
        ${fluid ? "w-full min-w-0" : "min-w-[300px] max-w-[500px]"}
        justify-between `}
    >
      <div className={`p-5 w-full h-min border-white/50 border-b`}>
        <b>{name}</b>
        <p>{company}</p>
      </div>
      <div className={`p-5 flex gap-4 justify-between h-auto flex-col`}>
        <RateStars count={rating} color={"white"} />
        <div className="flex flex-col justify-center gap-2 items-end">
          <p
            ref={textRef}
            className={`break-words overflow-hidden transition-[height] duration-500 text-sm text-justify ${
              clamped ? "line-clamp-5" : "line-clamp-none"
            }`}
          >
            {text}
          </p>
          {overflows && (
            <button onClick={toggle} className="flex items-center gap-2">
              Show {isFullReview ? "less" : "more"}
              <Icon
                icon={isFullReview ? "dash" : "plus-01"}
                height={20}
                width={20}
              />{" "}
            </button>
          )}
        </div>
      </div>
    </ProductCard>
  );
}

const RateStars = ({
  count,
  color = "iw-red-1",
}: {
  count: number;
  color?: "white" | "iw-red-1";
}) => {
  const fullStars = Math.floor(count);
  const hasHalf = count % 1 !== 0;

  return (
    <div className={`flex gap-1 text-${color}`}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <svg
          key={`full-${i}`}
          width="20"
          height="20"
          viewBox="0 0 96 91"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M48.0001 0L59.2258 34.5491H95.5529L66.1637 55.9017L77.3894 90.4509L48.0001 69.0983L18.6108 90.4509L29.8365 55.9017L0.447266 34.5491H36.7744L48.0001 0Z"
            fill="currentColor"
          />
        </svg>
      ))}
      {hasHalf && (
        <svg
          key="half"
          width="20"
          height="20"
          viewBox="0 0 96 91"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M48 69.0986L18.6104 90.4512L29.8369 55.9014L0.447266 34.5488H36.7744L48 0V69.0986Z"
            fill="currentColor"
          />
          <path
            d="M59.2256 34.5488H95.5527L66.1631 55.9014L77.3896 90.4512L48 69.0986V0L59.2256 34.5488Z"
            fill="#191919"
          />
        </svg>
      )}
      {Array.from({
        length: 5 - fullStars - (hasHalf ? 1 : 0),
      }).map((_, i) => (
        <svg
          key={`empty-${i}`}
          width="20"
          height="20"
          viewBox="0 0 96 91"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M48 69.0986L18.6104 90.4512L29.8369 55.9014L0.447266 34.5488H36.7744L48 0V69.0986Z"
            fill="#191919"
          />
          <path
            d="M59.2256 34.5488H95.5527L66.1631 55.9014L77.3896 90.4512L48 69.0986V0L59.2256 34.5488Z"
            fill="#191919"
          />
        </svg>
      ))}
    </div>
  );
};
