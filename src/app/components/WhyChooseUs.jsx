"use client";

import React from "react";
import {
  FaCar,
  FaDollarSign,
  FaTools,
  FaPhoneAlt,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: FaDollarSign,
    title: "Fair & Transparent Pricing",
    desc: "Simple weekly rates starting from $170 with no hidden costs. Easy payments that match your earnings.",
  },
  {
    id: 2,
    icon: FaCar,
    title: "Fully Serviced Vehicles",
    desc: "Clean, inspected and road-ready cars so you can drive daily with total confidence.",
  },
  {
    id: 3,
    icon: FaPhoneAlt,
    title: "Local Sunbury Support",
    desc: "Direct contact with a local owner — quick responses, flexible pickup and real help.",
  },
  {
    id: 4,
    icon: FaTools,
    title: "Hassle-Free Maintenance",
    desc: "Servicing, checks and maintenance handled by us — zero stress for you.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-8 bg-white text-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_45%)]" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Why Choose <span className="text-gray-900 font-semibold">Sunbury Rentals</span>
          </h2>

          <p className="text-white-300 text-base md:text-lg leading-relaxed">
            Whether you’re driving for Uber, DiDi, deliveries or simply need a
            reliable car — we make rentals simple, flexible and affordable.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group relative bg-gray-900 border border-gray-700 rounded-2xl p-8 text-center shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-white">
                  <Icon className="text-3xl text-white/70 group-hover:text-black transition" />
                </div>

                <h3 className="text-lg font-semibold mb-3 text-white">{item.title}</h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>

                <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
