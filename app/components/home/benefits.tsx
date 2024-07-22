import { benefits } from '@/app/content/benefits'
import { Card } from 'flowbite-react'
import Image from 'next/image'
import React from 'react'

const BenefitsBanner = () => {
  return (
    <section className='bg-[#DE272C] text-white pt-16 pb-8 px-4 text-center'>
        <article>
            <h2 className='w-5/6 md:w-2/3 mx-auto uppercase font-bold text-lg'>Benefits of working with virtual assistants</h2>
            <h3 className='w-5/6 md:w-2/3 mx-auto text-base'>Our virtual assistants are your partners in success, delivering quality work, adaptability, and results at a pace that suits your business needs.</h3>
            <div className='flex flex-wrap text-black justify-center gap-2 md:gap-4 mt-8'>
            {
                benefits.map((benefit, i) => {
                    return(
                        <Card key={benefit.title} className={`md:basis-5/12 rounded-3xl ${i >= benefits.length - 2 ? 'lg:max-w-xl xl:max-w-2xl' : 'lg:max-w-xs xl:max-w-sm'}`}>
                            {/* <Image className='mx-auto md:w-auto w-2/6' src={`/home/${i}.png`} alt={benefit.title} width={120} height={120}></Image> */}
                            <h3 className='text-sm md:text-base'>{benefit.title}</h3>
                            <p className='text-xs md:text-sm'>{benefit.subtitle}</p>
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