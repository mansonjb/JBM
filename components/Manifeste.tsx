import AngleMark from "./AngleMark";
import Enonce from "./Enonce";
import Section from "./Section";
import { manifeste } from "@/lib/site";

/**
 * 02 · Un degré — la seule section du corps à fond bleu plein.
 * Elle porte la thèse, avant la méthode : en-tête 12/12, chapô 7/12,
 * six décisions en 6+6, le schéma 12/12, puis la citation en bloc inversé.
 */
export default function Manifeste() {
  /* Les six décisions se répartissent en deux colonnes de rang égal, trois et trois. */
  const colonneGauche = manifeste.decisions.slice(0, 3);
  const colonneDroite = manifeste.decisions.slice(3);

  return (
    <Section
      id="manifeste"
      kicker={manifeste.kicker}
      title={manifeste.title}
      ton="blue"
    >
      {/* Chapô : trois paragraphes au rang courant, 7/12, 32px entre eux (.u-courant + .u-courant). */}
      <div className="u-grid">
        <div className="u-reveal md:col-span-7">
          <p className="u-courant text-paper/85">{manifeste.paragraphes[0]}</p>
          <p className="u-courant text-paper/85">{manifeste.paragraphes[1]}</p>
          <p className="u-courant text-paper/85">{manifeste.suite[0]}</p>
        </div>
      </div>

      {/* Les décisions : liste à filets, variante simple, réparties 6+6. */}
      <div className="u-grid u-mt-64">
        <ul className="u-liste u-liste-simple u-reveal md:col-span-6">
          {colonneGauche.map((decision) => (
            <li key={decision}>{decision}</li>
          ))}
        </ul>
        <ul className="u-liste u-liste-simple u-reveal md:col-span-6">
          {colonneDroite.map((decision) => (
            <li key={decision}>{decision}</li>
          ))}
        </ul>
      </div>

      {/* Le degré, dessiné, juste au-dessus de la phrase qui l'énonce. */}
      <AngleMark invert className="u-reveal" />

      {/* Le sommet de la page : le fond porte l'emphase, jamais la taille. */}
      <Enonce invert>{manifeste.citation}</Enonce>

      <div className="u-grid u-mt-64">
        <div className="u-reveal md:col-span-7">
          <p className="u-courant text-paper/85">{manifeste.chute[0]}</p>
          <p className="u-courant text-paper/85">{manifeste.chute[1]}</p>
        </div>
      </div>
    </Section>
  );
}
