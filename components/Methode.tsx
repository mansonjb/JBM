import SecHead from "./SecHead";
import Shot from "./Shot";
import { methode } from "@/lib/site";

/** 01 · La méthode. */
export default function Methode() {
  return (
    <section
      id="methode"
      className="border-b-2 border-line pt-[clamp(70px,11vh,130px)] pb-[clamp(70px,11vh,130px)]"
    >
      <SecHead n={methode.n}>{methode.kicker}</SecHead>

      <h2 className="m-0 mb-[26px] text-[clamp(42px,7.2vw,132px)] leading-[1.06] tracking-[-0.03em]">
        {methode.titre}
      </h2>

      <p className="serif blue m-0 mb-14 text-[clamp(22px,2.4vw,40px)] leading-[1.3]">
        {methode.citation}
      </p>

      <div className="steps">
        {methode.etapes.map((etape) => (
          <div key={etape.n} className="step">
            <div className="step-n">{etape.n}</div>
            <h3 className="step-t">{etape.titre}</h3>
            <p className="step-b">{etape.texte}</p>
          </div>
        ))}
      </div>

      <figure className="mt-[60px] mb-0">
        <Shot
          src="/tableau-plan-action.jpg"
          alt="Plan d'action au tableau"
          sizes="100vw"
          style={{ height: "clamp(300px, 46vh, 520px)" }}
        />
      </figure>

      <a className="btn btn-ghost mt-[50px]" href="#contact">
        {methode.cta} <span>→</span>
      </a>
    </section>
  );
}
