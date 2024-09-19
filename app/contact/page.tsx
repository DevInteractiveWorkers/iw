import React from 'react'
import NavbarComponent from '../components/navbar'
import MainForm from '../components/form/form'
import Image from 'next/image';
import Socials from '../components/footer/socials';
import GetHired from '../components/form/get-hired';

const ContactUs = () => {
  return (
    <div className='bg-[#800202] pb-8 md:pb-24'>
        <NavbarComponent></NavbarComponent>
        <section className=''>
          <h1 className='text-4xl uppercase text-white font-extrabold my-12 mx-auto w-fit md:ml-24'>Contact Us</h1>
          <article className='flex flex-col md:flex-row w-11/12 bg-white rounded-r-[66px]'>
            <MainForm dark={2}></MainForm>
            <div className='basis-2/6 flex flex-col justify-center text-center items-center text-lg pb-8 md:pb-0'>
                <Image className='-mb-12' src={'/contact/interactive-worker.png'} alt='Interactive worker' width={302} height={387}></Image>
                <h2 className='font-black text-4xl text-[#820707] uppercase'>Info</h2>
                <div className="mt-4 text-xl font-medium"> <Image className='inline mr-1' src={'/contact/phone.svg'} alt='Interactive Email' width={17} height={15}></Image> <span>+1 332-206-2891</span></div>
                <div className='text-xl font-medium'> <Image className='inline mr-1' src={'/contact/email.svg'} alt='Interactive Email' width={18} height={15}></Image> <span>info@interactiveworkers.com</span></div>
                <h3 className='font-bold mt-4 text-[#333333]'>@interactiveworkers</h3>
                <Socials className='mt-8 justify-center md:justify-start'></Socials>
            </div>
          </article>
          <article className='w-full md:w-3/4 mx-auto mt-8 bg-white rounded-[66px]'>
            <GetHired></GetHired>
          </article>
        </section>
    </div>
  )
}

export default ContactUs