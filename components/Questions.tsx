import Bande from "./Bande";
import { questions } from "@/lib/site";

/** 08 · Les questions, en paires question puis réponse. */
export default function Questions() {
  return (
    <Bande fond="paper" id="questions">
      <div className="u-surtitre">08 · Questions</div>
      <h2 className="u-titre">Ce que vous vous demandez.</h2>

      <div className="u-qa mt-[var(--pas-64)]">
        {questions.map((question, i) => (
          <div
            key={question.q}
            className="u-carte u-reveal"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <span className="u-carte-num">{String(i + 1).padStart(2, "0")}</span>
            <p className="u-qa-question">{question.q}</p>
            <p className="u-carte-texte">{question.a}</p>
          </div>
        ))}
      </div>
    </Bande>
  );
}
