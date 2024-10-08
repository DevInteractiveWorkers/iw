import Image from 'next/image'
import React from 'react'
import NavbarComponent from '../components/navbar'
import DispatchAccordions from '../components/dispatch/accordions'

const Dispatch = () => {
  return (
    <div>
        <NavbarComponent></NavbarComponent>
        <div className='relative flex flex-col justify-center'>
            <div className='absolute left-[15%] z-40 text-white'>
                <h1 className='text-3xl md:text-6xl font-black ml-2 mb-4'>DISPATCH <br /> SOLUTIONS</h1>
                <h2 className='text-xl md:text-3xl font-normal py-1 px-2 bg-[#DD272D]'>24/7 surveillance for your business.</h2> 
                <h3 className='text-xl md:text-3xl font-normal w-fit py-1 px-2 my-1 bg-[#DD272D]'>Prevention is always key!</h3>
            </div>
            <Image className='z-0 w-full top-0' src={'/dispatch/banner.png'} alt='Interactive Dispatch Banner' width={1440} height={545} quality={100}></Image>
        </div>
        <div className='bg-[#181621] py-24'>
          <section className='flex flex-col gap-8 w-3/4 mx-auto'>
            <DispatchAccordions></DispatchAccordions>
          </section>
        </div>
    </div>
  )
}

export default Dispatch