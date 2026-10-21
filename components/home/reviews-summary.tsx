import React, { useState } from "react";
import ProductCard from "../product-card";

interface ReviewsSummaryProps {
  interactive?: boolean;
  placeId?: string;
}

export const ReviewsSummary: React.FC<ReviewsSummaryProps> = ({
  interactive = false,
  placeId = "ChIJdwM8-AqZiY4R9ybFS1qNWJo",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const googleReviewUrl = `https://search.google.com/local/writereview?placeid=${placeId}`;

  return (
    <>
      <ProductCard
        className={`flex flex-col justify-between min-h-[400px] h-full
      ${
        interactive
          ? "items-start relative md:min-w-[300px] md:max-w-[500px] transition-all duration-500 pointer-events-none z-50"
          : "w-full"
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
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="bg-black  md:px-12 px-6 py-5 rounded-full hover:scale-95 active:bg-white active:text-iw-red-1 transition-all duration-200 pointer-events-auto cursor-pointer"
          >
            Leave a review
          </button>
        </div>
      </ProductCard>

      {/* Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 bg-white/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <ProductCard className="p-6">
            <h3 className="text-2xl font-medium pb-2">
              Review InteractiveWorkers
            </h3>
            <p className="/70 text-sm">
              We appreciate your feedback! To keep our ratings verified, reviews
              are hosted directly on our Google Business Profile.
            </p>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg /70 hover:bg-white hover:text-iw-red-1 transition-all duration-300"
              >
                Cancel
              </button>
              <a
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 bg-black  rounded-lg hover:opacity-90 font-medium inline-block hover:text-iw-red-1 transition-all duration-300"
              >
                Continue to Google
              </a>
            </div>
          </ProductCard>
        </div>
      )}
    </>
  );
};
