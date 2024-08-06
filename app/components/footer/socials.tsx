import Image from 'next/image'
import React from 'react'

const Socials = ({className}:{className?:string}) => {
    return (
        <div className={`flex gap-2 ${className}`}>
            <Image src={'/footer/ig.svg'} alt='social Interactive workers' width={23} height={23}></Image>
            <Image src={'/footer/fb.svg'} alt='social Interactive workers' width={23} height={23}></Image>
            <Image src={'/footer/x.svg'} alt='social Interactive workers' width={23} height={23}></Image>
            <Image src={'/footer/li.svg'} alt='social Interactive workers' width={23} height={23}></Image>
            <Image src={'/footer/wss.svg'} alt='social Interactive workers' width={23} height={23}></Image>
        </div>
    )
}

export default Socials