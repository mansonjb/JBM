/**
 * Règle graduée : un filet ponctué de traits, dont un seul, bleu et plus long,
 * marque le pas suivant. Sert de transition entre deux sections.
 */
export default function Graduation({
  marque = 3,
  className = "",
}: {
  /** Index de la graduation mise en avant, de 0 à 11. */
  marque?: number;
  className?: string;
}) {
  const traits = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className={`flex items-end gap-0 ${className}`} aria-hidden="true">
      {traits.map((i) => (
        <div key={i} className="flex flex-1 items-end">
          <span
            className={
              i === marque
                ? "block w-px bg-blue"
                : "block w-px bg-line"
            }
            style={{ height: i === marque ? 26 : i % 3 === 0 ? 14 : 8 }}
          />
          <span className="h-px flex-1 bg-line" />
        </div>
      ))}
    </div>
  );
}
