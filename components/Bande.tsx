type Fond = "paper" | "sand" | "bleu" | "encre";

type Props = {
  children: React.ReactNode;
  fond?: Fond;
  /** Ancre de section, posée sur la première bande d'une section. */
  id?: string;
  /** Bande de respiration : moitié moins haute. */
  serree?: boolean;
  className?: string;
};

/**
 * Toute la page est un empilement de bandes pleine largeur.
 * Une bande porte un fond, une idée, et rien d'autre.
 */
export default function Bande({
  children,
  fond = "paper",
  id,
  serree,
  className = "",
}: Props) {
  return (
    <section
      id={id}
      className={`u-bande u-fond-${fond} ${serree ? "u-bande-serree" : ""} ${className}`}
    >
      <div className="u-dedans">{children}</div>
    </section>
  );
}
