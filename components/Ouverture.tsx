import Action from "./Action";
import Bande from "./Bande";
import Citation from "./Citation";
import Items from "./Items";
import { ouverture, site } from "@/lib/site";

/** Ce qu'on peut trouver dans une entreprise qui fonctionne, puis ce que j'en fais. */
export default function Ouverture() {
  return (
    <>
      <Bande fond="sand">
        <div className="u-surtitre">Ce que je cherche</div>
        <Items items={ouverture.pistes.map((piste) => ({ titre: piste }))} />
      </Bande>

      <Bande fond="bleu">
        <Citation large>{ouverture.paragraphes[0]}</Citation>
      </Bande>

      <Bande fond="paper">
        <div className="u-texte u-texte-2">
        {ouverture.paragraphes.slice(1).map((paragraphe) => (
          <p key={paragraphe} className="u-corps">
            {paragraphe}
          </p>
        ))}
        </div>
        <div className="mt-[var(--pas-64)]">
          <Action>{site.ctaPrimary}</Action>
        </div>
      </Bande>
    </>
  );
}
