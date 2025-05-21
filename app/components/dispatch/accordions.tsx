"use client";
import React, { useState } from "react";
import Image from "next/image";

const DispatchAccordions = () => {
  const [opened, setOpened] = useState<number>(-1);

  return (
    <>
      <article
        className={`grid md:grid-cols-12 md:gap-3 overflow-hidden relative ${opened === 0 ? "" : "md:max-h-80"}`}
      >
        <div className={`col-span-4 bg-iw-red-2 rounded-3xl my-2 md:my-0`}>
          <Image
            className={`${opened === 0 ? " md:h-full " : "md:h-80"} h-48 mx-auto object-cover object-top md:max-h-none`}
            src={"/dispatch/0.png"}
            alt="Dispatch Interactive Worker"
            width={277}
            height={353}
            quality={100}
          ></Image>
        </div>
        <div
          className={`md:col-span-8 transition-all overflow-hidden w-full ${opened === 0 ? " h-full " : "h-80"}`}
        >
          <div
            className={`px-6 md:px-12 pt-16 pb-6 bg-white  rounded-3xl h-full flex flex-col  justify-around`}
          >
            <h2 className="text-iw-red-2 font-black text-3xl md:text-4xl xl:text-6xl uppercase">
              Security Industry
            </h2>
            <p
              className={`mt-4 font-normal text-xl xl:text-3xl text-ellipsis ${opened === 0 ? " line-clamp-none" : "line-clamp-3 md:line-clamp-5 xl:line-clamp-2"}`}
            >
              Security Guards need support from a team that monitors and checks
              that every part of the work is being conducted properly. <br />{" "}
              <br />
              <span className="font-extrabold">
                Your location will always be covered and never be left alone.
              </span>{" "}
              We&apos;ll check that
              <br /> <br />
              The weight good logistics can have on your business should not be
              underestimated. <br />
            </p>
            <Image
              onClick={(e) => {
                opened === 0 ? setOpened(-1) : setOpened(0);
              }}
              className={`ml-auto transition-all duration-1000 ${opened === 0 ? " rotate-180" : ""}`}
              src={"/dispatch/red-arrow.png"}
              alt="Interactive see more arrow"
              width={31}
              height={31}
              quality={100}
            ></Image>
          </div>
        </div>
      </article>

      <article
        className={`text-white relative w-full transition-all duration-1000 overflow-hidden rounded-3xl ${opened === 1 ? "max-h-[2000px]" : "max-h-[550px]"}`}
      >
        <Image
          className={`absolute z-0 object-cover w-full h-full object-top`}
          src={"/dispatch/1.png"}
          alt="Interactive security hero"
          width={1251}
          height={649}
        ></Image>
        <div
          className={`relative z-40 px-6 md:px-16 pt-16 pb-6 rounded-3xl w-9/12 md:w-7/12 xl:w-6/12`}
        >
          <h2 className=" font-black text-3xl md:text-4xl xl:text-6xl uppercase">
            Shipping Industry
          </h2>
          <p
            className={`my-4 font-normal md:text-xl xl:text-3xl text-ellipsis transition-all duration-1000 ease-in-out ${opened === 1 ? " line-clamp-none" : " line-clamp-6 xl:line-clamp-[8]"}`}
          >
            Protecting your shipping label can be hard with cargo, packages, and
            a heavy load of work the whole week. <br /> <br />
            <span className="font-extrabold">
              This is where our dispatch service comes in. We ensure every
              package is tracked, processed, and delivered accurately,
              minimizing errors and delays.
            </span>{" "}
            <br /> <br />
            With InteractiveWorkers, your shipping logistics are in capable
            hands, keeping your business running smoothly.
          </p>
        </div>
        <Image
          onClick={(e) => {
            opened === 1 ? setOpened(-1) : setOpened(1);
          }}
          className={`absolute bottom-4 right-10 z-40 transition-all duration-1000 ${opened === 1 ? " rotate-180" : ""}`}
          src={"/dispatch/red-arrow.png"}
          alt="Interactive see more arrow"
          width={31}
          height={31}
          quality={100}
        ></Image>
      </article>

      <article
        className={`grid md:grid-cols-12 md:gap-3 overflow-hidden ${opened === 2 ? "h-fit" : "md:max-h-96"}`}
      >
        <div
          className={`text-white text-right md:col-span-8 transition-all overflow-hidden w-full ${opened === 2 ? "h-fit" : "h-96"}`}
        >
          <div
            className={`px-6 md:px-12 pt-12 pb-6 bg-iw-red-2  rounded-3xl h-full relative`}
          >
            <h2 className=" font-black text-3xl md:text-4xl xl:text-6xl uppercase">
              Transportation Industry
            </h2>
            <p
              className={`mt-4 font-normal md:text-xl xl:text-3xl text-ellipsis ${opened === 2 ? " line-clamp-none" : " line-clamp-[7] xl:line-clamp-3"}`}
            >
              Protecting your shipping label can be hard with cargo, packages,
              and a heavy load of work the whole week.
              <br />
              <span className="font-extrabold">
                This is why a dispatch service making sure every package comes
                in and goes out the way they are supposed to, is important to
                us.{" "}
              </span>
              <br /> <br />
              The weight good logistics can have on your business should not be
              underestimated. <br />
            </p>

            <ol
              className={`mt-6 font-normal md:text-xl xl:text-2xl mr-4 ${opened === 2 ? "block" : "hidden"}`}
            >
              <li className="mb-4 flex items-end gap-1">
                We&apos;ll track every delivery and pickup related to your
                business. No ship or delivery comes in without us knowing about
                it. <span className="font-black text-5xl">.1</span>
              </li>
              <li className="mb-4 flex items-end gap-1">
                Under any circumstance, we&apos;ll always be there to create the
                best service for you. All your boxes will be cataloged.
                <span className="font-black text-5xl">.2</span>
              </li>
              <li className="mb-4 flex items-end gap-1">
                The insurance with the best coverage is the one that makes sure
                you never lose. Shipping and pickup services require someone to
                take care of the packages, we&apos;ll be there for you.
                <span className="font-black text-5xl">.3</span>
              </li>
            </ol>
            <Image
              onClick={(e) => {
                opened === 2 ? setOpened(-1) : setOpened(2);
              }}
              className={`absolute bottom-8 left-10 z-40 transition-all duration-1000 ${opened === 2 ? " rotate-180" : ""}`}
              src={"/dispatch/white-arrow.png"}
              alt="Interactive see more arrow"
              width={31}
              height={31}
              quality={100}
            ></Image>
          </div>
        </div>
        <div
          className={`col-span-4 relative bg-white rounded-3xl my-2 md:my-0 overflow-hidden`}
        >
          <Image
            className={`${opened === 2 ? "absolute w-fit" : "h-96"} mx-auto w-full object-cover object-top md:max-h-none`}
            src={"/dispatch/heroes.png"}
            alt="Dispatch Interactive Worker"
            width={277}
            height={353}
            quality={100}
          ></Image>
        </div>
      </article>

      <article
        className={`text-white relative w-full transition-all duration-1000 overflow-hidden rounded-3xl ${opened === 3 ? "max-h-[2000px]" : "max-h-[350px]"}`}
      >
        <Image
          className={`absolute z-0 object-cover object-center md:object-left w-full h-full`}
          src={"/dispatch/2.png"}
          alt="Interactive security hero"
          width={1251}
          height={649}
          quality={100}
        ></Image>
        <div
          className={`relative z-40 px-6 md:px-16 pt-16 pb-6 rounded-3xl w-9/12 md:w-7/12 text-right ml-auto`}
        >
          <h2 className=" font-black text-3xl md:text-4xl xl:text-6xl uppercase">
            EMERGENCY INDUSTRY
          </h2>
          <p
            className={`my-4 font-normal md:text-xl xl:text-3xl text-ellipsis transition-all duration-1000 ease-in-out ${opened === 3 ? " line-clamp-none" : " line-clamp-4"}`}
          >
            When it comes to emergencies, you don’t have the luxury of second
            chances. <br /> <br />
            <span className="font-extrabold">
              Having a reliable dispatch service is essential to ensuring
              immediate response and efficient coordination during critical
              situations.
            </span>{" "}
            <br /> <br />
            Add our dispatch services to your operations and show people that
            you’re always ready to act swiftly when it matters the most.
          </p>
        </div>
        <Image
          onClick={(e) => {
            opened === 3 ? setOpened(-1) : setOpened(3);
          }}
          className={`absolute bottom-8 left-10 z-40 transition-all duration-1000 ${opened === 3 ? " rotate-180" : ""}`}
          src={"/dispatch/white-arrow.png"}
          alt="Interactive see more arrow"
          width={31}
          height={31}
          quality={100}
        ></Image>
      </article>
    </>
  );
};

export default DispatchAccordions;
