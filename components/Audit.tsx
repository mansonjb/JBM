import Enonce from "./Enonce";
import Section from "./Section";
import { audit, site } from "@/lib/site";

/**
 * 07 · Qu'est-ce que j'achète exactement, et qu'est-ce que je reçois ?
 * En-tête apparié (titre à gauche, phrase de cadre au rang référence en 9 à 12),
 * puis 7+5 : rappel de méthode au rang note à gauche, cadre livrables à droite.
 */
export default function Audit() {
  return (
    <Section
      id="audit"
      kicker={audit.kicker}
      title={audit.title}
      aside={<p className="u-reference">{audit.paragraphes[0]}</p>}
    >
      <div className="u-grid">
        {/* La méthode est exposée en 03 : on la rappelle au rang note, sans la redire au même poids. */}
        <div className="u-pile-32 md:col-span-7">
          {[1, 2, 3].map((i) => (
            <p key={i} className="u-note">
              {i === 2 ? (
                <a href="#methode" className="u-link">
                  {audit.paragraphes[i]}
                </a>
              ) : (
                audit.paragraphes[i]
              )}
            </p>
          ))}
        </div>

        {/* Le seul cadre livrables de la page : ce que le lecteur emporte. */}
        <div className="u-reveal u-frame md:col-span-5 md:col-start-8">
          <div className="u-bullet u-surtitre u-mb-32">{audit.livrablesIntro}</div>
          <ul className="u-liste u-liste-simple">
            {audit.livrables.map((livrable) => (
              <li key={livrable}>{livrable}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="u-grid u-mt-96">
        <p className="u-courant md:col-span-7">{audit.suitesIntro}</p>
      </div>

      {/* Trois alternatives, pas une séquence : strictement identiques, sans numéro ni flèche. */}
      <div className="u-grid u-mt-32">
        {audit.suites.map((suite) => (
          <div
            key={suite}
            className="u-reveal border-t-2 border-blue pt-6 md:col-span-4"
          >
            <p className="u-note">{suite}</p>
          </div>
        ))}
      </div>

      {/* Troisième et dernier bloc bleu de la page. */}
      <Enonce>{audit.chute}</Enonce>

      <div className="u-mt-64">
        <a href="#contact" className="u-cta">
          {site.ctaAudit}
          <span className="u-cta-arrow" aria-hidden="true">
            →
          </span>
        </a>
        <p className="u-note u-cta-micro">{site.ctaMicro}</p>
      </div>
    </Section>
  );
}
