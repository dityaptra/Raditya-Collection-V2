"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Tentang Kami", href: "#about" },
    { name: "Layanan", href: "#services" },
    { name: "Galeri", href: "#gallery" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    setIsOpen(false);  

    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);

    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 ml-3 md:ml-8">
          
          {/* --- LOGO SECTION --- */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Logo Raditya Collection"
                width={200}
                height={200}
                className="h-16 w-auto object-contain transition"
                priority
              />
            </Link>
            <Link href="/" className="text-2xl font-bold text-sunshine">
              Raditya<span className="text-gray-800">Collection</span>
            </Link>
          </div>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-gray-600 hover:text-sunshine font-medium transition text-sm lg:text-base cursor-pointer"
              >
                {link.name}
              </Link>
            ))}

            {/* Tombol CTA Hubungi Kami */}
            <Link 
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")} 
              className="px-6 py-2.5 rounded-full bg-sunshine text-white font-medium hover:bg-sunshine-light transition shadow-lg shadow-sunshine/30 text-sm lg:text-base cursor-pointer"
            >
              Hubungi Kami
            </Link>
          </div>

          {/* --- MOBILE MENU BUTTON --- */}
          <div className="flex items-center md:hidden mr-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Buka Menu Navigasi"
              className="text-gray-600 hover:text-sunshine focus:outline-none p-2"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      <div 
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-sunshine hover:bg-gray-50 rounded-lg cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            href="#contact" 
            onClick={(e) => handleScroll(e, "#contact")}
            className="block px-3 py-3 text-base font-bold text-sunshine bg-sunshine/5 rounded-lg mt-4 cursor-pointer"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;