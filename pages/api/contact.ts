import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { EmailSubject, EmailTemplate } from "@/constants/Email";
import { PrismaClient } from "@prisma/client";

type Data = {
  message?: string;
  status?: boolean;
  contact?: any;
};

const prisma = new PrismaClient();

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
  const { code, email, name, message } = req.body;
  const verifCode = process.env.VERIF_CODE;
  if (
    ["GET", "POST"].indexOf(req.method as string) === -1 ||
    code !== verifCode
  ) {
    res.status(401).json({
      message: `You can't send this Api`,
      status: false,
    });
  } else {
    try {
      switch (req.method) {
        case "GET":
          const contacts = await prisma.contact.findMany();
          res.status(200).json({
            contact: contacts,
          });
          break;
        case "POST":
          const contact = await prisma.contact.create({
            data: {
              name,
              email,
              message,
            },
          });
          let info = await transporter.sendMail({
            from: user,
            to: email,
            subject: EmailSubject,
            html: EmailTemplate,
          });
          res.status(200).json({
            message: info.response,
            contact,
          });
          break;
      }
    } catch (e) {
      res.status(400).json({
        message: "error",
      });
    }
  }
}
