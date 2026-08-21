"use client";

import { useEffect, useState } from "react";
import SecHead from "./SecHead";
import { terrains } from "@/lib/site";

/** 03 · Les terrains : la bande défilante, et la phrase qui suit le terrain choisi. */
export default function Terrains() {
  const [i, setI] = useState(0);
  const [fige, setFige] = useState(false);

  useEffect(() => {
    if (fige) return;
    const iv = setInterval(() => setI((n) => (n + 1) % terrains.cas.length), 4200);
    return () => clearInterval(iv);
  }, [fige]);

  const choisir = (n: number) => {
    setFige(true);
    setI(n);
  };

  const [titre, suite] = terrains.cas[i] ?? terrains.cas[0];
  const boucle = [...terrains.cas, ...terrains.cas];

  return (
    <section
      id="undegre"
      className="border-b-2 border-line pt-[clamp(70px,11vh,130px)] pb-[clamp(70px,11vh,130px)]"
    >
      <SecHead n={terrains.n}>{terrains.kicker}</SecHead>

      <h2 className="m-0 mb-10 text-[clamp(36px,6vw,112px)] leading-[0.92] tracking-[-0.03em]">
        {terrains.titre}
      </h2>

      <p className="lede m-0 mb-14 max-w-none">{terrains.lede}</p>

      <div className="eyebrow mb-[26px]">{terrains.amorce}</div>

      <div className="mq">
        <div className="mq-track">
          {boucle.map(([nom], n) => (
            <span key={`${nom}-${n}`} className="contents">
              <span
                className="mq-i"
                onMouseEnter={() => choisir(n % terrains.cas.length)}
                onClick={() => choisir(n % terrains.cas.length)}
              >
                {nom}
              </span>
              <span className="mq-s" aria-hidden="true">
                °
              </span>
            </span>
          ))}
        </div>
      </div>

      <p className="mq-say">
        <span className="mq-say-a">{titre}</span> {suite}
      </p>
    </section>
  );
}
