"use client";

import Image from "next/image";
import React from "react";
import CTAButton from "../buttons/cta-button";
import FlipElement from "../flip-element";
import SplitText from "../text-animation/SplitText";
import { useRouter } from "next/navigation";
import { useScrollIntoView } from "@/lib/use-scroll-into-view";

const IntroBanner = () => {
  const router = useRouter();

  const { ref } = useScrollIntoView<HTMLElement>({ offset: 80 });

  return (
    <section
      ref={ref}
      className="w-full min-h-[50vh]  relative flex items-center justify-center"
    >
      <article className="z-10 flex flex-col items-center md:py-40">
        <FlipElement>
          <Image
            src={"/logo/03_Logo_Mark/03_Logo_Mark-01.png"}
            alt={"InteractiveWorkers"}
            width={1080}
            height={1080}
            className="md:max-w-40 max-w-36 animate-loading-flip py-4 dark:block hidden"
          />
          <Image
            src={"/logo/03_Logo_Mark/03_Logo_Mark-02.png"}
            alt={"InteractiveWorkers"}
            width={1080}
            height={1080}
            className="md:max-w-40 max-w-36 animate-loading-flip py-4 block dark:hidden"
          />
        </FlipElement>
        <SplitText
          tag="h1"
          text={
            <>
              At InteractiveWorkers, <br />
              we replace the cost and risk <br />
              of local hiring with fully <br />
              managed operational units.
            </>
          }
          className="font-medium lg:text-6xl text-base text-center leading-none pb-4"
          delay={100}
          threshold={0.1}
          textAlign="center"
        />
        <SplitText
          splitType="lines"
          className="font-light text-sm lg:text-xl text-center"
          text={
            <>
              Hardware and continuity included. <br />
              You get infrastructure, not a freelancer.
            </>
          }
        />
        <CTAButton
          onClick={() =>
            router.push("https://calendly.com/interactiveworkersgm/30min")
          }
          className="my-10 
          dark:[--primary-color:#fff] dark:[--secondary-color:#dd272d] dark:[--tertiary-color:#fff]
          [--primary-color:#000] [--secondary-color:#dd272d] [--tertiary-color:#fff]"
        />
      </article>
    </section>
  );
};

export default IntroBanner;
