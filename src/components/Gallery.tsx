"use client"; // Wajib ada karena kita pakai interaksi (useState)

import { useState } from "react";
import Image from "next/image";
import { RevealOnScroll } from "@/components/RevealOnScroll"; // Import komponen animasi

const Gallery = () => {
  // State untuk menyimpan gambar mana yang sedang dibuka
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Data gambar dummy
  const galleryItems = [
    {
      src: "/images/kancing.jpg",
      alt: "Koleksi Aksesoris & Kancing",
    },
    {
      src: "/images/hero.jpg",
      alt: "Mesin Kancing Profesional",
    },
    {
      src: "/images/alatdanbahan.jpg",
      alt: "Bahan dan alat-alat jahit",
    },
  ];

  return (
    <>
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section (Animasi Muncul dari Bawah) */}
          <RevealOnScroll width="100%">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Galeri <span className="text-sunshine">Kami</span>
              </h2>
              <div className="w-24 h-1 bg-sunshine mx-auto mt-4 rounded-full"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Selain menawarkan jasa, kami juga menjual beberapa <strong className="text-sunshine">bahan</strong> dan <strong className="text-sunshine">alat-alat jahit</strong>.
              </p>
            </div>
          </RevealOnScroll>

          {/* Gallery Grid (Animasi Muncul Berurutan) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <RevealOnScroll 
                key={index} 
                width="100%" 
                delay={index * 0.15} // Delay bertahap (0s, 0.15s, 0.3s)
                direction="up"       // Muncul dari bawah
              >
                <div
                  onClick={() => setSelectedImage(item.src)}
                  className="group relative h-72 rounded-2xl overflow-hidden shadow-lg cursor-zoom-in"
                >
                  {/* Gambar Thumbnail */}
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                  />

                  {/* Overlay Hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex flex-col items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-center px-4">
                      <h3 className="text-white text-xl font-bold">
                        {item.alt}
                      </h3>
                      <p className="text-gray-300 text-xs mt-2 italic">(Klik untuk memperbesar)</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --- LIGHTBOX / MODAL POPUP (Tidak perlu RevealOnScroll di sini karena sudah ada animasi bawaan CSS) --- */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)} // Klik background untuk menutup
        >
          {/* Tombol Close */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition transform hover:scale-110"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          {/* Container Gambar Besar */}
          <div
            className="relative w-full max-w-5xl h-auto max-h-[90vh] aspect-video rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Preview Galeri Besar"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;