import SecHead from "./SecHead";
import { trouver } from "@/lib/site";

/** 02 · Ce qu'on peut trouver. */
export default function Trouver() {
  return (
    <section
      id="trouver"
      className="border-b-2 border-line pt-[clamp(70px,11vh,130px)] pb-[clamp(70px,11vh,130px)]"
      style={{ background: "#EDE6DA" }}
    >
      <SecHead n={trouver.n}>{trouver.kicker}</SecHead>

      <h2 className="m-0 mb-9 text-[clamp(34px,5.2vw,96px)] leading-[1.06]">
        {trouver.titre1} <span className="blue">{trouver.titre2}</span>
      </h2>

      <p className="lede m-0 mb-14 max-w-none">{trouver.lede}</p>

      <p className="serif m-0 mb-[26px] text-[clamp(22px,2.2vw,36px)] leading-[1.3]">
        {trouver.amorce}
      </p>

      <div
        className="grid gap-[2px] border-2 border-line"
        style={{
          background: "#D8CFC0",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        {trouver.cartes.map((carte, i) => (
          <article key={carte.titre} className="card">
            <div className="mb-6 text-[13px] font-bold tracking-[0.1em] opacity-60 [font-variant-numeric:tabular-nums]">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="m-0 mb-4 font-[family-name:var(--font-display)] text-[clamp(21px,1.8vw,30px)] leading-[1.12] uppercase">
              {carte.titre}
            </h3>
            <p className="m-0 text-[15px] leading-[1.65] opacity-[0.82]">
              {carte.texte}
            </p>
          </article>
        ))}
      </div>

      <blockquote className="quote mt-[clamp(56px,9vh,100px)] max-w-none">
        {trouver.citation1}
        <span className="blue">{trouver.citation2}</span>
        {trouver.citation3}
      </blockquote>
    </section>
  );
}
