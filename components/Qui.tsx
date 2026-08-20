import ImageSlot from "./ImageSlot";
import { qui } from "@/lib/site";

export default function Qui() {
  return (
    <section className="border-b border-line bg-sand px-[6vw] py-[110px] lg:py-[130px]">
      <div className="mb-12 text-[12px] tracking-[0.1em] text-muted uppercase">
        06 · {qui.kicker}
      </div>

      <h2 className="u-display m-0 mb-14 max-w-[24ch] text-[clamp(32px,4.4vw,76px)]">
        {qui.title}
      </h2>

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.75fr)] lg:gap-[clamp(40px,6vw,110px)]">
        <div>
          {qui.paragraphes.map((paragraphe, i) => (
            <p
              key={i}
              className="m-0 mb-5 max-w-[58ch] text-[clamp(16px,1.3vw,19px)] leading-[1.7] text-muted"
            >
              {paragraphe}
            </p>
          ))}

          <ul className="u-tilt m-0 mt-10 list-none border-t border-line p-0">
            {qui.liens.map((lien) => (
              <li
                key={lien}
                className="u-row cursor-default border-b border-line py-4 pr-8 text-[clamp(16px,1.4vw,21px)] leading-[1.4]"
              >
                {lien}
              </li>
            ))}
          </ul>

          <p className="u-serif m-0 mt-10 max-w-[34ch] text-[clamp(22px,2.3vw,34px)] leading-[1.5]">
            <span className="u-mark">{qui.chute}</span>
          </p>
        </div>

        <div className="u-reveal grid grid-cols-1 gap-8">
          <div className="relative aspect-3/4">
            <ImageSlot
              brief="PHOTO 5 · portrait vertical, cadrage serré, lumière douce"
              src="/portrait.jpg"
              alt="Portrait de Jean-Baptiste Manson"
              sizes="(max-width: 1024px) 100vw, 34vw"
            />
          </div>
          <div className="relative aspect-3/2">
            <ImageSlot
              brief="PHOTO 4 · noir et blanc, en action devant un tableau"
              src="/plan-action.jpg"
              alt="Jean-Baptiste Manson devant un tableau, plan d'action au marqueur"
              sizes="(max-width: 1024px) 100vw, 34vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
