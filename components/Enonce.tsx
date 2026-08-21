type Props = {
  children: React.ReactNode;
  /** Sur fond bleu, le bloc s'inverse en crème. */
  invert?: boolean;
  className?: string;
};

/**
 * Énoncé bleu : la phrase de bascule d'une section, toujours en clôture.
 * Quota de 3 sur la page. Les autres énoncés se posent en `<p className="u-enonce">`,
 * sans fond. Aucune flèche à l'intérieur.
 */
export default function Enonce({ children, invert, className = "" }: Props) {
  return (
    <div className={`u-quote ${invert ? "u-quote-invert" : ""} ${className}`}>
      <p className="u-enonce">{children}</p>
    </div>
  );
}
