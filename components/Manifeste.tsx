import Bande from "./Bande";
import Citation from "./Citation";
import { manifeste } from "@/lib/site";

/** 04 · Un degré. */
export default function Manifeste() {
  return (
    <>
      <Bande fond="paper" id="manifeste">
        <div className="u-surtitre">04 · {manifeste.kicker}</div>
        <h2 className="u-titre">{manifeste.title}</h2>

        <div className="mt-[var(--pas-64)] grid gap-[var(--pas-64)] lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-[clamp(48px,5vw,110px)]">
          <div className="u-texte u-texte-1">
            {manifeste.paragraphes.map((paragraphe) => (
              <p key={paragraphe} className="u-corps">
                {paragraphe}
              </p>
            ))}
          </div>

          <div>
            <div className="u-surtitre">Ce qu&apos;on décide, concrètement</div>
            <ul className="u-etiquettes u-reveal">
              {manifeste.decisions.map((decision) => (
                <li key={decision} className="u-etiquette">
                  {decision}
                </li>
              ))}
            </ul>
            <div className="u-texte u-texte-1 mt-[var(--pas-40)]">
              {manifeste.suite.map((paragraphe) => (
                <p key={paragraphe} className="u-corps">
                  {paragraphe}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Bande>

      <Bande fond="bleu">
        {/* Le degré, tracé une seconde fois, à l'endroit exact où le texte l'énonce. */}
        <svg
          viewBox="0 0 1200 220"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="mb-[var(--pas-64)] h-[120px] w-full opacity-70 lg:h-[180px]"
        >
          <line x1="0" y1="200" x2="1200" y2="200" stroke="#F4EFE6" strokeWidth="1.5" />
          <line x1="0" y1="200" x2="1200" y2="24" stroke="#F4EFE6" strokeWidth="3" />
        </svg>

        <Citation large>{manifeste.citation}</Citation>

        <div className="u-texte u-texte-2 mt-[var(--pas-64)]">
          {manifeste.chute.map((paragraphe) => (
            <p key={paragraphe} className="u-corps">
              {paragraphe}
            </p>
          ))}
        </div>
      </Bande>
    </>
  );
}
