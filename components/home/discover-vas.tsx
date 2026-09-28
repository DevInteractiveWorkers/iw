"use client";

import React from "react";
import VACard from "../vas/cards";
import Packages from "./packages";
import FadeInContent from "../FadeInContent";
import SplitText from "../text-animation/SplitText";
import { useScrollIntoView } from "@/lib/use-scroll-into-view";
import { TransitionLink } from "../link";

const productizedPackages = [
  {
    content: "24/7 Inbound Call & Emergency Dispatch Unit",
    imageSrc: "/team-2026/camila_01.png",
  },
  {
    content: "Tier-1 Helpdesk & Ticket Triage Team",
    imageSrc: "/team-2026/chantal_01.png",
  },
  {
    content: "Executive Operational Assistant",
    imageSrc: "/team-2026/eduardo_01.png",
  },
  {
    content: "Outbound Cold Call & Lead Qualification Desk",
    imageSrc: "/team-2026/andere_03.png",
  },
];

const DiscoverVAs = () => {
  const { ref } = useScrollIntoView<HTMLElement>({ offset: 80 });

  return (
    <section ref={ref} id="services" className="w-full px-2 z-10 pb-10">
      <article className="w-full md:w-10/12 mx-auto flex flex-col items-center">
        <FadeInContent className="flex flex-col items-center">
          <Packages />
        </FadeInContent>
        <SplitText
          delay={100}
          className="font-light lg:text-5xl text-base text-center leading-none pt-14 pb-4"
          text={"Specialized Productized Packages"}
        />
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-6 justify-between my-4 md:mb-32">
          {productizedPackages.map((pkg, i) => (
            <FadeInContent key={i} delay={i * 0.1}>
              <VACard imageSrc={pkg.imageSrc}>{pkg.content}</VACard>
            </FadeInContent>
          ))}
        </div>
        <FadeInContent>
          <div className="hover:scale-95 transition-all duration-150">
            <TransitionLink
              href={"/affiliate"}
              className="rounded py-2 px-10 text-xl dark:bg-white bg-iw-red-1 dark:text-black text-white dark:active:text-iw-red-1 active:text-white
              transition-all duration-150"
            >
              Affiliate Program
            </TransitionLink>
          </div>
        </FadeInContent>
      </article>
    </section>
  );
};

export default DiscoverVAs;
