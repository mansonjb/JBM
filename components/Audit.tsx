import { audit, site } from "@/lib/site";

export default function Audit() {
  return (
    <section
      id="audit"
      className="border-b border-line px-[6vw] py-[110px] lg:py-[130px]"
    >
      <div className="mb-12 text-[12px] tracking-[0.1em] text-muted uppercase">
        07 · {audit.kicker}
      </div>

      <h2 className="u-display m-0 mb-14 text-[clamp(44px,8vw,150px)] tracking-[-0.03em]">
        {audit.title}
      </h2>

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-[clamp(40px,6vw,110px)]">
        <div>
          {audit.paragraphes.map((paragraphe, i) => (
            <p
              key={i}
              className="m-0 mb-5 max-w-[56ch] text-[clamp(16px,1.3vw,19px)] leading-[1.7]"
            >
              {paragraphe}
            </p>
          ))}
        </div>

        <div className="u-reveal">
          <div className="mb-5 text-[12px] tracking-[0.1em] text-muted uppercase">
            {audit.livrablesIntro}
          </div>
          <ul className="m-0 list-none border-t border-line p-0">
            {audit.livrables.map((livrable) => (
              <li
                key={livrable}
                className="border-b border-line py-4 text-[clamp(16px,1.4vw,21px)] leading-[1.4]"
              >
                {livrable}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="u-tilt mt-16 border-t border-line pt-12">
        <div className="mb-8 text-[clamp(18px,1.7vw,26px)]">
          {audit.suitesIntro}
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {audit.suites.map((suite, i) => (
            <div key={suite} className="u-reveal border-t border-line pt-5">
              <div className="u-num mb-3 text-sm font-bold text-muted">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="m-0 max-w-[34ch] text-[clamp(16px,1.3vw,19px)] leading-[1.5]">
                {suite}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
        <p className="u-serif m-0 max-w-[34ch] text-[clamp(22px,2.4vw,36px)] leading-[1.3]">
          {audit.chute}
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue px-7 py-4 text-[15px] font-semibold tracking-[0.04em] text-paper uppercase transition-colors hover:bg-ink"
        >
          {site.ctaAudit}
        </a>
      </div>
    </section>
  );
}
