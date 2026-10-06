import { useIsMobile } from "@/lib/useMobile";
import FeatureCard from "./feature-cards";
import SplitText from "./text-animation/SplitText";

export default function IndustriesWeServe() {
  const isMobile = useIsMobile();

  return (
    <section className="px-[clamp(1rem,8vw,50rem)] flex flex-col items-center">
      <SplitText
        tag="h3"
        className="
            text-[clamp(2rem,4vw,3.75rem)]
            leading-[1.05]
            pb-6
          "
        textAlign={"center"}
        text={
          <>
            Industries <br />
            We Serve
          </>
        }
      />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 md:px-[clamp(1rem,8vw,50rem)]">
        <FeatureCard
          title={"Private Security & Guard Operations"}
          aspect={"aspect-[2/1]"}
          style={{ transform: isMobile ? "none" : "translateY(-50%)" }}
          content={
            "Alarm response dispatch, mobile patrol tracking, guard deployment, and real-time incident reporting."
          }
        />
        <FeatureCard
          title={"Trucking & Freight Logistics"}
          aspect={"aspect-[2/1]"}
          content={
            "Long-haul, local, flatbed, and specialized freight coordination."
          }
        />
        <FeatureCard
          title={"Field Service"}
          aspect={"aspect-[2/1]"}
          style={{ transform: isMobile ? "none" : "translateY(-50%)" }}
          content={
            "Alarm response dispatch, mobile patrol tracking, guard deployment, and real-time incident reporting."
          }
        />
        <FeatureCard
          title={"Towing & Roadside Assistance"}
          aspect={"aspect-[2/1]"}
          style={{ transform: isMobile ? "none" : "translateY(-50%)" }}
          content={"Emergency dispatch and driver routing."}
        />
        <FeatureCard
          title={"Courier & Last-Mile Delivery"}
          aspect={"aspect-[2/1]"}
          content={"On-demand local logistics and fleet tracking."}
        />
        <FeatureCard
          title={"Non-Emergency Medical Transportation (NEMT)"}
          aspect={"aspect-[2/1]"}
          style={{ transform: isMobile ? "none" : "translateY(-50%)" }}
          content={"Patient pickup and transit coordination."}
        />
      </div>
    </section>
  );
}
