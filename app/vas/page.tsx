import React from 'react'
import NavbarComponent from '../components/navbar'
import Image from 'next/image'

const VAs = () => {
  return (
    <div>
      <NavbarComponent dark={true}></NavbarComponent>
      <section>
        <article className='banner-va flex items-center justify-center pb-4'>
          <div className='text-white basis-1/3'>
            <h1 className='text-6xl font-black mb-1'>Our VA's</h1>
            <strong className='block pr-24 p-2 bg-[#440000] bg-blend-multiply font-normal text-4xl'>available for you</strong>
          </div>
          <Image className=' basis-2/5' src={'/vas/banner-heroes.png'} alt="VA's Interactive Banner" width={743} height={485}></Image>
        </article>
        <Image className='ml-auto -my-[34px]' src={'/vas/banner-element.png'} alt='Va decorative element' width={284} height={68}></Image>
        <article className='w-3/4 bg-[#DD272D] mx-auto text-xl font-normal text-white flex flex-col items-center justify-center gap-4 py-12 px-20 rounded-b-[66px]'>
          <p>
            <strong className='font-extrabold'>Our Virtual assistants are a versatile solution for any business.</strong> They handle a wide range of tasks, freeing you to focus on core activities. Imagine having a dedicated assistant who consistently delivers the best service, allowing you to come back to truly impactful work.
          </p>
          <p>
            Beyond the obvious benefits, virtual assistants can address hidden needs. <strong className='font-extrabold'>Our comprehensive services go beyond what you might initially consider, offering the best value and most helpful virtual assistants available.</strong>  Let us show you how we can empower your business.
          </p>
        </article>
      </section>
    </div>
  )
}

export default VAs