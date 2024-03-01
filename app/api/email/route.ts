import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface MailOptions {
  from: string;
  to: string;
  subject: string;
  text: string;
}

async function sendMail(mailOptions: MailOptions): Promise<string> {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL!,
      pass: process.env.MY_PASSWORD!,
    },
  });

  return new Promise((resolve, reject) => {
    transport.sendMail(mailOptions, function (err) {
      if (!err) {
        resolve("Email sent");
      } else {
        reject(err.message);
      }
    });
  });
}

async function POST(request: { json: () => Promise<any> }) {
  const { name, email, company, startDate, details } = await request.json();

  const mailOptions: MailOptions = {
    from: process.env.MY_EMAIL!,
    to: process.env.MY_EMAIL!,
    subject: `Business Inquiry from ${name} - ${company}`,
    text: `Email:\n${email}\n\nTarget Start Date:\n${startDate}\n\nDetails:\n${details}`,
  };

  try {
    await sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

export default {
  POST,
};