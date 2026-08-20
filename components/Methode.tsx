import { marches } from "@/lib/site";

export default function Methode() {
  return (
    <section
      id="methode"
      className="border-b border-line px-[6vw] py-[110px] lg:py-[130px]"
    >
      <div className="mb-14 text-[12px] tracking-[0.1em] text-muted uppercase">
        03 · La méthode
      </div>

      <h2 className="u-display m-0 mb-6 text-[clamp(44px,9vw,168px)] leading-[0.86] tracking-[-0.03em]">
        Les quatre marches.
      </h2>
      <p className="mt-0 mb-14 max-w-[52ch] text-[15px] leading-[1.6] text-muted">
        La même séquence à chaque fois, quel que soit le métier. À chaque marche,
        vous recevez quelque chose de concret.
      </p>

      <div className="border-t border-line">
        {marches.map((marche, i) => (
          <div
            key={marche.n}
            className={`u-reveal grid grid-cols-[52px_minmax(0,1fr)] items-start gap-x-6 gap-y-3 border-b border-line py-9 md:grid-cols-[90px_minmax(0,220px)_minmax(0,1fr)_minmax(0,280px)] md:gap-8 ${
              i === 3 ? "u-tilt" : ""
            }`}
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="u-num pt-1 text-sm font-bold tracking-[0.06em] text-muted">
              {marche.n}
            </div>
            <div className="u-display text-3xl tracking-[-0.01em]">
              {marche.title}
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="m-0 max-w-[52ch] text-[15px] leading-[1.6]">
                {marche.text}
              </p>
              {marche.question && (
                <p className="u-serif m-0 mt-3 text-[20px] text-muted italic">
                  {marche.question}
                </p>
              )}
            </div>
            <div className="col-span-2 border-t border-line pt-4 md:col-span-1 md:border-t-0 md:border-l md:pt-0 md:pl-6">
              <div className="mb-2 text-[11px] tracking-[0.12em] text-muted uppercase">
                Vous repartez avec
              </div>
              <p className="m-0 text-[14px] leading-[1.55] text-ink">
                {marche.livrable}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="u-serif mt-14 max-w-[28ch] text-[clamp(24px,2.4vw,36px)] leading-[1.35]">
        On prend le temps sur les trois premières marches. On va très vite sur la
        quatrième.
      </p>
    </section>
  );
}
