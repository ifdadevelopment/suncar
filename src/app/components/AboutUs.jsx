'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutChauffeurSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Left Content */}
        <div>
          <p className="global-color font-semibold mb-3">About Chauffeur Car Melbourne</p>

          <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6">
            Trusted Chauffeur Hire<br />Melbourne
          </h2>

          <p className="text-gray-600 leading-relaxed mb-5">
            For over <strong>20 years</strong>, Chauffeur Car Melbourne has been delivering reliable
            and luxury chauffeur services in Melbourne. From corporate transfers and airport
            pickups to weddings, private events, and long-distance tours, we provide a refined
            travel experience built on punctuality, comfort, and professionalism.
          </p>

          <p className="text-gray-600 leading-relaxed mb-5">
            What started as a single luxury vehicle has grown into one of Melbourne’s most
            dependable chauffeur hire companies. With more than two decades of industry
            experience, we understand Melbourne’s roads, schedules, and client expectations
            better than anyone.
          </p>

          <p className="text-gray-600 leading-relaxed mb-5">
            Our licensed chauffeurs are trained to deliver safe, courteous, and stress-free
            journeys. Every vehicle in our fleet is meticulously maintained, ensuring a smooth
            and comfortable ride every time you book chauffeur hire in Melbourne.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            Our Melbourne-based chauffeur hire services are trusted by business professionals,
            families, and international visitors who value discreet service and premium vehicles.
          </p>

          <Link
            href="/about-us"
            className="inline-flex items-center gap-2 global-bg text-white px-6 py-3 font-semibold rounded-md hover:bg-red-700 transition"
          >
            ABOUT US
            <span className="text-lg">→</span>
          </Link>
        </div>

        {/* Right Images */}
        <div className="relative">
          {/* Main Image */}
          <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/car-view/1.webp"
              alt="Luxury Chauffeur Car"
              width={700}
              height={450}
              className="object-cover"
            />
          </div>

          {/* Overlay Image */}
          <div className="absolute -top-10 -left-10 bg-white p-2 z-10 rounded-xl shadow-lg">
            <Image
              src="/car-view/2.webp"
              alt="Luxury Interior"
              width={260}
              height={200}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Experience Badge */}
          {/* <div className="absolute bottom-6-left-6 global-bg text-white px-6 py-4 rounded-lg shadow-lg">
            <p className="text-3xl font-bold leading-none">20</p>
            <p className="text-sm uppercase tracking-wide">Years of Experience</p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
