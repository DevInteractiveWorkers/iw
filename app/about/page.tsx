import React from 'react'
import Image from 'next/image';
import NavbarComponent from './../components/navbar/index';

const AboutUs = () => {
  return (
    <div>
        <NavbarComponent dark={false}></NavbarComponent>
        <section>
            <Image className='w-full' src={'/about/banner.png'} alt='About interactive banner' width={1440} height={518} quality={100}></Image>
        </section>
    </div>
  )
}

export default AboutUs