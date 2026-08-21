/**
 * Le degré, dessiné : deux rayons qui partent du même point et divergent d'un degré,
 * l'écart devenant lisible seulement à l'autre bout du trait.
 * Quota de 1 sur la page, dans la section 02, 96px au-dessus de la citation qu'il illustre.
 */
export default function AngleMark({
  className = "",
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  const trait = invert ? "#F4EFE6" : "#1F3BD8";
  const faible = invert ? "rgba(244,239,230,0.45)" : "rgba(31,59,216,0.4)";

  return (
    <svg
      viewBox="0 0 420 120"
      role="img"
      aria-label="Deux trajectoires qui divergent d'un degré"
      className={`u-schema ${className}`}
    >
      <line x1="8" y1="60" x2="404" y2="60" stroke={faible} strokeWidth="1.2" />
      <line
        x1="8"
        y1="60"
        x2="404"
        y2="24"
        stroke={trait}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M96 60 A 88 88 0 0 0 96 52"
        fill="none"
        stroke={trait}
        strokeWidth="1.2"
      />
      <circle cx="8" cy="60" r="3.5" fill={trait} />
      {/* Les trois légendes sont au rang sur-titre : 12px, tracking 0.1em, capitales. */}
      <text x="108" y="52" fill={trait} className="u-svg-label">
        1°
      </text>
      <text x="404" y="16" fill={trait} textAnchor="end" className="u-svg-label">
        AILLEURS
      </text>
      <text
        x="404"
        y="76"
        fill={faible}
        textAnchor="end"
        className="u-svg-label"
      >
        MÊME ENDROIT
      </text>
    </svg>
  );
}
