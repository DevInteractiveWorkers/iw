"use client";

import { useEffect, useState } from "react";
import { signInWithCustomToken } from "firebase/auth";
import { auth } from "@/lib/firebase";
import ReferralCodeClient from "./referral-code-client";
import Loader from "./loader";
import { NotFound } from "../not-found";

export interface ParamsProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string };
}

export default function ReferralPageClient({
  params,
  searchParams,
}: ParamsProps) {
  const code = searchParams.c;
  const uid = params.i;
  const [fetchedData, setFetchedData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const signInAndFetch = async () => {
      if (!uid || !code) return;
      setLoading(true);
      try {
        const res = await fetch("/api/generate-token", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ uid }),
        });
        const data = await res.json();

        if (data.token) {
          await signInWithCustomToken(auth, data.token);

          const fetchRes = await fetch("/api/get-referral-with-uid", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ uid, code }),
          });

          const fetchData = await fetchRes.json();
          setFetchedData(fetchData);
        } else {
          console.error("No token received:", data.error);
        }
      } catch (err) {
        console.error("Failed to sign in or fetch referral:", err);
      }
      setLoading(false);
    };

    signInAndFetch();
  }, [uid, code]);

  if (loading)
    return (
      <div className="h-dvh w-full flex justify-center items-center">
        <div className="w-1/2 flex justify-center items-center">
          <Loader />
        </div>
      </div>
    );

  if (!fetchedData) return <NotFound />;

  return code && <ReferralCodeClient code={code} reward={fetchedData} />;
}
