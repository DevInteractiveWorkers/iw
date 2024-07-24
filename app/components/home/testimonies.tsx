import React from 'react'
import Image  from 'next/image';

const Testimonies = () => {
  return (
    <section className='w-3/4 mb-48'>
        <article>
            <h2 className='text-center mx-auto text-4xl uppercase font-extrabold mb-16'>What they say about us</h2>
            <div className='relative flex'>
                
                <div className='basis-1/2'>
                    <Image className='relative min-w-[35%] z-0 mx-auto' src='/home/testimonies/testimony-1.png' alt='' width={432} height={350}></Image>
                    <div className='relative z-10 bg-[#D8D8D8] rounded-3xl -mt-[5%] max-w-[90%] mx-auto'>
                        <button className='absolute right-[37%] bottom-[90%] block max-w-fit mx-auto bg-white rounded-full pl-3 shadow-sm text-lg font-bold text-center'>Play Video <Image className='inline mx-1 my-1' src={'/home/testimonies/play.svg'} alt='Play Button' width={26} height={26}></Image> </button>
                        <div className='py-4'>
                            <h3 className='font-bold text-xl uppercase pt-3 px-6 mx-auto text-center'>Vin Virgullini</h3>
                            <p className='p-1 px-6 text-center'>Virtual assistants are a proven and firm process that could bring you many benefits</p>
                        </div>
                    </div>
                </div>

                <div className='basis-1/2'>
                    <Image className='relative min-w-[35%] z-0 mx-auto' src='/home/testimonies/testimony-1.png' alt='' width={432} height={350}></Image>
                    <div className='relative z-10 bg-[#D8D8D8] rounded-3xl -mt-[5%] max-w-[90%] mx-auto'>
                        <button className='absolute right-[37%] bottom-[90%] block max-w-fit mx-auto bg-white rounded-full pl-3 shadow-sm text-lg font-bold text-center'>Play Video <Image className='inline mx-1 my-1' src={'/home/testimonies/play.svg'} alt='Play Button' width={26} height={26}></Image> </button>
                        <div className='py-4'>
                            <h3 className='font-bold text-xl uppercase pt-3 px-6 mx-auto text-center'>Vin Virgullini</h3>
                            <p className='p-1 px-6 text-center'>Virtual assistants are a proven and firm process that could bring you many benefits</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </section>
  )
}

export default Testimonies