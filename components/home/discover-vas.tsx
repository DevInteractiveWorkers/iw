"use client";

import React from "react";
import VACard from "../vas/cards";
import FadeInContent from "../FadeInContent";
import SplitText from "../text-animation/SplitText";
import { useScrollIntoView } from "@/lib/use-scroll-into-view";
import PageDivision from "../page-division";
import { TransitionLink } from "../link";
import CTAButton from "../buttons/cta-button";

const productizedPackages = [
  {
    content: "24/7 Inbound Call & Emergency Dispatch Unit",
    imageSrc: "/team-2026/camila_01.png",
    innerContent: (
      <p>
        Never miss a critical lead or support request.
        <br />
        <br /> A fully managed, round-the-clock dispatch center driven by highly
        trained{" "}
        <b className="font-semibold">Customer Success Representatives</b>,
        designed for high-volume call handling and emergency routing.
      </p>
    ),
  },
  {
    content: "Tier-1 Helpdesk & Ticket Triage Team",
    imageSrc: "/team-2026/chantal_01.png",
    innerContent: (
      <p>
        Streamline your technical support.
        <br />
        <br />
        Our dedicated <b className="font-semibold">
          Support Representatives
        </b>{" "}
        handle frontline troubleshooting, ticket categorization, and issue
        escalation, protecting your senior engineers from basic operational
        bottlenecks.
      </p>
    ),
  },
  {
    content: "Executive Operational Assistant",
    imageSrc: "/team-2026/eduardo_01.png",
    innerContent: (
      <p>
        Reclaim your founders' and C-levels' time.
        <br />
        <br /> Elite-tier <b className="font-semibold">
          Operational Partners
        </b>{" "}
        trained to manage complex schedules, operational workflows, and
        high-level stakeholder communications.
      </p>
    ),
  },
  {
    content: "Outbound Cold Call & Lead Qualification Desk",
    imageSrc: "/team-2026/andere_03.png",
    innerContent: (
      <p>
        Accelerate your sales pipeline.
        <br />
        <br /> A high-performance outbound unit driven by skilled{" "}
        <b className="font-semibold">
          Sales Development Representatives (SDRs)
        </b>{" "}
        focused on top-of-funnel generation and rigorous B2B lead qualification.
      </p>
    ),
  },
];

const DiscoverVAs = () => {
  const { ref } = useScrollIntoView<HTMLElement>({ offset: 80 });

  return (
    <section
      ref={ref}
      id="services"
      className="z-10 pb-10 min-h-screen bg-white px-[clamp(1rem,8vw,50rem)]"
    >
      <article className="w-full mx-auto flex flex-col items-center">
        <SplitText
          delay={100}
          textAlign="center"
          className="font-medium lg:text-5xl leading-none pt-14 pb-4"
          text={
            <>
              Hire Your <br />
              Remote Team
            </>
          }
        />
        <SplitText
          className="text-md md:w-2/3 lg:w-1/3"
          textAlign={"center"}
          text={
            <>
              Scale your operations effortlessly with{" "}
              <b className="font-semibold">top-tier remote professionals.</b>
              From dedicated administrative support to{" "}
              <b className="font-semibold">specialized technical talent</b>, we
              connect growing businesses with pre-vetted virtual assistants who
              drive productivity and growth.
            </>
          }
        />
        <CTAButton className="my-10 [--primary-color:#000] [--secondary-color:#dd272d] [--tertiary-color:#fff]" />
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-6 justify-between my-4 md:mb-32">
          {productizedPackages.map((pkg, i) => (
            <FadeInContent key={i} delay={i * 0.1}>
              <VACard imageSrc={pkg.imageSrc} content={pkg.innerContent}>
                {pkg.content}
              </VACard>
            </FadeInContent>
          ))}
        </div>
      </article>
    </section>
  );
};

export default DiscoverVAs;
