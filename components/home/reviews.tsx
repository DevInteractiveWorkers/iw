"use client";
import ReviewComponent from "./reviews/review-component";
import { useState } from "react";
import { SampleReviews } from "./sample-reviews";
import Carousel from "./reviews/carousel";
import ProductCard from "../product-card";

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
    <div className="relative grid grid-cols-[400px_auto] overflow-hidden items-center">
      <div
        className="py-10 pl-20 relative z-10
        after:absolute after:w-full after:h-full after:-z-50 after:bg-gradient-to-r after:from-black after:to-10%
        after:top-0 after:left-full after:pointer-events-none after:opacity-40
      "
      >
        <ProductCard
          className={`flex flex-col items-start relative min-w-[300px] max-w-[500px] min-h-[400px] h-full transition-all duration-500 
             justify-between pointer-events-none z-50`}
        >
          <div className={`p-5 w-full h-min border-white/50 border-b`}>
            <label className="text-7xl">5.0</label>
            <p className="text-2xl font-light">
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
            <button className="bg-black px-20 py-5 rounded-full hover:scale-95 active:bg-white active:text-iw-red-1 transition-all duration-200 pointer-events-auto">
              Leave a review
            </button>
          </div>
        </ProductCard>
      </div>
      <Carousel
        autoscroll
        iteration="once"
        autoscrollMode="on-going"
        controls={false}
        onChange={setCurrent}
      >
        {reviews.map((review, i) => (
          <div className="w-min h-full">
            <ReviewComponent
              key={i}
              index={i}
              name={review.author_name}
              company={review.company}
              text={review.text}
              rating={review.rating}
              fullReview={false}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
