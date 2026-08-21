import SecHead from "./SecHead";
import Shot from "./Shot";
import { qui } from "@/lib/site";

/** 05 · Qui suis-je. */
export default function QuiSuisJe() {
  return (
    <section
      id="qui"
      className="border-b-2 border-line pt-[clamp(70px,11vh,130px)] pb-[clamp(70px,11vh,130px)]"
    >
      <SecHead n={qui.n}>{qui.kicker}</SecHead>

      <h2 className="m-0 mb-[50px] text-[clamp(34px,5.2vw,94px)] leading-[0.94]">
        {qui.titre1} <span className="blue">{qui.titre2}</span>
      </h2>

      <div className="grid grid-cols-1 items-start gap-[clamp(32px,4vw,76px)] lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)]">
        <div>
          <figure
            className="m-0 border-2 p-3"
            style={{ borderColor: "#1F3BD8", background: "#EDE6DA" }}
          >
            <Shot
              src="/portrait-jbm.jpg"
              alt="Jean-Baptiste Manson"
              sizes="(max-width: 1024px) 100vw, 30vw"
              style={{
                aspectRatio: "4 / 5",
                height: "auto",
                objectPosition: "50% 16%",
                border: 0,
              }}
            />
          </figure>
          <p className="mt-5 mb-0 font-[family-name:var(--font-display)] text-[clamp(26px,2.6vw,44px)] leading-[1.02] tracking-[-0.01em] uppercase">
            {qui.nom}
          </p>
          <p className="eyebrow mt-[10px] mb-0">{qui.fonction}</p>
        </div>

        <div>
          {qui.paragraphes.map((paragraphe, i) => (
            <p
              key={paragraphe}
              className={`lede max-w-none ${
                i === qui.paragraphes.length - 1 ? "m-0" : "mt-0 mb-5"
              }`}
            >
              {paragraphe}
            </p>
          ))}
          <p className="mini-deg">
            <span className="mini-deg-n">1°</span>
            {qui.degre}
          </p>
        </div>
      </div>
    </section>
  );
}
