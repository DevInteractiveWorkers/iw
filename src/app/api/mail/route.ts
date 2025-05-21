import { NextRequest } from "next/server";
import { sendEmail } from "@/src/components/lib/sendEmail";
import { getCurrentDate } from "@/src/components/lib/utils";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const date = getCurrentDate().join(" / ");

  await sendEmail({
    from: process.env.NODEMAILER_USER!,
    to: "gm@interactiveworkers.com",
    bcc: ["info@interactiveworkers.com", "ceo@interactiveworkers.com"],
    subject: `${data.fullName} tried to contact you through interactiveworkers.com contact form`,
    heading: "Someone tried to contact us!",
    date,
    data: {
      Name: data.fullName,
      Email: data.email,
      Phone: data.phone,
      Country: data.country,
      "Company Name": data.company,
      "Company Size": data.size,
      "Number of Staff Required": data.staff,
      Professional: data.professional,
      Message: data.message,
    },
  });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
