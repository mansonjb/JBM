import Section from "./Section";
import { plan, questions } from "@/lib/site";

/* L'intitulé vient du plan : Questions est la seule section sans kicker écrit par le client. */
const etape = plan.find((repere) => repere.id === "questions");

/**
 * 08 · Qu'est-ce qui me retient encore ?
 * Composant serveur : plus d'accordéon, plus de « + », plus de numérotation
 * concurrente. Les cinq réponses sont visibles d'emblée, et l'unité scannable
 * est le couple question (5/12) plus réponse (6/12, en colonne 7).
 */
export default function Questions() {
  return (
    <Section
      id="questions"
      kicker={etape?.label ?? "Questions"}
      title="Ce que vous vous demandez."
    >
      <div>
        {questions.map((item) => (
          <div key={item.q} className="u-grid border-b border-line py-8">
            <p className="u-h3 u-serif italic md:col-span-5">{item.q}</p>
            <p className="u-note md:col-span-6 md:col-start-7">{item.a}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
