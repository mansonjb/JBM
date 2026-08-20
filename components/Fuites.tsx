import { fuites } from "@/lib/site";

export default function Fuites() {
  return (
    <section
      id="constat"
      className="border-b border-line px-[6vw] py-[110px] lg:py-[130px]"
    >
      <div className="mb-12 grid grid-cols-1 items-end gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-[clamp(40px,6vw,110px)]">
        <div>
          <div className="mb-10 text-[12px] tracking-[0.1em] text-muted uppercase">
            01 · {fuites.kicker}
          </div>
          <h2 className="u-display m-0 max-w-[20ch] text-[clamp(38px,6vw,104px)]">
            {fuites.title}
          </h2>
        </div>
        <p className="m-0 max-w-[46ch] text-[clamp(16px,1.3vw,19px)] leading-[1.6] text-muted lg:pb-3">
          {fuites.intro}
        </p>
      </div>

      <div className="border-t border-line">
        {fuites.items.map((item, i) => (
          <div
            key={item.n}
            className={`u-reveal grid grid-cols-[52px_minmax(0,1fr)] items-start gap-x-6 gap-y-3 border-b border-line py-9 md:grid-cols-[90px_minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-10 ${
              i === 1 ? "u-tilt" : ""
            }`}
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div className="u-num pt-2 text-sm font-bold tracking-[0.06em] text-muted">
              {item.n}
            </div>
            <h3 className="u-display m-0 max-w-[18ch] text-[clamp(22px,2.2vw,34px)]">
              {item.titre}
            </h3>
            <p className="col-span-2 m-0 max-w-[58ch] text-[clamp(15px,1.25vw,18px)] leading-[1.65] text-muted md:col-span-1">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <p className="u-serif mt-14 max-w-[34ch] text-[clamp(24px,2.6vw,40px)] leading-[1.28]">
        {fuites.chute}
      </p>
    </section>
  );
}
