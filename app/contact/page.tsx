"use client";
import React from "react";
import NavbarComponent from "@/components/navbar";
import MainForm from "@/components/form/form";
import GetHired from "@/components/form/get-hired";
import SplitText from "@/components/text-animation/SplitText";
import PageHero from "@/components/page-hero";
import { useScrollIntoView } from "@/lib/use-scroll-into-view";

const ContactUs = () => {
  const { ref } = useScrollIntoView<HTMLElement>();

  return (
    <>
      <section className="flex flex-col text-white">
        <NavbarComponent />
        <PageHero
          heading={
            <span className="text-[clamp(4rem,4vw,7rem)] font-medium leading-[1.05] pb-6">
              Get in touch
            </span>
          }
          description={
            <>
              Feel free to contact us anytime! Have a project in mind? Reach out
              to us, and we'll discuss the best way to move forward.
            </>
          }
        />
      </section>
      <section>
        <article>
          <MainForm heading={false} subheading={false} />
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
};

export default ContactUs;
