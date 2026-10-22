"use client";

import GetHired from "@/components/form/get-hired";
import PageDivision from "@/components/page-division";
import PageHero from "@/components/page-hero";
import { ParticlesComponent } from "@/components/particles";
import SplitText from "@/components/text-animation/SplitText";
import { useIsMobile } from "@/lib/useMobile";
import Image from "next/image";

export default function GetHiredPage() {
  const isMobile = useIsMobile();
  return (
    <section
      className="min-h-screen px-[clamp(1rem,8vw,50rem)] 
    "
    >
      <article className="relative">
        <div
          className="absolute top-0 left-0 w-full h-full flex justify-center items-start"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 50%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 50%, transparent 100%)",
            height: isMobile ? "50vh" : "100%",
          }}
        >
          <ParticlesComponent
            id="get-hired"
            color="#ccc"
            className="absolute -z-10 w-full h-full bottom-0 left-0"
          />
          {!isMobile && (
            <div className="absolute top-0 right-0  md:w-1/2 h-full px-[clamp(1rem,8vw,50rem)] pointer-events-none select-none">
              <Image
                width={1080}
                height={1080}
                alt="InteractiveWorker"
                src={"/team-2026/OSWALDO/oswaldo_01.png"}
                className="object-top object-cover h-full pt-10"
              />
            </div>
          )}
        </div>

        <PageHero
          division={false}
          align={isMobile ? "center" : "start"}
          style={isMobile ? {} : { width: "50%" }}
          dark={false}
          heading={
            <>
              Do you want
              <br /> to join our team?
            </>
          }
        />
      </article>
      <div className="bg-white rounded-t">
        <GetHired />
      </div>
    </section>
  );
}
