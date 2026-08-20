type Props = {
  children: React.ReactNode;
  /** Sur fond bleu, le cadre passe en crème. */
  invert?: boolean;
  className?: string;
};

/** La phrase qui porte une section : encadrée, jamais surlignée. */
export default function Enonce({ children, invert, className = "" }: Props) {
  return (
    <div className={`u-quote ${invert ? "u-quote-invert" : ""} ${className}`}>
      <span className="u-quote-arrow" aria-hidden="true">
        →
      </span>
      <p className="u-serif m-0 text-[clamp(24px,2.8vw,44px)] leading-[1.24]">
        {children}
      </p>
    </div>
  );
}
