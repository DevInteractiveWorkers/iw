import Image from 'next/image'
import React from 'react'

const IntroBanner = () => {
  return (
    <section className='relative w-full bg-cover bg-no-repeat bg-[#C1272D]'>
        {/* <Image className='absolute top-[20%] w-full' src={'/home/space-elements.png'} alt='Space Elements IW' width={1440} height={1553} quality={100}></Image> */}
        
        <article className='relative z-40 flex justify-around items-center'>
          <div className='max-w-[35%] text-white gap-6 flex flex-col'>
            <h1 className=' font-bold lg:text-4xl text-2xl'>At InteractiveWorkers, <br />
              we transform the <br /> concept of outsourcing.
            </h1>
            <p className='font-medium text-xl'>We turn the intricate world of outsourcing into a simple, interactive, and value-driven process</p>
            <button className=' py-4 px-6 rounded-3xl bg-[#DD272D] text-left font-bold text-2xl max-w-fit uppercase'>Book a Call</button>
          </div>
          <div className='w-1/2 h-full absolute right-0 bg-[#dd272d86] mix-blend-multiply bg-blend-multiply z-0'></div>
          <Image className='max-w-[45%] z-20 pt-6' src={'/home/iw-hero.png'} alt='IW intro' width={697} height={840} priority quality={100}></Image>
          <div className='absolute z-0 w-1/3 h-[70%] border-white border-2 rounded-[250px] bottom-[15%] right-[10%]'></div>
          <div className='absolute w-[12%] h-3/5 border-white border-2 rounded-full bottom-[15%] right-[40%]'></div>
        </article>
        <div className='absolute top-[30%] w-full bg-[#C21016] h-1/2 z-30 bg-blend-multiply mix-blend-multiply'></div>
    </section>
  )
}

export default IntroBanner