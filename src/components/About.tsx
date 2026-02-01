import Image from "next/image";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 via-white to-sunshine-50/30 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-sunshine/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-sunshine/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          
          {/* BAGIAN KIRI: GAMBAR */}
          <div className="w-full md:w-1/2 relative mt-4 ml-4">
            <RevealOnScroll width="100%">
              <div className="relative group">
                {/* Border Belakang dengan Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-sunshine to-yellow-400 rounded-3xl z-0 transform -translate-x-6 -translate-y-6 opacity-80 duration-500"></div>
                
                {/* Decorative Dots Pattern */}
                <div className="absolute -top-4 -right-4 w-24 h-24 opacity-20 z-0">
                  <div className="grid grid-cols-4 gap-2">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-sunshine"></div>
                    ))}
                  </div>
                </div>
                
                {/* Gambar Utama */}
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-4/3 bg-gray-100 border-4 border-white duration-500">
                  <Image
                    src="/images/hero.webp"
                    alt="Workshop Raditya Collection"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 duration-500"></div>
                </div>

                <div className="absolute -bottom-6 right-2 md:-bottom-8 md:-right-8 bg-linear-to-br from-white to-gray-50 p-5 md:p-6 rounded-2xl shadow-2xl border-t-4 border-sunshine z-20 flex items-center gap-3 md:gap-4 duration-500">
                  <div className="text-4xl md:text-5xl font-black text-sunshine leading-none">
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

          <div className="w-full md:w-1/2">
            
            {/* Tag Label */}
            <RevealOnScroll width="100%" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-sunshine/10 rounded-full mb-6">
                
                <span className="text-sunshine font-semibold text-sm uppercase tracking-wider">Tentang Kami</span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll width="100%" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
                Detail Kecil, <br />
                <span className="text-sunshine relative inline-block">
                  Dampak Besar.
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-sunshine/20" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M0,7 Q50,0 100,7 T200,7" fill="none" stroke="currentColor" strokeWidth="4"/>
                  </svg>
                </span>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll width="100%" delay={0.4}>
              <div className="space-y-5 mb-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Di <strong className="text-sunshine font-bold">Raditya Collection</strong>, kami memahami bahwa lubang
                  kancing yang rapi adalah kunci kualitas sebuah pakaian. Berlokasi
                  di <strong className="text-sunshine font-bold">Singaraja</strong>, kami mendedikasikan diri sebagai spesialis
                  finishing untuk mendukung penjahit, butik, dan konveksi.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed">
                  Menggunakan mesin modern standar industri, kami menjamin setiap
                  lubang kancing presisi, kuat, dan estetis. Serahkan detail rumit
                  ini kepada kami, agar Anda bisa fokus pada desain utama.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll width="100%" delay={0.6}>
              <div className="space-y-5 bg-gradient-to-br from-sunshine-50/50 to-white p-6 rounded-2xl border-l-4 border-sunshine shadow-lg">
                {[
                  { 
                    text: "Mesin Lubang Kancing Modern",
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    )
                  },
                  { 
                    text: "Pengerjaan Cepat & Tepat",
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    )
                  },
                  { 
                    text: "Harga Bersahabat, Kualitas Hebat",
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    )
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group cursor-pointer transition-transform duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sunshine to-yellow-400 flex items-center justify-center text-white shrink-0 shadow-md transition-all duration-300">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {item.icon}
                      </svg>
                    </div>
                    <span className="text-gray-800 font-semibold text-lg duration-300">{item.text}</span>
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