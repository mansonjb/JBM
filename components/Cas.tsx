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
        <div className="flex flex-col items-start justify-between gap-[var(--pas-24)] lg:flex-row lg:items-end">
          <h2 className="u-titre">{cas.client}</h2>
          <p className="u-note">{cas.sousTitre}</p>
        </div>

        <div className="u-texte u-texte-2 mt-[var(--pas-64)]">
          {cas.paragraphes.map((paragraphe) => (
            <p key={paragraphe} className="u-corps">
              {paragraphe}
            </p>
          ))}
        </div>
      </Bande>

      <Bande fond="encre">
        <div className="u-surtitre">{cas.chiffresIntro}</div>
        <div className="u-preuve">
          {cas.chiffres.map((chiffre) => (
            <div key={chiffre.value} className="u-reveal">
              <div className="u-chiffre">{chiffre.value}</div>
              <p className="u-corps mt-[var(--pas-24)] max-w-[30ch]">
                {chiffre.label}
              </p>
            </div>
          ))}
        </div>
        <p className="u-corps mt-[var(--pas-64)] max-w-[46ch]">{cas.chute[0]}</p>
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
