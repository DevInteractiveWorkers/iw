import { HTMLAttributes, SVGProps } from "react";

export default function Loader(
  props: HTMLAttributes<HTMLDivElement> &
    SVGProps<SVGSVGElement> &
    SVGProps<SVGCircleElement>,
) {
  const svgProps: SVGProps<SVGSVGElement> = props;
  const cProps: SVGProps<SVGCircleElement> = props;
  const divProps: HTMLAttributes<HTMLDivElement> = props;
  const { className } = props;

  return (
    <div
      {...divProps}
      className={
        className ??
        "text-white min-w-[24px] min-h-[24px] w-1/4 loading-page-loader:w-1/10 overflow-visible"
      }
    >
      <svg
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...svgProps}
      >
        <g {...svgProps}>
          <circle
            cx="12"
            cy="12"
            r="9.5"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            {...cProps}
          >
            <animate
              attributeName="strokeDasharray"
              dur="1.5s"
              calcMode="spline"
              values="0 150;42 150;42 150;42 150"
              keyTimes="0;0.475;0.95;1"
              keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
              repeatCount="indefinite"
              {...svgProps}
            />
            <animate
              attributeName="strokeDashoffset"
              dur="1.5s"
              calcMode="spline"
              values="0;-16;-59;-59"
              keyTimes="0;0.475;0.95;1"
              keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
              repeatCount="indefinite"
              {...svgProps}
            />
          </circle>
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="2s"
            values="0 12 12;360 12 12"
            repeatCount="indefinite"
          />
        </g>
      </svg>
    </div>
  );
}

export function LoadingPage() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-[1000] bg-black opacity-50 flex items-center justify-center loading-page-loader">
      <Loader strokeWidth={1} />
    </div>
  );
}
