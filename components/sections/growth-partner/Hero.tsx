import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

// ─── Hero · Growth Partner ────────────────────────────────────────────────────

export default function GrowthPartnerHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(140deg, #0a0f1a 0%, #101f3d 55%, #0a0a0f 100%)",
      }}
    >
      <div
        className="absolute -top-32 -right-24 w-[520px] h-[520px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.26) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <Container className="relative z-10 pt-[130px] pb-12 sm:pt-[150px] sm:pb-16 lg:pt-[190px] lg:pb-32">
        <div className="max-w-[720px] lg:max-w-[50%]">

          <FadeIn delay={0}>
            <p className="flex items-center gap-3 text-overline text-blue-light mb-8">
              <span className="block w-8 h-px bg-blue-light" />
              Growth Partner
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-display text-h1 text-white mb-7 tracking-[-0.02em]">
              Tú te enfocas en desarrollar;<br className="hidden sm:block" />{" "}
              nosotros en <em className="italic text-blue-light">vender.</em>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-b1 text-white/60 max-w-[560px] mb-11">
              Growth Partner es el servicio con el que Lead Pro opera el área
              comercial completa de un desarrollo: atracción de leads,
              procesamiento y agendamiento, dirección de ventas y cierre. El
              argumento es uno solo: velocidad de colocación.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contacto"
                className="inline-block bg-blue hover:bg-blue-light text-white text-btn px-8 py-[15px] rounded-[4px] transition-all duration-200 hover:-translate-y-px"
              >
                Hablemos de tu proyecto
              </Link>
              <Link
                href="#desarrollador"
                className="inline-flex items-center gap-2 hover:gap-4 text-btn text-white border border-white/25 hover:border-white/60 px-8 py-[15px] rounded-[4px] transition-all duration-200"
              >
                Conocer el servicio
                <span aria-hidden>→</span>
              </Link>
            </div>
          </FadeIn>

        </div>

      </Container>

      {/* Imagen — debajo del texto en mobile/tablet, mitad derecha en desktop */}
      <div className="relative h-[260px] sm:h-[380px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[48%]">
        <Image
          src="/hero-desarrollo.webp"
          alt="Render de desarrollo residencial en Monterrey"
          fill
          priority
          sizes="(min-width: 1024px) 48vw, 100vw"
          className="object-cover"
        />
        {/* Velo — funde la foto con el fondo: hacia arriba en mobile, hacia el texto en desktop */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{
            background:
              "linear-gradient(180deg, #0d1528 0%, rgba(13,21,40,0.25) 35%, rgba(10,10,15,0.1) 100%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              "linear-gradient(90deg, #0d1830 0%, rgba(13,24,48,0.55) 30%, rgba(10,10,15,0.15) 70%, rgba(10,10,15,0.35) 100%)",
          }}
          aria-hidden
        />
      </div>
    </section>
  );
}
