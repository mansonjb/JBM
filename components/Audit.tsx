import Action from "./Action";
import Bande from "./Bande";
import Citation from "./Citation";
import ImageSlot from "./ImageSlot";
import { audit, site } from "@/lib/site";

/** 07 · L'audit. */
export default function Audit() {
  return (
    <>
      <Bande fond="paper" id="audit">
        <div className="u-surtitre">07 · {audit.kicker}</div>
        <h2 className="u-titre">{audit.title}</h2>

        <div className="mt-[var(--pas-64)] grid gap-[var(--pas-64)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-[clamp(48px,5vw,110px)]">
          <div className="u-texte u-texte-1">
            {audit.paragraphes.map((paragraphe) => (
              <p key={paragraphe} className="u-corps">
                {paragraphe}
              </p>
            ))}
          </div>

          {/* L'encadré : le seul endroit de la page qui dit ce qu'on emporte. */}
          <div className="u-encadre u-reveal">
            <span className="u-encadre-label">{audit.livrablesIntro}</span>
            <ul className="u-encadre-liste">
              {audit.livrables.map((livrable) => (
                <li key={livrable} className="u-encadre-item">
                  <span>{livrable}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Bande>

      <Bande fond="sand" serree>
        <div className="u-surtitre">{audit.suitesIntro}</div>
        <div className="u-grille">
          {audit.suites.map((suite, i) => (
            <div
              key={suite}
              className="u-carte u-reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="u-carte-num">{String(i + 1).padStart(2, "0")}</span>
              <p className="u-carte-titre">{suite}</p>
            </div>
          ))}
        </div>
      </Bande>

      <div className="relative h-[46vh] min-h-[280px] w-full">
        <ImageSlot
          brief="PHOTO 4 · noir et blanc, en action devant un tableau"
          src="/plan-action.jpg"
          alt="Jean-Baptiste Manson devant un tableau, plan d'action au marqueur"
          sizes="100vw"
        />
      </div>

      <Bande fond="bleu">
        <Citation large>{audit.chute}</Citation>
        <div className="mt-[var(--pas-64)]">
          <Action>{site.ctaAudit}</Action>
        </div>
      </Bande>
    </>
  );
}
