"use client";

import Link from "next/link";
import { useState } from "react";
import ProductCard from "@/components/product-card";
import Switch from "@/components/form/switch";
import Ticket from "@/components/pricing/ticket";
import PageHero from "@/components/page-hero";
import { useIsMobile } from "@/lib/useMobile";
import { useScrollIntoView } from "@/lib/use-scroll-into-view";
import PricingCard, { type PricingCardProps } from "@/components/pricing-card";
import FeatureCard from "@/components/feature-cards";
import SplitText from "@/components/text-animation/SplitText";

export const projectPlans: PricingCardProps[] = [
  // Project-Based Tiers
  {
    planName: "Small Scope Sprint",
    planDescription:
      "Ideal for rapid setups, targeted audits, or single operational desk implementations.",
    benefits: [
      {
        text: "Complete operational audit & workflow design",
        isIncluded: true,
      },
      {
        text: "Custom SOP buildout & initial routing configuration",
        isIncluded: true,
      },
      { text: "1 to 2 Weeks estimated delivery timeline", isIncluded: true },
      {
        text: "Fully customizable to your specific tech stack",
        isIncluded: true,
      },
    ],
    cta: {
      label: "Start a Project",
      href: "https://calendly.com/interactiveworkersgm/30min",
      variant: "primary",
    },
    isFeatured: false,
  },
  {
    planName: "Medium Scope Build",
    planDescription:
      "Designed for full operational onboarding, multi-channel dispatch setup, or ticketing integrations.",
    benefits: [
      {
        text: "Turnkey multi-channel integration & platform setup",
        isIncluded: true,
      },
      {
        text: "Fully provisioned workspace infrastructure & routing",
        isIncluded: true,
      },
      { text: "3 to 5 Weeks estimated delivery timeline", isIncluded: true },
      { text: "Tailored to your specific team workflows", isIncluded: true },
    ],
    cta: {
      label: "Start a Project",
      href: "https://calendly.com/interactiveworkersgm/30min",
      variant: "primary",
    },
    isFeatured: true,
  },
  {
    planName: "Enterprise Scope Transformation",
    planDescription:
      "Comprehensive end-to-end operational overhaul with custom architecture and team onboarding.",
    benefits: [
      {
        text: "Full operational architecture design & 24/7 redundancy",
        isIncluded: true,
      },
      {
        text: "Complete team recruitment, training, & smooth handoff",
        isIncluded: true,
      },
      { text: "6 to 10 Weeks estimated delivery timeline", isIncluded: true },
      {
        text: "Bespoke engineering around strict enterprise requirements",
        isIncluded: true,
      },
    ],
    cta: {
      label: "Start a Project",
      href: "https://calendly.com/interactiveworkersgm/30min",
      variant: "primary",
    },
    isFeatured: false,
  },
];

export const longTermPlans: PricingCardProps[] = [
  // Long-Term Engagement Tiers
  {
    planName: "Dedicated Specialist Retainer",
    planDescription:
      "Continuous operational continuity backed by a bilingual representative and zero HR liability.",
    benefits: [
      {
        text: "1 Dedicated Representative (Customer Success, SDR, or EA)",
        isIncluded: true,
      },
      {
        text: "Monthly, Quarterly, or Annual retainer options",
        isIncluded: true,
      },
      {
        text: "Enterprise-grade secured hardware & software included",
        isIncluded: true,
      },
      {
        text: "Zero local HR, payroll, or legal compliance liabilities",
        isIncluded: true,
      },
    ],
    cta: {
      label: "Book Discovery Call",
      href: "https://calendly.com/interactiveworkersgm/30min",
      variant: "primary",
    },
    isFeatured: false,
  },
  {
    planName: "Managed Operational Unit",
    planDescription:
      "Build operational capacity with a cross-trained team, built-in redundancy, and a dedicated supervisor.",
    benefits: [
      {
        text: "3 to 5 Dedicated Representatives + Operations Lead",
        isIncluded: true,
      },
      {
        text: "Flexible monthly/quarterly terms with customizable capacity",
        isIncluded: true,
      },
      {
        text: "Guaranteed uptime SLA with built-in standby backup support",
        isIncluded: true,
      },
      { text: "Single flat, tax-deductible monthly invoice", isIncluded: true },
    ],
    cta: {
      label: "Book Discovery Call",
      href: "https://calendly.com/interactiveworkersgm/30min",
      variant: "primary",
    },
    isFeatured: true,
  },
  {
    planName: "Enterprise Scale Hub",
    planDescription:
      "Multi-desk infrastructure built for round-the-clock operations and complete enterprise governance.",
    benefits: [
      {
        text: "24/7/365 multi-shift operational desk coverage",
        isIncluded: true,
      },
      {
        text: "Annual agreements with custom billing & custom SLAs",
        isIncluded: true,
      },
      {
        text: "Dedicated IT, Security, and HR management oversight",
        isIncluded: true,
      },
      {
        text: "Fully tailored resource allocation & continuous optimization",
        isIncluded: true,
      },
    ],
    cta: {
      label: "Speak with an Executive",
      href: "https://calendly.com/interactiveworkersgm/30min",
      variant: "primary",
    },
    isFeatured: false,
  },
];

export default function PricingPage() {
  const isMobile = useIsMobile();
  const [isTerm, setIsTerm] = useState<"long-term" | "project">("long-term");

  const { ref } = useScrollIntoView<HTMLElement>();

  return (
    <>
      <section
        id="pricing"
        className="px-[clamp(1rem,8vw,50rem)] w-dvw bg-iw-red-2 text-white"
      >
        <PageHero
          division={false}
          align="center"
          heading={
            <>
              Our Specialized Productized
              <br />
              Packages are a versatile solution
              <br />
              for any business
            </>
          }
        />
      </section>
      <section className="px-[clamp(1rem,8vw,50rem)] w-dvw bg-white">
        <article className="flex flex-col gap-6">
          <SplitText
            className="text-[clamp(2rem,4vw,3.75rem)] leading-[1] font-medium lg:w-1/2 md:w-3/2 py-10"
            textAlign={"start"}
            text={
              <>
                Elevate your digital footprint with our Bilingual Productized
                Packages
              </>
            }
          />
          <div className="grid md:grid-cols-3 grid-cols-2 gap-6 md:px-[clamp(1rem,8vw,50rem)]">
            <FeatureCard title={"Crafted Websites"} aspect="aspect-[2/1]" />
            <FeatureCard title={"Website Redesign"} aspect="aspect-[2/1]" />
            <FeatureCard
              title={"Maintenance & Ongoing Support"}
              aspect="aspect-[2/1]"
            />
            <FeatureCard title={"Paralegal Assistant"} aspect="aspect-[2/1]" />
            <FeatureCard title={"Appointment Setter"} aspect="aspect-[2/1]" />
            <FeatureCard
              title={"Social Media Management"}
              aspect="aspect-[2/1]"
            />
          </div>
        </article>
        <article ref={ref} className="flex flex-col pb-20 z-10">
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
          <div className="flex justify-center py-6">
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
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 md:px-[clamp(1rem,8vw,50rem)]">
            {isTerm === "project" &&
              projectPlans.map((project) => <PricingCard {...project} />)}
            {isTerm === "long-term" &&
              longTermPlans.map((project) => <PricingCard {...project} />)}
          </div>
        </article>
      </section>
    </>
  );
}

const Arrow = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-end ${className}`}>
      <svg
        width="287"
        height="15"
        viewBox="0 0 287 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M286.389 8.07106C286.78 7.68054 286.78 7.04737 286.389 6.65685L280.026 0.292885C279.635 -0.0976396 279.002 -0.0976396 278.611 0.292885C278.221 0.683409 278.221 1.31657 278.611 1.7071L284.268 7.36395L278.611 13.0208C278.221 13.4113 279.002 13.4113 279.002 14.0445C279.002 14.8255 279.635 14.8255 280.026 14.435L286.389 8.07106ZM0 7.36395V8.36395H285.682V7.36395V6.36395H0V7.36395Z"
          fill="white"
        />
      </svg>
    </div>
  );
};
