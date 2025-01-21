import { Card, CustomFlowbiteTheme } from 'flowbite-react'
import Image from 'next/image'
import React from 'react'

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
  className?:string
}

const VACard = ({customTheme = customCardTheme, children, imageSrc, className}:VACardProps) => {
  return (
    <Card theme={customTheme} className={`bg-none shadow-none mx-auto my-8 md:my-0 md:w-full text-[#333333] hover:text-white hover:shadow-[15px_15px_0_0_rgb(217,217,217,1)] ${className}`}>
      <Image className='-mt-[25%] w-full h-auto border-b-2 border-[#D9D9D9]' src={imageSrc} alt='' width={275} height={341} quality={100}></Image>
      <h3 className='p-4 py-8 mx-auto text-center font-bold text-base md:text-2xl '>{children}</h3>
    </Card>
  )
}

export default VACard