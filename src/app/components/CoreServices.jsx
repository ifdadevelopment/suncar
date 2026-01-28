"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaCarSide, FaPlaneDeparture, FaUserTie } from "react-icons/fa";

export default function CoreServices() {
  const services = [
    {
      title: "Self-Drive Car Rentals",
      points: [
        "Daily / Weekly / Monthly",
        "Ideal for personal & business use",
      ],
      icon: <FaCarSide size={36} />,
      cta: "Book Now",
      link: "/car-rental-services",
    },
    {
      title: "Airport Transfers",
      points: [
        "Melbourne Airport ↔ Sunbury",
        "Fixed pricing • 24/7 availability",
      ],
      icon: <FaPlaneDeparture size={36} />,
      cta: "Get a Quote",
      link: "/airport-transfer",
    },
    {
      title: "Chauffeur Services",
      points: [
        "Weddings • Corporate • Events",
        "Luxury & professional drivers",
      ],
      icon: <FaUserTie size={36} />,
      cta: "Enquire Now",
      link: "/chauffeur-service",
    },
  ];

  return (
    <section className="w-full py-5 px-4 md:px-20 bg-gray-50">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 text-center">
            Our Core Services
          </h2>

          <p className="mt-3 text-center text-gray-600 text-sm sm:text-base">
            Trusted by local residents for reliable, transparent & professional car hire
          </p>


      <div className="max-w-7xl mt-5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link href={service.link} className="block h-full">
              <div className="h-full bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition p-8 flex flex-col justify-between cursor-pointer">
                
                {/* Icon */}
                <div className="text-black mb-4">
                  {service.icon}
                </div>
                

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>

                  <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                    {service.points.map((point, idx) => (
                      <li key={idx}>• {point}</li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button className="mt-6 inline-block w-fit bg-black text-white px-6 py-2.5 rounded-full font-semibold hover:bg-gray-800 transition">
                  {service.cta}
                </button>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
