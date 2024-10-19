'use client'
import React, { useState } from 'react'
import { faq } from '@/app/content/affiliates-faq'
import Image from 'next/image'

const AffiliatesFAQ = () => {
    const [opened, setOpened] = useState(-1)
    return (
        <article className='w-3/4 mx-auto my-20 md:my-28'>
            <span className='block xl:w-3/4 text-xl md:text-4xl font-extrabold mx-auto text-center text-[#DD272D] p-2 border-4 border-[#DD272D] rounded-full my-6 capitalize'>Frequently asked questions</span>
            <div className='text-black flex flex-wrap gap-4 justify-between xl:w-3/4 mx-auto'>
                {faq.map((item, i) => {
                    return (
                        <div key={i} className={`p-4 pl-0 rounded-xl h-fit w-full border-b-2 border-[#333333]`} onClick={() => { opened === i ? setOpened(-1) : setOpened(i) }}>
                            <div className='flex items-center w-full justify-between'>
                            <h4 className={` text-lg font-semibold p-2 md:px-8 -ml-0.5 flex justify-between items-center  ${opened === i ? "rounded-tr-xl" : "rounded-r-xl"}`}> <span>{item.question}</span></h4>
                            <svg className={`h-4 w-4 basis-2/12 ${opened === i ? "opacity-0 absolute" : "opacity-100 transition-opacity"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#000000" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                            <svg className={`h-4 w-4 basis-2/12 ${opened === i ? "opacity-100 transition-opacity" : "opacity-0 absolute"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#000000" d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                            </div>
                            <p className={`w-3/4 ml-12 font-normal text-base  rounded-b-xl overflow-hidden transition-all ease-out ${opened === i ? " h-full" : "h-0 p-0"}`}> <span className={` transition-all delay-1000`}>{item.answer}</span></p>
                        </div>
                    )
                })}
            </div>
        </article>
    )
}

export default AffiliatesFAQ