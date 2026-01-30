"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Beranda", href: "#home" },
  { name: "Tentang", href: "#about" },
  { name: "Layanan", href: "#services" },
  { name: "Galeri", href: "#gallery" },
  { name: "Lokasi", href: "#location" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // 1. Logic Scroll Spy
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 100;
      navLinks.forEach((link) => {
        const targetId = link.href.replace("#", "");
        const section = document.getElementById(targetId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(targetId);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  // 2. Logic Click Smooth Scroll
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);

    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId);
    } else {
      console.warn(
        `Elemen dengan id="${targetId}" tidak ditemukan! Pastikan Anda sudah menambah id="${targetId}" di section terkait.`,
      );
      window.location.href = href;
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* --- BAGIAN 1: LOGO (KIRI) --- */}
          <div className="shrink-0 flex items-center gap-1 cursor-pointer z-20">
            <Link
              href="/"
              className="flex items-center"
              onClick={(e) => handleScroll(e, "#home")}
            >
              <Image
                src="/images/logo.png"
                alt="Logo Raditya Collection"
                width={150}
                height={150}
                className="h-12 md:h-14 w-auto object-contain"
                priority
              />
            </Link>
            
            <Link
              href="/"
              className="text-xl md:text-2xl font-bold text-sunshine block tracking-tight"
              onClick={(e) => handleScroll(e, "#home")}
            >
              Raditya<span className="text-gray-800">Collection</span>
            </Link>
          </div>

          {/* --- BAGIAN 2: MENU LINKS (TENGAH) --- */}
          {/* Menggunakan 'flex-1' dan 'justify-center' agar posisi di tengah */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e: any) => handleScroll(e, link.href)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative group transition-colors duration-300 font-semibold text-base cursor-pointer ${
                    isActive
                      ? "text-sunshine"
                      : "text-gray-700 hover:text-sunshine"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-[3px] bg-sunshine transition-all duration-300 ease-in-out rounded-full ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  ></span>
                </motion.a>
              );
            })}
          </div>

          {/* --- BAGIAN 3: TOMBOL KONTAK (KANAN) --- */}
          {/* Dipisahkan dari mapping link agar bisa ditaruh di paling kanan */}
          <div className="hidden md:flex items-center justify-end z-20">
            <a
              href="#contact"
              onClick={(e: any) => handleScroll(e, "#contact")}
              className="px-6 py-2.5 rounded-xl bg-sunshine text-white font-medium hover:bg-sunshine/90 transition shadow-lg shadow-sunshine/20 cursor-pointer transform hover:scale-105 active:scale-95"
            >
              Hubungi Kami
            </a>
          </div>

          {/* --- MOBILE TOGGLE BUTTON --- */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
              className="text-sunshine text-3xl cursor-pointer p-2 transition-colors hover:bg-gray-50 rounded-md"
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 shadow-inner">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-sunshine hover:bg-yellow-50 rounded-xl cursor-pointer transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className="block px-4 py-3 text-lg font-bold text-center text-white bg-sunshine rounded-xl mt-4 cursor-pointer shadow-md active:scale-95 transition-transform"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;