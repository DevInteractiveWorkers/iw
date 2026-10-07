import React from "react";
import Image from "next/image";
import PageHero from "@/components/page-hero";
import Accordion from "@/components/accordion";
import SplitText from "@/components/text-animation/SplitText";
import FadeInContent from "@/components/FadeInContent";
import VideoPlayer from "@/components/video-player";

const AboutUs = () => {
  return (
    <>
      <section className="flex flex-col justify-between relative">
        <PageHero
          division={false}
          heading={
            <>
              Beyond Outsourcing
              <br />
              We Build Your Global Infrastructure
            </>
          }
        />
      </section>
      <section className="grid grid-cols-1 gap-6 pb-10 items-center justify-items-center">
        <Accordion
          images={Array.from({ length: 3 }).map((_, index) => ({
            src: `/about/${index}.png`,
          }))}
        />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <SplitText
            splitType="lines"
            textAlign="start"
            className="font-light text-sm lg:text-xl"
            text={
              <>
                For years, growing companies have been forced into a false
                compromise: either absorb the exorbitant overhead, HR headaches,
                and legal liabilities of local hiring, or gamble their
                operational stability on fragmented freelancers and traditional
                "virtual assistants" using their own unsecure laptops.
                <br />
                <br />
                The traditional outsourcing model is broken. It lacks
                continuity, security, and true integration.
                <br />
                <br />
                At <b className="font-semibold">InteractiveWorkers</b>, we
                decided to engineer a better way to scale.
              </>
            }
          />
          <SplitText
            splitType="lines"
            textAlign="start"
            className="font-light text-sm lg:text-xl text-center text-wrap"
            text={
              <>
                We don’t just source talent; we deploy{" "}
                <b className="font-semibold">
                  Fully Managed Operational Solutions
                </b>
                . We realized that businesses don’t just need extra hands they
                need reliable plug-and-play infrastructure.
                <br />
                <br />
                When you partner with us, you are integrating a highly trained
                unit of{" "}
                <b className="font-semibold">
                  Dedicated Representatives
                </b> and{" "}
                <b className="font-semibold">Operational Specialists</b>
                directly into your workflow. We take care of the rest. From
                provisioning enterprise-grade hardware and managing{" "}
                <b className="font-semibold">IT security</b>, to acting as your{" "}
                <b className="font-semibold">Employer of Record (EOR)</b> to
                absorb 100% of the legal and{" "}
                <b className="font-semibold">HR liabilities</b>.
              </>
            }
          />
        </div>
        <div className="w-full flex justify-center">
          <SplitText
            textAlign="center"
            className="text-[clamp(2rem,4vw,3.75rem)] leading-[1.05] pt-6 font-light w-3/4"
            text={
              <>
                What They Say <br />
                About Us
              </>
            }
          />
        </div>
        <article
          className="
        relative z-10
        flex w-full items-center justify-center
        px-0 md:px-2 py-10
      "
        >
          <FadeInContent
            className="
            flex w-full items-center justify-center
            md:h-auto
            md:w-full
          "
          >
            <VideoPlayer
              src={
                "https://s3.interactiveworkers.com/demo/52d026a9-2910-4eb5-8395-aeecedc29f13.mp4"
              }
              className="
              h-full
              w-full
              rounded-none
              md:h-auto
              md:w-7/12
              md:rounded-xl
            "
            />
          </FadeInContent>
        </article>
        <div className="w-full flex justify-end">
          <SplitText
            textAlign="start"
            className="text-[clamp(2rem,4vw,3.75rem)] leading-[1.05] pb-6 font-light w-3/4"
            text="Beyond the obvious benefits, virtual assistants can address hidden needs."
          />
        </div>
      </section>
    </>
  );
};

export default AboutUs;
