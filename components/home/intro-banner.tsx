"use client";

import React from "react";
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
      {/* Background lives on its own layer so the globe paints over it while the hero content stays above the globe. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-iw-red-2 pointer-events-none"
      />
      <PageHero
        division={false}
        heading={
          <>
            Empower Your Business
            <br /> with Elite Remote Staff &<br /> Scalable Remote Staffing
          </>
        }
        ctaButton={{
          onClick: () =>
            router.push("https://calendly.com/interactiveworkersgm/30min"),
        }}
      />
    </section>
  );
};

export default IntroBanner;
