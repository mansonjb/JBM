import Eyebrow from "./Eyebrow";
import Section from "./Section";
import { regard } from "@/lib/site";

/**
 * 01 · Pourquoi un regard extérieur.
 * Chapô 7/12, les cinq dérives en liste à filets simple 12/12, la suite 7/12,
 * les sept questions en liste appariée sur 3+9, et l'énoncé de clôture 12/12 sans fond bleu.
 */
export default function Regard() {
  return (
    <Section id="regard" kicker={regard.kicker} title={regard.title}>
      {/* Chapô, 7/12, posé 32px sous le filet par l'en-tête de section. */}
      <div className="u-grid u-reveal">
        <div className="md:col-span-7">
          {regard.intro.map((paragraphe) => (
            <p key={paragraphe} className="u-courant">
              {paragraphe}
            </p>
          ))}
        </div>
      </div>

      {/* Cinq observations de rang égal : liste à filets simple, 12/12, 64px avant et après. */}
      <ul className="u-liste u-liste-simple u-reveal u-mt-64">
        {regard.derives.map((derive) => (
          <li key={derive}>{derive}</li>
        ))}
      </ul>

      {/* La suite du raisonnement, 7/12, au rang courant, en ink plein. */}
      <div className="u-grid u-reveal u-mt-64">
        <div className="md:col-span-7">
          {regard.suite.map((paragraphe) => (
            <p key={paragraphe} className="u-courant">
              {paragraphe}
            </p>
          ))}
        </div>
      </div>

      {/* Les sept questions : liste à filets appariée sur 6+6, sans cadre ni puce. */}
      <div className="u-grid u-reveal u-mt-64">
        <div className="md:col-span-3">
          <Eyebrow>Les questions que je pose</Eyebrow>
        </div>
        <ul className="u-liste u-liste-appariee md:col-span-9">
          {regard.questions.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ul>
      </div>

      {/* Énoncé de clôture : rang énoncé, sans fond bleu, 96px au-dessus. */}
      <p className="u-enonce u-reveal u-mt-96">{regard.chute}</p>
    </Section>
  );
}
