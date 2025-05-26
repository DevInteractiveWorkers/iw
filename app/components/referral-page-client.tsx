"use client";

import { useEffect, useState } from "react";
import { signInWithCustomToken } from "firebase/auth";
import { auth } from "@/lib/firebase";
import NavbarComponent from "./navbar";
import ReferralCodeClient from "./referral-code-client";
import NotFound from "../not-found";
import Loader from "./loader";

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
  const [loading, setLoading] = useState(false);
  console.log(uid, code);

  const signInAndFetch = async () => {
    if (!uid || !code) return;

    setLoading(true);
    try {
      // 🔐 Get custom token
      const res = await fetch("/api/generate-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid }),
      });
      const data = await res.json();

      if (data.token) {
        await signInWithCustomToken(auth, data.token);

        // 📡 Fetch referral data from server API route
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

  return (
    <div className="h-dvh relative flex flex-col">
      {fetchedData ? (
        <ReferralCodeClient code={code} data={fetchedData.data} />
      ) : (
        <button onClick={signInAndFetch}> hola </button>
      )}
    </div>
  );

  useEffect(() => {
    const signInAndFetch = async () => {
      console.log(uid, code);
      if (!uid || !code) return;

      setLoading(true);
      try {
        // 🔐 Get custom token
        const res = await fetch("/api/generate-token", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ uid }),
        });
        const data = await res.json();

        if (data.token) {
          await signInWithCustomToken(auth, data.token);

          // 📡 Fetch referral data from server API route
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
      <div className="h-dvh relative flex justify-center items-center">
        <div className="w-1/2">
          <Loader />
        </div>
      </div>
    );

  if (!fetchedData || !fetchedData.available) return <NotFound />;

  return (
    <div className="h-dvh relative flex flex-col">
      <div className="z-10">
        <NavbarComponent dark={true} />
      </div>
      {code && <ReferralCodeClient code={code} data={fetchedData.data} />}
    </div>
  );
}
