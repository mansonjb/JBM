import Bande from "./Bande";
import Citation from "./Citation";
import Items from "./Items";
import { regard } from "@/lib/site";

/** 01 · Pourquoi un regard extérieur. */
export default function Regard() {
  return (
    <>
      <Bande fond="paper" id="regard">
        <div className="u-surtitre">01 · {regard.kicker}</div>
        <h2 className="u-titre">{regard.title}</h2>
        <div className="mt-[var(--pas-40)]">
          {regard.intro.map((paragraphe) => (
            <p key={paragraphe} className="u-corps">
              {paragraphe}
            </p>
          ))}
        </div>
      </Bande>

      <Bande fond="sand" serree>
        <div className="u-surtitre">Ce qui arrive quand une entreprise grandit</div>
        <Items items={regard.derives.map((derive) => ({ titre: derive }))} />
      </Bande>

      <Bande fond="paper">
        {regard.suite.map((paragraphe) => (
          <p key={paragraphe} className="u-corps">
            {paragraphe}
          </p>
        ))}
      </Bande>

      <Bande fond="encre" serree>
        <div className="u-surtitre">Les questions que je pose</div>
        <Items items={regard.questions.map((question) => ({ titre: question }))} />
      </Bande>

      <Bande fond="bleu">
        <Citation large>{regard.chute}</Citation>
      </Bande>
    </>
  );
}
