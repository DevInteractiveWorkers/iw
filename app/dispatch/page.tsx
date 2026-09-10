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
      imageSrc: "/home/discover-vas/vas/0.png",
    },
    {
      content: "Tier-1 Helpdesk & Ticket Triage Team",
      imageSrc: "/home/discover-vas/vas/2.png",
    },
    {
      content: "Executive Operational Assistant",
      imageSrc: "/home/discover-vas/vas/3.png",
    },
    {
      content: "Outbound Cold Call & Lead Qualification Desk",
      imageSrc: "/home/discover-vas/vas/1.png",
    },
  ];

  const { ref: carouselRef } = useScrollIntoView<HTMLElement>({
    offset: 0,
  });

  const { ref: folderRef } = useScrollIntoView<HTMLElement>({
    offset: 80,
  });

  return (
    <>
      <section>
        <NavbarComponent></NavbarComponent>
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
                  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quaerat, quia autem voluptatem mollitia ab, tenetur assumenda fugiat, hic sunt veritatis illo. Nemo animi vel voluptates! Doloribus officiis omnis nulla.",
                  src: "/security.png",
                  imagePosition: { objectPosition: "30% center" },
                },
                {
                  title: "Accurate Shift Scheduling",
                  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quaerat, quia autem voluptatem mollitia ab, tenetur assumenda fugiat, hic sunt veritatis illo. Nemo animi vel voluptates! Doloribus officiis omnis nulla.",
                  src: "/top-view.png",
                  imagePosition: { objectPosition: "center bottom" },
                },
                {
                  title: "Seamless Communication",
                  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quaerat, quia autem voluptatem mollitia ab, tenetur assumenda fugiat, hic sunt veritatis illo. Nemo animi vel voluptates! Doloribus officiis omnis nulla.",
                  src: "/welcome-our-team-young-modern-man-wear-shaking-hands-while-working-creative-office 1.png",
                },
              ]}
            />
          </FadeInContent>
        </article>
      </section>
      <MainForm />
    </>
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
      style={{ maxWidth: 400, marginTop: "25%", height: 500 }}
    >
      {children}
    </VACard>
  );
};

export default Dispatch;
