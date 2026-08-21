import Section from "./Section";
import { trouvailles } from "@/lib/site";

/**
 * 04 · Ce qu'on peut trouver — le catalogue d'exemples de même rang.
 * En-tête 12/12 (filet rattaché au titre), chapô 7/12, six cartes en 4+4+4,
 * énoncé de clôture 12/12 sans fond : le bloc bleu est réservé aux sections 02, 06 et 07.
 */
export default function Trouvailles() {
  return (
    <Section
      id="trouvailles"
      kicker={trouvailles.kicker}
      title={trouvailles.title}
    >
      {/* Chapô : trois paragraphes au rang courant, 7/12, 32px entre eux. */}
      <div className="u-grid">
        <div className="u-reveal md:col-span-7">
          {trouvailles.intro.map((paragraphe) => (
            <p key={paragraphe} className="u-courant">
              {paragraphe}
            </p>
          ))}
        </div>
      </div>

      {/* Six cartes de même rang : filet supérieur, aucun numéro, aucun survol. */}
      <div className="u-cartes">
        {trouvailles.cartes.map((carte, i) => (
          <div
            key={carte.titre}
            className="u-reveal"
            style={{ transitionDelay: `${(i % 3) * 60}ms` }}
          >
            <h3 className="u-h3">{carte.titre}</h3>
            <p className="u-note u-mt-16">{carte.text}</p>
          </div>
        ))}
      </div>

      {/* La phrase de conclusion : rang énoncé, sans fond bleu. */}
      <p className="u-enonce u-reveal">{trouvailles.chute}</p>
    </Section>
  );
}
