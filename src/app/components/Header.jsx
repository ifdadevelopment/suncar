"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import BookingModelForm from "../modalpup/BookingModelForm";
import ModalWrapper from "./ModalWrapper";
import { useRouter, usePathname } from "next/navigation"; // <-- usePathname import
import {FaPhoneAlt} from "react-icons/fa";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [servicesOpen, setServicesOpen] = useState(false);

  const menuRef = useRef(null);
  const servicesRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname(); // <-- current URL

  /* ---------------- CLOSE ALL MENUS ---------------- */
  const closeAllMenus = () => {
    setServicesOpen(false);
    setMenuOpen(false);
  };

  /* ---------------- SCROLL EFFECT ---------------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------- CLICK OUTSIDE ---------------- */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        servicesRef.current &&
        !servicesRef.current.contains(e.target)
      ) {
        closeAllMenus();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleModal = () => setIsModalOpen((prev) => !prev);
// ---------------- DYNAMIC LOGO TEXT ----------------
const chauffeurRoutes = [
  "/chauffeur-services",
  "/airport-transfer-sunbury",
];

const isChauffeur = chauffeurRoutes.some((route) =>
  pathname.startsWith(route)
);

const logoTitle = isChauffeur
  ? "Sunbury Chauffeur"
  : "Sunbury Rentals";

const logoSubtitle = isChauffeur
  ? "Your Journey, Our Priority"
  : "Drive your dreams";


  return (
    <header
  className={`fixed w-full z-50 bg-white shadow-lg transition-all duration-300 
    ${scrolled ? "top-0 h-[70px]" : "top-[40px] h-[100px]"}`}
>
  <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-full">
    {/* LOGO */}
    <Link href="/" onClick={closeAllMenus} className="flex items-center gap-3">
      <Image src="/logo.png" alt="Sunbury Rentals" width={72} height={72} />
      <div className="flex flex-col leading-tight">
        <span className="font-bold text-md sm:text-lg text-black">{logoTitle}</span>
        {logoSubtitle && (
          <span className="text-sm text-gray-500">{logoSubtitle}</span>
        )}
      </div>
    </Link>

    {/* DESKTOP MENU */}
    <nav className="hidden md:flex items-center gap-8 font-medium text-gray-800">
      <Link href="/" onClick={closeAllMenus} className="hover:text-black">Home</Link>
      <div ref={servicesRef} className="relative">
        <button
          onClick={() => setServicesOpen((p) => !p)}
          className="hover:text-black"
        >
          Services {servicesOpen ? "▲" : "▼"}
        </button>
        {servicesOpen && (
          <div className="absolute max-w-[650px] left-0 top-full w-screen bg-white shadow-xl py-6">
            <div className="max-w-full px-6 grid grid-cols-3 gap-1">
              <div>
                <h4 className="font-bold mb-3 text-black">Chauffeur Services</h4>
                <Link href="/airport-transfer" onClick={closeAllMenus} className="block px-2 py-2 hover:bg-gray-100 rounded">
                  Airport Transfers
                </Link>
                <Link href="/chauffeur-service" onClick={closeAllMenus} className="block px-2 py-2 hover:bg-gray-100 rounded">
                  Corporate Chauffeur
                </Link>
                <Link href="/chauffeur-services/local-chauffeur" onClick={closeAllMenus} className="block px-2 py-2 hover:bg-gray-100 rounded">
                  Local Chauffeur
                </Link>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-black">Self-Drive Rentals</h4>
                <Link href="/car-rental-services" onClick={closeAllMenus} className="block px-2 py-2 hover:bg-gray-100 rounded">
                  View Rental Cars
                </Link>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-black">Why Choose Us?</h4>
                <p className="text-gray-500 mb-4">Premium fleet, professional chauffeurs.</p>
                <button
                  onClick={() => {
                    closeAllMenus();
                    router.push("/#services");
                  }}
                  className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Link href="/about-us" onClick={closeAllMenus} className="hover:text-black">About Us</Link>
      <Link href="/fleet" onClick={closeAllMenus} className="hover:text-black">Fleet</Link>
      <Link href="/contact" onClick={closeAllMenus} className="hover:text-black">Contact</Link>

      <a href="tel:+61430410450" className="bg-black text-white px-4 py-2 rounded-lg flex items-center hover:bg-gray-800">
        <FaPhoneAlt icon={faPhoneAlt} className="mr-2" />
       +61 430 410 450
      </a>
    </nav>

    {/* MOBILE TOGGLE */}
    <button onClick={() => setMenuOpen((p) => !p)} className="md:hidden text-3xl text-black">
      {menuOpen ? "✕" : "☰"}
    </button>
  </div>

  {/* MOBILE MENU */}
  {menuOpen && (
    <div ref={menuRef} className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-2 text-gray-800">
      <Link href="/" onClick={closeAllMenus} className="block py-2 hover:text-black">Home</Link>

      <button
        onClick={() => setServicesOpen((p) => !p)}
        className="block w-full text-left py-2 font-medium hover:text-black"
      >
        Services {servicesOpen ? "▲" : "▼"}
      </button>

      {servicesOpen && (
        <div className="ml-4 space-y-2">
          <h4 className="font-bold mt-2 text-black">Chauffeur Services</h4>
          <Link href="/chauffeur-services/airport-transfer" onClick={closeAllMenus} className="block px-2 py-2 hover:bg-gray-100 rounded">
            Airport Transfers
          </Link>
          <Link href="/chauffeur-services/corporate-chauffeur" onClick={closeAllMenus} className="block px-2 py-2 hover:bg-gray-100 rounded">
            Corporate Chauffeur
          </Link>
          <Link href="/chauffeur-services/local-chauffeur" onClick={closeAllMenus} className="block px-2 py-2 hover:bg-gray-100 rounded">
            Local Chauffeur
          </Link>

          <h4 className="font-bold mt-2 text-black">Self-Drive Rentals</h4>
          <Link href="/self-drive-car-services" onClick={closeAllMenus} className="block px-2 py-2 hover:bg-gray-100 rounded">
            View Rental Cars
          </Link>

          <h4 className="font-bold mt-2 text-black">Why Choose Us?</h4>
          <p className="text-gray-500 mb-2">Premium fleet, professional chauffeurs.</p>
          <button
            onClick={() => {
              closeAllMenus();
              router.push("/#services");
            }}
            className="bg-black text-white px-4 py-2 rounded-lg w-full text-left hover:bg-gray-800"
          >
            Book Now
          </button>
        </div>
      )}

      <Link href="/about-us" onClick={closeAllMenus} className="block py-2 hover:text-black">About Us</Link>
      <Link href="/fleet" onClick={closeAllMenus} className="block py-2 hover:text-black">Fleet</Link>
      <Link href="/contact" onClick={closeAllMenus} className="block py-2 hover:text-black">Contact</Link>

      <a
        href="tel:+61430410450"
        className="bg-black text-white px-4 py-2 rounded-lg flex items-center justify-center mt-2 hover:bg-gray-800"
      >
        <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
        Call Now
      </a>
    </div>
  )}

  {/* MODAL */}
  {isModalOpen && (
    <ModalWrapper onClose={toggleModal}>
      <BookingModelForm />
    </ModalWrapper>
  )}
</header>

  );
};

export default Header;
