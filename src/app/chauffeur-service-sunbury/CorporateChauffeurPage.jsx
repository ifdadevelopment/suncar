'use client';

import { useState } from "react";
import Image from "next/image";
import { Briefcase, Clock, Building2, ShieldCheck, Phone, MessageCircle } from "lucide-react";
import RentalCarForm from "../../app/modalpup/BookingModelForm";
import FleetSection from "../../app/components/FleetSection";
import TestimonialSlider from "../../app/components/TestimonialSlider";


export default function CorporateChauffeurPage() {
  const [openModal, setOpenModal] = useState(false);
  const service = { title: "Corporate Chauffeur Service", type: "chauffeur" };
  const location = "Sunbury";

  return (
    <section className="w-full bg-gray-50 font-sans">

      {/* HERO */}
      <div className="relative min-h-[420px] md:min-h-[520px]">
        <Image
          src="/thumbnail/Corporate-Chauffeur.webp"
          alt={`Corporate Chauffeur in ${location}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20 flex flex-col lg:flex-row items-center gap-8">
    
          {/* LEFT: Text */}
          <div className="text-white flex-1">
                  {/* Badge */}
        <span className="inline-block mb-6 px-4 py-2 text-xs tracking-widest uppercase font-semibold border-2 border-white text-white rounded-full bg-white/10 backdrop-blur-sm animate-pulse">
          Chauffeur services from $40/hr
        </span>
            <h1 className="text-3xl md:text-3xl font-bold mb-3 drop-shadow-lg">
              Corporate Chauffeur Services in Sunbury & Melbourne
            </h1>
            <p className="text-sm md:text-md mb-4 text-gray-200 drop-shadow  text-justify">
              We provide corporate chauffeur services with reliable coverage across Melbourne and Sunbury, tailored for time-sensitive business travel.
            </p>


            <ul className="text-sm md:text-[14px] text-gray-200 mb-4 space-y-1">
              <li>✔ Professional & uniformed chauffeurs</li>
              <li>✔ Punctual corporate pickups</li>
              <li>✔ Luxury executive vehicles</li>
              <li>✔ Confidential & secure travel</li>
            </ul>

            {/* Description */}
            <p className="text-gray-300 max-w-4xl mx-auto lg:mx-0 mb-12 text-[10px] sm:text-[13px] ">
              <b>
                ✅ Rideshare & delivery ready | ✅ Flexible weekly rentals | ✅ Local Sunbury support
              </b>
            </p>
            {/* CTA */}
            <div className="flex flex-wrap gap-3 mt-3">
              <a
                href="tel:+61430410450"
                className="border border-black text-white border border-white bg-black py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-gray-900 transition"
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

          {/* RIGHT: Form */}
          <div className="bg-black text-white rounded-2xl shadow-2xl flex-1 hover:shadow-3xl transition">
            <RentalCarForm service={service} />
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        <Feature icon={<Briefcase />} title="Business Ready" desc="Designed for corporate & executive travel" />
        <Feature icon={<Clock />} title="Always On Time" desc="Strict punctuality for meetings & schedules" />
        <Feature icon={<Building2 />} title="Corporate Accounts" desc="Flexible billing & long-term contracts" />
        <Feature icon={<ShieldCheck />} title="Discreet & Secure" desc="Confidential and professional service" />
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-16 md:pb-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Professional Corporate Transportation</h2>
          <p className="text-gray-700 mb-2  text-justify">
            Our corporate chauffeur service is designed for executives and business teams who demand punctuality, privacy, and comfort. We provide reliable corporate chauffeur services for meetings, daily office transfers, and executive travel.
          </p>
           <p className="text-gray-700 mb-2  text-justify">
            From Corporate Chauffeur Melbourne transfers to dedicated Corporate Chauffeur Sunbury services, we deliver professional, comfortable, and punctual journeys.
          </p>
          <p className="text-gray-700  text-justify">
Serving businesses across Victoria, including Corporate Chauffeur Melbourne and Corporate Chauffeur Sunbury, we deliver seamless, professional, and business-class transportation every time.          </p>

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

        <Image
          src="/banners/rental-cars-in-victoria.webp"
          alt={`Corporate Chauffeur Car in ${location}`}
          width={600}
          height={400}
          className="rounded-2xl shadow-xl w-full h-auto"
        />
      </div>

      {/* FLEET */}
      <FleetSection compact theme="black-white" />

      {/* DETAILS */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <Image
          src="/banners/rentals-cars-sunbury.webp"
          alt={`Corporate Interior in ${location}`}
          width={600}
          height={400}
          className="rounded-2xl shadow-xl w-full h-auto"
        />

        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Executive & Luxury Chauffeur Vehicles</h3>
          <p className="text-gray-700  text-justify">
Travel across Melbourne and Victoria in refined comfort with our executive & luxury chauffeur vehicles, ideal for chauffeur services Melbourne, corporate chauffeur services, and airport transfers.Our chauffeur-driven sedans and luxury SUVs deliver privacy, comfort, and punctual travel across Australia.
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
      <section className="bg-black text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-1">Customer Reviews</h2>
            <p className="text-gray-300 text-sm">Trusted by professionals worldwide</p>
          </div>
          <TestimonialSlider compact theme="black-white" />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-3">
          {[
            ["Do you offer corporate contracts?", "Yes, with flexible billing & priority service."],
            ["Are chauffeurs trained?", "Yes, in etiquette and confidentiality."],
            ["Full-day bookings available?", "Hourly, daily & long-term options available."],
            ["Vehicle options?", "Premium sedans & SUVs."]
          ].map(([q, a], i) => (
            <details key={i} className="bg-white rounded-xl p-3 hover:bg-gray-200 transition">
              <summary className="cursor-pointer font-medium text-sm md:text-base">{q}</summary>
              <p className="mt-1 text-gray-700 text-sm">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setOpenModal(false)}>
          <div className="bg-white rounded-2xl w-full max-w-[600px]" onClick={(e) => e.stopPropagation()}>
            <RentalCarForm service={service} onClose={() => setOpenModal(false)} />
          </div>
        </div>
      )}
    </section>
  );
}

/* FEATURE CARD */
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
