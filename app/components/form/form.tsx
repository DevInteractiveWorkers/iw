"use client";

import {
  Button,
  Checkbox,
  Label,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";
import React, { useState } from "react";
import { sendMail, formData } from "../lib/utils";
import Link from "next/link";
import professionalOptions from "./professionalOptions";
import Loader from "../loader";

const MainForm = ({ dark }: { dark?: boolean | number }) => {
  const [sending, isSending] = useState(false);
  const [sent, isSent] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: any) => {
    isSending(true);
    event.preventDefault();
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
      message: target.message.value,
    };

    /*
    try {
      const response = await fetch(
        "https://services.leadconnectorhq.com/hooks/dtfCxBE6SEYaCMFTlgu5/webhook-trigger/fd180225-d8a8-404d-ad1b-22c8b4e90eb8",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
    } catch (error) {
      console.log("error");
    }
    */

    const empty = Object.values(data).filter((item) => item === "");
    const completed = empty.length === 0 && (await sendMail(data));

    if (completed) {
      isSending(false);
      isSent(true);
      setTimeout(() => isSent(false), 5000);
      if (message) setMessage("");
      target.firstname.value = "";
      target.lastname.value = "";
      target.company.value = "";
      target.phone.value = "";
      target.email.value = "";
      target.size.value = "";
      target.staff.value = "";
      target.country.value = "";
      target.professional.value = "";
      target.message.value = "";
    } else {
      isSending(false);
      setMessage("There was a problem to contact us. Please try again later.");
    }
  };

  const FormFields = () => (
    <>
      <div className="mx-auto w-11/12 md:w-2/3 flex flex-col gap-3">
        <div className="flex md:flex-row flex-col gap-3">
          <TextInput
            id="firstname"
            type="text"
            placeholder="First name*"
            required
            shadow
            className="md:basis-1/2"
          />
          <TextInput
            id="lastname"
            type="text"
            placeholder="Last name*"
            required
            shadow
            className="md:basis-1/2"
          />
        </div>
        <TextInput
          id="company"
          type="text"
          placeholder="Company's Name*"
          required
          shadow
        />
        <div className="flex md:flex-row flex-col gap-3">
          <TextInput
            id="phone"
            type="text"
            placeholder="Phone Number*"
            required
            shadow
            className="md:basis-1/2"
          />
          <TextInput
            id="email"
            type="email"
            placeholder="Email*"
            required
            shadow
            className="md:basis-1/2"
          />
        </div>
        <TextInput
          id="size"
          type="text"
          placeholder="Your company size (current staff number)*"
          required
          shadow
        />
        <TextInput
          id="staff"
          type="text"
          placeholder="Number of Staff Required?*"
          required
          shadow
        />
        <TextInput
          id="country"
          type="text"
          placeholder="Which country are you based in?*"
          required
          shadow
        />
        <h4
          className={`mx-auto text-center font-bold text-lg mt-4 ${dark && dark !== 2 ? "text-white" : "text-black"}`}
        >
          Choose your Professional
        </h4>
        <Select
          id="professional"
          required
          className="text-white first:first:first:bg-iw-red-1"
        >
          {professionalOptions.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </Select>
        <Textarea
          id="message"
          placeholder="What's your question? Or what kind of outsourcing help do you need?"
          required
          rows={4}
          className="mt-8"
        />
        <p
          className={`text-center ${dark && dark !== 2 ? "text-white" : "text-black"} text-xs`}
        >
          Messages and data rates may apply. Message frequency will vary. Reply
          STOP to opt-out of messaging.
        </p>
        <div className="flex items-center justify-center gap-2">
          <Checkbox id="agree" required />
          <Label
            htmlFor="agree"
            className={`flex ${dark && dark !== 2 ? "text-white" : "text-black"}`}
          >
            I agree with the&nbsp;
            <Link
              href="/policy"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              Privacy Policy
            </Link>
          </Label>
        </div>
        {message && (
          <div className="text-[#ff0000] flex justify-center">{message}</div>
        )}
        {sending ? (
          <div className="w-full flex justify-center">
            <div className="w-1/2 flex justify-center">
              <Loader />
            </div>
          </div>
        ) : (
          <Button
            type="submit"
            className={`uppercase rounded-xl font-bold text-xl max-w-fit mx-auto mt-8 ${!sent ? "bg-iw-red-1" : "bg-[#808080] pointer-events-none cursor-not-allowed"} text-white`}
          >
            {!sent ? "Send mail" : "Sent"}
          </Button>
        )}
      </div>
    </>
  );

  const heading =
    dark === 2 ? (
      <>
        <strong className="font-extrabold text-iw-red-1">Feel free</strong> to
        contact us <strong className="font-extrabold">anytime!</strong>
      </>
    ) : (
      <>
        <strong className="font-extrabold">Speak</strong> with our team{" "}
        <strong className="font-extrabold">today</strong>
      </>
    );

  const outerWrapper =
    dark === 2 ? (
      <form
        className={`flex flex-col gap-4 w-3/4 mx-auto py-20 ${dark && dark !== 2 ? "bg-[#333333]" : "md:bg-[#EFEFEF]"}`}
        onSubmit={handleSubmit}
        name="Contact Form"
      >
        <h2
          className={`${dark && dark !== 2 ? "text-white" : "text-iw-red-1"} text-2xl md:text-4xl uppercase font-light mx-auto text-center`}
        >
          {heading}
        </h2>
        <FormFields />
      </form>
    ) : (
      <div
        className={`relative w-full px-4 md:px-0 pb-8 md:pb-20 ${dark ? "bg-[#222222]" : "bg-[#E6E6E6]"}`}
        id="form"
      >
        <form
          className={`flex flex-col gap-4 md:w-3/4 mx-auto relative -top-8 rounded-[66px] py-12 md:py-20 px-12 ${dark ? "bg-[#333333]" : "bg-[#EFEFEF]"}`}
          onSubmit={handleSubmit}
        >
          <h2
            className={`${dark ? "text-white" : "text-iw-red-1"} text-2xl md:text-4xl uppercase font-light mx-auto text-center my-2 md:my-0`}
          >
            {heading}
          </h2>
          <FormFields />
        </form>
      </div>
    );

  return outerWrapper;
};

export default MainForm;
