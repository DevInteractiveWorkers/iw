import Image from "next/image";
import React from "react";
import Socials from "./socials";

const Footer = () => {
  return (
    <footer className="text-white text-sm w-full bg-iw-red-2 py-8 lg:px-20 sm:px-10 px-4 md:rounded-t-xl rounded-t-md">
      <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center pb-10 border-b border-b-white">
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
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
