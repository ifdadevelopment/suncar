import { NextResponse } from "next/server";
import VehicleType from "../models/VehicleType.model";
import { DEFAULT_VEHICLE_TYPES } from "../constants/vehicleTypes";
import connectDB from "../lib/db";

export async function GET() {
  await connectDB();

  const dbTypes = await VehicleType.find().select("name -_id");

  const merged = [
    ...DEFAULT_VEHICLE_TYPES,
    ...dbTypes.map((t) => t.name),
  ];
  const unique = [...new Set(merged)];

  return NextResponse.json({
    success: true,
    data: unique,
  });
}

export async function POST(req) {
  await connectDB();

  const { name } = await req.json();
  if (!name) {
    return NextResponse.json(
      { success: false, message: "Vehicle type required" },
      { status: 400 }
    );
  }
  if (DEFAULT_VEHICLE_TYPES.includes(name)) {
    return NextResponse.json(
      { success: false, message: "Already exists" },
      { status: 409 }
    );
  }

  const saved = await VehicleType.create({ name });
  return NextResponse.json({ success: true, data: saved });
}
