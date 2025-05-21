import { NextRequest, NextResponse } from "next/server";
import { getCurrentDate, smallFormData } from "@/src/components/lib/utils";
import { sendEmail } from "@/src/components/lib/sendEmail";

export async function POST(req: NextRequest): Promise<Response> {
  const data: smallFormData = await req.json();
  const date = getCurrentDate();

  const emailData = {
    "Date (DD/MM/YY)": `${date[0]} / ${date[1]} / 20${date[2]}`,
    Name: data.fullName,
    Email: data.email,
    Phone: data.phone,
  };

  await sendEmail({
    from: process.env.NODEMAILER_USER!,
    to: "gm@interactiveworkers.com",
    bcc: ["info@interactiveworkers.com", "ceo@interactiveworkers.com"],
    subject: `Affiliate Program | ${data.fullName}`,
    data: emailData,
    heading: `${data.fullName} is interested in our Affiliate Program!`,
  });

  return NextResponse.json({ status: 200, revalidated: true, now: Date.now() });
}
