"use client";

import React from "react";
import VACard from "@/components/vas/cards";
import Carousel from "@/components/home/reviews/carousel";
import Folder from "@/components/folder";
import FadeInContent from "@/components/FadeInContent";
import SplitText from "@/components/text-animation/SplitText";
import PageHero from "@/components/page-hero";
import { useScrollIntoView } from "@/lib/use-scroll-into-view";
import { useIsMobile } from "@/lib/useMobile";
import CTAButton from "@/components/buttons/cta-button";
import { useRouter } from "next/navigation";
import FlipElement from "@/components/flip-element";
import Image from "next/image";
import ColorBends from "@/components/backgrounds/ColorBends";
import { dispatchers } from "../content/dispatchers";
import dynamic from "next/dynamic";
import type { HighlightedLocation } from "@/components/globe/globe";
import DispatchSolutionsCards, {
  type DispatchSolutionsProps,
} from "@/components/dispatch-solutions";
import { IconType } from "@/components/feature-cards";
import IndustriesWeServe from "@/components/industries-we-serve";
import KeyAdvantages from "@/components/key-advantages";

interface DispatchLocation extends HighlightedLocation {
  /** Copy shown when the location's card is expanded. */
  services: string;
  icon: IconType;
}

/**
 * Single source for the globe markers and the solution cards. Module-level so
 * the array keeps its identity across renders (the globe keys markers on it).
 */
const DISPATCH_LOCATIONS: DispatchLocation[] = [
  {
    name: "Real-Time Fleet & Field Coordination",
    icon: "transport",
    code: "MIA",
    latitude: 25.7959,
    longitude: -80.287,
    services:
      "Monitor active routes, assign jobs/patrols, track shipments/vehicles, and ensure on-time service delivery across your entire fleet, field team, or guard force.",
  },
  {
    name: "Smart Route & Schedule Optimization",
    icon: "map",
    code: "IAH",
    latitude: 29.9902,
    longitude: -95.3368,
    services:
      "Maximize efficiency by reducing transit time and fuel costs, managing appointment windows, and adjusting schedules dynamically for urgent or priority requests.",
  },
  {
    name: "Client & Field Team Communication",
    icon: "chat",
    code: "PDX",
    latitude: 45.5898,
    longitude: -122.5951,
    services:
      "Act as the central point of contact for drivers, field technicians, security personnel, customers, and vendors, providing real-time status updates, arrival estimates, and emergency support.",
  },
  {
    name: "Incident & Exception Management",
    icon: "warning",
    code: "ATL",
    latitude: 33.6407,
    longitude: -84.4277,
    services:
      "Proactively resolve unexpected disruptions—such as traffic delays, alarm triggers, mechanical issues, weather changes, or schedule adjustments—with minimal impact on operations.",
  },
  {
    name: "Software & Systems Data Management",
    icon: "monitor",
    code: "YYZ",
    latitude: 43.6777,
    longitude: -79.6248,
    services:
      "Keep your Dispatch/TMS software, CRMs, security management tools, and GPS platforms updated in real time.",
  },
  {
    name: "InteractiveWorkers",
    icon: "iw",
    code: "MAR",
    latitude: 10.5582,
    longitude: -71.7279,
    services: "Ready to deploy.",
  },
];

// `react-globe.gl` touches `window` on import, so the globe is client-only.
const IWGlobe = dynamic(() => import("@/components/globe/globe"), {
  ssr: false,
  loading: () => <div className="h-screen w-full" aria-hidden="true" />,
});

const toSolutionCard = ({
  name,
  services,
  icon,
}: DispatchLocation): DispatchSolutionsProps => ({
  title: name,
  content: services,
  icon: icon,
});

const Dispatch = () => {
  const router = useRouter();

  const tags = [
    "Trained in Confidentiality and Security Protocols",
    "24/7 Adaptability",
    "Proactive Communication",
    "Bilingual English/Spanish",
    "Trained in Confidentiality and",
  ];

  const { ref: carouselRef } = useScrollIntoView<HTMLElement>({
    offset: -80,
  });

  const { ref: folderRef } = useScrollIntoView<HTMLElement>({
    offset: 80,
  });

  const isMobile = useIsMobile();

  return (
    <>
      <section className="px-[clamp(1rem,8vw,50rem)]">
        <article className="text-white">
          <PageHero
            division={false}
            align="center"
            heading={
              <>
                Operational Dispatchers
                <br />
                & Field Coordination <br />
                Representatives
              </>
            }
            ctaButton={{
              onClick: () =>
                router.push("https://calendly.com/interactiveworkersgm/30min"),
              className:
                "my-10 [--primary-color:#fff] [--secondary-color:#fff] [--tertiary-color:#dd272d]",
            }}
          />
        </article>
      </section>
      <section className="px-[clamp(1rem,8vw,50rem)] bg-white flex flex-col justify-center items-center py-10">
        <SplitText
          tag="h2"
          className="
            text-[clamp(2rem,4vw,3.75rem)]
            leading-[1.05]
            pb-6
          "
          textAlign={"center"}
          text={
            <>
              Core Dispatch
              <br />
              Solutions
            </>
          }
        />
        <SplitText
          className="text-xl lg:w-1/3 md:w-2/3"
          textAlign={"center"}
          text={
            <>
              Streamline your logistics, fleet management, and field operations
              with dedicated remote dispatchers. Our operational dispatch
              representatives handle real-time scheduling, driver/technician
              coordination, route optimization, and client communication to
              ensure your daily operations run flawlessly
            </>
          }
        />
        <IWGlobe
          sway
          highlightedLocations={DISPATCH_LOCATIONS.map((location) => {
            return {
              content: (
                <DispatchSolutionsCards
                  key={location.code}
                  {...toSolutionCard(location)}
                />
              ),
              ...location,
            };
          })}
          autoRotate={false}
        />
      </section>
      <IndustriesWeServe />
      <KeyAdvantages />
    </>
  );
};

const VACarouselCard = ({
  imageSrc,
  children,
}: {
  imageSrc: string;
  children: React.ReactNode;
}) => {
  const isMobile = useIsMobile();

  if (isMobile) return <VACard imageSrc={imageSrc}>{children}</VACard>;

  return (
    <div
      style={{
        width: 400,
        height: 500,
        minWidth: 400,
        minHeight: 500,
        maxWidth: 400,
        maxHeight: 500,
        boxSizing: "border-box",
      }}
    >
      <VACard imageSrc={imageSrc}>{children}</VACard>
    </div>
  );
};

export default Dispatch;
