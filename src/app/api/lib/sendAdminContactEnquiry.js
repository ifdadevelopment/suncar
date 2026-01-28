import { transporter } from "./nodeMailer";

export const sendAdminContactEnquiry = async (data) => {
  const adminEmail = process.env.ADMIN_EMAIL;
  if (!adminEmail) throw new Error("ADMIN_EMAIL not set");

  const html = `
    <h2>📩 New Website Enquiry</h2>

    <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
      <tr><td><b>Full Name</b></td><td>${data.fullName}</td></tr>
      <tr><td><b>Email</b></td><td>${data.email}</td></tr>
      <tr><td><b>Phone</b></td><td>${data.phone || "-"}</td></tr>
      <tr><td><b>Service Type</b></td><td>${data.serviceType}</td></tr>
      <tr><td><b>Message</b></td><td>${data.message || "-"}</td></tr>
    </table>

    <p style="margin-top:16px;font-size:12px;color:#666;">
      📍 Source: Hero Banner Quick Quote Form
    </p>
  `;

  await transporter.sendMail({
    from: `"Website Enquiry" <${process.env.EMAIL_USER}>`,
    to: adminEmail,
    subject: "🚗 New Car Hire / Chauffeur Enquiry",
    html,
  });
};
