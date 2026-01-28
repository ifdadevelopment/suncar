import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const isProd = process.env.NODE_ENV === "production";

export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: isProd,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: isProd, 
  },
});
if (!isProd) {
  transporter.verify((error) => {
    if (error) {
      console.error("❌ Email transporter error:", error);
    } else {
      console.log("✅ Email transporter ready (DEV)");
    }
  });
}
