import Image from 'next/image'
import React from 'react'
import NavbarComponent from '../components/navbar'
import DispatchAccordions from '../components/dispatch/accordions'
import MainForm from '../components/form/form'
import { ParticlesComponent } from '../components/particles'

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
            <Image className='z-0 md:w-full max-sm:h-[30vh] top-0' src={'/dispatch/banner.png'} alt='Interactive Dispatch Banner' width={1440} height={545} quality={100}></Image>
        </div>
        <div className='bg-[#181621] py-16 md:py-24 relative'>
        <ParticlesComponent id="dispatch-particle" className="opacity-15"></ParticlesComponent>
          <section className='flex flex-col gap-8 w-5/6 mx-auto'>
            <DispatchAccordions></DispatchAccordions>
          </section>
        </div>
        <MainForm dark={false}></MainForm>
    </div>
  )
}

export default Dispatch