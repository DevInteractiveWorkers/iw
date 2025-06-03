import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/app/components/lib/sendEmail";
import { getCurrentDate } from "@/app/components/lib/utils";
import { error } from "console";

export async function POST(req: NextRequest) {
  const data = await req.json();
  try {
    await sendEmail({
      from: process.env.NODEMAILER_USER!,
      to: "juliograterolb@gmail.com",
      bcc: ["", ""],
      subject: `${data.fullName} claimed a referral code to work with us!`,
      heading: `<h1>Someone claimed:<br/>${data.reward}</h1>`,
      data: {
        Name: data.fullName,
        Country: data.country,
        Company: data.company,
        Email: data.email,
        Code: `<pre>${data.code}</pre>`,
        Reference: data.reference,
      },
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch {
    console.error("Error sending ");
    return NextResponse.json(
      { error: "There was an issue submitting form. Try again later" },
      { status: 500 }
    );
  }
}
