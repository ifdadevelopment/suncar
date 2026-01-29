import { NextResponse } from "next/server";
import { getAllBookings } from "../services/bookingService";
import connectDB from "../lib/db";
import BookingChauffeur from "../models/BookingChauffeur";
import BookingRide from "../models/BookingRide";
import { sendAdminChauffeurBooking } from "../lib/sendAdminChauffeurBooking";
import { sendAdminBookingEmail } from "../lib/sendAdminBookingEmail";


export async function POST(req) {
  await connectDB();
  const body = await req.json();

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

  const booking = await Model.create(payload);
  try {
    if (bookingType === "CHAUFFEUR") {
      await sendAdminChauffeurBooking({
        ...payload,
        dropoff: payload.dropoffLocation,
      });
    } else {
      await sendAdminBookingEmail({
        name: payload.fullName,
        email: payload.email,
        phone: payload.phone,
        pickupLocation: payload.pickupLocation,
        pickupDate: payload.pickupDate,
        pickupTime: payload.pickupTime,
        returnDate: payload.returnDate,
        bookingType: payload.bookingType,
      });
    }
  } catch (emailError) {
    console.error("ADMIN EMAIL FAILED:", emailError.message);
  }

  return NextResponse.json(
    { success: true, data: booking },
    { status: 201 }
  );
}


export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const bookingType = searchParams.get("bookingType");
  const status = searchParams.get("status");

  const data = await getAllBookings({ bookingType, status });

  return NextResponse.json({ success: true, data });
}
