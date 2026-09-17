"use client";

import { useState } from "react";
import ReviewComponent from "./reviews/review-component";
import { SampleReviews } from "./sample-reviews";
import Carousel from "./reviews/carousel";
import ProductCard from "../product-card";
import FadeInContent from "../FadeInContent";
import { useIsMobile } from "@/lib/useMobile";
import { ReviewsSummary } from "./reviews-summary";

export default function Reviews() {
  return (
    <article id="reviews" className="w-dvw overflow-x-hidden">
      <AutoScrollReviews />
    </article>
  );
}

const ReviewCard = ({
  review,
  index,
  className,
}: {
  review: (typeof SampleReviews)[number];
  index: number;
  className?: string;
}) => (
  <FadeInContent className={className} delay={index * 0.2}>
    <ReviewComponent
      index={index}
      name={review.author_name}
      company={review.company}
      text={review.text}
      rating={review.rating}
      fullReview={false}
    />
  </FadeInContent>
);

const ReviewsMask = ({ children }: { children: React.ReactNode }) => (
  <div
    className="overflow-hidden"
    style={{
      maskImage:
        "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
      WebkitMaskImage:
        "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
    }}
  >
    {children}
  </div>
);

const AutoScrollReviews = () => {
  const [reviews] = useState(SampleReviews);
  const isMobile = useIsMobile();

  if (reviews.length <= 2) {
    return (
      <div className="w-full flex items-center justify-center">
        <div
          className="
            relative grid md:grid-cols-3 gap-6 md:w-9/12
            items-center justify-items-center py-10
          "
        >
          <FadeInContent className="w-full h-full my-10 min-h-[400px]">
            <ReviewsSummary />
          </FadeInContent>

          {reviews.map((review, i) => (
            <ReviewCard
              key={i}
              review={review}
              index={i}
              className="w-full h-full my-10"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative grid md:grid-cols-[400px_auto] overflow-x-hidden items-center">
      <div className="py-10 md:pl-20 max-md:px-4 relative z-10">
        <ReviewsSummary interactive />
      </div>

      <ReviewsMask>
        <Carousel
          autoscroll
          iteration="once"
          slides={isMobile ? 1 : "all"}
          autoscrollMode={isMobile ? "paused" : "on-going"}
          controls={false}
        >
          {reviews.map((review, i) => (
            <ReviewCard
              key={i}
              review={review}
              index={i}
              className="w-min h-full my-10"
            />
          ))}
        </Carousel>
      </ReviewsMask>
    </div>
  );
};
