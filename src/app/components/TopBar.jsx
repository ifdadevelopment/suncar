"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const TopBar = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      setHide(scrollY > 40);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md
        h-[40px]
        transition-transform duration-300
        ${hide ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="relative max-w-6xl mx-auto px-2 md:px-4 h-full text-white text-xs md:text-sm flex items-center">

        {/* LEFT (desktop only) */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+61430410450" className="flex items-center gap-1">
            <FaPhoneAlt />
            <span>+61 430 410 450</span>
          </a>

          <div className="flex items-center gap-1">
            <FaEnvelope />
            <span>sunburycarrentals@gmail.com</span>
          </div>
        </div>

        {/* CENTER TAGLINE (mobile & tablet) */}
        <div className="md:hidden absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[11px] sm:text-xs tracking-wide font-medium text-gray-200">
            ✦ Reliable Chauffeur & Car Rentals Services ✦
          </span>
        </div>

        {/* RIGHT (desktop only) */}
        {/* RIGHT (desktop only) */}
<div className="hidden md:flex ml-auto items-center gap-3 text-base">
  <Link href="https://www.facebook.com/share/1Ln69bzKkg/?mibextid=wwXIfr"><FaFacebookF /></Link>
  <Link href="https://www.instagram.com/sunbury_rentals?igsh=MWU0YW9rNDV4YnI0bQ%3D%3D&utm_source=qr"><FaInstagram /></Link>
  <Link href="https://wa.me/61430410450" target="_blank" rel="noopener noreferrer">
    <FaWhatsapp />
  </Link>
</div>


      </div>
    </div>
  );
};

export default TopBar;
