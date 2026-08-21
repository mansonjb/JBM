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

          <figure className="m-0 flex items-end gap-[var(--pas-24)]">
            <div className="relative h-[190px] w-[150px] shrink-0">
              <ImageSlot
                brief="PHOTO 6 · médaillon, décontracté"
                src="/portrait-bureau.jpg"
                alt="Jean-Baptiste Manson dans son bureau"
                sizes="200px"
              />
            </div>
            <figcaption className="u-main pb-2">c&apos;est moi</figcaption>
          </figure>
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
