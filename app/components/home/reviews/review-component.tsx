"use client";
import { useState, useRef, useEffect } from "react";

interface ReviewProps {
  name: string;
  company?: string;
  rating: number;
  text?: string;
  fullReview: boolean;
  img_src?: string;
  className?: string;
  onClick?: () => void;
  dark?: boolean;
}

export default function ReviewComponentReviewComponent({
  name,
  company,
  rating,
  text,
  fullReview,
  img_src,
  className,
  onClick,
  dark,
}: ReviewProps) {
  return (
    <div
      className={`flex flex-col items-start relative min-w-[300px] max-w-[500px] h-full transition-all duration-500 
        ${!dark ? "bg-white shadow-2xl text-black" : "bg-black shadow-2xl text-white"}
        rounded-xl text-sm 
        ${className}`}
    >
      <div className="flex flex-col h-full p-5 gap-5">
        <RateStars count={rating} color={dark ? "white" : "iw-red-1"} />
        <p
          className={`transition-all duration-500 ${
            fullReview
              ? "line-clamp-none max-h-[1000px] max-w-[500px] min-w-[250px] max-md:text-sm"
              : "line-clamp-5"
          }`}
        >
          {text}
        </p>
      </div>
      <div
        className={`px-5 py-3 border-t w-full ${dark ? "border-white" : "border-black"}`}
      >
        <b>{name}</b>
        <p>{company}</p>
      </div>
    </div>
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
