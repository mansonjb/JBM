import { plan, site } from "@/lib/site";

/* Les libellés du plan qui figurent dans la barre : dérivés de `plan`, jamais réécrits ici. */
const liens = plan.filter((etape) => etape.nav);

/**
 * Barre collante de 64px : la hauteur réelle correspond à --nav-h, dont dépendent
 * scroll-margin-top et .u-sticky. Mot-marque à gauche, plan au centre, action à droite.
 */
export default function Nav() {
  return (
    <nav className="sticky top-0 z-40 border-b border-line bg-paper/92 backdrop-blur-sm">
      <div className="u-container flex h-16 items-center justify-between gap-6">
        <a href="#top" className="u-surtitre font-display text-ink!">
          {site.name}
        </a>

        {/* Les libellés du nav prennent le rang sur-titre, comme tous les libellés de repérage. */}
        <div className="hidden items-center gap-8 md:flex">
          {liens.map((etape) => (
            <a key={etape.id} href={`#${etape.id}`} className="u-surtitre u-link">
              {etape.label}
            </a>
          ))}
        </div>

        {/* Le seul objet cliquable de la barre : bouton d'action compact, à toutes les tailles. */}
        <a href="#contact" className="u-cta u-cta-nav whitespace-nowrap">
          {site.ctaFinal}
          <span className="u-cta-arrow" aria-hidden="true">
            →
          </span>
        </a>
      </div>
    </nav>
  );
}
