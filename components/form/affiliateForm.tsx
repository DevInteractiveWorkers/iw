"use client";
import React, { useState } from "react";
import { smallFormData, sendAffiliateMail } from "../lib/utils";
import { Button, Select, Textarea, TextInput } from "flowbite-react";
import CTAButton from "../buttons/cta-button";
import Input from "./input";

const AffiliateForm = () => {
  const [isSending, setIsSending] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    setIsSending(true);
    const target = event.target;
    const data: smallFormData = {
      fullName: target.firstname.value,
      phone: target.phone.value,
      email: target.email.value,
    };

    const completed =
      data.fullName.trim() !== "" &&
      data.email.trim() !== "" &&
      (await sendAffiliateMail(data));

    if (completed) {
      setIsSending(false);
      setIsCompleted(true);
      target.firstname.value = "";
      target.phone.value = "";
      target.email.value = "";
    }
  };
  return (
    <div id="form">
      <form
        className={`flex flex-col gap-4 md:w-3/4 mx-auto relative -top-8 rounded-[66px] py-12`}
        onSubmit={handleSubmit}
      >
        <span className="block mx-auto w-fit text-center text-xl md:text-4xl text-iw-red-1 my-4 uppercase">
          {" "}
          <strong className="font-black">Join</strong> the Affiliate{" "}
          <strong className="font-black">Program!</strong>
        </span>
        <div
          className={`mx-auto w-11/12 md:w-2/3 transition-all duration-75 ${isCompleted ? "opacity-0 z-0 absolute" : "flex opacity-100 z-40"} flex-col gap-3`}
        >
          <div className="flex md:flex-row flex-col gap-3">
            <Input
              className="md:basis-1/2"
              id="firstname"
              type="text"
              placeholder="Name*"
              required
              disabled={isSending}
            />
            <Input
              className="md:basis-1/2"
              id="phone"
              type="text"
              placeholder="Phone Number (Optional)"
              disabled={isSending}
            />
          </div>
          <div className="flex md:flex-row flex-col gap-3">
            <Input
              className="w-full"
              id="email"
              type="email"
              placeholder="Email*"
              required
              disabled={isSending}
            />
          </div>
          <div className="flex md:flex-row flex-col gap-2 md:gap-0 mt-4">
            <CTAButton
              style={
                {
                  "--primary-color": "#dd272d",
                  "--secondary-color": "#fff",
                } as React.CSSProperties
              }
              className="block w-40 mx-auto font-medium rounded-lg text-base px-3 py-1.5 text-center"
              data-dismiss-target="#alert-additional-content-1"
              aria-label="Close"
              type="submit"
              disabled={isSending}
            >
              Join now!
            </CTAButton>
          </div>
        </div>
        <div
          className={`mx-auto transition-all duration-1000 ${isCompleted ? " opacity-100 z-40" : "absolute opacity-0 z-0"} w-full`}
        >
          <svg
            className="h-56 mx-auto w-full"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0,0,256,256"
          >
            <g
              fill="#c1272d"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
            >
              <g transform="scale(5.12,5.12)">
                <path d="M25,2c-12.683,0 -23,10.317 -23,23c0,12.683 10.317,23 23,23c12.683,0 23,-10.317 23,-23c0,-4.56 -1.33972,-8.81067 -3.63672,-12.38867l-1.36914,1.61719c1.895,3.154 3.00586,6.83148 3.00586,10.77148c0,11.579 -9.421,21 -21,21c-11.579,0 -21,-9.421 -21,-21c0,-11.579 9.421,-21 21,-21c5.443,0 10.39391,2.09977 14.12891,5.50977l1.30859,-1.54492c-4.085,-3.705 -9.5025,-5.96484 -15.4375,-5.96484zM43.23633,7.75391l-19.32227,22.80078l-8.13281,-7.58594l-1.36328,1.46289l9.66602,9.01563l20.67969,-24.40039z"></path>
              </g>
            </g>
          </svg>
          <h3 className="text-center text-2xl">Your email has been sent</h3>
        </div>
      </form>
    </div>
  );
};

export default AffiliateForm;
