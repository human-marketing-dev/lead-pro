import type { Metadata } from "next";

import GrowthPartnerHero from "@/components/sections/growth-partner/Hero";
import RutaOperativa from "@/components/sections/growth-partner/RutaOperativa";
import RutaDesarrollador from "@/components/sections/home/RutaDesarrollador";
import Cierre from "@/components/sections/home/Cierre";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: { absolute: "Lead Pro | Growth Partner para desarrolladores en Monterrey" },
  description:
    "Lead Pro opera el área comercial completa de tu desarrollo: atracción de leads, procesamiento y agendamiento, dirección de ventas y cierre. Costo de venta cercano al 3% y primera venta proyectada a 45 días.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Growth Partner | Lead Pro",
    description:
      "Tú te enfocas en desarrollar; nosotros en vender. Estructura comercial completa orientada a velocidad de colocación.",
    url: "/",
    images: [{ url: "/og-image-lead-pro.png", width: 1200, height: 630 }],
  },
};

// ─── Home · Growth Partner ────────────────────────────────────────────────────
// Desarrollado sobre el Brief Maestro de Comunicación §6.

export default function Home() {
  return (
    <>
      <GrowthPartnerHero />
      <RutaDesarrollador antetitulo="El servicio" mostrarCta={false} />
      <RutaOperativa />
      <Cierre />
    </>
  );
}
