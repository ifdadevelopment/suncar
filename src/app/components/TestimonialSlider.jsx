"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "James Wilson",
    role: "Business Traveler",
    text: "Excellent airport transfer service! On time, smooth ride and very professional.",
    img: "/avatars/user1.jpg",
    rating: 5,
  },
  {
    name: "Sophia Martinez",
    role: "Frequent Flyer",
    text: "Stress-free pickup even with flight delays. Highly reliable service!",
    img: "/avatars/user2.jpg",
    rating: 5,
  },
  {
    name: "Aarav Patel",
    role: "Corporate Client",
    text: "Luxury ride with a professional chauffeur. Totally worth it.",
    img: "/avatars/user3.jpg",
    rating: 4,
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.5 }}
          className="bg-white max-w-[550px] mx-auto rounded-3xl p-8 shadow-lg"
        >
          {/* Stars */}
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-xl ${
                  i < testimonials[index].rating
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>

          <p className="text-gray-600 italic mb-6">
            “{testimonials[index].text}”
          </p>

          <div className="flex items-center gap-4">
            <Image
              src={testimonials[index].img}
              alt={testimonials[index].name}
              width={56}
              height={56}
              className="rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold text-gray-900">
                {testimonials[index].name}
              </h4>
              <p className="text-sm text-gray-500">
                {testimonials[index].role}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

{/* Controls */}
<button
  onClick={prev}
  className="absolute left-2 md:-left-3 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 hover:scale-110 transition"
>
  <ChevronLeft />
</button>

<button
  onClick={next}
  className="absolute right-2 md:-right-3 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 hover:scale-110 transition"
>
  <ChevronRight />
</button>

    </div>
  );
}
