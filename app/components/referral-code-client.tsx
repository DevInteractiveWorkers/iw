"use client";

import { useState } from "react";
import { ParticlesComponent } from "./particles";
import ReferralCodeComponent from "./referral-code-component";
import { registerAnonymously } from "@/lib/createUser";

interface Props {
  code: string;
  data: any;
}

export default function ReferralCodeClient({ code, data }: Props) {
  const [email, setEmail] = useState<string>("");

  return (
    <div className="absolute h-full w-full flex justify-center items-center bg-gradient-to-b from-white  ">
      <ParticlesComponent id="particles" color="#C1272D" className="-z-10" />
      <div className="flex flex-col text-center gap-2">
        <h1 className="relative text-4xl font-bold text-white bg-iw-red-1 px-2 z-50">
          {data.reward}!
        </h1>
        <h2 className="text-4xl font-bold">Claim it Now!</h2>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const result = await registerAnonymously(email, code);
            alert(result.message);
          }}
          className="flex flex-col gap-2"
        >
          <input
            required
            type="email"
            placeholder="email@email.com"
            title="Fill with your email to claim discount."
            className="px-5 py-2 bg-gray-300 rounded-lg border-slate-400 border outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="p-5 bg-iw-red-1 text-3xl hover:bg-iw-red-2 border border-iw-red-1 transition-all rounded-lg text-white active:bg-white active:text-iw-red-1"
          >
            <strong>CLAIM NOW</strong>
          </button>
        </form>
      </div>
    </div>
  );
}
