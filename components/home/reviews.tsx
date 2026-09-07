"use client";
import ReviewComponent from "./reviews/review-component";
import { useState } from "react";
import { SampleReviews } from "./sample-reviews";
import Carousel from "./reviews/carousel";
import ProductCard from "../product-card";
import FadeInContent from "../FadeInContent";

export default function Reviews() {
  return (
    <article id="reviews" className="mb-48 w-dvw overflow-x-hidden">
      <AutoScrollReviews />
    </article>
  );
}

const AutoScrollReviews = () => {
  const [reviews, setReviews] = useState(SampleReviews);
  const [current, setCurrent] = useState(1);

  return (
    <div className="relative grid md:grid-cols-[400px_auto] overflow-x-hidden items-center">
      <div
        className="py-10 md:pl-20 max-md:px-4 relative z-10
      "
      >
        <ProductCard
          className={`flex flex-col items-start relative md:min-w-[300px] md:max-w-[500px] min-h-[400px] h-full transition-all duration-500 
            justify-between pointer-events-none z-50`}
        >
          <div className={`p-5 w-full h-min border-white/50 border-b`}>
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
      </div>
      <div
        className="overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
        }}
      >
        <Carousel
          autoscroll
          iteration="once"
          autoscrollMode="on-going"
          controls={false}
          onChange={setCurrent}
        >
          {reviews.map((review, i) => (
            <FadeInContent
              key={i}
              className="w-min h-full my-10"
              delay={i * 0.2}
            >
              <ReviewComponent
                index={i}
                name={review.author_name}
                company={review.company}
                text={review.text}
                rating={review.rating}
                fullReview={false}
              />
            </FadeInContent>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
