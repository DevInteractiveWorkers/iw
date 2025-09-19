"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { IconButton } from "../icon-button";
import Reviews from "./reviews";
const Testimonies = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoDuration, setVideoDuration] = useState<number>(0);
  const [videoCurrentTime, setVideoCurrentTime] = useState<number>(0);
  const [progressHover, setProgressHover] = useState<number>(0); // percentage (0-100)

  const handleVideoControls = () => {
    if (!videoRef.current) return;
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      video.pause();
      video.currentTime = 0;
      setVideoCurrentTime(0);
      setVideoDuration(video.duration);
      setIsVideoPlaying(false);
    }
  }, []);

  const formatTime = (seconds: number) =>
    new Date(seconds * 1000).toISOString().substring(14, 19);

  const handleProgressClick = (event: React.MouseEvent) => {
    if (!videoRef.current || videoDuration === 0) return;
    const progressBar = event.currentTarget as HTMLElement;
    const clickPosition = event.nativeEvent.offsetX;
    const progressBarWidth = progressBar.offsetWidth;
    const newTime = (clickPosition / progressBarWidth) * videoDuration;
    videoRef.current.currentTime = newTime;
    setVideoCurrentTime(newTime);
  };

  const handleProgressHover = (event: React.MouseEvent) => {
    const progressBar = event.currentTarget as HTMLElement;
    const hoverX = event.nativeEvent.offsetX;
    const percent = (hoverX / progressBar.offsetWidth) * 100;
    setProgressHover(percent);
  };

  return (
    <section className="w-3/4 mb-48">
      <article>
        <h2 className="text-center mx-auto text-4xl uppercase font-extrabold mb-16">
          What they say about us
        </h2>
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div
            className={`relative h-min transition-all duration-500 rounded-3xl overflow-hidden`}
          >
            <video
              ref={videoRef}
              width={640}
              height={360}
              src="/testimonies/VT01 - Alexandra.mp4"
              playsInline
              onTimeUpdate={(e) =>
                setVideoCurrentTime(e.currentTarget.currentTime)
              }
              onEnded={() => setIsVideoPlaying(false)}
            >
              Your browser does not support the video tag.
            </video>
            {/* Overlay controls */}
            <div className="absolute bg-[#18162199] w-full h-full flex justify-center items-center z-10 top-0 left-0 hover:opacity-100 opacity-0 transition-all duration-300">
              {/* Play / Pause / Replay */}

              {/* Bottom controls */}
              <div className="flex absolute bottom-0 w-full justify-evenly items-center gap-2 px-3">
                {/* Expand */}
                <IconButton
                  icon="expand"
                  className="text-white w-7"
                  stroke={1}
                  onClick={() => videoRef.current?.requestFullscreen()}
                />

                {/* Progress Bar */}
                <div
                  className="md:w-9/12 w-8/12 h-1 hover:h-2 transition-all bg-gray-400 rounded-full cursor-pointer relative"
                  onClick={handleProgressClick}
                  onMouseMove={handleProgressHover}
                  onMouseLeave={() => setProgressHover(0)}
                >
                  {/* Hover preview bar */}
                  {progressHover > 0 && (
                    <div
                      className="bg-white h-full rounded-full absolute opacity-40"
                      style={{ width: `${progressHover}%` }}
                    />
                  )}

                  {/* Played bar */}
                  <div
                    className="bg-[#C1272D] h-full rounded-full absolute"
                    style={{
                      width:
                        videoDuration > 0
                          ? `${(videoCurrentTime / videoDuration) * 100}%`
                          : "0%",
                    }}
                  />
                </div>

                {/* Time */}
                <div className="text-white md:text-sm text-xs flex">
                  {videoCurrentTime > 0
                    ? formatTime(videoCurrentTime)
                    : "--:--"}{" "}
                  / {videoDuration > 0 ? formatTime(videoDuration) : "--:--"}
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full flex justify-center">
            <div
              className={`z-10 bg-[#d8d8d8] rounded-3xl flex justify-center absolute transition-all ${isVideoPlaying ? "" : "-translate-y-[50%]"}`}
            >
              <button
                className="absolute bottom-full translate-y-1/2 block max-w-fit mx-auto bg-white rounded-full pl-3 shadow-sm text-lg font-bold text-center"
                onClick={handleVideoControls}
              >
                {!isVideoPlaying ? "Play Video " : "Pause Video"}
                <Image
                  className="inline mx-1 my-1"
                  src={`/home/testimonies/${
                    videoCurrentTime === videoDuration
                      ? "replay"
                      : isVideoPlaying
                        ? "pause"
                        : "play"
                  }.svg`}
                  alt="Play Button"
                  width={26}
                  height={26}
                />
              </button>
              <div className="py-4">
                <h3 className="font-bold text-xl uppercase pt-3 px-6 mx-auto text-center">
                  Alexandra Gonzalez
                </h3>
                {
                  <p
                    className={`p-1 px-6 text-center transition-all duration-300 ${isVideoPlaying && "h-0 opacity-0 -translate-y-full"}`}
                  >
                    “No matter the time. Nights, weekends. They’re always there
                    to solve problems and get things done.”
                  </p>
                }
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Testimonies;
