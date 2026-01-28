import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import connectDB from "../../lib/db";
import Car from "../../models/Car.model";

export const runtime = "nodejs";

// ✅ ABSOLUTE + SAFE upload directory
const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads", "cars");

// ✅ Ensure directory exists (CRITICAL for production)
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

/* ===================== GET ===================== */
export async function GET(req, { params }) {
  await connectDB();
  const { id } = params;

  const car = await Car.findById(id);
  if (!car) {
    return NextResponse.json(
      { success: false, message: "Car not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true, data: car });
}

/* ===================== PUT ===================== */
export async function PUT(req, { params }) {
  try {
    await connectDB();
    const { id } = params;

    const formData = await req.formData();
    const car = await Car.findById(id);

    if (!car) {
      return NextResponse.json(
        { success: false, message: "Car not found" },
        { status: 404 }
      );
    }

    const serviceType = formData.get("serviceType") ?? car.serviceType;
    const keepImages = formData.getAll("keepImages");
    const newImages = formData.getAll("carImages");

    /* 🧹 Remove deleted images from disk */
    for (const img of car.carImages || []) {
      if (!keepImages.includes(img)) {
        const imgPath = path.join(
          process.cwd(),
          "public",
          img.replace(/^\/+/, "")
        );

        if (fs.existsSync(imgPath)) {
          fs.unlinkSync(imgPath);
        }
      }
    }

    /* ⬆ Upload new images */
    const uploadedImages = [];

    for (const image of newImages) {
      if (!image || image.size === 0) continue;

      if (!image.type.startsWith("image/")) continue;

      const buffer = Buffer.from(await image.arrayBuffer());
      const ext = path.extname(image.name);
      const filename = `${Date.now()}-${Math.round(
        Math.random() * 1e9
      )}${ext}`;

      fs.writeFileSync(path.join(UPLOAD_DIR, filename), buffer);

      uploadedImages.push(`/uploads/cars/${filename}`);
    }

    /* 🧠 Update fields */
    car.carImages =
      keepImages.length || uploadedImages.length
        ? [...keepImages, ...uploadedImages]
        : car.carImages;

    car.carName = formData.get("carName") ?? car.carName;
    car.serviceType = serviceType;
    car.seater = Number(formData.get("seater")) || car.seater;
    car.carDetails = formData.get("carDetails") ?? car.carDetails;
    car.vehicleType = formData.get("vehicleType") ?? car.vehicleType;

    if (serviceType === "RENTAL") {
      const rentalPrice = Number(formData.get("rentalPrice"));
      const category = formData.get("category");
      const amenities = formData.getAll("amenities").filter(Boolean);

      if (!rentalPrice || !category || amenities.length === 0) {
        return NextResponse.json(
          {
            success: false,
            message:
              "Rental cars require price, category, and amenities",
          },
          { status: 400 }
        );
      }

      car.rentalPrice = rentalPrice;
      car.category = category;
      car.amenities = amenities;
    } else {
      car.rentalPrice = undefined;
      car.category = undefined;
      car.amenities = undefined;
    }

    await car.save();

    return NextResponse.json({
      success: true,
      message: "Car updated successfully",
      data: car,
    });
  } catch (error) {
    console.error("UPDATE CAR ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

/* ===================== DELETE ===================== */
export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const { id } = params;

    const car = await Car.findById(id);
    if (!car) {
      return NextResponse.json(
        { success: false, message: "Car not found" },
        { status: 404 }
      );
    }

    /* 🗑 Delete images from disk */
    for (const img of car.carImages || []) {
      const imgPath = path.join(
        process.cwd(),
        "public",
        img.replace(/^\/+/, "")
      );

      if (fs.existsSync(imgPath)) {
        fs.unlinkSync(imgPath);
      }
    }

    await car.deleteOne();

    return NextResponse.json({
      success: true,
      message: "Car and images deleted successfully",
    });
  } catch (error) {
    console.error("DELETE CAR ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
