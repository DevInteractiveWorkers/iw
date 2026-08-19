import NavbarComponent from "@/components/navbar";
import IntroBanner from "@/components/home/intro-banner";
import DiscoverVAs from "@/components/home/discover-vas";
import IWVideo from "@/components/video";
import StatsSection from "@/components/stats-section";
import MainForm from "@/components/form/form";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <NavbarComponent dark={true} />
      <IntroBanner />
      <DiscoverVAs />
      <IWVideo />
      <StatsSection />
      {/* <BenefitsBanner></BenefitsBanner> */}
      <MainForm dark={true}></MainForm>
    </main>
  );
}
