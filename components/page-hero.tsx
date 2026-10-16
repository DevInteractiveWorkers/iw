"use client";
import Image from "next/image";
import FlipElement from "./flip-element";
import SplitText from "./text-animation/SplitText";
import PageDivision from "./page-division";
import { useScrollIntoView } from "@/lib/use-scroll-into-view";
import { ButtonHTMLAttributes, CSSProperties } from "react";
import CTAButton from "./buttons/cta-button";

interface PageHeroAttributes {
  id?: string;
  heading: string | React.ReactNode;
  description?: string | React.ReactNode;
  align?: React.CSSProperties["textAlign"];
  division?: boolean;
  ctaButton?: ButtonHTMLAttributes<HTMLButtonElement>;
  dark?: boolean;
  style?: CSSProperties;
}

export default function PageHero({
  id,
  heading,
  description,
  align = "start",
  division = true,
  ctaButton,
  dark = true,
  style,
}: PageHeroAttributes) {
  const { ref } = useScrollIntoView<HTMLElement>({ offset: 80 });

  return (
    <article
      ref={ref}
      id={id}
      className="flex flex-col py-10 relative w-full"
      style={{ alignItems: align, ...style }}
    >
      <FlipElement className="w-1/4 max-w-[150px] pb-10 mt-20">
        <Image
          width={1080}
          height={1080}
          alt="logo"
          src={
            dark
              ? "/logo/03_Logo_Mark/03_Logo_Mark-01.png"
              : "/logo/03_Logo_Mark/03_Logo_Mark-02.png"
          }
          className="select-none block"
        />
      </FlipElement>
      <div
        className={`grid ${description ? (align !== "center" ? "md:grid-cols-2" : "") : ""} grid-cols-1`}
      >
        <div className="w-full flex flex-col">
          <SplitText
            tag="h1"
            className="
            text-[clamp(2rem,4vw,3.75rem)]
            leading-[1.05]
            font-medium
            pb-6
          "
            textAlign={align}
            text={heading}
          />
          {ctaButton && (
            <div className="w-full flex" style={{ justifyContent: align }}>
              <CTAButton {...ctaButton} />
            </div>
          )}
        </div>
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
            className="text-xl lg:w-2/3"
            textAlign={align}
            text={description}
          />
        </div>
      </div>
      {division && <PageDivision className="bottom-0" />}
    </article>
  );
}
