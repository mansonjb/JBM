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
      className="relative flex flex-col md:h-[92vh] md:min-h-[640px] md:justify-end"
    >
      <div className="relative h-[44vh] min-h-[280px] w-full md:absolute md:inset-0 md:h-auto md:min-h-0">
        <ImageSlot
          brief="PHOTO 1 · plan large, lieu de travail réel, regard objectif, l'air interrompu"
          src="/hero-un-degre.jpg"
          alt="Jean-Baptiste à son bureau, sous le mur Un Degré"
          sizes="100vw"
          className="object-[62%_22%] md:object-[62%_center]"
          priority
        />
      </div>

      {/* Voiles réservés à la superposition. */}
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

      <div className="relative w-full border-b border-line px-[6vw] py-14 md:border-0 md:pb-[9vh] md:pt-0">
        <div className="md:pointer-events-none md:max-w-[52%]">
          <div className="mb-7 text-[12px] tracking-[0.14em] text-muted uppercase md:text-paper/80">
            {hero.kicker}
          </div>
          <h1 className="u-display m-0 mb-7 max-w-[16ch] text-balance text-ink [font-size:clamp(38px,5.6vw,92px)] md:max-w-none md:text-paper">
            {hero.title}
          </h1>
          <p className="m-0 mb-9 max-w-[58ch] text-[16px] leading-[1.6] text-muted md:text-paper md:[font-size:clamp(15px,1.15vw,18px)]">
            {hero.lead}
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue px-7 py-4 text-[15px] font-semibold tracking-[0.04em] text-paper uppercase transition-colors hover:bg-ink md:pointer-events-auto md:hover:bg-paper md:hover:text-blue"
          >
            {site.ctaPrimary}
          </a>
          <p className="m-0 mt-5 text-[13px] text-muted md:text-paper/75">
            {site.ctaMicro}
          </p>
        </div>
      </div>
    </section>
  );
}
