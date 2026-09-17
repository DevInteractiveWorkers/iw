"use client";
import React from "react";
import PageHero from "@/components/page-hero";

const ContactUs = () => {
  return (
    <section className="flex flex-col text-white">
      <PageHero
        heading={
          <span className="text-[clamp(4rem,4vw,7rem)] font-medium leading-[1.05] pb-6">
            Talk to Our Team
          </span>
        }
        description={
          <>
            Tell us what you need covered <br />
            we'll scope the right operational unit for it.
          </>
        }
        division={false}
      />
    </section>
  );
};

export default ContactUs;
