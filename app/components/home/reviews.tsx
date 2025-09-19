"use client";
import ReviewComponent from "./reviews/review-component";
import { useState } from "react";
import { SampleReviews } from "./sample-reviews";
import Carousel from "./reviews/carousel";

export default function Reviews() {
  return (
    <article id="reviews" className="mb-48">
      <AutoScrollReviews />
    </article>
  );
}

const AutoScrollReviews = () => {
  const [reviews, setReviews] = useState(SampleReviews);
  const [current, setCurrent] = useState(1);

  return (
    <div className="relative">
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
