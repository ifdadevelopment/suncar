import nodemailer from "nodemailer";
const port = Number(process.env.EMAIL_PORT || 587);

export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,        
  port,                            
  secure: false,                     
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,      
  },
});


console.log("🔍 NODE_ENV:", process.env.NODE_ENV);
console.log("🔍 EMAIL_HOST:", process.env.EMAIL_HOST);
console.log("🔍 EMAIL_PORT:", process.env.EMAIL_PORT);
console.log("🔍 EMAIL_USER:", process.env.EMAIL_USER);
transporter.verify((error) => {
  if (error) {
    console.error("❌ SMTP VERIFY FAILED:", error);
  } else {
    console.log("✅ SMTP transporter ready");
  }
});
