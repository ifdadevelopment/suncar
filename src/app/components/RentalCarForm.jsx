'use client';
import { useState } from "react";
import axiosInstance from "../api/lib/axiosInstance";
import toast from "react-hot-toast";
export default function RentalCarForm({ service }) {
  const today = new Date().toISOString().split("T")[0];

  const timeSlots = Array.from({ length: 24 }, (_, i) =>
    `${String(i).padStart(2, "0")}:00`
  );

  const [formData, setFormData] = useState({
    pickupLocation: "",
    pickupDate: "",
    returnDate: "",
    pickupTime: "10:00",
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {service?.title || "Car Booking"}
        </h2>
        <p className="text-gray-500 mt-1">
          Fill in the details to confirm your booking
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Pickup Location
          </label>
          <select
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>Choose Your Location</option>
            <option value="Sunbury - Jackson Road">Sunbury</option>
            <option value="Melbourne Airport">Melbourne Airport</option>
            <option value="Melbourne CBD">Melbourne CBD</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Pickup Time
          </label>
          <select
            name="pickupTime"
            value={formData.pickupTime}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {timeSlots.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>

        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Pickup Date
          </label>
          <input
            type="date"
            name="pickupDate"
            value={formData.pickupDate}
            min={today}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Return Date
          </label>
          <input
            type="date"
            name="returnDate"
            value={formData.returnDate}
            min={formData.pickupDate || today}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>
      </div>
      <div className="border-t pt-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Full name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Your Phone
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="+61 xxx xxx xxx"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="text-center pt-4">
        <button
          type="submit"
          className="w-full md:w-auto bg-blue-600 text-white px-10 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg"
        >
          Confirm Booking
        </button>
      </div>
    </form>
  );
}
