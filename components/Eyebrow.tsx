type Props = {
  /** Numéro de plan, deux chiffres. Réservé aux huit en-têtes de section. */
  n?: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * Sur-titre : « 01 · intitulé » en tête de section, ou étiquette de bloc secondaire.
 * Seul porteur du rang sur-titre, seule numérotation autorisée sur la page.
 */
export default function Eyebrow({ n, children, className = "" }: Props) {
  return (
    <div className={`u-surtitre ${className}`}>
      {n ? `${n} · ` : ""}
      {children}
    </div>
  );
}
