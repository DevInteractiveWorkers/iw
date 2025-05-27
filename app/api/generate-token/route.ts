import { NextRequest, NextResponse } from "next/server";
import admin from "@/lib/firebaseAdmin";

export async function POST(req: NextRequest) {
  const { uid } = await req.json();
  if (uid) {
    try {
      const response = await admin.auth().getUser(uid);
      if (response) {
        try {
          const token = await admin.auth().createCustomToken(uid);
          return NextResponse.json({ token });
        } catch (tokenError) {
          console.error("Token creation failed:", tokenError);
          return NextResponse.json(
            { error: "Failed to create token" },
            { status: 500 }
          );
        }
      }
    } catch (error: any) {
      return NextResponse.json({ error: "Not Found" }, { status: 404 });
    }
  }
}
