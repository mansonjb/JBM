import Quote from "./Quote";
import SectionHead from "./SectionHead";
import { regard } from "@/lib/site";

/** 01 · Pourquoi un regard extérieur. */
export default function Regard() {
  return (
    <>
      <section id="regard" className="py-[clamp(64px,9vh,120px)]">
        <SectionHead n="01">{regard.kicker}</SectionHead>

        <h2 className="m-0 mb-10 text-[clamp(30px,4.4vw,78px)] leading-[1.02]">
          {regard.title}
        </h2>

        <div className="grid grid-cols-1 gap-[clamp(32px,4vw,80px)] lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div>
            {regard.intro.map((paragraphe) => (
              <p key={paragraphe} className="lede m-0">
                {paragraphe}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {regard.derives.map((derive) => (
              <div key={derive} className="chip">
                {derive}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[clamp(64px,9vh,120px)]" style={{ background: "#EDE6DA" }}>
        <div className="grid grid-cols-1 gap-[clamp(32px,4vw,80px)] lg:grid-cols-2">
          <div>
            {regard.suite.map((paragraphe) => (
              <p key={paragraphe} className="body mt-0 mb-5">
                {paragraphe}
              </p>
            ))}
          </div>
          <div>
            <div className="sechead-t mb-4">Les questions que je pose</div>
            {regard.questions.map((question) => (
              <p key={question} className="q m-0">
                {question}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-[clamp(64px,9vh,120px)]"
        style={{ background: "#1F3BD8", color: "#F4EFE6" }}
      >
        <Quote invert>{regard.chute}</Quote>
      </section>
    </>
  );
}
