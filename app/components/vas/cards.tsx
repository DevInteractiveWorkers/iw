'use client'
import { Card, CustomFlowbiteTheme } from 'flowbite-react'
import Image from 'next/image'
import React, { useState } from 'react'

const customCardTheme: CustomFlowbiteTheme["card"] = {
  "root": {
    "base": "flex rounded-3xl border-2 border-[#D9D9D9] bg-white hover:bg-[#DD272D] hover:shadow-xl dark:border-gray-700 dark:bg-gray-800",
    "children": "flex flex-col justify-center",
    "horizontal": {
      "off": "flex-col",
      "on": "flex-col md:max-w-xl md:flex-row"
    },
    "href": "hover:bg-gray-100 dark:hover:bg-gray-700"
  },
  "img": {
    "base": "",
    "horizontal": {
      "off": "rounded-t-lg",
      "on": "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
    }
  }
}

interface VACardProps{
  customTheme?:CustomFlowbiteTheme["card"];
  children?: React.ReactNode;
  imageSrc:string;
  className?:string;
  getInTouch?:boolean
}

const VACard = ({customTheme = customCardTheme, children, imageSrc, className, getInTouch}:VACardProps) => {

  const [expanded, setExpanded] = useState(false)
  const [direction, setDirection] = useState('left')

  function expandCard(e:any, expand:boolean){
    if(getInTouch){
      window.screen.width/3 < e.pageX ? setDirection("left") : setDirection("right")
      console.log(window.screen.width/3,'< e ',e.pageX)
      setExpanded(expand)
    }
  }

  return (
    <Card theme={customTheme} className={`relative bg-none shadow-none mx-auto my-8 md:my-0 md:w-full text-[#333333] hover:text-white hover:shadow-[15px_15px_0_0_rgb(217,217,217,1)] ${className} transition-all ${expanded ? direction === "right" ? "md:rounded-tr-none":"md:rounded-tl-none":""}`} onMouseEnter={(e)=>expandCard(e, true)} onMouseLeave={(e)=>{expandCard(e, false)}}>
      <div className={expanded ? "z-20":""}>
        <Image className='-mt-[25%] w-full h-auto border-b-2 border-[#D9D9D9] z-10' src={imageSrc} alt='' width={275} height={341} quality={100}></Image>
        <h3 className='p-4 py-8 mx-auto text-center font-bold text-base md:text-2xl rounded-b-3xl'>{children} {expanded}</h3>
        {getInTouch?
        <div className={`${direction === "right"? 'rounded-r-3xl':'rounded-l-3xl'} md:border-2 border-[#D9D9D9] max-md:rounded-t-none max-md:rounded-b-3xl max-w-lg top-0 md:absolute transition-all md:duration-1000 -z-50 p-10 max-md:pt-0 text-white flex flex-col justify-between items-center ${expanded  ? `bg-[#DD272D] ${direction === "right"?"md:left-full shadow-[15px_15px_0_0_rgb(217,217,217,1)]":"md:right-full md:shadow-[0_15px_0_0_rgb(217,217,217,1)]"} max-md:top-full md:w-max w-full h-3/4`:"left-0 md:w-0 h-0 opacity-0"}`}>
          <p className={expanded ? "h-full":"h-0 truncate"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium id autem sint asperiores, dicta unde alias rerum quam maxime modi nam harum laboriosam reiciendis earum quae. Sed minus numquam officiis?
          </p>
            <button className={`active:text-[#DD272D] active:bg-white max-md:mt-5 ${expanded ? 'rounded-3xl border-white border-2 p-2 pl-4 pr-4' : 'hidden'}`}>
              <strong>GET IN TOUCH</strong>
            </button>
        </div>
        :null}
      </div>
    </Card>
  )
}

export default VACard