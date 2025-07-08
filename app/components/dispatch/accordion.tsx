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
  arrowColor?: "red" | "white";
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
  arrowColor = "red",
  additionalContent,
  textAlign = "left",
  headerColor = "white",
  offset = false,
}) => {
  const isOpen = opened === index;

  return (
    <article
      className={`${layout !== "imageLeft" && "overflow-hidden"} 
      relative w-full transition-all duration-700 ease-in-out rounded-3xl text-${textAlign} flex justify-evenly max-md:flex-col max-md:justify-center gap-6`}
    >
      {layout !== "background" && (
        <>
          <div
            className={`relative h-auto ${layout === "imageLeft" ? "min-h-[300px]" : "min-h-[500px]"} md:w-4/12 min-w-[200px] rounded-3xl z-10
              ${layout === "imageLeft" ? "bg-iw-red-2" : "bg-white order-last overflow-hidden"}`}
          >
            <div
              className={`rounded-3xl ${offset && `absolute bottom-0 h-[120%] w-full min-w-[200px] flex items-end overflow-hidden`}`}
            >
              <Image
                className={`absolute h-full w-full min-w-[200px] rounded-3xl z-10 object-cover object-right-top`}
                src={imageSrc}
                alt={title}
                width={277}
                height={353}
                quality={100}
              />
            </div>
          </div>
        </>
      )}

      <div
        className={`relative text-white ${textAlign === "left" ? "" : "flex justify-end"} ${layout !== "background" && "md:w-9/12"}`}
      >
        {backgroundImage && layout === "background" && (
          <Image
            className="absolute z-0 object-cover object-top w-full h-full"
            src={backgroundImage}
            alt={title}
            fill
            quality={100}
          />
        )}
        <div
          className={`${
            layout === "background"
              ? "relative z-40 text-white px-6 md:px-16 pt-16 pb-6 rounded-3xl w-9/12 md:w-7/12"
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
    <Image
      onClick={onClick}
      className={`absolute bottom-8 ${
        align === "left" ? "right-10" : "left-10"
      } z-40 cursor-pointer transition-all duration-500 ${isOpen ? "rotate-180" : ""}`}
      src={`/dispatch/${arrowColor}-arrow.png`}
      alt="Toggle content"
      width={31}
      height={31}
      quality={100}
    />
  );
};

export default DispatchAccordion;
