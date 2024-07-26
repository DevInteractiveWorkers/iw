import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col md:flex-row gap-3 md:gap-0 justify-around items-center text-white text-sm w-full bg-[#C1272D] py-8'>
        <Image className='' src={'/iw-Logo.png'} alt='Iw Logo' width={177} height={28}></Image>
        <span>© Copyright 2006 - 2024 Interactiveworkers. All Rights Reserved</span>
        <div className='flex gap-2'>
            <Image src={'/footer/ig.svg'} alt='social Interactive workers' width={23} height={23}></Image>
            <Image src={'/footer/fb.svg'} alt='social Interactive workers' width={23} height={23}></Image>
            <Image src={'/footer/x.svg'} alt='social Interactive workers' width={23} height={23}></Image>
            <Image src={'/footer/li.svg'} alt='social Interactive workers' width={23} height={23}></Image>
            <Image src={'/footer/wss.svg'} alt='social Interactive workers' width={23} height={23}></Image>
        </div>
    </footer>
  )
}

export default Footer