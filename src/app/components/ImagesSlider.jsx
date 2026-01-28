'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/car-view/1.webp",
  "/car-view/2.webp",
  "/car-view/3.webp",
  "/car-view/4.webp",
];

export default function SmoothAutoSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // slide every 3 sec

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[350px] overflow-hidden rounded-xl">
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="relative min-w-full h-full">
            <Image
              src={img}
              alt="Car View"
              fill
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
