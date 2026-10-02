import DesarrolladoresHero from "@/components/sections/DesarrolladoresHero";
import DesarrolladoresTrack from "@/components/sections/DesarrolladoresTrack";
import Modalidades from "@/components/sections/Modalidades";
import PorQueLeadPro from "@/components/sections/PorQueLeadPro";

export const metadata = {
  title: "Para Desarrolladores",
  description:
    "Lead Pro opera como brazo comercial estratégico para desarrolladores en Monterrey. Master broker, gerencia comercial y marketing digital orientado a resultados.",
  openGraph: {
    title: "Para Desarrolladores | Lead Pro",
    description:
      "Comercializa tu proyecto con estructura y resultados. Master broker y gerencia comercial para desarrolladores en Monterrey.",
    images: [{ url: "/og-image-lead-pro.png", width: 1200, height: 630 }],
  },
};

export default function DesarrolladoresPage() {
  return (
    <>
      <DesarrolladoresHero />
      <DesarrolladoresTrack />
      <Modalidades />
      <PorQueLeadPro />
    </>
  );
}