import Link from "next/link";

const Location = () => {
  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Kunjungi <span className="text-sunshine">Lokasi Kami</span>
          </h2>
          <div className="w-24 h-1 bg-sunshine mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-gray-600">
            Konsultasikan kebutuhan lubang kancing dan aksesoris jahit Anda langsung di sini. Kunjungi tempat kami untuk melihat langsung proses pengerjaan, mengecek kualitas, dan berkomunikasi agar hasil akhir busana Anda <strong className="text-sunshine">presisi</strong> dan <strong className="text-sunshine">sempurna</strong>.
          </p>
        </div>

        {/* Content Wrapper: Grid 2 Kolom */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 p-8 md:p-12 bg-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sunshine/5 rounded-full -mr-10 -mt-10"></div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">
              Detail Informasi
            </h3>

            <div className="space-y-6 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-sunshine/10 flex items-center justify-center flex-shrink-0 text-sunshine">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Alamat</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Jl. WR Supratman, Penarukan, Kec. Buleleng, Kabupaten Buleleng, Bali.
                  </p>
                </div>
              </div>

              {/* Item: Jam Buka */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-sunshine/10 flex items-center justify-center flex-shrink-0 text-sunshine">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Jam Operasional</h4>
                  <p className="text-gray-600 text-sm mt-1">Setiap Hari: 09.00 - 17.00 WITA</p>
                  <p className="text-gray-600 text-sm">Tutup dihari Rahinan</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-sunshine/10 flex items-center justify-center flex-shrink-0 text-sunshine">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Kontak</h4>
                  <p className="text-gray-600 text-sm mt-1">+62 859 4618 2092</p>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom Google Maps Embed */}
          <div className="w-full lg:w-2/3 h-80 lg:h-auto min-h-[400px]">
            <iframe
              title="Lokasi Raditya Collection"
              // Link embed di bawah ini mengarah ke Penarukan, Buleleng (Sesuai gambar peta Anda).
              // Nanti GANTI link "src" ini dengan link embed asli dari Google Maps toko Anda.
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.3184082539333!2d115.11380497432745!3d-8.093119180933623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd191001c016e75%3A0xd6321f3e66c993ce!2sRaditya%20Collection%3A%20Pasang%20Kancing%20dan%20Lubang%20Kancing!5e1!3m2!1sid!2sid!4v1766982342764!5m2!1sid!2sid"
              className="w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;