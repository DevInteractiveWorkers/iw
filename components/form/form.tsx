"use client";

import { Label } from "flowbite-react";
import React, { useState } from "react";
import { sendMail, formData } from "../lib/utils";
import Link from "next/link";
import professionalOptions from "./professionalOptions";
import Input from "./input";
import Select from "./select";
import Textarea from "./textarea";
import Image from "next/image";
import FadeInContent from "../FadeInContent";
import SplitText from "../text-animation/SplitText";
import FormButton from "../buttons/form-buttons";
import Loader, { LoadingPage } from "../loader";
import PageDivision from "../page-division";
import Checkbox from "./checkbox";
import { useScrollIntoView } from "@/lib/use-scroll-into-view";

const MainForm = ({
  heading = (
    <>
      Beyond the obvious benefits, virtual assistants
      <br className="max-nd:hidden" /> can address hidden needs.
    </>
  ),
  subheading = "Speak with our team today!",
}: {
  heading?: string | React.ReactNode | false;
  subheading?: string | React.ReactNode | false;
}) => {
  const [sending, isSending] = useState(false);
  const [sent, isSent] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    isSending(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data: formData = {
      fullName:
        `${formData.get("firstname") ?? ""} ${formData.get("lastname") ?? ""}`.trim(),
      company: String(formData.get("company") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      size: String(formData.get("size") ?? ""),
      staff: String(formData.get("staff") ?? ""),
      country: String(formData.get("country") ?? ""),
      professional: String(formData.get("professional") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const empty = Object.values(data).filter((item) => item === "");

    const completed = empty.length === 0 && (await sendMail(data));

    if (completed) {
      isSending(false);
      isSent(true);

      setTimeout(() => isSent(false), 5000);

      form.reset();
    } else {
      isSending(false);
      setMessage("There was a problem to contact us. Please try again later.");
    }
  };

  const FormFields = () => (
    <>
      <div className="grid md:grid-cols-2 gap-3">
        <Input
          id="firstname"
          name="firstname"
          type="text"
          placeholder="First name"
          autoComplete="given-name"
          required
        />

        <Input
          id="lastname"
          name="lastname"
          type="text"
          placeholder="Last name"
          autoComplete="family-name"
          required
        />
      </div>

      <Input
        id="company"
        name="company"
        type="text"
        placeholder="Company's Name"
        autoComplete="organization"
        required
      />

      <div className="grid md:grid-cols-2 gap-3">
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Phone Number"
          autoComplete="tel"
          required
        />

        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          autoComplete="email"
          required
        />
      </div>

      <Input
        id="size"
        name="size"
        type="text"
        placeholder="Your company size (current staff number)"
        autoComplete="off"
        required
      />

      <Input
        id="staff"
        name="staff"
        type="text"
        placeholder="Number of Staff Required?"
        autoComplete="off"
        required
      />

      <Input
        id="country"
        name="country"
        type="text"
        placeholder="Which country are you based in?"
        autoComplete="country-name"
        required
      />

      <h4 className="font-medium md:text-2xl text-xl mt-4">
        Choose your Professional
      </h4>

      <Select id="professional" required>
        {professionalOptions.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </Select>

      <Textarea
        id="message"
        name="message"
        placeholder="What's your question? Or what kind of outsourcing help do you need?"
        autoComplete="off"
        required
        rows={1}
      />
      <p className="py-4">
        Messages and data rates may apply. (Message frequency will vary).
        <br /> Reply STOP to opt-out of messaging.
      </p>
      <div className="flex items-center gap-2">
        <Checkbox id="agree" name="agree" required />

        <Label htmlFor="agree" className="flex text-white">
          I agree with the&nbsp;
          <Link href="/policy" className="text-iw-red-1 hover:underline">
            Privacy Policy
          </Link>
        </Label>
      </div>
      {message && <div className="text-iw-red-1 flex">{message}</div>}

      <FormButton disabled={sending || sent}>
        {sending ? (
          <Loader className="min-w-[2.25rem] min-h-[2.25rem] px-10" />
        ) : !sent ? (
          "Send mail"
        ) : (
          "Sent"
        )}
      </FormButton>
    </>
  );
  const { ref } = useScrollIntoView<HTMLElement>();
  return (
    <FadeInContent>
      <section
        ref={ref}
        className="grid md:grid-cols-[auto_auto] md:pt-20 py-10"
      >
        <PageDivision className="top-0" />
        <FadeInContent>
          {(heading || subheading) && (
            <Image
              width={1080}
              height={1080}
              className="w-auto px-10 md:max-w-[400px] md:sticky md:top-20 top-10"
              alt="logo"
              src={"/logo/01_Primary_Logo/Primary_Logo-04.png"}
            />
          )}
        </FadeInContent>
        <form
          className="flex flex-col md:px-10 px-4 mb-10"
          onSubmit={handleSubmit}
          name="Contact Form"
        >
          {heading && (
            <SplitText
              className="md:text-5xl text-xl py-4"
              textAlign="start"
              text={heading}
            />
          )}
          {subheading && (
            <SplitText
              tag="h2"
              textAlign="start"
              className={`text-white text-2xl md:text-6xl font-medium py-10`}
              text={subheading}
            />
          )}
          <FadeInContent>
            <FormFields />
          </FadeInContent>
        </form>
      </section>
    </FadeInContent>
  );
};

export default MainForm;
