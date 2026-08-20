import { aidePublique, offreIntro, offres } from "@/lib/site";

export default function Offre() {
  return (
    <section
      id="offre"
      className="border-b border-line bg-sand px-[6vw] py-[110px] lg:py-[130px]"
    >
      <div className="mb-14 text-[12px] tracking-[0.1em] text-muted uppercase">
        06 · L&apos;offre
      </div>

      <h2 className="u-display m-0 mb-6 text-[clamp(44px,8vw,150px)] leading-[0.88] tracking-[-0.03em]">
        Ce qu&apos;on peut faire.
      </h2>
      <p className="mt-0 mb-14 max-w-[52ch] text-[15px] leading-[1.6] text-muted">
        {offreIntro}
      </p>

      <div className="border-t border-line">
        {offres.map((offre, i) => (
          <div
            key={offre.title}
            className="u-reveal grid grid-cols-1 items-start gap-4 border-b border-line py-9 md:grid-cols-[minmax(0,240px)_minmax(0,1fr)] md:gap-8 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)_minmax(0,300px)_minmax(0,190px)]"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="u-display text-[28px] leading-[1.05] tracking-[-0.01em]">
              {offre.title}
            </div>
            <p className="m-0 text-sm leading-[1.6] text-muted">{offre.text}</p>
            <div>
              <a
                href="#contact"
                className={`u-display inline-block leading-[1.05] underline-offset-[6px] transition-colors hover:underline ${
                  offre.accent
                    ? "text-[clamp(24px,2.4vw,34px)] text-blue"
                    : "text-[clamp(22px,2vw,28px)] text-ink hover:text-blue"
                }`}
              >
                {offre.cta}
              </a>
              <div className="mt-2 text-[12px] text-muted">{offre.note}</div>
            </div>
            <div className="text-[13px] tracking-[0.06em] text-muted uppercase">
              {offre.delay}
            </div>
          </div>
        ))}
      </div>

      <div className="u-tilt mt-12 max-w-[66ch] border border-line px-7 py-6">
        <p className="m-0 text-sm leading-[1.65] text-muted">{aidePublique}</p>
      </div>
    </section>
  );
}
