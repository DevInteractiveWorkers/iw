import React from 'react'
import NavbarComponent from '../components/navbar'
import AffiliateForm from '../components/form/affiliateForm'
import { ParticlesComponent } from '../components/particles'
import Image from 'next/image'
import AffiliatesFAQ from '../components/affiliates/faq'

const AffiliatePage = () => {
  return (
    <div className="relative overflow-x-hidden">
      <NavbarComponent dark={true}></NavbarComponent>
      <section className="">
        <article className=' text-white relative z-30 bg-[#800203] py-12 px-2 md:pt-28 md:pb-20 overflow-hidden'>
          <ParticlesComponent id='particles1'></ParticlesComponent>
          <h1 className='w-full text-center uppercase text-xl md:text-5xl'>Join the <strong className='font-extrabold'>InteractiveWorkers</strong> <br />
            Affiliate Program!</h1>
        </article>
      </section>

      <section>

        <article className='w-3/4 mx-auto py-8 bg-white relative '>
          <Image className="absolute -top-12 z-20 left-0 right-0 mx-auto" src={'/home/discover-vas/world.png'} alt='globe' width={980} height={980}></Image>
          <p className='mx-auto text-base md:text-2xl font-normal text-justify'>At InteractiveWorkers, we connect startups and small businesses with top-tier remote talent. Now, with the launch of our Affiliate Program, you have the opportunity to partner with us and boost your earnings while helping companies grow with our trusted virtual staffing solutions.</p>

          <div className='text-black flex flex-row justify-center items-center gap-3 mt-12 mb-4 md:mt-20 md:mb-8 relative'>
            <div className='absolute md:relative md:right-auto -right-[45%] sm:-right-1/3 h-4 w-32 rounded-3xl bg-red-700'></div>
            <h2 className='text-2xl md:text-5xl font-black uppercase text-[#333333] text-center w-full px-2'>Why partner with us?</h2>
            <div className='absolute md:relative md:left-auto -left-[45%] sm:-left-1/3 h-4 w-32 rounded-3xl bg-red-700'></div>
          </div>

          <div className='bg-[#181621] relative text-white rounded-3xl'>
            <ParticlesComponent id="particles2"></ParticlesComponent>
            <div className='relative z-30 w-5/6 mx-auto  pt-8 md:pt-20 pb-6 md:pb-16'>
              <h3 className=' capitalize  font-bold leading-8 text-xl md:text-3xl'>Increase your earnings:</h3>
              <p className="mt-1 leading-8 font-normal text-lg md:text-2xl md:w-5/6">Our generous commission structure means you&apos;ll earn 20% on the first sale and 10% monthly on ongoing services.</p>
            </div>
            <svg className="absolute right-0 bottom-0 z-20 rounded-e-3xl rounded-s-3xl md:rounded-s-none w-full md:w-fit" xmlns="http://www.w3.org/2000/svg" width="449" height="222" viewBox="0 0 449 222" fill="none">
              <path className="bg-blend-screen mix-blend-screen" d="M307 524C476.551 524 614 406.699 614 262C614 117.301 476.551 0 307 0C137.448 0 -0.00012207 117.301 -0.00012207 262C-0.00012207 406.699 137.448 524 307 524Z" fill="url(#paint0_radial_67_224)" fillOpacity="0.5" />
              <defs>
                <radialGradient id="paint0_radial_67_224" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(304.528 262.952) scale(305.696 259.748)">
                  <stop offset="0.05" stopColor="#FF0000" stopOpacity="0.8" />
                  <stop offset="0.37" stopColor="#FC0000" stopOpacity="0.79" />
                  <stop offset="0.51" stopColor="#F40103" stopOpacity="0.76" />
                  <stop offset="0.61" stopColor="#E60207" stopOpacity="0.71" />
                  <stop offset="0.69" stopColor="#D2040D" stopOpacity="0.65" />
                  <stop offset="0.77" stopColor="#B80715" stopOpacity="0.55" />
                  <stop offset="0.84" stopColor="#980A1E" stopOpacity="0.44" />
                  <stop offset="0.9" stopColor="#720E2A" stopOpacity="0.31" />
                  <stop offset="0.95" stopColor="#471337" stopOpacity="0.16" />
                  <stop offset="1" stopColor="#191845" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </article>

        <article className='w-3/4 mx-auto grid grid-cols-none sm:grid-cols-3 grid-rows-3 sm:grid-rows-none gap-3'>
          <div className="border-2 border-black rounded-3xl p-2 md:p-6  flex justify-center items-center">
            <h4 className="text-[#DD272D] font-black text-3xl sm:text-xl xl:text-5xl 2xl:text-6xl uppercase text-justify">Highlight <br /> our <br /> unique <br /> benefits:</h4>
          </div>
          <div className="relative">
            <Image className="object-cover w-full" src={'/affiliate/pork.png'} alt={'Cost savings'} width={358} height={294} quality={100} />
            <span className='absolute text-2xl sm:text-xl md:text-2xl xl:text-4xl 2xl:text-5xl bottom-8 2xl:bottom-8 text-white font-bold right-0 left-0 mx-auto w-fit text-center'>Cost Savings</span>
          </div>
          <div className="relative">
            <Image className="object-cover w-full" src={'/affiliate/adaptable.png'} alt={'Cost savings'} width={358} height={294} quality={100} />
            <span className='absolute text-2xl sm:text-xl md:text-2xl xl:text-4xl 2xl:text-5xl bottom-8 2xl:bottom-8 text-white font-bold right-0 left-0 mx-auto w-fit text-center'>Quality Talent</span>
          </div>


        </article>
        <div className='w-5/6 md:w-3/4 mx-auto mt-12'>
          <h3 className='text-5xl font-black text-[#333] mb-4 text-center md:text-left'>What we offer?</h3>
          <div className='flex flex-col md:flex-row justify-between gap-3 text-center text-white'>

            <div className='relative w-full'> 

              <Image className='w-full' src={'/affiliate/group-0.png'} alt='Characteristics background' width={368} height={550}></Image>

              <div className='absolute h-full top-0 flex flex-col justify-evenly w-5/6 mx-auto left-0 right-0'>
                <Image className='w-2/5                              mx-auto' src={'/affiliate/icon-3.png'} alt='characteristics icon' width={99} height={99}></Image>
                <h4 className='font-black text-xl md:text-sm xl:text-3xl uppercase'>Comprehensive Marketing
                  Support</h4>
                <p className='sm:text-sm lg:text-base xl:text-2xl hidden sm:block'>Get instant access to marketing materials like email templates, social media posts, and case studies to promote the program effortlessly.</p>
              </div>

            </div>

            <div className='relative w-full'> 

              <Image className='w-full' src={'/affiliate/group-1.png'} alt='Characteristics background' width={368} height={550}></Image>

              <div className='absolute h-full top-0 flex flex-col justify-evenly w-5/6 mx-auto left-0 right-0'>
                <Image className='w-2/5                              mx-auto' src={'/affiliate/icon-2.png'} alt='characteristics icon' width={99} height={99}></Image>
                <h4 className='font-black text-xl md:text-sm xl:text-3xl uppercase'>Personalized
                Guidance</h4>
                <p className='sm:text-sm lg:text-base xl:text-2xl hidden sm:block'>Benefit from onboarding sessions, one-on-one meetings, and a comprehensive FAQ to ensure your success.</p>
              </div>

            </div>

            <div className='relative w-full'> 

              <Image className='w-full' src={'/affiliate/group-2.png'} alt='Characteristics background' width={368} height={550}></Image>

              <div className='absolute h-full top-0 flex flex-col justify-evenly w-5/6 mx-auto left-0 right-0'>
                <Image className='w-2/5                              mx-auto' src={'/affiliate/icon-1.png'} alt='characteristics icon' width={99} height={99}></Image>
                <h4 className='font-black text-xl md:text-sm xl:text-3xl uppercase'>Open 
                Communication</h4>
                <p className='sm:text-sm lg:text-base xl:text-2xl hidden sm:block'>We&apos;re always available to discuss lead quality, performance, and provide feedback, ensuring a smooth partnership.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-16'>

        <article className='relative hidden md:block'>
          <div className='absolute right-8 text-white top-1/2 -translate-y-1/2 z-40 w-2/5'>
            <h5 className="font-black text-xl md:text-3xl lg:text-4xl uppercase">Ready to Get Started?</h5>
            <p className="font-normal text-lg md:text-2xl lg:text-3xl">Enhance your earning potential while offering valuable services to businesses looking for remote talent.</p>
          </div>
          <Image className='w-full object-cover relative z-20' src={'/affiliate/last-section.png'} alt='Interactive Worker' width={1438} height={510} quality={100}></Image>
        </article>

        <article className='relative block md:hidden'>
          <div className='absolute top-12 sm:top-20 left-0 right-0 mx-auto text-center text-white z-40 w-4/6'>
            <h5 className="font-black text-xl sm:text-2xl uppercase">Ready to Get Started?</h5>
            <p className="font-normal text-base sm:text-xl">Enhance your earning potential while offering valuable services to businesses looking for remote talent.</p>
          </div>
          <Image className='w-full object-cover relative z-20' src={'/affiliate/last-section-mobile.png'} alt='Interactive Worker' width={430} height={620} quality={100}></Image>
        </article>
      </section>

      <AffiliateForm></AffiliateForm>
      <AffiliatesFAQ></AffiliatesFAQ>
    </div>
  )
}

export default AffiliatePage