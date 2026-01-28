"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import axiosInstance from "../api/lib/axiosInstance";

const BookingFormModel = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const today = new Date().toISOString().split("T")[0];
  const [formData, setFormData] = useState({
    pickupLocation: "",
    pickupDate: "",
    returnDate: "",
    pickupTime: "",
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.pickupDate || !formData.returnDate) {
      toast.error("Please select pickup & return date");
      return;
    }

    if (formData.returnDate < formData.pickupDate) {
      toast.error("Return date cannot be before pickup date");
      return;
    }

    const payload = {
      bookingType: "RIDE",
      formHeading: "Rental Car Booking",
      pickupLocation: formData.pickupLocation,
      pickupDate: formData.pickupDate,
      returnDate: formData.returnDate,
      pickupTime: formData.pickupTime,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
    };

    try {
      const res = await axiosInstance.post("/api/bookings", payload);

      if (!res.data?.success) {
        throw new Error("Booking failed");
      }

      toast.success("Booking confirmed 🚗");
      setFormData({
        pickupLocation: "",
        pickupDate: "",
        returnDate: "",
        pickupTime: "10:00",
        name: "",
        phone: "",
        email: "",
      })
      e.target.reset();
    } catch (err) {
      toast.error("Failed to submit booking");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-100 p-6 md:p-10">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-black">
            Book Your Ride
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Fill in your details and our team will contact you shortly 🚗
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Ride Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <select
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            >
              <option value="" disabled>Select Pickup Location</option>
              <option value="Sunbury - Jackson Road">Sunbury</option>
              <option value="Melbourne Airport">Melbourne Airport</option>
              <option value="Melbourne CBD">Melbourne CBD</option>
            </select>


            <input
              type="date"
              name="pickupDate"
              min={today}
              value={formData.pickupDate}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 p-3 text-sm"
            />


            <input
              type="date"
              name="returnDate"
              min={formData.pickupDate || today}
              value={formData.returnDate}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 p-3 text-sm"
            />


            <input
              type="time"
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 p-3 text-sm"
            />

          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full rounded-lg border border-gray-300 p-3 text-sm"
              />

            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Your Phone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="xxxxxxxxxx"
                required
                className="w-full rounded-lg border border-gray-300 p-3 text-sm"
              />

            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Your Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                required
                className="w-full rounded-lg border border-gray-300 p-3 text-sm"
              />

            </div>

            <div className="flex items-end">
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-black text-white py-3 text-sm font-bold shadow-lg hover:scale-[1.02] transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "🚀 Send Booking Request"}
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
};

export default BookingFormModel;
