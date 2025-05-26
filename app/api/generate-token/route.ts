import { NextRequest, NextResponse } from "next/server";
import admin from "@/lib/firebaseAdmin";

export async function POST(req: NextRequest) {
  const { uid } = await req.json();

  if (!uid) {
    return NextResponse.json({ error: "Missing UID" }, { status: 400 });
  }

  try {
    const token = await admin.auth().createCustomToken(uid);
    return NextResponse.json({ token });
  } catch (error) {
    console.error("Token creation failed:", error);
    return NextResponse.json(
      { error: "Failed to create token" },
      { status: 500 }
    );
  }
}
