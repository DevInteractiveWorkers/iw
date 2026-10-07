"use client";

import React from "react";
import VACard from "@/components/vas/cards";
import Carousel from "@/components/home/reviews/carousel";
import Folder from "@/components/folder";
import FadeInContent from "@/components/FadeInContent";
import SplitText from "@/components/text-animation/SplitText";
import PageHero from "@/components/page-hero";
import { useScrollIntoView } from "@/lib/use-scroll-into-view";
import { useIsMobile } from "@/lib/useMobile";
import CTAButton from "@/components/buttons/cta-button";
import { useRouter } from "next/navigation";
import FlipElement from "@/components/flip-element";
import Image from "next/image";
import ColorBends from "@/components/backgrounds/ColorBends";
import { dispatchers } from "../content/dispatchers";

const Dispatch = () => {
  const router = useRouter();

  const tags = [
    "Trained in Confidentiality and Security Protocols",
    "24/7 Adaptability",
    "Proactive Communication",
    "Bilingual English/Spanish",
    "Trained in Confidentiality and",
  ];

  const { ref: carouselRef } = useScrollIntoView<HTMLElement>({
    offset: -80,
  });

  const { ref: folderRef } = useScrollIntoView<HTMLElement>({
    offset: 80,
  });

  const isMobile = useIsMobile();

  return (
    <section>
      <PageHero
        heading={
          <>
            Elite 24/7 Managed
            <br /> Dispatch & CCTV
            <br /> Monitoring Units
          </>
        }
        description={
          <>
            Boost response times, reduce overtime, and scale operations with
            trained virtual dispatchers and schedulers for private security
            companies.
          </>
        }
      />
      <article
        ref={carouselRef}
        className="w-full flex flex-col items-center justify-center my-10"
        // style={{
        //   maskImage:
        //     "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
        //   WebkitMaskImage:
        //     "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
        // }}
      >
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 lg:w-9/12 gap-6 justify-between my-4 md:mb-32">
          {dispatchers.map((dispatcher, i) => (
            <FadeInContent key={i} delay={i * 0.1}>
              <VACard
                imageSrc={dispatcher.imageSrc}
                content={dispatcher.innerContent}
              >
                {dispatcher.content}
              </VACard>
            </FadeInContent>
          ))}
        </div>
        <Carousel
          autoscroll
          iteration="once"
          autoscrollMode="on-going"
          reverseScroll
          stopOnHover={false}
          controls={false}
        >
          {tags.map((tag, i) => (
            <div
              key={i}
              className="flex items-center gap-4 whitespace-nowrap px-2"
            >
              <span>{tag}</span>
              <span aria-hidden="true">•</span>
            </div>
          ))}
        </Carousel>
      </article>
      <article
        ref={folderRef}
        className="min-h-screen py-10 flex flex-col justify-center gap-10"
      >
        <SplitText
          className="text-[clamp(2rem,4vw,3.75rem)]"
          textAlign="start"
          text={
            <>
              Why Elite Companies
              <br /> Choose Our Dispatch
              <br /> Infrastructure
            </>
          }
        />
        <FadeInContent className="md:px-[clamp(1rem,8vw,50rem)]">
          <Folder
            items={[
              {
                title: "100% Uptime SLA & Built-In Redundancy",
                text: "A dispatch center cannot afford downtime. Our managed units are engineered with shift-overlaps and backup personnel. If a representative has an emergency, our system seamlessly rotates in a fully briefed specialist. Your lines stay open 24/7/365.",
                src: "/security.png",
              },
              {
                title: "Turnkey Enterprise Hardware (Zero IT Hassle)",
                text: "Security and dispatch require secure tech. We do not rely on a representative's personal laptop. InteractiveWorkers provisions, secures, and maintains all necessary hardware and high-speed infrastructure, ensuring bank-level data compliance.",
                imagePosition: { objectPosition: "30% center" },
                src: "/stock/iw-2026-scheduling.png",
              },
              {
                title: "Zero HR Liability & Overhead Cost",
                text: "Scale your 24/7 coverage without the massive burden of local overnight payroll, overtime taxes, or complex labor laws. We act as the Employer of Record (EOR). You get the operational output; we absorb the liability.",
                imagePosition: { objectPosition: "center center" },
                src: "/stock/por_siempre_nacho.png",
              },
            ]}
          />
        </FadeInContent>
      </article>
      <article className="z-10 flex flex-col items-center justify-center gap-10 md:py-40 relative ">
        <div
          className="w-dvw h-screen absolute top-0 pointer-events-none -z-10"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          }}
        >
          <ColorBends
            rotation={95}
            speed={0.2}
            colors={["#C1272D", "#DD272D", "#C1272D"]}
            transparent
            autoRotate={0}
            scale={1.2}
            frequency={1}
            warpStrength={1}
            mouseInfluence={0}
            parallax={0.3}
            noise={0.15}
            iterations={1}
            intensity={1.3}
            bandWidth={6}
          />
        </div>
        <div className="flex flex-col h-full items-center justify-center">
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
            tag="h3"
            text={
              <>
                Ready to Secure
                <br /> Your Operations?
              </>
            }
            className="font-medium lg:text-6xl text-2xl text-center leading-none pb-4"
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
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <SplitText
            splitType="lines"
            textAlign="start"
            className="font-light text-base md:text-2xl lg:text-4xl"
            text={
              <>
                Don't leave your most critical communication hub understaffed.
              </>
            }
          />
          <SplitText
            splitType="lines"
            textAlign="start"
            className="font-light text-base md:text-2xl lg:text-4xl text-center text-wrap"
            text={<>Let us build your custom, dedicated dispatch unit todays</>}
          />
        </div>
      </article>
    </section>
  );
};

const VACarouselCard = ({
  imageSrc,
  children,
}: {
  imageSrc: string;
  children: React.ReactNode;
}) => {
  const isMobile = useIsMobile();

  if (isMobile) return <VACard imageSrc={imageSrc}>{children}</VACard>;

  return (
    <div
      style={{
        width: 400,
        height: 500,
        minWidth: 400,
        minHeight: 500,
        maxWidth: 400,
        maxHeight: 500,
        boxSizing: "border-box",
      }}
    >
      <VACard imageSrc={imageSrc}>{children}</VACard>
    </div>
  );
};

export default Dispatch;
