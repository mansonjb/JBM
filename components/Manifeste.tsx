import SectionHead from "./SectionHead";
import { manifeste } from "@/lib/site";

/**
 * 04 · Un degré. Bloc « diverge » de la maquette : le degré posé en très grand,
 * le tracé des deux trajectoires, puis la conclusion avec le mot surligné.
 */
export default function Manifeste() {
  return (
    <section id="undegre" className="py-[clamp(64px,9vh,120px)]">
      <SectionHead n="04">{manifeste.kicker}</SectionHead>

      <h2 className="m-0 mb-10 text-[clamp(30px,4.4vw,78px)] leading-[1.02]">
        {manifeste.title}
      </h2>

      <div className="grid grid-cols-1 gap-[clamp(28px,3vw,64px)] lg:grid-cols-2">
        <div>
          {manifeste.paragraphes.map((paragraphe) => (
            <p key={paragraphe} className="body mt-0 mb-5">
              {paragraphe}
            </p>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {manifeste.decisions.map((decision) => (
            <div key={decision} className="chip">
              {decision}
            </div>
          ))}
        </div>
      </div>

      <div className="diverge">
        <div className="diverge-top">
          <span className="deg">1°</span>
          <p className="diverge-q">
            {manifeste.suite[0]}
          </p>
        </div>

        <div className="diverge-plot">
          <svg viewBox="0 0 1000 260" preserveAspectRatio="none" aria-hidden="true">
            <line className="ln" x1="0" y1="240" x2="1000" y2="240" />
            <line className="ln ln-b" x1="0" y1="240" x2="1000" y2="30" />
            <line className="tick" x1="1000" y1="30" x2="1000" y2="240" />
          </svg>
          <span className="lbl lbl-a">même endroit</span>
          <span className="lbl lbl-b">ailleurs</span>
          <span className="gap">l&apos;écart</span>
        </div>

        <p className="diverge-end">
          <span className="mark">{manifeste.citation}</span>
        </p>

        <div className="mini-deg">
          <span className="mini-deg-n">→</span>
          <span>{manifeste.chute.join(" ")}</span>
        </div>
      </div>
    </section>
  );
}
