"use client";

import { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaCheckCircle,
} from "react-icons/fa";
import { accordionData } from "../data/fleetData";

export default function WhyWeAreTheBest() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="relative py-8 bg-cover bg-center"
      style={{ backgroundImage: 'url("/banners/rentals-cars-sunbury.webp")' , backgroundAttachment: 'fixed' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-8">
          <span className="inline-block text-sm tracking-[0.3em] font-semibold uppercase global-color mb-4">
            Excellence
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Why We Are The Best <br /> In The Industry
          </h2>

          <p className="mt-5 text-gray-300 text-sm max-w-3xl mx-auto">
            Trusted across Melbourne for professional chauffeurs,
            premium vehicles, and reliable service.
          </p>
        </div>

        {/* ================= ACCORDION GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {accordionData.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl py-0 my-0 border border-white/10 backdrop-blur-lg
                bg-white/10 transition-all duration-500
                ${isOpen ? "shadow-2xl scale-[1.01]" : "shadow-lg"}`}
              >
                {/* Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between px-6 py-1 text-left"
                >
                  <div className="flex items-center gap-4">
                    <FaCheckCircle className="global-color text-lg shrink-0" />
                    <h6 className="text-white font-semibold text-base md:text-lg">
                      {item.title}
                    </h6>
                  </div>

                  {isOpen ? (
                    <FaChevronUp className="text-white/70" />
                  ) : (
                    <FaChevronDown className="text-white/70" />
                  )}
                </button>

                {/* Content */}
                <div
                  className={`grid transition-all duration-500 ease-in-out
                  ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden px-6 pb-6">
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
