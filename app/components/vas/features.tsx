import Image from 'next/image'
import React from 'react'

const Features = () => {
    return (
        <div className='py-32'>
            <div className='max-w-fit mx-auto mb-12'>
                <h2 className='uppercase text-4xl font-black text-[#DD272D] my-3'>Features</h2>
                <div className='w-2/3 mx-auto bg-[#DD272D] h-3 rounded-[66px]'></div>
            </div>
            <div className='w-3/4 mx-auto flex flex-col md:flex-row items-center justify-center gap-2'>
                <div>
                    <Image src={'/vas/Bilingual.png'} alt='Bilingual Vas' width={464} height={552}></Image>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2'>
                        <div>
                            <Image src={'/vas/adaptable.png'} alt="Adaptable Va's" width={357} height={294}></Image>
                        </div>
                        <div>
                            <Image src={'/vas/247.png'} alt="Available Va's" width={357} height={294}></Image>
                        </div>
                    </div>
                    <div>
                        <Image src={'/vas/professionals.png'} alt="Professional Va's" width={735} height={239}></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features