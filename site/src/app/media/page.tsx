"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const categories = ["Semua", "Sosial", "Politik", "Ekonomi", "Pendidikan", "Filsafat"];

const contentCards = [
    {
        id: 1,
        title: "Ilusi Kebebasan Finansial di Era Gig Economy",
        category: "Ekonomi",
        duration: "20:15",
        timeAgo: "2 Hari lalu",
        excerpt: "Apakah kerja freelance benar-benar membebaskan atau justru bentuk eksploitasi baru?",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCb2Vg4WKshR35E35nMvljfkAoEx9ZrlIoQEYpvrMWbSJkXxgb0H7UJSPJpc_DYHFtgC6lMVEaB5JOYjjOAul-Eq-rZhj9bM3wj9bKkDsUGYSoKXRMQCDKUcRVEMBKY2SIiQiC3JlGX9QYw11H5P0Mb4cQKUDTgxy6qgcye6Rd7k9xsuTFmtV3pHk5V94Rm2Rpzb9u4qDqaBBt7TkPs77aHnwsyQ1kaM_FQKfth8NvV6GpFE4jGSeUcjHa6KsU7Tsh5oBuo65FerI-s",
    },
    {
        id: 2,
        title: "Pendidikan vs Pengajaran: Mana yang Hilang?",
        category: "Pendidikan",
        duration: "32:40",
        timeAgo: "5 Hari lalu",
        excerpt: "Refleksi sistem pendidikan kita yang lebih fokus pada nilai daripada karakter.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3zZXZ5MJ1-AzuRuPqm9tYRMZj2CJijFhka37Jj25Sv-9EGHu1TTFbeAEi8oqxEC_IyGFI6NQcm7aWvKDMmj3MzvpQcivykQ9vW8k3a9todm4IjMrnUBpg1UzmxHauSOGhfJqeaJQSRr_Qo0jnm-odk5vTb8tiWqouiPPVPe2YUJxjZrnwu32jlz2CDK33W-mbRJ86bdHDbPtajUQNolyrxi1KCMe2qEJutQ004EyYh6M6ANV1encFK8EbpihYeKoSm0SzCGpWhfzJ",
    },
    {
        id: 3,
        title: "Sejarah Utang Negara dan Beban Generasi",
        category: "Politik",
        duration: "50:00",
        timeAgo: "1 Minggu lalu",
        excerpt: "Bagaimana utang negara hari ini akan dibayar oleh anak cucu kita besok.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHVhbAL05MqYes14MeWlNjE1lgxkjcRZj1O0Wzzl3zu0OPsx2mnVKIFwo7bByDCRPjf5SkEpstyQvGkLE5EZqniSft67u5tihTWzsfJWWplCnDzMPu6UuPPMcJRuinMyl45xnKNbok8DDS0fZotkzg8DMOROroT7h3Sl-JdDbSc6wr0NydT0F9ZPvwfs8IjPpOZ4dP5umqszBB1bmWL2HZw-Td9JtWb6Y3UKcaN6mZgjyjT4jqWA4NLkecUCjMEqkQJ3sCbhiPQmH5",
    },
    {
        id: 4,
        title: "Filsafat Stoikisme untuk Manusia Modern",
        category: "Filsafat",
        duration: "15:30",
        timeAgo: "2 Minggu lalu",
        excerpt: "Mengapa ajaran kuno ini semakin relevan di tengah hiruk pikuk media sosial.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoZFh2eGC5trEcvMFURtFJZA5TaYzmClf8wmAPDv0flC27NDxxXyKQWeuA4QlSTn9WeKLGcVS5r36pe0dwpM__DKb-GRhF-7HMU-Ml86DcWzNVZbWwOxHLsFxFfyjbCr8WuiJlsmOG9gXLmH7LfTnkcPbi71y1xkOD1rppsRrdrLDy3jlUlhm_ew1j_hTJsb_qTU7KeJiieRn4D8eezurExeezsciBNz3GsYFdAQEvUxnE0eI9jXr-1Try3Q2UqnZi_a9tl2AVMbV-",
    },
    {
        id: 5,
        title: "Dampak AI pada Seni dan Kreativitas",
        category: "Teknologi",
        duration: "28:10",
        timeAgo: "2 Minggu lalu",
        excerpt: "Apakah AI akan membunuh seniman atau menjadi alat baru?",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5z9vIJSbrXNfK3Q_bImV8414_hQytv50IF0XMDKdnqQFlRJnNZO08fU7wcH-gP4RpKgkc0R6n-Wb48HgKUxM_0-N1IzS2DcdekD5WNBjdviJvHmVh5uFwMyTs4omNki202rBhqApEHaAevUE6b8-WLrZx0vKoA157KhiKRMfT1Vr8J3xtz3tfsd15YcZu1rSei7U_fg3iwuRzJnrSxHa0PBrbsPeCM2KgGZOURhB_G81gyTwU2UiI9jHF_YRjB-IlPFOlsPrZRCIA",
    },
    {
        id: 6,
        title: "Logika Dasar: Mengenal Logical Fallacy",
        category: "Edukasi",
        duration: "40:05",
        timeAgo: "3 Minggu lalu",
        excerpt: "Panduan praktis agar tidak sesat pikir dalam berargumentasi.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrKX9oYnIQEss7DTKrnPut5AxGknuSzotIt-JcVRT1fGb0n2bN3GfJlRG7ZZyh3GDYXTWV0jagWf21e6QzQP4QdoKqNDa4ZFpgNS-ukQQZrVAXnLjAu7Q55_h9yM8-2IJM75bx9lfEhuVGPEF2TZ0pzhtkegow5xrWZ6b5wQodujqKAGJSaqMD5Rgne3x8pQCUxeEiuK293cZGXDE5dqwNaIMmo6CQLuIdEB6u8JWFdoA2eQqFRGNTNBARbFpaSvpPmPoDjC6HQ5iB",
    },
];

export default function MediaPage() {
    const [activeCategory, setActiveCategory] = useState("Semua");

    return (
        <>
            <Navbar />

            <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 py-8 pt-24">
                {/* Hero Title */}
                <section className="flex flex-col gap-4 mb-10 mt-4 border-b border-[#392828] pb-10">
                    <div className="flex flex-wrap justify-between items-end gap-6">
                        <div className="flex flex-col gap-2 max-w-2xl">
                            <h1 className="text-white text-5xl md:text-7xl font-black leading-[0.9] tracking-[-0.04em] uppercase">
                                Pemikiran <span className="text-[#f20d0d]">&amp;</span><br />Diskusi
                            </h1>
                            <p className="text-[#ba9c9c] text-lg md:text-xl font-normal leading-relaxed max-w-xl mt-4">
                                Mengasah nalar kritis melalui konten edukasi dan diskursus publik yang mendalam dan berani.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <div className="h-px w-24 bg-[#f20d0d] self-end mb-2 hidden md:block"></div>
                        </div>
                    </div>
                </section>

                {/* Filters */}
                <section className="flex gap-3 mb-10 overflow-x-auto pb-2 sticky top-[70px] z-40 bg-[#181111]/90 backdrop-blur-sm py-2 -mx-4 px-4 md:-mx-0 md:px-0 hide-scrollbar">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 transition-all ${activeCategory === cat
                                    ? "border border-[#f20d0d] bg-[#f20d0d] hover:scale-105 active:scale-95"
                                    : "border border-[#392828] bg-[#221616] hover:border-[#ba9c9c] hover:bg-[#2a1c1c]"
                                }`}
                        >
                            <p className={`text-sm font-${activeCategory === cat ? "bold" : "medium"} uppercase tracking-wide ${activeCategory === cat ? "text-white" : "text-[#ba9c9c]"
                                }`}>
                                {cat}
                            </p>
                        </button>
                    ))}
                </section>

                {/* Featured Content */}
                <section className="mb-16">
                    <div className="group relative flex flex-col md:flex-row items-stretch overflow-hidden rounded-xl bg-[#221616] border border-[#392828] hover:border-[#f20d0d]/50 transition-colors duration-300">
                        <div className="relative w-full md:w-3/5 aspect-video md:aspect-auto overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-rrj-xkB1qoI097g8FlZHPN1B4w988SY5nBmhLGhG54uZBQVfxKpnkLWJS4EaiJMYgJLL7MdEk3JtulbTUu3oFGFJDYUyMIZKSwpCG44WGAjj6F4OEc4_0amlSYihz0UhmyxXLz-vXc0-Jkyz25p3kCoSVoCUCNv736kAHIs2Oa5KrOfclk5dhsfOMmbDCglcCkCtJJfDqFrkU5PtO-5Aftm7_yHv8HPH0-6ZbwBdyIU5gq33yr2Cx-Bh7Js0PjvDvYXVs9dbhZtM')" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#221616]"></div>
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-16 h-16 rounded-full bg-[#f20d0d]/90 flex items-center justify-center backdrop-blur-sm shadow-[0_0_30px_rgba(242,13,13,0.4)]">
                                    <span className="material-symbols-outlined text-white text-4xl ml-1">play_arrow</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex w-full md:w-2/5 flex-col justify-center p-6 md:p-10 lg:p-12 gap-4">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-2 py-1 rounded bg-[#f20d0d]/20 text-[#f20d0d] text-xs font-bold tracking-wider uppercase border border-[#f20d0d]/20">Politik</span>
                                <span className="text-[#ba9c9c] text-xs font-medium uppercase tracking-wide">• Featured</span>
                            </div>
                            <h3 className="text-white text-3xl lg:text-4xl font-bold leading-[1.1] tracking-[-0.02em] group-hover:text-[#f20d0d] transition-colors">
                                Mengapa Demokrasi Butuh Oposisi Kuat?
                            </h3>
                            <p className="text-[#ba9c9c] text-base line-clamp-3">
                                Dalam episode spesial ini, kita membedah peran vital oposisi dalam menjaga keseimbangan kekuasaan dan mencegah tirani mayoritas dalam sistem demokrasi modern.
                            </p>
                            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-[#392828]/50">
                                <div className="flex items-center gap-2 text-[#ba9c9c]">
                                    <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                                    <span className="text-xs font-medium">12 Okt 2023</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#ba9c9c]">
                                    <span className="material-symbols-outlined text-[18px]">schedule</span>
                                    <span className="text-xs font-medium">45 Min</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Divider with Label */}
                <div className="flex items-center gap-4 mb-8">
                    <span className="material-symbols-outlined text-[#f20d0d]">grid_view</span>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wider">Terbaru</h3>
                    <div className="h-px bg-[#392828] flex-grow ml-2"></div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                    {contentCards.map((card) => (
                        <a key={card.id} className="group flex flex-col gap-3" href="#">
                            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-[#392828] group-hover:border-[#f20d0d]/50 transition-colors">
                                <div
                                    className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: `url('${card.image}')` }}
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-xs font-bold text-white">{card.duration}</div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#f20d0d]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex justify-between items-center">
                                    <span className="text-[#f20d0d] text-xs font-bold uppercase tracking-wider">{card.category}</span>
                                    <span className="text-[#ba9c9c] text-xs">{card.timeAgo}</span>
                                </div>
                                <h4 className="text-white text-xl font-bold leading-tight group-hover:text-[#f20d0d] transition-colors line-clamp-2">
                                    {card.title}
                                </h4>
                                <p className="text-[#ba9c9c] text-sm line-clamp-2 mt-1">{card.excerpt}</p>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-16">
                    <button className="w-full md:w-auto min-w-[200px] border border-[#392828] text-white hover:border-[#f20d0d] hover:text-[#f20d0d] bg-transparent py-3 px-8 rounded-lg font-bold transition-all text-sm uppercase tracking-widest">
                        Muat Lebih Banyak
                    </button>
                </div>

                {/* Newsletter Block */}
                <section className="mt-20 mb-8 rounded-2xl bg-[#f20d0d] p-8 md:p-12 relative overflow-hidden">
                    {/* Decorative Pattern */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                        <div className="max-w-xl">
                            <h3 className="text-white text-3xl font-black leading-tight tracking-tight mb-2">Jangan Tertinggal Diskusi.</h3>
                            <p className="text-white/90 text-lg">Dapatkan analisis mingguan dan jadwal diskusi terbaru langsung di inbox Anda.</p>
                        </div>
                        <div className="w-full md:w-auto flex-1 max-w-md">
                            <form className="flex flex-col sm:flex-row gap-3">
                                <input
                                    className="w-full px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:bg-white/20 focus:border-white transition-colors"
                                    placeholder="Alamat email anda"
                                    required
                                    type="email"
                                />
                                <button className="bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-900 transition-colors whitespace-nowrap" type="submit">
                                    Berlangganan
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </>
    );
}
