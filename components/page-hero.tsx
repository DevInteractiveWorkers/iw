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
  align?: React.CSSProperties["textAlign"];
  division?: boolean;
}

export default function PageHero({
  id,
  heading,
  description,
  align = "start",
  division = true,
}: PageHeroAttributes) {
  const { ref } = useScrollIntoView<HTMLElement>({ offset: 80 });

  return (
    <article
      ref={ref}
      id={id}
      className="flex flex-col py-10 relative w-full"
      style={{ alignItems: align }}
    >
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
        textAlign={align}
        text={heading}
      />
      <div
        className="flex w-full"
        style={{
          justifyContent:
            align !== "start" && align !== "end"
              ? align
              : align === "start"
                ? "end"
                : "start",
        }}
      >
        <SplitText
          className="text-xl md:w-2/3 lg:w-1/3"
          textAlign={align}
          text={description}
        />
      </div>
      {division && <PageDivision className="bottom-0" />}
    </article>
  );
}
