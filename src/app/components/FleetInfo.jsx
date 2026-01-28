"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import BookingFormModel from "../modalpup/BookingFormModel.jsx";

export default function FleetInfo() {
  const [activeTab, setActiveTab] = useState("All");
  const [cars, setCars] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [loading, setLoading] = useState(false);

  /* ---------------- FETCH CARS ---------------- */
  const fetchCars = async (category = "All") => {
    try {
      setLoading(true);

      const url =
        category === "All"
          ? "/api/cars"
          : `/api/cars?category=${encodeURIComponent(category)}`;

      const res = await fetch(url);
      const json = await res.json();

      if (json.success) {
        setCars(json.data);

        const uniqueCategories = [
          "All",
          ...new Set(
            json.data
              .filter((c) => c.category)
              .map((c) => c.category)
          ),
        ];
        setCategories(uniqueCategories);
      }
    } catch (err) {
      console.error("Failed to load cars", err);
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- EFFECTS ---------------- */
  useEffect(() => {
    fetchCars(activeTab);
  }, [activeTab]);

  useEffect(() => {
    document.body.style.overflow = isBookingFormOpen ? "hidden" : "auto";
  }, [isBookingFormOpen]);

  /* ---------------- UI ---------------- */
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-6">
          Our Fleet
        </h1>
        <p className="text-center text-gray-500 mb-12">
          Comfortable, reliable vehicles for every journey.
        </p>

        {/* FILTERS */}
        <div className="flex justify-center gap-3 mb-14 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2 rounded-full font-medium transition
                ${
                  activeTab === category
                    ? "bg-black text-white"
                    : "bg-white border border-gray-300 hover:bg-black hover:text-white"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* LOADING */}
        {loading && (
          <p className="text-center text-gray-500">Loading vehicles...</p>
        )}

        {/* FLEET GRID */}
        {!loading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {cars.map((car) => (
              <div
                key={car._id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
              >
                {/* IMAGE */}
                <div className="relative h-64 w-full">
                  <Image
                    src={car.carImages?.[0] || "/placeholder-car.jpg"}
                    alt={car.carName}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {car.carName}
                  </h3>

                  {car.carDetails && (
                    <p className="text-sm text-gray-500 mb-4">
                      {car.carDetails}
                    </p>
                  )}

                  {/* FEATURES */}
                  {car.amenities?.length > 0 && (
                    <ul className="space-y-2 text-gray-600 text-sm mb-4">
                      {car.amenities.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <FaCheck className="text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* CTA */}
                  <button
                    onClick={() => {
                      setSelectedCar(car);
                      setIsBookingFormOpen(true);
                    }}
                    className="w-full py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition"
                  >
                    Book This Vehicle
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* BOOKING MODAL */}
      {isBookingFormOpen && selectedCar && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={() => setIsBookingFormOpen(false)}
        >
          <div
            className="relative bg-white w-full max-w-3xl rounded-3xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsBookingFormOpen(false)}
              className="absolute top-4 right-4"
            >
              <AiOutlineClose size={26} />
            </button>

            <BookingFormModel
              bookingType="RIDE"
              formHeading={`Book ${selectedCar.carName}`}
              vehicleType={selectedCar.vehicleType}
              onClose={() => setIsBookingFormOpen(false)}
            />
          </div>
        </div>
      )}
    </section>
  );
}
