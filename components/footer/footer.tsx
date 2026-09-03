import Image from "next/image";
import React from "react";
import Socials from "./socials";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white text-sm w-full bg-iw-red-2 py-8 lg:px-20 sm:px-10 px-4 md:rounded-t-xl rounded-t-md">
      <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center pb-10 border-b border-b-white">
        <Link href="/">
          <Image
            className="hover:scale-95 transition-transform duration-150 h-[31px] object-contain"
            src={"/logo/01_Primary_Logo/Primary_Logo-04.png"}
            alt="Interactiveworkers Logo"
            width={200}
            height={31}
          />
        </Link>
        <h5 className="text-center">
          © Copyright 2006 - 2024 Interactiveworkers. All Rights Reserved
        </h5>
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
