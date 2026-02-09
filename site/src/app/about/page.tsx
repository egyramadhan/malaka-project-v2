import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <section className="relative w-full min-h-[85vh] flex items-center justify-center px-4 overflow-hidden border-b border-[#392828] pt-20">
                {/* Background grid - full width */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, rgba(242,13,13,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(242,13,13,0.07) 1px, transparent 1px)",
                        backgroundSize: "80px 80px",
                        backgroundPosition: "center center",
                        maskImage: "radial-gradient(ellipse at 50% 50%, black 0%, transparent 70%)",
                        WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 0%, transparent 70%)",
                    }}
                />
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{
                    maskImage: "radial-gradient(ellipse at 50% 50%, black 0%, transparent 70%)",
                    WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 0%, transparent 70%)",
                }}>
                    <defs>
                        <pattern id="about-dashed-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                            <line x1="80" y1="0" x2="80" y2="80" stroke="rgba(242,13,13,0.05)" strokeWidth="1" strokeDasharray="6 6" />
                            <line x1="0" y1="80" x2="80" y2="80" stroke="rgba(242,13,13,0.05)" strokeWidth="1" strokeDasharray="6 6" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#about-dashed-grid)" />
                </svg>
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 flex flex-col gap-6 z-10">
                        <div className="flex items-center gap-2 text-[#f20d0d] font-bold tracking-widest uppercase text-xs mb-2">
                            <span className="w-8 h-[2px] bg-[#f20d0d]"></span>
                            Est. 2023
                        </div>
                        <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
                            Tentang <br />
                            <span className="text-[#f20d0d]">Malaka</span> <br />
                            Project
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed mt-4 border-l-2 border-[#f20d0d]/50 pl-6">
                            Gerakan literasi digital dan pendidikan berpikir kritis untuk Indonesia. Kami hadir sebagai antitesis terhadap arus informasi yang dangkal.
                        </p>
                    </div>
                    <div className="lg:col-span-5 relative h-full min-h-[400px] flex items-center justify-center">
                        {/* Abstract graphic element */}
                        <div className="absolute inset-0 bg-[#f20d0d]/10 blur-[100px] rounded-full"></div>
                        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg grayscale-img group">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                alt="Group of serious young people discussing in a dimly lit industrial style room"
                                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDptIKxRjEGBeX-_TS8oKfKroH8GlrME7HFO24e7iJ7mjCFMRtCJwEF-p5ws87EYaEQVTXkEnoDAyWVQyn7KTk3pX_HoA0hIdoF4Gby1NL3HTsWEVLC7SxjytuPVcC3YbjnOfLZnvMdGk_JdpYUgk2MguQewwlD3OdSEmIEL8hxJMxVxB4lLSoNyOb5jzynMexgQpKfth4TdL-aYDagyi-4slu7TKul0OWLoBXY8UWUsPrXw31ASclf-sOmeWWPWhZG2ibQ5e2IWHmz"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                                <p className="text-white text-sm font-mono uppercase tracking-widest">Diskusi Publik Vol. 1</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Are (Founding) */}
            <section className="py-24 px-4 bg-[#221010] relative">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row gap-16 md:gap-24">
                        <div className="md:w-1/3 sticky top-32 h-fit">
                            <h2 className="text-4xl md:text-5xl font-bold uppercase leading-none tracking-tight mb-6">
                                Siapa <br /><span className="text-gray-500">Kami?</span>
                            </h2>
                            <div className="h-1 w-20 bg-[#f20d0d] mb-8"></div>
                            <p className="text-gray-400 text-sm font-mono">
                                // THE ORIGIN STORY
                            </p>
                        </div>
                        <div className="md:w-2/3 flex flex-col gap-12">
                            <div className="prose prose-invert prose-lg max-w-none">
                                <p className="text-2xl font-medium leading-normal text-white mb-6">
                                    Lahir pada tahun 2023, Malaka Project bermula dari keresahan kolektif akan rendahnya literasi digital di tengah tsunami informasi.
                                </p>
                                <p className="text-gray-400">
                                    Di era di mana hoaks menyebar lebih cepat daripada fakta, dan sentimen mengalahkan argumen, kami memutuskan untuk berhenti mengeluh dan mulai bergerak. Kami bukan sekadar media; kami adalah laboratorium pemikiran.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-[#2a1d1d] p-8 rounded-lg border border-[#392828] hover:border-[#f20d0d]/50 transition-colors group">
                                    <span className="material-symbols-outlined text-4xl text-[#f20d0d] mb-4 group-hover:scale-110 transition-transform inline-block">psychology</span>
                                    <h3 className="text-xl font-bold text-white mb-2">Berpikir Kritis</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">Melawan dogma dengan logika. Membedah informasi hingga ke akarnya.</p>
                                </div>
                                <div className="bg-[#2a1d1d] p-8 rounded-lg border border-[#392828] hover:border-[#f20d0d]/50 transition-colors group">
                                    <span className="material-symbols-outlined text-4xl text-[#f20d0d] mb-4 group-hover:scale-110 transition-transform inline-block">diversity_3</span>
                                    <h3 className="text-xl font-bold text-white mb-2">Komunitas</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">Membangun ekosistem belajar yang inklusif namun tajam.</p>
                                </div>
                            </div>
                            <div className="w-full h-80 rounded-lg overflow-hidden grayscale-img relative">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    alt="Close up of hands writing notes during a workshop"
                                    className="object-cover w-full h-full"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtrJtVVh3vwCdg-KoymJIQAQgc04AB3IRfj6KRQZEOvaXAcs7GgQWaZfHEWDVi3wU7I4fBvlt4q_WcUlVX_Tbz3HGBhJQOjlgyOy_cWLV8AAawJ-GUNXQPDtHGeHgTELUjCTpKoaZurWEWCL220G78PkQu8XIp5X20CpsTtGPyuHM_RIV-YbfCgOKJGPx3AitkVB2fjy0qb4cxsH37Ycyu4GxZobLi4aq7VR8KM0PYaXI0kN644T4D0_jClj-qGZ65Haf4EWUsCYZV"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inspiration (Tan Malaka) */}
            <section className="py-24 px-4 bg-[#181111] border-t border-[#392828]">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Image/Portrait Side */}
                        <div className="order-2 lg:order-1 relative">
                            <div className="absolute -inset-4 bg-[#f20d0d]/20 rounded-lg rotate-3 z-0"></div>
                            <div className="relative z-10 aspect-[3/4] bg-[#1a1a1a] rounded-lg overflow-hidden border border-[#392828]">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    alt="Portrait of Tan Malaka"
                                    className="object-cover w-full h-full grayscale mix-blend-luminosity"
                                    src="/tanmalaka.png"
                                />
                                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
                                    <h3 className="text-white text-3xl font-bold uppercase">Tan Malaka</h3>
                                    <p className="text-[#f20d0d] font-mono text-sm mt-1">1897 - 1949</p>
                                </div>
                            </div>
                        </div>
                        {/* Text Side */}
                        <div className="order-1 lg:order-2">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="h-[1px] w-12 bg-gray-500"></span>
                                <span className="text-gray-400 uppercase tracking-widest text-sm font-bold">Inspirasi Kami</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black uppercase text-white mb-8 leading-tight">
                                Semangat <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f20d0d] to-red-900">Madilog</span>
                            </h2>
                            <blockquote className="text-xl md:text-2xl font-light text-gray-300 italic mb-8 border-l-4 border-[#f20d0d] pl-6 py-2">
                                &quot;Tujuan pendidikan itu untuk mempertajam kecerdasan, memperkukuh kemauan serta memperhalus perasaan.&quot;
                            </blockquote>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Kami mengambil nama dari Tan Malaka bukan untuk mengkultuskan sosoknya, melainkan untuk merawat apinya. Filosofi <strong>Madilog (Materialisme, Dialektika, Logika)</strong> menjadi landasan kami dalam memandang dunia: realistis, dinamis, dan masuk akal.
                            </p>
                            <button className="text-white border-b border-[#f20d0d] pb-1 hover:text-[#f20d0d] transition-colors text-sm font-bold uppercase tracking-wide">
                                Pelajari Filosofi Madilog
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision */}
            <section className="py-32 px-4 bg-[#f20d0d] text-white text-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                <div className="container mx-auto relative z-10 max-w-4xl">
                    <span className="material-symbols-outlined text-6xl mb-6 opacity-80">visibility</span>
                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-80">Visi Kami</h2>
                    <p className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                        &quot;Menciptakan generasi Indonesia yang berdaulat secara intelektual, bebas dari pembodohan, dan berani bersuara di atas landasan logika.&quot;
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className="py-24 px-4 bg-[#181111]">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-4xl font-bold uppercase tracking-tight text-white">Misi Kami</h2>
                            <p className="text-gray-500 mt-2 max-w-md">Langkah konkret yang kami ambil setiap hari untuk mewujudkan visi.</p>
                        </div>
                        <div className="h-[1px] flex-1 bg-[#392828] mx-8 mb-2 hidden md:block"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Mission 1 */}
                        <div className="group relative p-8 bg-[#221a1a] border border-[#392828] rounded-xl hover:shadow-2xl hover:shadow-[#f20d0d]/10 transition-all duration-300">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-6xl text-[#f20d0d] rotate-12">school</span>
                            </div>
                            <div className="w-12 h-12 bg-[#f20d0d]/10 rounded-lg flex items-center justify-center text-[#f20d0d] mb-6 group-hover:bg-[#f20d0d] group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined">menu_book</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f20d0d] transition-colors">Edukasi Radikal</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Menyediakan konten edukatif yang mendalam, berani, dan menantang status quo pemikiran mainstream.
                            </p>
                            <div className="mt-6 w-8 h-1 bg-[#392828] group-hover:w-full group-hover:bg-[#f20d0d] transition-all duration-500"></div>
                        </div>
                        {/* Mission 2 */}
                        <div className="group relative p-8 bg-[#221a1a] border border-[#392828] rounded-xl hover:shadow-2xl hover:shadow-[#f20d0d]/10 transition-all duration-300">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-6xl text-[#f20d0d] -rotate-12">forum</span>
                            </div>
                            <div className="w-12 h-12 bg-[#f20d0d]/10 rounded-lg flex items-center justify-center text-[#f20d0d] mb-6 group-hover:bg-[#f20d0d] group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined">record_voice_over</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f20d0d] transition-colors">Diskursus Terbuka</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Menciptakan ruang aman untuk perdebatan ide yang keras namun tetap beradab dan logis.
                            </p>
                            <div className="mt-6 w-8 h-1 bg-[#392828] group-hover:w-full group-hover:bg-[#f20d0d] transition-all duration-500"></div>
                        </div>
                        {/* Mission 3 */}
                        <div className="group relative p-8 bg-[#221a1a] border border-[#392828] rounded-xl hover:shadow-2xl hover:shadow-[#f20d0d]/10 transition-all duration-300">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-6xl text-[#f20d0d]">rocket_launch</span>
                            </div>
                            <div className="w-12 h-12 bg-[#f20d0d]/10 rounded-lg flex items-center justify-center text-[#f20d0d] mb-6 group-hover:bg-[#f20d0d] group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined">handshake</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f20d0d] transition-colors">Aksi Nyata</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Berkolaborasi dengan institusi dan komunitas untuk membawa literasi digital ke akar rumput.
                            </p>
                            <div className="mt-6 w-8 h-1 bg-[#392828] group-hover:w-full group-hover:bg-[#f20d0d] transition-all duration-500"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 border-t border-[#392828]">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Jangan Hanya Menjadi Penonton</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Bergabunglah dengan ribuan pemuda lainnya dalam gerakan intelektual ini. Mari berdiskusi, belajar, dan tumbuh bersama.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-[#f20d0d] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2">
                            <span>Gabung Komunitas</span>
                            <span className="material-symbols-outlined">group_add</span>
                        </button>
                        <button className="bg-transparent border border-[#392828] hover:border-white text-white font-bold py-3 px-8 rounded-lg transition-colors">
                            Hubungi Kami
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
