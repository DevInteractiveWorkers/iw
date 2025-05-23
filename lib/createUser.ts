"use client";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

export const registerUser = async (
  email: string,
  password: string,
  referralCode: string
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Save user data + claimed referral code in Firestore
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      referralCodeClaimed: referralCode,
      createdAt: new Date(),
    });

    return user;
  } catch (error: any) {
    console.error("Error creating user:", error.message);
    throw error;
  }
};

import { signInAnonymously } from "firebase/auth";

export const registerAnonymously = async (
  email: string,
  referralCode: string
) => {
  try {
    // 1️⃣ Check if referral code exists
    const codeRef = doc(db, "referral-codes", referralCode);
    const codeSnap = await getDoc(codeRef);

    if (!codeSnap.exists()) {
      throw new Error("Invalid referral code.");
    }

    // 2️⃣ Sign in anonymously
    const { user } = await signInAnonymously(auth);

    // 3️⃣ Save user info in Firestore
    await setDoc(doc(db, "users", user.uid), {
      email: email,
      referralCodeClaimed: referralCode,
      claimedAt: new Date(),
    });

    return { success: true, message: "Referral code claimed successfully!" };
  } catch (error: any) {
    console.error("Error claiming referral code:", error);
    return { success: false, message: error.message || "An error occurred." };
  }
};
