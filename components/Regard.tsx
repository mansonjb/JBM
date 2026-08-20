import { regard } from "@/lib/site";

export default function Regard() {
  return (
    <section
      id="regard"
      className="border-b border-line px-[6vw] py-[110px] lg:py-[130px]"
    >
      <div className="mb-12 text-[12px] tracking-[0.1em] text-muted uppercase">
        01 · {regard.kicker}
      </div>

      <h2 className="u-display m-0 mb-14 max-w-[26ch] text-[clamp(32px,4.4vw,76px)]">
        {regard.title}
      </h2>

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-[clamp(40px,6vw,110px)]">
        <div>
          {regard.intro.map((paragraphe) => (
            <p
              key={paragraphe}
              className="m-0 mb-8 max-w-[52ch] text-[clamp(16px,1.35vw,20px)] leading-[1.65]"
            >
              {paragraphe}
            </p>
          ))}

          <ul className="u-tilt m-0 mb-8 list-none border-t border-line p-0">
            {regard.derives.map((derive) => (
              <li
                key={derive}
                className="u-row cursor-default border-b border-line py-3 pr-8 text-[clamp(16px,1.4vw,21px)]"
              >
                {derive}
              </li>
            ))}
          </ul>

          {regard.suite.map((paragraphe) => (
            <p
              key={paragraphe}
              className="m-0 mb-6 max-w-[52ch] text-[clamp(16px,1.35vw,20px)] leading-[1.65] text-muted"
            >
              {paragraphe}
            </p>
          ))}
        </div>

        <div className="u-reveal u-frame p-7 lg:p-9">
          <div className="u-bullet mb-6 text-[11px] tracking-[0.12em] text-muted uppercase">
            Les questions que je pose
          </div>
          <ul className="m-0 list-none border-t border-line p-0">
            {regard.questions.map((question, i) => (
              <li
                key={question}
                className="u-serif border-b border-line py-4 text-[clamp(18px,1.6vw,24px)] leading-[1.35] italic"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {question}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="u-serif mt-14 max-w-[38ch] text-[clamp(24px,2.6vw,40px)] leading-[1.5]">
        <span className="u-mark">{regard.chute}</span>
      </p>
    </section>
  );
}
