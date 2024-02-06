'use client'
import { CustomFlowbiteTheme, Navbar } from 'flowbite-react'
import React, { useState } from 'react'
import { navbarModel } from './../../content/navbar';
import Link from 'next/link';
import { cubicBezier, motion } from 'framer-motion';

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


const ItemList = ({ items, hover }: { items: navbarModel[], hover: boolean }) => {
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

  if (hover) {
    return (
      <Navbar.Collapse theme={customCollapseTheme["collapse"]}>
        <motion.div className={`h-1 absolute top-3 z-10 bg-red-800 hidden md:block`} animate={{ left: space, width: width }} transition={{ ease: cubicBezier(.66, -.05, 0, 1.1), type: "tween", duration: 0.75 }} />
        {
          items.map((navbarItem, i) => {
            return (
              <Navbar.Link key={navbarItem.link} className={` rounded-md px-2 transition-all  ease-in ${onHover === i + 1 ? 'bg-[#ffffff] text-black' : ''}`} onMouseOver={(e) => { handleHover(e, i + 1) }} onMouseLeave={() => { setOnHover(0) }} href={navbarItem.link}>
                {navbarItem.title}
              </Navbar.Link>
            )
          })
        }
      </Navbar.Collapse>
    )
  }
  return (
    <Navbar.Collapse>
      {
        items.map((navbarItem, i) => {
          return (
            <Navbar.Link key={navbarItem.link} as={Link} href={navbarItem.link}>{navbarItem.title}</Navbar.Link>
          )
        })
      }
    </Navbar.Collapse>
  )
}

export default ItemList