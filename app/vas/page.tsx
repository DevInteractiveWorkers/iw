import React from 'react'
import NavbarComponent from '../components/navbar'
import Image from 'next/image'
import Features from './../components/vas/features';
import MainForm from '../components/form/form';
import Teams from '../components/vas/teams';

const VAs = () => {
  return (
    <div>
      <NavbarComponent dark={true}></NavbarComponent>
      <section>
        <article className='banner-va flex flex-col md:flex-row items-center justify-center py-8 md:pb-4 max-w-full overflow-hidden'>
          <div className='text-white basis-1/3 py-4 md:py-0'>
            <h1 className='text-5xl md:text-6xl font-black mb-1'>Our VA&apos;s</h1>
            <strong className='block pr-24 p-2 bg-[#440000] bg-blend-multiply font-normal text-3xl md:text-4xl'>available for you</strong>
          </div>
          <Image className='w-full md:basis-2/5 md:max-w-[45%]' src={'/vas/banner-heroes.png'} alt="VA's Interactive Banner" width={743} height={485}></Image>
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
        <Features></Features>
        <Teams></Teams>
      </section>
      <MainForm dark={true}></MainForm>
    </div>
  )
}

export default VAs