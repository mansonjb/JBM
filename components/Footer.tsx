import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-2 border-line py-[clamp(56px,8vh,110px)]">
      <div className="footring" aria-hidden="true" />

      <div className="relative z-1 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
        <div>
          <a
            className="tel-big"
            href={`tel:${site.phoneHref}`}
            style={{ color: "#15171C" }}
          >
            {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 block text-[clamp(17px,1.5vw,24px)] text-blue"
          >
            {site.email}
          </a>
        </div>

        <a className="btn" href="#contact">
          {site.ctaFinal} <span>→</span>
        </a>
      </div>

      <div className="relative z-1 mt-12 flex flex-col justify-between gap-3 border-t-2 border-line pt-6 text-[12px] tracking-[0.1em] text-muted uppercase sm:flex-row">
        <span>{site.author}</span>
        <a href="/mentions-legales" className="navlink">
          Mentions légales
        </a>
      </div>
    </footer>
  );
}
