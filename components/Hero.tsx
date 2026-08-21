import Action from "./Action";
import ImageSlot from "./ImageSlot";
import { hero, site } from "@/lib/site";

/**
 * Première bande. Au-delà de 768px la photo occupe toute la bande et le texte
 * se pose dessus. En dessous, la photo passe au-dessus du texte : la superposition
 * couvrait le visage.
 */
export default function Hero() {
  return (
    <section id="top" className="relative flex flex-col">
      <div className="relative h-[46vh] min-h-[300px] w-full md:absolute md:inset-0 md:h-auto md:min-h-0">
        <ImageSlot
          brief="PHOTO 1 · plan large, lieu de travail réel, regard objectif"
          src="/hero-un-degre.jpg"
          alt="Jean-Baptiste Manson à son bureau, sous le mur Un Degré"
          sizes="100vw"
          className="object-[62%_22%] md:object-[58%_center]"
          priority
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(180deg, rgba(21,23,28,0.74) 0%, rgba(21,23,28,0.40) 42%, rgba(21,23,28,0.80) 100%)",
        }}
      />

      <div className="relative w-full bg-paper py-16 text-ink md:flex md:min-h-[88vh] md:items-end md:bg-transparent md:py-0 md:pt-[calc(var(--nav-h)+var(--pas-64))] md:pb-[var(--pas-bande)] md:text-paper">
        <div className="u-dedans">
          <div className="u-surtitre md:text-paper/75!">{hero.kicker}</div>
          <h1 className="u-display">{hero.title}</h1>
          <p className="u-corps mt-[var(--pas-40)] max-w-[62ch] md:text-paper/90!">
            {hero.lead}
          </p>
          <div className="mt-[var(--pas-40)] flex flex-wrap items-center gap-x-8 gap-y-4">
            <Action>{site.ctaPrimary}</Action>
            <span className="u-note md:text-paper/75!">{site.ctaMicro}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
