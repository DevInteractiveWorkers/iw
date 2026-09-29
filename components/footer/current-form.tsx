"use client";

import { usePathname } from "next/navigation";
import GetHired from "../form/get-hired";
import SplitText from "../text-animation/SplitText";
import MainForm from "../form/form";
import { useScrollIntoView } from "@/lib/use-scroll-into-view";
import AffiliatesFAQ from "../affiliates/faq";
import AffiliateForm from "../form/affiliateForm";

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
  const { ref } = useScrollIntoView<HTMLElement>();
  return (
    <>
      <section>
        <article>
          <MainForm heading={false} />
        </article>
        <article ref={ref}>
          <SplitText
            className="md:text-5xl text-xl py-4"
            textAlign="start"
            text={"Do you want to joint our team?"}
          />
          <GetHired heading={false} subheading={false} />
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
