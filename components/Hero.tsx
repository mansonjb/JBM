import ImageSlot from "./ImageSlot";
import { hero, site } from "@/lib/site";

/**
 * Sur grand écran, le texte se pose sur la photo, tenu à gauche par un voile latéral.
 * Sur mobile, la photo passe au-dessus du texte : superposer les deux couvrait le visage.
 */
export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex flex-col md:min-h-[92vh] md:justify-end"
    >
      <div className="relative h-[44vh] min-h-[280px] w-full md:absolute md:inset-0 md:h-auto md:min-h-0">
        <ImageSlot
          brief="PHOTO 1 · plan large, lieu de travail réel, regard objectif"
          src="/hero-un-degre.jpg"
          alt="Jean-Baptiste Manson à son bureau, sous le mur Un Degré"
          sizes="100vw"
          className="object-[62%_22%] md:object-[62%_center]"
          priority
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(96deg, rgba(21,23,28,0.80) 0%, rgba(21,23,28,0.64) 36%, rgba(21,23,28,0.26) 62%, rgba(21,23,28,0.06) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(180deg, rgba(21,23,28,0.34) 0%, rgba(21,23,28,0.05) 40%, rgba(21,23,28,0.62) 100%)",
        }}
      />

      <div className="u-hero-inner relative w-full border-b border-line md:border-0">
        <div className="u-container">
          <div className="u-grid">
            <div className="col-span-7 lg:col-span-8">
              <div className="u-surtitre u-mb-16 md:text-paper/80!">
                {hero.kicker}
              </div>
              <h1 className="u-display u-mb-32 text-balance text-ink md:text-paper">
                {hero.title}
              </h1>
              <p className="u-courant u-mb-32 md:text-paper/90">{hero.lead}</p>
              <a href="#contact" className="u-cta">
                {site.ctaPrimary}
                <span className="u-cta-arrow" aria-hidden="true">
                  →
                </span>
              </a>
              <p className="u-note u-cta-micro md:text-paper/75!">
                {site.ctaMicro}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
