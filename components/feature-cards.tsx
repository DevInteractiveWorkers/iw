"use client";

import { CSSProperties } from "react";
import BorderGlow from "./border-glow/border-glow";
import Icon from "./icon";
import PixelBlast from "./why-us/pixel-blast";
import FlipElement from "./flip-element";
import CTAButton from "./buttons/cta-button";
import { useRouter } from "next/navigation";

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
              width={`clamp(20px,8vw,40px)`}
              height={`clamp(20px,8vw,40px)`}
            />
          </FlipElement>
        )}
        <label
          className={`font-semibold text-[clamp(0.875rem,1vw,1.5rem)] leading-[1.2] text-center pointer-events-none z-10 ${dark ? "text-white" : "text-black"}`}
        >
          {title}
        </label>
        {content && (
          <p className="text-iw-red-2 text-[clamp(0.7rem,1vw,1.125rem)] leading-[1.2] text-base text-center pointer-events-none z-10">
            {content}
          </p>
        )}
        {cta && (
          <div
            className={`z-10 md:opacity-0 group-hover/card:opacity-100 op transition-all duration-500 relative
              after:absolute after:top-0 after:left-0 after:w-full after:h-full after:-z-10 
              ${dark ? "after:bg-iw-red-2" : "bg-white"}`}
          >
            <CTAButton
              onClick={() => router.push(cta.href)}
              className={
                dark
                  ? "[--primary-color:#fff] [--secondary-color:#fff] [--tertiary-color:#dd272d] rounded font-bold text-xl sm:text-2xl lg:text-4xl"
                  : "[--primary-color:#dd272d] [--secondary-color:#dd272d] [--tertiary-color:#fff] rounded font-bold text-xl sm:text-2xl lg:text-4xl"
              }
            >
              {cta.label}
            </CTAButton>
          </div>
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
