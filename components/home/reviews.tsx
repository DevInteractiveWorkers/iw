"use client";

import { useState } from "react";
import ReviewComponent from "./reviews/review-component";
import { SampleReviews } from "./sample-reviews";
import Carousel from "./reviews/carousel";
import FadeInContent from "../FadeInContent";
import { useIsMobile } from "@/lib/useMobile";
import { ReviewsSummary } from "./reviews-summary";
import SplitText from "../text-animation/SplitText";

export default function Reviews() {
  return (
    <article id="reviews" className="w-full">
      <AutoScrollReviews />
      <div className="w-full flex justify-center">
        <SplitText
          textAlign="center"
          className="text-[clamp(2rem,4vw,3.75rem)] leading-[1.05] pb-6 font-light w-3/4"
          text="Beyond the obvious benefits, remote staff can address hidden needs."
        />
      </div>
    </article>
  );
}

const ReviewCard = ({
  review,
  index,
  className,
  fullReview = false,
  fluid = false,
}: {
  review: (typeof SampleReviews)[number];
  index: number;
  className?: string;
  fullReview?: boolean;
  fluid?: boolean;
}) => (
  <FadeInContent className={className} delay={index * 0.2}>
    <ReviewComponent
      index={index}
      name={review.author_name}
      company={review.company}
      text={review.text}
      rating={review.rating}
      fullReview={fullReview}
      fluid={fluid}
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
            relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6
            w-full max-w-7xl px-4 xl:w-9/12 items-stretch py-10
          "
        >
          <FadeInContent className="w-full h-full">
            <ReviewsSummary />
          </FadeInContent>

          {reviews.map((review, i) => (
            <ReviewCard
              key={i}
              review={review}
              index={i}
              fluid
              className="w-full h-full"
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
