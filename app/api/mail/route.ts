// Send Mail
import { NextRequest } from "next/server";
import { sendEmail } from "@/components/lib/sendEmail";
import { getCurrentDate } from "@/components/lib/utils";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const date = getCurrentDate().join(" / ");

  await sendEmail({
    from: process.env.NODEMAILER_USER!,
    to: "gm@interactiveworkers.com",
    // to: "web.interactiveworkers@gmail.com",
    bcc: ["info@interactiveworkers.com", "ceo@interactiveworkers.com"],
    subject: `[Client Lead] ${data.fullName} - ${data.company}`,
    heading: `${data.fullName} tried to contact you through interactiveworkers.com contact form!`,
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
