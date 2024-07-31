import { benefits } from '@/app/content/benefits'
import { Card } from 'flowbite-react'
import Image from 'next/image'
import React from 'react'

const BenefitsBanner = () => {
  return (
    <section className='relative text-white py-12 lg:py-24 xl:py-28 text-center z-10 w-full max-w-full'>
            <Image className='w-1/3 absolute z-0 -top-0 -right-0' src={'/home/space-elements-2.png'} alt='Interactive Workers space element 2' width={1109} height={1572}></Image>
            <Image className='w-1/2 absolute z-0 -top-0 -right-0' src={'/home/space-elements-3.png'} alt='Interactive Workers space element 3' width={596} height={824}></Image>
            <Image className='w-1/3 absolute z-0 -bottom-1/3 left-0 xl:block hidden' src={'/home/space-elements-4.png'} alt='Interactive Workers space element 4' width={244} height={370}></Image>
        <article className='relative'>
            
            <div className='relative z-40 w-3/4 mx-auto uppercase font-bold text-2xl lg:text-4xl text-black p-12 bg-white rounded-3xl'>
                <h2>Our virtual assistants are <br /></h2>
                <h2 className='mt-1.5 text-[#DD272D]'> your partners in success </h2>
                <p className=' text-base mt-2'>Delivering quality work, adaptability, and results at a pace that suits your business needs.</p>
            </div>
            <div className='relative z-40 w-10/12 mx-auto flex flex-wrap text-black justify-center mt-2 bg-white rounded-3xl p-8 px-4'>
            {
                benefits.map((benefit, i) => {
                    return(
                        <Card key={benefit.title} className={` rounded-3xl shadow-none border-none`}>
                            <Image className='mx-auto' src={`/home/benefits/${i}.png`} alt={benefit.title} width={120} height={120}></Image>
                            <h3 className='text-sm md:text-base text-[#DD272D] font-black'>{benefit.title}</h3>
                        </Card>
                    )
                })
            }
            </div>
        </article>
    </section>
  )
}

export default BenefitsBanner