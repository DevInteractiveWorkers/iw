import React from 'react'
import { CustomFlowbiteTheme, Navbar, NavbarBrand, NavbarToggle } from 'flowbite-react';
import Link from 'next/link';
import { navbar } from '../../content/navbar'
import ItemList from './item-list';
import Image from 'next/image';


const customUpperCollapseTheme: CustomFlowbiteTheme["navbar"] = {

  "collapse": {
    "base": "w-full md:block md:w-auto",
    "list": "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 text-xs",
    "hidden": {
      "on": "hidden",
      "off": ""
    }
  },
  "link": {
    "base": "block py-2 pr-4 pl-3 md:p-0",
    "active": {
      "on": "bg-cyan-700 md:bg-transparent md:text-red-700",
      "off": "border-b border-gray-100  hover:bg-gray-50  md:border-0 md:hover:bg-transparent md:hover:text-gray-500"
    },
    "disabled": {
      "on": "text-black hover:cursor-not-allowed",
      "off": ""
    }
  },
  "root": {
    "base": "dark:border-gray-700 dark:bg-gray-800 ",
    "inner": {
      "base": "mx-auto flex flex-wrap items-center justify-end"
    }
  }
}

const NavbarComponent = async ({dark}:{dark?:boolean}) => {
  
  return (
    <div className={`w-full ${dark ? 'text-white bg-[#C1272D]' : 'text-black bg-white'}`}>
      <div className=' z-40 w-11/12 py-4 mx-auto '>
      <Navbar className='ml-auto w-1/2 text-end bg-transparent py-1 px-2 sm:pr-12 md:pr-4' theme={customUpperCollapseTheme}>
        <ItemList dark={dark} items={navbar.slice(0, 3)} hover={false}></ItemList>
      </Navbar>

      <Navbar className='relative bg-transparent mt-2' fluid rounded>
        <NavbarBrand as={Link} href="/">
          <Image className=" hover:scale-110 transition-transform" src={`${dark ? 'https://iw-website.s3.amazonaws.com/logo/iw-Logo.png' : '/iw-LogoLight.png'}`} alt="Interactiveworkers Logo" width={200} height={31}></Image>
        </NavbarBrand>
        <span className='md:hidden inline'><ItemList dark={dark} items={navbar.slice(0, 3)} hover={false}></ItemList></span>
        <NavbarToggle />
        <ItemList dark={dark} items={navbar.slice(3)} hover={true}></ItemList>
        <Link href={"https://calendly.com/interactiveworkersgm/30min"} target='_blank' className='w-[30%] max-w-[350px] bg-[#DD272D] text-center text-white rounded-xl p-1 font-semibold hidden lg:block'>Book a Call</Link>
      </Navbar>
      </div>
      <div className='faded-div w-full h-[2px]'></div>
    </div>
  )
}

export default NavbarComponent