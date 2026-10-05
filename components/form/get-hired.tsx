"use client";

import { Label } from "flowbite-react";
import React, { useState } from "react";
import { GetHiredformData, sendGetHiredMail } from "../lib/utils";
import Image from "next/image";
import Link from "next/link";
import professionalOptions from "./professionalOptions";
import Loader from "../loader";
import Input from "./input";
import Select from "./select";
import FadeInContent from "../FadeInContent";
import SplitText from "../text-animation/SplitText";
import Checkbox from "./checkbox";
import FormButton from "../buttons/form-buttons";
import PageDivision from "../page-division";

const GetHired = ({
  heading = (
    <>
      Do you <span className="font-light">want to join our</span> team?
    </>
  ),
  subheading = "Let's work together!",
}: {
  heading?: string | React.ReactNode | false;
  subheading?: string | React.ReactNode | false;
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [sending, isSending] = useState(false);
  const [sent, isSent] = useState(false);
  const [message, setMessage] = useState("");

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    isSending(true);
    setMessage("");

    const target = event.currentTarget;

    if (!file) {
      isSending(false);
      setMessage("Please attach your resume.");
      return;
    }

    try {
      const arrayBuffer = await file.arrayBuffer();

      const data: GetHiredformData = {
        fullName: `${target.firstname.value} ${target.lastname.value}`,
        location: target.location.value,
        phone: target.phone.value,
        email: target.email.value,
        professional: target.professional.value,
        fileName: file.name,
        file: Buffer.from(arrayBuffer),
      };

      // location is optional in the UI (no `required` on its Input), so it's
      // excluded from the completeness check below.
      const { location, ...requiredFields } = data;
      const empty = Object.values(requiredFields).filter((item) => item === "");

      const completed = empty.length === 0 && (await sendGetHiredMail(data));

      if (completed) {
        isSending(false);
        isSent(true);

        setTimeout(() => isSent(false), 5000);

        setMessage("");

        target.firstname.value = "";
        target.lastname.value = "";
        target.location.value = "";
        target.phone.value = "";
        target.email.value = "";
        target.professional.value = "";

        setFile(null);

        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        isSending(false);
        setMessage(
          "There was a problem to contact us. Please try again later.",
        );
      }
    } catch (error) {
      console.error(error);

      isSending(false);
      setMessage("There was a problem to contact us. Please try again later.");
    }
  };

  return (
    <FadeInContent>
      <PageDivision className="relative" />
      <form
        className="grid grid-cols-[auto_auto] gap-6 mb-10"
        onSubmit={handleSubmit}
        name="Get Hired Form"
      >
        <FadeInContent>
          <div className="grid grid-cols-2 gap-3">
            {/* First / Last Name */}
            <Input
              id="firstname"
              type="text"
              placeholder="First name"
              required
            />

            <Input id="lastname" type="text" placeholder="Last name" required />

            {/* Location */}
            <Input
              id="location"
              type="text"
              className="md:col-span-2"
              placeholder="Location"
            />

            {/* Phone */}
            <Input id="phone" type="text" placeholder="Phone Number" required />

            {/* Email */}
            <Input id="email" type="email" placeholder="Email" required />

            {/* Professional */}
            <h4 className="font-medium md:text-2xl text-xl mt-4 md:col-span-2">
              Choose your Professional
            </h4>

            <Select id="professional" required>
              {professionalOptions.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </Select>

            {/* Resume */}
            <div className="w-full">
              <label
                htmlFor="file"
                className="py-2 my-2 border-b border-black  relative flex items-center justify-between cursor-pointer"
              >
                <span className="truncate">
                  {file ? file.name : "Attach your resume here:"}
                </span>

                <svg
                  width="25"
                  height="23"
                  viewBox="0 0 25 23"
                  fill="none"
                  className="stroke-black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1997 1L12.1997 15M12.1997 1C11.2194 1 9.38785 3.79202 8.69971 4.5M12.1997 1C13.18 1 15.0116 3.79202 15.6997 4.5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23.4 17.8C23.4 21.2748 22.6748 22 19.2 22H5.2C1.7252 22 1 21.2748 1 17.8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </label>

              <input
                ref={fileInputRef}
                id="file"
                name="file"
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(event) => {
                  const selectedFile = event.target.files?.[0];

                  if (selectedFile) {
                    setFile(selectedFile);
                    setMessage("");
                  }
                }}
              />
            </div>
          </div>
        </FadeInContent>
        {/* Privacy Policy */}
        <FadeInContent className="flex h-full justify-end items-end">
          <div className="md:w-max w-full">
            <div className="flex items-center gap-2 md:col-span-2">
              <Checkbox id="agree" required className="text-iw-red-1" />

              <Label htmlFor="agree" className="flex ">
                I agree with the&nbsp;
                <Link href="/policy" className="text-iw-red-1 hover:underline">
                  Privacy Policy
                </Link>
              </Label>
            </div>

            {/* Error */}
            {message && <div className="text-iw-red-1 flex">{message}</div>}

            {/* Submit */}
            <FormButton className="mt-3 flex justify-center w-full uppercase [--primary-color:#dd272d]">
              {sending ? (
                <Loader className="min-w-[2.25rem] min-h-[2.25rem] px-10" />
              ) : !sent ? (
                "Send mail"
              ) : (
                "Sent"
              )}
            </FormButton>
          </div>
        </FadeInContent>
      </form>
    </FadeInContent>
  );
};

export default GetHired;
