import Quote from "./Quote";
import { ouverture, site } from "@/lib/site";

/** Ce que je cherche, en rangées, puis la phrase de bascule. */
export default function Ouverture() {
  return (
    <>
      <section className="py-[clamp(64px,9vh,120px)]">
        <div className="sechead-t mb-8">Ce que je cherche</div>
        <div>
          {ouverture.pistes.map((piste, i) => (
            <div key={piste} className="row">
              <span className="n">{String(i + 1).padStart(2, "0")}</span>
              <span className="t">{piste}</span>
            </div>
          ))}
        </div>
      </section>

      <section
        className="py-[clamp(64px,9vh,120px)]"
        style={{ background: "#EDE6DA" }}
      >
        <div className="grid grid-cols-1 items-center gap-[clamp(32px,4vw,80px)] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <Quote>{ouverture.paragraphes[0]}</Quote>
          <div>
            {ouverture.paragraphes.slice(1).map((paragraphe) => (
              <p key={paragraphe} className="body mt-0 mb-5">
                {paragraphe}
              </p>
            ))}
            <a className="btn mt-4" href="#contact">
              {site.ctaPrimary} <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
