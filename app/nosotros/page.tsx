import NosotrosHero from "@/components/sections/NosotrosHero";
import Valores from "@/components/sections/Valores";
import Cofra from "@/components/sections/Cofra";

// Fuera de la navegación y del sitemap: la ruta sigue viva pero no se indexa.
export const metadata = {
  robots: { index: false, follow: false },
  title: "Nosotros",
  description:
    "Conoce al equipo detrás de Lead Pro. Somos asesores inmobiliarios en Monterrey comprometidos con construir relaciones, no transacciones.",
  openGraph: {
    title: "Nosotros | Lead Pro",
    description:
      "Conoce al equipo detrás de Lead Pro. Asesores inmobiliarios en Monterrey comprometidos con tu mejor decisión.",
    images: [{ url: "/og-image-lead-pro.png", width: 1200, height: 630 }],
  },
};

export default function NosotrosPage() {
  return (
    <>
      <NosotrosHero />
      <Valores />
      {/*<Cofra />*/}
    </>
  );
}

