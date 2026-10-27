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
import { footerNavbar, navbar } from "@/app/content/navbar";
import Socials from "../footer/socials";
import Image from "next/image";
import { FooterList } from "../footer/footer-list";
import { Toast, useToast } from "./toast";
import {
  collectFieldErrors,
  FieldRule,
  FieldTip,
  useFieldErrors,
} from "./validation";

const REQUIRED_FIELDS: FieldRule[] = [
  { id: "firstname", label: "First name" },
  { id: "lastname", label: "Last name" },
  { id: "company", label: "Company name" },
  { id: "phone", label: "Phone number" },
  { id: "email", label: "Email" },
  { id: "size", label: "Company size" },
  { id: "staff", label: "Number of staff required" },
  { id: "country", label: "Country" },
  { id: "message", label: "Message" },
];

const MainForm = ({
  heading = "Speak with our team today!",
  socials = true,
}: {
  heading?: string | React.ReactNode | false;
  socials?: boolean;
}) => {
  const [sending, isSending] = useState(false);
  const [sent, isSent] = useState(false);
  const [professionals, setProfessionals] = useState<string[]>([]);
  const isMobile = useIsMobile();
  const { toast, show, dismiss } = useToast();
  const validation = useFieldErrors();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    const errors = collectFieldErrors(form, REQUIRED_FIELDS);
    if (professionals.length === 0) {
      errors.professional = "Please select at least one professional";
    }
    if (!(form.elements.namedItem("agree") as HTMLInputElement).checked) {
      errors.agree = "Please accept the Privacy Policy";
    }
    if (Object.keys(errors).length > 0) {
      validation.flag(errors);
      show(
        "error",
        "Some required information is missing. Please check the highlighted fields.",
      );
      return;
    }

    isSending(true);

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

    let completed = false;
    try {
      completed = await sendMail(data);
    } catch (error) {
      console.error(error);
    }

    isSending(false);

    if (completed) {
      isSent(true);

      setTimeout(() => isSent(false), 5000);

      form.reset();
      setProfessionals([]);
      validation.clear();
      show("success", "Thank you! Your message has been sent.");
    } else {
      show(
        "error",
        "There was a problem to contact us. Please try again later.",
      );
    }
  };

  const { ref } = useScrollIntoView<HTMLFormElement>();
  return (
    <FadeInContent>
      <form
        ref={ref}
        className="md:grid md:grid-cols-[2fr_1fr] gap-x-6 flex flex-col"
        onSubmit={handleSubmit}
        onChange={validation.handleChange}
        noValidate
        name="Contact Form"
      >
        <Toast toast={toast} onDismiss={dismiss} />
        <div>
          {heading && (
            <SplitText
              className={`text-4xl md:text-6xl font-medium py-10 text-iw-red-2`}
              textAlign="start"
              text={heading}
            />
          )}
          <div className="md:grid md:grid-cols-2 gap-x-3">
            <FieldTip {...validation.tip("firstname")}>
              <Input
                id="firstname"
                name="firstname"
                type="text"
                placeholder="First name"
                autoComplete="given-name"
                required
                {...validation.describe("firstname")}
              />
            </FieldTip>
            <FieldTip {...validation.tip("lastname")}>
              <Input
                id="lastname"
                name="lastname"
                type="text"
                placeholder="Last name"
                autoComplete="family-name"
                required
                {...validation.describe("lastname")}
              />
            </FieldTip>
            <FieldTip {...validation.tip("company")} className="col-span-2">
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Company's Name"
                autoComplete="organization"
                required
                {...validation.describe("company")}
              />
            </FieldTip>
            <FieldTip {...validation.tip("phone")}>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone Number"
                autoComplete="tel"
                required
                {...validation.describe("phone")}
              />
            </FieldTip>
            <FieldTip {...validation.tip("email")}>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="email"
                required
                {...validation.describe("email")}
              />
            </FieldTip>
            <FieldTip {...validation.tip("size")} className="col-span-2">
              <Input
                id="size"
                name="size"
                type="number"
                placeholder="Your company size (current staff number)"
                autoComplete="off"
                required
                {...validation.describe("size")}
              />
            </FieldTip>
            <FieldTip {...validation.tip("staff")}>
              <Input
                id="staff"
                name="staff"
                type="number"
                placeholder="Number of Staff Required?"
                autoComplete="off"
                required
                {...validation.describe("staff")}
              />
            </FieldTip>
            <FieldTip {...validation.tip("country")}>
              <Input
                id="country"
                name="country"
                type="text"
                placeholder="Which country are you based in?"
                autoComplete="country-name"
                required
                {...validation.describe("country")}
              />
            </FieldTip>
          </div>
        </div>
        <div className="relative max-md:hidden w-full h-full">
          {socials ? (
            <div className="flex flex-col items-end gap-6 justify-start absolute py-10 top-0 right-0 w-max h-full gap-x-6">
              <FooterList
                items={footerNavbar.map((item, i) => (
                  <TransitionLink
                    key={`item-${i}`}
                    href={item.link}
                    className="relative after:absolute after:left-1/2 after:top-full after:w-0 after:h-px after:bg-current
                    hover:after:left-0 hover:after:w-full after:transition-all after:duration-150 active:text-iw-red-3 flex w-full justify-center"
                  >
                    {item.title}
                  </TransitionLink>
                ))}
              />
            </div>
          ) : (
            <div
              className="absolute inset-0 pointer-events-none select-none"
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
                className="object-top object-cover w-full h-full"
              />
            </div>
          )}
        </div>
        <h3 className="font-medium md:text-2xl text-xl mt-4 md:col-span-2 text-iw-red-2">
          Choose your Professional
        </h3>
        <div className="grid md:grid-cols-3 gap-3 md:col-span-2">
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
          <FieldTip {...validation.tip("message")} className="md:col-span-2">
            <Textarea
              id="message"
              name="message"
              placeholder="What's your question? Or what kind of outsourcing help do you need?"
              autoComplete="off"
              required
              rows={isMobile ? 2 : 1}
              {...validation.describe("message")}
            />
          </FieldTip>
        </div>
        <div className="md:col-span-2 grid md:grid-cols-[auto_auto] grid-cols-1 gap-3 py-4">
          <p className="max-md:text-xs max-md:text-center">
            Messages and data rates may apply.
            <br className="md:hidden" /> (Message frequency will vary).
            <br /> Reply STOP to opt-out of messaging.
          </p>
          <div className="flex flex-col md:items-end">
            <div className="md:w-max w-full">
              <FieldTip {...validation.tip("agree")} align="end">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="agree"
                    name="agree"
                    required
                    {...validation.describe("agree")}
                  />

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
              </FieldTip>
              <FormButton
                className="mt-3 flex justify-center w-full uppercase [--primary-color:#dd272d]"
                disabled={sending || validation.locked}
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
      </form>
    </FadeInContent>
  );
};

export default MainForm;
