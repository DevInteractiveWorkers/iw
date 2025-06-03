"use client";

import { useState } from "react";
import { Button, TextInput } from "flowbite-react";
import { claimCodeFormData } from "../lib/utils";
import Loader from "../loader";

const ReferralCodeForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    country: "",
    company: "",
    email: "",
    phone: "",
    code: "",
    reference: "",
  });
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isClaimed, setIsClaimed] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleError = (error: any) => {
    setMessage(error);
    setLoading(false);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

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
        handleError(error.error);
        return;
      }

      const codeData = await codeRes.json();

      const claimRes = await fetch("/api/claim-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reward: codeData.reward, ...data }),
      });

      if (!claimRes.ok) {
        const error = await claimRes.json();
        handleError(error);
        return;
      }
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
      setIsClaimed(true);
    } catch (err) {
      console.error("Error submitting form:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 justify-center items-center bg-white p-5 shadow-xl rounded-lg border border-gray-200 max-md:w-full"
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
        {loading ? (
          <div className="flex justify-center">
            <Loader />
          </div>
        ) : (
          <Button
            type="submit"
            className={`uppercase rounded-xl font-bold text-4xl ${!isClaimed ? "bg-iw-red-1" : "bg-[#808080] pointer-events-none cursor-not-allowed"} text-white`}
          >
            {!isClaimed ? "Claim Now" : "Claimed"}
          </Button>
        )}
      </div>
    </form>
  );
};

export default ReferralCodeForm;
