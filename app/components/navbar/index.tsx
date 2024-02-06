import React from 'react'
import { CustomFlowbiteTheme, Navbar, NavbarBrand, NavbarToggle } from 'flowbite-react';
import Link from 'next/link';
import { navbar } from '../../content/navbar'
import ItemList from './item-list';


const customUpperCollapseTheme: CustomFlowbiteTheme["navbar"] = {

  "collapse": {
    "base": "w-full md:block md:w-auto",
    "list": "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-bold",
    "hidden": {
      "on": "hidden",
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

const NavbarComponent = async () => {
  
  return (
    <div className='fixed w-full'>
      <Navbar className='ml-auto w-1/2 text-end bg-transparent py-2 px-2 sm:pr-12' theme={customUpperCollapseTheme}>
        <ItemList items={navbar.slice(0, 3)} hover={false}></ItemList>
      </Navbar>

      <Navbar className='relative bg-transparent' fluid rounded>
        <NavbarBrand as={Link} href="https://flowbite-react.com">
          <img src="https://images2.imgbox.com/bd/6d/iKxkgI9e_o.png" className="h-12" alt="Flowbite React Logo" />
        </NavbarBrand>
        <NavbarToggle />
        <ItemList items={navbar.slice(3)} hover={true}></ItemList>
      </Navbar>
    </div>
  )
}

export default NavbarComponent