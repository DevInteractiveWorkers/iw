"use client";

import { motion, useAnimation } from "framer-motion";
import { Card } from "flowbite-react";
import React, { useRef, useEffect, useState } from "react";
import { SampleReviews } from "./sample-reviews";

const Reviews = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [fullReview, setFullReview] = useState<number>();
  const [width, setWidth] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const [xPosition, setXPosition] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (!isHover) {
      controls.start({
        x: [xPosition, -width],
        transition: {
          x: {
            duration: Math.max(10, ((xPosition + width) / width) * 30), // adjust duration based on remaining distance
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [isHover, width, controls, xPosition]);

  useEffect(() => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const offsetWidth = carouselRef.current.offsetWidth;
      setWidth(scrollWidth - offsetWidth);
    }
  }, []);

  return (
    <div className="overflow-hidden w-full relative mb-32 px-6">
      <motion.div
        ref={carouselRef}
        className="flex cursor-grab"
        drag="x"
        dragConstraints={{ left: -width, right: 0 }}
        onDragStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
        onDragEnd={() => setIsHover(false)}
        animate={controls}
        whileTap={{ cursor: "grabbing" }}
        onUpdate={(latest) => {
          if (typeof latest.x === "number") {
            setXPosition(latest.x);
          }
        }}
      >
        {SampleReviews.map((review, i) => (
          <ReviewComponent
            key={i}
            name={review.author_name}
            rating={review.rating}
            text={review.text}
            fullReview={fullReview === i}
            onClick={() =>
              fullReview !== i ? setFullReview(i) : setFullReview(undefined)
            }
          />
        ))}
      </motion.div>
    </div>
  );
};

interface ReviewProps {
  name: string;
  rating: number;
  text?: string;
  fullReview: boolean;
  img_src?: string;
  onClick: () => void;
}

const ReviewComponent = ({
  name,
  rating,
  text,
  fullReview,
  img_src,
  onClick,
}: ReviewProps) => {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const el = textRef.current;
      setIsOverflowing(el.scrollHeight > el.clientHeight);
    }
  }, [text]);

  return (
    <Card
      className={`mx-5 flex flex-col items-center h-min relative ${fullReview ? "md:min-w-[500px]" : "md:min-w-[320px]"} transition-all duration-500`}
    >
      <div className={`flex flex-col items-center h-full`}>
        <img
          src={
            img_src ? "" : "https://freesvg.org/img/abstract-user-flat-4.png"
          }
          alt={`${name}-pic`}
          width={50}
          height={50}
        />
        <b className="mt-3 text-center">{name}</b>
        <RateStars count={rating} />
        <p
          ref={textRef}
          className={`transition-all duration-500 ${
            fullReview
              ? "line-clamp-none max-h-[1000px] max-w-[500px] min-w-[250px] max-md:text-sm"
              : "line-clamp-5"
          }`}
        >
          {text}
        </p>
      </div>
      {text && isOverflowing && (
        <button
          onClick={onClick}
          className="text-sm text-gray-400 hover:underline text-right"
        >
          {fullReview ? "See Less..." : "See More..."}
        </button>
      )}
    </Card>
  );
};

const RateStars = ({ count }: { count: number }) => {
  const fullStars = Math.floor(count); // integer part
  const hasHalf = count % 1 !== 0; // check for a decimal

  return (
    <div className="flex gap-1 my-2 text-iw-red-1">
      {/* Full stars */}
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

      {/* Half star */}
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
            fill="lightgray"
          />
        </svg>
      )}

      {/* Optional: Empty stars to fill up to 5 */}
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
            fill="lightgray"
          />
          <path
            d="M59.2256 34.5488H95.5527L66.1631 55.9014L77.3896 90.4512L48 69.0986V0L59.2256 34.5488Z"
            fill="lightgray"
          />
        </svg>
      ))}
    </div>
  );
};

export default Reviews;
