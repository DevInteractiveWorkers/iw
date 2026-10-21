"use client";

import { Label } from "flowbite-react";
import React, { useState } from "react";
import { sendMail, formData } from "../lib/utils";
import professionalOptions from "./professionalOptions";
import Input from "./input";
import Select from "./select";
import Textarea from "./textarea";
import FadeInContent from "../FadeInContent";
import SplitText from "../text-animation/SplitText";
import FormButton from "../buttons/form-buttons";
import Loader from "../loader";
import Checkbox from "./checkbox";
import { useScrollIntoView } from "@/lib/use-scroll-into-view";
import { useIsMobile } from "@/lib/useMobile";
import { TransitionLink } from "../link";
import { navbar } from "@/app/content/navbar";
import Socials from "../footer/socials";
import Image from "next/image";

const MainForm = ({
  heading = "Speak with our team today!",
  socials = true,
}: {
  heading?: string | React.ReactNode | false;
  socials?: boolean;
}) => {
  const [sending, isSending] = useState(false);
  const [sent, isSent] = useState(false);
  const [message, setMessage] = useState("");
  const [fieldsValid, setFieldsValid] = useState(false);
  const [professionals, setProfessionals] = useState<string[]>([]);
  const isMobile = useIsMobile();

  const canSubmit = fieldsValid && professionals.length > 0 && !sending;

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
      setProfessionals([]);
      setFieldsValid(false);
    } else {
      isSending(false);
      setMessage("There was a problem to contact us. Please try again later.");
    }
  };

  const { ref } = useScrollIntoView<HTMLFormElement>();
  return (
    <FadeInContent>
      <form
        ref={ref}
        className="md:grid md:grid-cols-3 flex flex-col"
        onSubmit={handleSubmit}
        onChange={(event) =>
          setFieldsValid(event.currentTarget.checkValidity())
        }
        name="Contact Form"
      >
        {heading && (
          <SplitText
            className={`text-4xl md:text-6xl font-medium md:py-10 md:col-span-2 col-span-1 text-iw-red-2`}
            textAlign="start"
            text={heading}
          />
        )}
        {socials && (
          <div className="relative max-md:hidden">
            <div className="flex items-start justify-around py-10 md:absolute top-0 left-0 w-full h-full">
              <ul className="flex flex-col gap-2 items-start">
                <li>
                  <TransitionLink
                    href={"/"}
                    className="relative after:absolute after:left-1/2 after:top-full after:w-0 after:h-px after:bg-[currentColor]
                    hover:after:left-0 hover:after:w-full after:transition-all after:duration-150 active:text-iw-red-3"
                  >
                    Home
                  </TransitionLink>
                </li>
                {navbar.map((item, i) => (
                  <li key={`item-${i}`}>
                    <TransitionLink
                      href={item.link}
                      className="relative after:absolute after:left-1/2 after:top-full after:w-0 after:h-px after:bg-[currentColor]
                    hover:after:left-0 hover:after:w-full after:transition-all after:duration-150 active:text-iw-red-3"
                    >
                      {item.title}
                    </TransitionLink>
                  </li>
                ))}{" "}
                <li>
                  <TransitionLink
                    href={"/policy"}
                    className="relative after:absolute after:left-1/2 after:top-full after:w-0 after:h-px after:bg-[currentColor]
                    hover:after:left-0 hover:after:w-full after:transition-all after:duration-150 active:text-iw-red-3"
                  >
                    Privacy Policy
                  </TransitionLink>
                </li>
              </ul>
              <Socials />
            </div>
          </div>
        )}
        <div className="col-span-3 grid md:grid-cols-3">
          <div className="col-span-2 md:grid md:grid-cols-2 gap-x-3">
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
            <Input
              id="company"
              name="company"
              type="text"
              placeholder="Company's Name"
              autoComplete="organization"
              className="col-span-2"
              required
            />
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
            <Input
              id="size"
              name="size"
              type="number"
              placeholder="Your company size (current staff number)"
              className="col-span-2"
              autoComplete="off"
              required
            />
            <Input
              id="staff"
              name="staff"
              type="number"
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
          </div>
          {!socials && (
            <div
              className="relative max-md:hidden w-full h-full pointer-events-none select-none"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 50%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 50%, transparent 100%)",
              }}
            >
              <Image
                width={1080}
                height={1080}
                alt="InteractiveWorker"
                src={"/team-2026/GABRIEL/gabriel_01.png"}
                className="absolute inset-0 object-top object-cover w-full h-full"
              />
            </div>
          )}
        </div>
        <h4 className="font-medium md:text-2xl text-xl mt-4 md:col-span-2 col-span-1 text-iw-red-2">
          Choose your Professional
        </h4>
        <div className="grid md:grid-cols-3 gap-3 md:col-span-3">
          <Select
            id="professional"
            required
            multiple
            value={professionals}
            onChange={setProfessionals}
          >
            {professionalOptions.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Select>
          <div className="md:col-span-2 col-span-1">
            <Textarea
              id="message"
              name="message"
              placeholder="What's your question? Or what kind of outsourcing help do you need?"
              autoComplete="off"
              required
              rows={isMobile ? 2 : 1}
            />
          </div>
        </div>
        <div className="col-span-3 grid md:grid-cols-[auto_auto] grid-cols-1 gap-3 py-4">
          <p className="max-md:text-xs max-md:text-center">
            Messages and data rates may apply.
            <br className="md:hidden" /> (Message frequency will vary).
            <br /> Reply STOP to opt-out of messaging.
          </p>
          <div className="flex flex-col md:items-end">
            <div className="md:w-max w-full">
              <div className="flex items-center gap-2">
                <Checkbox id="agree" name="agree" required />

                <Label htmlFor="agree" className="flex">
                  <span className="flex text-black">
                    I agree with the&nbsp;
                    <TransitionLink
                      href="/policy"
                      className="text-iw-red-1 hover:underline"
                    >
                      Privacy Policy
                    </TransitionLink>
                  </span>
                </Label>
              </div>
              <FormButton
                className="mt-3 flex justify-center w-full uppercase [--primary-color:#dd272d]"
                disabled={!canSubmit}
              >
                {sending
                  ? "Sending..."
                  : // <Loader className="min-w-[2.25rem] min-h-[2.25rem] px-10" />
                    !sent
                    ? "Send mail"
                    : "Sent"}
              </FormButton>
            </div>
          </div>
        </div>
        {message && (
          <div className="text-iw-red-1 flex justify-end w-full col-span-3">
            {message}
          </div>
        )}
      </form>
    </FadeInContent>
  );
};

export default MainForm;
