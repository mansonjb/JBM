type Item = {
  titre: string;
  texte?: string;
};

/**
 * Une liste est une suite de rangées pleine largeur, numérotées.
 * Jamais deux colonnes inégales.
 */
export default function Items({ items }: { items: Item[] }) {
  return (
    <ul className="u-items">
      {items.map((item, i) => (
        <li
          key={item.titre}
          className={`u-item u-reveal ${item.texte ? "" : "u-item-simple"}`}
          style={{ transitionDelay: `${i * 50}ms` }}
        >
          <span className="u-item-num">{String(i + 1).padStart(2, "0")}</span>
          <span>{item.titre}</span>
          {item.texte ? (
            <span className="u-item-texte">{item.texte}</span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
