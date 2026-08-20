import { cas } from "@/lib/site";

export default function Cas() {
  return (
    <section
      id="exemple"
      className="border-b border-line px-[6vw] py-[110px] lg:py-[130px]"
    >
      <div className="mb-12 text-[12px] tracking-[0.1em] text-muted uppercase">
        05 · {cas.kicker}
      </div>

      <div className="mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:gap-10">
        <h2 className="u-display m-0 text-[clamp(40px,7vw,124px)] tracking-[-0.03em]">
          {cas.client}
        </h2>
        <span className="text-[13px] tracking-[0.06em] text-muted uppercase">
          {cas.sousTitre}
        </span>
      </div>

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.75fr)] lg:gap-[clamp(40px,6vw,110px)]">
        <div>
          {cas.paragraphes.map((paragraphe, i) => (
            <p
              key={i}
              className={`max-w-[60ch] text-[clamp(16px,1.3vw,19px)] leading-[1.7] ${
                i === 0 ? "mt-0 mb-5 text-ink" : "mt-0 mb-5 text-muted"
              }`}
            >
              {paragraphe}
            </p>
          ))}
        </div>

        <div className="u-reveal u-frame relative p-7 lg:p-9">
          <svg
            viewBox="0 0 80 60"
            aria-hidden="true"
            className="pointer-events-none absolute -top-8 -left-6 hidden h-[46px] w-[62px] overflow-visible lg:block"
          >
            <path
              d="M6 4 C26 12 40 24 54 40"
              fill="none"
              stroke="#1F3BD8"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M54 40 L42 38 M54 40 L52 28"
              fill="none"
              stroke="#1F3BD8"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <div className="u-bullet mb-6 text-[12px] tracking-[0.1em] text-muted uppercase">
            {cas.chiffresIntro}
          </div>
          <div className="border-t border-line">
            {cas.chiffres.map((chiffre, i) => (
              <div
                key={chiffre.value}
                className={`border-b border-line py-7 ${i === 1 ? "u-tilt" : ""}`}
              >
                <div className="u-display u-num text-[clamp(34px,3.6vw,62px)] text-blue">
                  {chiffre.value}
                </div>
                <p className="mt-3 max-w-[30ch] text-[14px] leading-[1.5] text-muted">
                  {chiffre.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14 border-t border-line pt-12">
        {cas.chute.map((paragraphe, i) => (
          <p
            key={i}
            className={`u-serif max-w-[34ch] text-[clamp(22px,2.4vw,36px)] leading-[1.45] ${
              i === cas.chute.length - 1 ? "m-0" : "mt-0 mb-5"
            }`}
          >
            {i === cas.chute.length - 1 ? (
              <span className="u-mark">{paragraphe}</span>
            ) : (
              paragraphe
            )}
          </p>
        ))}
      </div>
    </section>
  );
}
