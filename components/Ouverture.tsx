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
              className={`u-reveal border-b border-line py-4 text-[clamp(17px,1.6vw,23px)] leading-[1.4] ${
                i === 3 ? "u-tilt" : ""
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {piste}
            </li>
          ))}
        </ul>

        <div className="u-serif text-[clamp(21px,1.9vw,29px)] leading-[1.45] lg:pt-6">
          {ouverture.paragraphes.map((paragraphe, i) => (
            <p
              key={i}
              className={`max-w-[42ch] ${
                i === ouverture.paragraphes.length - 1 ? "m-0" : "mt-0 mb-7"
              }`}
            >
              {paragraphe}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
