"use client";

import { useIsMobile } from "@/lib/useMobile";
import { useEffect, useRef, useState } from "react";

interface VideoPlayerProps {
  src: string;
  thumbnail?: string;
  className?: string;
}

export default function VideoPlayer({
  src,
  thumbnail,
  className = "",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoadedMetadata = () => setDuration(video.duration || 0);
    const onTimeUpdate = () => setCurrentTime(video.currentTime);

    const onPlay = () => {
      setIsPlaying(true);
      setHasStarted(true);
    };

    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);

    const onVolumeChange = () => {
      setVolume(video.volume);
      setIsMuted(video.muted);
    };

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("ended", onEnded);
    video.addEventListener("volumechange", onVolumeChange);

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("volumechange", onVolumeChange);
    };
  }, []);

  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(document.fullscreenElement === containerRef.current);
    };

    document.addEventListener("fullscreenchange", onFsChange);

    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    const bar = progressRef.current;

    if (!video || !bar || !duration) return;

    const rect = bar.getBoundingClientRect();

    const ratio = Math.min(
      Math.max((e.clientX - rect.left) / rect.width, 0),
      1,
    );

    video.currentTime = ratio * duration;
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const value = parseFloat(e.target.value);

    video.volume = value;
    video.muted = value === 0;
  };

  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  const formatTime = (time: number) => {
    if (!Number.isFinite(time)) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video) return;

    if (e.key === " " || e.key === "k") {
      e.preventDefault();
      togglePlay();
    } else if (e.key === "ArrowRight") {
      video.currentTime = Math.min(video.currentTime + 5, duration);
    } else if (e.key === "ArrowLeft") {
      video.currentTime = Math.max(video.currentTime - 5, 0);
    } else if (e.key === "m") {
      toggleMute();
    }
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  const showThumbnail = Boolean(thumbnail) && !isPlaying;
  const isMobile = useIsMobile();

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className={`group/video-container relative w-full overflow-hidden rounded-xl bg-black outline-none ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        className="block h-full w-full"
        onClick={togglePlay}
        playsInline
      />

      {thumbnail && (
        <button
          type="button"
          aria-label="Play video"
          onClick={togglePlay}
          className={`absolute inset-0 flex items-center justify-center bg-black bg-cover bg-center transition-opacity duration-300 ${
            showThumbnail ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          style={{
            backgroundImage: `url(${thumbnail})`,
          }}
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-black shadow-lg transition-transform hover:scale-105">
            <PlayIcon className="h-7 w-7 translate-x-0.5" />
          </span>
        </button>
      )}

      <div
        className={`
          absolute inset-x-0 bottom-0
          flex flex-col gap-1
          bg-gradient-to-t from-black/80 via-black/40 to-transparent
          px-3 pb-2 pt-6
          transition-opacity duration-300
          opacity-0
          ${
            !isPlaying || !hasStarted
              ? "group-hover/video-container:opacity-100"
              : "pointer-events-none group-hover/video-container:pointer-events-auto group-hover/video-container:opacity-100"
          }
        `}
      >
        <div
          ref={progressRef}
          onClick={handleSeek}
          className="group/bar relative h-1.5 w-full cursor-pointer rounded-full bg-white/30"
        >
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-white"
            style={{ width: `${progressPercent}%` }}
          />

          <div
            className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-0 transition-opacity group-hover/bar:opacity-100"
            style={{ left: `${progressPercent}%` }}
          />
        </div>

        <div className="flex items-center gap-3 pb-1 text-white">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <PauseIcon className="h-5 w-5" />
            ) : (
              <PlayIcon className="h-5 w-5" />
            )}
          </button>

          <div className="group/volume flex items-center gap-1.5">
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted || volume === 0 ? (
                <MuteIcon className="h-5 w-5" />
              ) : (
                <VolumeIcon className="h-5 w-5" />
              )}
            </button>

            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              aria-label="Volume"
              className="h-1 w-0 opacity-0 accent-white transition-all duration-200 group-hover/volume:ml-1 group-hover/volume:w-16 group-hover/volume:opacity-100"
            />
          </div>

          <span className="text-xs tabular-nums text-white/80">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>

          <div className="ml-auto">
            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? (
                <MinimizeIcon className="h-5 w-5" />
              ) : (
                <ExpandIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function PauseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
    </svg>
  );
}

function VolumeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon
        points="4 8 4 16 9 16 14 21 14 3 9 8 4 8"
        fill="currentColor"
        stroke="none"
      />
      <path d="M17.5 8.5a5 5 0 0 1 0 7" />
      <path d="M20 6a9 9 0 0 1 0 12" />
    </svg>
  );
}

function MuteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon
        points="4 8 4 16 9 16 14 21 14 3 9 8 4 8"
        fill="currentColor"
        stroke="none"
      />
      <line x1="17" y1="9" x2="23" y2="15" />
      <line x1="23" y1="9" x2="17" y2="15" />
    </svg>
  );
}

function ExpandIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M16 3h3a2 2 0 0 1 2 2v3" />
      <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
  );
}

function MinimizeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 3v3a2 2 0 0 1-2 2H4" />
      <path d="M15 3v3a2 2 0 0 0 2 2h3" />
      <path d="M9 21v-3a2 2 0 0 0-2-2H4" />
      <path d="M15 21v-3a2 2 0 0 1 2-2h3" />
    </svg>
  );
}
