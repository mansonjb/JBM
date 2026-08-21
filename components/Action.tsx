/** Bouton d'action : le seul objet de la page autorisé à porter une flèche. */
export default function Action({
  children,
  href = "#contact",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <a href={href} className="u-cta">
      {children}
      <span className="u-cta-fleche" aria-hidden="true">
        →
      </span>
    </a>
  );
}
