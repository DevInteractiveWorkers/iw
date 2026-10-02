import IntroBanner from "@/components/home/intro-banner";
import DiscoverVAs from "@/components/home/discover-vas";
import IWVideo from "@/components/video";
import StatsSection from "@/components/stats-section";
import WhyUs from "@/components/why-us";
import FadeInContent from "@/components/FadeInContent";
import Reviews from "@/components/home/reviews";
import HowItWorks from "@/components/how-it-works";
import FollowGlobe from "@/components/globe/follow-globe";

export default function Home() {
  return (
    <main className="relative">
      <FollowGlobe />
      <IntroBanner />
      <DiscoverVAs />
      <WhyUs />
      <div className="w-dvw bg-iw-red-2">
        <IWVideo />
        <StatsSection />
        <HowItWorks />
      </div>
      <article className="z-10">
        <FadeInContent>
          <Reviews />
        </FadeInContent>
      </article>
    </main>
  );
}
