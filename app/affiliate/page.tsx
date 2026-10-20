"use client";

import React from "react";
import Image from "next/image";
import ProductCard from "@/components/product-card";
import PageHero from "@/components/page-hero";
import SplitText from "@/components/text-animation/SplitText";
import { useScrollIntoView } from "@/lib/use-scroll-into-view";
import { useIsMobile } from "@/lib/useMobile";
import Accordion from "@/components/accordion";

type AffiliateCardProps = {
  src: string;
  title: string;
  objectPosition?: string | number;
};

const whyUs: AffiliateCardProps[] = [
  {
    src: "/stock/stock (11).png",
    title: "Comprehensive Marketing Support",
  },
  { src: "/stock/stock (10).png", title: "Personalized  Guidance" },
  {
    src: "/stock/stock (8).png",
    title: "Open Communication",
  },
];

const AffiliatePage = () => {
  const { ref } = useScrollIntoView<HTMLElement>({ offset: 80 });
  const isMobile = useIsMobile();

  return (
    <>
      <section className="w-full z-10 px-[clamp(1rem,8vw,50rem)] text-white pb-10">
        <PageHero
          division={false}
          heading={
            <>
              Join the InteractiveWorkers
              <br />
              Affiliate Program!
            </>
          }
        />
        <SplitText
          className="text-xl lg:w-2/3"
          textAlign={"start"}
          text={
            <>
              At InteractiveWorkers, we help businesses replace the cost and
              risk of local hiring with fully managed operational units. With
              our Affiliate Program, you earn by referring companies to
              infrastructure they'll want to keep, not a freelancer they'll
              churn through in 90 days
            </>
          }
        />
        <div className="relative w-full flex items-center justify-center">
          <div className="bg-white w-dvw absolute h-1/3 bottom-0" />
          <Accordion
            images={whyUs.map((c) => ({ src: c.src, label: c.title }))}
            imagesEffect="saturate(0) contrast(1.2)"
            // imagesEffect="saturate(0) brightness(0.4) sepia(1) hue-rotate(335deg) saturate(6.5) contrast(1.4)"
            alwaysOpened
            // images={[
            //   { src: `/stock/stock (8).png` },
            //   { src: `/stock/stock (11).png` },
            //   { src: `/stock/stock (10).png` },
            // ]}
          />
        </div>
      </section>
      <section className="bg-white px-[clamp(1rem,8vw,50rem)] pt-2">
        <article
          ref={ref}
          className="w-full md:w-10/12 mx-auto flex flex-col items-center my-4 md:my-32"
        >
          {/* <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between">
            {whyUs.map((c, i) => (
              <FadeInContent
                key={i}
                delay={isMobile ? 0 : i * 0.1}
                className="h-full"
              >
                <AffiliateCard {...c} />
              </FadeInContent>
            ))}
          </div> */}
          <div className="grid md:grid-cols-2 py-4 pt-6">
            <h2 className="text-[clamp(2rem,4vw,3.75rem)] leading-[1.05] pb-6">
              Why partner
              <br />
              with us?
            </h2>
            <p className="text-xl text-end">
              Now, with the launch of our Affiliate Program, you have the
              opportunity to partner with us and boost your earnings while
              helping companies grow with our trusted virtual staffing
              solutions.
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
            text={<>Ready to get started?</>}
          />
          <div className="flex justify-end">
            <SplitText
              className="text-xl md:w-2/3 lg:w-1/3 pt-4"
              textAlign="end"
              text={
                <>
                  Enhance your earning potential while offering valuable
                  services to businesses looking for remote talent.
                </>
              }
            />
          </div>
        </article>
      </section>
    </>
  );
};

const AffiliateCard = ({ src, title, objectPosition }: AffiliateCardProps) => {
  return (
    <ProductCard
      className="pointer-events-none"
      style={{ overflow: "hidden", height: "100%", flex: 1 }}
    >
      <Image
        src={src}
        alt={title}
        width={1080}
        height={1080}
        quality={100}
        className={`aspect-square border-white border-b object-cover pointer-events-none -z-0`}
        style={{ objectPosition: objectPosition ?? "center center" }}
      />
      <p className="p-4 font-medium text-2xl">{title}</p>
    </ProductCard>
  );
};

export default AffiliatePage;
