"use client";
import React, { useState } from "react";
import DispatchAccordion from "./accordion";
import Image from "next/image";

const DispatchAccordions = () => {
  const [opened, setOpened] = useState<number>(-1);

  return (
    <>
      <DispatchAccordion
        opened={opened}
        setOpened={setOpened}
        index={0}
        headerColor="iw-red-2"
        imageSrc="/dispatch/0.png"
        title="Security Industry"
        description={
          <p
            className={`mt-4 font-normal text-xl xl:text-3xl text-ellipsis text-black`}
          >
            Security Guards need support from a team that monitors and checks
            that every part of the work is being conducted properly.
            <br /> <br />
            <strong className="font-extrabold">
              Your location will always be covered and never be left alone.
            </strong>{" "}
            We'll check that.
          </p>
        }
        additionalContent={
          <p
            className={`mt-4 font-normal text-xl xl:text-3xl text-ellipsis text-black`}
          >
            The weight good logistics can have on your business should not be
            underestimated.
          </p>
        }
        arrowColor="iw-red-2"
        layout="imageLeft"
        offset
      />

      <DispatchAccordion
        opened={opened}
        setOpened={setOpened}
        index={1}
        backgroundImage="/dispatch/1.png"
        title="Shipping Industry"
        description={
          <>
            <p
              className={`my-4 font-normal md:text-xl xl:text-3xl text-ellipsis`}
            >
              Protecting your shipping label can be hard with cargo, packages,
              and a heavy load of work the whole week.
            </p>
            <p className="font-extrabold">
              This is where our dispatch service comes in. We ensure every
              package is tracked, processed, and delivered accurately,
              minimizing errors and delays.
            </p>
          </>
        }
        additionalContent={
          <p
            className={`my-4 font-normal md:text-xl xl:text-3xl text-ellipsis transition-all duration-1000 ease-in-out`}
          >
            With InteractiveWorkers, your shipping logistics are in capable
            hands, keeping your business running smoothly.
          </p>
        }
        layout="background"
        imageSrc={""}
      />

      <DispatchAccordion
        opened={opened}
        setOpened={setOpened}
        index={2}
        textAlign="right"
        imageSrc="/dispatch/heroes.png"
        title="Transportation Industry"
        description={
          <p
            className={`mt-4 font-normal md:text-xl xl:text-3xl text-ellipsis`}
          >
            Protecting your shipping label can be hard with cargo, packages, and
            a heavy load of work the whole week.
            <br /> <br />
            <strong className="font-extrabold">
              This is why a dispatch service making sure every package comes in
              and goes out the way they are supposed to, is important to
              us.{" "}
            </strong>
          </p>
        }
        layout="imageRight"
        additionalContent={
          <>
            <p>
              The weight good logistics can have on your business should not be
              underestimated. <br />
            </p>
            <ol
              className={`mt-4 font-normal md:text-xl xl:text-3xl text-ellipsis`}
            >
              <li className="mb-4 flex items-end gap-1">
                We'll track every delivery and pickup related to your business.
                No ship or delivery comes in without us knowing about it.{" "}
                <span className="font-black text-5xl">.1</span>
              </li>
              <li className="mb-4 flex items-end gap-1">
                Under any circumstance, we'll always be there to create the best
                service for you. All your boxes will be cataloged.
                <span className="font-black text-5xl">.2</span>
              </li>
              <li className="mb-4 flex items-end gap-1">
                The insurance with the best coverage is the one that makes sure
                you never lose. Shipping and pickup services require someone to
                take care of the packages, we'll be there for you.
                <span className="font-black text-5xl">.3</span>
              </li>
            </ol>
          </>
        }
      />

      <DispatchAccordion
        opened={opened}
        setOpened={setOpened}
        index={3}
        textAlign="right"
        backgroundImage="/dispatch/2.png"
        title="EMERGENCY INDUSTRY"
        description={
          <p
            className={`my-4 font-normal md:text-xl xl:text-3xl text-ellipsis transition-all duration-1000 ease-in-out`}
          >
            When it comes to emergencies, you don't have the luxury of second
            chances.
          </p>
        }
        additionalContent={
          <p>
            <strong className="font-extrabold">
              Having a reliable dispatch service is essential to ensuring
              immediate response and efficient coordination during critical
              situations.
            </strong>
            <br /> <br />
            Add our dispatch services to your operations and show people that
            you're always ready to act swiftly when it matters the most.
          </p>
        }
        layout="background"
        imageSrc={""}
      />
    </>
  );
};

export default DispatchAccordions;
