import Link from "next/link";
import ProductCard from "./product-card";

import { ReactNode } from "react";
import SplitText from "./text-animation/SplitText";
import { useIsMobile } from "@/lib/useMobile";

export interface PricingBenefit {
  id?: string;
  text: string;
  isIncluded: boolean;
  icon?: ReactNode;
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
  const isMobile = useIsMobile();

  return (
    <ProductCard
      className={`p-4 flex flex-col gap-6 justify-between h-full ${className}`}
      style={style}
      disableHover
    >
      <h1 className="md:text-[clamp(2rem,4vw,3.5rem)] text-center leading-[1] text-3xl font-medium pb-2 border-b border-white">
        <SplitText text={planName} />
      </h1>
      <ul className="flex flex-col gap-2 h-full">
        {benefits.map((benefit, i) => (
          <li key={i} className={`border-b pb-2 border-white`}>
            <SplitText
              text={benefit.text}
              textAlign="start"
              delay={isMobile ? 0 : i * 0.1}
              className={
                benefit.isIncluded ? "" : "line-through italic opacity-50"
              }
            />
          </li>
        ))}
      </ul>
      <div className="flex md:flex-row flex-col items-center justify-between gap-2">
        <Link
          href={cta.href}
          className="px-6 py-4 text-xl rounded bg-black hover:scale-95 transition-all duration-300 active:bg-white active:text-black"
        >
          <SplitText text={cta.label} />
        </Link>
        {cta.detailHref && (
          <SplitText text={<Link href={cta.detailHref}>Details ➔</Link>} />
        )}
      </div>
    </ProductCard>
  );
}
