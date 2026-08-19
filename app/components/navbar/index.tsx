import React from "react";
import {
  CustomFlowbiteTheme,
  Navbar,
  NavbarBrand,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import { navbar } from "../../content/navbar";
import ItemList from "./item-list";
import Image from "next/image";

const NavbarComponent = async ({
  dark,
  className,
}: {
  dark?: boolean;
  className?: string;
}) => {
  return (
    <div className={`w-full px-4 ${className}`}>
      <div className="z-40 w-11/12 py-4 mx-auto ">
        <Navbar className="relative bg-transparent md:mt-2">
          <div className="max-md:w-full flex justify-center max-md:mb-2">
            <NavbarBrand as={Link} href="/">
              <Image
                className=" hover:scale-110 transition-transform h-[31px]"
                src={`${
                  dark
                    ? "https://iw-website.s3.amazonaws.com/logo/iw-Logo.png"
                    : "/iw-LogoLight.png"
                }`}
                alt="Interactiveworkers Logo"
                width={200}
                height={31}
              />
            </NavbarBrand>
          </div>
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
          <div className="md:hidden w-full">
            <ItemList
              dark={dark}
              items={navbar.slice(3)}
              hover={true}
            ></ItemList>
          </div>
        </Navbar>
      </div>
      <div className="faded-div bg-blend-screen mix-blend-screen w-full h-[2px] hidden md:block"></div>
    </div>
  );
};

export default NavbarComponent;
