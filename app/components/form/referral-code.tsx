"use client";

import { useState } from "react";
import { TextInput } from "flowbite-react";
import { claimCodeFormData } from "../lib/utils";

const ReferralCodeForm = () => {
  const [formData, setFormData] = useState({
    firstname: "Julio",
    lastname: "Graterol",
    country: "Venezuela",
    company: "Julio's C.A.",
    email: "julio.graterol@interactiveworkers.com",
    phone: "",
    code: "IW-0001-25",
    reference: "Instagram",
  });
  //   const [formData, setFormData] = useState({
  //     firstname: "",
  //     lastname: "",
  //     country: "",
  //     company: "",
  //     email: "",
  //     phone: "",
  //     code: "",
  //     reference: "",
  //   });
  const [message, setMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const data: claimCodeFormData = {
      fullName: formData.firstname + " " + formData.lastname,
      country: formData.country,
      company: formData.company,
      email: formData.email,
      code: formData.code,
      reference: formData.reference,
    };

    const code = formData.code;

    try {
      const codeRes = await fetch("/api/referral-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      if (!codeRes.ok) {
        const error = await codeRes.json();
        return;
      }

      const codeData = await codeRes.json();

      const claimRes = await fetch("/api/claim-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify({ reward: codeData.reward, ...data }),
      });

      if (!claimRes.ok) {
        const error = await claimRes.json();
        setMessage("There was an issue claiming the reward.");
        console.error(error);
        return;
      }
      console.log("xd");
      return;
      setFormData({
        firstname: "",
        lastname: "",
        country: "",
        company: "",
        email: "",
        phone: "",
        code: "",
        reference: "",
      });
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 justify-center items-center bg-white p-5 shadow-xl md:rounded-lg border border-gray-200 max-md:w-full"
    >
      <h1 className="text-3xl text-iw-red-1">
        REFERRAL <strong>CODE</strong>
      </h1>

      <div className="flex max-md:flex-col gap-2 w-full">
        <TextInput
          id="firstname"
          value={formData.firstname}
          onChange={handleChange}
          required
          type="text"
          placeholder="First name*"
          shadow
          className="md:basis-1/2 w-full"
        />
        <TextInput
          id="lastname"
          value={formData.lastname}
          onChange={handleChange}
          required
          type="text"
          placeholder="Last name*"
          shadow
          className="md:basis-1/2 w-full"
        />
      </div>

      <TextInput
        id="email"
        value={formData.email}
        onChange={handleChange}
        required
        type="email"
        placeholder="Email*"
        shadow
        className="md:basis-1/2 w-full"
      />

      <TextInput
        id="country"
        value={formData.country}
        onChange={handleChange}
        required
        type="text"
        placeholder="Country*"
        shadow
        className="md:basis-1/2 w-full"
      />

      <TextInput
        id="company"
        value={formData.company}
        onChange={handleChange}
        required
        type="text"
        placeholder="Company Name*"
        shadow
        className="md:basis-1/2 w-full"
      />

      <TextInput
        id="reference"
        value={formData.reference}
        onChange={handleChange}
        required
        type="text"
        placeholder="Where did you hear about us?*"
        shadow
        className="md:basis-1/2 w-full"
      />

      <div className="flex flex-col gap-2 text-center">
        <h2>ENTER CODE</h2>
        <TextInput
          id="code"
          value={formData.code}
          onChange={handleChange}
          required
          type="text"
          placeholder="IW-XXXX-25"
          shadow
          className="md:basis-1/2"
        />
        {message && <p className="text-iw-red-1 text-sm">{message}</p>}
        <button
          type="submit"
          className="p-5 bg-iw-red-1 text-xl hover:bg-iw-red-2 border border-iw-red-1 transition-all rounded-lg text-white active:bg-white active:text-iw-red-1 select-none"
        >
          <strong>CLAIM NOW</strong>
        </button>
      </div>
    </form>
  );
};

export default ReferralCodeForm;
