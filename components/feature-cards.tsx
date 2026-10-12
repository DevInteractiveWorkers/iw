"use client";

import { CSSProperties } from "react";
import BorderGlow from "./border-glow/border-glow";
import Icon from "./icon";
import PixelBlast from "./why-us/pixel-blast";
import FlipElement from "./flip-element";

interface FeatureCardProps {
  title: string;
  content?: string;
  icon?: string;
  iconDark?: boolean;
  aspect?: string;
  style?: CSSProperties;
}

export default function FeatureCard({
  title,
  content,
  icon,
  iconDark = false,
  aspect = "aspect-[3/4]",
  style,
}: FeatureCardProps) {
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
        className={`flex flex-col rounded-xl border border-iw-red-2 p-5 ${aspect} h-full max-h-[500px] items-center justify-center bg-white`}
      >
        {icon && (
          <FlipElement
            className={`${iconDark ? "text-iw-red-2" : "text-white bg-iw-red-2"} aspect-square rounded-full m-5 w-max p-5 flex items-center justify-center z-10`}
          >
            <Icon icon={icon} color="currentColor" />
          </FlipElement>
        )}
        <label className="font-semibold text-[clamp(1.3rem,1vw,1.5rem)] leading-[1.2] text-center pointer-events-none z-10">
          {title}
        </label>
        {content && (
          <p className="text-iw-red-2 text-[clamp(1rem,1vw,1.125rem)] leading-[1.2] text-base text-center pointer-events-none z-10">
            {content}
          </p>
        )}
        <div className="absolute top-0 left-0 w-full h-full">
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
