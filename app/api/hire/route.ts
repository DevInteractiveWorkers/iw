import { sendEmail } from "@/app/components/lib/sendEmail";
import { NextRequest, NextResponse } from "next/server";
import { getCurrentDate } from "@/app/components/lib/utils";

export async function POST(req: NextRequest): Promise<Response> {
  const data = await req.json();
  const date = getCurrentDate();
  const content = Buffer.from(data.file.data, "utf-8");

  await sendEmail({
    from: process.env.NODEMAILER_USER!,
    to: "recruitment@interactiveworkers.com",
    subject: `${data.fullName} tried to contact you through interactiveworkers.com contact form`,
    heading: "Someone tried to contact us!",
    data: {
      "Date (DD/MM/YY)": `${date[0]} / ${date[1]} / ${date[2]}`,
      Name: data.fullName,
      Email: data.email,
      Phone: data.phone,
      Country: data.location,
      Professional: data.professional,
    },
    attachments: [
      {
        filename: data.fileName,
        content,
      },
    ],
  });

  return NextResponse.json({ success: true });
}
