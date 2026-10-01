import IntroBanner from "@/components/home/intro-banner";
import DiscoverVAs from "@/components/home/discover-vas";
import IWVideo from "@/components/video";
import StatsSection from "@/components/stats-section";
import IWGlobe from "@/components/globe";
import WhyUs from "@/components/why-us";

export default function Home() {
  return (
    <main className="relative">
      {/* <div className="absolute top-0 left-0 w-full h-full">
        <div className="sticky top-0 left-0 bottom-0">
          <IWGlobe />
        </div>
      </div> */}
      <IntroBanner />
      <WhyUs />
      <DiscoverVAs />
      <IWVideo />
      <StatsSection />
    </main>
  );
}
