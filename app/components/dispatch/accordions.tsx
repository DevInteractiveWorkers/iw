"use client"
import React, { useState } from 'react'
import Image from 'next/image';

const DispatchAccordions = () => {
  const [opened, setOpened] = useState<number>(-1)

  return (
    <>
      <article className={`grid grid-cols-12 gap-3 transition-all duration-1000 ${opened === 0 ? "max-h-[550px]" : "max-h-80"}`}>
        <div className={`bg-red-600 col-span-3 rounded-3xl transition-all duration-1000 ${opened === 0 ? " max-h-full " : "max-h-80"}`}>
          <Image className={` object-cover mx-auto transition-all duration-1000 object-top h-full`} src={'/dispatch/0.png'} alt='Dispatch Interactive Worker' width={277} height={353} quality={100}></Image>

        </div>
        <div className={` col-span-9 transition-all overflow-hidden w-full ${opened === 0 ? " h-full " : "h-80"}`}>
          <div className={`md:px-12 pt-16 pb-6 bg-white  rounded-3xl `}>
            <h2 className='text-[#C1272D] font-black text-4xl uppercase'>
              Security Industry
            </h2>
            <p className={`mt-4 font-normal text-xl text-ellipsis ${opened === 0 ? " line-clamp-none" : " line-clamp-5"}`}>
              Security Guards need support from a team that monitors and checks that every part of the work is being conducted properly. <br /> <br />
              <span className='font-extrabold'>Your location will always be covered and never be left alone.</span> We&apos;ll check that<br /> <br />
              The weight good logistics can have on your business should not be underestimated. <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro reiciendis consectetur amet, animi maxime dolor? Ratione eius veritatis quasi autem inventore velit adipisci voluptates laborum dolorem sequi? Adipisci, nemo recusandae?
            </p>
            <Image onClick={(e) => { opened === 0 ? setOpened(-1) : setOpened(0) }} className={`ml-auto transition-all duration-1000 ${opened === 0 ? " rotate-180" : ""}`} src={'/dispatch/red-arrow.png'} alt='Interactive see more arrow' width={31} height={31} quality={100}></Image>
          </div>
        </div>
      </article>

      <article className={`text-white relative w-full transition-all duration-1000 ease-in-out overflow-hidden rounded-3xl ${opened === 1 ? "h-[550px]" : "h-[350px]"}`}>
        <Image className={`absolute z-0 transition-all duration-1000 ${opened === 1 ? "top-0" : "-top-1/4"} object-cover w-full`} src={'/dispatch/1.png'} alt='Interactive security hero' width={1251} height={649}></Image>
        <div className={`relative z-40 md:px-16 pt-16 pb-6 rounded-3xl w-7/12`}>
          <h2 className=' font-black text-4xl uppercase'>
            Security Industry
          </h2>
          <p className={`mt-4 font-normal text-xl text-ellipsis ${opened === 1 ? " line-clamp-none" : " line-clamp-6"}`}>
            Security Guards need support from a team that monitors and checks that every part of the work is being conducted properly. <br /> <br />
            <span className='font-extrabold'>Your location will always be covered and never be left alone.</span> We&apos;ll check that<br /> <br />
            The weight good logistics can have on your business should not be underestimated. <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro reiciendis consectetur amet, animi maxime dolor? Ratione eius veritatis quasi autem inventore velit adipisci voluptates laborum dolorem sequi? Adipisci, nemo recusandae?
          </p>
        </div>
        <Image onClick={(e) => { opened === 1 ? setOpened(-1) : setOpened(1) }} className={`absolute bottom-4 right-10 z-40 transition-all duration-1000 ${opened === 1 ? " rotate-180" : ""}`} src={'/dispatch/red-arrow.png'} alt='Interactive see more arrow' width={31} height={31} quality={100}></Image>
      </article>
    </>
  )
}

export default DispatchAccordions