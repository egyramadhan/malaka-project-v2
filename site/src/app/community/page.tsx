import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CommunityPage() {
    return (
        <>
            <Navbar />

            {/* Hero Section with Background Image */}
            <section className="relative min-h-[85vh] flex flex-col items-center justify-center p-6 lg:p-10 overflow-hidden pt-20">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center grayscale contrast-125"
                    style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1x0RNHaLzne0hj8eny-yZ1b2wGbFca4WJ8BXqeuQBDbu0-TxSjouDJwExRvd2Sb4kxUCUTR94WoUavAEjceMr6xlZXqGdbvlPyOfwVtxGI7R36sN3fNFUqAidVtVXcY5MaDjA5MWcAY9cpaJjrggRpweOXMTgKfj8cSwgIfHMkr9lyX7gmVwnewXDvwAbVuOKygKIF-0fIKE_B9hXw5pXmcSzmXTMMvDDVkS_MKJTYyWErfO4lFzuQlC7JJJZw5xaWAJ2IXbzrurl')` }}
                ></div>
                <div className="absolute inset-0 z-10 bg-linear-to-t from-[#181111] via-[#181111]/80 to-transparent"></div>

                <div className="relative z-20 flex flex-col items-center text-center max-w-4xl">
                    <span className="inline-block py-1 px-3 rounded-full bg-[#f20d0d]/20 border border-[#f20d0d]/40 text-[#f20d0d] text-xs font-bold uppercase tracking-widest mb-6">
                        Gerakan Literasi Digital
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter mb-8 uppercase">
                        Kami Adalah<br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-gray-200 to-gray-500">Malakan</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
                        Membangun Nalar Kritis Indonesia. Sebuah gerakan kolektif untuk masa depan bangsa yang lebih cerdas, logis, dan berdaya.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-10">
                        <button className="bg-[#f20d0d] hover:bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg tracking-wide transition-all shadow-[0_0_20px_rgba(242,13,13,0.3)] hover:shadow-[0_0_30px_rgba(242,13,13,0.5)]">
                            Bergabung Sekarang
                        </button>
                        <button className="bg-transparent border border-white/20 hover:border-white text-white px-8 py-4 rounded-lg font-bold text-lg tracking-wide transition-all backdrop-blur-sm">
                            Pelajari Misi Kami
                        </button>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/50">
                    <span className="material-symbols-outlined text-4xl">keyboard_arrow_down</span>
                </div>
            </section>

            {/* Stats Section */}
            <section className="border-y border-[#392828] bg-[#271b1b]/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                        <div className="flex flex-col gap-1">
                            <span className="text-3xl md:text-4xl font-bold text-white tracking-tighter">15,000+</span>
                            <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-medium">Anggota Aktif</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-3xl md:text-4xl font-bold text-white tracking-tighter">34</span>
                            <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-medium">Kota Dijangkau</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-3xl md:text-4xl font-bold text-white tracking-tighter">120+</span>
                            <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-medium">Event Publik</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-3xl md:text-4xl font-bold text-white tracking-tighter">∞</span>
                            <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-medium">Ide Liar</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Manifesto Block - High Impact Red Section */}
            <section className="bg-[#f20d0d] py-24 px-6 md:px-20 relative overflow-hidden">
                {/* Abstract Pattern Background */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-multiply pointer-events-none"></div>

                <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row gap-12 items-start">
                    <div className="md:w-1/3">
                        <h2 className="text-white text-5xl md:text-6xl font-black leading-none tracking-tighter mb-6">
                            SIAPA<br />ITU<br />MALAKAN?
                        </h2>
                        <div className="h-2 w-24 bg-black/30"></div>
                    </div>
                    <div className="md:w-2/3 flex flex-col gap-8">
                        <p className="text-white text-xl md:text-2xl font-medium leading-relaxed">
                            Malakan bukan sekadar pengikut. <span className="bg-black/20 px-1 font-bold">Malakan adalah pemikir.</span> Kami adalah komunitas yang percaya bahwa nalar kritis adalah kunci kemajuan bangsa. Kami tidak menelan informasi mentah-mentah; kami bertanya, kami berdebat, dan kami membedah realitas.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                            <div className="bg-black/10 p-6 rounded-lg border border-black/5 hover:bg-black/20 transition-colors">
                                <span className="material-symbols-outlined text-4xl text-white mb-4">psychology</span>
                                <h3 className="text-white font-bold text-lg mb-2">Berpikir Kritis</h3>
                                <p className="text-white/80 text-sm">Mempertanyakan informasi dengan landasan logika yang kuat.</p>
                            </div>
                            <div className="bg-black/10 p-6 rounded-lg border border-black/5 hover:bg-black/20 transition-colors">
                                <span className="material-symbols-outlined text-4xl text-white mb-4">forum</span>
                                <h3 className="text-white font-bold text-lg mb-2">Diskusi Terbuka</h3>
                                <p className="text-white/80 text-sm">Ruang aman untuk berdebat dan bertukar gagasan secara sehat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Activities Section */}
            <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Kegiatan Komunitas</h2>
                        <p className="text-gray-400 text-lg max-w-xl">
                            Dari ruang kelas hingga panggung debat, kami mengaktifkan ruang-ruang publik dengan gagasan.
                        </p>
                    </div>
                    <button className="flex items-center gap-2 text-[#f20d0d] font-bold hover:text-white hover:bg-[#f20d0d] px-4 py-2 rounded transition-colors group">
                        Lihat Semua Agenda
                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 - Debat Terbuka */}
                    <article className="group relative bg-[#271b1b] border border-[#392828] rounded-xl overflow-hidden h-[400px] flex flex-col justify-end">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCzi2cHOeyYT9ri4dXlj9Do5I5Qv4SPn-3IZvTvVga2CAy86sd9kOo_v1EVRvAt4BDnA3JGsDUeP42XFEw8Z1y-wBQ_Ve2NeZ-By77LQpjkNxeKinoML6OLkB6q8OjeOPA1qsuChU5MuwkkWTk-54GehQRh-L6fYct65gK2YJYpve1J2zko6JlQU9eAHvDst8w-OHqeJJ4oePkL5GPC8-ht9BQUNJ1LLrK4uX_j9JBpil-q20B2g9KEByT39XecE4Q39ed4jb-FeSkh')` }}
                        ></div>
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent"></div>
                        <div className="relative z-10 p-8 flex flex-col gap-3">
                            <span className="inline-block px-3 py-1 bg-[#f20d0d] text-white text-xs font-bold uppercase tracking-wider w-fit rounded">Event Bulanan</span>
                            <h3 className="text-2xl font-bold text-white group-hover:text-[#f20d0d] transition-colors">Debat Terbuka</h3>
                            <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                Adu gagasan mengenai isu terkini dengan format debat parlementer yang terstruktur.
                            </p>
                        </div>
                    </article>

                    {/* Card 2 - Kelas Berpikir */}
                    <article className="group relative bg-[#271b1b] border border-[#392828] rounded-xl overflow-hidden h-[400px] flex flex-col justify-end">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDW9vuggK9uBCDxbI1i-3V6qbyyea6eqtntqJGZKxw8HVKEszjeDXSzgzDc6KpBFN3jNetxDruovbFyzzdg51jGUk-6YT1XEgAqkahSQxf-SG0m9krT4ZnXxQ-n2tPMAewZIHAZOI8muk5WrS3tN_g6ToQhtfP5JN3dQdyCMhJN9gX11fvM7-I-g_EtbB5hOcGyE7TJ5TbNMeSiTA-YrHnh1Oqy4wPBlchbTouWNImrbRqmMq2xOzXRIVBqWvrLbv8Z4t3qflAYPhHQ')` }}
                        ></div>
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent"></div>
                        <div className="relative z-10 p-8 flex flex-col gap-3">
                            <span className="inline-block px-3 py-1 bg-white text-black text-xs font-bold uppercase tracking-wider w-fit rounded">Edukasi</span>
                            <h3 className="text-2xl font-bold text-white group-hover:text-[#f20d0d] transition-colors">Kelas Berpikir</h3>
                            <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                Workshop intensif mempelajari logical fallacies, bias kognitif, dan analisis media.
                            </p>
                        </div>
                    </article>

                    {/* Card 3 - Kopi Darat */}
                    <article className="group relative bg-[#271b1b] border border-[#392828] rounded-xl overflow-hidden h-[400px] flex flex-col justify-end">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBbUaoUFV70l7nZ-gi3lVIW5wtiF1YLgiMViQhg3RdrzTzgeSgK-5Ka1R78MP_0706mve3WpSHtwA6c9BDyaP2LlKAIn1iqLht_uII5-jpSMDgFTwQDnh2U2S1yHfZ4vnIn2A-BrlzvJmtmbtHCFXLXLY5AKaQ4j22bIPenzmMrCGVgYzrJAUPSUlTnHVNMj16Liy2RiAPVw0rKBve6FkAg_GFwk_FQ3RcV0-WOUKNjFDvI_EX1P1JwwNRIQ3oTqoABz6dlRQJeV5K3')` }}
                        ></div>
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent"></div>
                        <div className="relative z-10 p-8 flex flex-col gap-3">
                            <span className="inline-block px-3 py-1 bg-white text-black text-xs font-bold uppercase tracking-wider w-fit rounded">Networking</span>
                            <h3 className="text-2xl font-bold text-white group-hover:text-[#f20d0d] transition-colors">Kopi Darat</h3>
                            <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                Pertemuan santai antar anggota komunitas regional untuk membangun jejaring.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            {/* Editorial Quote / Testimonial Section */}
            <section className="bg-[#271b1b] py-32 px-6 border-y border-[#392828] relative overflow-hidden">
                <div className="max-w-6xl mx-auto relative z-10">
                    <span className="material-symbols-outlined text-8xl text-[#f20d0d]/20 absolute -top-10 -left-10">format_quote</span>
                    <div className="flex flex-col gap-12">
                        <blockquote className="text-center">
                            <p className="font-serif italic text-3xl md:text-5xl lg:text-6xl text-gray-200 leading-tight">
                                &quot;Malaka mengubah cara saya mengonsumsi berita. Saya tidak lagi membaca judul lalu marah, tapi membaca isi lalu berpikir.&quot;
                            </p>
                            <footer className="mt-10 flex flex-col items-center gap-2">
                                <cite className="not-italic text-[#f20d0d] font-bold tracking-widest uppercase text-sm">Andi Pratama</cite>
                                <span className="text-gray-500 text-sm">Mahasiswa, Anggota Regional Jakarta</span>
                            </footer>
                        </blockquote>
                        {/* Simple Slider Indicators */}
                        <div className="flex justify-center gap-3 mt-8">
                            <button className="w-12 h-1 bg-[#f20d0d] rounded-full"></button>
                            <button className="w-12 h-1 bg-gray-700 rounded-full hover:bg-gray-500 transition-colors"></button>
                            <button className="w-12 h-1 bg-gray-700 rounded-full hover:bg-gray-500 transition-colors"></button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 md:px-10 max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">Siap Bergabung?</h2>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                    Jangan biarkan nalarmu tumpul. Bergabunglah dengan ribuan pemikir lainnya dan mulailah perjalanan intelektualmu hari ini.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-[#f20d0d] hover:bg-red-600 text-white text-lg font-bold px-10 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-[#f20d0d]/20">
                        Gabung Komunitas via Telegram
                    </button>
                    <button className="bg-[#271b1b] hover:bg-white/5 border border-[#392828] text-white text-lg font-bold px-10 py-4 rounded-lg transition-all flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined">mail</span>
                        Langganan Newsletter
                    </button>
                </div>
            </section>

            <Footer />
        </>
    );
}
