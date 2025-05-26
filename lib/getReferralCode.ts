import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase"; // <-- should be client SDK

export const getReferralById = async (value: string) => {
  if (!value) return null;

  try {
    const docRef = doc(db, "referral-codes", value);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      if (data.code === value && data.times_used < data.usage_times) {
        return { data, available: true };
      } else {
        return { data, available: false };
      }
    }
  } catch (err) {
    console.error("Error fetching referral:", err);
  }

  return null;
};
