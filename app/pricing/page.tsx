"use client";

import Link from "next/link";
import { useState } from "react";
import ProductCard from "@/components/product-card";
import Switch from "@/components/form/switch";
import Ticket from "@/components/pricing/ticket";
import PageHero from "@/components/page-hero";
import { useIsMobile } from "@/lib/useMobile";
import { useScrollIntoView } from "@/lib/use-scroll-into-view";

export default function PricingPage() {
  const isMobile = useIsMobile();
  const [isTerm, setIsTerm] = useState<"long-term" | "project">("long-term");

  const { ref } = useScrollIntoView<HTMLElement>();

  return (
    <section id="pricing">
      <PageHero
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

      <article ref={ref} className="flex flex-col border-t pb-20">
        <div className="flex justify-end py-6">
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

        <div className="grid md:grid-cols-[auto_65%] lg:grid-cols-[auto_80%] gap-6 items-stretch">
          {/* LEFT */}
          <aside className="h-full">
            <ProductCard
              className="p-6 h-full"
              style={{ height: "100%" }}
              disableHover
            >
              <h4 className="text-[clamp(1.5rem,2.5vw,1.875rem)] font-medium leading-tight">
                Want more traffic and leads?
              </h4>

              <p className="py-6 text-[clamp(1rem,1.5vw,1.25rem)]">
                Get a Specialized Productized Packages that starts with your
                goals.
              </p>

              <h5 className="text-[clamp(1.5rem,2.5vw,1.875rem)] font-medium">
                Why us?
              </h5>

              <ul className="py-6 text-[clamp(1rem,1.5vw,1.25rem)] flex flex-col gap-6">
                <li>Bilingual (English and Spanish)</li>
                <li>Adaptable</li>
                <li>Professionals in their field</li>
                <li>24/7 Availability</li>
              </ul>
            </ProductCard>
          </aside>

          {/* RIGHT */}
          <div
            key={isTerm ? "project" : "long-term"}
            className="grid grid-rows-2 gap-6 min-h-0 animate-in fade-in duration-150"
          >
            <>
              {/* ONE-WEEK */}
              <ProductCard
                className="p-6 flex flex-col gap-10 h-full min-h-0 max-md:overflow-hidden"
                style={{
                  width: isTerm === "project" || isMobile ? "100%" : "70%",
                }}
                disableHover
              >
                {isTerm === "long-term" ? (
                  <>
                    <Arrow className="max-md:hidden" />

                    <div className="grid md:grid-cols-[60%_auto] grid-cols-1 flex-1">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <h2 className="text-[clamp(3.5rem,5vw,6rem)] leading-none pb-2">
                          Start with
                          <br /> ONE-WEEK
                          <br /> FREE
                        </h2>
                      </div>

                      <div className="flex justify-end">
                        <Ticket />
                      </div>
                    </div>

                    <Arrow />
                  </>
                ) : (
                  <>
                    <div className="flex flex-col justify-between flex-1">
                      <div>
                        <h2 className="text-[clamp(3rem,5vw,6rem)] leading-none pb-6">
                          100%
                          <br />
                          Continuity
                          <br />
                          Guarantee
                        </h2>

                        <p className="text-[clamp(1rem,1.5vw,1.25rem)] max-w-xl leading-relaxed">
                          Dedicated coverage with cross-trained standby agents,
                          so your operations never pause when someone is
                          unavailable.
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-x-8 gap-y-3 pt-8 text-sm md:text-base">
                        <span>Dedicated Coverage</span>
                        <span>Cross-Trained Team</span>
                        <span>Always Ready</span>
                      </div>
                    </div>
                  </>
                )}
              </ProductCard>

              {/* CUSTOM */}
              <ProductCard
                className="p-6 grid grid-cols-1 items-end h-full min-h-0"
                disableHover
              >
                <div className="h-full md:w-1/2">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <h2 className="text-[clamp(2rem,5vw,3.75rem)] leading-none pb-2">
                      {isTerm === "long-term" ? "Dedicated" : "Custom"}
                    </h2>

                    <span className="text-xs md:text-sm whitespace-nowrap">
                      {isTerm === "long-term" ? "/Long Term" : "/Per Project"}
                    </span>
                  </div>

                  <div className="w-full flex justify-between border-b border-white/20 py-4">
                    {isTerm === "long-term" ? (
                      <>
                        <span>Delivery time</span>
                        <span>Undefined</span>
                      </>
                    ) : (
                      <>
                        <span>Engagement</span>
                        <span>Ongoing</span>
                      </>
                    )}
                  </div>

                  <p className="text-[clamp(1rem,1.5vw,1.125rem)] pt-4 leading-relaxed">
                    {isTerm === "long-term" ? (
                      <>
                        Build operational continuity around your business with a
                        dedicated, cross-trained team that stays aligned with
                        your workflows as you grow.
                        <br />
                        <br />
                        No hardware burden, no local payroll administration, and
                        no single point of failure. Your unit is fully
                        provisioned and managed as operational infrastructure.
                        <br />
                        <br />
                        <ul className="md:pl-10 p-4 list-disc">
                          <li>Zero Hardware &amp; IT Hassle</li>
                          <li>100% Continuity Guarantee</li>
                          <li>Zero HR &amp; Legal Liability</li>
                          <li>One flat, tax-deductible monthly invoice</li>
                        </ul>
                      </>
                    ) : (
                      <>
                        Scale coverage instantly with bilingual,
                        security-trained VAs who handle calls, dispatch, and
                        scheduling around the clock.
                      </>
                    )}
                  </p>
                </div>

                <div className="flex w-full justify-end">
                  <Link
                    href="https://calendly.com/interactiveworkersgm/30min"
                    target="_blank"
                    className="px-8 py-4 flex items-center justify-center bg-black rounded h-max underline md:w-1/2 hover:scale-95 active:bg-white active:text-iw-red-1 transition-all duration-150"
                  >
                    {isTerm === "long-term"
                      ? "Book Your Free 15-Minute Discovery Call"
                      : "Build Your Operational Unit"}
                  </Link>
                </div>
              </ProductCard>
            </>
          </div>
        </div>

        <h6 className="text-[clamp(2rem,4vw,3.75rem)] leading-[1.05] pt-10">
          More quality less overload with the right support
        </h6>
      </article>
    </section>
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
