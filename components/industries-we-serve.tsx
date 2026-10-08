import { useIsMobile } from "@/lib/useMobile";
import FeatureCard from "./feature-cards";
import SplitText from "./text-animation/SplitText";

export default function IndustriesWeServe() {
  const isMobile = useIsMobile();

  return (
    <section className="flex flex-col items-center md:h-screen h-full">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 px-[clamp(1rem,8vw,50rem)] h-full">
        <SplitText
          tag="h3"
          className={`
            md:col-span-3 col-span-1 text-[clamp(2rem,4vw,3.75rem)] leading-[1.05]
            ${isMobile ? "" : "translate-y-1/2"}
          `}
          textAlign={"center"}
          text={
            <>
              Industries <br />
              We Serve
            </>
          }
        />
        <FeatureCard
          icon="alert-triangle"
          title={"Private Security & Guard Operations"}
          style={
            isMobile
              ? {}
              : {
                  height: "100%",
                  aspectRatio: "2 / 1",
                  transform: "translateY(-50%)",
                }
          }
          content={
            "Alarm response dispatch, mobile patrol tracking, guard deployment, and real-time incident reporting."
          }
        />
        <FeatureCard
          icon="truck"
          title={"Trucking & Freight Logistics"}
          style={isMobile ? {} : { aspectRatio: "2 / 1" }}
          content={
            "Long-haul, local, flatbed, and specialized freight coordination."
          }
        />
        <FeatureCard
          icon="signal"
          title={"Field Service"}
          style={
            isMobile
              ? {}
              : {
                  height: "100%",
                  aspectRatio: "2 / 1",
                  transform: "translateY(-50%)",
                }
          }
          content={
            "Alarm response dispatch, mobile patrol tracking, guard deployment, and real-time incident reporting."
          }
        />
        <FeatureCard
          icon="map-03"
          title={"Towing & Roadside Assistance"}
          style={
            isMobile
              ? {}
              : {
                  height: "100%",
                  aspectRatio: "2 / 1",
                  transform: "translateY(-50%)",
                }
          }
          content={"Emergency dispatch and driver routing."}
        />
        <FeatureCard
          icon="compass"
          title={"Courier & Last-Mile Delivery"}
          style={isMobile ? {} : { aspectRatio: "2 / 1" }}
          content={"On-demand local logistics and fleet tracking."}
        />
        <FeatureCard
          icon="marker-06"
          title={"Non-Emergency Medical Transportation (NEMT)"}
          style={
            isMobile
              ? {}
              : {
                  height: "100%",
                  aspectRatio: "2 / 1",
                  transform: "translateY(-50%)",
                }
          }
          content={"Patient pickup and transit coordination."}
        />
      </div>
    </section>
  );
}
