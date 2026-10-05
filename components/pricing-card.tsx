import ProductCard from "./product-card";

import { ReactNode } from "react";

export interface PricingBenefit {
  id?: string;
  text: string;
  isIncluded: boolean;
  icon?: ReactNode;
}

export interface ContactSalesCTA {
  label: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
}

export interface PricingCardProps {
  planName: string;
  planDescription: string;
  benefits: PricingBenefit[];
  cta: ContactSalesCTA;
  isFeatured?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function PricingCard({
  planName,
  planDescription,
  benefits,
  cta,
  isFeatured,
  className,
  style,
}: PricingCardProps) {
  return (
    <ProductCard
      className={`p-4 flex flex-col gap-6 justify-between h-full ${className}`}
      style={style}
      disableHover
    >
      <h1 className="md:text-[clamp(2rem,4vw,3.5rem)] text-center leading-[1] text-3xl font-medium pb-2 border-b border-white">
        {planName}
      </h1>
      <ul className="flex flex-col gap-2">
        {benefits.map((benefit, i) => (
          <li key={i} className="border-b pb-2 border-white">
            {benefit.text}
          </li>
        ))}
      </ul>
      <div className="flex md:flex-row flex-col items-center justify-between gap-2">
        <button
          onClick={cta.onClick}
          className="px-6 py-4 text-xl rounded bg-black"
        >
          {cta.label}
        </button>
        {/* <span>Details ➔</span> */}
      </div>
    </ProductCard>
  );
}
