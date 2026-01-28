"use client";

import React from "react";
import TestimonialSection from "../components/TestimonialSection";

export default function About() {
  return (
    <div className="pageOffset bg-white text-black">

      {/* Intro Section */}
      <section className="min-h-[300px] flex items-center justify-center border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mt-10 mb-4">
            About Sunbury Rentals
          </h1>
          <p className="text-gray-700 mb-3">
            Sunbury Rentals is a locally owned and operated car rental and transport
            service, proudly serving Sunbury and surrounding Melbourne suburbs.
            We provide reliable, affordable, and well-maintained vehicles for
            self-drive car hire, airport transfers, and professional chauffeur
            services.
          </p>
          <p className="text-gray-700">
            Whether you need a car for a day, a week, or a special occasion, we make
            the process simple, transparent, and stress-free. Our focus isn’t just
            renting cars — it’s delivering peace of mind, flexibility, and genuine
            local service.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-700 mb-3">
            Sunbury Rentals was created to solve a simple problem: local customers
            needed dependable vehicles without hidden fees, complicated rules, or
            poor service.
          </p>
          <p className="text-gray-700 mb-3">
            As a Sunbury-based business, we understand the needs of our community —
            from daily commuters and families to business travellers and event
            clients. Every vehicle in our fleet is carefully selected, regularly
            serviced, and fully insured.
          </p>
          <p className="font-semibold">
            We are not a faceless national chain. <br />
            We are local, accessible, and accountable.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-10 bg-gray-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">What We Offer</h2>

          <div className="space-y-5">
            <div>
              <h3 className="text-xl font-semibold mb-1">Self-Drive Car Rentals</h3>
              <p className="text-gray-700">
                Flexible daily, weekly, and monthly car hire for personal or business use.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-1">Airport Transfers</h3>
              <p className="text-gray-700">
                Reliable, on-time transfers between Sunbury and Melbourne Airport
                with clear, fixed pricing.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-1">Chauffeur Services</h3>
              <p className="text-gray-700">
                Professional chauffeur solutions for weddings, corporate travel,
                events, and special occasions.
              </p>
            </div>
          </div>

          <p className="mt-5 text-gray-700">
            Every service is designed to be easy to book, fairly priced, and supported
            by friendly local service.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Why Choose Sunbury Rentals</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
            <li>• Locally owned & operated in Sunbury</li>
            <li>• Clean, modern & well-maintained vehicles</li>
            <li>• No hidden fees or last-minute surprises</li>
            <li>• Fully insured and safety-checked fleet</li>
            <li>• Flexible pickup & drop-off options</li>
            <li>• Friendly, responsive customer support</li>
          </ul>
          <p className="mt-4 text-gray-700">
            We treat every booking with the same care — whether it’s a one-day rental
            or a long-term arrangement.
          </p>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-10 bg-gray-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Our Commitment to You</h2>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>• Transparent pricing</li>
            <li>• Reliable service</li>
            <li>• Professionalism at every step</li>
          </ul>
          <p className="text-gray-700 mb-3">
            From your first enquiry to vehicle return, our goal is to ensure your
            experience is smooth, respectful, and hassle-free.
          </p>
          <p className="font-semibold">
            Your time matters. Your safety matters. Your trust matters.
          </p>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Proudly Serving Our Local Community
          </h2>
          <p className="text-gray-700 mb-3">
            Sunbury Rentals proudly serves Sunbury, Craigieburn, Melton, Gisborne,
            Macedon Ranges, and greater Melbourne.
          </p>
          <p className="text-gray-700">
            As a local business, we take pride in supporting our community with
            dependable transport solutions.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <TestimonialSection />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white text-center">
        <h3 className="text-3xl font-semibold mb-4">
          Ready to Book or Need a Quote?
        </h3>
        <p className="mb-8 text-gray-300">
          Affordable car hire and professional transport services in Sunbury.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-white text-black font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition"
          >
            Request a Quote
          </a>
          <a
            href="tel:+0000000000"
            className="border border-white py-3 px-6 rounded-lg hover:bg-white hover:text-black transition"
          >
            Call Us Today
          </a>
        </div>

        <p className="mt-8 font-semibold">
          Sunbury Rentals — local service you can trust.
        </p>
      </section>

    </div>
  );
}
