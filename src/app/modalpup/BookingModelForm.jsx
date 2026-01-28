"use client";
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import axiosInstance from '../api/lib/axiosInstance';

const BookingModelForm = ({ onClose, formHeading }) => {
  const today = new Date().toISOString().split("T")[0];
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    pickupLocation: "",
    dropoff: "",
    pickupDate: "",
    pickupTime: "",
    passengers: "",
    vehicleType: "",
    flightNumber: "",
    notes: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const [loading, setLoading] = useState(false);
  const [vehicleTypes, setVehicleTypes] = useState([]);
  useEffect(() => {
    fetch("/api/vehicle-types")
      .then((r) => r.json())
      .then((j) => setVehicleTypes(j.data || []))
      .catch(() => setVehicleTypes([]));
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.target);

    const pickupDate = form.get("pickupDate");

    if (pickupDate < today) {
      toast.error("Pickup date cannot be in the past");
      setLoading(false);
      return;
    }

    const payload = {
      bookingType: "CHAUFFEUR",
      formHeading: formHeading || "Chauffeur Booking Request",

      fullName: form.get("fullName"),
      phone: form.get("phone"),
      email: form.get("email"),

      pickupLocation: form.get("pickupLocation"),
      dropoff: form.get("dropoff"),

      pickupDate,
      pickupTime: form.get("pickupTime"),

      passengers: Number(form.get("passengers")) || 1,
      vehicleType: form.get("vehicleType"),
      flightNumber: form.get("flightNumber"),
      notes: form.get("notes"),
    };

    try {
      const res = await axiosInstance.post("/api/bookings", payload);

      if (!res.data?.success) throw new Error();

      toast.success("Booking request sent successfully 🚘");
      e.target.reset();
      onClose?.();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };




  return (
    <section className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-3 md:p-5">
        <div className="text-center mb-3">
          <h2 className="text-lg md:text-xl font-bold text-gray-900">
            {formHeading || "Chauffeur Booking Request"}
          </h2>
          <p className="text-gray-500 mt-1 text-xs md:text-sm">
            Luxury chauffeur service with professional drivers & premium vehicles
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-2">
          <Section title="Personal Information">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <Input label="Full Name *" name="fullName" placeholder="John Doe" onChange={handleChange} />
              <Input label="Email Address *" name="email" type="email" placeholder="you@email.com" onChange={handleChange} />
              <Input label="Mobile Number *" name="phone" placeholder="+61 4XX XXX XXX" onChange={handleChange} />

            </div>
          </Section>

          {/* Locations */}
          <Section title="Trip Locations">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <Input label="Pickup Suburb *" name="pickupLocation" placeholder="Sunbury" onChange={handleChange} />
              <Input label="Drop-off Location *" name="dropoff" placeholder="Melbourne Airport T1" onChange={handleChange} />

              <Select
                label="Passengers *"
                name="passengers"
                options={[1, 2, 3, 4, 5]}
                onChange={handleChange}
              />
            </div>
          </Section>

          {/* Trip Details */}
          <Section title="Trip Details">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div>
                <label className="text-xs md:text-sm font-semibold text-gray-700 mb-1 block">
                  Pickup Date *
                </label>
                <input
                  type="date"
                  name="pickupDate"
                  min={today}
                  required
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-2 py-1 text-sm"
                />
              </div>

              <Input label="Pickup Time *" name="pickupTime" type="time" onChange={handleChange} />
              <Select
                label="Vehicle Type *"
                name="vehicleType"
                options={vehicleTypes}
                onChange={handleChange}
                className="text-black-500"
              />
              <Input label="Flight Number (If Any)" name="flightNumber" placeholder="QF400" onChange={handleChange} />
            </div>
          </Section>

          {/* Notes */}
          <Section title="Additional Notes">
            <textarea
              name="notes"
              rows={3}
              onChange={handleChange}
              placeholder="Luggage, return trip, child seat, extra stops..."
              className="w-full rounded-lg border border-gray-300 px-2 py-1 text-sm"
            />
          </Section>

          {/* CTA */}
          <div className="text-center pt-2">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center
              bg-black text-white px-8 py-2 rounded-full
              font-semibold text-sm shadow hover:scale-105 transition disabled:opacity-60"
            >
              {loading ? "Sending Request..." : "🚘 Send Request"}
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};
const Section = ({ title, children }) => (
  <div className="space-y-1 mb-3">
    <h3 className="text-sm md:text-base font-bold text-gray-800 border-l-2 border-black pl-2">
      {title}
    </h3>
    {children}
  </div>
);

const Input = ({ label, name, type = "text", placeholder }) => (
  <div>
    <label className="text-xs md:text-sm font-semibold text-gray-700 mb-1 block">
      {label}
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={label.includes("*")}
      className="w-full rounded-lg border border-gray-300 px-2 py-1 text-sm
      focus:ring-1 focus:ring-black outline-none transition"
    />
  </div>
);

const Select = ({ label, name, options }) => (
  <div>
    <label className="text-xs md:text-sm font-semibold text-gray-700 mb-1 block">
      {label}
    </label>
    <select
      name={name}
      required
      className="w-full rounded-lg border border-gray-300 px-2 py-1 text-sm
      text-gray-900 bg-white
      focus:ring-1 focus:ring-black outline-none transition"
    >
      <option value="" className="text-gray-500">
        Select
      </option>
      {options.map((o) => (
        <option key={o} value={o} className="text-gray-900">
          {o}
        </option>
      ))}
    </select>
  </div>
);


export default BookingModelForm;
