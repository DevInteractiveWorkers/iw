"use client";

import React from "react";
import PageHero from "@/components/page-hero";
import SplitText from "@/components/text-animation/SplitText";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useIsMobile } from "@/lib/useMobile";
import MainForm from "@/components/form/form";
import GetHired from "@/components/form/get-hired";
import PageDivision from "@/components/page-division";
import CTAButton from "@/components/buttons/cta-button";
import { useRouter } from "next/navigation";

const loadGlobe = () => import("@/components/globe/globe");

const GlobePlaceholder = () => (
  <div className="h-screen w-full" aria-hidden="true" />
);

const IWGlobe = dynamic(loadGlobe, {
  ssr: false,
  loading: GlobePlaceholder,
});

const ContactUs = () => {
  const isMobile = useIsMobile();
  const router = useRouter();

  return (
    <section>
      <article className="relative flex flex-col px-[clamp(1rem,8vw,50rem)] overflow-hidden">
        <div
          className="absolute top-0 left-0 w-dvw h-full flex justify-center items-start"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 50%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 50%, transparent 100%)",
            transform: !isMobile ? `translateX(25%)` : "",
            height: isMobile ? "50vh" : "100%",
          }}
        >
          <div className="absolute">
            <IWGlobe sway autoRotate={false} />
          </div>
          <div className="absolute top-0 max-md:right-0 md:w-1/2 h-full px-[clamp(1rem,8vw,50rem)] pointer-events-none select-none">
            <Image
              width={1080}
              height={1080}
              alt="InteractiveWorker"
              src={"/team-2026/SOFIA/sofia_02.png"}
              className="object-top object-cover h-full pt-10"
            />
          </div>
        </div>
        <PageHero
          dark={false}
          heading={"Talk to Our Team"}
          division={false}
          style={isMobile ? { paddingTop: "30vh" } : {}}
        />
        <SplitText
          className="text-xl lg:w-2/3 md:-translate-y-full -translate-y-1/2"
          textAlign={"start"}
          text={
            <>
              Tell us what you need covered <br />
              we'll scope the right operational unit for it.
            </>
          }
        />
      </article>
      <article className="px-[clamp(1rem,8vw,50rem)]">
        <MainForm heading={false} socials={false} />
      </article>
      <article className="bg-iw-red-2 px-[clamp(1rem,8vw,50rem)] py-10 flex w-full gap-6 justify-center items-center">
        <SplitText
          className="md:text-5xl text-xl py-4 text-white"
          text={"Do you want to join our team?"}
        />
        <CTAButton
          onClick={() => router.push("/get-hired")}
          className="[--primary-color:#fff] [--secondary-color:#fff] [--tertiary-color:#dd272d]"
        >
          Get Hired
        </CTAButton>
      </article>
    </section>
  );
};

export default ContactUs;
