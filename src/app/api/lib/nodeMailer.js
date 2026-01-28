import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const port = Number(process.env.EMAIL_PORT);
const isSecure = port === 465; 

export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port,
  secure: isSecure, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, 
  },
});
transporter.verify((error) => {
  if (error) {
    console.error("❌ SMTP VERIFY FAILED:", error.message);
  } else {
    console.log("✅ SMTP transporter ready");
  }
});
