"use client";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
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
      {/* BACKGROUND IMAGE & OVERLAY */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Latar Belakang Workshop Jahit"
          fill
          className="object-cover"
          priority={true}
          quality={80}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* KONTEN TENGAH */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-18">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-md">
          Sentuhan Akhir Sempurna untuk
          <span className="animate-gold-shimmer font-black"> Busana Anda</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed font-medium">
    Spesialis jasa <strong className="text-[#FFE169]">Lubang Kancing</strong> dan <strong className="text-[#FFE169]">Pasang Kancing</strong> dengan standar garmen.
    Presisi tinggi, pengerjaan cepat, dan hasil rapi untuk konveksi maupun perorangan.
  </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className="px-8 py-3 rounded-full bg-sunshine text-white font-bold text-lg hover:bg-white hover:text-sunshine transition-all duration-300 shadow-lg hover:shadow-sunshine/50 cursor-pointer"
          >
            Hubungi Kami
          </Link>

          <Link
            href="#services"
            onClick={(e) => handleScroll(e, "#services")}
            className="px-8 py-3 rounded-full border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 cursor-pointer"
          >
            Lihat Layanan
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
