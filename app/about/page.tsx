"use client";

import React from "react";
import PageHero from "@/components/page-hero";
import SplitText from "@/components/text-animation/SplitText";
import FadeInContent from "@/components/FadeInContent";
import VideoPlayer from "@/components/video-player";
import { useRouter } from "next/navigation";
import VAS, { VA } from "../content/vas";
import { useIsMobile } from "@/lib/useMobile";
import DriftWall from "@/components/drift-wall";

const AboutUs = () => {
  const router = useRouter();

  const isMobile = useIsMobile();

  return (
    <>
      <section className="w-full relative flex flex-col items-start justify-center text-white px-[clamp(1rem,8vw,50rem)] bg-iw-red-2">
        <div className="absolute w-screen h-full top-0 left-0 pointer-events-none">
          <DriftWall
            items={VAS.slice(0, 16).map((va: VA) => ({
              image: va.img,
              title: va.position,
            }))}
            columns={8}
            tileWidth={isMobile ? 180 : 300}
            tileHeight={isMobile ? 200 : 500}
            gap={isMobile ? 9 : 18}
            tilt={16}
            turn={-14}
            perspective={1200}
            depth={120}
            speed={42}
            direction="up"
            variance={0.45}
            parallax={0.6}
            lift={64}
            fade={0.6}
            dim={0.55}
            overlayColor="#000"
            radius={14}
            roll={0}
            pauseOnHover={false}
            grayscale={false}
          />
        </div>
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
              and traditional <b className="font-semibold">"remote staff"</b>{" "}
              using their own unsecure laptops.
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
      <section className="grid grid-cols-1 gap-6 py-10 items-center justify-items-center px-[clamp(1rem,8vw,50rem)] bg-white">
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
        {/* <article>
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-6 justify-between my-4 md:mb-32">
            {Vas.slice(0, 8).map((va, i) => (
              <FadeInContent
                key={i}
                delay={isMobile ? (i % 2 === 0 ? 0 : i * 0.1) : i * 0.1}
              >
                <VACard
                  imageSrc={va.img}
                  className="transition-all duration-300 hover:-translate-y-[5%]"
                >
                  {va.position}
                </VACard>
              </FadeInContent>
            ))}
          </div>
        </article> */}
        <SplitText
          className="text-[clamp(2rem,4vw,3.75rem)] leading-[1] font-medium lg:w-1/2 md:w-3/2"
          textAlign={"center"}
          text={
            <>
              What They Say <br />
              About Us
            </>
          }
        />
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
              thumbnail="/testimonies/testimonial_thumbnail01.png"
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
        <div className="w-full flex justify-center">
          <SplitText
            textAlign="center"
            className="text-[clamp(2rem,4vw,3.75rem)] leading-[1.05] pb-6 font-light w-3/4"
            text="Beyond the obvious benefits, remote staff can address hidden needs."
          />
        </div>
      </section>
    </>
  );
};

export default AboutUs;
