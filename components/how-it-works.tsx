"use client";

import { useIsMobile } from "@/lib/useMobile";
import HowItWorksStep from "./how-it-works-card";
import SplitText from "./text-animation/SplitText";

const steps = [
  {
    title: "Consultation",
    description:
      "Rigorous multi-stage screening processes ensure you get top 1% communication, reliability, and technical skills.",
    icon: "file-edit-02",
  },
  {
    title: "Matching",
    description:
      "We handpick and vet candidates tailored specifically to your operational needs.",
    icon: "target-02",
  },
  {
    title: "Interview & Selection",
    description:
      "Meet your shortlisted candidates and select the perfect fit for your team.",
    icon: "thumb-up",
  },
  {
    title: "Onboarding & Scaling",
    description:
      "Seamlessly integrate your new remote professional with our structured onboarding support.",
    icon: "arrow-up-right-square-contained",
  },
];

export default function HowItWorks() {
  const isMd = useIsMobile(1024);
  const isMobile = useIsMobile();

  return (
    <section className="px-[clamp(1rem,8vw,50rem)]">
      <article className="flex flex-col rounded-t-md bg-white p-4 py-10 min-h-[50vh] justify-between">
        <div className="flex w-full justify-center text-iw-red-2">
          <SplitText
            delay={100}
            textAlign="center"
            className="pb-4 text-3xl font-medium leading-none text-[clamp(2rem,4vw,3rem)]"
            text={<>How It Works</>}
          />
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 px-[clamp(1rem,3vw,50rem)]">
          {steps.map((step, index) => (
            <HowItWorksStep
              key={step.title}
              {...step}
              className={`border-iw-red-2
                ${index !== steps.length - 1 ? (isMobile ? "border-b-2" : isMd ? `${index % 2 === 0 && "border-r-2"}` : "border-r-2") : "border-none"}
                `}
            />
          ))}
        </div>
      </article>
    </section>
  );
}
