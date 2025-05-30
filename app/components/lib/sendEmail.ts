// lib/sendEmail.ts
import nodemailer from "nodemailer";
import { getCurrentDate, GetHiredformData } from "./utils";

interface SendEmailParams {
  from: string;
  to: string | string[];
  bcc?: string | string[];
  subject: string;
  data: Record<string, string>;
  logoUrl?: string;
  heading?: string;
  attachments?: {
    content: Buffer | any;
    filename: string | undefined;
  }[];
}

export async function sendEmail({
  from,
  to,
  bcc,
  subject,
  data,
  logoUrl = "https://images2.imgbox.com/bd/6d/iKxkgI9e_o.png",
  heading = "New Submission:",
  attachments,
}: SendEmailParams): Promise<void> {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    tls: {
      rejectUnauthorized: false,
    },
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  await transporter.verify();

  const date = getCurrentDate().join(" / ");

  const tableRows = Object.entries({ Date: date, ...data })
    .map(
      ([key, value]) => `
        <tr>
            <td style="background: #c1272d; color: #FFFFFF; padding: 10px;"><b>${key}</b></td>
            <td style="background: #FFFFFF; color: #000000; padding: 10px; border-bottom: 1px solid #C1C3D1;">${value}</td>
        </tr>`
    )
    .join("");

  const html = `
    <html>
        <head>
        <link href="https://fonts.googleapis.com/css?family=Goudy+Bookletter+1911|Share+Tech" rel="stylesheet">
        </head>
        <body style="margin: auto;">
        <div style="background-color: #fff; padding: 20px; border-radius: 10px;">
            <img width="500px" height="auto" style="display: block; margin: auto; border-radius: 30px;" src="${logoUrl}" />
            <h4 style="font-weight: 400;">${heading}</h4>
            <table style="width: 100%;">${tableRows}</table>
        </div>
        </body>
    </html>
    `;

  await transporter.sendMail({
    from,
    to,
    bcc,
    subject,
    html,
    attachments, // ✅ This line adds support for file attachments
  });
}
