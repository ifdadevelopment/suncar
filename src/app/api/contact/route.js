import { NextResponse } from "next/server";
import connectDB from "../lib/db";
import Contact from "../models/Contact";
import { sendAdminContactEnquiry } from "../lib/sendAdminContactEnquiry";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const contact = await Contact.create(body);
    try {
      await sendAdminContactEnquiry(contact.toObject());
    } catch (emailError) {
      console.error("ADMIN CONTACT EMAIL FAILED:", emailError.message);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Contact enquiry submitted successfully",
        data: contact,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}

export async function GET() {
  await connectDB();

  const contacts = await Contact.find().sort({ createdAt: -1 });

  return NextResponse.json({
    success: true,
    data: contacts,
  });
}
