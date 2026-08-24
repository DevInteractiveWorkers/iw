import Image from "next/image";
import React from "react";
import CTAButton from "../cta-button";
import FlipElement from "../flip-element";

const IntroBanner = () => {
  return (
    <section className="w-full min-h-[50vh] text-white relative flex items-center justify-center">
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
        <h1 className="font-medium lg:text-6xl text-base text-center leading-none pb-4">
          At InteractiveWorkers, <br />
          we transform the <br />
          concept of outsourcing.
        </h1>
        <p className="font-light text-sm lg:text-xl text-center">
          We transform complex remote staffing
          <br /> into ready-to-scale operational units—complete with
          pre-configured
          <br /> hardware, zero HR liability, and guaranteed 100% continuity.
        </p>
        <CTAButton className="my-10 text-iw-red-1" />
      </article>
      {/* <Link
            href={"https://calendly.com/interactiveworkersgm/30min"}
            target="_blank"
            className="mx-auto md:mx-0 p-2 md:py-4 z-40 md:px-6 rounded-3xl bg-iw-red-1 text-left font-bold text-xl md:text-2xl max-w-fit uppercase"
          >
            Book a Call
          </Link> */}
    </section>
  );
};

export default IntroBanner;
