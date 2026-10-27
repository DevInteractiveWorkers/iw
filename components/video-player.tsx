"use client";

import { useIsMobile } from "@/lib/useMobile";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface VideoPlayerProps {
  src: string;
  thumbnail?: string;
  className?: string;
  /** Play the first few seconds once the video is mostly in view, then pause. */
  autoPreview?: boolean;
}

const PREVIEW_SECONDS = 5;
// Fraction of the video that must be visible to count as "in view".
const PREVIEW_VISIBLE_RATIO = 0.5;

export default function VideoPlayer({
  src,
  thumbnail,
  className = "",
  autoPreview = false,
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

  // --- Progress bar interaction state ---
  const [bufferedPercent, setBufferedPercent] = useState(0);
  const [isScrubbing, setIsScrubbing] = useState(false);
  const [isBarHovered, setIsBarHovered] = useState(false);
  // Ratio (0-1) of the pointer's current position on the bar, while
  // hovering or scrubbing. `null` means "not currently interacting".
  const [hoverRatio, setHoverRatio] = useState<number | null>(null);
  const wasPlayingBeforeScrubRef = useRef(false);

  const isMobile = useIsMobile();

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

    const onProgress = () => {
      if (video.duration && video.buffered.length > 0) {
        const end = video.buffered.end(video.buffered.length - 1);
        setBufferedPercent(Math.min((end / video.duration) * 100, 100));
      }
    };

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("ended", onEnded);
    video.addEventListener("volumechange", onVolumeChange);
    video.addEventListener("progress", onProgress);

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("volumechange", onVolumeChange);
      video.removeEventListener("progress", onProgress);
    };
  }, []);

  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(document.fullscreenElement === containerRef.current);
    };

    document.addEventListener("fullscreenchange", onFsChange);

    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  useEffect(() => {
    if (!autoPreview) return;

    const video = videoRef.current;
    const container = containerRef.current;
    if (!video) return;

    // True only while the preview itself is driving playback.
    let previewing = false;
    // Set once the user plays, pauses or seeks; the preview never runs again.
    let userControlled = false;

    const takeOver = () => {
      userControlled = true;
      previewing = false;
    };

    const startPreview = () => {
      if (userControlled || previewing) return;
      if (!video.paused || video.currentTime >= PREVIEW_SECONDS) return;

      previewing = true;
      video.play().catch(() => {
        // Autoplay blocked (e.g. unmuted without a prior user gesture).
        previewing = false;
      });
    };

    const stopPreview = () => {
      if (!previewing) return;
      previewing = false;
      video.pause();
    };

    const onPreviewTimeUpdate = () => {
      if (!previewing || video.currentTime < PREVIEW_SECONDS) return;

      previewing = false;
      video.pause();
      video.currentTime = PREVIEW_SECONDS;
    };

    // A play event we didn't start means the user (or other code) took over.
    const onPreviewPlay = () => {
      if (!previewing) userControlled = true;
    };
    const onPreviewSeeking = () => {
      if (previewing) takeOver();
    };
    const onPreviewEnded = () => {
      previewing = false;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView =
          entry.isIntersecting &&
          entry.intersectionRatio >= PREVIEW_VISIBLE_RATIO;

        if (inView) startPreview();
        else stopPreview();
      },
      { threshold: [0, PREVIEW_VISIBLE_RATIO] },
    );

    observer.observe(video);

    video.addEventListener("timeupdate", onPreviewTimeUpdate);
    video.addEventListener("play", onPreviewPlay);
    video.addEventListener("seeking", onPreviewSeeking);
    video.addEventListener("ended", onPreviewEnded);
    container?.addEventListener("pointerdown", takeOver);
    container?.addEventListener("keydown", takeOver);

    return () => {
      observer.disconnect();
      video.removeEventListener("timeupdate", onPreviewTimeUpdate);
      video.removeEventListener("play", onPreviewPlay);
      video.removeEventListener("seeking", onPreviewSeeking);
      video.removeEventListener("ended", onPreviewEnded);
      container?.removeEventListener("pointerdown", takeOver);
      container?.removeEventListener("keydown", takeOver);
    };
  }, [autoPreview]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  // Convert a clientX coordinate into a 0-1 ratio along the progress bar.
  const getRatioFromClientX = (clientX: number) => {
    const bar = progressRef.current;
    if (!bar) return 0;

    const rect = bar.getBoundingClientRect();
    if (rect.width === 0) return 0;

    return Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
  };

  // Move the video (and UI) to a given ratio without waiting for the
  // browser's own timeupdate event, so scrubbing feels instant.
  const scrubToRatio = (ratio: number) => {
    const video = videoRef.current;
    if (!video || !duration) return;

    const time = ratio * duration;
    video.currentTime = time;
    setCurrentTime(time);
  };

  const handleProgressPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    const bar = progressRef.current;
    if (!video || !bar || !duration) return;

    e.preventDefault();
    bar.setPointerCapture(e.pointerId);

    wasPlayingBeforeScrubRef.current = !video.paused;
    // Pause while actively scrubbing so the video doesn't fight the drag.
    video.pause();

    setIsScrubbing(true);
    const ratio = getRatioFromClientX(e.clientX);
    setHoverRatio(ratio);
    scrubToRatio(ratio);
  };

  const handleProgressPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!duration) return;

    const ratio = getRatioFromClientX(e.clientX);
    setHoverRatio(ratio);

    if (isScrubbing) {
      scrubToRatio(ratio);
    }
  };

  const endScrub = (e: React.PointerEvent<HTMLDivElement>) => {
    const bar = progressRef.current;
    if (bar && bar.hasPointerCapture(e.pointerId)) {
      bar.releasePointerCapture(e.pointerId);
    }

    if (isScrubbing) {
      setIsScrubbing(false);
      if (wasPlayingBeforeScrubRef.current) {
        videoRef.current?.play();
      }
    }
  };

  const handleProgressPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    endScrub(e);
  };

  const handleProgressPointerCancel = (
    e: React.PointerEvent<HTMLDivElement>,
  ) => {
    endScrub(e);
  };

  const handleProgressPointerEnter = () => setIsBarHovered(true);

  const handleProgressPointerLeave = () => {
    setIsBarHovered(false);
    if (!isScrubbing) setHoverRatio(null);
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

  // While actively scrubbing, the playhead/fill should track the pointer
  // directly rather than waiting for currentTime state to catch up.
  const displayPercent =
    isScrubbing && hoverRatio !== null ? hoverRatio * 100 : progressPercent;

  const showTooltip =
    (isBarHovered || isScrubbing) && hoverRatio !== null && duration > 0;
  const tooltipTime = hoverRatio !== null ? hoverRatio * duration : 0;
  const tooltipPercent = hoverRatio !== null ? hoverRatio * 100 : 0;

  const showThumbnail = Boolean(thumbnail) && !isPlaying;

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
        preload="metadata"
        className="block h-full w-full"
        onClick={togglePlay}
        playsInline
      />

      <button
        type="button"
        aria-label="Play video"
        onClick={togglePlay}
        className={`absolute inset-0 flex items-center justify-center group/thumbnail`}
      >
        {thumbnail && (
          <Image
            src={thumbnail}
            alt={`thumbnail`}
            width={1080}
            height={1080}
            className={`z-0 absolute top-0 left-0 w-full h-full object-cover ${isPlaying ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
          />
        )}
        <span
          className={`z-10 flex h-16 w-16 items-center justify-center rounded-full bg-black/20 backdrop-blur-sm text-white shadow-lg transition-all hover:scale-105 duration-300 ${
            isPlaying
              ? "group-hover/thumbnail:opacity-100 opacity-0"
              : "opacity-100"
          }`}
        >
          {isPlaying ? (
            <PauseIcon className="h-10 w-10" />
          ) : (
            <PlayIcon className="h-10 w-10" />
          )}
        </span>
      </button>

      <div
        className={`
          absolute inset-x-0 bottom-0
          flex flex-col gap-1
          bg-gradient-to-t from-black/80 via-black/40 to-transparent
          px-3 pb-2 pt-6
          transition-opacity duration-300
          opacity-0
          ${
            !isPlaying || !hasStarted || isScrubbing
              ? "group-hover/video-container:opacity-100"
              : "pointer-events-none group-hover/video-container:pointer-events-auto group-hover/video-container:opacity-100"
          }
          ${isScrubbing ? "!opacity-100" : ""}
        `}
      >
        {/* Bigger invisible hit area around the visual bar so the touch
            target is comfortable on mobile without changing the bar's
            visual thickness. */}
        <div
          className={`group/bar relative -my-3 flex touch-none select-none items-center py-3 ${
            isMobile ? "cursor-default" : "cursor-pointer"
          }`}
          onPointerDown={handleProgressPointerDown}
          onPointerMove={handleProgressPointerMove}
          onPointerUp={handleProgressPointerUp}
          onPointerCancel={handleProgressPointerCancel}
          onPointerEnter={handleProgressPointerEnter}
          onPointerLeave={handleProgressPointerLeave}
        >
          {/* Time preview tooltip */}
          {showTooltip && (
            <div
              className="pointer-events-none absolute bottom-full mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-black/90 px-1.5 py-0.5 text-xs font-medium tabular-nums text-white shadow"
              style={{
                left: `${tooltipPercent}%`,
              }}
            >
              {formatTime(tooltipTime)}
            </div>
          )}

          <div
            ref={progressRef}
            className={`relative w-full rounded-full bg-white/30 transition-[height] duration-150 ${
              isScrubbing
                ? "h-2"
                : isBarHovered
                  ? "h-2"
                  : isMobile
                    ? "h-1.5"
                    : "h-1"
            }`}
          >
            {/* Buffered / seekable range */}
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-white/40"
              style={{ width: `${bufferedPercent}%` }}
            />

            {/* Played progress */}
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-iw-red-1"
              style={{ width: `${displayPercent}%` }}
            />

            {/* Playhead */}
            <div
              className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-iw-red-1 shadow-md ring-2 ring-white transition-opacity ${
                isMobile ? "h-4 w-4" : "h-3 w-3"
              } ${
                isScrubbing || isBarHovered
                  ? "opacity-100"
                  : "opacity-0 group-hover/bar:opacity-100"
              }`}
              style={{ left: `${displayPercent}%` }}
            />
          </div>
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
