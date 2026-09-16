"use client";

import React from "react";
import NavbarComponent from "@/components/navbar";
import MainForm from "@/components/form/form";
import VACard from "@/components/vas/cards";
import Carousel from "@/components/home/reviews/carousel";
import Folder from "@/components/folder";
import FadeInContent from "@/components/FadeInContent";
import SplitText from "@/components/text-animation/SplitText";
import PageHero from "@/components/page-hero";
import { useScrollIntoView } from "@/lib/use-scroll-into-view";
import { useIsMobile } from "@/lib/useMobile";

const Dispatch = () => {
  const tags = [
    "Trained in Confidentiality and Security Protocols",
    "24/7 Adaptability",
    "Proactive Communication",
    "Bilingual English/Spanish",
    "Trained in Confidentiality and",
  ];

  const dispatchers = [
    {
      content: "24/7 Inbound Call & Emergency Dispatch Unit",
      imageSrc: "/team-2026/camila_01.png",
    },
    {
      content: "Tier-1 Helpdesk & Ticket Triage Team",
      imageSrc: "/team-2026/chantal_01.png",
    },
    {
      content: "Executive Operational Assistant",
      imageSrc: "/team-2026/claudia_01.png",
    },
    {
      content: "Outbound Cold Call & Lead Qualification Desk",
      imageSrc: "/team-2026/andere_03.png",
    },
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
            24/7 Remote Dispatch
            <br /> for Every Operation,
            <br /> Ready to Deploy
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
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
        }}
      >
        <Carousel
          autoscroll
          slides={isMobile ? 1 : "all"}
          iteration="once"
          autoscrollMode="on-going"
          controls={false}
        >
          {dispatchers.map((dispatcher, i) => (
            <FadeInContent key={i} delay={i * 0.2} className="my-10">
              <VACarouselCard imageSrc={dispatcher.imageSrc}>
                {dispatcher.content}
              </VACarouselCard>
            </FadeInContent>
          ))}
        </Carousel>
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
          className="text-6xl"
          textAlign="start"
          text={
            <>
              Our Support = More Solutions
              <br />
              We Cover Every Shift
            </>
          }
        />
        <FadeInContent className="md:px-[clamp(1rem,8vw,50rem)]">
          <Folder
            items={[
              {
                title: "24/7 Call Handling",
                text: "Scale coverage instantly with bilingual, security-trained VAs who handle calls, dispatch, and scheduling around the clock.",
                src: "/dispatch/1.png",
                imagePosition: { objectPosition: "center right" },
              },
              {
                title: "Instant Guard Deployment Remote Support",
                text: "Ensure active field safety and full protocol compliance. Remote dispatchers monitor officer check-ins, verify posts, and respond immediately to incident escalations.",
                src: "/security.png",
                imagePosition: { objectPosition: "30% center" },
              },
              {
                title: "Accurate Shift Scheduling",
                text: "Eliminate unstaffed posts and scheduling conflicts. Remote dispatchers manage officer rosters, handle last-minute call-outs, and keep shift handoffs smooth.",
                src: "/top-view.png",
                imagePosition: { objectPosition: "center bottom" },
              },
              {
                title: "Seamless Communication",
                text: "Maintain a real-time line of communication between client sites, field guards, and management for rapid coordination during critical events.",
                src: "/welcome-our-team-young-modern-man-wear-shaking-hands-while-working-creative-office 1.png",
              },
            ]}
          />
        </FadeInContent>
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
  return (
    <VACard
      imageSrc={imageSrc}
      style={{
        width: 400,
        height: 500,
        minWidth: 400,
        minHeight: 500,
        maxWidth: 400,
        maxHeight: 500,
        marginTop: "25%",
        flexShrink: 0,
        boxSizing: "border-box",
      }}
    >
      {children}
    </VACard>
  );
};

export default Dispatch;
