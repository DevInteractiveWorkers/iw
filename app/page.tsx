import IntroBanner from "./components/home/intro-banner";
import NavbarComponent from "./components/navbar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <NavbarComponent dark={true} />
      <IntroBanner></IntroBanner>
      {/* <BenefitsBanner></BenefitsBanner>
      <DiscoverVAs></DiscoverVAs>
      <Testimonies></Testimonies>
      <Reviews />
      <MainForm dark={true}></MainForm> */}
    </main>
  );
}
