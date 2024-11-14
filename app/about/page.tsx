import React from 'react'
import Image from 'next/image';
import NavbarComponent from './../components/navbar/index';
import FAQ from '../components/about/faq/faq';
import Values from '../components/about/values/values';
import MainForm from '../components/form/form';

const AboutUs = () => {
  return (
    <div>
      <NavbarComponent dark={false}></NavbarComponent>
      <section className='relative flex flex-col justify-between'>
        {/* <div className='absolute w-2/3 h-12 bg-[#DD272D] rounded-3xl right-0 -top-6 z-0'></div> */}

        <article className='overflow-hidden relative my-8'>
          <Image className='object-cover z-30 w-full ' src={'/about/banner.png'} alt='About interactive banner' width={1440} height={518} quality={100}></Image>
          <div className='absolute pl-1 md:pl-[5%] w-1/2 top-1/2'>
            <h1 className='relative text-white font-regular text-base md:text-xl lg:text-3xl z-40 bg-[#DD272D] w-3/4 pl-8 uppercase'>We are</h1>
            <h2 className='relative text-white font-black text-base md:text-2xl lg:text-4xl z-40 pl-8'>InteractiveWorkers</h2>
          </div>
        </article>

        <article className='text-center w-3/4 mx-auto my-24'>
          <h2 className='font-extrabold text-xl md:text-4xl my-2 text-[#DD272D]'>InteractiveWorkers</h2>
          <p className=' text-base md:text-lg w-full'>is a cutting-edge business solution that covers the whole outsourced sector, not simply one more outsourcing platform. We believe outsourcing should be simple, efficient, and advantageous for companies of all sizes. <span className='font-bold'>Our platform is made to streamline the outsourcing process, lessen its difficulties, and improve its results.</span> </p>
          <div className='h-4 w-1/6 bg-[#DD272D] mt-16 mx-auto rounded-3xl'></div>
        </article>

        <article className='w-full mb-10 md:mb-24'>
          <h3 className='font-extrabold text-xl md:text-4xl uppercase bg-[#DD272D] text-white w-3/4 md:w-1/2 rounded-r-full py-8 text-center'>Who we are</h3>
          <div className='bg-[#DD272D] w-full flex flex-col md:flex-row'>
            <div className='bg-[#282828] rounded-[60px] basis-[60%] px-4 md:px-16 -my-2 text-white text-xl max-h-[500px]'>
              <div className='py-8 px-4'>
                <h4 className='text-[#DD272D] font-extrabold'>InteractiveWorkers:</h4>
                <p className='font-normal'>Your dedicated virtual assistants for success</p>
              </div>
              <Image className='w-full' src={'/about/what-we-are.png'} alt='Interactive What we are image' width={717} height={404}></Image>
            </div>
            <div className='basis-[40%] text-white text-base md:text-lg font-medium flex items-center'>
              <p className='p-8'>              With four years of experience, we provide expert support to propel your business forward.
                <br /> <br />
                We manage projects for companies of all sizes, allowing you to focus on other priorities. Choose us for a team that goes the extra mile for your administrative needs.</p>
            </div>
          </div>
        </article>

        <article className='relative values-bg text-white my-8 justify-center items-center gap-3'>
          <h4 className='absolute ml-auto mr-auto left-0 right-0 top-[2%] md:top-[10%] text-2xl md:text-4xl font-extrabold p-4 text-center w-3/4 md:w-1/2 bg-[#c1272c70] rounded-3xl'>OUR <span className='font-normal'>CORE VALUES AS A</span> COMPANY</h4>
          <Values></Values>
        </article>

        <FAQ></FAQ>

        <MainForm dark={false}></MainForm>
      </section>
    </div>
  )
}

export default AboutUs