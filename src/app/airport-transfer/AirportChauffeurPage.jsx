"use client";

import { useState } from "react";
import Image from "next/image";
import { Briefcase, Clock, Building2, ShieldCheck, Phone, MessageCircle } from "lucide-react";
import RentalCarForm from "../modalpup/BookingModelForm";
import FleetSection from "../components/FleetSection";
import TestimonialSlider from "../components/TestimonialSlider";


export default function AirportChauffeurPage() {
  const [openModal, setOpenModal] = useState(false);
  const service = { title: "Corporate Chauffeur Service", type: "chauffeur" };
  const location = "Sunbury";

  return (
    <section className="w-full bg-white text-black font-sans">
      <div className="relative min-h-[360px] md:min-h-[480px]">
        <Image
          src="/thumbnail/Corporate-Chauffeur.webp"
          alt={`Corporate Chauffeur in ${location}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>

        <div className="relative z-10 max-w-6xl  mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-center gap-6">
          <div className="text-white flex-1 md:mt-20">
        <span className="inline-block mb-6 px-4 py-2 text-xs tracking-widest uppercase font-semibold border-2 border-white text-white rounded-full bg-white/10 backdrop-blur-sm animate-pulse">
          Airport transfers from $90
        </span>
            <h1 className="text-2xl md:text-3xl font-bold mb-2 leading-snug drop-shadow-lg">
              Airport Transfer Chauffeur Service  in Sunbury & Melbourne
            </h1>

            <p className="text-sm md:[14px]  text-justify mb-3 drop-shadow">
              Experience reliable and luxury airport transfers with our professional chauffeur service to the airport, offering door-to-door comfort and on-time pickups.Travel in premium vehicles with trained chauffeurs for a smooth, stress-free journey every time.Our airport transfer service delivers a refined experience inspired by Emirates Business Class chauffeur service standards.
            </p>

            <ul className="text-sm text-gray-200 mb-4 space-y-1">
              <li>✔ Professional & uniformed chauffeurs</li>
              <li>✔ Luxury executive vehicles</li>
              <li>✔ Punctual corporate pickups</li>
              <li>✔ Confidential & secure travel</li>
            </ul>

            <p className="text-gray-300 max-w-4xl mx-auto lg:mx-0 mb-12 text-md sm:text-sm">
              ✅ Flexible weekly rentals | ✅ Corporate accounts & billing | ✅ Local Sunbury support
            </p>
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
          <div className="bg-black text-white rounded-xl shadow-xl p-0 flex-1 hover:shadow-2xl transition">
            <RentalCarForm  formHeading="Airport Chauffeur Booking Request"/>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        <Feature icon={<Briefcase />} title="Business Ready" desc="Tailored for corporate travel" />
        <Feature icon={<Clock />} title="Always On Time" desc="Strict punctuality for meetings" />
        <Feature icon={<Building2 />} title="Corporate Accounts" desc="Flexible billing & contracts" />
        <Feature icon={<ShieldCheck />} title="Discreet & Secure" desc="Confidential travel service" />
      </div>
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Stress-Free Airport Transfers</h2>
          <p className="text-gray-700 text-sm  text-justify mb-2">
            Enjoy smooth and reliable airport transfers in Sunbury and Melbourne with our professional chauffeur service to the airport.
            Travel in luxury vehicles with courteous chauffeurs, ensuring on-time pickups and complete comfort.
          
            Perfect for business and leisure travel, our service is a premium alternative to airport taxi Melbourne Australia.
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
          alt={`Corporate Chauffeur Car in ${location}`}
          width={400}
          height={250}
          className="rounded-xl shadow-xl w-full h-auto"
        />
      </div>
      <FleetSection compact theme="black-white" />
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <Image
          src="/banners/rentals-cars-sunbury.webp"
          alt={`Corporate Interior in ${location}`}
          width={600}
          height={400}
          className="rounded-xl shadow-xl w-full h-auto"
        />
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Executive & Luxury Chauffeur Vehicles
          </h2>
          <p className="text-gray-700 text-justify text-sm mb-3">
            Travel across Melbourne and Victoria in refined comfort with our executive & luxury chauffeur vehicles.
            Our premium fleet of sedans and SUVs is ideal for airport transfers, corporate travel, and luxury experiences      
            Each vehicle is chauffeur-driven, immaculately maintained, and designed for comfort, privacy, and style.          </p>


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
      <section className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-1">Customer Reviews</h2>
            <p className="text-gray-300 text-sm">Trusted by professionals worldwide</p>
          </div>
          <TestimonialSlider compact theme="black-white" />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 space-y-3">
          {[
            ["Do you offer corporate contracts?", "Yes, with flexible billing & priority service."],
            ["Are chauffeurs trained?", "Yes, in etiquette and confidentiality."],
            ["Full-day bookings available?", "Hourly, daily & long-term options available."],
            ["Vehicle options?", "Premium sedans & SUVs."]
          ].map(([q, a], i) => (
            <details key={i} className="bg-gray-100 rounded p-3 hover:bg-gray-200 transition">
              <summary className="cursor-pointer font-medium text-sm md:text-base">{q}</summary>
              <p className="mt-1 text-gray-700 text-sm">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {openModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-0"
          onClick={() => setOpenModal(false)}
        >
          <div
            className="bg-white rounded-xl w-full max-w-[600px] p-0"
            onClick={(e) => e.stopPropagation()}
          >
            <RentalCarForm service={service} onClose={() => setOpenModal(false)} />
          </div>
        </div>
      )}
    </section>
  );
}

/* Feature Card */
function Feature({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md text-center hover:shadow-xl transition transform hover:-translate-y-1">
      <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center bg-gray-200 text-black rounded-full">
        {icon}
      </div>
      <h3 className="font-medium text-sm mb-1">{title}</h3>
      <p className="text-gray-600 text-xs">{desc}</p>
    </div>
  );
}
