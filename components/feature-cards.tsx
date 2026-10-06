"use client";

import Icon from "./icon";
import PixelBlast from "./why-us/pixel-blast";

interface FeatureCardProps {
  title: string;
  content?: string;
  icon?: string;
  iconDark?: boolean;
  aspect?: string;
}

export default function FeatureCard({
  title,
  content,
  icon,
  iconDark = false,
  aspect = "aspect-[3/4]",
}: FeatureCardProps) {
  return (
    <div
      className={`flex flex-col rounded-xl border border-iw-red-2 relative p-5 ${aspect} max-h-[500px] items-center justify-center bg-white`}
    >
      {icon && (
        <div
          className={`${iconDark ? "text-iw-red-2" : "text-white bg-iw-red-2"} aspect-square rounded-full m-5 w-max p-5 flex items-center justify-center z-10 pointer-events-none`}
        >
          <Icon icon={icon} color="currentColor" />
        </div>
      )}
      <label className="font-semibold text-2xl text-center pointer-events-none z-10">
        {title}
      </label>
      {content && (
        <p className="text-iw-red-2 text-lg text-center pointer-events-none z-10">
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
  );
}
