import React from "react";
import {
  CustomFlowbiteTheme,
  Navbar,
  NavbarBrand,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import { navbar } from "@/app/content/navbar";
import ItemList from "./item-list";
import Image from "next/image";

const NavbarComponent = async ({ dark }: { dark?: boolean }) => {
  return (
    <nav className="w-full md:px-20 px-4">
      <div
        className={`border-b flex items-center justify-between max-md:flex-col py-4 gap-4`}
      >
        <Link href="/">
          <Image
            className="hover:scale-110 transition-transform h-[31px]"
            src={"/logo/01_Primary_Logo/Primary_Logo-04.png"}
            alt="Interactiveworkers Logo"
            width={200}
            height={31}
          />
        </Link>
        <div className="max-md:hidden">
          <ItemList dark={dark} items={navbar} hover={true} />
        </div>
        <div className="md:w-1/4 w-full flex gap-2 justify-center">
          <Link
            href={"/affiliate"}
            className="basis-full bg-white text-center text-black rounded py-1 items-center justify-center content-center"
          >
            Affiliate Program
          </Link>
          <Link
            href={"https://calendly.com/interactiveworkersgm/30min"}
            target="_blank"
            className="basis-full bg-white text-center text-black rounded py-1 items-center justify-center content-center"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
