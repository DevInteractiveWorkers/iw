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

  const { ref } = useScrollIntoView<HTMLElement>();

  return (
    <section
      ref={ref}
      className="w-full min-h-[50vh] text-white relative flex items-center justify-center"
    >
      <article className="z-10 flex flex-col items-center md:py-40">
        <FlipElement>
          <Image
            src={"/logo/03_Logo_Mark/03_Logo_Mark-01.png"}
            alt={"InteractiveWorkers"}
            width={1080}
            height={1080}
            className="md:max-w-40 max-w-36 animate-loading-flip py-4"
          />
        </FlipElement>
        <SplitText
          tag="h1"
          text={
            <>
              At InteractiveWorkers, <br />
              we transform the <br />
              concept of outsourcing.
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
              We transform complex remote staffing
              <br /> into ready-to-scale operational units—complete with
              pre-configured
              <br /> hardware, zero HR liability, and guaranteed 100%
              continuity.
            </>
          }
        />
        <CTAButton
          onClick={() =>
            router.push("https://calendly.com/interactiveworkersgm/30min")
          }
          className="my-10 text-iw-red-1"
        />
      </article>
    </section>
  );
};

export default IntroBanner;
