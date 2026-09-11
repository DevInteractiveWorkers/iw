"use client";
import Image from "next/image";
import FlipElement from "./flip-element";
import SplitText from "./text-animation/SplitText";
import PageDivision from "./page-division";
import { useScrollIntoView } from "@/lib/use-scroll-into-view";

interface PageHeroAttributes {
  id?: string;
  heading: string | React.ReactNode;
  description?: string | React.ReactNode;
}

export default function PageHero({
  id,
  heading,
  description,
}: PageHeroAttributes) {
  const { ref } = useScrollIntoView<HTMLElement>({ offset: 80 });

  return (
    <article ref={ref} id={id} className="flex flex-col py-10 relative">
      <FlipElement className="w-1/4 max-w-[150px] pb-10 mt-20">
        <Image
          width={1080}
          height={1080}
          alt="logo"
          src="/logo/03_Logo_Mark/03_Logo_Mark-01.png"
        />
      </FlipElement>
      <SplitText
        tag="h1"
        className="
            text-[clamp(2rem,4vw,3.75rem)]
            leading-[1.05]
            pb-6
          "
        textAlign="start"
        text={heading}
      />
      <div className="flex justify-end">
        <SplitText
          className="text-xl md:w-2/3 lg:w-1/3"
          textAlign="start"
          text={description}
        />
      </div>
      <PageDivision className="bottom-0" />
    </article>
  );
}
