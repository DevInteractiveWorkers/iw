"use client";

import { Checkbox, Label } from "flowbite-react";
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
      const empty = Object.values(requiredFields).filter(
        (item) => item === "",
      );

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
      <section className="grid md:grid-cols-[auto_auto] border-t md:pt-20 py-10">
        <FadeInContent>
          {(heading || subheading) && (
            <Image
              width={1080}
              height={1080}
              className="w-auto px-10 md:max-w-[400px] md:sticky md:top-20 top-10"
              alt="logo"
              src="/logo/01_Primary_Logo/Primary_Logo-04.png"
            />
          )}
        </FadeInContent>

        <form
          className="flex flex-col md:px-10 px-4 mb-10"
          onSubmit={handleSubmit}
          name="Get Hired Form"
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
              className="text-white text-2xl md:text-6xl font-medium py-10"
              text={subheading}
            />
          )}

          <FadeInContent>
            <div className="grid md:grid-cols-2 gap-3">
              {/* First / Last Name */}
              <Input
                id="firstname"
                type="text"
                placeholder="First name"
                required
              />

              <Input
                id="lastname"
                type="text"
                placeholder="Last name"
                required
              />

              {/* Location */}
              <Input
                id="location"
                type="text"
                className="md:col-span-2"
                placeholder="Location"
              />

              {/* Phone */}
              <Input
                id="phone"
                type="text"
                placeholder="Phone Number"
                required
              />

              {/* Email */}
              <Input id="email" type="email" placeholder="Email" required />

              {/* Professional */}
              <h4 className="font-medium md:text-2xl text-xl mt-4 md:col-span-2">
                Choose your Professional
              </h4>

              <div className="md:col-span-2">
                <div className="md:w-1/2">
                  <Select id="professional" required>
                    {professionalOptions.map((option, index) => (
                      <option key={index}>{option}</option>
                    ))}
                  </Select>
                </div>
              </div>

              {/* Resume */}
              <div className="md:col-span-2">
                <label
                  htmlFor="file"
                  className="py-2 my-2 border-b border-white text-white relative flex items-center justify-between cursor-pointer md:w-1/2"
                >
                  <span className="truncate">
                    {file ? file.name : "Attach your resume here:"}
                  </span>

                  <svg
                    width="25"
                    height="23"
                    viewBox="0 0 25 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.1997 1L12.1997 15M12.1997 1C11.2194 1 9.38785 3.79202 8.69971 4.5M12.1997 1C13.18 1 15.0116 3.79202 15.6997 4.5"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M23.4 17.8C23.4 21.2748 22.6748 22 19.2 22H5.2C1.7252 22 1 21.2748 1 17.8"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
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

              {/* Privacy Policy */}

              <div className="flex items-center gap-2 md:col-span-2">
                <Checkbox id="agree" required className="text-iw-red-1" />

                <Label htmlFor="agree" className="flex text-white">
                  I agree with the&nbsp;
                  <Link
                    href="/policy"
                    className="text-iw-red-1 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </Label>
              </div>

              {/* Error */}
              {message && <div className="text-iw-red-1 flex">{message}</div>}

              {/* Submit */}
              {sending ? (
                <div className="w-full flex justify">
                  <div className="w-1/2 flex">
                    <Loader />
                  </div>
                </div>
              ) : (
                <button
                  type="submit"
                  className={`uppercase rounded font-bold text-4xl px-10 py-5 max-w-fit mt-8 ${
                    !sent
                      ? "bg-iw-red-1"
                      : "bg-[#808080] pointer-events-none cursor-not-allowed"
                  } text-white`}
                >
                  {!sent ? "Send mail" : "Sent"}
                </button>
              )}
            </div>
          </FadeInContent>
        </form>
      </section>
    </FadeInContent>
  );
};

export default GetHired;
