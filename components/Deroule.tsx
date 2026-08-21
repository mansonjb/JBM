import Action from "./Action";
import Bande from "./Bande";
import Citation from "./Citation";
import ImageSlot from "./ImageSlot";
import { deroule, site } from "@/lib/site";

/** 02 · Comment ça se passe, en frise. */
export default function Deroule() {
  return (
    <>
      <Bande fond="paper" id="methode">
        <div className="u-surtitre">02 · {deroule.kicker}</div>
        <h2 className="u-titre">{deroule.title}</h2>
      </Bande>

      <Bande fond="encre" serree>
        <Citation attribution={false}>{deroule.intro}</Citation>
      </Bande>

      <Bande fond="paper">
        <div className="grid gap-[var(--pas-64)] lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:gap-[clamp(48px,5vw,110px)]">
          <ol className="u-frise">
            {deroule.etapes.map((etape) => (
              <li key={etape.n} className="u-etape u-reveal">
                <div>
                  <div className="u-etape-num">{etape.n}</div>
                  <h3 className="u-etape-titre">{etape.titre}</h3>
                </div>
                <div>
                  {etape.paragraphes.map((paragraphe) => (
                    <p key={paragraphe} className="u-corps">
                      {paragraphe}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ol>

          {/* La photo accompagne la frise au lieu d'occuper une bande à elle seule. */}
          <figure className="m-0 lg:sticky lg:top-[calc(var(--nav-h)+var(--pas-40))] lg:self-start">
            <div className="relative aspect-4/5">
              <ImageSlot
                brief="PHOTO 2 · une séance de travail : carnet, notes, schéma"
                src="/carnet-atelier.jpg"
                alt="Séance de travail : carnet, notes et schéma vision, clients, valeur, actions"
                sizes="(max-width: 1024px) 100vw, 32vw"
              />
            </div>
            <figcaption className="u-main mt-[var(--pas-24)]">
              ce qui sort de la troisième étape
            </figcaption>
          </figure>
        </div>

        <div className="mt-[var(--pas-64)]">
          <Action href="#audit">{site.ctaAudit}</Action>
        </div>
      </Bande>
    </>
  );
}
