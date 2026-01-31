import { NextResponse } from "next/server";
import connectDB from "../lib/db";
import Car from "../models/Car.model";
import cloudinary from "../lib/cloudinary";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    await connectDB();

    const formData = await req.formData();
    const images = formData.getAll("carImages");
    const serviceType = formData.get("serviceType");

    if (!images || images.length === 0 || images[0].size === 0) {
      return NextResponse.json(
        { success: false, message: "Car images are required" },
        { status: 400 }
      );
    }
    const uploadedImages = [];

    for (const image of images) {
      if (!image.type.startsWith("image/")) continue;

      const buffer = Buffer.from(await image.arrayBuffer());
      const base64 = buffer.toString("base64");
      const dataUri = `data:${image.type};base64,${base64}`;

      const uploadResult = await cloudinary.uploader.upload(dataUri, {
        folder: "cars",
        resource_type: "image",
        transformation: [
          { quality: "auto" },
          { fetch_format: "auto" },
        ],
      });

      uploadedImages.push(uploadResult.secure_url);
    }

    const carData = {
      carName: formData.get("carName"),
      serviceType,
      seater: Number(formData.get("seater")),
      carDetails: formData.get("carDetails"),
      vehicleType: formData.get("vehicleType"),
      carImages: uploadedImages,
    };
    if (serviceType === "RENTAL") {
      const rentalPrice = Number(formData.get("rentalPrice"));
      const category = formData.get("category");
      const amenities = formData.getAll("amenities").filter(Boolean);

      if (!rentalPrice || !category || amenities.length === 0) {
        return NextResponse.json(
          {
            success: false,
            message: "Rental cars require price, category & amenities",
          },
          { status: 400 }
        );
      }

      carData.rentalPrice = rentalPrice;
      carData.category = category;
      carData.amenities = amenities;
    }

    const car = await Car.create(carData);

    return NextResponse.json({
      success: true,
      message: "Car added successfully",
      data: car,
    });

  } catch (error) {
    console.error("CREATE CAR ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
export async function GET(req) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  const filter = {};
  if (category) {
    filter.category = category;
    filter.serviceType = "RENTAL";
  }

  const cars = await Car.find(filter).sort({ createdAt: -1 });

  return NextResponse.json({
    success: true,
    data: cars,
  });
}
