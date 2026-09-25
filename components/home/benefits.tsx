import { benefits } from "@/app/content/benefits";
import { Card } from "flowbite-react";
import Image from "next/image";
import React from "react";
import { BenefitCard } from "./benefits/benefit-card";

const BenefitsBanner = () => {
  return (
    <section className="relative  py-12 lg:py-24 xl:py-28 text-center z-10 w-full max-w-full">
      <Image
        className="w-1/3 absolute z-0 md:-top-0 -right-0"
        src={"/home/space-elements-2.png"}
        alt="Interactive Workers space element 2"
        width={1109}
        height={1572}
        quality={100}
      ></Image>
      <Image
        className="w-1/2 absolute z-0 md:-top-0 -right-0"
        src={"/home/space-elements-3.png"}
        alt="Interactive Workers space element 3"
        width={596}
        height={824}
        quality={100}
      ></Image>
      <Image
        className="w-1/5 absolute z-0 md:bottom-0 left-0"
        src={"/home/space-elements-4.png"}
        alt="Interactive Workers space element 4"
        width={244}
        height={370}
        quality={100}
      ></Image>
      <article className="relative">
        <div className="relative z-40 w-11/12 md:w-3/4 mx-auto uppercase font-bold text-lg lg:text-4xl text-black p-12 bg-white rounded-3xl">
          <h2>
            Our virtual assistants are <br />
          </h2>
          <h2 className="mt-1.5 text-iw-red-1"> your partners in success </h2>
          <p className=" text-sm md:text-base mt-2">
            Delivering quality work, adaptability, and results at a pace that
            suits your business needs.
          </p>
        </div>
        <div className="relative z-40 md:w-10/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 align-middle items-center text-black mt-2 bg-white rounded-3xl md:p-8 px-4">
          {benefits.map((benefit, i) => {
            return (
              <BenefitCard
                key={i}
                title={benefit.title}
                i={i}
                width={87}
                height={88}
              />
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default BenefitsBanner;
