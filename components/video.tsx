import FadeInContent from "./FadeInContent";
import VideoPlayer from "./video-player";

export default function IWVideo() {
  return (
    <section className="w-full px-2 py-10 z-10 flex flex-col items-center justify-center relative">
      <FadeInContent>
        <article className="flex items-center justify-center">
          <VideoPlayer
            thumbnail="/thumbnail.png"
            src="https://s3.interactiveworkers.com/demo/ee6cfa06-b65b-4335-9ee7-dc54f214ba09.mp4"
            className="md:w-7/12 sm:w-10/12 w-full"
          />
        </article>
      </FadeInContent>
    </section>
  );
}
