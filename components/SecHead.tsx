/** En-tête de section : numéro annelé, intitulé, filet. */
export default function SecHead({ n, children }: { n: string; children: string }) {
  return (
    <div className="sechead">
      <span className="sechead-n">
        {n}
        <i />
      </span>
      <span className="sechead-t">{children}</span>
      <span className="sechead-rule" />
    </div>
  );
}
