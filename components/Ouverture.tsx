import Action from "./Action";
import Bande from "./Bande";
import Citation from "./Citation";
import { ouverture, site } from "@/lib/site";

/** Ce qu'on peut trouver dans une entreprise qui fonctionne, puis ce que j'en fais. */
export default function Ouverture() {
  return (
    <>
      <Bande fond="paper">
        <div className="u-surtitre">Ce que je cherche</div>
        <ul className="u-items">
          {ouverture.pistes.map((piste, i) => (
            <li
              key={piste}
              className="u-item u-item-simple u-reveal"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <span className="u-item-num">{String(i + 1).padStart(2, "0")}</span>
              <span>{piste}</span>
            </li>
          ))}
        </ul>
      </Bande>

      <Bande fond="sand">
        <div className="grid gap-[var(--pas-64)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-[clamp(48px,5vw,120px)]">
          <Citation>{ouverture.paragraphes[0]}</Citation>
          <div className="u-texte u-texte-1">
            {ouverture.paragraphes.slice(1).map((paragraphe) => (
              <p key={paragraphe} className="u-corps">
                {paragraphe}
              </p>
            ))}
            <div className="mt-[var(--pas-40)]">
              <Action>{site.ctaPrimary}</Action>
            </div>
          </div>
        </div>
      </Bande>
    </>
  );
}
