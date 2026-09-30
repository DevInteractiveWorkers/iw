"use client";

import React from "react";
import Link from "next/link";
import { navbar } from "@/app/content/navbar";
import ItemList from "./item-list";
import Image from "next/image";
import { TransitionLink } from "../link";
import { usePageTransition } from "../PagetransitionContext";
import ThemeSwitch from "./theme-switch";

const NavbarComponent = () => {
  const { isTransitioning } = usePageTransition();

  return (
    <nav className="w-full sticky top-0 left-0 z-[500]">
      <div
        className="absolute top-0 left-0 w-full h-full backdrop-blur-md -z-10"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 3%, black 10%, black 90%, transparent 97%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 3%, black 10%, black 90%, transparent 97%)",
        }}
      />
      <div
        className={`border-b dark:border-white border-black flex items-center justify-between max-md:grid grid-cols-2 justify-items-stretch py-4 gap-4 z-10 mx-[clamp(1rem,8vw,50rem)]`}
      >
        <TransitionLink href="/">
          <Image
            className="hover:scale-95 transition-transform duration-150 h-[31px] object-contain dark:block hidden"
            src={"/logo/01_Primary_Logo/Primary_Logo-04.png"}
            alt="Interactiveworkers Logo"
            width={200}
            height={31}
          />
          <Image
            className="hover:scale-95 transition-transform duration-150 h-[31px] object-contain block dark:hidden"
            src={"/logo/01_Primary_Logo/Primary_Logo-06.png"}
            alt="Interactiveworkers Logo"
            width={200}
            height={31}
          />
        </TransitionLink>

        <ItemList
          items={navbar}
          hover={true}
          isTransitioning={isTransitioning}
        />

        <div className="md:w-1/4 w-full flex gap-2 justify-center col-span-2">
          <ThemeSwitch />
          <TransitionLink
            href={"/affiliate"}
            className="basis-full dark:bg-white bg-iw-red-1 text-center dark:text-black text-white active:text-iw-red-1 rounded py-1 items-center justify-center content-center hover:scale-95 transition-[transform,_color] duration-150"
          >
            Affiliate Program
          </TransitionLink>
          <Link
            href={"https://calendly.com/interactiveworkersgm/30min"}
            target="_blank"
            className="basis-full dark:bg-white bg-iw-red-1 text-center dark:text-black text-white active:text-iw-red-1 rounded py-1 items-center justify-center content-center hover:scale-95 transition-[transform,_color] duration-150"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
