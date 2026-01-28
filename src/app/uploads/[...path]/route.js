import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET(req, { params }) {
  try {
    const filePath = path.join(
      process.cwd(),
      "uploads",
      ...params.path
    );

    if (!fs.existsSync(filePath)) {
      return new NextResponse("File not found", { status: 404 });
    }

    const buffer = fs.readFileSync(filePath);

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=31536000",
      },
    });
  } catch (err) {
    return new NextResponse("Error loading image", { status: 500 });
  }
}
