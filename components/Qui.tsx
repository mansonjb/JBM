import Bande from "./Bande";
import Citation from "./Citation";
import ImageSlot from "./ImageSlot";
import { qui } from "@/lib/site";

/** 06 · Qui suis-je ? */
export default function Qui() {
  return (
    <>
      <Bande fond="paper" id="qui">
        <div className="u-surtitre">06 · {qui.kicker}</div>
        <h2 className="u-titre">{qui.title}</h2>

        <div className="mt-[var(--pas-64)] grid gap-[var(--pas-64)] lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-[clamp(48px,5vw,110px)]">
          {/* Le portrait accompagne le texte, l'annotation reste à côté de l'image. */}
          <figure className="m-0">
            <div className="relative aspect-3/4">
              <ImageSlot
                brief="PHOTO 5 · portrait vertical, cadrage serré, lumière douce"
                src="/portrait.jpg"
                alt="Portrait de Jean-Baptiste Manson"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
            </div>
            <figcaption className="u-main mt-[var(--pas-24)]">
              Jean-Baptiste Manson
            </figcaption>
          </figure>

          <div className="u-texte u-texte-2">
            {qui.paragraphes.map((paragraphe) => (
              <p key={paragraphe} className="u-corps">
                {paragraphe}
              </p>
            ))}
          </div>
        </div>
      </Bande>

      <Bande fond="sand" serree>
        <div className="u-surtitre">
          Pourquoi je ne regarde jamais un sujet seul
        </div>
        <div className="u-grille">
          {qui.liens.map((lien, i) => (
            <div
              key={lien}
              className={`u-carte u-reveal ${i === 3 ? "u-grille-large" : ""}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className="u-carte-num">{String(i + 1).padStart(2, "0")}</span>
              <p className="u-carte-titre">{lien}</p>
            </div>
          ))}
        </div>
      </Bande>

      <Bande fond="bleu">
        <Citation large>{qui.chute}</Citation>
      </Bande>
    </>
  );
}
