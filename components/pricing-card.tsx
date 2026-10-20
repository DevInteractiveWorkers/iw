"use client";

import Link from "next/link";
import ProductCard from "./product-card";
import { useState } from "react";
import SplitText from "./text-animation/SplitText";
import CTAButton from "./buttons/cta-button";
import Icon from "./icon";

export interface PricingBenefit {
  id?: string;
  text: string;
  isIncluded: boolean;
  icon?: string;
}

export interface ContactSalesCTA {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline";
  detailHref?: string;
}

export interface PricingCardProps {
  planName: string;
  planDescription: string;
  benefits: PricingBenefit[];
  cta: ContactSalesCTA;
  includes?: Omit<PricingCardProps, "cta" & "planDescription" & "includes">;
  isFeatured?: boolean;
  hideHeader?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function PricingCard({
  planName,
  planDescription,
  benefits,
  cta,
  includes,
  isFeatured,
  hideHeader,
  className,
  style,
}: PricingCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <ProductCard
      className={`p-4 flex flex-col gap-6 justify-between h-full ${className}`}
      style={style}
      disableHover
    >
      <header
        className={`md:text-[clamp(2rem,4vw,3.5rem)] text-center leading-[1] text-3xl font-medium pb-2 border-b border-white justify-center ${hideHeader ? "hidden md:flex" : "flex"}`}
      >
        {planName}
      </header>
      <ul className="flex flex-col gap-2 h-full cursor-default">
        {includes && (
          <li className={`border-b pb-2 border-white`}>
            <button
              onClick={() => setIsExpanded((prev) => !prev)}
              aria-expanded={isExpanded}
              className="gap-4 items-center grid grid-cols-[25px_auto]"
            >
              <span
                className={`transition-transform duration-300 ease-out ${isExpanded ? "rotate-45" : "rotate-0"}`}
              >
                <Icon icon={"plus-01"} width={25} />
              </span>
              <p className="italic">
                Everything in <b>{includes.planName}</b>
              </p>
            </button>
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <ul className="overflow-hidden min-h-0 flex flex-col text-xs pl-10 list-['-']">
                {includes.benefits.map((benefit, i) => (
                  <li
                    key={i}
                    className={`transition-all duration-300 ease-out ${isExpanded ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"}`}
                    style={{
                      transitionDelay: isExpanded ? `${i * 40}ms` : "0ms",
                    }}
                  >
                    {benefit.text}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        )}
        {benefits.map((benefit, i) => (
          <li
            key={i}
            className={`border-b pb-2 border-white gap-4 items-center ${benefit.icon ? "grid grid-cols-[25px_auto]" : "flex"}`}
          >
            {benefit.icon && <Icon icon={benefit.icon} width={25} />}
            <SplitText
              text={benefit.text}
              textAlign="start"
              className={
                benefit.isIncluded ? "" : "line-through italic opacity-50"
              }
            />
          </li>
        ))}
      </ul>
      <div className="flex md:flex-row flex-col items-center justify-between gap-2">
        <CTAButton className="bg-black hover:bg-inherit [--primary-color:#fff] [--secondary-color:#fff] [--tertiary-color:#000]">
          {cta.label}
        </CTAButton>
        {/* <Link
          href={cta.href}
          className="px-6 py-4 text-xl rounded bg-black hover:scale-95 transition-all duration-300 active:bg-white active:text-black"
        >
          {cta.label}
        </Link> */}
        {cta.detailHref && (
          <SplitText text={<Link href={cta.detailHref}>Details ➔</Link>} />
        )}
      </div>
    </ProductCard>
  );
}
