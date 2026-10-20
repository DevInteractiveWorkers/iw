"use client";

import { useIsMobile } from "@/lib/useMobile";
import FadeInContent from "./FadeInContent";
import FeatureCard from "./feature-cards";
import { TransitionLink } from "./link";
import PageDivision from "./page-division";
import SplitText from "./text-animation/SplitText";
import WhyUsCard, { WhyUsCardProps } from "./why-us-card";

const WhyUsCards: WhyUsCardProps[] = [
  {
    title: "Risk-Free Scaling",
    src: "/stock/por_siempre_nacho.png",
    icon: "shield-check",
    content: (
      <>
        Expand your workforce without the red tape. We act as the Employer of
        Record (EOR), absorbing all local payroll, taxes, and labor law
        compliance. You get elite{" "}
        <b className="font-semibold">Operational Representatives</b>; we take
        the liability
      </>
    ),
  },
  {
    title: "Turnkey IT Infrastructure",
    src: "/stock/iw-2026-scheduling.png",
    icon: "file-edit-02",
    content: (
      <>
        We don't expect our <b className="font-semibold">specialists</b> to work
        on sub-par personal laptops. We provision, manage, and secure all
        hardware and software. It's a true plug-and-play operational hub.
      </>
    ),
  },
  {
    title: "Bilingual (Spanish & English)",
    src: "/stock/iw-team-2026.png",
    icon: "message-chat-011",
    content: (
      <>
        Break down communication barriers with C1-C2, fully fluent{" "}
        <b className="font-semibold">bilingual talent</b>. Our team members
        operate seamlessly in both English and Spanish, ensuring clear alignment
        with your U.S. operations and Latin American markets.
      </>
    ),
  },
];

export default function WhyUs() {
  const isMobile = useIsMobile();

  return (
    <section className="relative mb-10 min-h-screen w-full flex flex-col items-center gap-6 px-[clamp(1rem,8vw,50rem)]">
      <div className="relative w-full">
        <PageDivision className="bottom-0" />
        <SplitText
          delay={isMobile ? 0 : 100}
          textAlign="start"
          className="font-medium text-[clamp(2rem,4vw,3rem)] leading-none pt-14 pb-4"
          text={
            <>
              Smart Staffing Solutions
              <br />
              for Modern Businesses
            </>
          }
        />
      </div>
      <div className="grid lg:grid-cols-[40%_auto] grid-cols-1 gap-6 h-full">
        <div className="w-full h-full">
          <p className="sticky top-20">
            Running a business shouldn't mean drowning in administrative
            overhead or struggling to find reliable talent. At{" "}
            <b className="font-semibold">InteractiveWorkers</b>, we bridge the
            gap between ambitious companies and exceptional global
            professionals.
            <br />
            <br />
            We handle the recruiting, vetting, and onboarding so you can focus
            on scaling your core business.
          </p>
        </div>
        <div className="w-full h-full flex flex-col gap-6">
          {WhyUsCards.map((card, i) => (
            <WhyUsCard
              {...card}
              style={
                !isMobile
                  ? { position: "sticky", top: `calc(5rem * ${i + 1})` }
                  : {}
              }
            />
          ))}
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
        <FadeInContent>
          <FeatureCard
            title="Pre-Vetted Top Talent"
            aspect="md:aspect-[3/4]"
            content="Rigorous multi-stage screening processes ensure you get top 1% communication, reliability, and technical skills."
            icon="diamond"
          />
        </FadeInContent>
        <FadeInContent delay={isMobile ? 0 : 0.1}>
          <FeatureCard
            title="Cost-Effective Scaling"
            aspect="md:aspect-[3/4]"
            content="Cut overhead costs by up to 70% compared to traditional local hiring without compromising on quality."
            icon="line-chart-up-02"
          />
        </FadeInContent>
        <FadeInContent delay={isMobile ? 0 : 0.2}>
          <FeatureCard
            title="Seamless Integration"
            aspect="md:aspect-[3/4]"
            content="Our remote staff adapt quickly to your company culture, time zones, and existing tech stack (Slack, Google Workspace, CRM tools, etc.)."
            icon="refresh-01"
          />
        </FadeInContent>
        <FadeInContent delay={isMobile ? 0 : 0.3}>
          <FeatureCard
            title="Dedicated Management Support"
            aspect="md:aspect-[3/4]"
            content="Ongoing performance oversight and HR support to ensure long-term success and seamless collaboration."
            icon="shield-check"
          />
        </FadeInContent>
      </div>
      <FadeInContent>
        <div className="hover:scale-95 transition-all duration-150">
          <TransitionLink
            href={"/affiliate"}
            className="rounded py-2 px-10 text-xl  bg-iw-red-1  text-white active:text-white
                    transition-all duration-150"
          >
            Affiliate Program
          </TransitionLink>
        </div>
      </FadeInContent>
    </section>
  );
}
