import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
 
// ─── Fuentes ─────────────────────────────────────────────────────────────────
 
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});
 
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});
 
// ─── Metadata ────────────────────────────────────────────────────────────────
 
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://leadpro.com.mx";
 
export const metadata: Metadata = {
  title: {
    default: "Lead Pro — Asesoría Inmobiliaria en Monterrey",
    template: "%s | Lead Pro",
  },
  description:
    "Asesoría e inteligencia inmobiliaria en Monterrey y área metropolitana. Acceso a 95 proyectos activos y 4,480 unidades disponibles.",
  metadataBase: new URL(siteUrl),
 
  openGraph: {
    title: "Lead Pro — Asesoría Inmobiliaria en Monterrey",
    description:
      "Asesoría e inteligencia inmobiliaria en Monterrey y área metropolitana.",
    url: siteUrl,
    siteName: "Lead Pro",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/og-image-lead-pro.png",
        width: 1200,
        height: 630,
        alt: "Lead Pro — Asesoría Inmobiliaria",
      },
    ],
  },
 
  twitter: {
    card: "summary_large_image",
    title: "Lead Pro — Asesoría Inmobiliaria en Monterrey",
    description:
      "Asesoría e inteligencia inmobiliaria en Monterrey y área metropolitana.",
    images: ["/og-image-lead-pro.png"],
  },
 
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
 
};
 
// ─── Layout ──────────────────────────────────────────────────────────────────
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${dmSans.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased bg-white text-ink">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}