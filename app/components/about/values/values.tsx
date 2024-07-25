import { values } from '@/app/content/values'
import Image from 'next/image'
import React from 'react'

const Values = () => {
  return (
    <div className= 'w-3/4 mx-auto text-center flex' >
        {values.map((value) => {
          return(
            <div key={value.img} className='pt-44 pb-32 rounded-3xl' >
              <div className=" border-[#c3c3c3]" >
                  <Image src={`/about/values/${value.img}`} alt='Transparency icon' height={323} width={323}></Image>
                  < h5 className = 'text-xl font-extrabold' > {value.title} </h5>
                  < p className = 'font-medium text-lg px-12 mt-6' > {value.subtitle}</p>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Values