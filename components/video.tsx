"use client";

import { useScrollIntoView } from "@/lib/use-scroll-into-view";
import FadeInContent from "./FadeInContent";
import VideoPlayer from "./video-player";

const VIDEO_URL =
  "https://s3.interactiveworkers.com/demo/ee6cfa06-b65b-4335-9ee7-dc54f214ba09.mp4";

export default function IWVideo() {
  const { ref } = useScrollIntoView<HTMLElement>();
  return (
    <section
      ref={ref}
      className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-2 py-10"
    >
      <FadeInContent>
        <article className="flex w-full items-center justify-center">
          <VideoPlayer
            src={VIDEO_URL}
            thumbnail="/thumbnail.png"
            className="w-full sm:w-10/12 md:w-7/12"
          />
        </article>
      </FadeInContent>
    </section>
  );
}
