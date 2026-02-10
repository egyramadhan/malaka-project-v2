"use client";

import React from "react";

interface IndonesiaMapProps {
    className?: string;
}

const IndonesiaMap: React.FC<IndonesiaMapProps> = ({ className = "" }) => {
    // Coordinate system: 0 0 1000 368 viewBox (based on public/id.svg)

    const locations = [
        { name: "Medan", x: 120, y: 130, delay: "1s" }, // Est: Sumatra is far left
        { name: "Jakarta", x: 290, y: 225, delay: "0s" }, // Java is bottom center-left
        { name: "Yogyakarta", x: 350, y: 240, delay: "0.3s" },
        { name: "Surabaya", x: 385, y: 230, delay: "0.5s" },
        { name: "Bali", x: 440, y: 245, delay: "2s" },
        { name: "Balikpapan", x: 470, y: 180, delay: "0.7s" }, // Kalimantan is center-top
        { name: "Makassar", x: 530, y: 210, delay: "1.5s" }, // Sulawesi center-right
        { name: "Jayapura", x: 920, y: 190, delay: "1.2s" }  // Papua far right
    ];

    return (
        <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
            {/* Use the external SVG file */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/id.svg"
                alt="Indonesia Map"
                className="w-full h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-500"
            />

            {/* Pulse Points based on locations */}
            {locations.map((loc) => (
                <div
                    key={loc.name}
                    className="absolute"
                    style={{
                        left: `${(loc.x / 1000) * 100}%`,
                        top: `${(loc.y / 368) * 100}%`,
                        transform: 'translate(-50%, -50%)'
                    }}
                >
                    <div
                        className="w-2 h-2 bg-[#f20d0d] rounded-full animate-ping"
                        style={{ animationDelay: loc.delay }}
                    ></div>
                    <div className="absolute inset-0 w-2 h-2 bg-[#f20d0d] rounded-full shadow-[0_0_6px_2px_rgba(242,13,13,0.4)]"></div>

                    {/* Tooltip on hover (optional) */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 opacity-0 hover:opacity-100 transition-opacity bg-black/80 px-2 py-1 rounded text-xs text-white pointer-events-none whitespace-nowrap z-10 border border-[#f20d0d]/30">
                        {loc.name}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default IndonesiaMap;
