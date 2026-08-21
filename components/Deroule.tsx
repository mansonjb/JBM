import ImageSlot from "./ImageSlot";
import Section from "./Section";
import { deroule } from "@/lib/site";

/**
 * 02 · Comment ça se passe.
 * Chapô 7/12, puis une rangée 8+4 : les cinq étapes en rangées titre puis texte,
 * la photo d'atelier collante à droite. Aucun bloc bleu, aucune numérotation d'étape :
 * la seule numérotation de la page est celle des sections.
 */
export default function Deroule() {
  return (
    <Section id="methode" kicker={deroule.kicker} title={deroule.title}>
      {/* La phrase d'amorce garde le rang énoncé, sans fond bleu : le quota de 3 est tenu ailleurs. */}
      <p className="u-enonce u-reveal">{deroule.intro}</p>

      <div className="u-grid u-mt-64">
        {/* Les cinq étapes, 8/12, empilées au pas de 64px. */}
        <div className="u-pile-64 md:col-span-8">
          {deroule.etapes.map((etape) => (
            <div
              key={etape.n}
              className="u-reveal grid grid-cols-1 gap-x-10 gap-y-4 border-t border-line py-8 md:grid-cols-[minmax(0,220px)_minmax(0,1fr)]"
            >
              <h3 className="u-h3">{etape.titre}</h3>
              <div>
                {etape.paragraphes.map((paragraphe) => (
                  <p key={paragraphe} className="u-courant">
                    {paragraphe}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Photo d'appui, 4/12 en colonne 9, collante sous la barre, sans repères d'angle. */}
        <div className="u-sticky self-start md:col-span-4 md:col-start-9">
          <div className="u-reveal relative aspect-4/5">
            <ImageSlot
              brief="PHOTO 2 · une séance de travail : carnet, notes, schéma"
              src="/carnet-atelier.jpg"
              alt="Séance de travail : carnet, notes et schéma vision, clients, valeur, actions"
              sizes="(max-width: 768px) 100vw, 30vw"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
