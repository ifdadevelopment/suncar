"use client";

import { testimonials } from "../data/fleetData";

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-sm ${
            i < rating ? "text-yellow-500" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const TestimonialCard = ({ item }) => {
  return (
    <div className="w-[260px] sm:w-[300px] md:w-[320px] bg-white rounded-2xl p-6 shadow-md mx-3 flex flex-col">
      <StarRating rating={item.rating} />

      <h3 className="text-lg font-semibold text-gray-900 mt-3">
        {item.heading}
      </h3>

      <p className="text-gray-600 text-sm mt-2 flex-grow">
        {item.review}
      </p>

      <div className="mt-6">
        <p className="text-sm font-semibold text-gray-900">
          {item.name}
        </p>
        <p className="text-xs text-gray-500">{item.role}</p>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            What Our Drivers Say
          </h2>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            Real feedback from locals who rent with Sunbury Rentals
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-testimonial  text-justify">
            {[...testimonials, ...testimonials].map((item, index) => (
              <TestimonialCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
