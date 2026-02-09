"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/about", label: "Tentang" },
    { href: "/programs", label: "Program" },
    { href: "/media", label: "Media" },
    { href: "/community", label: "Komunitas" },
    { href: "/impact", label: "Dampak" },
    { href: "/contact", label: "Kontak" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#050505]/95 backdrop-blur border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/logo-malaka.jpg" alt="Malaka Project" className="h-8 w-8 rounded object-cover" />
                    <h1 className="text-xl font-bold tracking-tight uppercase">Malaka Project</h1>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium transition-colors uppercase tracking-wide ${pathname === link.href
                                    ? "text-[#f20d0d]"
                                    : "text-gray-300 hover:text-[#f20d0d]"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <button className="bg-[#f20d0d] hover:bg-red-600 text-white text-sm font-bold px-6 py-2.5 rounded transition-colors uppercase tracking-wide">
                    Gabung Gerakan
                </button>

                <button className="md:hidden text-white">
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>
        </nav>
    );
}
