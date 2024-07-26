import React from 'react'
import { Card, CustomFlowbiteTheme } from 'flowbite-react';
import Image from 'next/image';

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

const DiscoverVAs = () => {
  return (
    <section className='discover-vas-bg w-3/4 py-14 md:py-64'>
        <article>
            <div className='relative text-center'>
                <h2 className='relative z-40 p-2 px-12 text-[#DD272D] font-extrabold text-xl md:text-3xl border-2 border-[#DD272D] bg-white rounded-full max-w-fit mx-auto'>Discover Our VA&apos;s</h2>
                <div className='-mt-8 w-1/2 mx-auto h-14 bg-[#EFEFEF] rounded-full'></div>
            </div>
            <div className='w-full flex md:flex-row flex-col justify-between my-32'>
                <Card theme={customCardTheme} className='bg-none shadow-none w-3/4 mx-auto my-8 md:my-0 md:w-[24%] text-[#333333] hover:text-white'>
                    <Image className='-mt-[25%] w-full h-auto border-b-4 border-[#D9D9D9]' src="/home/discover-vas/vas/0.png" alt='' width={275} height={341} quality={100}></Image>
                    <h3 className='p-4 py-8 mx-auto text-center font-bold text-base md:text-2xl '>Architech Virtual Assistant</h3>
                </Card>
                <Card theme={customCardTheme} className='bg-none shadow-none w-3/4 mx-auto my-8 md:my-0 md:w-[24%] text-[#333333] hover:text-white'>
                    <Image className='-mt-[25%] w-full h-auto border-b-4 border-[#D9D9D9]' src="/home/discover-vas/vas/1.png" alt='' width={275} height={341} quality={100}></Image>
                    <h3 className='p-4 py-8 mx-auto text-center font-bold text-base md:text-2xl '>Video Editor Virtual Assistant</h3>
                </Card>
                <Card theme={customCardTheme} className='bg-none shadow-none w-3/4 mx-auto my-8 md:my-0 md:w-[24%] text-[#333333] hover:text-white'>
                    <Image className='-mt-[25%] w-full h-auto border-b-4 border-[#D9D9D9]' src="/home/discover-vas/vas/2.png" alt='' width={275} height={341} quality={100}></Image>
                    <h3 className='p-4 py-8 mx-auto text-center font-bold text-base md:text-2xl '>Call Center Agent Virtual Assistant</h3>
                </Card>
                <Card theme={customCardTheme} className='bg-none shadow-none w-3/4 mx-auto my-8 md:my-0 md:w-[24%] text-[#333333] hover:text-white'>
                    <Image className='-mt-[25%] w-full h-auto border-b-4 border-[#D9D9D9]' src="/home/discover-vas/vas/3.png" alt='' width={275} height={341} quality={100}></Image>
                    <h3 className='p-4 py-8 mx-auto text-center font-bold text-base md:text-2xl '> Appointment Setter</h3>
                </Card>
            </div>
            {/* <button className='block max-w-fit mx-auto uppercase bg-[#DD272D] p-4 text-white rounded-3xl'>See More</button> */}
        </article>
    </section>
  )
}

export default DiscoverVAs