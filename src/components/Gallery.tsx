"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const galleryItems = [
    {
      src: "/images/kancing.webp",
      alt: "Koleksi Aksesoris & Kancing",
    },
    {
      src: "/images/hero.webp",
      alt: "Mesin Kancing Profesional",
    },
    {
      src: "/images/alatdanbahan.webp",
      alt: "Bahan dan alat-alat jahit",
    },
  ];

  // Handle scroll to update current slide
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const scrollLeft = slider.scrollLeft;
      const slideWidth = slider.offsetWidth;
      const newIndex = Math.round(scrollLeft / slideWidth);
      setCurrentSlide(newIndex);
    };

    slider.addEventListener('scroll', handleScroll);
    return () => slider.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to specific slide
  const scrollToSlide = (index: number) => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    const slideWidth = slider.offsetWidth;
    slider.scrollTo({
      left: slideWidth * index,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <RevealOnScroll width="100%">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Galeri <span className="text-sunshine">Kami</span>
              </h2>
              <div className="w-24 h-1.5 bg-sunshine mx-auto mt-4 rounded-full"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Selain menawarkan jasa, kami juga menjual beberapa <strong className="text-sunshine">bahan</strong> dan <strong className="text-sunshine">alat-alat jahit</strong>.
              </p>
            </div>
          </RevealOnScroll>

          {/* Mobile Slider (visible on mobile only) */}
          <div className="md:hidden">
            <RevealOnScroll width="100%" delay={0.2}>
              <div className="relative">
                {/* Slider Container */}
                <div 
                  ref={sliderRef}
                  className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {galleryItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-full snap-center"
                      onClick={() => setSelectedImage(item.src)}
                    >
                      <div className="group relative h-80 rounded-2xl overflow-hidden shadow-xl cursor-zoom-in">
                        {/* Gambar Thumbnail */}
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-active:scale-95"
                          sizes="100vw"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                          <div className="text-white">
                            <h3 className="text-xl font-bold mb-1">
                              {item.alt}
                            </h3>
                            <p className="text-gray-300 text-sm">(Ketuk untuk memperbesar)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-6">
                  {galleryItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToSlide(index)}
                      className={`transition-all duration-300 rounded-full ${
                        currentSlide === index 
                          ? 'w-8 h-3 bg-sunshine' 
                          : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Desktop Grid (visible on desktop only) */}
          <div className="hidden md:grid grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <RevealOnScroll 
                key={index} 
                width="100%" 
                delay={index * 0.15} 
                direction="up"      
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
                    sizes="33vw"
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

      {/* --- LIGHTBOX / MODAL POPUP --- */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)} 
        >
          {/* Tombol Close */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition transform hover:scale-110"
            onClick={() => setSelectedImage(null)}
            aria-label="Close preview"
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

      {/* CSS untuk hide scrollbar */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default Gallery;