import ImageSlot from "./ImageSlot";
import { hero, site } from "@/lib/site";

/**
 * Héros de la maquette : deux colonnes, l'accroche dont la seconde phrase passe
 * au bleu, trois appels côte à côte, et la photo encadrée d'un filet bleu.
 */
export default function Hero() {
  const [premiere, ...reste] = hero.title.split(". ");

  return (
    <section
      id="top"
      className="relative grid grid-cols-1 items-start gap-8 px-[5vw] pt-[clamp(50px,8vh,100px)] pb-20 lg:grid-cols-[minmax(0,1.28fr)_minmax(0,0.72fr)] lg:gap-[clamp(32px,4vw,72px)]"
    >
      <div className="relative z-1">
        <div className="eyebrow mb-[34px] inline-flex items-center gap-[10px]">
          <span className="block h-[2px] w-[30px] bg-blue" />
          {hero.kicker}
        </div>

        <h1 className="m-0 mb-9 font-[family-name:var(--font-display)] text-[clamp(40px,6.6vw,122px)] leading-[0.94] tracking-[-0.02em] uppercase">
          {premiere}. <span className="blue">{reste.join(". ")}</span>
        </h1>

        <p className="lede m-0 mb-[42px]">{hero.lead}</p>

        <div className="flex flex-wrap items-center gap-6">
          <a className="btn" href="#contact">
            {site.ctaPrimary} <span>→</span>
          </a>
          <a className="btn btn-ghost" href={`tel:${site.phoneHref}`}>
            {site.phone}
          </a>
          <span className="text-[14px] text-muted">{site.ctaMicro}</span>
        </div>
      </div>

      <figure className="relative z-1 m-0 flex h-[clamp(360px,64vh,660px)] flex-col">
        <div className="relative h-full w-full">
          <ImageSlot
            brief="PHOTO 1 · portrait au bureau"
            src="/hero-un-degre.jpg"
            alt="Jean-Baptiste Manson à son bureau"
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="shot"
            priority
          />
        </div>
        <figcaption className="cap">Jean-Baptiste Manson · La Rochelle</figcaption>
      </figure>
    </section>
  );
}
