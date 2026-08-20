import { constat, symptomes } from "@/lib/site";

export default function Constat() {
  return (
    <section
      id="probleme"
      className="border-b border-line px-[6vw] py-[110px] lg:py-[130px]"
    >
      <div className="mb-14 text-[12px] tracking-[0.1em] text-muted uppercase">
        01 · Le constat
      </div>

      <h2 className="u-display m-0 mb-16 max-w-[20ch] text-[clamp(38px,6.6vw,112px)]">
        {constat.title}
      </h2>

      <div className="border-t border-line">
        {symptomes.map((symptome, i) => (
          <div
            key={symptome.n}
            className={`u-reveal grid grid-cols-[52px_minmax(0,1fr)] items-baseline gap-6 border-b border-line py-8 md:grid-cols-[90px_minmax(0,1fr)] ${
              i === 1 ? "u-tilt" : ""
            }`}
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div className="u-num text-sm font-bold tracking-[0.06em] text-muted">
              {symptome.n}
            </div>
            <p className="u-serif m-0 max-w-[46ch] text-[clamp(21px,2.1vw,32px)] leading-[1.32]">
              {symptome.text}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-14 max-w-[52ch] text-[clamp(16px,1.4vw,20px)] leading-[1.6] text-muted">
        {constat.chute}
      </p>
    </section>
  );
}
