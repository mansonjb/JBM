import Bande from "./Bande";
import Citation from "./Citation";
import { trouvailles } from "@/lib/site";

/** 03 · Ce qu'on peut trouver, en catalogue de cartes. */
export default function Trouvailles() {
  return (
    <>
      <Bande fond="sand" id="trouvailles">
        <div className="u-surtitre">03 · {trouvailles.kicker}</div>
        <h2 className="u-titre">{trouvailles.title}</h2>
        <div className="u-texte u-texte-2 mt-[var(--pas-40)]">
          {trouvailles.intro.map((paragraphe) => (
            <p key={paragraphe} className="u-corps">
              {paragraphe}
            </p>
          ))}
        </div>

        <div className="u-grille mt-[var(--pas-64)]">
          {trouvailles.cartes.map((carte, i) => (
            <article
              key={carte.titre}
              className={`u-carte u-reveal ${i === 0 || i === 5 ? "u-grille-large" : ""}`}
              style={{ transitionDelay: `${(i % 3) * 60}ms` }}
            >
              <span className="u-carte-num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="u-carte-titre">{carte.titre}</h3>
              <p className="u-carte-texte">{carte.text}</p>
            </article>
          ))}
        </div>
      </Bande>

      <Bande fond="bleu">
        <Citation large>{trouvailles.chute}</Citation>
      </Bande>
    </>
  );
}
