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
              Scale Your Business
              <br />
              with Fully Managed
              <br /> Operational Solutions
            </>
          }
          className="font-medium lg:text-6xl text-base text-center leading-none pb-4"
          delay={100}
          threshold={0.1}
          textAlign="center"
        />
        <CTAButton
          onClick={() =>
            router.push("https://calendly.com/interactiveworkersgm/30min")
          }
          className="my-10 
          dark:[--primary-color:#fff] dark:[--secondary-color:#dd272d] dark:[--tertiary-color:#fff]
          [--primary-color:#000] [--secondary-color:#dd272d] [--tertiary-color:#fff]"
        />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <SplitText
            splitType="lines"
            textAlign="start"
            className="font-light text-sm lg:text-xl"
            text={
              <>
                We replace the exorbitant costs and compliance risks of local
                hiring with turnkey remote infrastructure.{" "}
                <b className="font-semibold">
                  Hardware, IT support, and 100% continuity included.
                </b>
                <br />
                <br />
                You don't just hire a remote worker; you acquire a dedicated
                team of{" "}
                <b className="font-semibold">
                  Specialized Representatives
                </b>{" "}
                backed by enterprise-grade infrastructure.
              </>
            }
          />
          <SplitText
            splitType="lines"
            textAlign="start"
            className="font-light text-sm lg:text-xl text-center text-wrap"
            text={
              <>
                Stop gambling your operational efficiency on unreliable
                freelancers or draining your budget on local overhead.
                <br />
                <br />
                At <b className="font-semibold">InteractiveWorkers</b>, we
                deliver fully <b className="font-semibold">Managed Solutions</b>{" "}
                tailored to your business needs. We absorb all HR liabilities,
                supply the hardware, and guarantee 100% uptime. Whether you need
                a 24/7 dispatch desk or top-tier lead qualification, we provide
                an end-to-end infrastructure powered by{" "}
                <b className="font-semibold">Dedicated Representatives</b>,
                allowing you to scale risk-free
              </>
            }
          />
        </div>
      </article>
    </section>
  );
};

export default IntroBanner;
