"use client";

import { Label } from "flowbite-react";
import React, { useState } from "react";
import { GetHiredformData, sendGetHiredMail } from "../lib/utils";
import Image from "next/image";
import professionalOptions from "./professionalOptions";
import Input from "./input";
import Select from "./select";
import FadeInContent from "../FadeInContent";
import Checkbox from "./checkbox";
import FormButton from "../buttons/form-buttons";
import { TransitionLink } from "../link";
import FileInput from "./file";
import { Toast, useToast } from "./toast";
import {
  collectFieldErrors,
  FieldRule,
  FieldTip,
  useFieldErrors,
} from "./validation";

// location is optional in the UI, so it's not listed here.
const REQUIRED_FIELDS: FieldRule[] = [
  { id: "firstname", label: "First name" },
  { id: "lastname", label: "Last name" },
  { id: "phone", label: "Phone number" },
  { id: "email", label: "Email" },
];

const RESUME_PATTERN = /\.(pdf|docx?)$/i;

const GetHired = () => {
  const [file, setFile] = useState<File | null>(null);
  const [sending, isSending] = useState(false);
  const [sent, isSent] = useState(false);
  const [professionals, setProfessionals] = useState<string[]>([]);
  const { toast, show, dismiss } = useToast();
  const validation = useFieldErrors();

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.currentTarget;

    const errors = collectFieldErrors(target, REQUIRED_FIELDS);
    if (professionals.length === 0) {
      errors.professional = "Please select at least one area of interest";
    }
    if (!file) {
      errors.file = "Please attach your resume";
    } else if (!RESUME_PATTERN.test(file.name)) {
      errors.file = "Your resume must be a PDF, DOC or DOCX file";
    }
    if (!(target.elements.namedItem("agree") as HTMLInputElement).checked) {
      errors.agree = "Please accept the Privacy Policy";
    }
    if (Object.keys(errors).length > 0 || !file) {
      validation.flag(errors);
      show(
        "error",
        "Some required information is missing. Please check the highlighted fields.",
      );
      return;
    }

    isSending(true);

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

      const completed = await sendGetHiredMail(data);

      if (completed) {
        isSending(false);
        isSent(true);

        setTimeout(() => isSent(false), 5000);

        target.firstname.value = "";
        target.lastname.value = "";
        target.location.value = "";
        target.phone.value = "";
        target.email.value = "";
        target.professional.value = "";

        setFile(null);
        setProfessionals([]);
        validation.clear();

        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }

        show("success", "Thank you! Your application has been sent.");
      } else {
        isSending(false);
        show(
          "error",
          "There was a problem to contact us. Please try again later.",
        );
      }
    } catch (error) {
      console.error(error);

      isSending(false);
      show(
        "error",
        "There was a problem to contact us. Please try again later.",
      );
    }
  };

  return (
    <FadeInContent>
      <form
        className="grid grid-cols-1 justify-center gap-6 mb-10"
        onSubmit={handleSubmit}
        onChange={validation.handleChange}
        noValidate
        name="Get Hired Form"
      >
        <Toast toast={toast} onDismiss={dismiss} />
        {/* <div
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
            src={"/team-2026/OSWALDO/oswaldo_01.png"}
            className="absolute inset-0 object-top object-cover w-full h-full"
          />
        </div> */}
        <FadeInContent>
          <div className="md:grid md:grid-cols-2 md:gap-3">
            {/* First / Last Name */}
            <FieldTip {...validation.tip("firstname")}>
              <Input
                id="firstname"
                type="text"
                placeholder="First name"
                required
                {...validation.describe("firstname")}
              />
            </FieldTip>

            <FieldTip {...validation.tip("lastname")}>
              <Input
                id="lastname"
                type="text"
                placeholder="Last name"
                required
                {...validation.describe("lastname")}
              />
            </FieldTip>

            {/* Location */}
            <Input
              id="location"
              type="text"
              className="col-span-2"
              placeholder="Location"
            />

            {/* Phone */}
            <FieldTip {...validation.tip("phone")}>
              <Input
                id="phone"
                type="text"
                placeholder="Phone Number"
                required
                {...validation.describe("phone")}
              />
            </FieldTip>

            {/* Email */}
            <FieldTip {...validation.tip("email")}>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                required
                {...validation.describe("email")}
              />
            </FieldTip>

            {/* Professional */}
            <h4 className="font-medium md:text-2xl text-xl mt-4 md:col-span-2 text-iw-red-2">
              Select your areas of interest
            </h4>

            <FieldTip {...validation.tip("professional")}>
              <Select
                id="professional"
                required
                multiple
                value={professionals}
                onChange={(selected) => {
                  setProfessionals(selected);
                  validation.touch("professional", selected.length > 0);
                }}
                {...validation.describe("professional")}
              >
                {professionalOptions.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
              </Select>
            </FieldTip>

            {/* Resume */}
            <FieldTip {...validation.tip("file")}>
              <FileInput
                id="file"
                required
                accept=".pdf,.doc,.docx"
                placeholder="Attach your resume here:"
                file={file}
                ref={fileInputRef}
                onFileChange={(f) => {
                  setFile(f);
                  validation.touch("file", !!f && RESUME_PATTERN.test(f.name));
                }}
                {...validation.describe("file")}
              />
            </FieldTip>
          </div>
          {/* Privacy Policy */}
          <div className="flex flex-col w-full justify-center items-end">
            <div className="md:w-max w-full">
              <FieldTip {...validation.tip("agree")} align="end">
                <div className="flex items-center gap-2 md:col-span-2">
                  <Checkbox
                    id="agree"
                    required
                    className="text-iw-red-1"
                    {...validation.describe("agree")}
                  />

                  <Label htmlFor="agree" className="flex ">
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
              </FieldTip>

              {/* Submit */}
              <FormButton
                className="mt-3 flex justify-center w-full uppercase [--primary-color:#dd272d]"
                disabled={sending || validation.locked}
              >
                {sending
                  ? "Sending..."
                  : // <Loader className="max-w-[2.25rem] max-h-[2.25rem] px-10" />
                    !sent
                    ? "Send mail"
                    : "Sent"}
              </FormButton>
            </div>
          </div>
        </FadeInContent>
      </form>
    </FadeInContent>
  );
};

export default GetHired;
