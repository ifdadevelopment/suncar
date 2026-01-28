"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Clock, Car, ShieldCheck, Phone, MessageCircle } from "lucide-react";
import RentalCarForm from "../../../app/modalpup/BookingModelForm";
import FleetSection from "../../../app/components/FleetSection";
import TestimonialSlider from "../../../app/components/TestimonialSlider";

export default function LocalChauffeurPage() {
  const [openModal, setOpenModal] = useState(false);

  const service = { title: "Local chauffeur services in", type: "chauffeur" };
  const location = "Sunbury & Melbourne";

  return (
    <section className="w-full bg-gray-50 font-sans">

      {/* HERO */}
      <div className="relative min-h-[420px] md:min-h-[520px]">
        <Image
          src="/thumbnail/Local-Chauffeur.webp"
          alt={`Local Chauffeur Service in ${location}`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-20 flex flex-col md:flex-row items-center gap-6">

          {/* LEFT CONTENT */}
          <div className="text-white flex-1">
                      {/* Badge */}
         <span className="inline-block mb-6 px-4 py-2 text-xs tracking-widest uppercase font-semibold border-2 border-white text-white rounded-full bg-white/10 backdrop-blur-sm animate-pulse">
          Chauffeur services from $40/hr
        </span>
            <h1 className="text-xl md:text-3xl font-bold mb-4 leading-snug drop-shadow-lg">
              Local Chauffeur Services in {location}
            </h1>
            <p className="text-[12px] md:text-base mb-2 drop-shadow  text-justify">
              We provide local chauffeur services with reliable coverage across Melbourne and Sunbury, tailored for daily city travel and flexible local bookings.
          
              From local chauffeur Melbourne trips to trusted local chauffeur services in Sunbury, we deliver safe, comfortable, and hassle-free journeys.
            </p>

            <ul className="text-sm text-gray-200 mb-4 space-y-1">
              <li>✔ Hourly & full-day bookings</li>
              <li>✔ Experienced city chauffeurs</li>
              <li>✔ Luxury & comfortable vehicles</li>
              <li>✔ Safe, private & hassle-free travel</li>
            </ul>
            
        {/* Description */}
        <p className="text-gray-300 max-w-4xl mx-auto lg:mx-0 mb-12 text-sm sm:text-sm">
          ✅ Rideshare & delivery ready | ✅ Flexible weekly rentals | ✅ Local Sunbury support
        </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mt-3">
              <a
                href="tel:+61430410450"
                className="border border-black text-white bg-black py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-gray-900 transition"
              >
                <Phone size={16} /> Call
              </a>
              <a
                href="https://wa.me/61430410450"
                target="_blank"
                className="border border-black text-black bg-white py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-green-100 transition"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white rounded-2xl shadow-2xl p-0 flex-1 hover:shadow-3xl transition">
            <RentalCarForm  formHeading="Local Chauffeur Booking Request" />
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-2 md:grid-cols-4 gap-6">
        <Feature icon={<MapPin />} title="City Specialists" desc="Local chauffeurs with city route expertise" />
        <Feature icon={<Clock />} title="Flexible Timings" desc="Hourly or full-day local bookings" />
        <Feature icon={<Car />} title="Comfortable Rides" desc="Premium vehicles for smooth city travel" />
        <Feature icon={<ShieldCheck />} title="Safe & Reliable" desc="Verified chauffeurs & insured vehicles" />
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Hassle-Free Local Travel</h2>
          <p className="text-gray-700 text-[14px] mb-2  text-justify">
            Our local chauffeur services are perfect for city commutes, shopping trips, meetings, and personal errands. With trusted local Chauffeur Victoria coverage, we ensure smooth and reliable travel across Melbourne.
 for city commutes, shopping trips, business meetings, sightseeing, or personal errands.
          </p>
          <p className="text-gray-700 text-[14px]  text-justify">
Relax and enjoy stress-free journeys with our local Chauffeur Melbourne professionals who handle traffic, parking, and routes with care and experience.
          </p>
          
          <div className="flex flex-wrap gap-3 mt-2">
            <a
              href="tel:+61430410450"
              className="border border-black text-white bg-black py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-gray-900 transition"
            >
              <Phone size={16} /> Call
            </a>
            <a
              href="https://wa.me/61430410450"
              target="_blank"
              className="border border-black text-black bg-white py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-green-100 transition"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </div>
        <Image
          src="/banners/rental-cars-in-victoria.webp"
          alt={`Local Chauffeur Car in ${location}`}
          width={600}
          height={400}
          className="rounded-2xl shadow-xl"
        />
      </div>

      {/* FLEET */}
      <FleetSection compact theme="black-white" />

      {/* DETAILS + POINTS */}
      <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <Image
          src="/banners/rentals-cars-sunbury.webp"
          alt={`City Chauffeur Ride in ${location}`}
          width={600}
          height={400}
          className="rounded-2xl shadow-xl"
        />
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Executive & Luxury Chauffeur Vehicles
</h2>
            <p className="text-gray-700 text-[14px]  text-justify">
Travel across Melbourne and Victoria in refined comfort with our executive & luxury chauffeur vehicles. Our premium fleet is ideal for chauffeur services Melbourne, corporate chauffeur services, and seamless airport transfers, delivering privacy, comfort, and professionalism on every journey.
          </p>
          
          <div className="flex flex-wrap gap-3 mt-2">
            <a
              href="tel:+61430410450"
              className="border border-black text-white bg-black py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-gray-900 transition"
            >
              <Phone size={16} /> Call
            </a>
            <a
              href="https://wa.me/61430410450"
              target="_blank"
              className="border border-black text-black bg-white py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-green-100 transition"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <section className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-1">What Our Customers Say</h2>
            <p className="text-gray-300 text-sm">Trusted by travelers worldwide</p>
          </div>
          <TestimonialSlider compact theme="black-white" />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-3">
          {[
            ["Can I book a local chauffeur hourly?", "Yes, our service is available on an hourly and full-day basis."],
            ["Can I make multiple stops?", "Yes, multiple stops are allowed during your booking."],
            ["Are vehicles suitable for city travel?", "We provide comfortable sedans and SUVs for city use."],
            ["Is the service available daily?", "Yes, available every day with flexible timings."]
          ].map(([q, a], i) => (
            <details key={i} className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition">
              <summary className="cursor-pointer font-medium text-sm md:text-base">{q}</summary>
              <p className="mt-2 text-gray-700 text-sm">{a}</p>
            </details>
          ))}
        </div>
      </section>

    </section>
  );
}

/* Reusable Feature Component */
function Feature({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md text-center hover:shadow-xl transition transform hover:-translate-y-1">
      <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center bg-gray-200 text-black rounded-full">
        {icon}
      </div>
      <h3 className="font-medium text-sm mb-1">{title}</h3>
      <p className="text-gray-600 text-xs">{desc}</p>
    </div>
  );
}
