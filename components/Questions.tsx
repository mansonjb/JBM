import SecHead from "./SecHead";
import { questions } from "@/lib/site";

/** 06 · Questions, en dépliants natifs. */
export default function Questions() {
  return (
    <section
      id="questions"
      className="border-b-2 border-line pt-0 pr-0 pb-[clamp(50px,8vh,90px)] pl-0"
    >
      <SecHead n="06">Questions</SecHead>

      <h2 className="m-0 mb-[50px] text-[clamp(40px,calc(6.4*var(--u)),118px)] leading-[0.92]">
        Ce que vous vous demandez.
      </h2>

      <div className="border-t-2 border-line">
        {questions.map((question, i) => (
          <details key={question.q}>
            <summary
              className="grid items-baseline gap-5 px-5 py-[26px]"
              style={{ gridTemplateColumns: "76px minmax(0, 1fr) 40px" }}
            >
              <span className="text-[13px] font-bold tracking-[0.1em] opacity-60 [font-variant-numeric:tabular-nums]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[clamp(19px,calc(2*var(--u)),32px)] leading-[1.35]">
                {question.q}
              </span>
              <span className="plus text-right text-[22px] opacity-70" />
            </summary>
            <p className="body m-0 pt-0 pr-5 pb-8 pl-[96px]">{question.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
