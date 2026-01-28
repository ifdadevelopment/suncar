"use client";
import Image from "next/image";

export default function FleetCard({ car, onBook }) {
  // ✅ Safe image handling
  const imageSrc =
    car?.carImages?.length > 0
      ? car.carImages[0]
      : "/cars/placeholder-car.webp";

  return (
    <div className="border rounded-lg bg-white flex-shrink-0 w-[280px] lg:w-[300px]">
      
      {/* IMAGE */}
      <div className="relative w-full h-[180px]">
        <Image
          src={imageSrc}
          alt={car?.carName || "Chauffeur Vehicle"}
          fill
          className="object-cover rounded-t-lg"
          sizes="(max-width: 1024px) 280px, 300px"
        />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-md">
          {car?.carName}
        </h3>
        <div className="flex mt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-yellow-400 text-lg">★</span>
          ))}
        </div>
        <p className="text-sm mt-2">
          No. of Passengers:{" "}
          <span className="font-semibold">
            {car?.seater || "—"}
          </span>
        </p>

        <p className="text-sm">
          Vehicle Type:{" "}
          <span className="font-semibold">
            {car?.vehicleType || "—"}
          </span>
        </p>
      </div>
    </div>
  );
}
