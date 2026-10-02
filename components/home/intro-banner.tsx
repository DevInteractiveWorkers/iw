"use client";

import Image from "next/image";
import React from "react";
import CTAButton from "../buttons/cta-button";
import FlipElement from "../flip-element";
import SplitText from "../text-animation/SplitText";
import { useRouter } from "next/navigation";
import { useScrollIntoView } from "@/lib/use-scroll-into-view";
import PageHero from "../page-hero";

const IntroBanner = () => {
  const router = useRouter();

  const { ref } = useScrollIntoView<HTMLElement>({ offset: 80 });

  return (
    <section
      ref={ref}
      className="w-full relative flex flex-col items-start justify-center text-white px-[clamp(1rem,8vw,50rem)]"
    >
      <PageHero
        division={false}
        heading={
          <>
            Empower Your Business
            <br /> with Elite Virtual Assistants &<br /> Scalable Remote
            Staffing
          </>
        }
      />
      <CTAButton
        onClick={() =>
          router.push("https://calendly.com/interactiveworkersgm/30min")
        }
        className="my-10 [--primary-color:#fff] [--secondary-color:#fff] [--tertiary-color:#dd272d]"
      />
    </section>
  );
};

export default IntroBanner;
