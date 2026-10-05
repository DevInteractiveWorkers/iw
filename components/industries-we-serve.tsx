import SplitText from "./text-animation/SplitText";
import PixelBlast from "./why-us/pixel-blast";

export default function IndustriesWeServe() {
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
        <IndustriesCard
          title={"Private Security & Guard Operations"}
          className="md:-translate-y-1/2"
          content={
            "Alarm response dispatch, mobile patrol tracking, guard deployment, and real-time incident reporting."
          }
        />
        <IndustriesCard
          title={"Trucking & Freight Logistics"}
          content={
            "Long-haul, local, flatbed, and specialized freight coordination."
          }
        />
        <IndustriesCard
          title={"Field Service"}
          className="md:-translate-y-1/2"
          content={
            "Alarm response dispatch, mobile patrol tracking, guard deployment, and real-time incident reporting."
          }
        />
        <IndustriesCard
          title={"Towing & Roadside Assistance"}
          className="md:-translate-y-1/2"
          content={"Emergency dispatch and driver routing."}
        />
        <IndustriesCard
          title={"Courier & Last-Mile Delivery"}
          content={"On-demand local logistics and fleet tracking."}
        />
        <IndustriesCard
          title={"Non-Emergency Medical Transportation (NEMT)"}
          className="md:-translate-y-1/2"
          content={"Patient pickup and transit coordination."}
        />
      </div>
    </section>
  );
}

function IndustriesCard({
  title,
  content,
  className,
}: {
  title: string;
  content: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col rounded-xl border border-iw-red-2 relative p-5  items-center justify-center bg-white ${className}`}
    >
      <label className="font-semibold text-2xl text-center pointer-events-none z-10">
        {title}
      </label>
      <p className="text-iw-red-2 text-lg text-center pointer-events-none z-10">
        {content}
      </p>
      <div className="absolute top-0 left-0 w-full h-full">
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#dcdcdc"
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0.4}
          transparent
        />
      </div>
    </div>
  );
}
