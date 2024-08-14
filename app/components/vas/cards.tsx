import { VA } from '@/app/content/vas'
import { Card, CustomFlowbiteTheme } from 'flowbite-react'
import Image from 'next/image'
import React from 'react'


const customCardTheme: CustomFlowbiteTheme["card"] = {
    "root": {
      "base": "flex rounded-3xl border-4 border-[#D9D9D9] bg-white hover:bg-[#DD272D] hover:shadow-xl dark:border-gray-700 dark:bg-gray-800",
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

const VACard = ({className, va}:{className?:string, va:VA}) => {
  return (
    <Card theme={customCardTheme} className={`bg-none shadow-none mx-auto md:my-8 md:h-[520px] w-[250px] md:w-auto text-[#333333] hover:text-white ${className}`}>
        <Image className='relative -top-12 w-full h-[350px] md:h-[450px] border-b-4 border-[#D9D9D9] object-cover object-center mx-auto' src={`/vas/teams/${va.img}`} alt='' width={275} height={391} quality={100}></Image>
        <h3 className='p-4 pb-8 -mt-8 mx-auto text-center font-bold text-lg md:text-2xl '>{va.position}</h3>
    </Card>
  )
}

export default VACard