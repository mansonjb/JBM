import SectionHead from "./SectionHead";
import { questions } from "@/lib/site";

/** 08 · Questions, en dépliants natifs comme dans la maquette. */
export default function Questions() {
  return (
    <section id="questions" className="py-[clamp(64px,9vh,120px)]">
      <SectionHead n="08">Questions</SectionHead>

      <h2 className="m-0 mb-10 text-[clamp(30px,4.4vw,78px)] leading-[1.02]">
        Ce que vous vous demandez.
      </h2>

      <div className="grid grid-cols-1 gap-[clamp(20px,2vw,48px)] lg:grid-cols-2">
        <div>
          {questions.slice(0, 3).map((question) => (
            <details key={question.q}>
              <summary className="qsum">
                <span className="qtxt">{question.q}</span>
                <span className="plus" />
              </summary>
              <p className="qans">{question.a}</p>
            </details>
          ))}
        </div>
        <div>
          {questions.slice(3).map((question) => (
            <details key={question.q}>
              <summary className="qsum">
                <span className="qtxt">{question.q}</span>
                <span className="plus" />
              </summary>
              <p className="qans">{question.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
