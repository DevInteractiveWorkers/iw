"use client";

import PixelBlast from "./why-us/pixel-blast";

interface FeatureCardProps {
  title: string;
  content: string;
  icon: IconType;
}

export default function FeatureCard({
  title,
  content,
  icon,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col rounded-xl border border-iw-red-2 relative p-5 aspect-[3/4] max-h-[500px] items-center justify-center bg-white">
      <div className="bg-iw-red-2 aspect-square rounded-full m-5 w-max p-5 flex items-center justify-center z-10 pointer-events-none">
        <Icon icon={icon} />
      </div>
      <label className="font-semibold text-2xl text-center pointer-events-none z-10">
        {title}
      </label>
      <p className="text-iw-red-2 text-lg text-center pointer-events-none z-10">
        {content}
      </p>
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

type IconType =
  | "shield"
  | "computer"
  | "notes"
  | "diamond"
  | "scaling"
  | "integration";

const Icon = ({ icon }: { icon: IconType }) => {
  switch (icon) {
    case "shield":
      return (
        <svg
          width="40"
          height="50"
          viewBox="0 0 40 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.0361 33.2142L30.8855 19.3647L27.3925 15.8717L17.0361 26.2282L11.8885 21.0806L8.39547 24.5736L17.0361 33.2142ZM19.6099 49.0247C13.9312 47.5948 9.24319 44.3367 5.54591 39.2504C1.84864 34.1641 0 28.516 0 22.3062V7.3537L19.6099 0L39.2197 7.3537V22.3062C39.2197 28.516 37.3711 34.1641 33.6738 39.2504C29.9765 44.3367 25.2886 47.5948 19.6099 49.0247ZM19.6099 43.8771C23.8587 42.5289 27.3721 39.8325 30.1502 35.788C32.9282 31.7435 34.3173 27.2495 34.3173 22.3062V10.7241L19.6099 5.20887L4.90247 10.7241V22.3062C4.90247 27.2495 6.2915 31.7435 9.06956 35.788C11.8476 39.8325 15.3611 42.5289 19.6099 43.8771Z"
            fill="white"
          />
        </svg>
      );
    case "computer":
      return (
        <svg
          width="49"
          height="41"
          viewBox="0 0 49 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 40.0653V35.6136H48.9688V40.0653H0ZM6.67756 33.3878C5.45334 33.3878 4.40533 32.9519 3.53354 32.0801C2.66175 31.2083 2.22585 30.1603 2.22585 28.9361V4.4517C2.22585 3.22749 2.66175 2.17948 3.53354 1.30769C4.40533 0.435896 5.45334 0 6.67756 0H42.2912C43.5154 0 44.5634 0.435896 45.4352 1.30769C46.307 2.17948 46.7429 3.22749 46.7429 4.4517V28.9361C46.7429 30.1603 46.307 31.2083 45.4352 32.0801C44.5634 32.9519 43.5154 33.3878 42.2912 33.3878H6.67756ZM6.67756 28.9361H42.2912V4.4517H6.67756V28.9361ZM22.2585 25.5973H26.7102V16.3044L30.2716 19.8101L33.3878 16.6939L24.4844 7.79048L15.581 16.6939L18.6972 19.8657L22.2585 16.3044V25.5973Z"
            fill="white"
          />
        </svg>
      );
    case "notes":
      return (
        <svg
          width="43"
          height="45"
          viewBox="0 0 43 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.37 44.7399V37.8612L34.7294 25.5577C35.0649 25.2221 35.4377 24.9798 35.8479 24.8307C36.258 24.6815 36.6681 24.607 37.0782 24.607C37.5256 24.607 37.9544 24.6908 38.3645 24.8586C38.7746 25.0264 39.1474 25.2781 39.483 25.6136L41.5522 27.6828C41.8505 28.0184 42.0835 28.3912 42.2513 28.8013C42.419 29.2114 42.5029 29.6216 42.5029 30.0317C42.5029 30.4418 42.4284 30.8612 42.2792 31.29C42.1301 31.7187 41.8878 32.1009 41.5522 32.4364L29.2487 44.7399H22.37ZM25.7255 41.3844H27.8506L34.6175 34.5616L33.6109 33.499L32.5483 32.4924L25.7255 39.2593V41.3844ZM4.47399 44.7399C3.24364 44.7399 2.19039 44.3018 1.31424 43.4257C0.438078 42.5495 0 41.4963 0 40.2659V4.47399C0 3.24364 0.438078 2.19039 1.31424 1.31424C2.19039 0.438078 3.24364 0 4.47399 0H22.37L35.7919 13.422V20.133H31.3179V15.659H20.133V4.47399H4.47399V40.2659H17.896V44.7399H4.47399ZM33.6109 33.499L32.5483 32.4924L34.6175 34.5616L33.6109 33.499Z"
            fill="white"
          />
        </svg>
      );
    case "diamond":
      return (
        <svg
          width="38"
          height="33"
          viewBox="0 0 38 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.0375 1.50037L12.3613 11.0249L18.7111 30.7947M18.7111 30.7947L25.2279 10.8578L21.7188 1.50037M35.9221 11.192L28.7369 1.50037H8.8523L1.5 11.192L18.7111 30.7947L35.9221 11.192ZM1.5 11.192H35.9221"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "scaling":
      return (
        <svg
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 1.5V30.7943H30.7943M8.82358 19.8091L15.2317 13.401L19.8089 17.9782L28.0482 9.73903"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "integration":
      return (
        <svg
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.99264 27.1325C3.95914 27.1325 1.5 24.6733 1.5 21.6398V10.6544C1.5 7.6209 3.95914 5.16176 6.99264 5.16176H15.2316M22.5551 5.16176H25.3014C28.3349 5.16176 30.7941 7.6209 30.7941 10.6544V21.6398C30.7941 24.6733 28.3349 27.1325 25.3014 27.1325H13.4007M17.0625 30.7941L13.4007 27.1325L17.0625 23.4706M13.4007 8.82352L17.0625 5.16176L13.4007 1.5"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
  }
};
