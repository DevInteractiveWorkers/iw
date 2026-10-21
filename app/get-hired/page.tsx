"use client";

import GetHired from "@/components/form/get-hired";
import PageDivision from "@/components/page-division";
import PageHero from "@/components/page-hero";
import SplitText from "@/components/text-animation/SplitText";
import { useIsMobile } from "@/lib/useMobile";

export default function GetHiredPage() {
  const isMobile = useIsMobile();
  return (
    <section className="min-h-screen px-[clamp(1rem,8vw,50rem)] bg-iw-red-2">
      <PageHero
        division={false}
        align={isMobile ? "center" : "start"}
        style={{ color: "#fff" }}
        heading={<>Do you want to join our team?</>}
      />

      <div className="md:p-10 p-4 bg-white rounded-t">
        <GetHired />
      </div>
    </section>
  );
}
