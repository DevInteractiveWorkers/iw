'use client'
import { CustomFlowbiteTheme, Navbar } from 'flowbite-react'
import React, { useState } from 'react'
import { navbarModel } from './../../content/navbar';
import Link from 'next/link';
import { cubicBezier, motion } from 'framer-motion';

const customCollapseTheme: CustomFlowbiteTheme["navbar"] = {
  "collapse": {
    "base": "w-full md:block md:w-auto relative",
    "list": "mt-4 flex flex-col md:mt-0 md:mr-8 md:flex-row md:space-x-8 text-base",
    "hidden": {
      "on": "hidden",
      "off": ""
    }
  },
  "link": {
    "base": "block py-2 pr-4 pl-3 md:p-0 text-base",
    "active": {
      "on": "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-red-700",
      "off": "border-b border-gray-100  hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-gray-500 md:dark:hover:bg-transparent md:dark:hover:text-white"
    },
    "disabled": {
      "on": "text-black hover:cursor-not-allowed dark:text-white",
      "off": ""
    }
  },
}

const ItemList = ({ items, hover, dark }: { items: navbarModel[], hover: boolean, dark?:boolean }) => {
  const [onHover, setOnHover] = useState(0)
  const [width, setWidth] = useState(0)
  const [space, setSpace] = useState(0)


  const handleHover = (e: React.MouseEvent<HTMLAnchorElement>, hover: number) => {
    setWidth(e.currentTarget.clientWidth)
    if (e.currentTarget.parentElement?.parentElement?.parentElement?.parentElement) {
      
      setSpace(e.currentTarget.getBoundingClientRect().left - e.currentTarget.parentElement.parentElement?.parentElement?.getBoundingClientRect().left)
    }
    setOnHover(hover)
  }

  if (hover) {
    return (
      <Navbar.Collapse className='' theme={customCollapseTheme["collapse"]}>
        <motion.div className={`h-1 absolute -top-2 z-10 bg-[#e53238] hidden md:block`} animate={{ left: space, width: width }} transition={{ ease: cubicBezier(.66, -.05, 0, 1.1), type: "tween", duration: 0.75 }} />
        {
          items.map((navbarItem, i) => {
            return (
              <Navbar.Link theme={customCollapseTheme["link"]} key={navbarItem.link} className={` rounded-md px-2 transition-all font-medium  ease-in ${onHover === i + 1 ? 'bg-[#ffffff] text-black' : ''}`} onMouseOver={(e) => { handleHover(e, i + 1) }} onMouseLeave={() => { setOnHover(0) }} href={navbarItem.link}>
                {navbarItem.title}
              </Navbar.Link>
            )
          })
        }
      </Navbar.Collapse>
    )
  }
  return (
    <Navbar.Collapse className={`relative pb-2 mr-[5%] uppercase font-medium ${dark ? '' : 'text-[#DD272D]'}`}>
      {
        items.map((navbarItem, i) => {
          return (
            <Navbar.Link className='text-sm' key={navbarItem.link} as={Link} href={navbarItem.link}>{navbarItem.title}</Navbar.Link>
          )
        })
      }
      <div className='faded-minidiv hidden lg:block absolute w-[150%] h-[2px] bottom-0 -left-[40%]'></div>
    </Navbar.Collapse>
  )
}

export default ItemList