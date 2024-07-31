import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const IntroBanner = () => {
  return (
    <section className='relative w-full bg-cover bg-no-repeat bg-[#C1272D]'>

        <Image className='absolute top-[20%] xl:top-[8%] z-10' src={'/home/space-elements-1.png'} alt='Space Elements IW' width={1109} height={1572} quality={100}></Image>        
        
        <article className='relative flex justify-around items-center'>
          <div className='max-w-[35%] text-white gap-2 md:gap-6 flex flex-col'>
            <h1 className=' font-bold lg:text-4xl text-sm z-40'>At InteractiveWorkers, <br />
              we transform the <br /> concept of outsourcing.
            </h1>
            <p className='font-medium text-sm md:text-xl md:w-3/4 z-40'>We turn the intricate world of outsourcing into a simple, interactive, and value-driven process</p>
            <Link href={'https://calendly.com/interactiveworkersgm/30min'} target='_blank' className=' p-2 md:py-4 z-40 md:px-6 rounded-3xl bg-[#DD272D] text-left font-bold text-sm md:text-2xl max-w-fit uppercase'>Book a Call</Link>
          </div>
          <div className='w-1/2 h-full absolute right-0 bg-[#dd272d86] mix-blend-multiply bg-blend-multiply'></div>
          <div className='absolute z-40 w-[12%] h-3/5 border-white border-2 rounded-full bottom-[15%] right-[40%]'></div>
          <div className='absolute z-40 w-1/3 h-[70%] border-white border-2 rounded-[250px] bottom-[15%] right-[10%]'></div>
          <Image className='max-w-[45%] z-40 pt-6' src={'/home/iw-hero.png'} alt='IW intro' width={697} height={840} priority quality={100}></Image>
        </article>
        
        <div className='absolute top-[15%] w-full bg-[#C21016] h-2/3 z-30 bg-blend-multiply mix-blend-multiply'></div>
    </section>
  )
}

export default IntroBanner