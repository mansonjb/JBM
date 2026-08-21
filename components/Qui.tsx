import ImageSlot from "./ImageSlot";
import Quote from "./Quote";
import SectionHead from "./SectionHead";
import { qui } from "@/lib/site";

/** 06 · Qui suis-je ? */
export default function Qui() {
  return (
    <section id="qui" className="py-[clamp(64px,9vh,120px)]">
      <SectionHead n="06">{qui.kicker}</SectionHead>

      <h2 className="m-0 mb-10 text-[clamp(30px,4.4vw,78px)] leading-[1.02]">
        {qui.title}
      </h2>

      <div className="grid grid-cols-1 gap-[clamp(28px,3vw,64px)] lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1.38fr)]">
        <figure className="m-0">
          <div className="relative aspect-3/4">
            <ImageSlot
              brief="PHOTO 5 · portrait vertical"
              src="/portrait.jpg"
              alt="Portrait de Jean-Baptiste Manson"
              sizes="(max-width: 1024px) 100vw, 28vw"
              className="shot"
            />
          </div>
          <figcaption className="cap">Jean-Baptiste Manson</figcaption>
        </figure>

        <div>
          <div className="grid grid-cols-1 gap-[clamp(24px,2.5vw,56px)] lg:grid-cols-2">
            <div>
              {qui.paragraphes.slice(0, 4).map((paragraphe) => (
                <p key={paragraphe} className="body mt-0 mb-5">
                  {paragraphe}
                </p>
              ))}
            </div>
            <div>
              {qui.paragraphes.slice(4).map((paragraphe) => (
                <p key={paragraphe} className="body mt-0 mb-5">
                  {paragraphe}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {qui.liens.map((lien) => (
              <div key={lien} className="card">
                <p className="m-0 text-[clamp(16px,1.3vw,20px)] leading-[1.4]">
                  {lien}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Quote attribution={false}>{qui.chute}</Quote>
          </div>
        </div>
      </div>
    </section>
  );
}
