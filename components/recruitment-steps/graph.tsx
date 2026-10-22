"use client";

import { useEffect, useRef, useState } from "react";
import { Chart, registerables, type Plugin, type TooltipItem } from "chart.js";

Chart.register(...registerables);

export type GraphStat = {
  name: string;
  /** Displayed value, e.g. "24.7K", "54%" or "2m 56s". Numbers inside it are animated. */
  number: string;
};

export type GraphMetric = {
  /** Change indicator shown next to the stat, e.g. "+49%". */
  change: string;
  tone: "positive" | "warning";
};

type GraphProps = {
  /** Stats to display; animated in a continuous loop. */
  stats?: GraphStat[];
  /** Change indicators, matched to `stats` by index. */
  metrics?: GraphMetric[];
  style?: React.CSSProperties;
};

const DEFAULT_STATS: GraphStat[] = [
  { name: "Unique Visitors", number: "24.7K" },
  { name: "Total Pageviews", number: "56.9K" },
  { name: "Bounce Rate", number: "54%" },
  { name: "Visit Duration", number: "2m 56s" },
];

const DEFAULT_METRICS: GraphMetric[] = [
  { change: "+49%", tone: "positive" },
  { change: "+7%", tone: "positive" },
  { change: "-7%", tone: "warning" },
  { change: "+7%", tone: "warning" },
];

const TONE_CLASSES: Record<GraphMetric["tone"], string> = {
  positive: "text-green-500",
  warning: "text-yellow-500",
};

const COUNT_MS = 1800;
const HOLD_MS = 2200;

const LABELS = [
  "Dec 20",
  "Jan 21",
  "Feb 21",
  "Mar 21",
  "Apr 21",
  "May 21",
  "Jun 21",
  "Jul 21",
  "Aug 21",
  "Sep 21",
  "Oct 21",
  "Nov 21",
  "Dec 21",
  "Jan 22",
  "Feb 22",
  "Mar 22",
  "Apr 22",
  "May 22",
  "Jun 22",
  "Jul 22",
  "Aug 22",
  "Sep 22",
  "Oct 22",
  "Nov 22",
  "Dec 22",
  "Jan 23",
];

const CURRENT = [
  5000, 8700, 7500, 12000, 11000, 9500, 10500, 10000, 15000, 9000, 10000, 7000,
  22000, 7200, 9800, 9000, 10000, 8000, 15000, 12000, 11000, 13000, 11000,
  15000, 17000, 18000,
];

const PREVIOUS = [
  8000, 5000, 6500, 5000, 6500, 12000, 8000, 9000, 8000, 8000, 12500, 10000,
  10000, 12000, 11000, 16000, 12000, 10000, 10000, 14000, 9000, 10000, 15000,
  12500, 14000, 11000,
];

const formatThousands = (value: number | string) =>
  Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 3,
    notation: "compact",
  }).format(Number(value));

/** Scales every number inside `text` by `progress`, keeping its decimals and surrounding text. */
function scaleNumbers(text: string, progress: number) {
  if (progress >= 1) return text;
  return text.replace(/\d+(?:\.\d+)?/g, (match) => {
    const decimals = match.split(".")[1]?.length ?? 0;
    return (parseFloat(match) * progress).toFixed(decimals);
  });
}

/** Returns a 0 → 1 → 0 progress value that plays forward, holds, then plays back, forever. */
function useLoopingProgress() {
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const start = performance.now();
    const half = COUNT_MS + HOLD_MS;

    const tick = (now: number) => {
      const elapsed = (now - start) % (half * 2);
      const forward = elapsed < half;
      const t = Math.min((forward ? elapsed : elapsed - half) / COUNT_MS, 1);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      setProgress(forward ? eased : 1 - eased);
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return progress;
}

export function Graph({
  stats = DEFAULT_STATS,
  metrics = DEFAULT_METRICS,
  style,
}: GraphProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart<"line"> | null>(null);
  const progress = useLoopingProgress();
  const progressRef = useRef(progress);
  progressRef.current = progress;

  // Redraw the lines (revealed left to right) whenever the shared progress ticks
  useEffect(() => {
    chartRef.current?.draw();
  }, [progress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Clips the datasets to the animated progress so the lines draw in left to right
    const revealPlugin: Plugin<"line"> = {
      id: "reveal",
      beforeDatasetsDraw: (chart) => {
        const { ctx, chartArea } = chart;
        ctx.save();
        ctx.beginPath();
        ctx.rect(
          0,
          0,
          chartArea.left +
            (chartArea.right - chartArea.left) * progressRef.current,
          chart.height,
        );
        ctx.clip();
      },
      afterDatasetsDraw: (chart) => chart.ctx.restore(),
    };

    const chart = new Chart(canvas, {
      type: "line",
      plugins: [revealPlugin],
      data: {
        labels: LABELS,
        datasets: [
          {
            label: "Current",
            data: CURRENT,
            fill: true,
            backgroundColor: "rgba(221, 39, 45, 0.08)",
            borderColor: "rgb(221, 39, 45)",
            borderWidth: 2,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: "rgb(221, 39, 45)",
          },
          {
            label: "Previous",
            data: PREVIOUS,
            fill: false,
            borderColor: "rgb(203, 213, 225)",
            borderWidth: 2,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: "rgb(203, 213, 225)",
          },
        ],
      },
      options: {
        layout: { padding: window.innerWidth < 640 ? 8 : 20 },
        responsive: true,
        maintainAspectRatio: false,
        onResize: (chart, size) => {
          // Tighter padding and fewer x ticks on narrow screens
          const narrow = size.width < 480;
          chart.options.layout = { padding: narrow ? 8 : 20 };
          const xScale = chart.options.scales?.x as
            | { ticks: { autoSkipPadding: number } }
            | undefined;
          if (xScale) xScale.ticks.autoSkipPadding = narrow ? 24 : 48;
        },
        animation: false,
        font: { family: '"Inter", sans-serif', weight: 500 },
        color: "rgb(99, 102, 241)",
        scales: {
          y: {
            beginAtZero: true,
            border: { display: false },
            grid: { color: "rgb(241, 245, 249)" },
            ticks: { callback: (value) => formatThousands(value) },
          },
          x: {
            border: { display: false },
            grid: { display: false },
            ticks: { autoSkipPadding: 48, maxRotation: 0 },
          },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            mode: "nearest",
            intersect: false,
            position: "nearest",
            titleColor: "rgb(221, 39, 45)",
            bodyColor: "rgb(221, 39, 45)",
            backgroundColor: "#FFF",
            borderWidth: 1,
            borderColor: "rgb(221, 39, 45)",
            displayColors: false,
            caretSize: 0,
            caretPadding: 20,
            cornerRadius: 4,
            padding: 8,
            callbacks: {
              title: () => "",
              label: (context: TooltipItem<"line">) =>
                formatThousands(context.parsed.y ?? 0),
            },
          },
        },
        interaction: { intersect: false, mode: "nearest" },
      },
    });

    chartRef.current = chart;

    return () => {
      chart.destroy();
      chartRef.current = null;
    };
  }, []);

  return (
    <section className="flex flex-col justify-center antialiased" style={style}>
      <div className="col-span-full flex flex-col rounded-sm bg-white xl:col-span-8">
        {/* <header className="flex items-center  px-5 py-4">
          <h2 className="font-semibold text-gray-800 uppercase">Analytics</h2>
        </header> */}
        <div className="px-5 py-1">
          <div className="flex flex-wrap items-center justify-center max-md:gap-x-5">
            {stats.map((stat, index) => {
              const metric = metrics[index];
              const isLast = index === stats.length - 1;

              return (
                <div
                  key={stat.name}
                  className={`flex items-center ${isLast ? "" : "py-2"}`}
                >
                  <div className={isLast ? undefined : "mr-5"}>
                    <div className="flex items-center">
                      <div className="mr-2 md:text-3xl font-bold tabular-nums text-gray-800">
                        {scaleNumbers(stat.number, progress)}
                      </div>
                      {metric && (
                        <div
                          className={`text-xs font-medium ${TONE_CLASSES[metric.tone]}`}
                        >
                          {metric.change}
                        </div>
                      )}
                    </div>
                    <div className="text-xs text-gray-500">{stat.name}</div>
                  </div>
                  {!isLast && (
                    <div
                      className="mr-5 hidden h-8 w-px bg-gray-200 md:block"
                      aria-hidden="true"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative h-48 w-full min-w-0 flex-grow sm:h-64 md:h-72">
          <canvas ref={canvasRef} id="analytics-card-01" />
        </div>
      </div>
    </section>
  );
}
