import ImageSlot from "./ImageSlot";
import { clients, guide } from "@/lib/site";

export default function Guide() {
  return (
    <>
      <section className="bg-blue px-[6vw] py-[100px] text-paper lg:py-[120px]">
        <div className="mb-14 text-[12px] tracking-[0.1em] text-paper/70 uppercase">
          05 · {guide.kicker}
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-[clamp(40px,6vw,100px)]">
          <div className="u-reveal">
            <h2 className="u-display m-0 mb-10 text-[clamp(38px,6vw,104px)]">
              {guide.title}
            </h2>
            <p className="m-0 mb-6 max-w-[58ch] text-base leading-[1.65] text-paper/85">
              {guide.lead}
            </p>
            <p className="m-0 max-w-[58ch] text-base leading-[1.65] text-paper/85">
              {guide.agence}
            </p>
          </div>
          <div className="u-tilt relative aspect-3/2">
            <ImageSlot
              brief="PHOTO 4 · noir et blanc, en action : il annote, il montre du doigt"
              src="/plan-action.jpg"
              alt="Jean-Baptiste devant un tableau, plan d'action détaillé au marqueur"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-line px-[6vw] py-[110px] lg:py-[130px]">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.62fr)] lg:gap-[clamp(40px,6vw,110px)]">
          <div>
            <div className="mb-8 text-[12px] tracking-[0.1em] text-muted uppercase">
              Quatre fois, un peu avant
            </div>
            <div className="border-t border-line">
              {guide.vagues.map((vague, i) => (
                <div
                  key={vague.annee}
                  className="u-reveal grid grid-cols-[70px_minmax(0,1fr)] items-baseline gap-6 border-b border-line py-5"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <span className="u-num text-sm font-bold tracking-[0.06em] text-muted">
                    {vague.annee}
                  </span>
                  <span className="text-[clamp(16px,1.5vw,21px)] leading-[1.4]">
                    {vague.text}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-[54ch] text-[15px] leading-[1.65] text-muted">
              {guide.vaguesChute}
            </p>

            <div className="relative mt-12 aspect-3/4 max-w-[380px]">
              <ImageSlot
                brief="PHOTO 5 · portrait vertical, cadrage serré, lumière douce"
                src="/portrait.jpg"
                alt="Portrait de Jean-Baptiste Manson"
              />
            </div>
          </div>

          <div>
            <div className="mb-8 text-[12px] tracking-[0.1em] text-muted uppercase">
              Les marques servies en agence
            </div>
            <div className="border-t border-line text-[clamp(17px,1.5vw,22px)] font-medium">
              {clients.map((client) => (
                <div key={client} className="border-b border-line py-3.5">
                  {client}
                </div>
              ))}
            </div>
            <p className="mt-7 max-w-[40ch] text-sm leading-[1.6] text-muted">
              Des projets créatifs, livrés sous contrainte, pour des marques qui
              ne laissent rien passer.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
