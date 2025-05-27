"use client";

import React, { useEffect, useState } from "react";
import { ParticlesComponent } from "./particles";
import { registerAnonymously } from "@/lib/createUser";
import { TextInput } from "flowbite-react";
import Loader from "./loader";

interface Props {
  code: string;
  reward: any;
}

export default function ReferralCodeClient({ code, reward }: Props) {
  const [data, setReward] = useState(reward.data);
  const [available, setAvailable] = useState(reward.available);
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [isClaimed, setIsClaimed] = useState<{
    success: boolean;
    message: any;
  }>();

  const claimCode = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const result = await registerAnonymously(email, code);
    setIsClaimed(result);
    setLoading(false);
  };

  if (!available) {
    return (
      <ReferralCodeClientLayout>
        <div className="flex flex-col text-center gap-2">
          <h1 className="relative text-4xl font-bold px-2 z-50">
            Reward no longer available
          </h1>
        </div>
      </ReferralCodeClientLayout>
    );
  }

  if (isClaimed && isClaimed.success) {
    return (
      <ReferralCodeClientLayout>
        <div className="flex flex-col text-center gap-2">
          <h1 className="relative text-4xl font-bold px-2 z-50">
            {isClaimed.success ? "Claimed!" : "Unavailable"}
          </h1>
          <h2>{isClaimed.message}</h2>
        </div>
      </ReferralCodeClientLayout>
    );
  }

  return (
    <ReferralCodeClientLayout>
      <div className="flex flex-col text-center gap-2">
        <h1 className="relative text-4xl font-bold text-white px-2 py-1 z-50">
          {data.reward}!
          <div className="bg-iw-red-1 absolute top-0 left-0 w-full h-full -z-10 animate-wide-x "></div>
        </h1>
        <h2 className="text-4xl font-bold">Claim it NOW!</h2>
        <form
          onSubmit={async (e) => {
            await claimCode(e);
          }}
          className="flex flex-col gap-2"
        >
          <TextInput
            id="email"
            required
            type="email"
            placeholder="email@email.com"
            title="Fill with your email to claim data."
            onChange={(e) => setEmail(e.target.value)}
            shadow
            className="md:basis-1/2"
          />
          {loading ? (
            <div className="w-full flex justify-center">
              <Loader />
            </div>
          ) : (
            <button
              type="submit"
              className="p-5 bg-iw-red-1 text-3xl hover:bg-iw-red-2 border border-iw-red-1 transition-all rounded-lg text-white active:bg-white active:text-iw-red-1 select-none"
            >
              <strong>CLAIM NOW</strong>
            </button>
          )}
        </form>
      </div>
    </ReferralCodeClientLayout>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

const ReferralCodeClientLayout = ({ children }: LayoutProps) => {
  return (
    <div className="absolute h-full w-full flex justify-center items-center bg-gradient-to-b from-white">
      <ParticlesComponent id="particles" color="#C1272D" className="-z-10" />
      {children}
    </div>
  );
};
