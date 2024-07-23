import { benefits } from '@/app/content/benefits'
import { Card } from 'flowbite-react'
import Image from 'next/image'
import React from 'react'

const BenefitsBanner = () => {
  return (
    <section className='text-white pt-16 lg:pt-32 xl:pt-44 px-4 text-center z-10 w-full '>
        <article>
            <div className='w-3/4 mx-auto uppercase font-bold text-2xl lg:text-4xl text-black p-12 bg-white rounded-3xl inner-shadow'>
                <h2>Our virtual assistants are <br /></h2>
                <h2 className='mt-1.5 text-[#DD272D]'> your partners in success </h2>
                <p className=' text-base mt-2'>Delivering quality work, adaptability, and results at a pace that suits your business needs.</p>
            </div>
            <div className='w-10/12 mx-auto flex flex-wrap text-black justify-center mt-2 bg-white rounded-3xl p-8 px-4'>
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