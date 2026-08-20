import ImageSlot from "./ImageSlot";
import { deroule } from "@/lib/site";

export default function Deroule() {
  return (
    <section
      id="methode"
      className="border-b border-line bg-sand px-[6vw] py-[110px] lg:py-[130px]"
    >
      <div className="mb-12 text-[12px] tracking-[0.1em] text-muted uppercase">
        02 · {deroule.kicker}
      </div>

      <div className="mb-14 grid grid-cols-1 items-end gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-[clamp(40px,6vw,110px)]">
        <h2 className="u-display m-0 max-w-[16ch] text-[clamp(40px,6.4vw,112px)] tracking-[-0.03em]">
          {deroule.title}
        </h2>
        <p className="u-serif m-0 max-w-[26ch] text-[clamp(21px,2vw,30px)] leading-[1.35] lg:pb-3">
          {deroule.intro}
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.7fr)] lg:gap-[clamp(40px,5vw,90px)]">
        <div className="border-t border-line">
          {deroule.etapes.map((etape, i) => (
            <div
              key={etape.n}
              className={`u-reveal grid grid-cols-1 gap-4 border-b border-line py-9 md:grid-cols-[minmax(0,220px)_minmax(0,1fr)] md:gap-10 ${
                i === 4 ? "u-tilt" : ""
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div>
                <div className="u-num mb-3 text-sm font-bold tracking-[0.06em] text-muted">
                  {etape.n}
                </div>
                <h3 className="u-display m-0 max-w-[14ch] text-[clamp(22px,2.1vw,32px)]">
                  {etape.titre}
                </h3>
              </div>
              <div>
                {etape.paragraphes.map((paragraphe, j) => (
                  <p
                    key={j}
                    className={`max-w-[62ch] text-[clamp(15px,1.25vw,18px)] leading-[1.7] text-muted ${
                      j === etape.paragraphes.length - 1 ? "m-0" : "mt-0 mb-4"
                    }`}
                  >
                    {paragraphe}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="u-reveal lg:sticky lg:top-28">
          <div className="relative aspect-4/5">
            <ImageSlot
              brief="PHOTO 2 · une séance de travail : carnet, notes, schéma"
              src="/carnet-atelier.jpg"
              alt="Séance de travail : carnet, notes et schéma vision, clients, valeur, actions"
              sizes="(max-width: 1024px) 100vw, 36vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
