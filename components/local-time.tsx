"use client";

import { useEffect, useState } from "react";

const BUSINESS_TIME_ZONE = "America/New_York";

export interface BusinessHours {
  /** Days the business is open, 0 = Sunday ... 6 = Saturday (Eastern time). */
  days: number[];
  /** Opening time in 24h "HH:mm", Eastern time. */
  start: string;
  /** Closing time in 24h "HH:mm", Eastern time. */
  end: string;
}

/**
 * InteractiveWorkers' business hours are not defined anywhere in the codebase.
 * Set them here (or pass the `businessHours` prop), e.g.:
 *   { days: [1, 2, 3, 4, 5], start: "09:00", end: "17:00" }
 * While this is null the component shows the time comparison only.
 */
export const BUSINESS_HOURS: BusinessHours | null = null;

type Parts = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  weekday: number;
};

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const getParts = (date: Date, timeZone: string): Parts => {
  const map: Record<string, string> = {};
  new Intl.DateTimeFormat("en-US", {
    timeZone,
    hourCycle: "h23",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    weekday: "short",
  })
    .formatToParts(date)
    .forEach((p) => (map[p.type] = p.value));

  return {
    year: Number(map.year),
    month: Number(map.month),
    day: Number(map.day),
    hour: Number(map.hour),
    minute: Number(map.minute),
    weekday: WEEKDAYS.indexOf(map.weekday),
  };
};

/** Offset of `timeZone` from UTC, in minutes, at the given instant (DST aware). */
const getOffsetMinutes = (date: Date, timeZone: string): number => {
  const p = getParts(date, timeZone);
  const asUtc = Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute);
  return Math.round(
    (asUtc - Math.floor(date.getTime() / 60000) * 60000) / 60000,
  );
};

/** The instant at which `timeZone`'s wall clock reads the given date and time. */
const zonedTimeToDate = (
  { year, month, day }: Pick<Parts, "year" | "month" | "day">,
  minutesOfDay: number,
  timeZone: string,
): Date => {
  const wall = Date.UTC(year, month - 1, day, 0, minutesOfDay);
  let result = new Date(wall);
  // Two passes settle the offset when the guess lands across a DST change.
  for (let i = 0; i < 2; i++) {
    result = new Date(wall - getOffsetMinutes(result, timeZone) * 60000);
  }
  return result;
};

const zoneAbbreviation = (date: Date, timeZone: string): string =>
  new Intl.DateTimeFormat("en-US", { timeZone, timeZoneName: "short" })
    .formatToParts(date)
    .find((p) => p.type === "timeZoneName")?.value ?? timeZone;

const formatTime = (date: Date, timeZone: string): string =>
  new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
    minute: "2-digit",
  }).format(date);

const toMinutes = (hhmm: string): number => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + (m || 0);
};

const formatDifference = (diffMinutes: number): string => {
  if (diffMinutes === 0) return "Same time as Eastern";
  const abs = Math.abs(diffMinutes);
  const h = Math.floor(abs / 60);
  const m = abs % 60;
  const amount = [h && `${h}h`, m && `${m}m`].filter(Boolean).join(" ");
  return `${amount} ${diffMinutes > 0 ? "ahead of" : "behind"} Eastern`;
};

const LocalTime = ({
  className = "",
  businessHours = BUSINESS_HOURS,
}: {
  className?: string;
  businessHours?: BusinessHours | null;
}) => {
  const [now, setNow] = useState<Date | null>(null);
  const [timeZone, setTimeZone] = useState("");

  useEffect(() => {
    setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);

    let timeout: ReturnType<typeof setTimeout>;
    const tick = () => {
      const current = new Date();
      setNow(current);
      // Re-run on the next minute boundary so the display never lags.
      timeout = setTimeout(tick, 60000 - (current.getTime() % 60000) + 50);
    };
    tick();

    // Timers are throttled in background tabs; resync when the tab returns.
    const onVisible = () => {
      if (document.visibilityState === "visible") {
        clearTimeout(timeout);
        tick();
      }
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      clearTimeout(timeout);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  // Client time zone is only known in the browser; render nothing until then
  // to avoid a hydration mismatch.
  if (!now || !timeZone) return null;

  const diff =
    getOffsetMinutes(now, timeZone) - getOffsetMinutes(now, BUSINESS_TIME_ZONE);

  let hoursLine: string | null = null;
  let isOpen: boolean | null = null;

  if (businessHours) {
    const est = getParts(now, BUSINESS_TIME_ZONE);
    const minutes = est.hour * 60 + est.minute;
    const start = toMinutes(businessHours.start);
    const end = toMinutes(businessHours.end);
    isOpen =
      businessHours.days.includes(est.weekday) &&
      minutes >= start &&
      minutes < end;

    const open = zonedTimeToDate(est, start, BUSINESS_TIME_ZONE);
    const close = zonedTimeToDate(est, end, BUSINESS_TIME_ZONE);
    hoursLine = `Business hours: ${formatTime(open, BUSINESS_TIME_ZONE)} – ${formatTime(close, BUSINESS_TIME_ZONE)} ${zoneAbbreviation(now, BUSINESS_TIME_ZONE)} (${formatTime(open, timeZone)} – ${formatTime(close, timeZone)} your time)`;
  }

  return (
    <pre className={`whitespace-normal text-current ${className}`}>
      <code className="flex flex-wrap items-center gap-x-3 gap-y-0.5 whitespace-normal">
        <span>
          <span className="font-bold">{formatTime(now, timeZone)}</span>{" "}
          {zoneAbbreviation(now, timeZone)} (your time)
        </span>
        <span>
          <span className="font-bold">
            {formatTime(now, BUSINESS_TIME_ZONE)}
          </span>{" "}
          {zoneAbbreviation(now, BUSINESS_TIME_ZONE)}
        </span>
      </code>
    </pre>
  );
};

export default LocalTime;
