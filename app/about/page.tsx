"use client";

import React from "react";
import PageHero from "@/components/page-hero";
import Accordion from "@/components/accordion";
import SplitText from "@/components/text-animation/SplitText";
import FadeInContent from "@/components/FadeInContent";
import VideoPlayer from "@/components/video-player";
import CTAButton from "@/components/buttons/cta-button";
import { useRouter } from "next/navigation";
import { Vas } from "../content/vas";
import VACard from "@/components/vas/cards";

const AboutUs = () => {
  const router = useRouter();

  return (
    <>
      <section className="w-full relative flex flex-col items-start justify-center text-white px-[clamp(1rem,8vw,50rem)] bg-iw-red-2">
        <PageHero
          division={false}
          heading={
            <>
              Beyond Outsourcing
              <br />
              We Build Your Global
              <br />
              Infrastructure
            </>
          }
          description={
            <>
              For years, <b className="font-semibold">growing companies</b> have
              been forced into a false compromise: either{" "}
              <b className="font-semibold">
                absorb the exorbitant overhead, HR headaches, and legal
                liabilities of local hiring
              </b>
              , or gamble their operational stability on fragmented freelancers
              and traditional{" "}
              <b className="font-semibold">"virtual assistants"</b> using their
              own unsecure laptops.
              <br />
              <br />
              <b className="font-semibold">
                The traditional outsourcing model is broken.
              </b>{" "}
              It lacks continuity, security, and true integration.
            </>
          }
          ctaButton={{
            onClick: () =>
              router.push("https://calendly.com/interactiveworkersgm/30min"),
            className:
              "my-10 [--primary-color:#fff] [--secondary-color:#fff] [--tertiary-color:#dd272d]",
          }}
        />
      </section>
      <section className="grid grid-cols-1 gap-6 pb-10 items-center justify-items-center px-[clamp(1rem,8vw,50rem)] bg-white">
        <article className="grid md:grid-cols-2 grid-cols-1 gap-6 py-6">
          <SplitText
            splitType="lines"
            textAlign="start"
            className="font-light text-sm lg:text-xl"
            text={
              <>
                At <b className="font-semibold">InteractiveWorkers</b>, we
                decided to engineer a better way to scale. We don’t just source
                talent; we deploy{" "}
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
          <SplitText
            splitType="lines"
            textAlign="start"
            className="font-light text-sm lg:text-xl text-center text-wrap"
            text={
              <>
                With our ironclad{" "}
                <b className="font-semibold">100% Continuity SLA</b>, we ensure
                your business never stops moving. You focus on growth; we
                provide the operational engine that drives it.
              </>
            }
          />
        </article>
        <article>
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-6 justify-between my-4 md:mb-32">
            {Vas.slice(0, 8).map((va, i) => (
              <FadeInContent key={i} delay={i * 0.1}>
                <VACard imageSrc={`/vas/teams/${va.img}`}>{va.position}</VACard>
              </FadeInContent>
            ))}
          </div>
        </article>
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
