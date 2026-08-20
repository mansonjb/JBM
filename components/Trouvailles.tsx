import { trouvailles } from "@/lib/site";

export default function Trouvailles() {
  return (
    <section className="border-b border-line px-[6vw] py-[110px] lg:py-[130px]">
      <div className="mb-12 text-[12px] tracking-[0.1em] text-muted uppercase">
        03 · {trouvailles.kicker}
      </div>

      <div className="mb-14 grid grid-cols-1 items-end gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-[clamp(40px,6vw,110px)]">
        <h2 className="u-display m-0 max-w-[24ch] text-[clamp(32px,4.4vw,76px)]">
          {trouvailles.title}
        </h2>
        <div className="lg:pb-2">
          {trouvailles.intro.map((paragraphe, i) => (
            <p
              key={i}
              className={`max-w-[52ch] text-[clamp(15px,1.25vw,18px)] leading-[1.65] text-muted ${
                i === trouvailles.intro.length - 1 ? "m-0" : "mt-0 mb-4"
              }`}
            >
              {paragraphe}
            </p>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-3">
        {trouvailles.cartes.map((carte, i) => (
          <div
            key={carte.titre}
            className={`u-reveal border-b border-line py-9 lg:px-8 lg:first:pl-0 ${
              i % 3 === 2 ? "" : "lg:border-r"
            } ${i === 3 ? "u-tilt" : ""}`}
            style={{ transitionDelay: `${(i % 3) * 60}ms` }}
          >
            <h3 className="u-display m-0 mb-4 max-w-[16ch] text-[clamp(20px,1.9vw,28px)]">
              {carte.titre}
            </h3>
            <p className="m-0 max-w-[42ch] text-[clamp(15px,1.2vw,17px)] leading-[1.65] text-muted">
              {carte.text}
            </p>
          </div>
        ))}
      </div>

      <p className="u-serif mt-14 max-w-[36ch] text-[clamp(24px,2.6vw,40px)] leading-[1.28]">
        {trouvailles.chute}
      </p>
    </section>
  );
}
