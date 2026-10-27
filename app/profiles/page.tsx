"use client";

import PageHero from "@/components/page-hero";
import VAS from "../content/vas";
import FadeInContent from "@/components/FadeInContent";
import { useIsMobile } from "@/lib/useMobile";
import VACard from "@/components/vas/cards";
import SplitText from "@/components/text-animation/SplitText";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
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

// Positions separated by "•" only between items on the same line: each bullet
// is an ::after hung in the flex gap, and hidden on whichever item ends a line.
function PositionList({
  positions,
  onHover,
}: {
  positions: string[];
  onHover: (index: number | null) => void;
}) {
  const listRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const markLineEnds = () => {
      const items = Array.from(list.children) as HTMLElement[];
      items.forEach((item, i) => {
        const next = items[i + 1];
        item.dataset.eol = String(!next || next.offsetTop !== item.offsetTop);
      });
    };

    markLineEnds();
    const observer = new ResizeObserver(markLineEnds);
    observer.observe(list);
    document.fonts?.ready.then(markLineEnds);
    return () => observer.disconnect();
  }, [positions]);

  return (
    <div
      ref={listRef}
      className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 md:text-2xl text-sm"
    >
      {positions.map((position, i) => (
        <span
          key={i}
          className="relative after:content-['•'] after:absolute after:left-full after:top-0 after:w-6 after:text-center data-[eol=true]:after:hidden"
        >
          <span
            className="cursor-default hover:underline"
            onMouseEnter={() => onHover(i)}
            onMouseLeave={() => onHover(null)}
          >
            {position}
          </span>
        </span>
      ))}
    </div>
  );
}

export default function ProfilesPage() {
  const isMobile = useIsMobile();
  const teamsRef = useRef<HTMLElement>(null);
  const router = useRouter();

  // Track the active staff index for each team ID (defaults to index 0)
  const [teamHero, setTeamHero] = useState<Record<number, number>>(
    Object.fromEntries(teams.map((team) => [team.id, 7])),
  );

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
      <main className="bg-white py-10 ">
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
        <section
          ref={teamsRef}
          className="flex flex-col space-y-6 items-stretch overflow-x-clip min-h-screen"
        >
          {teams.map((team) => {
            const staff = VAS.filter((va) => va.team === team.id);
            // Get the current selected staff object based on state index, fallback to first item
            const currentHero = staff[teamHero[team.id]] || staff[0];

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
                        ? "w-full min-h-[200px] overflow-hidden relative flex justify-center"
                        : `relative w-1/4 shrink-0 after:absolute after:z-0 after:bg-iw-red-2 after:w-full after:h-full after:top-0 ${
                            team.id % 2 === 0
                              ? "after:left-0 after:-translate-x-1/2"
                              : "after:right-0 after:translate-x-1/2"
                          }`
                    }
                  >
                    {staff.map((va) => (
                      <Image
                        // Replace '.image' with whatever property name your VAS objects use for the image URL/path
                        src={va.img}
                        alt={team.name + "-hero"}
                        width={500}
                        height={500}
                        className={`${currentHero === va ? "opacity-100" : `opacity-0 z-0 ${team.id % 2 === 0 ? "-translate-x-1/2" : "translate-x-1/2"}`} transition-all duration-300 ${
                          isMobile
                            ? "absolute w-1/2 object-cover object-top"
                            : "absolute bottom-0 inset-x-0 w-full h-[111.111%] object-cover object-top z-10"
                        }`}
                      />
                    ))}
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
                    {/* <SplitText
                      className="md:text-2xl text-sm"
                      text={staff.map((va) => va.position).join(" • ")}
                    /> */}
                    <PositionList
                      positions={staff.map((va) => va.position)}
                      onHover={(i) =>
                        setTeamHero((prev) => ({ ...prev, [team.id]: i ?? 7 }))
                      }
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </main>
    </>
  );
}
