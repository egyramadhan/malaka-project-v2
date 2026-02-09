import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ProgramsPage() {
    return (
        <>
            <Navbar />

            {/* Main Content */}
            <main className="flex-1 pt-16">
                <div className="mx-auto flex max-w-7xl flex-col px-6 py-8 lg:px-10 lg:py-12">
                    {/* Breadcrumb */}
                    <div className="mb-8 flex flex-wrap gap-2 text-sm font-medium">
                        <Link className="text-[#ba9c9c] hover:text-white transition-colors" href="/">Beranda</Link>
                        <span className="text-[#ba9c9c]">/</span>
                        <span className="text-[#f20d0d]">Program &amp; Inisiatif</span>
                    </div>

                    {/* Page Header */}
                    <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                        <div className="max-w-2xl">
                            <h1 className="text-5xl font-bold uppercase leading-[0.9] tracking-tighter text-white md:text-7xl lg:text-8xl">
                                Program <span className="text-[#f20d0d]">&amp;</span> <br />Inisiatif
                            </h1>
                        </div>
                        <div className="max-w-md border-l-2 border-[#f20d0d] pl-4">
                            <p className="text-lg text-[#ba9c9c]">
                                Membangun ekosistem berpikir kritis melalui ruang diskusi, literasi digital, dan intervensi pendidikan langsung.
                            </p>
                        </div>
                    </div>

                    {/* Bento Grid Layout */}
                    <div className="grid auto-rows-[minmax(300px,auto)] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">

                        {/* Item 1: Roadshow Kampus (Large, spans 2 cols on LG) */}
                        <div className="group relative flex flex-col justify-end overflow-hidden rounded-xl bg-[#221919] lg:col-span-2 min-h-[400px]">
                            <div
                                className="absolute inset-0 z-0 h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMwRI6OtSbs2qRb1AHnpO_e3KcHiZvGyrDCkDxc91No2MLYBJJ1w0R4BCI0a8WlxuPmQvQTqXgVj484Y-3Vx9HWntwwV-ot7-FCoPd3FSVhduiUkoniz3AIeeoE8KvOwx74NcR69cLzfhYafvgkIP-dydQ0oL9CQka3DOCojoI4Y_NL1LEzJM_f9JT4MCGDYsikah2c3Gyh3Zhnf6h3jI4d1gwW5LCFxG3P-1rSSYFtBJuNoyrquec-3MbyMoql9jj45Zq95FB7aLQ")' }}
                            />
                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                            <div className="relative z-20 flex flex-col p-6 lg:p-8">
                                <div className="mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[#f20d0d]">school</span>
                                    <span className="text-xs font-bold uppercase tracking-widest text-[#f20d0d]">Edukasi Offline</span>
                                </div>
                                <h3 className="mb-2 text-3xl font-bold leading-tight text-white md:text-4xl">Roadshow Kampus</h3>
                                <p className="mb-6 max-w-lg text-gray-300">
                                    Membawa wacana kritis langsung ke dalam ruang kelas universitas di seluruh Indonesia. Diskusi terbuka, tanpa sensor.
                                </p>
                                <button className="w-fit rounded-lg bg-[#f20d0d] px-6 py-2.5 text-sm font-bold text-white transition-transform hover:translate-x-1 hover:bg-red-700">
                                    Pelajari Lebih Lanjut
                                </button>
                            </div>
                        </div>

                        {/* Item 2: Diskusi Literasi Digital (Tall on LG) */}
                        <div className="group relative flex flex-col justify-end overflow-hidden rounded-xl bg-[#221919] lg:row-span-2 min-h-[400px] lg:min-h-full">
                            <div
                                className="absolute inset-0 z-0 h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_-dDMa-ufnZC4RihvU6jwjqpZieoDAT7BmeGhkMsp6TEnOlR67l-dcC7xUhGX37rFxSklgh1s6iJDIjGPUssuV9BqO0Dikwoppq2q5vTNjIEkgsmF6P6IMDKgJ5Ypp2_CikvmDucHgBh0OKn8_KaJJBK4tnAqOlXaM2kTTZpD8p6hrrSjFz8bAe4pVCoh3nQgKl3kuNzfaLIIfIew-qGRAZZxlmRzFurhAbMLg_S98VEYFio_cBv2YAnV4LHOzy35TKrE41V3SJw5")' }}
                            />
                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/40 to-black/10"></div>
                            <div className="relative z-20 flex h-full flex-col justify-end p-6 lg:p-8">
                                <div className="mb-auto border-b border-white/10 pb-4">
                                    <span className="text-5xl font-bold text-white/10 group-hover:text-[#f20d0d]/20 transition-colors">02</span>
                                </div>
                                <div className="mt-8">
                                    <div className="mb-2 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[#f20d0d]">forum</span>
                                        <span className="text-xs font-bold uppercase tracking-widest text-[#f20d0d]">Workshop</span>
                                    </div>
                                    <h3 className="mb-2 text-3xl font-bold leading-tight text-white">Diskusi Literasi Digital</h3>
                                    <p className="mb-6 text-gray-300">
                                        Mendekonstruksi hoaks, bias media, dan logical fallacy secara real-time bersama pakar media.
                                    </p>
                                    <button className="w-full rounded-lg border border-white/20 bg-white/5 px-6 py-2.5 text-center text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-[#f20d0d] hover:border-[#f20d0d]">
                                        Lihat Jadwal
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Item 3: Kampus Masa Depan */}
                        <div className="group relative flex flex-col overflow-hidden rounded-xl bg-[#221919] lg:col-span-1 min-h-[300px]">
                            <div className="p-6 lg:p-8 flex flex-col h-full relative z-20">
                                <div className="mb-4 size-10 flex items-center justify-center rounded-full bg-[#f20d0d]/20 text-[#f20d0d]">
                                    <span className="material-symbols-outlined">architecture</span>
                                </div>
                                <h3 className="mb-2 text-2xl font-bold text-white">Kampus Masa Depan</h3>
                                <p className="mb-auto text-sm text-[#ba9c9c]">
                                    Rencana pembangunan fisik pusat inkubasi intelektual. Ruang aman untuk berpikir.
                                </p>
                                <a className="mt-4 flex items-center gap-2 text-sm font-bold text-white hover:text-[#f20d0d] transition-colors" href="#">
                                    Lihat Blueprint <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                            </div>
                            {/* Abstract overlay pattern */}
                            <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#f20d0d]/10 to-transparent opacity-50"></div>
                            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#f20d0d] blur-[80px] opacity-20"></div>
                        </div>

                        {/* Item 4: Komunitas Malaka */}
                        <div className="group relative flex flex-col items-center justify-center overflow-hidden rounded-xl bg-[#f20d0d] lg:col-span-1 min-h-[300px] text-center p-6 lg:p-8">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <div className="relative z-10 flex flex-col items-center">
                                <span className="material-symbols-outlined mb-4 text-5xl text-white">diversity_3</span>
                                <h3 className="mb-2 text-2xl font-bold text-white">Komunitas Malaka</h3>
                                <p className="mb-6 text-sm text-white/80">
                                    Bergabung dengan jaringan pemikir kritis dari seluruh nusantara.
                                </p>
                                <button className="rounded-lg bg-white px-6 py-2.5 text-sm font-bold text-[#f20d0d] transition-transform hover:scale-105">
                                    Gabung Discord
                                </button>
                            </div>
                        </div>

                        {/* Item 5: Penerbitan & Riset (Full width bottom) */}
                        <div className="group relative flex flex-col items-start justify-center overflow-hidden rounded-xl bg-[#221919] lg:col-span-3 min-h-[250px]">
                            <div
                                className="absolute inset-0 z-0 h-full w-full bg-cover bg-center opacity-40 transition-opacity duration-500 group-hover:opacity-60"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAtEaf-XT1tzgHaCV7Zx2XXX520okJ12r56GiwVOH6Q_wTiyOosgt3u73z-Vp4fL0MxT4aTPNVc3QNfSFMGts1lwSDU8Jp2CnJmSZbe22_eBo1h8REXvwR6jkpBKsfUv11CC4y3yMeC_T1fYi4ToXd7syfrTdAAbXLiO31iXJkWmfxOFVMCFif1b0AHbnp1yCd12lN8iLASDEce55GFgpEZa3thOUI3CKW5u8hYhNVyLNmFLWHd_C9M-Qt4C_RejBp19kK8e-dKxDSZ")' }}
                            />
                            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#181111] via-[#181111]/80 to-transparent"></div>
                            <div className="relative z-20 flex w-full max-w-3xl flex-col p-6 lg:p-10">
                                <span className="mb-2 text-xs font-bold uppercase tracking-widest text-[#f20d0d]">Publikasi</span>
                                <h3 className="mb-3 text-3xl font-bold text-white">Penerbitan &amp; Riset</h3>
                                <p className="mb-6 text-[#ba9c9c]">
                                    Menerbitkan jurnal, esai, dan buku putih mengenai keadaan literasi digital di Indonesia. Data driven, impact oriented.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <a className="inline-flex items-center gap-1 text-sm font-medium text-white hover:text-[#f20d0d] transition-colors" href="#">
                                        <span className="material-symbols-outlined text-lg">description</span> Jurnal Terbaru
                                    </a>
                                    <span className="text-white/20">|</span>
                                    <a className="inline-flex items-center gap-1 text-sm font-medium text-white hover:text-[#f20d0d] transition-colors" href="#">
                                        <span className="material-symbols-outlined text-lg">book</span> Katalog Buku
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
