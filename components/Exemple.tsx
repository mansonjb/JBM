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

      <h2 className="m-0 mb-[14px] text-[clamp(52px,9vw,170px)] leading-[0.86] tracking-[-0.03em]">
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
            <div className="fig text-[clamp(44px,5vw,86px)]">{chiffre.valeur}</div>
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

      <blockquote className="quote max-w-none text-[clamp(22px,2.6vw,42px)] leading-[1.32]">
        {exemple.temoignage}
      </blockquote>
      <div className="attrib mt-[26px]">{exemple.attribution}</div>

      <a className="btn mt-[50px]" href="#contact">
        {exemple.cta} <span>→</span>
      </a>
    </section>
  );
}
