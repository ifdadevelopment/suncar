'use client';
import React from "react";
import { FaUserTie, FaCarSide, FaCheckCircle } from "react-icons/fa";

const OurServices = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Premium Chauffeur & Rental Car Services
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            Whether you need a professional chauffeur-driven experience or a reliable rental car,
            we offer flexible solutions designed for comfort, safety, and style.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Chauffeur Service */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition" />

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-black text-white text-2xl">
                <FaUserTie />
              </div>
              <h3 className="text-2xl text-black font-semibold">Chauffeur Service</h3>
            </div>

            <p className="text-gray-600 mb-6">
              Travel in comfort with our professional chauffeur service. Ideal for airport transfers,
              corporate travel, weddings, and special occasions across Victoria.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="global-color" /> Licensed & professional drivers
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="global-color" /> Luxury & well-maintained vehicles
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="global-color" /> On-time & stress-free travel
              </li>
            </ul>
          </div>

          {/* Rental Car Service */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition" />

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-black text-white text-2xl">
                <FaCarSide />
              </div>
              <h3 className="text-2xl text-black font-semibold">Rental Car Services</h3>
            </div>

            <p className="text-gray-600 mb-6">
              Need a car on rent? Choose from our reliable fleet for daily, weekly, or long-term use.
              Perfect for Uber drivers, personal use, or business needs.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="global-color" /> Affordable & transparent pricing
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="global-color" /> Fully serviced & road-ready cars
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="global-color" /> Flexible rental plans
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurServices;
