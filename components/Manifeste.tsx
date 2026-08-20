import Enonce from "./Enonce";
import { manifeste } from "@/lib/site";

export default function Manifeste() {
  return (
    <section className="border-b border-line bg-blue px-[6vw] py-[100px] text-paper lg:py-[120px]">
      <div className="mb-12 text-[12px] tracking-[0.1em] text-paper/70 uppercase">
        04 · {manifeste.kicker}
      </div>

      <h2 className="u-display m-0 mb-14 max-w-[20ch] text-[clamp(34px,4.8vw,84px)]">
        {manifeste.title}
      </h2>

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-[clamp(40px,6vw,110px)]">
        <div>
          {manifeste.paragraphes.map((paragraphe) => (
            <p
              key={paragraphe}
              className="m-0 mb-6 max-w-[48ch] text-[clamp(16px,1.35vw,20px)] leading-[1.65] text-paper/85"
            >
              {paragraphe}
            </p>
          ))}
          {manifeste.suite.map((paragraphe) => (
            <p
              key={paragraphe}
              className="m-0 mt-8 max-w-[48ch] text-[clamp(16px,1.35vw,20px)] leading-[1.65] text-paper/85"
            >
              {paragraphe}
            </p>
          ))}
        </div>

        <ul className="m-0 list-none border-t border-paper/30 p-0">
          {manifeste.decisions.map((decision, i) => (
            <li
              key={decision}
              className="u-reveal border-b border-paper/20 py-4 text-[clamp(18px,1.7vw,26px)] leading-[1.35]"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {decision}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16 border-t border-paper/30 pt-12">
        <Enonce invert className="mb-12 max-w-[860px]">
          {manifeste.citation}
        </Enonce>
        {manifeste.chute.map((paragraphe) => (
          <p
            key={paragraphe}
            className="m-0 mb-3 max-w-[46ch] text-[clamp(16px,1.3vw,19px)] leading-[1.6] text-paper/85"
          >
            {paragraphe}
          </p>
        ))}
      </div>
    </section>
  );
}
