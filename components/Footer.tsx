import ImageSlot from "./ImageSlot";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="u-bande u-fond-paper border-t border-line">
      <div className="u-dedans">
        <div className="flex flex-col items-start justify-between gap-[var(--pas-64)] md:flex-row md:items-end">
          <a
            href={`mailto:${site.email}`}
            className="u-lien font-[family-name:var(--font-display)] text-[length:var(--fs-titre)] leading-none tracking-[-0.01em] text-ink uppercase"
          >
            {site.email}
          </a>

          <div className="relative">
            <div className="relative h-[190px] w-[150px]">
              <ImageSlot
                brief="PHOTO 6 · médaillon, décontracté"
                src="/portrait-bureau.jpg"
                alt="Jean-Baptiste Manson dans son bureau"
                sizes="200px"
              />
            </div>
            <span className="pointer-events-none absolute -top-6 -left-8 font-[family-name:var(--font-hand)] text-[26px] text-blue">
              c&apos;est moi
            </span>
            <svg
              viewBox="0 0 80 60"
              aria-hidden="true"
              className="pointer-events-none absolute top-0 left-[30px] h-[52px] w-[70px] overflow-visible"
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

        <div className="mt-[var(--pas-64)] flex flex-col justify-between gap-[var(--pas-12)] border-t border-line pt-[var(--pas-24)] sm:flex-row">
          <span className="u-note">{site.author}</span>
          <a href="/mentions-legales" className="u-lien u-note">
            Mentions légales
          </a>
        </div>
      </div>
    </footer>
  );
}
