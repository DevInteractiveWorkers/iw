import IntroBanner from "@/components/home/intro-banner";
import DiscoverVAs from "@/components/home/discover-vas";
import IWVideo from "@/components/video";
import StatsSection from "@/components/stats-section";
import WhyUs from "@/components/why-us";

export default function Home() {
  return (
    <main className="relative">
      <IntroBanner />
      <WhyUs />
      <DiscoverVAs />
      <IWVideo />
      <StatsSection />
    </main>
  );
}
