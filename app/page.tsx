import IntroBanner from "@/components/home/intro-banner";
import DiscoverVAs from "@/components/home/discover-vas";
import IWVideo from "@/components/video";
import StatsSection from "@/components/stats-section";
import MainForm from "@/components/form/form";
import NavbarComponent from "@/components/navbar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <NavbarComponent />
      <IntroBanner />
      <DiscoverVAs />
      <IWVideo />
      <StatsSection />
      {/* <BenefitsBanner></BenefitsBanner> */}
      <MainForm dark={true}></MainForm>
    </main>
  );
}
