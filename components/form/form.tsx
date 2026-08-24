"use client";

import { Button, Checkbox, Label } from "flowbite-react";
import React, { useState } from "react";
import { sendMail, formData } from "../lib/utils";
import Link from "next/link";
import professionalOptions from "./professionalOptions";
import Loader from "../loader";
import Input from "./input";
import Select from "./select";
import Textarea from "./textarea";
import Image from "next/image";

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
      <div className="grid md:grid-cols-2 gap-3">
        <Input id="firstname" type="text" placeholder="First name" required />
        <Input id="lastname" type="text" placeholder="Last name" required />
      </div>
      <Input id="company" type="text" placeholder="Company's Name" required />
      <div className="grid md:grid-cols-2 gap-3">
        <Input id="phone" type="text" placeholder="Phone Number" required />
        <Input id="email" type="email" placeholder="Email" />
      </div>
      <Input
        id="size"
        type="text"
        placeholder="Your company size (current staff number)"
        required
      />
      <Input
        id="staff"
        type="text"
        placeholder="Number of Staff Required?"
        required
      />
      <Input
        id="country"
        type="text"
        placeholder="Which country are you based in?"
        required
      />
      <h4 className={`font-bold md:text-2xl text-xl mt-4`}>
        Choose your Professional
      </h4>
      <Select id="professional" required>
        {professionalOptions.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </Select>
      <Textarea
        id="message"
        placeholder="What's your question? Or what kind of outsourcing help do you need?"
        required
        rows={1}
      />
      <p className="py-4">
        Messages and data rates may apply. (Message frequency will vary).
        <br /> Reply STOP to opt-out of messaging.
      </p>
      <div className="flex items-center gap-2">
        <Checkbox id="agree" required className="text-iw-red-1" />
        <Label htmlFor="agree" className={`flex text-white`}>
          I agree with the&nbsp;
          <Link href="/policy" className="text-iw-red-1 hover:underline ">
            Privacy Policy
          </Link>
        </Label>
      </div>
      {message && <div className="text-iw-red-1 flex">{message}</div>}
      {sending ? (
        <div className="w-full flex justify">
          <div className="w-1/2 flex">
            <Loader />
          </div>
        </div>
      ) : (
        <button
          type="submit"
          className={`uppercase rounded font-bold text-4xl px-10 py-5 max-w-fit mt-8 ${!sent ? "bg-iw-red-1" : "bg-[#808080] pointer-events-none cursor-not-allowed"} text-white`}
        >
          {!sent ? "Send mail" : "Sent"}
        </button>
      )}
    </>
  );

  return (
    <section className="grid md:grid-cols-[auto_auto] border-t md:pt-20 py-10 md:mx-20 mx-4">
      <Image
        width={1080}
        height={1080}
        className="w-auto px-10 md:max-w-[400px] md:sticky md:top-20 top-10"
        alt="logo"
        src={"/logo/01_Primary_Logo/Primary_Logo-04.png"}
      />
      <form
        className="flex flex-col md:px-10 px-4 mb-10"
        onSubmit={handleSubmit}
        name="Contact Form"
      >
        <p className="md:text-5xl text-xl py-4">
          Beyond the obvious benefits, virtual assistants
          <br className="max-nd:hidden" /> can address hidden needs.
        </p>
        <h2
          className={`text-white text-2xl md:text-6xl font-medium mx-auto text-left w-full py-10`}
        >
          Speak with our team today!
        </h2>
        <FormFields />
      </form>
    </section>
  );
};

export default MainForm;
