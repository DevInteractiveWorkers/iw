"use client";

import { useState } from "react";
import ReviewComponent from "./reviews/review-component";
import { SampleReviews } from "./sample-reviews";
import Carousel from "./reviews/carousel";
import ProductCard from "../product-card";
import FadeInContent from "../FadeInContent";
import { useIsMobile } from "@/lib/useMobile";

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

const ReviewsSummary = ({ interactive = false }: { interactive?: boolean }) => (
  <ProductCard
    className={`flex flex-col justify-between min-h-[400px] h-full
      ${
        interactive
          ? "items-start relative md:min-w-[300px] md:max-w-[500px] transition-all duration-500 pointer-events-none z-50"
          : ""
      }`}
  >
    <div className="p-5 w-full h-min border-white/50 border-b">
      <label className="text-7xl">5.0</label>

      <p className="md:text-2xl font-light">
        We've delivered{" "}
        <b className="font-bold">
          56+
          <br /> projects
        </b>{" "}
        that help
        <br /> companies generate
        <br /> real results.
      </p>
    </div>

    <div className="flex w-full h-full p-4 items-center justify-center">
      <button className="bg-black md:px-20 px-4 py-5 rounded-full hover:scale-95 active:bg-white active:text-iw-red-1 transition-all duration-200 pointer-events-auto">
        Leave a review
      </button>
    </div>
  </ProductCard>
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
