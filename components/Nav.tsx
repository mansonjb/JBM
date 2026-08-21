import Action from "./Action";
import { plan, site } from "@/lib/site";

export default function Nav() {
  const etapes = plan.filter((etape) => etape.nav);

  return (
    <nav className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="u-dedans flex h-16 items-center justify-between gap-6">
        <a
          href="#top"
          className="font-[family-name:var(--font-display)] text-lg tracking-[0.02em] text-ink uppercase"
        >
          {site.name}
        </a>

        <div className="hidden gap-8 text-[length:var(--fs-note)] tracking-[0.08em] text-muted uppercase lg:flex">
          {etapes.map((etape) => (
            <a key={etape.id} href={`#${etape.id}`} className="u-lien">
              {etape.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Action>Prendre rendez-vous</Action>
        </div>
        <a href="#contact" className="u-lien text-[length:var(--fs-note)] tracking-[0.08em] text-blue uppercase md:hidden">
          Contact
        </a>
      </div>
    </nav>
  );
}
