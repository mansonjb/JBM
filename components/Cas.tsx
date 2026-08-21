import Action from "./Action";
import Bande from "./Bande";
import Citation from "./Citation";
import { cas, site } from "@/lib/site";

/** 05 · Un exemple. */
export default function Cas() {
  return (
    <>
      <Bande fond="paper" id="exemple">
        <div className="u-surtitre">05 · {cas.kicker}</div>
        <h2 className="u-titre">{cas.client}</h2>
        <p className="u-note mt-[var(--pas-12)]">{cas.sousTitre}</p>
        <div className="mt-[var(--pas-40)]">
          {cas.paragraphes.map((paragraphe) => (
            <p key={paragraphe} className="u-corps">
              {paragraphe}
            </p>
          ))}
        </div>
      </Bande>

      <Bande fond="encre" serree>
        <div className="u-surtitre">{cas.chiffresIntro}</div>
        <div className="grid grid-cols-1 gap-[var(--pas-64)] md:grid-cols-2">
          {cas.chiffres.map((chiffre) => (
            <div key={chiffre.value} className="u-reveal">
              <div className="u-chiffre">{chiffre.value}</div>
              <p className="u-note mt-[var(--pas-24)] max-w-[34ch]">
                {chiffre.label}
              </p>
            </div>
          ))}
        </div>
      </Bande>

      <Bande fond="paper">
        <p className="u-corps">{cas.chute[0]}</p>
      </Bande>

      <Bande fond="bleu">
        <Citation large>{cas.chute[1]}</Citation>
        <div className="mt-[var(--pas-64)]">
          <Action href="#audit">{site.ctaAudit}</Action>
        </div>
      </Bande>
    </>
  );
}
