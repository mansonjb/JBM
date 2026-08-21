import ImageSlot from "./ImageSlot";
import Quote from "./Quote";
import SectionHead from "./SectionHead";
import { audit, site } from "@/lib/site";

/** 07 · L'audit. */
export default function Audit() {
  return (
    <>
      <section
        id="audit"
        className="py-[clamp(64px,9vh,120px)]"
        style={{ background: "#EDE6DA" }}
      >
        <SectionHead n="07">{audit.kicker}</SectionHead>

        <h2 className="m-0 mb-10 text-[clamp(38px,6vw,110px)] leading-[1]">
          {audit.title}
        </h2>

        <div className="grid grid-cols-1 gap-[clamp(28px,3vw,64px)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            {audit.paragraphes.map((paragraphe, i) => (
              <p key={paragraphe} className={i === 0 ? "lede m-0 mb-5" : "body mt-0 mb-5"}>
                {paragraphe}
              </p>
            ))}
            <figure className="mt-8 m-0">
              <div className="relative aspect-3/2">
                <ImageSlot
                  brief="PHOTO 4 · noir et blanc, en action devant un tableau"
                  src="/plan-action.jpg"
                  alt="Jean-Baptiste Manson devant un tableau, plan d'action au marqueur"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="shot"
                />
              </div>
              <figcaption className="cap">la restitution, au tableau</figcaption>
            </figure>
          </div>

          <div>
            <div className="sechead-t mb-4">{audit.livrablesIntro}</div>
            <div>
              {audit.livrables.map((livrable, i) => (
                <div key={livrable} className="row">
                  <span className="n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="t">{livrable}</span>
                </div>
              ))}
            </div>

            <div className="sechead-t mt-10 mb-4">{audit.suitesIntro}</div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {audit.suites.map((suite) => (
                <div key={suite} className="card">
                  <p className="m-0 text-[clamp(15px,1.2vw,19px)] leading-[1.4]">
                    {suite}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-[clamp(64px,9vh,120px)]"
        style={{ background: "#1F3BD8", color: "#F4EFE6" }}
      >
        <Quote invert>{audit.chute}</Quote>
        <a className="btn btn-cream mt-10" href="#contact">
          {site.ctaAudit} <span>→</span>
        </a>
      </section>
    </>
  );
}
