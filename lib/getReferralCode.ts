import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import { useState } from "react";

export const getReferralById = async (value: string, uid?: string) => {
  if (!uid) return;

  try {
    // Assuming you have a "users" collection in Firestore
    const docUserRef = doc(db, "users", uid);
    const docSnap = await getDoc(docUserRef);

    if (docSnap.exists()) {
    } else {
    }
  } catch (err) {}

  const docRef = doc(db, "referral-codes", value);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();

    if (data.code === value && data.times_used < data.usage_times) {
      return { data: data, available: true };
    } else return { data: data, available: false };
  }

  return null;
};
