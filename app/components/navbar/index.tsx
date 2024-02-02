'use client'
import React, { useRef, useState } from 'react'
import { cubicBezier, motion } from 'framer-motion';
import { CustomFlowbiteTheme, Navbar } from 'flowbite-react';
import Link from 'next/link';
import { navbar } from '../../content/navbar'
import ItemList from './item-list';

const customCollapseTheme: CustomFlowbiteTheme["navbar"] = {
  "collapse": {
    "base": "w-full md:block md:w-auto",
    "list": "mt-4 flex flex-col md:mt-0 md:mr-8 md:flex-row md:space-x-16 md:text-sm md:font-bold",
    "hidden": {
      "on": "hidden",
      "off": ""
    }
  }
}

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

const NavbarComponent = () => {
  const [onHover, setOnHover] = useState(0)
  const [width, setWidth] = useState(0)
  const [space, setSpace] = useState(0)

  const handleHover = (e: React.MouseEvent<HTMLAnchorElement>, hover: number) => {
    setWidth(e.currentTarget.clientWidth + 15)
    if (e.currentTarget.parentElement) {
      setSpace(e.currentTarget.getBoundingClientRect().left - 7)
    }
    setOnHover(hover)
  }
  return (
    <div className='fixed w-full'>
      <Navbar className='ml-auto w-1/2 text-end bg-transparent py-2 px-2 sm:pr-12' theme={customUpperCollapseTheme}>
        <ItemList items={navbar.slice(0,3)} hover={false}></ItemList>
      </Navbar>
      
      <Navbar className='relative uppercase bg-transparent' fluid rounded>
        <Navbar.Brand as={Link} href="https://flowbite-react.com">
          <img src="https://images2.imgbox.com/bd/6d/iKxkgI9e_o.png" className="h-12" alt="Flowbite React Logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse theme={customCollapseTheme["collapse"]}>
        <motion.div className={`h-1 absolute top-3 z-10 bg-red-800 hidden md:block`} animate={{ left: space, width: width }} transition={{ ease: cubicBezier(.66, -.05, 0, 1.1), type: "tween", duration: 0.75 }} />
          {
            navbar.slice(3).map((navbarItem, i) => {
              return (
                <Navbar.Link key={navbarItem.link} className={` rounded-md px-2 transition-all  ease-in ${onHover === i + 1 ? 'bg-[#ffffff] text-black' : ''}`} onMouseOver={(e) => { handleHover(e, i + 1) }} onMouseLeave={() => { setOnHover(0) }} href={navbarItem.link}>
                  {navbarItem.title}
                </Navbar.Link>
              )
            })
          }
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavbarComponent