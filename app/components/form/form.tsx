"use client"

import { Button, Checkbox, Label, Select, Textarea, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { sendMail, formData } from '../lib/utils'
import Link from 'next/link'

const MainForm = ({dark}:{dark?:boolean | number}) => {

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    /* setIsSending(true); */
    const target = event.target;
    const data: formData = {
      fullName: target.firstname.value + " " + target.lastname.value,
      company: target.company.value,
      phone: target.phone.value,
      email: target.email.value,
      size: target.size.value,
      staff: target.staff.value,
      country: target.country.value,
      professional: target.professional.value,
      message: target.message.value
    };
    

    const empty = Object.values(data).filter((item) => item === '');
    const completed = empty.length === 0 && await sendMail(data);
    
    setIsSending(false);

    if (completed) {
      target.firstname.value = "" 
      target.lastname.value = ""
      target.company.value = ""
      target.phone.value = ""
      target.email.value = ""
      target.size.value = ""
      target.staff.value = ""
      target.country.value = ""
      target.professional.value = ""
      target.message.value = ""
    }
  };
  if(dark === 2){
    return(
      <form className={`flex flex-col gap-4 w-3/4 mx-auto py-20  ${dark && dark != 2 ? "bg-[#333333]" : "md:bg-[#EFEFEF]"}`} onSubmit={handleSubmit} name='Contact Form'>
          <h2 className={`${ dark && dark != 2 ? "text-white" : "text-[#DD272D]"} text-xl md:text-4xl uppercase font-light mx-auto text-center`}>
            {dark === 2 ? 
             <><strong className='font-extrabold text-[#DD272D]'>Feel free</strong> to contact us <strong className='font-extrabold'>anytime!</strong></>: 
             <><strong className='font-extrabold'>Speak</strong> with our team <strong className='font-extrabold'>today</strong></>
            }
          </h2>
          <div className='mx-auto px-2 md:px-0 md:w-2/3 flex flex-col gap-3'>
            <div className='flex md:flex-row flex-col gap-3'>
              <TextInput className='md:basis-1/2' id="firstname" type="text" placeholder="First name*" required shadow />
              <TextInput className='md:basis-1/2' id="lastname" type="text" placeholder="Last name*" required shadow />
            </div>
            <div>
              <TextInput id="company" type="text" placeholder="Company's Name*" required shadow />
            </div>
            <div className='flex md:flex-row flex-col gap-3'>
              <TextInput className='md:basis-1/2' id="phone" type="text" placeholder="Phone Number*" required shadow />
              <TextInput className='md:basis-1/2' id="email" type="email" placeholder="Email*" required shadow />
            </div>
            <div>
              <TextInput className='basis-1/2' id="size" type="text" placeholder="Your company size (current staff number)*" required shadow />
            </div>
            <div>
              <TextInput className='basis-1/2' id="staff" type="text" placeholder="Number of Staff Required?*" required shadow />
            </div>
            <div>
              <TextInput className='basis-1/2' id="country" type="text" placeholder="Which country are you based in?*" required shadow />
            </div>
            <h4 className={`mx-auto text-center font-bold text-lg mt-4 ${ dark && dark != 2 ? "text-white" : "text-black"}`}>Choose your Professional</h4>
            <div>
              <Select className=' text-white' id="professional" required>
                <option>Graphic Designer </option>
                <option>Web Developer </option>
                <option>Copywriter </option>
                <option>Video Editor (depending on content creation focus) </option>
                <option>Social Media Manager </option>
                <option>Call Center Agent Virtual Assistant </option>
                <option>Customer Service Virtual Assistant </option>
                <option>Scheduling Agent </option>
                <option>Appointment Setter </option>
                <option>Administrative Assistant </option>
                <option>Personal Virtual Assistant </option>
                <option>General VA </option>
                <option>Recruiting VA </option>
                <option>Intake Coordinators VA </option>
                <option>HR VA </option>
                <option>Administrative VA </option>
                <option>Legal Assistant VA </option>
                <option>Insurance Assistant VA </option>
                <option>Dispatcher </option>
                <option>It Support Virtual Assistant  </option>
                <option>Accountant </option>
                <option>Transcriptionist VA </option>
                <option>Medical Scriber VA </option>
                <option>Appointment Setter </option>
                <option>Customer Service</option>
                <option>ADS Specialist </option>
                <option>Copywriter </option>
                <option>Sales Agent </option>
                <option>Telemarketing Agent </option>
                <option>Real Estate Agent</option>
              </Select>
            </div>
            <Textarea className='mt-8' id="message" placeholder="What's your question? Or what kind of outsourcing help do you need?" required rows={4} />
  
            <p className={`text-center ${ dark && dark != 2 ? "text-white" : "text-black"} text-xs`}>Messages and data rates may apply. message frequency will vary. Reply stop to opt-out of messaging
            </p>
            <div className="flex items-center justify-center gap-2">
              <Checkbox id="agree" required/>
              <Label htmlFor="agree" className="flex">
                I agree with the&nbsp;
                <Link href="/policy" className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Privacy Policy
                </Link>
              </Label>
            </div>
            <Button className='uppercase rounded-xl font-bold text-xl max-w-fit mx-auto mt-8 bg-[#DD272D] text-white' type="submit">Send mail</Button>
          </div>
        </form>
    )
  }
  return (
    <div className={`relative w-full px-1 md:px-0 pb-8 md:pb-20  ${dark ? "bg-[#222222]" : "bg-[#E6E6E6]"}`} id='form'>
      <form className={`flex flex-col gap-4 md:w-3/4 mx-auto relative -top-8 rounded-[66px] py-12 md:py-20 ${dark ? "bg-[#333333]" : "bg-[#EFEFEF]"}`} onSubmit={handleSubmit}>
        <h2 className={`${ dark ? "text-white" : "text-[#DD272D]"} text-lg md:text-4xl uppercase font-light mx-auto text-center my-2 md:my-0`}>
          <strong className='font-extrabold'>Speak</strong> with our team <strong className='font-extrabold'>today</strong>
        </h2>
        <div className='mx-auto w-11/12 md:w-2/3 flex flex-col gap-3'>
          <div className='flex md:flex-row flex-col gap-3'>
            <TextInput className='md:basis-1/2' id="firstname" type="text" placeholder="First name*" required shadow />
            <TextInput className='md:basis-1/2' id="lastname" type="text" placeholder="Last name*" required shadow />
          </div>
          <div>
            <TextInput id="company" type="text" placeholder="Company's Name*" required shadow />
          </div>
          <div className='flex md:flex-row flex-col gap-3'>
            <TextInput className='md:basis-1/2' id="phone" type="text" placeholder="Phone Number*" required shadow />
            <TextInput className='md:basis-1/2' id="email" type="email" placeholder="Email*" required shadow />
          </div>
          <div>
            <TextInput className='basis-1/2' id="size" type="text" placeholder="Your company size (current staff number)*" required shadow />
          </div>
          <div>
            <TextInput className='basis-1/2' id="staff" type="text" placeholder="Number of Staff Required?*" required shadow />
          </div>
          <div>
            <TextInput className='basis-1/2' id="country" type="text" placeholder="Which country are you based in?*" required shadow />
          </div>
          <h4 className={`mx-auto text-center font-bold text-lg mt-4 ${ dark ? "text-white" : "text-black"}`}>Choose your Professional</h4>
          <div>
            <Select className=' text-white' id="professional" required>
              <option>Graphic Designer </option>
              <option>Web Developer </option>
              <option>Copywriter </option>
              <option>Video Editor (depending on content creation focus) </option>
              <option>Social Media Manager </option>
              <option>Call Center Agent Virtual Assistant </option>
              <option>Customer Service Virtual Assistant </option>
              <option>Scheduling Agent </option>
              <option>Appointment Setter </option>
              <option>Administrative Assistant </option>
              <option>Personal Virtual Assistant </option>
              <option>General VA </option>
              <option>Recruiting VA </option>
              <option>Intake Coordinators VA </option>
              <option>HR VA </option>
              <option>Administrative VA </option>
              <option>Legal Assistant VA </option>
              <option>Insurance Assistant VA </option>
              <option>Dispatcher </option>
              <option>It Support Virtual Assistant  </option>
              <option>Accountant </option>
              <option>Transcriptionist VA </option>
              <option>Medical Scriber VA </option>
              <option>Appointment Setter </option>
              <option>Customer Service</option>
              <option>ADS Specialist </option>
              <option>Copywriter </option>
              <option>Sales Agent </option>
              <option>Telemarketing Agent </option>
              <option>Real Estate Agent</option>
            </Select>
          </div>
          <Textarea className='mt-8' id="message" placeholder="What's your question? Or what kind of outsourcing help do you need?" required rows={4} />

          <p className={`text-center ${ dark ? "text-white" : "text-black"} text-xs`}>Messages and data rates may apply. message frequency will vary. Reply stop to opt-out of messaging
          <br /> <span className='font-bold '>Read our privacy policy</span>
          </p>
          {/* <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree" className="flex">
              I agree with the&nbsp;
              <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                terms and conditions
              </Link>
            </Label>
          </div> */}
          <Button className='uppercase rounded-xl font-bold text-xl max-w-fit mx-auto mt-8 bg-[#DD272D] text-white' type="submit">Send mail</Button>
        </div>
      </form>
    </div>
  )
}

export default MainForm