import PageDivision from "./page-division";
import SplitText from "./text-animation/SplitText";
import WhyUsCard from "./why-us-card";

export default function WhyUs() {
  return (
    <section className="relative mb-10 min-h-screen w-full flex flex-col items-center gap-6">
      <PageDivision className="top-0" />
      <div className="w-full sticky top-5">
        <SplitText
          delay={100}
          className="font-medium lg:text-5xl leading-none pt-14 pb-4"
          text={"Why Us?"}
        />
      </div>
      <WhyUsCard
        title="Risk-Free Scaling"
        src="/stock/por_siempre_nacho.png"
        style={{ position: "sticky", top: "5rem" }}
        icon={"shield"}
        content={
          <>
            Expand your workforce without the red tape. We act as the Employer
            of Record (EOR), absorbing all local payroll, taxes, and labor law
            compliance. You get elite{" "}
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
             We don’t expect our <b className="font-semibold">specialists</b> to
            work on sub-par personal laptops. We provision, manage, and secure
            all hardware and software. It’s a true plug-and-play operational
            hub.
          </>
        }
      />
      <WhyUsCard
        title="Bulletproof Reliability"
        src="/stock/iw-team-2026.png"
        style={{ position: "sticky", top: "15rem" }}
        icon={"computer"}
        content={
          <>
             Downtime kills revenue.{" "}
            <b className="font-semibold">Our Managed Units</b> come with
            built-in redundancy and strict Service Level Agreements (SLAs). If a
            representative is unavailable, our infrastructure ensures your
            operations continue seamlessly without missing a beat.
          </>
        }
      />
    </section>
  );
}
