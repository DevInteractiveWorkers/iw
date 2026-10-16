"use client";

import { useState } from "react";
import Switch from "@/components/form/switch";
import PageHero from "@/components/page-hero";
import { useIsMobile } from "@/lib/useMobile";
import { useScrollIntoView } from "@/lib/use-scroll-into-view";
import PricingCard, { type PricingCardProps } from "@/components/pricing-card";
import SplitText from "@/components/text-animation/SplitText";
import { longTermPlans, projectPlans } from "../content/pricing";
import FeatureCard from "@/components/feature-cards";
import Recruitment from "@/components/recruitment-steps/recruitment";
import { ParticlesComponent } from "@/components/particles";
import GhostFibers from "@/components/GhostFibers";
import CTAButton from "@/components/buttons/cta-button";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function PricingPage() {
  const isMobile = useIsMobile();
  const [isTerm, setIsTerm] = useState<"long-term" | "project">("long-term");

  return (
    <>
      <section id="pricing-hero" className="bg-iw-red-2 text-white">
        <div className="px-[clamp(1rem,8vw,50rem)]">
          <PageHero
            division={false}
            align="center"
            heading={
              <>
                Our Specialized Staff
                <br />
                is a versatile solution
                <br />
                for any business
              </>
            }
          />

          <div className="flex w-full items-center justify-center">
            <div className="grid grid-cols-2 gap-6 w-max items-center justify-center">
              <CTAButton
                onClick={() => scrollToSection("pricing-tables")}
                className={`[--primary-color:#fff] [--secondary-color:#fff] [--tertiary-color:#dd272d] bg-white hover:bg-none`}
                style={{ color: "#dd272d" }}
              >
                See Pricing
              </CTAButton>
              <CTAButton
                onClick={() => scrollToSection("recruitment")}
                className={`[--primary-color:#fff] [--secondary-color:#fff] [--tertiary-color:#dd272d]`}
              >
                How To Start
              </CTAButton>
            </div>
          </div>
        </div>
        <article
          id="recruitment"
          className="scroll-mt-20 flex flex-col pb-20 z-10 gap-6 relative"
        >
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="sticky top-0 left-0 w-full h-screen">
              <GhostFibers
                glowColor="#ffffff"
                layers={3}
                twist={1.2}
                threads={72}
                fiberStyle="dots"
                depthOfField={0.85}
                hoverEffect="focus"
                intro
                mouseInteraction
                lineColor="#dd272d"
                secondaryColor="#ffffff"
                gradient="depth"
                waves={1}
                volume={0.7}
                spread={1}
                scale={1}
                rotation={18}
                perspective={0.65}
                density={1}
                thickness={1}
                tips={0}
                foldGlow={1}
                speed={0.5}
                flow={0.4}
                rollSpeed={0.15}
                focusDepth={0}
                particles={0.5}
                sparkle={0.5}
                glow={0.8}
                brightness={1}
                vignette={0.3}
                grain={0.06}
                mouseStrength={1}
                pulseOnClick
                lightMode={false}
              />
            </div>
          </div>
          <Recruitment />
        </article>
      </section>
      <section
        id="pricing-tables"
        className="scroll-mt-20 px-[clamp(1rem,8vw,50rem)] w-dvw bg-white"
      >
        <article className="flex flex-col pb-20 z-10 overflow-hidden">
          <div className="w-full flex justify-center items-center">
            <SplitText
              className="text-[clamp(2rem,4vw,3.75rem)] leading-[1] font-medium lg:w-1/2 md:w-3/2 py-10"
              textAlign={"center"}
              text={
                <>
                  Get a Specialized Productized Packages that start with your
                  goals
                </>
              }
            />
          </div>
          <div className="flex justify-center py-6 ">
            <div className="flex gap-4 sm:gap-6 justify-center items-center">
              <label>Long Term</label>
              <Switch
                checked={isTerm === "project"}
                onChange={() =>
                  setIsTerm((prev) =>
                    prev === "project" ? "long-term" : "project",
                  )
                }
              />
              <label>Per Project</label>
            </div>
          </div>
          <div className="relative md:px-[clamp(1rem,8vw,50rem)] px-0 flex items-center justify-center">
            <div
              className={`grid md:grid-cols-2 gap-6 ${isTerm === "project" ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"} transition-all duration-700`}
            >
              {longTermPlans.map((project, i) => (
                <PricingCard key={i} {...project} />
              ))}
            </div>
            <div
              className={`grid md:grid-cols-3 grid-cols-2 gap-6 absolute top-0 left-1/2 w-full h-full ${isTerm === "long-term" ? "translate-x-full opacity-0" : "-translate-x-1/2 opacity-100"} transition-all duration-700 md:px-[clamp(1rem,8vw,50rem)]`}
            >
              {projectPlans.map((project, i) => (
                <FeatureCard
                  key={i}
                  title={project.title}
                  aspect="aspect-[2/1]"
                  dark
                  cta={{
                    label: "Start a Project",
                    href: "https://calendly.com/interactiveworkersgm/30min",
                    variant: "primary",
                  }}
                  icon={project.icon}
                />
              ))}
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
