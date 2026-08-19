import ImageSlot from "./ImageSlot";
import { origine } from "@/lib/site";

export default function Origine() {
  return (
    <section className="border-b border-line px-[6vw] py-[110px] lg:py-[130px]">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.82fr)] lg:gap-[clamp(40px,7vw,130px)]">
        <div className="u-reveal">
          <div className="mb-10 text-[12px] tracking-[0.1em] text-muted uppercase">
            04 — L&apos;origine
          </div>
          <div className="u-serif max-w-[30ch] text-[clamp(22px,2vw,30px)] leading-[1.42] text-ink">
            {origine.map((paragraph, i) => (
              <p key={i} className={i === origine.length - 1 ? "m-0" : "mt-0 mb-7"}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="u-reveal relative pb-16">
          <div className="relative aspect-3/4">
            <ImageSlot brief="PHOTO 2 — portrait vertical, cadrage serré, lumière douce, expression calme" />
          </div>
          <div className="absolute bottom-0 left-0 max-w-[320px] border border-line bg-paper px-6 py-5 shadow-[0_18px_40px_rgba(21,23,28,0.10)] lg:-left-[8%]">
            <div className="mb-2 text-[11px] tracking-[0.12em] text-muted uppercase">
              2017
            </div>
            <div className="u-serif text-[21px] leading-[1.3] italic">
              Mémoire soutenu en 2017 sur le live streaming.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
