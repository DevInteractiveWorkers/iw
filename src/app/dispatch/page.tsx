import Image from "next/image";
import React from "react";
import NavbarComponent from "@/src/components/navbar";
import DispatchAccordions from "@/src/components/dispatch/accordions";
import MainForm from "@/src/components/form/form";
import { ParticlesComponent } from "@/src/components/particles";

const Dispatch = () => {
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <article className="banner-dispatch flex flex-col md:flex-row items-center justify-center py-8 md:pb-4 max-w-full overflow-hidden">
        <div className="basis-1/3 py-4 md:py-0"></div>
        <div className="lg:absolute left-[15%] z-40 text-white">
          <h1 className="text-3xl md:text-6xl font-black ml-2 mb-4">
            DISPATCH <br /> SOLUTIONS
          </h1>
          <h2 className="text-xl md:text-3xl font-normal py-1 px-2 bg-[#DD272D]">
            24/7 surveillance for your business.
          </h2>
          <h3 className="text-xl md:text-3xl font-normal w-fit py-1 px-2 my-1 bg-[#DD272D]">
            Prevention is always key!
          </h3>
        </div>
        <Image
          className="w-full md:basis-2/5 md:max-w-[45%]"
          src={"/dispatch/banner-0.png"}
          alt="Dispatch's Interactive Banner"
          width={743}
          height={485}
        ></Image>
      </article>
      <div className="bg-[#181621] py-16 md:py-24 relative">
        <ParticlesComponent
          id="dispatch-particle"
          className="opacity-15"
        ></ParticlesComponent>
        <section className="flex flex-col gap-8 w-5/6 mx-auto">
          <DispatchAccordions></DispatchAccordions>
        </section>
      </div>
      <MainForm dark={false}></MainForm>
    </div>
  );
};

export default Dispatch;
