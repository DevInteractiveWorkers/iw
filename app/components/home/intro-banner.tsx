import Image from 'next/image'
import React from 'react'

const IntroBanner = () => {
  return (
    <section className='relative w-full bg-cover bg-no-repeat mt-6'>
        <article className='relative z-40 flex justify-around items-center'>
          <h1 className='text-white lg:text-4xl text-2xl max-w-[35%]'>At InteractiveWorkers, <br />
            we transform the <br /> concept of outsourcing.
          </h1>
          <Image className='max-w-[45%] z-20' src={'/home/iw-hero.png'} alt='IW intro' width={697} height={840} priority quality={100}></Image>
          <div className='absolute z-0 w-1/3 h-4/5 border-white border-2 rounded-full bottom-[12%] right-[12%]'></div>
          <div className='absolute w-[12%] h-3/5 border-white border-2 rounded-full bottom-[12%] right-[40%]'></div>
        </article>
        <div className='absolute top-[15%] w-full bg-[#E53238] h-4/6 z-10 bg-blend-multiply mix-blend-multiply'></div>
    </section>
  )
}

export default IntroBanner