"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Phone, MessageCircle } from "lucide-react";
import { services, fleetCarData } from "../data/fleetData";
import RentalCarForm from "../components/RentalCarForm";
import Link from "next/link";

const TABS = [
  { key: "chauffeur", label: "Chauffeur Services" },
  { key: "rental", label: "Self-Drive Car Rentals" },
];

export default function OurServices() {
  const [activeTab, setActiveTab] = useState("chauffeur");
  const sliderRef = useRef(null);
  const [showArrows, setShowArrows] = useState(false);

  // Modal state
  const [openModal, setOpenModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Select data based on tab
  const currentItems =
    activeTab === "chauffeur"
      ? services
      : fleetCarData.map(car => ({
          title: car.title,
          desc: `Seats: ${car.passengers}, Luggage: ${car.luggage}`,
          image: car.image,
        }));

  const items = [...currentItems, ...currentItems, ...currentItems];

  // Reset slider position & decide if arrows are shown
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    requestAnimationFrame(() => {
      slider.scrollLeft = slider.scrollWidth / 3;
    });

    setShowArrows(currentItems.length > 3);
  }, [activeTab, currentItems.length]);

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const section = slider.scrollWidth / 3;
    if (slider.scrollLeft < section * 0.5) slider.scrollLeft += section;
    else if (slider.scrollLeft > section * 1.5) slider.scrollLeft -= section;
  };

  const slide = direction => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.querySelector("[data-card]");
    const width = card?.offsetWidth || 320;

    slider.scrollBy({ left: direction === "left" ? -width : width, behavior: "smooth" });
  };

  const chauffeurRoutes = {
    "Airport Transfers": "/chauffeur-services/airport-transfer",
    "Corporate Chauffeur": "/chauffeur-services/corporate-chauffeur",
    "Local Chauffeur": "/chauffeur-services/local-chauffeur",
  };

  const handleBookNow = item => {
    if (activeTab === "chauffeur") {
      const route = chauffeurRoutes[item?.title];
      if (route) {
        window.location.href = route;
      } else {
        console.warn("No route found for:", item?.title);
      }
    } else {
      setSelectedService(item);
      setOpenModal(true);
    }
  };

  return (
    <section id="services" className="relative bg-black text-white py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-gray-300 font-semibold tracking-widest uppercase mb-3">Our Services</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">Premium Chauffeur & Rental Cars</h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-lg">
            Airport transfers, corporate chauffeur, local chauffeur services, and self-drive car rentals with premium vehicles.
          </p>
        </div>

        {/* TABS */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-800 rounded-xl p-1 shadow-inner">
            {TABS.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-8 py-3 rounded-lg font-semibold text-sm md:text-base transition-all
                  ${activeTab === tab.key ? "bg-white text-black shadow-md" : "text-gray-400 hover:bg-white hover:text-black"}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* SLIDER */}
        <div className="relative">
          {showArrows && (
            <button
              onClick={() => slide("left")}
              className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border items-center justify-center z-10 hover:bg-gray-300 transition"
            >
              <ChevronLeft size={22} />
            </button>
          )}

          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-6"
          >
            {items.map((item, index) => (
              <ServiceCard
                key={`${activeTab}-${item.title}-${index}`}
                item={item}
                handleBookNow={handleBookNow}
              />
            ))}
          </div>

          {showArrows && (
            <button
              onClick={() => slide("right")}
              className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border items-center justify-center z-10 hover:bg-gray-300 transition"
            >
              <ChevronRight size={22} />
            </button>
          )}
        </div>
      </div>

      {/* Booking Modal */}
      {openModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setOpenModal(false)}
        >
          <div
            className="bg-white rounded-2xl w-full md:max-w-[450px] p-6 relative max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
            >
              &times;
            </button>

            {/* Booking Form */}
            <RentalCarForm
              service={selectedService}
              onClose={() => setOpenModal(false)}
            />
          </div>
        </div>
      )}
    </section>
  );
}

// ServiceCard component
function ServiceCard({ item, handleBookNow }) {
  return (
    <div
      data-card
      className="snap-start shrink-0 w-[88%] sm:w-[46%] lg:w-[31%] bg-gray-900 text-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group"
    >
      <div className="relative h-[220px] overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
        <p className="text-sm text-gray-300 mb-4">{item.desc}</p>

        {/* CTA Buttons */}
        {item.phone || item.whatsapp ? (
          <div className="flex justify-center gap-3">
            {item.phone && (
              <a
                href={`tel:${item.phone}`}
                className="border border-white text-white bg-black py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition"
              >
                <Phone size={16} /> Call
              </a>
            )}
            {item.whatsapp && (
              <a
                href={`https://wa.me/${item.whatsapp}`}
                target="_blank"
                className="border border-white text-black bg-white py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            )}
          </div>
        ) : (
          <span
            onClick={() => handleBookNow(item)}
            className="inline-block text-sm font-semibold text-white tracking-wide cursor-pointer hover:underline"
          >
            Book Now →
          </span>
        )}
      </div>
    </div>
  );
}
