import Image from "next/image";
import React from "react";
import Socials from "./socials";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row gap-3 md:gap-0 justify-around items-center text-white text-sm w-full bg-iw-red-2 py-8 px-4">
      <Image
        className=""
        src={"/iw-Logo.png"}
        alt="Iw Logo"
        width={177}
        height={28}
      ></Image>
      <h5 className="text-center">
        © Copyright 2006 - 2024 Interactiveworkers. All Rights Reserved
      </h5>
      <Socials></Socials>
    </footer>
  );
};

export default Footer;
