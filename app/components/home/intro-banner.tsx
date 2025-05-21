import Image from "next/image";
import Link from "next/link";
import React from "react";
import PopUp from "./popup";
import { ParticlesComponent } from "../particles";

const IntroBanner = () => {
  return (
    <section className="relative w-full bg-cover bg-no-repeat bg-iw-red-2 z-0">
      {/* <PopUp></PopUp> */}
      <Image
        className="absolute w-2/3 top-[20%] xl:top-0 z-30"
        src={"/home/space-elements-1.png"}
        alt="Space Elements IW"
        width={1109}
        height={1572}
        quality={100}
      ></Image>

      <article className="relative flex justify-around items-center">
        <ParticlesComponent id="landing-particles"></ParticlesComponent>
        <div className="absolute md:relative -bottom-8 mx-auto w-full md:w-3/4 md:max-w-[35%] px-2 md:px-0 text-white text-center md:text-start gap-1 md:gap-6 flex flex-col z-40">
          <h1 className=" font-bold lg:text-4xl text-base z-40">
            At InteractiveWorkers,
            <br className="md:hidden" /> we transform the <br /> concept of
            outsourcing.
          </h1>
          <p className="font-medium text-sm lg:text-xl md:w-3/4 z-40">
            We turn the intricate world of outsourcing into a simple,
            interactive, and value-driven process
          </p>
          <Link
            href={"https://calendly.com/interactiveworkersgm/30min"}
            target="_blank"
            className="mx-auto md:mx-0 p-2 md:py-4 z-40 md:px-6 rounded-3xl bg-iw-red-1 text-left font-bold text-xl md:text-2xl max-w-fit uppercase"
          >
            Book a Call
          </Link>
        </div>
        {/* <Image className='w-full md:max-w-[45%] mx-auto z-20 pt-6 md:hidden' src={'/home/iw-hero-mobile.png'} alt='IW intro' width={697} height={840} priority quality={100}></Image> */}
        <Image
          className="max-w-[75%] md:max-w-[45%] mx-auto z-20 pt-6 md:block"
          src={"/home/iw-hero.png"}
          alt="IW intro"
          width={697}
          height={840}
          priority
          quality={100}
        ></Image>
        <div className="w-1/2 h-full absolute mx-auto md:mx-0 left-0 right-0 bg-[#dd272d86] mix-blend-multiply bg-blend-multiply z-0"></div>
        <div className="absolute md:w-[12%] w-1/6 h-3/5 border-white border-2 rounded-full bottom-[20%] md:bottom-[15%] md:mx-0 left-1/4 md:left-auto md:right-[40%] z-10"></div>
        <div className="absolute w-2/5 md:w-1/3 h-[70%] border-white border-2 rounded-[250px] bottom-[20%] md:bottom-[15%] mx-auto md:mx-0 left-10 md:max-sm:left-0 md:left-auto right-0 md:right-[10%] z-10"></div>
      </article>

      <div className="absolute top-[15%] w-full bg-[#C21016] h-2/3 z-0 bg-blend-multiply mix-blend-multiply"></div>
    </section>
  );
};

export default IntroBanner;
