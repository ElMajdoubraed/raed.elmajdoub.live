import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { EmailSubject, EmailTemplate } from "@/constants/Email";
type Data = {
  message: string;
  status?: boolean;
};

const user = process.env.EMAIL_ADDRESS;
const pass = process.env.EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  secure: true,
  port: 465,
  auth: { user, pass },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { code, email } = req.body;
  const verifCode = process.env.VERIF_CODE;
  if (req.method !== "POST" || code !== verifCode) {
    res.status(401).json({
      message: `You can't send this Api`,
      status: false,
    });
  } else {
    let info = await transporter.sendMail({
      from: user,
      to: email,
      subject: EmailSubject,
      html: EmailTemplate,
    });
    res.status(200).json({
      message: info.response,
    });
  }
}
