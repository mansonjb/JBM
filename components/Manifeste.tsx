import Bande from "./Bande";
import Citation from "./Citation";
import Items from "./Items";
import { manifeste } from "@/lib/site";

/** 04 · Un degré. */
export default function Manifeste() {
  return (
    <>
      <Bande fond="paper" id="manifeste">
        <div className="u-surtitre">04 · {manifeste.kicker}</div>
        <h2 className="u-titre">{manifeste.title}</h2>
        <div className="mt-[var(--pas-40)]">
          {manifeste.paragraphes.map((paragraphe) => (
            <p key={paragraphe} className="u-corps">
              {paragraphe}
            </p>
          ))}
        </div>
      </Bande>

      <Bande fond="sand" serree>
        <div className="u-surtitre">Ce qu'on décide, concrètement</div>
        <Items items={manifeste.decisions.map((decision) => ({ titre: decision }))} />
        <div className="mt-[var(--pas-40)]">
          {manifeste.suite.map((paragraphe) => (
            <p key={paragraphe} className="u-corps">
              {paragraphe}
            </p>
          ))}
        </div>
      </Bande>

      <Bande fond="bleu">
        <Citation large>{manifeste.citation}</Citation>
        <div className="mt-[var(--pas-64)]">
          {manifeste.chute.map((paragraphe) => (
            <p key={paragraphe} className="u-corps max-w-[52ch]">
              {paragraphe}
            </p>
          ))}
        </div>
      </Bande>
    </>
  );
}
