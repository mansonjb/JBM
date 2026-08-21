import Bande from "./Bande";
import Citation from "./Citation";
import Items from "./Items";
import { trouvailles } from "@/lib/site";

/** 03 · Ce qu'on peut trouver. */
export default function Trouvailles() {
  return (
    <>
      <Bande fond="paper" id="trouvailles">
        <div className="u-surtitre">03 · {trouvailles.kicker}</div>
        <h2 className="u-titre">{trouvailles.title}</h2>
        <div className="mt-[var(--pas-40)]">
          {trouvailles.intro.map((paragraphe) => (
            <p key={paragraphe} className="u-corps">
              {paragraphe}
            </p>
          ))}
        </div>
      </Bande>

      <Bande fond="sand">
        <Items items={trouvailles.cartes.map((carte) => ({ titre: carte.titre, texte: carte.text }))} />
      </Bande>

      <Bande fond="bleu">
        <Citation large>{trouvailles.chute}</Citation>
      </Bande>
    </>
  );
}
