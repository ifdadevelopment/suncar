"use client";

import { useEffect, useRef, useState } from "react";
import FleetCard from "./FleetCard";
import { initSlider } from "./FleetSlider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ModalWrapper from "./ModalWrapper";
import BookingModelForm from "../modalpup/BookingFormModel";

export default function FleetSection() {
  const sliderRef = useRef(null);
  const sliderApi = useRef(null);

  const [mounted, setMounted] = useState(false);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  /* ---------------- MOUNT ---------------- */
  useEffect(() => setMounted(true), []);

  /* ---------------- FETCH CHAUFFEUR CARS ---------------- */
  const fetchChauffeurCars = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/cars?serviceType=CHAUFFEUR");
      const json = await res.json();

      if (json.success) {
        setCars(json.data);
      }
    } catch (err) {
      console.error("Failed to fetch chauffeur cars", err);
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- INIT ---------------- */
  useEffect(() => {
    if (!mounted) return;
    fetchChauffeurCars();
  }, [mounted]);

  /* ---------------- SLIDER INIT ---------------- */
  useEffect(() => {
    if (!mounted || !sliderRef.current || cars.length === 0) return;

    sliderApi.current = initSlider(sliderRef.current);
    sliderApi.current.init();

    return () => {
      sliderApi.current?.destroy?.();
      sliderApi.current = null;
    };
  }, [mounted, cars]);

  /* ---------------- MODAL ---------------- */
  const openBookingModal = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  if (!mounted) return null;

  return (
    <>
      <section className="relative py-10 bg-[#0f0f0f] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_40%)]" />

        <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-[35%_65%] gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white space-y-7">
            <span className="inline-block text-sm tracking-[0.3em] uppercase global-color">
              Our Fleet
            </span>

            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Executive & Luxury <br /> Chauffeur Vehicles
            </h2>

            <p className="text-gray-300 text-sm text-justify leading-relaxed">
              Travel throughout Melbourne and Victoria in premium chauffeur-driven vehicles.
              Our fleet is maintained to the highest standards for comfort, safety, and reliability.
            </p>

            <div className="flex gap-5 pt-4">
              <div className="h-px w-14 bg-gradient-to-r from-global-color to-transparent" />
              <span className="text-sm tracking-wide text-gray-400">
                Premium • Professional • Private
              </span>
            </div>
          </div>

          {/* SLIDER */}
          <div className="relative group overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0f0f0f] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0f0f0f] to-transparent z-10" />

            {loading && (
              <p className="text-white text-center">Loading vehicles...</p>
            )}

            {!loading && (
              <div ref={sliderRef} className="flex gap-10 items-stretch px-6">
                {cars.map((car) => (
                  <div
                    key={car._id}
                    className="transition-all duration-500 hover:-translate-y-4 hover:scale-[1.02]"
                  >
                    <FleetCard car={car} onBook={openBookingModal} />
                  </div>
                ))}
              </div>
            )}

            {/* LEFT ARROW */}
            <button
              onClick={() => sliderApi.current?.prev()}
              className="absolute left-3 top-1/2 -translate-y-1/2
              w-14 h-14 rounded-full
              bg-white/10 backdrop-blur-md border border-white/20
              flex items-center justify-center
              text-white shadow-2xl z-20
              opacity-0 group-hover:opacity-100
              transition-all duration-300
              hover:bg-global-color hover:border-global-color"
            >
              <ChevronLeft size={24} />
            </button>

            {/* RIGHT ARROW */}
            <button
              onClick={() => sliderApi.current?.next()}
              className="absolute right-3 top-1/2 -translate-y-1/2
              w-14 h-14 rounded-full
              bg-white/10 backdrop-blur-md border border-white/20
              flex items-center justify-center
              text-white shadow-2xl z-20
              opacity-0 group-hover:opacity-100
              transition-all duration-300
              hover:bg-global-color hover:border-global-color"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {isModalOpen && selectedCar && (
        <ModalWrapper onClose={closeBookingModal}>
          <BookingModelForm
            bookingType="CHAUFFEUR"
            formHeading={`Book ${selectedCar.carName}`}
            selectedCar={selectedCar}
            onClose={closeBookingModal}
          />
        </ModalWrapper>
      )}
    </>
  );
}
