import Bande from "./Bande";
import Citation from "./Citation";
import { regard } from "@/lib/site";

/** 01 · Pourquoi un regard extérieur. */
export default function Regard() {
  return (
    <>
      <Bande fond="paper" id="regard">
        <div className="u-surtitre">01 · {regard.kicker}</div>
        <h2 className="u-titre">{regard.title}</h2>

        <div className="mt-[var(--pas-64)] grid gap-[var(--pas-64)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-[clamp(48px,5vw,120px)]">
          <div className="u-texte u-texte-1">
            {regard.intro.map((paragraphe) => (
              <p key={paragraphe} className="u-corps">
                {paragraphe}
              </p>
            ))}
          </div>

          {/* Cinq constats courts : des étiquettes, pas une liste numérotée de plus. */}
          <div>
            <div className="u-surtitre">Ce qui arrive quand une entreprise grandit</div>
            <ul className="u-etiquettes u-reveal">
              {regard.derives.map((derive) => (
                <li key={derive} className="u-etiquette">
                  {derive}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Bande>

      <Bande fond="sand">
        <div className="u-texte u-texte-2">
          {regard.suite.map((paragraphe) => (
            <p key={paragraphe} className="u-corps">
              {paragraphe}
            </p>
          ))}
        </div>

        <div className="mt-[var(--pas-64)]">
          <div className="u-surtitre">Les questions que je pose</div>
          <div className="u-grille">
            {regard.questions.map((question, i) => (
              <div
                key={question}
                className={`u-carte u-reveal ${i === 0 ? "u-grille-large" : ""}`}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span className="u-carte-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="u-qa-question">{question}</span>
              </div>
            ))}
          </div>
        </div>
      </Bande>

      <Bande fond="bleu">
        <Citation large>{regard.chute}</Citation>
      </Bande>
    </>
  );
}
