// Send Mail
import { NextRequest } from "next/server";
import { sendEmail } from "@/components/lib/sendEmail";
import { getCurrentDate } from "@/components/lib/utils";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const date = getCurrentDate().join(" / ");

  // Accepts one professional (string) or several (array).
  const professionals: string[] = (
    Array.isArray(data.professional) ? data.professional : [data.professional]
  )
    .map((p: unknown) => String(p ?? "").trim())
    .filter(Boolean);

  await sendEmail({
    from: process.env.NODEMAILER_USER!,
    to: "gm@interactiveworkers.com",
    bcc: ["info@interactiveworkers.com", "ceo@interactiveworkers.com"],
    subject: `[Client Lead] ${data.fullName} - ${data.company}`,
    heading: `${data.fullName} tried to contact you through interactiveworkers.com contact form!`,
    data: {
      "Date (DD/MM/YY)": `${date[0]} / ${date[1]} / ${date[2]}`,
      Name: data.fullName,
      Email: data.email,
      Phone: data.phone,
      Country: data.country,
      "Company Name": data.company,
      "Company Size": data.size,
      "Number of Staff Required": data.staff,
      [professionals.length > 1 ? "Professionals" : "Professional"]:
        professionals.join(", "),
      Message: data.message,
    },
  });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
