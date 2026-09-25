import Image from "next/image";
import React from "react";
import Socials from "./socials";
import Link from "next/link";
import { navbar } from "@/app/content/navbar";
import { TransitionLink } from "../link";
import ThemeSwitch from "../navbar/theme-switch";

const Footer = () => {
  return (
    <footer className="text-white text-sm w-full bg-iw-red-2 pt-8 lg:px-20 sm:px-10 px-4 md:rounded-t-xl rounded-t-md grid grid-cols-1 md:gap-2 gap-4 z-[1000] sticky">
      <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center pb-10 border-b border-b-white">
        <TransitionLink href="/">
          <Image
            className="hover:scale-95 transition-transform duration-150 h-[31px] object-contain"
            src={"/logo/01_Primary_Logo/Primary_Logo-04.png"}
            alt="Interactiveworkers Logo"
            width={200}
            height={31}
          />
        </TransitionLink>
        <h5 className="text-center">
          © Copyright 2006 - 2024 Interactiveworkers. All Rights Reserved
        </h5>
        <Socials />
      </div>
      <div className="md:flex grid grid-cols-[auto_auto] md:items-center items-end justify-between pb-2 group/footer">
        <ul className="flex md:flex-row flex-col md:gap-6 gap-2 items-center">
          {navbar.map((item, i) => (
            <li key={`item-${i}`}>
              <TransitionLink
                href={item.link}
                className="relative after:absolute after:left-1/2 after:top-full after:w-0 after:h-px after:bg-[currentColor]
                hover:after:left-0 hover:after:w-full after:transition-all after:duration-150 active:text-iw-red-3"
              >
                {item.title}
              </TransitionLink>
            </li>
          ))}
          <li>
            <ThemeSwitch />
          </li>
        </ul>
        <p className="text-right justify-end group-hover/footer:opacity-100 opacity-0 transition-all duration-500 ">
          developed by{" "}
          <span className="relative hover:text-[#008080] transition-colors duration-500 z-10 after:bg-white after:absolute after:top-0 hover:after:left-0 after:left-1/2 after:w-0 hover:after:w-full after:h-full after:-z-10 after:transition-all after:duration-500">
            @
            <Link
              href={"https://julscode.vercel.app"}
              className="hover:underline"
            >
              julscodes
            </Link>
          </span>
          <br />
          designed by{" "}
          <span className="relative hover:text-[#FF4200] transition-colors duration-500 z-10 after:bg-black after:absolute after:top-0 hover:after:left-0 after:left-1/2 after:w-0 hover:after:w-full after:h-full after:-z-10 after:transition-all after:duration-500">
            @
            <Link
              href={"https://www.behance.net/gabocarrion"}
              className="hover:underline"
            >
              gabocarrion
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
