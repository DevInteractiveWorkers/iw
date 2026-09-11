"use client";

import React from "react";
import NavbarComponent from "@/components/navbar";
import AffiliateForm from "@/components/form/affiliateForm";
import Image from "next/image";
import AffiliatesFAQ from "@/components/affiliates/faq";
import ProductCard from "@/components/product-card";
import PageHero from "@/components/page-hero";
import FadeInContent from "@/components/FadeInContent";
import SplitText from "@/components/text-animation/SplitText";
import PageDivision from "@/components/page-division";
import { useScrollIntoView } from "@/lib/use-scroll-into-view";

type AffiliateCardProps = {
  src: string;
  title: string;
  objectPosition?: string | number;
};

const whyUs: AffiliateCardProps[] = [
  {
    src: "/dispatch/heroes.png",
    title: "Comprehensive Marketing Support",
    objectPosition: "0% 5%",
  },
  { src: "/top-view.png", title: "Personalized  Guidance" },
  {
    src: "/about/what-we-are.png",
    title: "Open Communication",
    objectPosition: "20% center",
  },
];

const AffiliatePage = () => {
  const { ref } = useScrollIntoView<HTMLElement>({ offset: 80 });

  return (
    <section className="w-full px-2 z-10">
      <PageHero
        heading={
          <>
            Join the InteractiveWorkers
            <br />
            Affiliate Program!
          </>
        }
        description={
          <>
            At InteractiveWorkers, we help businesses replace the cost and risk
            of local hiring with fully managed operational units. With our
            Affiliate Program, you earn by referring companies to infrastructure
            they'll want to keep, not a freelancer they'll churn through in 90
            days
          </>
        }
      />
      <article
        ref={ref}
        className="w-full md:w-10/12 mx-auto flex flex-col items-center my-4 md:my-32"
      >
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between">
          {whyUs.map((c, i) => (
            <FadeInContent key={i} delay={i * 0.1}>
              <AffiliateCard {...c} />
            </FadeInContent>
          ))}
        </div>
        <div className="grid md:grid-cols-2 py-4 pt-6">
          <h2 className="text-[clamp(2rem,4vw,3.75rem)] leading-[1.05] pb-6">
            Why partner
            <br />
            with us?
          </h2>
          <p className="text-xl text-end">
            Now, with the launch of our Affiliate Program, you have the
            opportunity to partner with us and boost your earnings while helping
            companies grow with our trusted virtual staffing solutions.
          </p>
        </div>
      </article>
      <article className="flex flex-col relative">
        <SplitText
          tag="h2"
          className="
            text-[clamp(2rem,4vw,3.75rem)]
            leading-[1.05]
            pb-6
          "
          textAlign="start"
          text={<>Ready to get started!</>}
        />
        <div className="flex justify-end">
          <PageDivision />
          <SplitText
            className="text-xl md:w-2/3 lg:w-1/3 pt-4"
            textAlign="end"
            text={
              <>
                Enhance your earning potential while offering valuable services
                to businesses looking for remote talent.
              </>
            }
          />
        </div>
      </article>
    </section>
  );
};

const AffiliateCard = ({ src, title, objectPosition }: AffiliateCardProps) => {
  return (
    <ProductCard className="pointer-events-none" style={{ overflow: "hidden" }}>
      <Image
        src={src}
        alt={title}
        width={1080}
        height={1080}
        className={`aspect-square border-white border-b object-cover pointer-events-none -z-0`}
        style={{ objectPosition: objectPosition ?? "center center" }}
      />
      <p className="p-4 font-medium text-2xl">{title}</p>
    </ProductCard>
  );
};

export default AffiliatePage;
