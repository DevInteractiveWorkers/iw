import Image from "next/image";
import SomeComponent from "./components/some-component";
import IntroBanner from "./components/home/intro-banner";
import BenefitsBanner from "./components/home/benefits";
import CarreersBanner from "./components/home/carreers";
import DiscoverVAs from "./components/home/discover-vas";
import Testimonies from "./components/home/testimonies";
import MainForm from "./components/form/form";
import NavbarComponent from "./components/navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <NavbarComponent dark={true}></NavbarComponent>
      <IntroBanner></IntroBanner>
      <BenefitsBanner></BenefitsBanner>
      <DiscoverVAs></DiscoverVAs>
      <Testimonies></Testimonies>
      <MainForm dark={true}></MainForm>
    </main>
  );
}
