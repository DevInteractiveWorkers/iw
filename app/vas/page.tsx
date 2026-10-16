import React from "react";
import NavbarComponent from "@/components/navbar";
import Image from "next/image";
import MainForm from "@/components/form/form";
import Teams from "@/components/vas/teams";
import { ParticlesComponent } from "@/components/particles";

const VAs = () => {
  return;
  return (
    <section>
      <article className="banner-va flex flex-col md:flex-row items-center justify-center py-8 md:pb-4 max-w-full overflow-hidden">
        <div className=" basis-1/3 py-4 md:py-0">
          <h1 className="text-4xl md:text-6xl font-black mb-1">Our VAs</h1>
          <strong className="block pr-24 p-2 bg-[#440000] bg-blend-multiply font-normal text-2xl md:text-4xl">
            available for you
          </strong>
        </div>
        <Image
          className="w-full md:basis-2/5 md:max-w-[45%]"
          src={"/vas/banner-1.png"}
          alt="VA's Interactive Banner"
          width={743}
          height={485}
        ></Image>
      </article>
      <Image
        className="ml-auto -my-[34px]"
        src={"/vas/banner-element.png"}
        alt="Va decorative element"
        width={284}
        height={68}
      ></Image>
      <div className="relative">
        <article className="w-11/12 md:w-3/4 bg-iw-red-1 mx-auto text-base md:text-xl font-normal  flex flex-col items-center justify-center gap-4 py-12 px-8 md:px-20 rounded-b-[66px]">
          <p>
            <strong className="font-extrabold">
              Our Remote Staff are a versatile solution for any business.
            </strong>{" "}
            They handle a wide range of tasks, freeing you to focus on core
            activities. Imagine having a dedicated assistant who consistently
            delivers the best service, allowing you to come back to truly
            impactful work.
          </p>
          <p>
            Beyond the obvious benefits, remote staff can address hidden needs.{" "}
            <strong className="font-extrabold">
              Our comprehensive services go beyond what you might initially
              consider, offering the best value and most helpful virtual
              assistants available.
            </strong>
              Let us show you how we can empower your business.
          </p>
        </article>
        <div className="absolute w-full h-screen -z-10">
          <ParticlesComponent
            id="vas-particles"
            color="#000000"
            className="opacity-20 w-full h-[150vh] -z-10"
          ></ParticlesComponent>
        </div>
      </div>
      <Teams></Teams>
    </section>
  );
};

export default VAs;
