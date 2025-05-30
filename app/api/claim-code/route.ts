import { NextRequest } from "next/server";
import { sendEmail } from "@/app/components/lib/sendEmail";
import { getCurrentDate } from "@/app/components/lib/utils";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const date = getCurrentDate().join(" / ");

  await sendEmail({
    from: process.env.NODEMAILER_USER!,
    to: "juliograterolb@gmail.com",
    bcc: ["", ""],
    subject: `${data.fullName} claimed a referral code to work with us!`,
    heading: `<h1>Someone claimed:<br/>${data.reward}</h1>`,
    // date,
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
}
