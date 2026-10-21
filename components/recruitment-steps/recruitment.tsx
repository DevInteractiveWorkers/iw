"use client";

import Image from "next/image";
import Steps from "../steps/steps";
import { useState } from "react";
import { StepsProvider, useSteps } from "../steps/steps-context";
import { Graph } from "./graph";
import { Stat } from "../stats-section";
import { useIsMobile } from "@/lib/useMobile";

const CANDIDATES = [
  { name: "Gabriel", src: "/team-2026/GABRIEL/gabriel_01.png" },
  { name: "Francesco", src: "/team-2026/FRANCESCO/francesco_01.png" },
  { name: "Claudia", src: "/team-2026/CLAUDIA/claudia_01_v2.png" },
];

export default function Recruitment() {
  return (
    <StepsProvider>
      <RecruitmentSteps />
    </StepsProvider>
  );
}

function RecruitmentSteps() {
  const { goTo } = useSteps();
  const isMobile = useIsMobile();
  const [selected, setSelected] = useState<(typeof CANDIDATES)[number] | null>(
    CANDIDATES[1],
  );

  return (
    <Steps
      steps={[
        {
          title: "Book a discovery call",
          description:
            "Have a meeting with our team where we can get all the information about the profile you're looking for.",
          assets: (
            <div className="flex flex-col p-4 items-center gap-6">
              {/* <FlipElement className="p-4 bg-white aspect-square rounded-full">
                <Icon
                  icon="phone-call-01"
                  color="var(--iw-secondary-red)"
                  fill="var(--iw-secondary-red)"
                />
              </FlipElement> */}
              <Image
                src={"/stock/stock (9).png"}
                className="outline outline-white outline-offset-[5px] rounded aspect-[4/2] object-cover max-w-[80%]"
                alt={""}
                width={1080}
                height={1080}
              />
            </div>
          ),
        },
        {
          title: "We find the perfect fit for you",
          description:
            "Once we know what your project is about, we will find a set of candidates who fit your requirement.",
          note: "Our screening process is fully customizable and with no additional fees.",
          assets: (
            <div className="flex gap-6 max-md:gap-2">
              {CANDIDATES.map((candidate) => (
                <RecruitmentVACard
                  key={candidate.name}
                  compact
                  name={candidate.name}
                  src={candidate.src}
                  selected={selected?.name === candidate.name}
                  onSelect={() => {
                    const isSame = selected?.name === candidate.name;
                    setSelected(isSame ? null : candidate);
                    if (!isSame) goTo(2);
                  }}
                />
              ))}
            </div>
          ),
        },
        {
          title: "Welcome your new team member!",
          description: "Our staff is ready to join your team.",
          note: selected
            ? "This is an example selection featuring real members of our talent network for demonstration purposes only."
            : "",
          reverse: !isMobile,
          assets: (
            <RecruitmentVACard
              name={selected?.name}
              src={selected?.src}
              onSelect={() => {
                goTo(1);
                setSelected(null);
              }}
            />
          ),
        },
        {
          title: "Save time and grow your business",
          description:
            "You'll focus on the more important tasks while we manage your project effortlessly on an affordable budget.",
          assets: (
            <div className="flex items-end max-md:w-full max-md:flex-col max-md:items-center ">
              <Image
                width={1080}
                height={1080}
                alt={"InteractiveWorker"}
                src={"/team-2026/EDUARDO/eduardo_01.png"}
                className={`object-top object-cover h-full z-10 max-h-[60vh] max-md:max-h-[20vh] w-auto aspect-[3/4] transition-transform duration-200`}
              />{" "}
              <div className="relative max-md:w-full max-md:after:hidden after:absolute after:bg-white after:w-1/2 after:h-full after:top-0 after:left-0 after:-z-10 after:-translate-x-1/2">
                <Graph />
              </div>
            </div>
          ),
        },
      ]}
    />
  );
}

function RecruitmentVACard({
  src,
  name,
  selected = false,
  compact = false,
  onSelect,
}: {
  src?: string;
  name?: string;
  selected?: boolean;
  compact?: boolean;
  onSelect?: () => void;
}) {
  const interactive = !!onSelect;
  const Tag = interactive ? "button" : "div";

  return (
    <Tag
      {...(interactive && {
        type: "button" as const,
        onClick: onSelect,
        "aria-pressed": selected,
        "aria-label": `${selected ? "Deselect" : "Select"} ${name}`,
      })}
      className={`rounded relative z-0 group/rc text-left ${interactive ? "cursor-pointer focus-visible:outline-none" : ""}`}
    >
      <div
        className={`absolute right-0 bottom-0 w-[90%] h-[90%] rounded -z-10 
        transition-all duration-200 outline-iw-red-1
        ${
          selected
            ? "bg-white outline-offset-[5px] outline"
            : "bg-iw-red-3 -outline-offset-1 group-hover/rc:bg-white group-hover/rc:outline-offset-[5px] group-focus-visible/rc:bg-white group-focus-visible/rc:outline-offset-[5px] group-hover/rc:outline"
        }`}
      />
      {src ? (
        <Image
          width={1080}
          height={1080}
          alt={name ?? "InteractiveWorker"}
          src={src}
          className={`object-top object-cover h-full pt-10 z-10 max-h-[60vh] w-auto aspect-[3/4] transition-transform duration-200 ${
            compact
              ? "max-md:h-auto max-md:max-h-none max-md:w-[26vw] max-md:pt-6"
              : "max-md:max-h-[40vh]"
          } ${
            interactive ? "group-hover/rc:scale-[1.02]" : ""
          } ${selected ? "scale-[1.02]" : ""}`}
        />
      ) : (
        <div className="object-top object-cover pt-10 z-10 h-[60vh] max-md:h-[40vh] w-auto aspect-[3/4]"></div>
      )}
    </Tag>
  );
}
