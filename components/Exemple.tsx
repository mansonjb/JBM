import SecHead from "./SecHead";
import { exemple } from "@/lib/site";

/** 04 · Un exemple. */
export default function Exemple() {
  return (
    <section
      id="exemple"
      className="border-b-2 border-line pt-[clamp(70px,11vh,130px)] pb-[clamp(70px,11vh,130px)]"
    >
      <SecHead n={exemple.n}>{exemple.kicker}</SecHead>

      <h2 className="m-0 mb-[14px] text-[clamp(52px,calc(9*var(--u)),170px)] leading-[0.86]" style={{ letterSpacing: "-0.03em" }}>
        {exemple.client}
      </h2>
      <p className="m-0 mb-[50px] text-[14px] tracking-[0.08em] text-muted uppercase">
        {exemple.sousTitre}
      </p>

      <div
        className="stats4 mb-[60px] grid gap-[2px] border-2"
        style={{ background: "#1F3BD8", borderColor: "#1F3BD8" }}
      >
        {exemple.chiffres.map((chiffre) => (
          <div key={chiffre.texte} className="stat">
            <div className="fig text-[clamp(44px,calc(5*var(--u)),86px)]">{chiffre.valeur}</div>
            <p className="mt-[14px] mb-0 text-[13px] leading-[1.5]">{chiffre.texte}</p>
          </div>
        ))}
      </div>

      <div className="mb-14">
        {exemple.paragraphes.map((paragraphe, i) => (
          <p
            key={paragraphe}
            className={`lede max-w-none ${
              i === exemple.paragraphes.length - 1 ? "m-0" : "mt-0 mb-4"
            }`}
          >
            {paragraphe}
          </p>
        ))}
      </div>

      <figure className="m-0 grid grid-cols-1 gap-[clamp(24px,3vw,64px)] border-t-2 border-line pt-[clamp(28px,3vw,56px)] lg:grid-cols-[minmax(0,0.3fr)_minmax(0,0.7fr)]">
        {/* Qui parle, à gauche et en évidence. Ce qu'il dit, à côté. */}
        <figcaption>
          <span
            className="mb-[18px] block h-[3px] w-[44px]"
            style={{ background: "#1F3BD8" }}
          />
          <span className="block font-[family-name:var(--font-display)] text-[clamp(22px,calc(2.2*var(--u)),38px)] leading-[1.02] tracking-[-0.01em] uppercase">
            {exemple.nom}
          </span>
          <span className="eyebrow mt-[10px] block">{exemple.role}</span>
        </figcaption>

        <blockquote
          className="quote"
          style={{
            maxWidth: "min(100%, 700px)",
            fontSize: "clamp(19px, calc(1.9 * var(--u)), 31px)",
            lineHeight: 1.45,
          }}
        >
          {exemple.temoignage}
        </blockquote>
      </figure>

      <a className="btn mt-[50px]" href="#contact">
        {exemple.cta} <span>→</span>
      </a>
    </section>
  );
}
