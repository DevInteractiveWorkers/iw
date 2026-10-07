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
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 lg:px-[clamp(1rem,8vw,50rem)] min-h-screen">
        <FeatureCard
          icon="alert-triangle"
          title={"Private Security & Guard Operations"}
          aspect={"aspect-[2/1]"}
          style={
            isMobile ? {} : { maxHeight: 300, transform: "translateY(-50%)" }
          }
          content={
            "Alarm response dispatch, mobile patrol tracking, guard deployment, and real-time incident reporting."
          }
        />
        <FeatureCard
          icon="truck"
          title={"Trucking & Freight Logistics"}
          aspect={"aspect-[2/1]"}
          style={isMobile ? {} : { maxHeight: 300 }}
          content={
            "Long-haul, local, flatbed, and specialized freight coordination."
          }
        />
        <FeatureCard
          icon="signal"
          title={"Field Service"}
          aspect={"aspect-[2/1]"}
          style={
            isMobile ? {} : { maxHeight: 300, transform: "translateY(-50%)" }
          }
          content={
            "Alarm response dispatch, mobile patrol tracking, guard deployment, and real-time incident reporting."
          }
        />
        <FeatureCard
          icon="map-03"
          title={"Towing & Roadside Assistance"}
          aspect={"aspect-[2/1]"}
          style={
            isMobile ? {} : { maxHeight: 300, transform: "translateY(-50%)" }
          }
          content={"Emergency dispatch and driver routing."}
        />
        <FeatureCard
          icon="compass"
          title={"Courier & Last-Mile Delivery"}
          aspect={"aspect-[2/1]"}
          style={isMobile ? {} : { maxHeight: 300 }}
          content={"On-demand local logistics and fleet tracking."}
        />
        <FeatureCard
          icon="marker-06"
          title={"Non-Emergency Medical Transportation (NEMT)"}
          aspect={"aspect-[2/1]"}
          style={
            isMobile ? {} : { maxHeight: 300, transform: "translateY(-50%)" }
          }
          content={"Patient pickup and transit coordination."}
        />
      </div>
    </section>
  );
}
