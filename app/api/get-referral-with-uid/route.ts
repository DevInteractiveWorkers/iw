import { NextRequest, NextResponse } from "next/server";
import admin from "@/lib/firebaseAdmin";

export async function POST(req: NextRequest) {
  try {
    const { code } = await req.json();

    if (!code) {
      return NextResponse.json({ error: "Missing code" }, { status: 400 });
    }

    const db = admin.firestore();

    // Fetch referral code data
    const referralDoc = await db.collection("referral-codes").doc(code).get();
    console.log(referralDoc);

    if (!referralDoc.exists) {
      return NextResponse.json({ available: false }, { status: 200 });
    }

    const data = referralDoc.data();
    if (data) {
      const available =
        data.code === code && data.times_used < data.usage_times;

      return NextResponse.json({ data, available }, { status: 200 });
    }
  } catch (error) {
    console.error("Error fetching referral:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
