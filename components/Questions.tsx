import Bande from "./Bande";
import Items from "./Items";
import { questions } from "@/lib/site";

/** 08 · Les questions posées avant de commencer. */
export default function Questions() {
  return (
    <Bande fond="paper" id="questions">
      <div className="u-surtitre">08 · Questions</div>
      <h2 className="u-titre">Ce que vous vous demandez.</h2>
      <div className="mt-[var(--pas-64)]">
        <Items
          items={questions.map((question) => ({
            titre: question.q,
            texte: question.a,
          }))}
        />
      </div>
    </Bande>
  );
}
