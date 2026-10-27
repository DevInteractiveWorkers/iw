"use client";

import dynamic from "next/dynamic";
import { CSSProperties } from "react";
import BorderGlow from "./border-glow/border-glow";
import Icon from "./icon";
import FlipElement from "./flip-element";
import CTAButton from "./buttons/cta-button";
import { useRouter } from "next/navigation";

const PixelBlast = dynamic(() => import("./why-us/pixel-blast"), {
  ssr: false,
});

interface FeatureCardProps {
  title: string;
  content?: string;
  icon?: string;
  dark?: boolean;
  aspect?: string;
  style?: CSSProperties;
  cta?: {
    label: string;
    href: string;
    variant?: "primary" | "secondary" | "outline";
    detailHref?: string;
  };
}

export default function FeatureCard({
  title,
  content,
  icon,
  dark = false,
  aspect = "aspect-[3/4]",
  style,
  cta,
}: FeatureCardProps) {
  const router = useRouter();
  return (
    <BorderGlow
      animated
      borderRadius={"0.75rem"}
      className={"w-full h-full"}
      fillOpacity={0}
      style={style}
      colors={[]}
    >
      <div
        className={`flex flex-col rounded-xl border border-iw-red-2 p-3 sm:p-5 gap-3 sm:gap-6 ${aspect} h-full max-h-[700px] items-center justify-center ${dark ? "bg-iw-red-2" : "bg-white"} 
        group/card`}
      >
        {icon && (
          <FlipElement
            className={`${dark ? "text-iw-red-2 bg-white" : "text-white bg-iw-red-2"} aspect-square rounded-full m-2 p-3 sm:m-5 sm:p-5 flex items-center justify-center z-10`}
          >
            <Icon
              icon={icon}
              color="currentColor"
              width={`clamp(15px,8vw,40px)`}
              height={`clamp(15px,8vw,40px)`}
            />
          </FlipElement>
        )}
        <label
          className={`font-semibold text-[clamp(0.875rem,1vw,1.5rem)] leading-[1.2] text-center pointer-events-none z-10 
            ${dark ? "text-white [text-shadow:_0px_2px_5px_rgba(128,2,2,1)]" : "text-black [text-shadow:_0px_2px_5px_rgba(255,255,255,1)]"}`}
        >
          {title}
        </label>
        {content && (
          <p className="text-iw-red-2 text-[clamp(0.7rem,1vw,0.8rem)] leading-[1.2] text-base text-center pointer-events-none z-10">
            {content}
          </p>
        )}
        {cta && (
          <CTAButton
            onClick={() => router.push(cta.href)}
            className={`md:opacity-0 group-hover/card:opacity-100 z-10 ${
              dark
                ? "[--primary-color:#fff] [--secondary-color:#fff] [--tertiary-color:#dd272d] bg-iw-red-2 hover:bg-inherit"
                : "[--primary-color:#dd272d] [--secondary-color:#dd272d] [--tertiary-color:#fff] bg-white hover:bg-inherit"
            }`}
          >
            {cta.label}
          </CTAButton>
        )}
        <div
          className={`absolute top-0 left-0 w-full h-full ${dark ? "opacity-75" : "opacity-100"}`}
        >
          <PixelBlast
            variant="square"
            pixelSize={4}
            color="#dcdcdc"
            patternScale={2}
            patternDensity={1}
            pixelSizeJitter={0}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid={false}
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.5}
            edgeFade={0.4}
            transparent
          />
        </div>
      </div>
    </BorderGlow>
  );
}
