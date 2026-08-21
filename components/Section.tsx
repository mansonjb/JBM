import Eyebrow from "@/components/Eyebrow";
import { plan } from "@/lib/site";

type Props = {
  /** Ancre de la section, celle du tableau `plan` : elle en détermine le numéro. */
  id: string;
  /** Intitulé qui suit le numéro dans le sur-titre. */
  kicker: string;
  /** Le h2 de la section, au rang titre. */
  title: string;
  /**
   * Texte apparié sur la même ligne de base, en colonnes 9 à 12.
   * Réservé aux titres de moins de 30 signes.
   */
  aside?: React.ReactNode;
  /** Section 02 : le seul fond bleu pleine surface du corps. */
  ton?: "paper" | "blue";
  children: React.ReactNode;
  className?: string;
};

/**
 * Gabarit des huit sections numérotées : padding de section, conteneur,
 * en-tête (sur-titre, titre, filet) et rythme, sans qu'une section ait à les réécrire.
 */
export default function Section({
  id,
  kicker,
  title,
  aside,
  ton = "paper",
  children,
  className = "",
}: Props) {
  /*
   * Le numéro n'est pas écrit dans la section : il est lu dans `plan`, seule
   * numérotation de la page. Deux sections ne peuvent donc plus porter le même.
   */
  const n = plan.find((etape) => etape.id === id)?.n;

  /* Le filet n'est jamais enfant direct d'une grille ni d'un flex : il reste dans .u-header. */
  const header = (
    <div className="u-header u-reveal">
      <Eyebrow n={n}>{kicker}</Eyebrow>
      <h2 className="u-h2">{title}</h2>
      <span className="u-underline" aria-hidden="true" />
    </div>
  );

  return (
    <section
      id={id}
      className={`u-section ${ton === "blue" ? "u-section-blue" : ""} ${className}`}
    >
      <div className="u-container">
        {aside ? (
          <div className="u-grid">
            <div className="col-span-8">{header}</div>
            <div className="col-span-4">{aside}</div>
          </div>
        ) : (
          header
        )}
        {children}
      </div>
    </section>
  );
}
