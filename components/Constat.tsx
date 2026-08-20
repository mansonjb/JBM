import { constat, symptomes } from "@/lib/site";

export default function Constat() {
  return (
    <section
      id="probleme"
      className="border-b border-line px-[6vw] py-[110px] lg:py-[130px]"
    >
      <div className="mb-12 grid grid-cols-1 items-end gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-[clamp(40px,6vw,110px)]">
        <div>
          <div className="mb-10 text-[12px] tracking-[0.1em] text-muted uppercase">
            01 · Le constat
          </div>
          <h2 className="u-display m-0 max-w-[24ch] text-[clamp(38px,6vw,104px)]">
            {constat.title}
          </h2>
        </div>
        <p className="m-0 max-w-[46ch] text-[clamp(16px,1.3vw,19px)] leading-[1.6] text-muted lg:pb-3">
          {constat.chute}
        </p>
      </div>

      <div className="border-t border-line">
        {symptomes.map((symptome, i) => (
          <div
            key={symptome.n}
            className={`u-reveal grid grid-cols-[52px_minmax(0,1fr)] items-baseline gap-6 border-b border-line py-9 md:grid-cols-[90px_minmax(0,1fr)] md:gap-10 ${
              i === 1 ? "u-tilt" : ""
            }`}
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div className="u-num text-sm font-bold tracking-[0.06em] text-muted">
              {symptome.n}
            </div>
            <p className="u-serif m-0 max-w-[60ch] text-[clamp(21px,2.3vw,36px)] leading-[1.3]">
              {symptome.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
