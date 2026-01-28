"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import axiosInstance from "../api/lib/axiosInstance";

export default function HeroBannerWithForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceType: "Car Hire",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post("/api/contact", form);

      if (!res.data.success) throw new Error(res.data.message);

      toast.success("Enquiry submitted successfully!");
      setForm({
        fullName: "",
        email: "",
        phone: "",
        serviceType: "Car Hire",
        message: "",
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <section className="relative w-full min-h-[600px] overflow-hidden rounded-3xl shadow-2xl">
      <motion.img
        src="/banners/car1.jpg"
        alt="Car hire service"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4 }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Affordable & Reliable Car Hire
              <span className="block text-gray-200">
                in Sunbury & Melbourne
              </span>
            </h1>

            <p className="mt-5 text-gray-200 text-base md:text-lg max-w-xl">
              Weekly rentals from{" "}
              <b className="font-extrabold text-white">$170/week</b>{" "}
              and{" "}
              <b className="font-extrabold text-white">premium chauffeur</b>{" "}
              services for airport, business and VIP travel.
            </p>

            <p className="mt-4 text-gray-300">
              Self-drive • Airport transfers • Chauffeur service  
              <br />
              Clean, insured vehicles — ready when you need them
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+61430410450"
                className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/61430410450"
                target="_blank"
                className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition"
              >
                WhatsApp Quote
              </a>
            </div>
          </motion.div>
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white max-w-3xl rounded-2xl p-6 sm:p-8 shadow-xl"
          >
            <h3 className="text-xl font-bold mb-4">
              Get a Quick Quote
            </h3>

            <div className="grid gap-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md focus:outline-none focus:border-black"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md focus:outline-none focus:border-black"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:border-black"
              />

              <select
                name="serviceType"
                value={form.serviceType}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:border-black"
              >
                <option>Car Hire</option>
                <option>Airport Transfer</option>
                <option>Chauffeur Service</option>
              </select>

              <textarea
                name="message"
                placeholder="Your Message"
                rows="3"
                value={form.message}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:border-black"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-black text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Send Enquiry
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}
