"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    const toggleMenu = useCallback(() => {
        setMobileMenuOpen((prev) => !prev);
    }, []);

    return (
        <>
            <nav className="fixed top-0 w-full z-50 bg-[#050505]/95 backdrop-blur border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 text-white z-50">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/logo-malaka.jpg" alt="Malaka Project" className="h-8 w-8 rounded object-cover" />
                        <h1 className="text-xl font-bold tracking-tight uppercase">Malaka Project</h1>
                    </Link>

                    {/* Desktop Nav */}
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

                    {/* Desktop CTA */}
                    <button className="hidden md:block bg-[#f20d0d] hover:bg-red-600 text-white text-sm font-bold px-6 py-2.5 rounded transition-colors uppercase tracking-wide">
                        Gabung Gerakan
                    </button>

                    {/* Mobile Hamburger Button */}
                    <button
                        className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
                        onClick={toggleMenu}
                        aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
                        aria-expanded={mobileMenuOpen}
                    >
                        <div className="relative w-6 h-5">
                            {/* Top bar */}
                            <span
                                className="absolute left-0 w-full h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out"
                                style={{
                                    top: mobileMenuOpen ? "50%" : "0%",
                                    transform: mobileMenuOpen
                                        ? "translateY(-50%) rotate(45deg)"
                                        : "translateY(0) rotate(0)",
                                }}
                            />
                            {/* Middle bar */}
                            <span
                                className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out"
                                style={{
                                    opacity: mobileMenuOpen ? 0 : 1,
                                    transform: mobileMenuOpen
                                        ? "translateY(-50%) scaleX(0)"
                                        : "translateY(-50%) scaleX(1)",
                                }}
                            />
                            {/* Bottom bar */}
                            <span
                                className="absolute left-0 w-full h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out"
                                style={{
                                    bottom: mobileMenuOpen ? "auto" : "0%",
                                    top: mobileMenuOpen ? "50%" : "auto",
                                    transform: mobileMenuOpen
                                        ? "translateY(-50%) rotate(-45deg)"
                                        : "translateY(0) rotate(0)",
                                }}
                            />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setMobileMenuOpen(false)}
                aria-hidden="true"
            />

            {/* Mobile Menu Drawer */}
            <div
                className={`fixed top-0 right-0 z-40 h-full w-[85%] max-w-sm bg-[#0a0a0a]/98 backdrop-blur-xl border-l border-white/10 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col h-full pt-28 px-8 pb-10">
                    {/* Nav Links */}
                    <div className="flex flex-col gap-2">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`group flex items-center gap-4 py-3 px-4 rounded-xl ${pathname === link.href
                                    ? "bg-[#f20d0d]/10 text-[#f20d0d]"
                                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                                    }`}
                                style={{
                                    transitionProperty: "opacity, transform, background-color, color",
                                    transitionDuration: "300ms",
                                    transitionTimingFunction: "ease",
                                    transitionDelay: mobileMenuOpen ? `${index * 50 + 100}ms` : "0ms",
                                    opacity: mobileMenuOpen ? 1 : 0,
                                    transform: mobileMenuOpen ? "translateX(0)" : "translateX(20px)",
                                }}
                            >
                                {pathname === link.href && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#f20d0d] shrink-0" />
                                )}
                                <span className="text-lg font-semibold uppercase tracking-wider">
                                    {link.label}
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* Divider */}
                    <div
                        className="my-8 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"
                        style={{
                            transitionProperty: "opacity",
                            transitionDuration: "400ms",
                            transitionTimingFunction: "ease",
                            transitionDelay: mobileMenuOpen ? "500ms" : "0ms",
                            opacity: mobileMenuOpen ? 1 : 0,
                        }}
                    />

                    {/* Mobile CTA */}
                    <button
                        className="w-full bg-[#f20d0d] hover:bg-red-600 text-white text-sm font-bold px-6 py-4 rounded-xl uppercase tracking-wider shadow-lg shadow-red-900/30"
                        style={{
                            transitionProperty: "opacity, transform, background-color",
                            transitionDuration: "300ms",
                            transitionTimingFunction: "ease",
                            transitionDelay: mobileMenuOpen ? "550ms" : "0ms",
                            opacity: mobileMenuOpen ? 1 : 0,
                            transform: mobileMenuOpen ? "translateY(0)" : "translateY(10px)",
                        }}
                    >
                        Gabung Gerakan
                    </button>

                    {/* Bottom Section */}
                    <div
                        className="mt-auto"
                        style={{
                            transitionProperty: "opacity",
                            transitionDuration: "400ms",
                            transitionTimingFunction: "ease",
                            transitionDelay: mobileMenuOpen ? "600ms" : "0ms",
                            opacity: mobileMenuOpen ? 1 : 0,
                        }}
                    >
                        <p className="text-xs text-gray-500 uppercase tracking-wider text-center">
                            © 2026 Malaka Project
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
