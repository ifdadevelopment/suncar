"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import axiosInstance from "../api/lib/axiosInstance";

export default function ContactNearMe() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceType: "Car Hire",
    subject: "",
    message: "",
  });

  const contactInfo = {
    address: "Jackson Road, Sunbury VIC 3429",
    email: "sunburycarrentals@gmail.com",
    phone: "+61 430 410 450",
  };

 const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post("/api/contact", form);

      if (!res.data.success) {
        throw new Error(res.data.message);
      }

      toast.success("Enquiry submitted successfully!");
      setForm({
        fullName: "",
        email: "",
        phone: "",
        serviceType: "Car Hire",
        message: "",
        formHeading: "Contact Near Me",
      });

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    }
  };


  return (
    <section className="w-full bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-20">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Chauffeur & Car Rental Services Near You
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Looking for reliable car hire or professional chauffeur services in
            Sunbury and nearby areas? Get in touch with our local team today.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          {/* MAP */}
          <div className="w-full h-[500px] rounded-xl overflow-hidden border border-gray-200">
            <iframe
              src="https://www.google.com/maps?q=Sunbury%20VIC%203429&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col"
          >
            <div className="grid grid-cols-1 gap-5">

              {/* FULL NAME */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                />
              </div>

              {/* EMAIL */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                />
              </div>

              {/* PHONE */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                />
              </div>

              {/* SERVICE TYPE */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Service Type</label>
                <select
                  name="serviceType"
                  value={form.serviceType}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                >
                  <option>Car Hire</option>
                  <option>Airport Transfer</option>
                  <option>Chauffeur Service</option>
                </select>
              </div>

            </div>

            {/* CTA */}
            <button
              type="submit"
              className="mt-8 bg-black text-white px-6 py-3 font-semibold rounded-lg hover:opacity-90 transition"
            >
              SEND ENQUIRY
            </button>

            {/* CONTACT INFO */}
            <div className="mt-8 text-sm text-gray-600 space-y-1 border-t border-gray-200 pt-4">
              <p><strong>Address:</strong> {contactInfo.address}</p>
              <p><strong>Email:</strong> {contactInfo.email}</p>
              <p><strong>Phone:</strong> {contactInfo.phone}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
