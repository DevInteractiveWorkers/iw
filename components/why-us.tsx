import FadeInContent from "./FadeInContent";
import FeatureCard from "./feature-cards";
import { TransitionLink } from "./link";
import PageDivision from "./page-division";
import SplitText from "./text-animation/SplitText";
import WhyUsCard from "./why-us-card";

export default function WhyUs() {
  return (
    <section className="relative mb-10 min-h-screen w-full flex flex-col items-center gap-6 px-[clamp(1rem,8vw,50rem)]">
      <div className="relative w-full">
        <PageDivision className="bottom-0" />
        <SplitText
          delay={100}
          textAlign="start"
          className="font-medium lg:text-5xl leading-none pt-14 pb-4"
          text={
            <>
              Smart Staffing Solutions
              <br />
              for Modern Businesses
            </>
          }
        />
      </div>
      <div className="grid md:grid-cols-[40%_auto] grid-cols-1 h-full">
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
          <WhyUsCard
            title="Risk-Free Scaling"
            src="/stock/por_siempre_nacho.png"
            style={{ position: "sticky", top: "5rem" }}
            icon={"shield"}
            content={
              <>
                Expand your workforce without the red tape. We act as the
                Employer of Record (EOR), absorbing all local payroll, taxes,
                and labor law compliance. You get elite{" "}
                <b className="font-semibold">Operational Representatives</b>; we
                take the liability
              </>
            }
          />
          <WhyUsCard
            title="Turnkey IT Infrastructure"
            src="/stock/iw-2026-scheduling.png"
            style={{ position: "sticky", top: "10rem" }}
            icon={"notes"}
            content={
              <>
                 We don’t expect our{" "}
                <b className="font-semibold">specialists</b> to work on sub-par
                personal laptops. We provision, manage, and secure all hardware
                and software. It’s a true plug-and-play operational hub.
              </>
            }
          />
        </div>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        <FadeInContent>
          <FeatureCard
            title="Pre-Vetted Top Talent"
            content="Rigorous multi-stage screening processes ensure you get top 1% communication, reliability, and technical skills."
            icon="diamond"
          />
        </FadeInContent>
        <FadeInContent delay={0.1}>
          <FeatureCard
            title="Cost-Effective Scaling"
            content="Cut overhead costs by up to 70% compared to traditional local hiring without compromising on quality."
            icon="line-chart-up-02"
          />
        </FadeInContent>
        <FadeInContent delay={0.2}>
          <FeatureCard
            title="Seamless Integration"
            content="Our remote staff adapt quickly to your company culture, time zones, and existing tech stack (Slack, Google Workspace, CRM tools, etc.)."
            icon="refresh-01"
          />
        </FadeInContent>
        <FadeInContent delay={0.3}>
          <FeatureCard
            title="Dedicated Management Support"
            content="Our remote staff adapt quickly to your company culture, time zones, and existing tech stack (Slack, Google Workspace, CRM tools, etc.)."
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
