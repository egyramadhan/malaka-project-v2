import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndonesiaMap from "@/components/IndonesiaMap";
import CountUp from "@/components/CountUp";

export default function ImpactPage() {
    return (
        <>
            <Navbar />

            <main className="flex-grow flex flex-col pt-16">
                {/* Hero Section: The Big Number */}
                <section className="relative w-full px-6 lg:px-16 pt-20 pb-12 border-b border-[#f20d0d]/20">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-16">
                            <div className="max-w-xl">
                                <h1 className="text-[#f20d0d] text-sm md:text-base font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                    <span className="w-8 h-[2px] bg-[#f20d0d] block"></span>
                                    Dampak Kami
                                </h1>
                                <p className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-white">
                                    Mengukur jejak <br className="hidden md:block" /> literasi digital.
                                </p>
                            </div>
                            <div className="mt-8 md:mt-0 max-w-sm text-[#ba9c9c] text-sm md:text-base leading-relaxed text-right md:text-left">
                                <p>Kami percaya bahwa perubahan dimulai dari cara kita berpikir. Ini adalah data di balik gerakan kami di seluruh nusantara.</p>
                            </div>
                        </div>
                        <div className="relative py-10 md:py-20 group">
                            {/* Decorative background lines */}
                            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                                <div className="w-full h-px bg-[#f20d0d]"></div>
                                <div className="w-full h-px bg-[#f20d0d]"></div>
                            </div>
                            <div className="flex flex-col items-center justify-center text-center relative z-10">
                                <span className="text-sm font-medium text-[#ba9c9c] uppercase tracking-widest mb-4">Total Jangkauan Audiens</span>
                                <div className="text-[clamp(4rem,15vw,12rem)] font-black text-white leading-[0.85] tracking-tighter flex items-start">
                                    2.4M
                                    <span className="text-4xl md:text-7xl text-[#f20d0d] mt-4 md:mt-8">+</span>
                                </div>
                                <div className="mt-6 flex items-center gap-2 bg-[#0f0808] border border-[#f20d0d]/30 px-4 py-2 rounded-full">
                                    <span className="material-symbols-outlined text-green-500 text-sm">trending_up</span>
                                    <span className="text-green-500 text-sm font-bold">+15% year over year</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Metrics Grid */}
                <section className="w-full border-b border-[#f20d0d]/20 bg-[#0f0808]">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {/* Stat 1 */}
                        <div className="p-10 lg:p-16 flex flex-col items-start justify-between min-h-[320px] hover:bg-white/5 transition-colors duration-300 group relative border-b md:border-b-0 border-[#f20d0d]/30 md:border-r">
                            <div className="w-full flex justify-between items-start">
                                <span className="material-symbols-outlined text-[#f20d0d] text-4xl group-hover:scale-110 transition-transform">school</span>
                                <span className="text-xs font-bold text-[#f20d0d] uppercase tracking-widest border border-[#f20d0d] px-2 py-1 rounded">Partners</span>
                            </div>
                            <div>
                                <p className="text-[#ba9c9c] text-sm font-medium uppercase tracking-wider mb-2">Kolaborasi Kampus</p>
                                <h3 className="text-[clamp(3rem,10vw,8rem)] font-bold text-white tracking-tighter leading-[0.9]">
                                    <CountUp end={50} suffix="+" />
                                </h3>
                                <p className="text-sm text-[#ba9c9c] mt-4">Universitas dan institusi pendidikan di seluruh Indonesia.</p>
                            </div>
                        </div>
                        {/* Stat 2 */}
                        <div className="p-10 lg:p-16 flex flex-col items-start justify-between min-h-[320px] hover:bg-white/5 transition-colors duration-300 group relative border-b md:border-b-0 border-[#f20d0d]/30 md:border-r">
                            <div className="w-full flex justify-between items-start">
                                <span className="material-symbols-outlined text-[#f20d0d] text-4xl group-hover:scale-110 transition-transform">forum</span>
                                <span className="text-xs font-bold text-[#f20d0d] uppercase tracking-widest border border-[#f20d0d] px-2 py-1 rounded">Events</span>
                            </div>
                            <div>
                                <p className="text-[#ba9c9c] text-sm font-medium uppercase tracking-wider mb-2">Diskusi Publik</p>
                                <h3 className="text-[clamp(3rem,10vw,8rem)] font-bold text-white tracking-tighter leading-[0.9]">
                                    <CountUp end={150} suffix="+" />
                                </h3>
                                <p className="text-sm text-[#ba9c9c] mt-4">Ruang dialektika terbuka untuk umum, online dan offline.</p>
                            </div>
                        </div>
                        {/* Stat 3 */}
                        <div className="p-10 lg:p-16 flex flex-col items-start justify-between min-h-[320px] hover:bg-white/5 transition-colors duration-300 group relative">
                            <div className="w-full flex justify-between items-start">
                                <span className="material-symbols-outlined text-[#f20d0d] text-4xl group-hover:scale-110 transition-transform">diversity_3</span>
                                <span className="text-xs font-bold text-[#f20d0d] uppercase tracking-widest border border-[#f20d0d] px-2 py-1 rounded">Growth</span>
                            </div>
                            <div>
                                <p className="text-[#ba9c9c] text-sm font-medium uppercase tracking-wider mb-2">Anggota Komunitas</p>
                                <h3 className="text-[clamp(3rem,10vw,8rem)] font-bold text-white tracking-tighter leading-[0.9]">
                                    <CountUp end={10} suffix="k" />
                                </h3>
                                <p className="text-sm text-[#ba9c9c] mt-4">Pemikir kritis yang aktif berdiskusi dalam ekosistem Malaka.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="relative w-full py-20 px-6 lg:px-16 overflow-hidden">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
                        <div className="flex-1 lg:max-w-md z-10">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">Peta Sebaran <span className="text-[#f20d0d]">Aktivitas</span></h2>
                            <p className="text-[#ba9c9c] mb-10 text-lg">Dari Sabang sampai Merauke, kami membangun simpul-simpul berpikir kritis. Setiap titik mewakili komunitas lokal yang aktif.</p>
                            <div className="flex flex-col gap-4">
                                {/* List Item 1 */}
                                <div className="flex items-center justify-between p-4 border-l-2 border-[#f20d0d] bg-white/5 rounded-r-lg hover:bg-white/10 transition-colors cursor-pointer">
                                    <div>
                                        <h4 className="font-bold text-lg text-white">Jakarta</h4>
                                        <p className="text-xs text-[#ba9c9c]">Headquarters &amp; Main Events</p>
                                    </div>
                                    <span className="material-symbols-outlined text-[#f20d0d]">arrow_forward</span>
                                </div>
                                {/* List Item 2 */}
                                <div className="flex items-center justify-between p-4 border-l-2 border-transparent hover:border-[#f20d0d]/50 bg-transparent hover:bg-white/5 rounded-r-lg transition-all cursor-pointer">
                                    <div>
                                        <h4 className="font-bold text-lg text-[#ba9c9c] hover:text-white">Yogyakarta</h4>
                                        <p className="text-xs text-[#ba9c9c]">Student Hub</p>
                                    </div>
                                    <span className="material-symbols-outlined text-[#ba9c9c]">arrow_forward</span>
                                </div>
                                {/* List Item 3 */}
                                <div className="flex items-center justify-between p-4 border-l-2 border-transparent hover:border-[#f20d0d]/50 bg-transparent hover:bg-white/5 rounded-r-lg transition-all cursor-pointer">
                                    <div>
                                        <h4 className="font-bold text-lg text-[#ba9c9c] hover:text-white">Surabaya</h4>
                                        <p className="text-xs text-[#ba9c9c]">Community Center</p>
                                    </div>
                                    <span className="material-symbols-outlined text-[#ba9c9c]">arrow_forward</span>
                                </div>
                            </div>
                            <button className="mt-8 flex items-center gap-2 text-[#f20d0d] font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all">
                                Lihat Selengkapnya
                                <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                            </button>
                        </div>
                        {/* Map Visualization */}
                        <div className="flex-1 relative min-h-[400px] rounded-xl overflow-hidden border border-[#f20d0d]/20 bg-[#0f0808] group">
                            {/* Abstract Grid Background */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(242,13,13,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(242,13,13,0.05)_1px,transparent_1px)] bg-size-[40px_40px]"></div>

                            {/* Interactive SVG Map */}
                            <div className="absolute inset-0 p-8">
                                <IndonesiaMap className="text-[#333] opacity-80" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonial / Editorial Quote */}
                <section className="w-full py-24 px-6 border-t border-[#f20d0d]/20 bg-[#f20d0d]/5">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="material-symbols-outlined text-6xl text-[#f20d0d] mb-6 opacity-50">format_quote</span>
                        <h3 className="text-2xl md:text-4xl font-medium leading-tight mb-8 text-white">
                            &quot;Malaka Project tidak hanya memberikan informasi, tetapi mengajarkan kami cara memprosesnya. Ini adalah fondasi penting bagi demokrasi yang sehat.&quot;
                        </h3>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full overflow-hidden border border-[#f20d0d]">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    className="w-full h-full object-cover"
                                    alt="Portrait of Sarah D., student leader"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMQDGnjmtoELTp2XRvDsHx9NgHetgua22baVdACO1KTPstFyfwfkE00a3bimlkaRVA5Z3YO18-4n9mtuXFAVPOGDOW3WX_AlTODCAVp65uIoR4q2RYgeiIb_S0gXC1j0oJ3t-8hWy0An-skRThtBdeYCF9ed-9eq9GShKLR4jgQ9Xz1PDQyMRbyzDVb1w9P-JbVx6JDWmLJadH-fe1xMwBQ2H5jFfnEOX52IsWhHmTBJAbLC2ofUMQas-mvoZzVB6oELYT-RvRvs5b"
                                />
                            </div>
                            <p className="text-white font-bold">Sarah D.</p>
                            <p className="text-[#ba9c9c] text-sm uppercase tracking-wider">Ketua BEM Universitas Indonesia (2023)</p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="w-full py-20 px-6 bg-[#f20d0d] text-white text-center">
                    <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Jadilah Bagian dari Perubahan</h2>
                        <p className="text-lg md:text-xl font-medium opacity-90 max-w-xl">Bergabunglah dengan 10,000+ pemikir kritis lainnya dan akses materi eksklusif.</p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4">
                            <button className="bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-900 transition-colors border border-transparent">
                                Gabung Komunitas
                            </button>
                            <button className="bg-transparent text-white px-8 py-4 rounded-lg font-bold hover:bg-black/10 transition-colors border border-white">
                                Pelajari Manifesto
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
