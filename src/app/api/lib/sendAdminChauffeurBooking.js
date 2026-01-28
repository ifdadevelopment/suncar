import { transporter } from "./nodeMailer";

export const sendAdminChauffeurBooking = async (data) => {
  const adminEmail = process.env.ADMIN_EMAIL;
  if (!adminEmail) throw new Error("ADMIN_EMAIL not configured");

  const html = `
    <h2>🚘 New Chauffeur Booking Request</h2>

    <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
      <tr><td><b>Full Name</b></td><td>${data.fullName}</td></tr>
      <tr><td><b>Email</b></td><td>${data.email}</td></tr>
      <tr><td><b>Phone</b></td><td>${data.phone}</td></tr>

      <tr><td><b>Pickup Location</b></td><td>${data.pickupLocation}</td></tr>
      <tr><td><b>Drop-off</b></td><td>${data.dropoff}</td></tr>

      <tr><td><b>Pickup Date</b></td><td>${data.pickupDate}</td></tr>
      <tr><td><b>Pickup Time</b></td><td>${data.pickupTime}</td></tr>

      <tr><td><b>Passengers</b></td><td>${data.passengers}</td></tr>
      <tr><td><b>Vehicle Type</b></td><td>${data.vehicleType}</td></tr>

      <tr><td><b>Flight Number</b></td><td>${data.flightNumber || "-"}</td></tr>
      <tr><td><b>Notes</b></td><td>${data.notes || "-"}</td></tr>
    </table>

    <p style="margin-top:20px;">
      <strong>Booking Type:</strong> ${data.bookingType}<br/>
      <strong>Form:</strong> ${data.formHeading}
    </p>

    <p style="font-size:12px;color:#666;">
      📩 Submitted from website chauffeur booking form
    </p>
  `;

  await transporter.sendMail({
    from: `"Website Booking" <${process.env.EMAIL_USER}>`,
    to: adminEmail,
    subject: "🚨 New Chauffeur Booking Request",
    html,
  });
};
