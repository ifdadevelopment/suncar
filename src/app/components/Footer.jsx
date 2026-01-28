"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
const socialLinks = [
  { icon: faFacebook, href: "https://www.facebook.com/share/1Ln69bzKkg/?mibextid=wwXIfr" },
  { icon: faInstagram, href: "https://www.instagram.com/sunbury_rentals?igsh=MWU0YW9rNDV4YnI0bQ%3D%3D&utm_source=qr" },
  { icon: faWhatsapp, href: "https://wa.me/61430410450" },
];
const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-300 pt-20 overflow-hidden">
      <a
        href="https://wa.me/61430410450"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center
                 rounded-full bg-green-500 text-white shadow-lg
                 hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-indigo-600/20 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND + ABOUT */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Sunbury <span className="text-blue-500">Rentals</span>
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed  text-justify">
              Sunbury Rentals is a locally owned car rental and transport service offering self-drive car hire, airport transfers, and chauffeur services across Sunbury and Melbourne. We pride ourselves on clean vehicles, fair pricing, and reliable local service.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faPhone} className="text-blue-500" />
                <a href="tel:+61430410450" className="hover:text-white">
                  +61 430 410 450
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-blue-500" />
                <a
                  href="mailto:sunburycarrentals@gmail.com"
                  className="hover:text-white"
                >
                  sunburycarrentals@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-blue-500 mt-1"
                />
                <span>Jackson Road, Sunbury VIC 3429</span>
              </li>
            </ul>

          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Explore
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "Home",
                "Executive Chauffeur",
                "Fleet",
                "Airport Transfers",
                "Get a Quote",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="group inline-flex items-center gap-2 hover:text-white transition"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL + CTA */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Stay Connected
            </h3>

            <div className="flex gap-4 mb-6">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:border-blue-500 hover:text-blue-500 transition"
                >
                  <FontAwesomeIcon icon={item.icon} size="lg" />
                </a>
              ))}
            </div>
            <a
              href="tel:+61430410450"
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold hover:scale-105 transition"
            >
              Book Your Ride
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-gray-800" />

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Sunbury Rentals. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Sunbury Rentals. Car Hire & Executive Chauffeur Service in Sunbury & Melbourne
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
