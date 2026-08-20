import { cas } from "@/lib/site";

export default function Cas() {
  return (
    <section
      id="preuve"
      className="border-b border-line px-[6vw] py-[110px] lg:py-[130px]"
    >
      <div className="mb-14 text-[12px] tracking-[0.1em] text-muted uppercase">
        04 · {cas.kicker}
      </div>

      <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:gap-10">
        <h2 className="u-display m-0 text-[clamp(40px,7vw,124px)] tracking-[-0.03em]">
          {cas.client}
        </h2>
        <span className="text-[13px] tracking-[0.06em] text-muted uppercase">
          {cas.sousTitre}
        </span>
      </div>

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.62fr)] lg:gap-[clamp(40px,6vw,100px)]">
        <div className="border-t border-line">
          {cas.temps.map((temps, i) => (
            <div
              key={temps.label}
              className="u-reveal grid grid-cols-1 gap-3 border-b border-line py-8 md:grid-cols-[minmax(0,180px)_minmax(0,1fr)] md:gap-8"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div
                className={`u-display text-[22px] tracking-[-0.01em] ${
                  i === cas.temps.length - 1 ? "text-blue" : "text-ink"
                }`}
              >
                {temps.label}
              </div>
              <p className="m-0 max-w-[62ch] text-[clamp(15px,1.25vw,18px)] leading-[1.65] text-muted">
                {temps.text}
              </p>
            </div>
          ))}
        </div>

        <div>
          <div className="grid grid-cols-3 border-t border-b border-line">
            {cas.chiffres.map((chiffre, i) => (
              <div
                key={chiffre.value}
                className={`py-7 ${
                  [
                    "pr-3 border-r border-line lg:pr-4",
                    "px-3 border-r border-line lg:px-4",
                    "pl-3 lg:pl-4",
                  ][i]
                }`}
              >
                <div className="u-display u-num text-[clamp(24px,2.4vw,40px)] leading-none">
                  {chiffre.value}
                </div>
                <p className="mt-3 text-[12px] leading-[1.5] text-muted">
                  {chiffre.label}
                </p>
              </div>
            ))}
          </div>

          <div className="u-tilt mt-10">
            <p className="u-serif m-0 max-w-[30ch] text-[clamp(22px,2.2vw,32px)] leading-[1.35]">
              {cas.chute}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
