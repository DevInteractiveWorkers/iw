import { NextRequest, NextResponse } from "next/server";
import * as admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
  });
}

const db = admin.firestore();

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();

    if (!code) {
      return NextResponse.json({ error: "Code is required" }, { status: 400 });
    }

    // Fetch doc by its ID (code is the doc ID)
    const snapshot = await db.collection("referral-codes").doc(code).get();

    if (!snapshot.exists) {
      return NextResponse.json(
        { error: "Invalid or non-existent code" },
        { status: 404 }
      );
    }

    const docData = snapshot.data();

    return NextResponse.json({ id: snapshot.id, ...docData }, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching referral code:", error);
    console.error(error.stack);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
