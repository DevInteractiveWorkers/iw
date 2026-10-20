"use client";

import { usePathname } from "next/navigation";
import GetHired from "../form/get-hired";
import SplitText from "../text-animation/SplitText";
import MainForm from "../form/form";
import { useScrollIntoView } from "@/lib/use-scroll-into-view";
import AffiliatesFAQ from "../affiliates/faq";
import AffiliateForm from "../form/affiliateForm";
import IWGlobe from "../globe/globe";
import PageDivision from "../page-division";
import { useIsMobile } from "@/lib/useMobile";

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
  return (
    <>
      <AffiliatesFAQ />
      <AffiliateForm />
    </>
  );
}
