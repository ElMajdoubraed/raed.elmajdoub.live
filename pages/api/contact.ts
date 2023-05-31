import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  message: string;
  status?: boolean;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    res.status(401).json({
      message: `You can't send this Api`,
      status: false,
    });
  } else {
    res.status(200).json({
      message: `working on ...`,
    });
  }
}
