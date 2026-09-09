"use client";

import { useState } from "react";
import { faq } from "@/app/content/affiliates-faq";
import Question from "./question";
import ProductCard from "../product-card";
import { useScrollIntoView } from "@/lib/use-scroll-into-view";

const AffiliatesFAQ = () => {
  const [opened, setOpened] = useState(-1);

  const { ref } = useScrollIntoView<HTMLElement>();

  return (
    <article ref={ref} className="w-3/4 mx-auto py-10">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        <ProductCard className="md:p-10 p-4" disableHover>
          <h3 className="font-medium">Frequently asked questions</h3>
          {faq.slice(0, faq.length / 2).map((item, i) => (
            <Question
              key={i}
              item={item}
              index={i + 1}
              opened={opened === i}
              onClick={() => setOpened((current) => (current === i ? -1 : i))}
            />
          ))}
        </ProductCard>
        <ProductCard className="md:p-10 p-4" disableHover>
          {faq.slice(faq.length / 2, faq.length).map((item, i) => {
            const newIndex = i + 1 + faq.length / 2;
            return (
              <Question
                key={newIndex}
                item={item}
                index={Math.round(newIndex)}
                opened={opened === newIndex}
                onClick={() =>
                  setOpened((current) => (current === newIndex ? -1 : newIndex))
                }
              />
            );
          })}
        </ProductCard>
      </div>
    </article>
  );
};

export default AffiliatesFAQ;
