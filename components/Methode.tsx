import { marches } from "@/lib/site";

export default function Methode() {
  return (
    <section
      id="methode"
      className="border-b border-line px-[6vw] py-[110px] lg:py-[130px]"
    >
      <h2 className="u-display m-0 mb-14 text-[clamp(44px,9vw,168px)] leading-[0.86] tracking-[-0.03em] lg:mb-[70px]">
        Les quatre marches.
      </h2>

      <div className="border-t border-line">
        {marches.map((marche, i) => (
          <div
            key={marche.n}
            className={`u-reveal grid grid-cols-[52px_minmax(0,1fr)] items-start gap-x-6 gap-y-3 border-b border-line py-8 md:grid-cols-[90px_minmax(0,240px)_minmax(0,1fr)] md:gap-8 ${
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
              <p className="m-0 max-w-[62ch] text-[15px] leading-[1.6]">
                {marche.text}
              </p>
              {marche.question && (
                <p className="u-serif m-0 mt-3 text-[21px] text-muted italic">
                  {marche.question}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="u-serif mt-14 max-w-[28ch] text-[clamp(24px,2.4vw,36px)] leading-[1.35] lg:mt-16">
        On prend le temps sur les trois premières marches. On va très vite sur la
        quatrième.
      </p>
    </section>
  );
}
