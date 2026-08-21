import ImageSlot from "./ImageSlot";
import Quote from "./Quote";
import SectionHead from "./SectionHead";
import { deroule, site } from "@/lib/site";

/** 02 · Comment ça se passe, dans le tableau d'étapes de la maquette. */
export default function Deroule() {
  return (
    <section id="methode" className="py-[clamp(64px,9vh,120px)]">
      <SectionHead n="02">{deroule.kicker}</SectionHead>

      <h2 className="m-0 mb-8 text-[clamp(32px,5vw,88px)] leading-[1.02]">
        {deroule.title}
      </h2>

      <div className="mb-12 grid grid-cols-1 items-end gap-[clamp(28px,3vw,64px)] lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <Quote attribution={false}>{deroule.intro}</Quote>
        <figure className="m-0">
          <div className="relative aspect-4/3">
            <ImageSlot
              brief="PHOTO 2 · une séance de travail : carnet, notes, schéma"
              src="/carnet-atelier.jpg"
              alt="Séance de travail : carnet, notes et schéma"
              sizes="(max-width: 1024px) 100vw, 34vw"
              className="shot"
            />
          </div>
          <figcaption className="cap">ce qui sort de la troisième étape</figcaption>
        </figure>
      </div>

      <div className="steps">
        {deroule.etapes.map((etape) => (
          <div key={etape.n} className="step">
            <span className="step-n">{etape.n}</span>
            <h3 className="step-t">{etape.titre}</h3>
            {etape.paragraphes.map((paragraphe) => (
              <p key={paragraphe} className="step-b mb-3 last:mb-0">
                {paragraphe}
              </p>
            ))}
          </div>
        ))}
      </div>

      <a className="btn mt-12" href="#audit">
        {site.ctaAudit} <span>→</span>
      </a>
    </section>
  );
}
