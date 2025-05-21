"use client";
import {
  Button,
  Checkbox,
  FileInput,
  Label,
  Select,
  TextInput,
} from "flowbite-react";
import React, { useState } from "react";
import { GetHiredformData, sendGetHiredMail } from "../lib/utils";
import Image from "next/image";
import Link from "next/link";
import professionalOptions from "./professionalOptions";
import Loader, { LoadingPage } from "../loader";

const GetHired = () => {
  const [file, setFile] = useState<File | null>();
  const [sending, isSending] = useState(false);
  const [sent, isSent] = useState(false);
  const [message, setMessage] = useState("");
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: any) => {
    isSending(true);
    event.preventDefault();
    if (file != null) {
      const target = event.target;
      const arrayBuffer = await file.arrayBuffer();

      if (arrayBuffer != undefined) {
        const data: GetHiredformData = {
          fullName: target.firstname.value + " " + target.lastname.value,
          location: target.location.value,
          phone: target.phone.value,
          email: target.email.value,
          professional: target.professional.value,
          fileName: file.name,
          file: Buffer.from(arrayBuffer),
        };

        const empty = Object.values(data).filter((item) => item === "");

        const completed = empty.length === 0 && (await sendGetHiredMail(data));

        if (completed) {
          isSending(false);
          isSent(true);
          setTimeout(() => isSent(false), 5000);
          if (message) setMessage("");
          target.firstname.value = "";
          target.lastname.value = "";
          target.location.value = "";
          target.phone.value = "";
          target.email.value = "";
          target.professional.value = "";
          setFile(null); // Limpia el estado
          if (fileInputRef.current) {
            fileInputRef.current.value = ""; // Limpia el input visual
          }
        } else {
          isSending(false);
          setMessage(
            "There was a problem to contact us. Please try again later."
          );
        }
      }
    }
  };

  return (
    <form className="py-16 px-4" onSubmit={handleSubmit}>
      <h2 className="font-extrabold text-4xl text-iw-red-1 text-center uppercase mt-4">
        Do you <span className="font-light">want to join our</span> team?
      </h2>
      <div className="w-3/4 mx-auto my-8 flex flex-col justify-center items-center gap-4">
        <div className="flex md:flex-row flex-col gap-3 w-full">
          <TextInput
            className="md:basis-1/2"
            id="firstname"
            type="text"
            placeholder="First name*"
            required
            shadow
          />
          <TextInput
            className="md:basis-1/2"
            id="lastname"
            type="text"
            placeholder="Last name*"
            required
            shadow
          />
        </div>
        <div className="w-full">
          <TextInput
            id="location"
            type="text"
            placeholder="Location*"
            required
            shadow
          />
        </div>
        <div className="flex md:flex-row flex-col gap-3 w-full">
          <TextInput
            className="md:basis-1/2"
            id="phone"
            type="text"
            placeholder="Phone number*"
            required
            shadow
          />
          <TextInput
            className="md:basis-1/2"
            id="email"
            type="email"
            placeholder="Email*"
            required
            shadow
          />
        </div>
        <h3 className={`mx-auto text-center font-bold text-lg mt-4 text-black`}>
          Choose your Professional
        </h3>
        <Select className="text-white w-full" id="professional" required>
          {professionalOptions.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </Select>
        <div className="w-full">
          <h4 className="my-4 text-center">Attach your resumee here:</h4>
          <label
            htmlFor="file"
            className="flex justify-between items-center w-full bg-[#333333] text-[#999999] py-2 px-4 rounded-xl"
          >
            {file != undefined ? file!.name : "Upload cv*"}{" "}
            <Image
              className="inline"
              src={"/contact/upload-cv-icon.svg"}
              alt="Upload your CV icon"
              width={26}
              height={26}
            ></Image>
          </label>
          <FileInput
            ref={fileInputRef}
            onChange={(e) => {
              e.target.files?.length ? setFile(e.target.files[0]) : null;
            }}
            className="hidden"
            id="file"
          />
        </div>
        <div className="flex items-center justify-center gap-2">
          <Checkbox id="agree" required />
          <Label htmlFor="agree" className="flex">
            I agree with the&nbsp;
            <Link
              href="/policy"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              Privacy Policy
            </Link>
          </Label>
        </div>
        {message && <div className="text-[#ff0000]">{message}</div>}
        {sending ? (
          <div className="w-1/2 flex justify-center">
            <Loader />
          </div>
        ) : (
          <Button
            className={`uppercase  rounded-xl font-bold text-xl max-w-fit mx-auto mt-8 ${
              !sent
                ? "bg-iw-red-1"
                : "bg-[#808080] pointer-events-none cursor-not-allowed"
            } text-white`}
            type="submit"
          >
            {!sent ? "Send mail" : "Sent"}
          </Button>
        )}
      </div>
    </form>
  );
};

export default GetHired;
