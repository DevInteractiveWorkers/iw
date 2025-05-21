import IntroBanner from "@/src/components/home/intro-banner";
import BenefitsBanner from "@/src/components/home/benefits";
import DiscoverVAs from "@/src/components/home/discover-vas";
import Testimonies from "@/src/components/home/testimonies";
import MainForm from "@/src/components/form/form";
import NavbarComponent from "@/src/components/navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <NavbarComponent dark={true}></NavbarComponent>
      <IntroBanner></IntroBanner>
      <BenefitsBanner></BenefitsBanner>
      <DiscoverVAs></DiscoverVAs>
      {/* <Testimonies></Testimonies> */}
      <MainForm dark={true}></MainForm>
    </main>
  );
}
