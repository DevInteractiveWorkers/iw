import React from "react";
import Link from "next/link";
import { navbar } from "@/app/content/navbar";
import ItemList from "./item-list";
import Image from "next/image";

const NavbarComponent = () => {
  return (
    <nav className="w-full">
      <div
        className={`border-b flex items-center justify-between max-md:grid grid-cols-2 justify-items-stretch py-4 gap-4`}
      >
        <Link href="/">
          <Image
            className="hover:scale-95 transition-transform duration-150 h-[31px] object-contain"
            src={"/logo/01_Primary_Logo/Primary_Logo-04.png"}
            alt="Interactiveworkers Logo"
            width={200}
            height={31}
          />
        </Link>
        <ItemList items={navbar} hover={true} />
        <div className="md:w-1/4 w-full flex gap-2 justify-center col-span-2">
          <Link
            href={"/affiliate"}
            className="basis-full bg-white text-center text-black active:text-iw-red-1 rounded py-1 items-center justify-center content-center hover:scale-95 transition-[transform,_color] duration-150"
          >
            Affiliate Program
          </Link>
          <Link
            href={"https://calendly.com/interactiveworkersgm/30min"}
            target="_blank"
            className="basis-full bg-white text-center text-black active:text-iw-red-1 rounded py-1 items-center justify-center content-center hover:scale-95 transition-[transform,_color] duration-150"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
