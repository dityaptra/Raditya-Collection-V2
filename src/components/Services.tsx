import { RevealOnScroll } from "@/components/RevealOnScroll";

const Services = () => {
  const services = [
    {
      id: "01",
      title: "Lubang Kancing",
      desc: "Pembuatan lubang kancing untuk kemeja, celana, atau jas.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M19 21a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v14z" />
      ),
    },
    {
      id: "02",
      title: "Pasang Kancing",
      desc: "Pemasangan berbagai jenis kancing pakaian.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      ),
    },
    {
      id: "03",
      title: "Jahit Wastra",
      desc: "Layanan jahit tepi kain wastra (kain adat) atau selendang.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
      ),
    },
    {
      id: "04",
      title: "Overdeck",
      desc: "Jahitan khusus (kumis) untuk bagian kelim kaos.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12l4-4 4 4 4-4 4 4" />
      ),
    },
    {
      id: "05",
      title: "Neci",
      desc: "Penyelesaian tepi kain (neci) yang rapat dan rapi.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      ),
    },
    {
      id: "06",
      title: "Layanan Lainnya",
      desc: "Untuk layanan lainnya harap berkonsultasi langsung.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-sunshine-50/30 via-white to-sunshine-50/50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sunshine/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sunshine/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <RevealOnScroll width="100%">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Layanan <span className="text-sunshine">Unggulan</span>
            </h2>
            <div className="w-24 h-1 bg-sunshine mx-auto mt-4 rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              Kami akan melayani anda dengan beberapa layanan yang <strong className="text-sunshine">unggul</strong> dan <strong className="text-sunshine">berkualitas</strong>.
            </p>
          </div>
        </RevealOnScroll>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {services.map((item, index) => (
            <RevealOnScroll 
              key={index} 
              width="100%" 
              delay={index * 0.1}
              direction={index % 2 === 0 ? "left" : "right"} 
            >
              <div
                className="group relative bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-500 transform hover:-translate-y-3 overflow-hidden h-full flex flex-col items-center text-center cursor-pointer"
              >
                
                {/* Animated Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-sunshine/0 via-sunshine/0 to-sunshine/0 group-hover:from-sunshine/5 group-hover:via-sunshine/3 group-hover:to-transparent transition-all duration-500 rounded-3xl"></div>
                
                {/* Large Icon Background Watermark */}
                <div className="absolute -right-8 -bottom-8 w-40 h-40 opacity-[0.07] group-hover:opacity-[0.12] group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 z-0 pointer-events-none select-none">
                  <svg className="w-full h-full text-sunshine" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    {item.icon}
                  </svg>
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-sunshine/0 group-hover:border-sunshine/30 rounded-tr-3xl transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-sunshine/0 group-hover:border-sunshine/30 rounded-bl-3xl transition-all duration-500"></div>

                {/* Icon Container with Improved Styling */}
                <div className="relative z-10 w-20 h-20 mb-6 rounded-2xl bg-sunshine flex items-center justify-center transition-all duration-500 shadow-lg">
                  {/* Inner glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-white/20 duration-500"></div>
                  <svg className="w-10 h-10 relative z-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sunshine transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Accent Line with Glow */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-sunshine via-yellow-400 to-sunshine group-hover:w-full transition-all duration-700 ease-out shadow-lg shadow-sunshine/50"></div>
                
                {/* Side Accent Lines */}
                <div className="absolute top-1/2 left-0 w-1 h-0 bg-gradient-to-b from-sunshine/50 to-transparent group-hover:h-1/3 transition-all duration-500 ease-out transform -translate-y-1/2"></div>
                <div className="absolute top-1/2 right-0 w-1 h-0 bg-gradient-to-t from-sunshine/50 to-transparent group-hover:h-1/3 transition-all duration-500 ease-out delay-100 transform -translate-y-1/2"></div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;