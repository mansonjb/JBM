import ImageSlot from "./ImageSlot";
import { idee } from "@/lib/site";

export default function Idee() {
  return (
    <section className="border-b border-line bg-sand px-[6vw] py-[110px] lg:py-[130px]">
      <div className="mb-14 text-[12px] tracking-[0.1em] text-muted uppercase">
        02 · {idee.kicker}
      </div>

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)] lg:gap-[clamp(40px,7vw,120px)]">
        <div className="u-reveal">
          <h2 className="u-display m-0 mb-10 text-[clamp(40px,7vw,120px)] leading-[0.88] tracking-[-0.03em]">
            {idee.title}
          </h2>
          <div className="u-serif max-w-[34ch] text-[clamp(21px,1.9vw,29px)] leading-[1.42]">
            {idee.paragraphes.map((paragraphe, i) => (
              <p
                key={i}
                className={i === idee.paragraphes.length - 1 ? "m-0" : "mt-0 mb-7"}
              >
                {paragraphe}
              </p>
            ))}
          </div>
        </div>

        <div className="u-reveal">
          <div className="u-tilt relative aspect-4/5">
            <ImageSlot brief="PHOTO 2 · un coffre d'outils ou un établi rangé au millimètre, vu du dessus, lumière rasante" />
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-line pt-12">
        <p className="u-serif m-0 max-w-[30ch] text-[clamp(24px,2.6vw,40px)] leading-[1.3]">
          {idee.citation}
        </p>
        <p className="m-0 mt-6 max-w-[46ch] text-sm leading-[1.6] text-muted">
          {idee.note}
        </p>
      </div>
    </section>
  );
}
