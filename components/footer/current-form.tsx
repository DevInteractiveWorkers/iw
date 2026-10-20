"use client";

import { usePathname, useRouter } from "next/navigation";
import GetHired from "../form/get-hired";
import SplitText from "../text-animation/SplitText";
import MainForm from "../form/form";
import { useScrollIntoView } from "@/lib/use-scroll-into-view";
import AffiliatesFAQ from "../affiliates/faq";
import AffiliateForm from "../form/affiliateForm";
import IWGlobe from "../globe/globe";
import PageDivision from "../page-division";
import { useIsMobile } from "@/lib/useMobile";
import FadeInContent from "../FadeInContent";
import Image from "next/image";
import CTAButton from "../buttons/cta-button";
import FlipElement from "../flip-element";

export default function FooterForm() {
  const pathname = usePathname();

  switch (pathname) {
    case "/contact": {
      return <ContactForms />;
    }
    case "/affiliate": {
      return <AffiliateForms />;
    }
    case "/policy": {
      return;
    }
    default: {
      return <MainForm />;
    }
  }
}

function ContactForms() {
  const isMobile = useIsMobile();

  return (
    <>
      <section>
        <article className="px-[clamp(1rem,8vw,50rem)]">
          <MainForm heading={false} socials={false} />
        </article>
        <article className="bg-iw-red-2 px-[clamp(1rem,8vw,50rem)]">
          <SplitText
            className="md:text-5xl text-xl py-4 text-white w-full"
            textAlign={isMobile ? "center" : "end"}
            text={"Do you want to join our team?"}
          />
          <PageDivision className="relative text-white mb-6" />
          <div className="p-4 bg-white rounded-t">
            <GetHired />
          </div>
        </article>
      </section>
    </>
  );
}

function AffiliateForms() {
  const router = useRouter();

  return (
    <>
      <AffiliatesFAQ />
      {/* <AffiliateForm /> */}
      <section className="flex flex-col justify-center items-center md:pt-20 py-10 min-h-screen">
        <FlipElement className="max-w-[150px] pb-10 mt-20">
          <Image
            width={1080}
            height={1080}
            alt="logo"
            src={"/logo/03_Logo_Mark/03_Logo_Mark-02.png"}
            className="select-none block"
          />
        </FlipElement>
        <div className="flex w-full flex-col justify-center items-center">
          <div className="flex flex-col md:px-10 px-4 mb-10 md:w-3/6">
            <SplitText
              className="md:text-5xl text-xl py-4"
              textAlign="center"
              text={
                <>
                  Beyond the obvious benefits, remote staff can address hidden
                  needs.
                </>
              }
            />
            <SplitText
              tag="h4"
              className="md:text-5xl text-xl py-4 font-medium"
              textAlign="center"
              text={<>Join the Affiliate Program!</>}
            />
          </div>
          <CTAButton
            className="[--primary-color:#dd272d] [--secondary-color:#dd272d] [--tertiary-color:#fff] rounded font-bold text-4xl px-10 py-5 max-w-fit mt-8 bg-white hover:bg-inherit"
            onClick={() =>
              router.push(
                `https://wa.me/13322062891?text=${encodeURIComponent(
                  `Hello InteractiveWorkers!\nI'd like to know more about the Affiliate Program!`,
                )}`,
              )
            }
          >
            Contact Us!
          </CTAButton>
        </div>
      </section>
    </>
  );
}
