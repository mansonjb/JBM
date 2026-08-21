/**
 * Le degré, dessiné : deux rayons qui partent du même point et divergent d'un degré,
 * l'écart devenant lisible seulement à l'autre bout du trait.
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
      className={`w-full max-w-[420px] overflow-visible ${className}`}
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
      <text
        x="108"
        y="52"
        fill={trait}
        fontSize="13"
        fontFamily="Archivo, sans-serif"
        letterSpacing="0.12em"
      >
        1°
      </text>
      <text
        x="404"
        y="16"
        fill={trait}
        fontSize="11"
        textAnchor="end"
        fontFamily="Archivo, sans-serif"
        letterSpacing="0.12em"
      >
        AILLEURS
      </text>
      <text
        x="404"
        y="76"
        fill={faible}
        fontSize="11"
        textAnchor="end"
        fontFamily="Archivo, sans-serif"
        letterSpacing="0.12em"
      >
        MÊME ENDROIT
      </text>
    </svg>
  );
}
