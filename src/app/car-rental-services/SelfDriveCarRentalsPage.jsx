"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fleetCars, testimonials, accordionData } from "../data/fleetData";
import {
  Phone,
  CarFront,
  ShieldCheck,
  Clock,
  ArrowRight,
  MousePointerClick,
  Car,
} from "lucide-react";
import RentalCarForm from "../components/RentalCarForm";
import ServicePrice from "../components/ServicePrice";

/* ---------------- STEPS ---------------- */
const steps = [
  {
    id: 1,
    title: "Choose Your Car",
    desc: "Hand-picked premium vehicles for every journey.",
    icon: <CarFront size={26} />,
  },
  {
    id: 2,
    title: "Book Instantly",
    desc: "Fast & transparent booking with no hidden costs.",
    icon: <MousePointerClick size={26} />,
  },
  {
    id: 3,
    title: "Drive Freely",
    desc: "Pick up, drive & enjoy complete independence.",
    icon: <Car size={26} />,
  },
];

export default function SelfDriveCarRentalsPage() {
  const [open, setOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <section className="bg-white text-black">

      {/* HERO */}
      <Hero />

      {/* TRUST */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-4 gap-8">
        <Trust icon={<CarFront />} title="Premium Fleet" desc="Latest serviced vehicles" />
        <Trust icon={<Clock />} title="Flexible Plans" desc="Daily & long-term rentals" />
        <Trust icon={<ShieldCheck />} title="Fully Insured" desc="Drive with confidence" />
        <Trust icon={<Phone />} title="24/7 Support" desc="Always available" />
      </div>

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* VEHICLES */}
      <section id="ChooseVehicles" className="max-w-7xl mx-auto px-6 pb-28">
        <h2 className="text-4xl font-semibold text-center mt-6 mb-6">
          Choose Your Ride
        </h2>
        <p className="text-gray-600 text-center mb-5 max-w-xl mx-auto">
          Carefully curated vehicles designed for comfort and performance.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {fleetCars.map((car) => (
            <VehicleCard
              key={car.id}
              car={car}
              onEnquire={() => {
                setSelectedCar(car);
                setOpen(true);
              }}
            />
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials testimonials={testimonials} />

      {/* FAQ */}
      <FAQSection data={accordionData} />

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-xl w-full p-8 relative"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-xl"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
              <RentalCarForm car={selectedCar} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------------- PRICING ---------------- */
function PricingSection() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-semibold mb-6">
          Indicative Pricing
        </h2>

        <div className="grid sm:grid-cols-3 gap-8 mt-12">
          <div className="border rounded-2xl p-8">
            <p className="text-sm text-white-500 mb-2">Self Drive</p>
            <p className="text-2xl font-semibold">$170 / week</p>
          </div>

          <div className="border rounded-2xl p-8">
            <p className="text-sm text-white-500 mb-2">Airport Transfers</p>
            <p className="text-2xl font-semibold">$90</p>
          </div>

          <div className="border rounded-2xl p-8">
            <p className="text-sm text-white-500 mb-2">Chauffeur Service</p>
            <p className="text-2xl font-semibold">$40 / hr</p>
          </div>
        </div>

        <p className="text-sm text-white-500 mt-10">
          Final price confirmed before booking. No surprises.
        </p>
      </div>
    </section>
  );
}


/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      {/* Background Image */}
      <Image
        src="/car-view/1.webp"
        alt="Luxury Self Drive"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <span className="inline-block mb-5 px-4 py-2 text-xs tracking-widest uppercase font-semibold border border-white text-white rounded-full bg-white/10 backdrop-blur-sm">
              Weekly rentals from $170/week
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              Rental Cars in Sunbury
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white/90 mb-6">
              Affordable & Reliable Self-Drive Rentals
            </h2>

            <p className="text-gray-300 max-w-xl mx-auto lg:mx-0 mb-8 text-sm sm:text-base leading-relaxed">
              ✓ Rideshare & delivery ready <br />
              ✓ Flexible weekly rentals <br />
              ✓ Local Sunbury support
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#ChooseVehicles"
                className="bg-white text-black px-8 py-3 rounded-full font-medium flex items-center gap-2 justify-center hover:scale-105 transition"
              >
                Browse Cars <ArrowRight size={18} />
              </a>

              <a
                href="tel:+61430410450"
                className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition text-center"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full max-w-lg mx-auto lg:mx-0 bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl">
            <RentalCarForm />
          </div>

        </div>
      </div>
    </section>
  );
}



/* ---------------- HOW IT WORKS ---------------- */
function HowItWorks() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-white text-center mb-16">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="border border-white/20 rounded-2xl p-10 text-center text-white"
            >
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full border border-white">
                {step.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{step.title}</h3>
              <p className="text-sm text-gray-300">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- VEHICLE CARD ---------------- */
function VehicleCard({ car, onEnquire }) {
  return (
    <div className="border rounded-2xl overflow-hidden hover:shadow-lg transition">
      <div className="relative h-56">
        <Image
          src={car.image}
          alt={car.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-8">
        <h3 className="text-lg font-medium mb-2">{car.name}</h3>
        {/* <p className="text-xl font-semibold mt-1 mb-4">{car.price}</p> */}

        <ul className="text-sm text-gray-600  font-bold space-y-1 mb-6">
          {car.features.map((f, i) => (
            <li key={i}>• {f}</li>
          ))}
        </ul>

        <div className="flex justify-between items-center">
          <a
            href={`tel:${car.phone}`}
            className="border flex p-2 px-3 text-[14px] rounded-full hover:bg-gray-100 transition"
          >
            Call Now <Phone className="mt-1 ms-2" size={16} />
          </a>

          <button
            onClick={onEnquire}
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
          >
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
}

{/* PRICE TRANSPARENCY – Conversion boost */ }

/* ---------------- PREMIUM TESTIMONIALS ---------------- */
function Testimonials({ testimonials }) {
  if (!testimonials?.length) return null;

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16">
          Trusted by discerning travelers and professionals for our premium fleet and exceptional service.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.slice(0, 3).map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg hover:shadow-xl transition"
            >
              <div className="flex flex-col text-center items-center">
                <span className="font-semibold  text-center  text-black">{item.name}</span>
                <span className="text-gray-400 text-center  text-sm">{item.location}</span>
              </div>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                “{item.review}”
              </p>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



/* ---------------- FAQ ---------------- */
function FAQSection({ data }) {
  return (
    <section className="bg-black py-24">
      <h2 className="text-4xl font-semibold text-white text-center mb-14">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto px-6 space-y-6">
        {data.map((item, i) => (
          <details
            key={i}
            className="border border-white/20 rounded-xl p-6 text-white"
          >
            <summary className="cursor-pointer font-medium">
              {item.title}
            </summary>
            <p className="mt-4 text-gray-300">{item.content}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ---------------- TRUST ---------------- */
function Trust({ icon, title, desc }) {
  return (
    <div className="border rounded-2xl p-8 text-center hover:shadow-md transition">
      <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full border">
        {icon}
      </div>
      <h3 className="font-medium mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}
