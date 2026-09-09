"use client";

import { useScrollIntoView } from "@/lib/use-scroll-into-view";
import FadeInContent from "./FadeInContent";
import VideoPlayer from "./video-player";
import { useIsMobile } from "@/lib/useMobile";

const VIDEO_URL = {
  desktop:
    "https://s3.interactiveworkers.com/demo/ee6cfa06-b65b-4335-9ee7-dc54f214ba09.mp4",
  mobile:
    "https://s3.interactiveworkers.com/demo/9f096de4-8530-45a6-a712-081697ba1ea6.mp4",
};

export default function IWVideo() {
  const { ref } = useScrollIntoView<HTMLElement>();

  const isMobile = useIsMobile();

  return (
    <section
      className="
        relative z-10
        flex w-full flex-col items-center justify-center
        px-0
        md:min-h-screen md:px-2 py-10
      "
    >
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
