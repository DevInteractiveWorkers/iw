import DiscoverVAs from "./components/home/discover-vas";
import IntroBanner from "./components/home/intro-banner";
import NavbarComponent from "./components/navbar";
import IWVideo from "./video";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <NavbarComponent dark={true} />
      <IntroBanner />
      <DiscoverVAs />
      <IWVideo />
      {/* <BenefitsBanner></BenefitsBanner>
      <Testimonies></Testimonies>
      <Reviews />
      <MainForm dark={true}></MainForm> */}
    </main>
  );
}
