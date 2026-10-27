"use client";

import { useScrollIntoView } from "@/lib/use-scroll-into-view";
import FadeInContent from "./FadeInContent";
import VideoPlayer from "./video-player";
import { useIsMobile } from "@/lib/useMobile";
import ColorBends from "./backgrounds/ColorBends";
import CTAButton from "./buttons/cta-button";
import { useRouter } from "next/navigation";

const VIDEO_URL = {
  desktop:
    "https://s3.interactiveworkers.com/demo/ee6cfa06-b65b-4335-9ee7-dc54f214ba09.mp4",
  mobile:
    "https://s3.interactiveworkers.com/demo/9f096de4-8530-45a6-a712-081697ba1ea6.mp4",
};

export default function IWVideo() {
  const { ref } = useScrollIntoView<HTMLElement>({ offset: 160 });
  const isMobile = useIsMobile();
  const router = useRouter();

  return (
    <section
      className="
        relative
        flex flex-col w-full items-center justify-center
        px-0
      "
    >
      <FadeInContent>
        <article
          ref={ref}
          className="
            flex w-full items-center justify-center
            max-md:h-[70vh]
            md:h-auto
            md:w-full
          "
        >
          <VideoPlayer
            autoPreview={true}
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
      <div className="px-[clamp(1rem,8vw,50rem)] pt-10 flex items-center justify-center">
        <CTAButton
          className="[--primary-color:#fff] [--secondary-color:#fff] [--tertiary-color:#dd272d] bg-[#c1272d] hover:bg-inherit"
          onClick={() => {
            router.push("https://calendly.com/interactiveworkersgm/30min");
          }}
        >
          Book a discovery call
        </CTAButton>
      </div>
    </section>
  );
}
