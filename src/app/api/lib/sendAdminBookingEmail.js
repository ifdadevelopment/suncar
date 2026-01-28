import { transporter } from "./nodeMailer";

export const sendAdminBookingEmail = async (booking) => {
  const adminEmail = process.env.ADMIN_EMAIL;
  if (!adminEmail) throw new Error("ADMIN_EMAIL not set");

  const html = `
    <h2>🚗 New Car Booking Received</h2>
    <table border="1" cellpadding="8" cellspacing="0">
      <tr><td><b>Name</b></td><td>${booking.name}</td></tr>
      <tr><td><b>Email</b></td><td>${booking.email}</td></tr>
      <tr><td><b>Phone</b></td><td>${booking.phone}</td></tr>
      <tr><td><b>Pickup Location</b></td><td>${booking.pickupLocation}</td></tr>
      <tr><td><b>Pickup Date</b></td><td>${booking.pickupDate}</td></tr>
      <tr><td><b>Return Date</b></td><td>${booking.returnDate}</td></tr>
      <tr><td><b>Pickup Time</b></td><td>${booking.pickupTime}</td></tr>
      <tr><td><b>Booking Type</b></td><td>${booking.bookingType}</td></tr>
    </table>
    <p style="margin-top:20px;">📩 Submitted from website booking form</p>
  `;

  await transporter.sendMail({
    from: `"Website Booking" <${process.env.EMAIL_USER}>`,
    to: adminEmail,
    subject: "🚨 New Rental Car Booking",
    html,
  });
};
