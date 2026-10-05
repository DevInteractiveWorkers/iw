"use client";

import Link from "next/link";
import { useState } from "react";
import ProductCard from "@/components/product-card";
import Switch from "@/components/form/switch";
import Ticket from "@/components/pricing/ticket";
import PageHero from "@/components/page-hero";
import { useIsMobile } from "@/lib/useMobile";
import { useScrollIntoView } from "@/lib/use-scroll-into-view";
import PricingCard from "@/components/pricing-card";

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
        <article ref={ref} className="flex flex-col pb-20 z-10">
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
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            <PricingCard
              planName={"ONE WEEK-FREE"}
              planDescription={""}
              benefits={[
                { text: "Bilingual (English & Spanish)", isIncluded: true },
                {
                  text: "Enterprise-grade secured hardware & software",
                  isIncluded: true,
                },
                {
                  text: "Zero local HR, payroll, or legal liabilities",
                  isIncluded: true,
                },
                {
                  text: "Single flat, tax-deductible invoice",
                  isIncluded: true,
                },
                { text: "24/7 Availability", isIncluded: true },
              ]}
              cta={{ label: "Start a Project", onClick: () => {} }}
            />
            <PricingCard
              planName={"Long-Term"}
              planDescription={""}
              benefits={[
                { text: "Bilingual (English & Spanish)", isIncluded: true },
                {
                  text: "Enterprise-grade secured hardware & software",
                  isIncluded: true,
                },
                {
                  text: "Zero local HR, payroll, or legal liabilities",
                  isIncluded: true,
                },
                {
                  text: "Single flat, tax-deductible invoice",
                  isIncluded: true,
                },
                { text: "24/7 Availability", isIncluded: true },
              ]}
              cta={{ label: "Start a Project", onClick: () => {} }}
            />
            <PricingCard
              planName={"ONE WEEK-FREE"}
              planDescription={""}
              benefits={[
                { text: "Bilingual (English & Spanish)", isIncluded: true },
                {
                  text: "Enterprise-grade secured hardware & software",
                  isIncluded: true,
                },
                {
                  text: "Zero local HR, payroll, or legal liabilities",
                  isIncluded: true,
                },
                {
                  text: "Single flat, tax-deductible invoice",
                  isIncluded: true,
                },
                { text: "24/7 Availability", isIncluded: true },
              ]}
              cta={{ label: "Start a Project", onClick: () => {} }}
            />
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
