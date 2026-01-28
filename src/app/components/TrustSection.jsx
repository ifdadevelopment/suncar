"use client";

import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaShieldAlt,
  FaMoneyBillWave,
  FaHandshake,
  FaCar,
} from "react-icons/fa";

export default function TrustSection() {
  const points = [
    {
      icon: <FaMapMarkerAlt />,
      text: "Locally owned & operated in Sunbury",
    },
    {
      icon: <FaMoneyBillWave />,
      text: "No hidden fees",
    },
    {
      icon: <FaShieldAlt />,
      text: "Fully insured vehicles",
    },
    {
      icon: <FaCar />,
      text: "Flexible pickup & drop-off",
    },
    {
      icon: <FaHandshake />,
      text: "Friendly local support",
    },
  ];

  return (
    <section className="relative w-full py-10 px-4 md:px-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-white rounded-3xl border border-gray-200 shadow-xl p-4 md:p-6"
        >
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 text-center">
            Why Sunbury Locals Choose Us
          </h2>

          <p className="mt-3 text-center text-gray-600 text-sm sm:text-base">
            Trusted by local residents for reliable, transparent & professional car hire
          </p>

          {/* Trust Cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {points.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-200 hover:shadow-md transition"
              >
                <div className="text-black text-xl mt-1">
                  {item.icon}
                </div>
                <p className="text-gray-700 text-sm sm:text-base font-medium">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Location SEO Line */}
          <div className="mt-10 pt-6 border-t border-gray-200 text-center">
            <h3 className="text-sm sm:text-base text-gray-600">
              Proudly serving{" "}
              <span className="font-semibold text-gray-900">
                Sunbury, Craigieburn, Melton, Gisborne & Melbourne
              </span>
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
