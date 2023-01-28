// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { SMTPClient } from "emailjs";

type Data = {
  message: string;
};

const client = new SMTPClient({
  user: process.env.mail,
  password: process.env.password,
  host: "smtp.gmail.com",
  ssl: true,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const text = `
  name= ${req.body.name}
  email= ${req.body.email}
  message= ${req.body.message}
  `;
  try {
    client.send(
      {
        from: process.env.mail!,
        to: process.env.recipient!,
        subject: "Studio Lead Inquiry",
        text,
      },
      (err, message) => {
        console.log(err || message);
      }
    );
  } catch (e) {
    res.status(400).end(JSON.stringify({ message: "Error" }));
    return;
  }

  res.status(200).end(JSON.stringify({ message: "Send Mail" }));
}
