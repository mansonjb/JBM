import Enonce from "./Enonce";
import { ouverture } from "@/lib/site";

/** Les formes que prend une opportunité, puis ce que je fais avec. */
export default function Ouverture() {
  return (
    <section className="border-b border-line bg-sand px-[6vw] py-[100px] lg:py-[120px]">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-[clamp(40px,6vw,110px)]">
        <ul className="m-0 list-none border-t border-line p-0">
          {ouverture.pistes.map((piste, i) => (
            <li
              key={piste}
              className="u-reveal u-row cursor-default border-b border-line py-4 pr-8 text-[clamp(17px,1.6vw,23px)] leading-[1.4]"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {piste}
            </li>
          ))}
        </ul>

        <div className="lg:pt-6">
          <Enonce className="mb-8">{ouverture.paragraphes[0]}</Enonce>
          {ouverture.paragraphes.slice(1).map((paragraphe, i) => (
            <p
              key={i}
              className="u-serif m-0 mb-6 max-w-[42ch] text-[clamp(19px,1.7vw,26px)] leading-[1.45]"
            >
              {paragraphe}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
