import ImageSlot from "./ImageSlot";
import { clients } from "@/lib/site";

const chiffres = [
  { value: "13", label: "demandes de devis en trois mois" },
  { value: "8", label: "jours de travail" },
  { value: "× 3,6", label: "organique sur payant" },
];

export default function Preuves() {
  return (
    <section
      id="preuves"
      className="border-b border-line px-[6vw] py-[110px] lg:py-[130px]"
    >
      <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.72fr)] lg:gap-[clamp(40px,7vw,120px)]">
        {/* Bloc A — le résultat */}
        <div className="u-reveal">
          <div className="mb-8 text-[12px] tracking-[0.1em] text-muted uppercase">
            Bloc A — le résultat
          </div>
          <h2 className="u-display m-0 mb-11 text-[clamp(40px,6vw,96px)]">
            CB Sols.
          </h2>

          <div className="grid grid-cols-3 border-t border-b border-line">
            {chiffres.map((chiffre, i) => (
              <div
                key={chiffre.value}
                className={`py-7 ${
                  [
                    "pr-4 border-r border-line lg:pr-6",
                    "px-4 border-r border-line lg:px-6",
                    "pl-4 lg:pl-6",
                  ][i]
                }`}
              >
                <div className="u-display u-num text-[clamp(28px,3.2vw,54px)] leading-none">
                  {chiffre.value}
                </div>
                <p className="mt-3 text-[12px] leading-[1.5] text-muted">
                  {chiffre.label}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-[62ch] text-[15px] leading-[1.65] text-muted">
            Artisan poseur de sols. Zéro demande de devis en trois ans, malgré un
            budget publicitaire dépensé. Refonte complète du système
            d&apos;acquisition en huit jours de travail. Trois mois plus tard :
            treize demandes, et un trafic organique 3,6 fois supérieur au trafic
            payant.
          </p>

          <div className="u-tilt mt-11 border-t border-line pt-8">
            <p className="u-serif m-0 max-w-[34ch] text-[clamp(22px,2.2vw,32px)] leading-[1.35]">
              Trois ans à zéro coûtaient plus cher que la mission.
            </p>
          </div>
        </div>

        {/* Bloc B — le niveau */}
        <div className="u-reveal">
          <div className="mb-8 text-[12px] tracking-[0.1em] text-muted uppercase">
            Bloc B — le niveau
          </div>
          <div className="border-t border-line text-[clamp(17px,1.5vw,22px)] font-medium">
            {clients.map((client) => (
              <div key={client} className="border-b border-line py-3.5">
                {client}
              </div>
            ))}
          </div>
          <p className="mt-7 max-w-[40ch] text-sm leading-[1.6] text-muted">
            Des projets créatifs livrés en agence pour ces marques. Ce ne sont
            pas mes clients d&apos;aujourd&apos;hui : c&apos;est le niveau
            d&apos;exigence auquel j&apos;ai appris à produire.
          </p>
          <div className="relative mt-11 aspect-4/3">
            <ImageSlot brief="PHOTO 5 — les mains sur un carnet, un écran, un plan" />
          </div>
        </div>
      </div>
    </section>
  );
}
