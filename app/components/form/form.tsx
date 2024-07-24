import { Button, Checkbox, Label, Select, Textarea, TextInput } from 'flowbite-react'
import Link from 'next/link'
import React from 'react'

const MainForm = () => {
  return (
    <div className='bg-[#222222] w-full'>
      <form className="flex flex-col gap-4 w-3/4 mx-auto bg-[#333333] -mt-[3%] rounded-[66px] py-20 mb-20">
        <h2 className=' text-white text-4xl uppercase font-light mx-auto text-center'><strong className='font-extrabold'>Speak</strong> with our team <strong className='font-extrabold'>today</strong></h2>
        <div className='mx-auto w-2/3 flex flex-col gap-3'>
          <div className='flex gap-3'>
            <TextInput className='basis-1/2' id="firstname" type="text" placeholder="First name*" required shadow />
            <TextInput className='basis-1/2' id="lastname" type="text" placeholder="Last name*" required shadow />
          </div>
          <div>
            <TextInput id="company" type="text" placeholder="Company's Name*" required shadow />
          </div>
          <div className='flex gap-3'>
            <TextInput className='basis-1/2' id="phone" type="text" placeholder="Phone Number*" required shadow />
            <TextInput className='basis-1/2' id="email" type="email" placeholder="Email*" required shadow />
          </div>
          <div>
            <TextInput className='basis-1/2' id="company-size" type="text" placeholder="Your company size (current staff number)*" required shadow />
          </div>
          <div>
            <TextInput className='basis-1/2' id="staff" type="text" placeholder="Number of Staff Required?*" required shadow />
          </div>
          <div>
            <TextInput className='basis-1/2' id="country" type="text" placeholder="Which country are you based in?*" required shadow />
          </div>
          <h4 className='mx-auto text-center font-bold text-lg mt-4 text-white'>Choose your Professional</h4>
          <div>
            <Select id="professional" required>
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
          <Textarea className='mt-8' id="comment" placeholder="What's your question? Or what kind of outsourcing help do you need?" required rows={4} />

          <p className='text-center text-white text-xs'>Messages and data rates may apply. message frequency will vary. Reply stop to opt-out of messaging
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
          <Button className='uppercase rounded-xl font-bold text-xl max-w-fit mx-auto mt-8 bg-[#DD272D]' type="submit">Send mail</Button>
        </div>
      </form>
    </div>
  )
}

export default MainForm