import Image from "next/image";
import SomeComponent from "./components/some-component";
import IntroBanner from "./components/home/intro-banner";
import BenefitsBanner from "./components/home/benefits";
import CarreersBanner from "./components/home/carreers";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-[#C1272D]">
      <IntroBanner></IntroBanner>
      {/* <BenefitsBanner></BenefitsBanner>
      <CarreersBanner></CarreersBanner> */}
    </main>
  );
}
