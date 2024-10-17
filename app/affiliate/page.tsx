import React from 'react'
import NavbarComponent from '../components/navbar'
import AffiliateForm from '../components/form/affiliateForm'
import { ParticlesComponent } from '../components/particles'

const AffiliatePage = () => {
  return (
    <div className="relative">
        <NavbarComponent dark={true}></NavbarComponent>
        <section className="">
          <article className=' text-white relative bg-[#800203] py-12 px-2 md:pt-28 md:pb-20 overflow-hidden'>
            <h1 className='w-full text-center uppercase text-2xl md:text-5xl'>Join the <strong className='font-extrabold'>InteractiveWorkers</strong> <br/>
              Affiliate Program!</h1>
            <ParticlesComponent></ParticlesComponent>
          </article>
          <article className='py-4 md:py-12'>
            <p className='w-3/4 mx-auto text-base md:text-2xl font-normal text-center'>At InteractiveWorkers, we connect startups and small businesses with top-tier remote talent. Now, with the launch of our Affiliate Program, you have the opportunity to partner with us and boost your earnings while helping companies grow with our trusted virtual staffing solutions.</p>
          </article>
        </section>

        <AffiliateForm></AffiliateForm>
    </div>
  )
}

export default AffiliatePage