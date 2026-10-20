// Send Hire Mail
import { sendEmail } from "@/components/lib/sendEmail";
import { getCurrentDate } from "@/components/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<Response> {
  const data = await req.json();
  const date = getCurrentDate();
  const content = Buffer.from(data.file.data, "utf-8");

  await sendEmail({
    from: process.env.NODEMAILER_USER!,
    to: "recruitment@interactiveworkers.com",
    // to: "web.interactiveworkers@gmail.com",
    subject: `[Applicant] ${data.professional} - ${data.fullName}`,
    heading: `${data.fullName} tried to contact us through interactiveworkers.com Hire Form!`,
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
