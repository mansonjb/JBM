import Quote from "./Quote";
import SectionHead from "./SectionHead";
import { cas, site } from "@/lib/site";

/** 05 · Un exemple, avec les chiffres en pavés de la maquette. */
export default function Cas() {
  return (
    <>
      <section
        id="exemple"
        className="py-[clamp(64px,9vh,120px)]"
        style={{ background: "#EDE6DA" }}
      >
        <SectionHead n="05">{cas.kicker}</SectionHead>

        <div className="mb-10 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
          <h2 className="m-0 text-[clamp(38px,6vw,110px)] leading-[1]">
            {cas.client}
          </h2>
          <p className="sechead-t m-0">{cas.sousTitre}</p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-[clamp(28px,3vw,64px)] lg:grid-cols-2">
          <div>
            {cas.paragraphes.slice(0, 3).map((paragraphe) => (
              <p key={paragraphe} className="body mt-0 mb-5">
                {paragraphe}
              </p>
            ))}
          </div>
          <div>
            {cas.paragraphes.slice(3).map((paragraphe) => (
              <p key={paragraphe} className="body mt-0 mb-5">
                {paragraphe}
              </p>
            ))}
          </div>
        </div>

        <div className="sechead-t mb-4">{cas.chiffresIntro}</div>
        <div className="stats4 grid gap-3">
          {cas.chiffres.map((chiffre) => (
            <div key={chiffre.value} className="stat">
              <div className="fig text-[clamp(40px,4.4vw,72px)]">{chiffre.value}</div>
              <p className="body mt-3 mb-0">{chiffre.label}</p>
            </div>
          ))}
          <div className="stat">
            <div className="fig text-[clamp(40px,4.4vw,72px)]">8</div>
            <p className="body mt-3 mb-0">jours de travail</p>
          </div>
          <div className="stat">
            <div className="fig text-[clamp(40px,4.4vw,72px)]">3</div>
            <p className="body mt-3 mb-0">mois avant les premiers résultats</p>
          </div>
        </div>
      </section>

      <section
        className="py-[clamp(64px,9vh,120px)]"
        style={{ background: "#1F3BD8", color: "#F4EFE6" }}
      >
        <Quote invert>{cas.chute[1]}</Quote>
        <p className="body mt-8 mb-10" style={{ color: "rgba(244,239,230,0.86)" }}>
          {cas.chute[0]}
        </p>
        <a className="btn btn-cream" href="#audit">
          {site.ctaAudit} <span>→</span>
        </a>
      </section>
    </>
  );
}
