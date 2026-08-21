import ImageSlot from "./ImageSlot";
import Section from "./Section";
import { qui } from "@/lib/site";

/**
 * 05 · Qui va regarder mon entreprise, et qu'a-t-il déjà fait ?
 * Récit en 7/12, photos en 4/12, liens en 6+6, énoncé de clôture en 12/12.
 * La phrase de références (paragraphes[2]) est promue au rang référence :
 * elle se lit sans avoir lu le reste, et reste une seule phrase intacte.
 */
export default function Qui() {
  return (
    <Section id="qui" kicker={qui.kicker} title={qui.title}>
      <div className="u-grid">
        <div className="u-pile-32 md:col-span-7">
          {qui.paragraphes.map((paragraphe, i) => (
            <p key={i} className={i === 2 ? "u-reference" : "u-courant"}>
              {paragraphe}
            </p>
          ))}
        </div>

        <div className="u-reveal u-pile-32 md:col-span-4 md:col-start-9">
          <div className="relative aspect-3/4">
            <ImageSlot
              brief="PHOTO 5 · portrait vertical, cadrage serré, lumière douce"
              src="/portrait.jpg"
              alt="Portrait de Jean-Baptiste Manson"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative aspect-3/2">
            <ImageSlot
              brief="PHOTO 4 · noir et blanc, en action devant un tableau"
              src="/plan-action.jpg"
              alt="Jean-Baptiste Manson devant un tableau, plan d'action au marqueur"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </div>

      {/* Quatre faits parallèles de rang égal : liste à filets, variante simple, en 6+6. */}
      <div className="u-grid u-mt-64">
        <ul className="u-liste u-liste-simple md:col-span-6">
          {qui.liens.slice(0, 2).map((lien) => (
            <li key={lien}>{lien}</li>
          ))}
        </ul>
        <ul className="u-liste u-liste-simple md:col-span-6">
          {qui.liens.slice(2).map((lien) => (
            <li key={lien}>{lien}</li>
          ))}
        </ul>
      </div>

      {/* Énoncé de clôture : rang énoncé, sans fond bleu (quota de 3 tenu ailleurs). */}
      <p className="u-enonce u-mt-96">{qui.chute}</p>
    </Section>
  );
}
