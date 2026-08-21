import Quote from "./Quote";
import SectionHead from "./SectionHead";
import { trouvailles } from "@/lib/site";

/** 03 · Ce qu'on peut trouver, dans les cartes bleues de la maquette. */
export default function Trouvailles() {
  return (
    <>
      <section id="trouvailles" className="py-[clamp(64px,9vh,120px)]">
        <SectionHead n="03">{trouvailles.kicker}</SectionHead>

        <h2 className="m-0 mb-8 text-[clamp(30px,4.4vw,78px)] leading-[1.02]">
          {trouvailles.title}
        </h2>

        <div className="mb-12 grid grid-cols-1 gap-[clamp(28px,3vw,64px)] lg:grid-cols-2">
          {trouvailles.intro.map((paragraphe, i) => (
            <p key={paragraphe} className={i === 0 ? "lede m-0" : "body m-0"}>
              {paragraphe}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {trouvailles.cartes.map((carte, i) => (
            <article key={carte.titre} className="tcard">
              <span className="tnum">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="tkick m-0">{carte.titre}</h3>
              <p className="ttxt m-0">{carte.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="py-[clamp(64px,9vh,120px)]"
        style={{ background: "#EDE6DA" }}
      >
        <Quote>{trouvailles.chute}</Quote>
      </section>
    </>
  );
}
