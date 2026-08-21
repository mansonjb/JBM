import Action from "./Action";
import Bande from "./Bande";
import Citation from "./Citation";
import Items from "./Items";
import { audit, site } from "@/lib/site";

/** 07 · L'audit. */
export default function Audit() {
  return (
    <>
      <Bande fond="paper" id="audit">
        <div className="u-surtitre">07 · {audit.kicker}</div>
        <h2 className="u-titre">{audit.title}</h2>
        <div className="mt-[var(--pas-40)]">
          {audit.paragraphes.map((paragraphe) => (
            <p key={paragraphe} className="u-corps">
              {paragraphe}
            </p>
          ))}
        </div>
      </Bande>

      <Bande fond="sand" serree>
        <div className="u-surtitre">{audit.livrablesIntro}</div>
        <Items items={audit.livrables.map((livrable) => ({ titre: livrable }))} />
      </Bande>

      <Bande fond="paper" serree>
        <div className="u-surtitre">{audit.suitesIntro}</div>
        <Items items={audit.suites.map((suite) => ({ titre: suite }))} />
      </Bande>

      <Bande fond="bleu">
        <Citation large>{audit.chute}</Citation>
        <div className="mt-[var(--pas-64)]">
          <Action>{site.ctaAudit}</Action>
        </div>
      </Bande>
    </>
  );
}
