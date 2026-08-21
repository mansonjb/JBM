import Bande from "./Bande";
import Citation from "./Citation";
import Items from "./Items";
import Photo from "./Photo";
import { qui } from "@/lib/site";

/** 06 · Qui suis-je ? */
export default function Qui() {
  return (
    <>
      <Photo
        src="/plan-action.jpg"
        alt="Jean-Baptiste Manson devant un tableau, plan d'action au marqueur"
        brief="PHOTO 4 · noir et blanc, en action devant un tableau"
      />

      <Bande fond="paper" id="qui">
        <div className="u-surtitre">06 · {qui.kicker}</div>
        <h2 className="u-titre">{qui.title}</h2>
        <div className="mt-[var(--pas-40)]">
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
        <div className="u-surtitre">Pourquoi je ne regarde jamais un sujet seul</div>
        <Items items={qui.liens.map((lien) => ({ titre: lien }))} />
      </Bande>

      <Bande fond="bleu">
        <Citation large>{qui.chute}</Citation>
      </Bande>
    </>
  );
}
