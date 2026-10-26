"use client";

import PageHero from "@/components/page-hero";
import VAS from "../content/vas";
import FadeInContent from "@/components/FadeInContent";
import { useIsMobile } from "@/lib/useMobile";
import VACard from "@/components/vas/cards";
import SplitText from "@/components/text-animation/SplitText";
import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Team = {
  id: number;
  name: string;
  description?: string;
};

const teams: Team[] = [
  {
    id: 1,
    name: "Front-Office, Marketing & Revenue Operations",
    description:
      "Client-facing, growth-focused talent driving sales, customer retention, digital presence, and front-line engagement.",
  },
  {
    id: 2,
    name: "Back-Office, Administrative & Specialized Support",
    description:
      "High-precision operational, technical, legal, and administrative experts ensuring back-end organization, compliance, and efficiency.",
  },
];

export default function ProfilesPage() {
  const isMobile = useIsMobile();
  const teamsRef = useRef<HTMLElement>(null);
  const router = useRouter();

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>("[data-team-row]").forEach((row) => {
        const fromRight = row.dataset.teamRow === "left";
        gsap.fromTo(
          row,
          {
            clipPath: fromRight
              ? "inset(-50% 0% 0% 100%)"
              : "inset(-50% 100% 0% 0%)",
            x: fromRight ? 80 : -80,
            opacity: 0,
          },
          {
            clipPath: "inset(-50% 0% 0% 0%)",
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              once: true,
            },
          },
        );
      });
    },
    { scope: teamsRef, dependencies: [isMobile] },
  );

  return (
    <>
      <section className="bg-iw-red-2 text-white px-[clamp(1rem,8vw,50rem)]">
        <PageHero
          heading={<>Meet your new team</>}
          division={false}
          align={isMobile ? "center" : "start"}
          description={
            <>
              Explore our <b>remote staff</b> organized by core business
              function. Whether you need client-facing revenue drivers or
              backend operational support, <b>we connect you</b> with candidates
              ready to seamlessly <b>integrate into your team</b>.
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
      <section
        ref={teamsRef}
        className="bg-white py-10 flex flex-col space-y-6 items-stretch overflow-x-clip"
      >
        <div className="w-full flex justify-center">
          <SplitText
            tag="h2"
            className="
            text-[clamp(2rem,4vw,3.75rem)]
            px-[clamp(1rem,8vw,50rem)]
            leading-[1.05]
            pb-6
          "
            textAlign="center"
            text={
              <>
                Remote Talent,
                <br /> Built Around
                <br /> Your Workflow
              </>
            }
          />
        </div>
        {teams.map((team) => {
          const staff = VAS.filter((va) => va.team === team.id);

          return (
            <article
              key={"team-" + team.id}
              className={`relative flex items-stretch ${
                team.id % 2 === 0 ? "w-full flex-row-reverse" : "w-full"
              } gap-2 mt-16`}
            >
              <div
                data-team-row={team.id % 2 === 0 ? "right" : "left"}
                className={
                  isMobile
                    ? "flex flex-col text-white"
                    : `w-full text-white flex items-stretch ${
                        team.id % 2 === 0
                          ? "flex-row-reverse pr-[clamp(1rem,8vw,50rem)]"
                          : "flex-row pl-[clamp(1rem,8vw,50rem)]"
                      }`
                }
              >
                <div
                  className={
                    isMobile
                      ? "w-full flex justify-center"
                      : `relative w-1/4 shrink-0 after:absolute after:z-0 after:bg-iw-red-2 after:w-1/2 after:h-full after:top-0 ${
                          team.id % 2 === 0 ? "after:left-0" : "after:right-0"
                        }`
                  }
                >
                  <Image
                    src={staff[0 + 7].img}
                    alt={team.name + "-hero"}
                    width={500}
                    height={500}
                    className={
                      isMobile
                        ? "relative w-1/2 object-cover object-top"
                        : "absolute bottom-0 inset-x-0 w-full h-[111.111%] object-cover object-top z-10"
                    }
                  />
                </div>
                <div className="py-10 flex-1 min-w-0 bg-iw-red-2 px-[clamp(1rem,8vw,50rem)] md:space-y-6 space-y-0">
                  <SplitText
                    text={team.name}
                    tag="span"
                    textAlign={isMobile ? "center" : "start"}
                    className="text-[clamp(1.70rem,8vw,3rem)] leading-[1.05] font-semibold"
                  />

                  <SplitText
                    text={team.description}
                    className="text-base"
                    textAlign={isMobile ? "center" : "start"}
                  />
                  <SplitText
                    className="md:text-2xl text-sm"
                    text={staff.map((va) => va.position).join(" • ")}
                  />
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}
