"use client";

import { useScrollIntoView } from "@/lib/use-scroll-into-view";
import FadeInContent from "./FadeInContent";
import VideoPlayer from "./video-player";
import { useIsMobile } from "@/lib/useMobile";
import ColorBends from "./backgrounds/ColorBends";

const VIDEO_URL = {
  desktop:
    "https://s3.interactiveworkers.com/demo/ee6cfa06-b65b-4335-9ee7-dc54f214ba09.mp4",
  mobile:
    "https://s3.interactiveworkers.com/demo/9f096de4-8530-45a6-a712-081697ba1ea6.mp4",
};

export default function IWVideo() {
  const { ref } = useScrollIntoView<HTMLElement>({ offset: 160 });

  const isMobile = useIsMobile();

  return (
    <section
      className="
        relative
        flex w-full items-center justify-center
        px-0 md:px-2 py-10
      "
    >
      <div
        className="w-dvw h-screen absolute pointer-events-none -z-10"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
        }}
      >
        <ColorBends
          rotation={95}
          speed={0.2}
          colors={["#C1272D", "#DD272D", "#C1272D"]}
          transparent
          autoRotate={0}
          scale={1.2}
          frequency={1}
          warpStrength={1}
          mouseInfluence={0}
          parallax={0.3}
          noise={0.15}
          iterations={1}
          intensity={1.3}
          bandWidth={6}
        />
      </div>
      <FadeInContent>
        <article
          ref={ref}
          className="
            flex w-full items-center justify-center
            max-md:h-[70vh] max-md:my-10
            md:h-auto
            md:w-full
          "
        >
          <VideoPlayer
            src={VIDEO_URL[isMobile ? "mobile" : "desktop"]}
            thumbnail={isMobile ? "/reel-cover.png" : "/thumbnail.png"}
            className="
              h-full
              w-full
              rounded-none
              md:h-auto
              md:w-7/12
              md:rounded-xl
            "
          />
        </article>
      </FadeInContent>
    </section>
  );
}
