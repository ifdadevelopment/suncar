import { NextResponse } from "next/server";
import connectDB from "../lib/db";
import { getAllBookings } from "../services/bookingService";
import BookingChauffeur from "../models/BookingChauffeur";
import BookingRide from "../models/BookingRide";
import { sendAdminChauffeurBooking } from "../lib/sendAdminChauffeurBooking";
import { sendAdminBookingEmail } from "../lib/sendAdminBookingEmail";

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

    const bookingType = body.bookingType || "RIDE";

    const pickupLocation =
      body.pickupLocation ||
      body["pickup-location"] ||
      body["pickup-suburb"] ||
      null;

    if (!pickupLocation) {
      return NextResponse.json(
        { success: false, message: "Pickup location is required" },
        { status: 400 }
      );
    }

    const formHeading =
      body.formHeading ||
      (bookingType === "CHAUFFEUR"
        ? "Chauffeur Booking Request"
        : "Ride Booking Request");

    let payload = {
      bookingType,
      formHeading,

      fullName: body.fullName || body.name || "",
      email: body.email || "",
      phone: body.phone || "",

      pickupLocation,
      pickupDate: body.pickupDate || null,
      pickupTime: body.pickupTime || null,

      notes: body.notes || "",
      status: "pending",
    };

    if (bookingType === "CHAUFFEUR") {
      payload = {
        ...payload,
        dropoffLocation: body.dropoffLocation || body.dropoff || "",
        passengers: Number(body.passengers) || 1,
        flightNumber: body.flightNumber || "",
        vehicleType: body.vehicleType || "",
      };
    }

    if (bookingType === "RIDE") {
      payload = {
        ...payload,
        returnDate: body.returnDate || null,
      };
    }

    const Model =
      bookingType === "CHAUFFEUR"
        ? BookingChauffeur
        : BookingRide;

    // ✅ 1. SAVE TO DB (source of truth)
    const booking = await Model.create(payload);

    // ✅ 2. SEND EMAIL AFTER CREATE (NON-BLOCKING)
    setImmediate(() => {
      if (bookingType === "CHAUFFEUR") {
        sendAdminChauffeurBooking({
          ...booking.toObject(),
          dropoff: payload.dropoffLocation,
        })
          .then(() => console.log("✅ Chauffeur booking email sent"))
          .catch((err) =>
            console.error("⚠️ CHAUFFEUR EMAIL FAILED:", err.message)
          );
      } else {
        sendAdminBookingEmail({
          name: payload.fullName,
          email: payload.email,
          phone: payload.phone,
          pickupLocation: payload.pickupLocation,
          pickupDate: payload.pickupDate,
          pickupTime: payload.pickupTime,
          returnDate: payload.returnDate,
          bookingType: payload.bookingType,
        })
          .then(() => console.log("✅ Ride booking email sent"))
          .catch((err) =>
            console.error("⚠️ RIDE EMAIL FAILED:", err.message)
          );
      }
    });

    // ✅ 3. RESPOND TO CLIENT IMMEDIATELY
    return NextResponse.json(
      { success: true, data: booking },
      { status: 201 }
    );
  } catch (error) {
    console.error("BOOKING POST ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const bookingType = searchParams.get("bookingType");
    const status = searchParams.get("status");

    const data = await getAllBookings({ bookingType, status });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("BOOKING GET ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        data: [],
        message: "Failed to fetch bookings",
      },
      { status: 500 }
    );
  }
}
