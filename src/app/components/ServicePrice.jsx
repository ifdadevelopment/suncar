"use client";

import { motion } from "framer-motion";

export default function ServicePrice() {
  const pricing = [
    { title: "Weekly Rentals", value: "$170 / week" },
    { title: "Airport Transfers", value: "From $90" },
    { title: "Chauffeur Services", value: "$40 / hr" },
  ];

  return (
    <section className="w-full py-5 px-4 md:px-20 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900"
        >
          Indicative Pricing
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 mt-10 md:grid-cols-3 gap-6">
          {pricing.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
            >
              <p className="text-sm uppercase tracking-wide text-gray-500">
                {item.title}
              </p>
              <p className="mt-3 text-2xl font-bold text-black">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-sm text-gray-500">
          Final price confirmed before booking. No surprises.
        </p>
      </div>
    </section>
  );
}
    