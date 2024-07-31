import { Card, CustomFlowbiteTheme } from 'flowbite-react'
import Image from 'next/image'
import React from 'react'


const customCardTheme: CustomFlowbiteTheme["card"] = {
    "root": {
      "base": "flex rounded-3xl border-4 border-[#D9D9D9] bg-white hover:bg-[#DD272D] hover:shadow-xl dark:border-gray-700 dark:bg-gray-800",
      "children": "flex h-full flex-col justify-center",
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

const VACard = ({img}:{img:string}) => {
  return (
    <Card theme={customCardTheme} className='bg-none shadow-none w-3/4 mx-auto my-8 md:my-0 md:w-[24%] text-[#333333] hover:text-white'>
        <Image className='-mt-[25%] w-full h-auto border-b-4 border-[#D9D9D9]' src={img} alt='' width={275} height={341} quality={100}></Image>
        <h3 className='p-4 py-8 mx-auto text-center font-bold text-base md:text-2xl '>Architech Virtual Assistant</h3>
    </Card>
  )
}

export default VACard