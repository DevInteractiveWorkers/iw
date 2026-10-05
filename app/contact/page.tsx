"use client";
import React from "react";
import PageHero from "@/components/page-hero";
import IWGlobe from "@/components/globe/globe";
import SplitText from "@/components/text-animation/SplitText";

const ContactUs = () => {
  return (
    <section className="flex flex-col px-[clamp(1rem,8vw,50rem)]">
      <div
        className="absolute md:top-0 max-md:bottom-0 left-0 md:w-full h-full w-dvw overflow-x-hidden"
        style={{
          maskImage: "linear-gradient(to bottom, black 40%, transparent 60%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 40%, transparent 60%)",
        }}
      >
        <div
          className="top-0 left-0 bottom-0"
          style={{
            transform: `translateX(25%)`,
          }}
        >
          <IWGlobe sway autoRotate={false} />
        </div>
      </div>
      <PageHero
        dark={false}
        heading={
          <span className="text-[clamp(4rem,4vw,7rem)] font-medium leading-[1.05] pb-6">
            Talk to Our Team
          </span>
        }
        division={false}
      />
      <SplitText
        className="text-xl lg:w-2/3 -translate-y-full"
        textAlign={"start"}
        text={
          <>
            Tell us what you need covered <br />
            we'll scope the right operational unit for it.
          </>
        }
      />
    </section>
  );
};

export default ContactUs;
