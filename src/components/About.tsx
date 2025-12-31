import Image from "next/image";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          
          {/* BAGIAN KIRI: GAMBAR */}
          <div className="w-full md:w-1/2 relative mt-4 ml-4">
            <RevealOnScroll width="100%">
              <div className="relative">
                {/* Border Belakang */}
                <div className="absolute inset-0 border-4 border-sunshine rounded-3xl z-0 transform -translate-x-4 -translate-y-4"></div>
                
                {/* Gambar Utama */}
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-4/3 bg-gray-100 border-2 border-white">
                  <Image
                    src="/images/hero.jpg"
                    alt="Workshop Raditya Collection"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Badge Tahun Berdiri */}
                <div className="absolute -bottom-6 right-2 md:-bottom-8 md:-right-8 bg-white p-4 md:p-5 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] border-t-4 border-sunshine z-20 flex items-center gap-3 md:gap-4">
                  <div className="text-3xl md:text-4xl font-extrabold text-sunshine leading-none">
                    {new Date().getFullYear() - 2022}+
                  </div>
                  <div className="text-xs md:text-sm text-gray-800 font-bold leading-tight uppercase tracking-wider">
                    Tahun
                    <br />
                    Berdiri
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* BAGIAN KANAN: KONTEN TEKS */}
          <div className="w-full md:w-1/2">
            
            {/* 1. Judul (Delay 0.2s) */}
            <RevealOnScroll width="100%" delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
                Detail Kecil, <br />
                <span className="text-sunshine">Dampak Besar.</span>
              </h2>
            </RevealOnScroll>

            {/* 2. Paragraf (Delay 0.4s) */}
            <RevealOnScroll width="100%" delay={0.4}>
              <div className="space-y-4 mb-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Di <strong>Raditya Collection</strong>, kami memahami bahwa lubang
                  kancing yang rapi adalah kunci kualitas sebuah pakaian. Berlokasi
                  di Singaraja, kami mendedikasikan diri sebagai spesialis
                  finishing untuk mendukung penjahit, butik, dan konveksi.
                </p>

                <p className="text-gray-600 text-lg leading-relaxed">
                  Menggunakan mesin modern standar industri, kami menjamin setiap
                  lubang kancing presisi, kuat, dan estetis. Serahkan detail rumit
                  ini kepada kami, agar Anda bisa fokus pada desain utama.
                </p>
              </div>
            </RevealOnScroll>

            {/* 3. List Keunggulan (Delay 0.6s) */}
            <RevealOnScroll width="100%" delay={0.6}>
              <div className="space-y-4 border-l-2 border-sunshine/20 pl-6">
                {[
                  "Mesin Lubang Kancing Modern",
                  "Pengerjaan Cepat & Tepat",
                  "Harga Bersahabat, Kualitas Hebat",
                ].map((text, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-sunshine/10 flex items-center justify-center text-sunshine group-hover:bg-sunshine group-hover:text-white transition-colors shrink-0">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;