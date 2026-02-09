import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Malaka Project",
  description: "Gerakan literasi digital dan pendidikan berpikir kritis untuk Indonesia. Kami melawan disinformasi dengan logika dan akal sehat.",
  keywords: ["critical thinking", "literasi digital", "Indonesia", "edukasi", "berpikir kritis"],
  authors: [{ name: "Malaka Project" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
