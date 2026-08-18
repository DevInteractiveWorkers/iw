import Image from "next/image";
import React from "react";

const IntroBanner = () => {
  return (
    <section className="w-full h-screen text-white relative flex items-center justify-center">
      <article className="absolute z-10 flex flex-col items-center">
        <Image
          src={"/logo/03_Logo_Mark/03_Logo_Mark-01.png"}
          alt={"InteractiveWorkers"}
          width={1080}
          height={1080}
          className="max-w-40 animate-loading-flip absolute p-4 top-0 -translate-y-full"
        />
        <h1 className="font-medium lg:text-6xl text-base z-40 text-center leading-none pb-4">
          At InteractiveWorkers, <br />
          we transform the <br />
          concept of outsourcing.
        </h1>
        <p className="font-light text-sm lg:text-xl z-40 text-center">
          We transform complex remote staffing
          <br /> into ready-to-scale operational units—complete with
          pre-configured
          <br /> hardware, zero HR liability, and guaranteed 100% continuity.
        </p>
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
