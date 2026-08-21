import ImageSlot from "./ImageSlot";
import { site } from "@/lib/site";

/**
 * Pied de page : e-mail et médaillon en 8+4, signature au rang display,
 * mentions en filet bas. Le médaillon porte une vraie photo : c'est la cible
 * du seul repère manuscrit de la page, il ne peut pas rester un gabarit.
 */
export default function Footer() {
  return (
    <footer className="overflow-x-clip pt-24 pb-16">
      <div className="u-container">
        <div className="u-grid items-end">
          <div className="md:col-span-8">
            <a
              href={`mailto:${site.email}`}
              className="u-h2 u-link block text-ink"
            >
              {site.email}
            </a>
          </div>

          <div className="relative md:col-span-4">
            <div className="relative h-[190px] w-[150px]">
              <ImageSlot
                brief="PHOTO 6 · médaillon, décontracté, instantané"
                src="/portrait-bureau.jpg"
                alt="Jean-Baptiste Manson à son bureau"
                sizes="150px"
              />
            </div>
            <span className="u-hand absolute -top-6 -left-7 text-[26px] text-blue">
              c&apos;est moi
            </span>
            <svg
              viewBox="0 0 80 60"
              aria-hidden="true"
              className="pointer-events-none absolute top-0.5 left-[34px] h-[52px] w-[70px] overflow-visible"
            >
              <path
                d="M4 6 C24 14 38 26 52 42"
                fill="none"
                stroke="#1F3BD8"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M52 42 L40 40 M52 42 L50 30"
                fill="none"
                stroke="#1F3BD8"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Signature : exactement la même valeur que le h1 du héros, dans le conteneur commun. */}
        <div className="u-display u-mt-64 text-ink">{site.name}</div>

        <div className="u-surtitre u-mt-64 flex flex-col justify-between gap-4 border-t border-line pt-6 sm:flex-row">
          <span>{site.author}</span>
          <a href="/mentions-legales" className="u-link">
            Mentions légales
          </a>
        </div>
      </div>
    </footer>
  );
}
