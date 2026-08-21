import Enonce from "./Enonce";
import Eyebrow from "./Eyebrow";
import Section from "./Section";
import { cas, site } from "@/lib/site";

/**
 * 06 · Un exemple — la preuve. En-tête apparié (« CB Sols » en 1 à 8, le sous-titre
 * en 9 à 12), bandeau chiffres 12/12 au premier niveau de lecture, récit 7/12,
 * bloc bleu de clôture, puis le seul bouton de la section.
 */
export default function Cas() {
  return (
    <Section
      id="exemple"
      kicker={cas.kicker}
      title={cas.client}
      aside={<Eyebrow>{cas.sousTitre}</Eyebrow>}
    >
      {/* La seule preuve chiffrée du site : 12/12, sans cadre, filets haut et bas. */}
      <div className="u-chiffres u-reveal">
        <Eyebrow className="u-bullet">{cas.chiffresIntro}</Eyebrow>
        <div className="u-grid u-mt-32">
          {cas.chiffres.map((chiffre) => (
            <div key={chiffre.value} className="md:col-span-6">
              <div className="u-chiffre">{chiffre.value}</div>
              <p className="u-note u-note-legende u-mt-24">{chiffre.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Le récit : rang courant, 7/12. La durée monte d'un cran, au rang référence. */}
      <div className="u-grid">
        <div className="u-reveal md:col-span-7">
          {cas.paragraphes.slice(0, 5).map((paragraphe) => (
            <p key={paragraphe} className="u-courant">
              {paragraphe}
            </p>
          ))}
          <p className="u-reference u-mt-32">{cas.paragraphes[5]}</p>
        </div>
      </div>

      <div className="u-grid u-mt-64">
        <p className="u-courant u-reveal md:col-span-7">{cas.chute[0]}</p>
      </div>

      <Enonce>{cas.chute[1]}</Enonce>

      <div className="u-mt-64">
        <a href="#contact" className="u-cta">
          {site.ctaPrimary}
          <span className="u-cta-arrow" aria-hidden="true">
            →
          </span>
        </a>
        <p className="u-note u-cta-micro">{site.ctaMicro}</p>
      </div>
    </Section>
  );
}
