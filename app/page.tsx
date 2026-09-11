import IntroBanner from "@/components/home/intro-banner";
import DiscoverVAs from "@/components/home/discover-vas";
import IWVideo from "@/components/video";
import StatsSection from "@/components/stats-section";
import MainForm from "@/components/form/form";
import NavbarComponent from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <IntroBanner />
      <DiscoverVAs />
      <IWVideo />
      <StatsSection />
    </main>
  );
}
