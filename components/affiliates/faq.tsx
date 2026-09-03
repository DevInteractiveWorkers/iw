"use client";

import { useState } from "react";
import { faq } from "@/app/content/affiliates-faq";
import Question from "./question";

const AffiliatesFAQ = () => {
  const [opened, setOpened] = useState(-1);

  return (
    <article className="w-3/4 mx-auto my-20 md:my-28">
      <span
        className="
          block
          xl:w-3/4
          text-xl
          md:text-4xl
          font-extrabold
          mx-auto
          text-center
          text-white
          p-2
          border-4
          border-white
          rounded-full
          my-6
          capitalize
        "
      >
        Frequently asked questions
      </span>

      <div
        className="
          text-white
          flex
          flex-wrap
          gap-4
          justify-between
          xl:w-3/4
          mx-auto
        "
      >
        {faq.map((item, i) => (
          <Question
            key={i}
            item={item}
            index={i}
            opened={opened === i}
            onClick={() => setOpened((current) => (current === i ? -1 : i))}
          />
        ))}
      </div>
    </article>
  );
};

export default AffiliatesFAQ;
