"use client";

import React, { useState } from "react";
import { smallFormData, sendAffiliateMail } from "../lib/utils";
import CTAButton from "../buttons/cta-button";
import Input from "./input";
import FadeInContent from "../FadeInContent";
import PageDivision from "../page-division";
import Image from "next/image";
import SplitText from "../text-animation/SplitText";
import Loader from "../loader";
import { useScrollIntoView } from "@/lib/use-scroll-into-view";

const AffiliateForm = () => {
  const [isSending, setIsSending] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const { ref } = useScrollIntoView<HTMLElement>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSending(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data: smallFormData = {
      fullName: String(formData.get("firstname") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
    };

    try {
      if (!data.fullName.trim() || !data.email.trim()) {
        return;
      }

      const completed = await sendAffiliateMail(data);

      if (completed) {
        setIsCompleted(true);
        form.reset();
      }
    } finally {
      setIsSending(false);
    }
  };

  return (
    <FadeInContent>
      <section
        ref={ref}
        className="grid md:grid-cols-[auto_auto] md:pt-20 py-10"
      >
        <PageDivision className="top-0" />
        <FadeInContent className="pointer-events-none select-none">
          <Image
            width={1080}
            height={1080}
            className="w-auto px-10 md:max-w-[400px] md:sticky md:top-20 top-10"
            alt="logo"
            src={"/logo/01_Primary_Logo/Primary_Logo-06.png"}
          />
        </FadeInContent>
        <form
          className="flex flex-col md:px-10 px-4 mb-10"
          onSubmit={handleSubmit}
        >
          <SplitText
            className="md:text-5xl text-xl py-4"
            textAlign="start"
            text={
              <>
                Beyond the obvious benefits, virtual assistants can address
                hidden needs.
              </>
            }
          />
          <SplitText
            tag="h4"
            className="md:text-5xl text-xl py-4 font-medium"
            textAlign="start"
            text={<>Join the Affiliate Program!</>}
          />

          {/* Form fields */}
          <div
            className={`
            flex flex-col gap-4
            transition-all duration-700
            ${
              isCompleted
                ? "pointer-events-none absolute inset-x-0 opacity-0"
                : "relative opacity-100"
            }
          `}
          >
            <div className="flex flex-col gap-4 md:flex-row">
              <Input
                className="w-full md:basis-1/2"
                id="firstname"
                name="firstname"
                type="text"
                placeholder="Name"
                required
                disabled={isSending}
              />

              <Input
                className="w-full md:basis-1/2"
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone Number (Optional)"
                disabled={isSending}
              />
            </div>

            <Input
              className="w-full"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
              disabled={isSending}
            />

            <CTAButton
              className="[--primary-color:#dd272d] [--secondary-color:#dd272d] [--tertiary-color:#fff] rounded font-bold text-4xl px-10 py-5 max-w-fit mt-8"
              type="submit"
              disabled={isSending}
            >
              {isSending ? (
                <Loader className="text-iw-red-1 min-w-[24px] min-h-[24px] w-1/4 loading-page-loader:w-1/10 overflow-visible" />
              ) : (
                "Join now!"
              )}
            </CTAButton>
          </div>

          {/* Success state */}
          <div
            aria-hidden={!isCompleted}
            className={`
            mx-auto w-full
            transition-all duration-700
            ${
              isCompleted
                ? "relative z-10 scale-100 opacity-100"
                : "pointer-events-none absolute inset-x-0 scale-95 opacity-0"
            }
          `}
          >
            <svg
              className="mx-auto h-56 w-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <g
                fill="#c1272d"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
              >
                <g transform="scale(5.12)">
                  <path d="M25,2c-12.683,0 -23,10.317 -23,23c0,12.683 10.317,23 23,23c12.683,0 23,-10.317 23,-23c0,-4.56 -1.33972,-8.81067 -3.63672,-12.38867l-1.36914,1.61719c1.895,3.154 3.00586,6.83148 3.00586,10.77148c0,11.579 -9.421,21 -21,21c-11.579,0 -21,-9.421 -21,-21c0,-11.579 9.421,-21 21,-21c5.443,0 10.39391,2.09977 14.12891,5.50977l1.30859,-1.54492c-4.085,-3.705 -9.5025,-5.96484 -15.4375,-5.96484zM43.23633,7.75391l-19.32227,22.80078l-8.13281,-7.58594l-1.36328,1.46289l9.66602,9.01563l20.67969,-24.40039z" />
                </g>
              </g>
            </svg>

            <h3 className="text-center text-2xl">Your email has been sent</h3>
          </div>
        </form>
      </section>
    </FadeInContent>
  );
};

export default AffiliateForm;
