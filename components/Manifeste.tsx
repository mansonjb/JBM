import ImageSlot from "./ImageSlot";
import { manifeste } from "@/lib/site";

export default function Manifeste() {
  return (
    <section className="border-b border-line bg-sand px-[6vw] py-[110px] lg:py-[130px]">
      <div className="mb-12 text-[12px] tracking-[0.1em] text-muted uppercase">
        03 · {manifeste.kicker}
      </div>

      <h2 className="u-display m-0 mb-14 max-w-[16ch] text-[clamp(40px,6.4vw,112px)] tracking-[-0.03em]">
        {manifeste.title}
      </h2>

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.8fr)] lg:gap-[clamp(40px,6vw,110px)]">
        <div className="u-reveal u-serif text-[clamp(21px,1.9vw,29px)] leading-[1.45]">
          {manifeste.paragraphes.map((paragraphe, i) => (
            <p
              key={i}
              className={`max-w-[46ch] ${
                i === manifeste.paragraphes.length - 1 ? "m-0" : "mt-0 mb-7"
              }`}
            >
              {paragraphe}
            </p>
          ))}
        </div>

        <div className="u-reveal lg:sticky lg:top-28">
          <div className="u-tilt relative aspect-4/5">
            <ImageSlot
              brief="PHOTO 2 · une séance de travail : carnet, notes, schéma"
              src="/carnet-atelier.jpg"
              alt="Séance de travail : carnet, notes et schéma vision, clients, valeur, actions"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 items-end gap-8 border-t border-line pt-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.8fr)] lg:gap-[clamp(40px,6vw,110px)]">
        <p className="u-serif m-0 max-w-[26ch] text-[clamp(26px,3vw,48px)] leading-[1.24]">
          {manifeste.citation}
        </p>
        <p className="m-0 max-w-[42ch] text-sm leading-[1.65] text-muted">
          {manifeste.note}
        </p>
      </div>
    </section>
  );
}
