"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const Hero = () => {
  // --- 1. Konfigurasi Animasi ---
  
  // Varian untuk Container (Mengatur urutan muncul anak-anaknya)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Jeda 0.2 detik antar elemen (Judul -> Teks -> Tombol)
        delayChildren: 0.3,   // Tunggu 0.3 detik setelah loading baru mulai
      },
    },
  };

  // Varian untuk Item (Muncul dari bawah ke atas)
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  // --- 2. Logic Scroll (Tetap dipertahankan) ---
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);

    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* --- BACKGROUND IMAGE DENGAN ANIMASI ZOOM-OUT (KEN BURNS) --- */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.2 }} // Mulai agak besar (Zoom In)
          animate={{ scale: 1 }}   // Perlahan mengecil ke normal
          transition={{ duration: 4, ease: "easeOut" }} // Durasi 10 detik
          className="relative w-full h-full"
        >
          <Image
            src="/images/hero.webp"
            alt="Latar Belakang"
            fill
            className="object-cover"
            priority={true}
            quality={80}
          />
        </motion.div>
        {/* Overlay Hitam */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* --- KONTEN TENGAH DENGAN ANIMASI STAGGER --- */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-18"
      >
        
        {/* Judul Utama */}
        <motion.h1 
          variants={itemVariants}
          className="text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-md"
        >
          Sentuhan Akhir Sempurna untuk
          {/* Class animate-gold-shimmer tetap dipertahankan */}
          <span className="animate-gold-shimmer font-black"> Busana Anda</span>
        </motion.h1>

        {/* Deskripsi */}
        <motion.p 
          variants={itemVariants}
          className="mt-6 text-lg md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Spesialis jasa <strong className="text-[#FFE169]">Lubang Kancing</strong> dan <strong className="text-[#FFE169]">Pasang Kancing</strong> dengan standar garmen.
          Presisi tinggi, pengerjaan cepat, dan hasil rapi untuk konveksi maupun perorangan.
        </motion.p>

        {/* Tombol Action */}
        <motion.div 
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            href="#location"
            onClick={(e) => handleScroll(e, "#location")}
            className="px-8 py-3 rounded-xl bg-sunshine border-2 border-sunshine text-white font-bold text-lg hover:bg-white hover:text-sunshine transition-all duration-300 shadow-lg hover:shadow-sunshine/50 cursor-pointer hover:scale-105 active:scale-95"
          >
            Lokasi Kami
          </Link>

          <Link
            href="#services"
            onClick={(e) => handleScroll(e, "#services")}
            className="px-8 py-3 rounded-xl border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
          >
            Layanan Kami
          </Link>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;