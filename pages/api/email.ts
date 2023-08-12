import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
const filename = "./constants/Email.ejs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.write(await fs.readFileSync(filename, "utf-8"));
  res.end();
}
