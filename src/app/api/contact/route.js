import { NextResponse } from "next/server";
import connectDB from "../lib/db";
import Contact from "../models/Contact";
import { sendAdminContactEnquiry } from "../lib/sendAdminContactEnquiry";

export async function POST(req) {
  try {
    await connectDB();

    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid request data" },
        { status: 400 }
      );
    }
    const contact = await Contact.create(body);
    sendAdminContactEnquiry(contact.toObject())
      .then(() => console.log("✅ Admin contact email sent"))
      .catch((err) =>
        console.error("⚠️ ADMIN CONTACT EMAIL FAILED:", err.message)
      );
    return NextResponse.json(
      {
        success: true,
        message: "Contact enquiry submitted successfully",
        data: contact,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("CONTACT POST ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const contacts = await Contact.find().sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      data: contacts,
    });
  } catch (error) {
    console.error("CONTACT GET ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        data: [],
        message: "Failed to fetch contacts",
      },
      { status: 500 }
    );
  }
}
