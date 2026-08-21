import Action from "./Action";
import { hero, site } from "@/lib/site";

/**
 * Héros typographique, sans photo : le mur du bureau portait déjà du texte,
 * deux discours se superposaient. Ici, l'accroche est seule, sur le bleu de la
 * marque, avec le degré tracé en fond.
 */
export default function Hero() {
  return (
    <section
      id="top"
      className="u-fond-bleu relative flex min-h-[86vh] items-end overflow-hidden pt-[calc(var(--nav-h)+var(--pas-64))] pb-[var(--pas-bande)]"
    >
      {/* Le degré, tracé à même la bande : deux trajectoires qui divergent. */}
      <svg
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.22]"
      >
        <line x1="0" y1="520" x2="1200" y2="520" stroke="#F4EFE6" strokeWidth="1.5" />
        <line x1="0" y1="520" x2="1200" y2="140" stroke="#F4EFE6" strokeWidth="3" />
      </svg>

      <div className="u-dedans relative">
        <div className="u-surtitre">{hero.kicker}</div>
        <h1 className="u-display">{hero.title}</h1>

        <div className="mt-[var(--pas-64)] grid gap-[var(--pas-40)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-[clamp(48px,5vw,120px)]">
          <p className="u-corps max-w-[46ch]">{hero.lead}</p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <Action>{site.ctaPrimary}</Action>
            <span className="u-note">{site.ctaMicro}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
