"use client";
import React from "react";
import Image from "next/image";

type DispatchAccordionProps = {
  opened: number;
  index: number;
  setOpened: (index: number) => void;
  imageSrc: string;
  title: string;
  description: React.ReactNode;
  layout: "imageLeft" | "imageRight" | "background";
  backgroundImage?: string;
  arrowColor?: string | "white" | "iw-red-2";
  additionalContent?: React.ReactNode;
  textAlign?: "right" | "left";
  headerColor?: "white" | "iw-red-2";
  offset?: boolean;
};

const DispatchAccordion: React.FC<DispatchAccordionProps> = ({
  opened,
  index,
  setOpened,
  imageSrc,
  title,
  description,
  layout,
  backgroundImage,
  arrowColor = "white",
  additionalContent,
  textAlign = "left",
  headerColor = "white",
  offset = false,
}) => {
  const isOpen = opened === index;

  return (
    <article
      className={`${layout !== "imageLeft" && "overflow-hidden"} 
      relative w-full transition-all duration-700 ease-in-out rounded-3xl text-${textAlign} flex justify-evenly max-md:flex-col max-md:justify-center gap-8
      `}
    >
      {layout !== "background" && (
        <>
          <div
            className={`relative h-auto ${layout === "imageLeft" ? "min-h-[300px]" : "min-h-[500px]"} md:w-4/12 min-w-[200px] rounded-3xl z-10 
              ${layout === "imageLeft" ? "order-first" : "order-last"} ${offset && "pt-10"}`}
          >
            <div
              className={`w-full h-full rounded-3xl
              ${layout === "imageLeft" ? "bg-iw-red-2 order-first" : "bg-white order-last overflow-hidden"}`}
            ></div>
            <Image
              className={`absolute top-0 h-full w-full min-w-[200px] rounded-3xl z-10 object-cover object-right-top`}
              src={imageSrc}
              alt={title}
              width={277}
              height={353}
              quality={100}
            />
          </div>
        </>
      )}

      <div
        className={`relative  ${textAlign === "left" ? "" : "flex justify-end"} ${layout !== "background" && "md:w-9/12"} ${offset && "mt-10"}`}
      >
        {backgroundImage && layout === "background" && (
          <Image
            className={"absolute z-0 object-cover object-top w-full h-full"}
            src={backgroundImage}
            alt={title}
            fill
            quality={100}
          />
        )}
        <div
          className={`${
            layout === "background"
              ? "relative z-40  px-6 md:px-16 pt-16 pb-6 rounded-3xl w-9/12 md:w-7/12"
              : layout === "imageLeft"
                ? "px-6 md:px-12 pt-16 pb-6 bg-white text-iw-red-2"
                : "px-6 md:px-12 pt-12 pb-6 bg-iw-red-2"
          } rounded-3xl h-full flex flex-col`}
        >
          {layout != "background" && (
            <Image
              className="absolute object-cover object-top w-full h-full rounded-3xl"
              src={`/dispatch/iw-texture.png`}
              alt={title}
              fill
              quality={100}
            />
          )}
          <h2
            className={`font-black z-10 text-3xl md:text-4xl xl:text-6xl uppercase ${
              layout === "background" ? "" : `text-${headerColor}`
            }`}
          >
            {title}
          </h2>
          <div
            className={`transition-all duration-700 ${
              isOpen
                ? "opacity-100 translate-y-0"
                : "opacity-50 translate-y-2 select-none"
            } font-normal md:text-xl xl:text-3xl text-ellipsis`}
          >
            <>{description}</>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                isOpen ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <span className="block mt-4 font-normal md:text-xl xl:text-3xl text-ellipsis">
                {additionalContent}
              </span>
            </div>
          </div>
        </div>
        <AccordionToggle
          isOpen={isOpen}
          align={textAlign}
          arrowColor={arrowColor}
          onClick={() => setOpened(isOpen ? -1 : index)}
        />
      </div>
    </article>
  );
};

const AccordionToggle = ({
  isOpen,
  align,
  arrowColor,
  onClick,
}: {
  isOpen: boolean;
  align: "left" | "right";
  arrowColor: string;
  onClick: () => void;
}) => {
  return (
    <svg
      onClick={onClick}
      className={`absolute bottom-8 text-${arrowColor} ${
        align === "left" ? "right-10" : "left-10"
      } z-40 cursor-pointer transition-all duration-500 ${isOpen ? "rotate-180" : "animate-rotate-360"}`}
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1538_296)">
        <path
          d="M-1.10101e-06 25.1874L-5.92864e-07 13.5624C-5.46115e-07 12.4929 0.866708 11.6249 1.9375 11.6249C3.00829 11.6249 3.875 12.4929 3.875 13.5624L3.875 24.3853L27.692 0.566956C28.4477 -0.18996 29.676 -0.18996 30.4317 0.566956C30.8101 0.945415 30.9987 1.44141 30.9987 1.93741C30.9987 2.43341 30.8101 2.92941 30.4317 3.30787L6.61462 27.1249L17.4375 27.1249C18.5083 27.1249 19.375 27.9929 19.375 29.0624C19.375 30.1319 18.5083 30.9999 17.4375 30.9999L5.8125 30.9999C2.60787 30.9999 -1.24109e-06 28.392 -1.10101e-06 25.1874Z"
          fill={"currentColor"}
        />
      </g>
      <defs>
        <clipPath id="clip0_1538_296">
          <rect
            width="31"
            height="31"
            fill="white"
            transform="matrix(-4.37114e-08 1 1 4.37114e-08 0 0)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DispatchAccordion;
