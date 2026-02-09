import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col justify-end pb-20 px-6 pt-32 max-w-7xl mx-auto">
        {/* Background grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            backgroundPosition: "center center",
            maskImage: "radial-gradient(ellipse at 50% 0%, black 0%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 0%, black 0%, transparent 100%)",
          }}
        />
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{
          maskImage: "radial-gradient(ellipse at 50% 0%, black 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 0%, black 0%, transparent 100%)",
        }}>
          <defs>
            <pattern id="dashed-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <line x1="80" y1="0" x2="80" y2="80" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="6 6" />
              <line x1="0" y1="80" x2="80" y2="80" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="6 6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dashed-grid)" />
        </svg>

        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[2px] bg-[#f20d0d]"></span>
            <span className="text-[#f20d0d] font-bold uppercase tracking-widest text-sm">Manifesto 2024</span>
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter mb-8 text-white">
            MEMBANGUN<br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">MASYARAKAT BARU</span><br />
            LEWAT BERPIKIR <span className="text-[#f20d0d]">KRITIS</span>.
          </h2>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light mb-10 leading-relaxed">
            Gerakan literasi digital untuk Indonesia yang lebih cerdas. Kami melawan disinformasi dengan logika dan akal sehat.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#f20d0d] hover:bg-red-600 text-white text-lg font-bold px-8 py-4 rounded transition-all hover:scale-105 flex items-center justify-center gap-2 group">
              <span>Mulai Belajar</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-xl">arrow_forward</span>
            </button>
            <button className="bg-transparent border border-white/20 hover:border-white text-white text-lg font-medium px-8 py-4 rounded transition-all hover:bg-white/5 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-xl">play_circle</span>
              <span>Tonton Manifesto</span>
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 right-6 hidden md:flex flex-col items-center gap-4 text-gray-500 animate-bounce">
          <span className="text-xs uppercase tracking-widest rotate-90 origin-bottom translate-y-8">Scroll</span>
          <span className="material-symbols-outlined mt-12">arrow_downward</span>
        </div>
      </header>

      {/* Mission Grid Section */}
      <section className="py-24 bg-[#121212] border-t border-dashed" style={{ borderTopWidth: "1px", borderColor: "rgba(255,255,255,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h3 className="text-[#f20d0d] font-bold uppercase tracking-widest text-sm mb-3">Pilar Utama</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Kurikulum Berpikir</h2>
            </div>
            <p className="text-gray-400 max-w-md text-lg">
              Kami fokus pada empat pilar fundamental untuk membentuk pola pikir yang tangguh dan skeptis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="group bg-[#050505] border border-white/10 p-8 hover:border-[#f20d0d] transition-colors duration-300 relative overflow-hidden rounded-lg">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#f20d0d]/10 rounded-full blur-2xl group-hover:bg-[#f20d0d]/20 transition-all"></div>
              <div className="h-12 w-12 text-[#f20d0d] mb-6 flex items-center justify-center bg-[#f20d0d]/10 rounded-lg group-hover:bg-[#f20d0d] group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-3xl">psychology</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#f20d0d] transition-colors">Logical Fallacies</h4>
              <p className="text-gray-400 leading-relaxed text-sm">Mengidentifikasi kesesatan berpikir dalam argumen politik dan debat sehari-hari.</p>
            </div>

            {/* Card 2 */}
            <div className="group bg-[#050505] border border-white/10 p-8 hover:border-[#f20d0d] transition-colors duration-300 relative overflow-hidden rounded-lg">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#f20d0d]/10 rounded-full blur-2xl group-hover:bg-[#f20d0d]/20 transition-all"></div>
              <div className="h-12 w-12 text-[#f20d0d] mb-6 flex items-center justify-center bg-[#f20d0d]/10 rounded-lg group-hover:bg-[#f20d0d] group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-3xl">newspaper</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#f20d0d] transition-colors">Media Literacy</h4>
              <p className="text-gray-400 leading-relaxed text-sm">Memahami agenda setting media, framing berita, dan cara menyaring informasi.</p>
            </div>

            {/* Card 3 */}
            <div className="group bg-[#050505] border border-white/10 p-8 hover:border-[#f20d0d] transition-colors duration-300 relative overflow-hidden rounded-lg">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#f20d0d]/10 rounded-full blur-2xl group-hover:bg-[#f20d0d]/20 transition-all"></div>
              <div className="h-12 w-12 text-[#f20d0d] mb-6 flex items-center justify-center bg-[#f20d0d]/10 rounded-lg group-hover:bg-[#f20d0d] group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-3xl">science</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#f20d0d] transition-colors">Scientific Method</h4>
              <p className="text-gray-400 leading-relaxed text-sm">Menerapkan prinsip keraguan ilmiah dan validasi data dalam memecahkan masalah.</p>
            </div>

            {/* Card 4 */}
            <div className="group bg-[#050505] border border-white/10 p-8 hover:border-[#f20d0d] transition-colors duration-300 relative overflow-hidden rounded-lg">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#f20d0d]/10 rounded-full blur-2xl group-hover:bg-[#f20d0d]/20 transition-all"></div>
              <div className="h-12 w-12 text-[#f20d0d] mb-6 flex items-center justify-center bg-[#f20d0d]/10 rounded-lg group-hover:bg-[#f20d0d] group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-3xl">forum</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#f20d0d] transition-colors">Civic Discussion</h4>
              <p className="text-gray-400 leading-relaxed text-sm">Membangun ruang diskusi publik yang sehat, konstruktif, dan bebas ad hominem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Content Section */}
      <section className="py-24 bg-[#050505] border-white/10 border-dashed" style={{ borderTopWidth: "1px", borderColor: "rgba(255,255,255,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Rilis Terbaru</h2>
            <Link href="/media" className="hidden md:flex items-center gap-2 text-[#f20d0d] font-bold uppercase tracking-widest text-sm hover:underline">
              Lihat Semua <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Featured Large Item */}
            <div className="md:col-span-8 group cursor-pointer">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-4">
                <div className="absolute inset-0 bg-[#f20d0d]/0 group-hover:bg-[#f20d0d]/40 transition-colors z-10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 text-6xl transform scale-50 group-hover:scale-100 transition-all duration-300">play_circle</span>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Black and white photo of a protest"
                  className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpUMEWv3V6uRDtasQI7hKOF4RKcdwhn2ynISuhMsdCfF6gBvrgDUf1g-6-nKmkUl9l7ENYDt0zkYVgZg-EeGRu4oD--s-vMTF5_ffovr8lTsbbHEsJ6V3c_IHvO3DNPQmgwGfK0bhZjO9VF3trUy0fkUyuQ4U7NMwaw6Uu8Fhhq9FiNVnppqtZ7WYJgzSijd8LI-10bzyVOk1tRFheGOoQZUjj11ujoqpB8VOvDMGwQM3FL7_BNPymamfI8HJa-KcalZkriwojB3Zg"
                />
                <div className="absolute top-4 left-4 z-20 bg-[#f20d0d] text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">Video Essay</div>
                <div className="absolute bottom-4 right-4 z-20 bg-black/80 text-white text-xs font-mono px-2 py-1 rounded">15:24</div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-[#f20d0d] transition-colors leading-tight">Membongkar Hoaks Politik: Analisis Propaganda Digital</h3>
              <p className="text-gray-400 line-clamp-2">Sebuah investigasi mendalam tentang bagaimana buzzer bekerja dan memanipulasi opini publik di tahun politik.</p>
            </div>

            {/* Side Items */}
            <div className="md:col-span-4 flex flex-col gap-8">
              <div className="group cursor-pointer flex flex-col h-full">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-3">
                  <div className="absolute inset-0 bg-[#f20d0d]/0 group-hover:bg-[#f20d0d]/40 transition-colors z-10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 text-4xl transform scale-50 group-hover:scale-100 transition-all duration-300">play_circle</span>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Black and white photo of a classroom"
                    className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj7T4GI76nNKqljKCySMTYxkAGkpN1VuXFFVzY_CQbbprL7aLbVV31CX7zBgx5iUc-iN0z8VJRE8UtpvqdlZzB0K848IBdmncqDFL9ZjUQtYBqwAydWeUKIRM4_2lxXZ00pm3j2Wl_XmjJfM4bLhX4LGF8Q1QAIVzmgVM1R0VrlHfzjVG-ZBSxyrUppDNc15LFA6YBx8EgIXfPEwkxILuhCLXxys_-aJpTFogq8njrtoSU2WqbQN3mJRwsNVeH5Rhu5xfO4ZtwRkSQ"
                  />
                  <div className="absolute top-3 left-3 z-20 bg-white text-black text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">Podcast</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#f20d0d] transition-colors">Sejarah Propaganda Perang Dunia II</h3>
                <p className="text-gray-500 text-sm">45 min • Ep. 24</p>
              </div>

              <div className="group cursor-pointer flex flex-col h-full">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-3">
                  <div className="absolute inset-0 bg-[#f20d0d]/0 group-hover:bg-[#f20d0d]/40 transition-colors z-10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 text-4xl transform scale-50 group-hover:scale-100 transition-all duration-300">play_circle</span>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Black and white photo of an eye"
                    className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmM_ZToVFZcAMUm1qzrKuQWSh0TBZVoBISiAt5euDC9Wa9vN2KhiVGU0CsfiSbHryT23vA8bC0RgLa_JTYC3Z6Miib5h0Cz9K_GLGIc7E64563_hB_oZRXbHkMrRPcqHadHrPF6Uew6yq65g7JQIJH2niJrJUy0ztxz4xep1ZgH8l9VxuykW4keZ5glqcs77_HxlQUcV1bJRUyxNXWILx-L9mG-nuitbnwU7AodlMzUCsFJSn2f92Wdm6Av-f83edJRXiGaSxrczwk"
                  />
                  <div className="absolute top-3 left-3 z-20 bg-[#f20d0d] text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">Video Essay</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#f20d0d] transition-colors">Apa itu Critical Thinking?</h3>
                <p className="text-gray-500 text-sm">12 min • Fundamentals</p>
              </div>
            </div>
          </div>

          <div className="mt-8 md:hidden text-center">
            <Link href="/media" className="inline-flex items-center gap-2 text-[#f20d0d] font-bold uppercase tracking-widest text-sm hover:underline">
              Lihat Semua <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-24 bg-[#121212] border-y border-white/10 relative overflow-hidden border-dashed" style={{ borderTopWidth: "1px", borderBottomWidth: "1px" }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#444 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div className="flex flex-col gap-2">
              <span className="text-6xl md:text-8xl font-bold text-white tracking-tighter">10k<span className="text-[#f20d0d] text-4xl align-top">+</span></span>
              <span className="text-lg text-gray-400 font-medium uppercase tracking-widest border-t border-white/20 pt-4 mt-2 inline-block w-full md:w-3/4">Pelajar Terdaftar</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-6xl md:text-8xl font-bold text-white tracking-tighter">500<span className="text-[#f20d0d] text-4xl align-top">+</span></span>
              <span className="text-lg text-gray-400 font-medium uppercase tracking-widest border-t border-white/20 pt-4 mt-2 inline-block w-full md:w-3/4">Jam Konten Edukasi</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-6xl md:text-8xl font-bold text-white tracking-tighter">30</span>
              <span className="text-lg text-gray-400 font-medium uppercase tracking-widest border-t border-white/20 pt-4 mt-2 inline-block w-full md:w-3/4">Kota Dijangkau</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-[#050505] border-white/10 border-dashed" style={{ borderTopWidth: "1px", borderBottomWidth: "1px" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -inset-4 border border-[#f20d0d]/30 rounded-lg translate-x-4 translate-y-4 hidden md:block"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Black and white photo of people discussing"
                className="w-full rounded-lg grayscale shadow-2xl relative z-10"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6c42tAB-XniN5PA2lK2tLSTdnIs7p0qxj6L-YgQ1uIEDTslqMJXpLhl_ta_hc0NcImqftdfeqjE3QJZ25T2oFqHjyNT9DP4Vl26WFahQ0dWP-R5iIkkGufrO4nUl2l-sqVdiS1CxCXRw_z-W0IWoEuXZ3YaeqFdMAqWkjXQrJZf8b7K5zVkYkcd59jvRZ8bKkWIBz43CEErBZffSp6_ilrULMJeCEEPIV9a-iysbtC9QAHiElq5b8wTE4UTsH_7yNU9b5SNFdRCs7"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-[#f20d0d] font-bold uppercase tracking-widest text-sm mb-4 block">Suara Komunitas</span>
              <blockquote className="text-3xl md:text-4xl font-bold text-white leading-tight mb-8">
                &quot;Malaka bukan sekadar platform belajar, ini adalah senjata melawan kebodohan struktural. Saya belajar melihat dunia tanpa filter bias.&quot;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-gray-700 rounded-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Portrait of a man"
                    className="w-full h-full object-cover grayscale"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8f34p0HJ6X_ZAY9fjKJ4_WuMoIQOJk1wCWiqp0DSIeFrCw1-3s1zlaTNXDY7-lU0MjKejyrnhdD4hyTwGeDyunRamCfIHMpeTrIqSZMV5r_vGLE7ikx2TWepJ7d2038mQ-5Idl7oYCaBq0ZU1NB-UMAcOKuZ8gix7LSeooes2k7EsE7DA6l2B3HEMTVmu-PqMJJKnCEYl9qccdFgdRt83uJ8FMQluHsMWlfbcW9IoZtREoFcn1pdTIdL2njxhASd55bAg7n1JKSxZ"
                  />
                </div>
                <div>
                  <div className="text-white font-bold">Raka Adhitama</div>
                  <div className="text-[#f20d0d] text-sm">Mahasiswa Sosiologi, Jakarta</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#f20d0d] py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">SIAP BERPIKIR KRITIS?</h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-10 font-medium">
            Bergabunglah dengan ribuan pemikir bebas lainnya. Akses konten eksklusif, forum diskusi, dan webinar mingguan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-black hover:bg-gray-900 text-white text-lg font-bold px-10 py-4 rounded transition-all hover:-translate-y-1 shadow-xl">
              Gabung Sekarang
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#f20d0d] text-white text-lg font-bold px-10 py-4 rounded transition-all">
              Pelajari Silabus
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
