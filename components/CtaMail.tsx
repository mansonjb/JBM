"use client";

import { useState } from "react";
import { ctaMail, site } from "@/lib/site";

/** Bande d'appel : on laisse son e-mail, on reçoit deux créneaux. */
export default function CtaMail() {
  const [email, setEmail] = useState("");

  return (
    <section
      className="pt-[clamp(60px,9vh,110px)] pb-[clamp(60px,9vh,110px)]"
      style={{ background: "#1F3BD8", color: "#F4EFE6" }}
    >
      <h2 className="m-0 mb-5 text-[clamp(30px,calc(4.4*var(--u)),78px)] leading-[1.06]">
        {ctaMail.titre}
      </h2>
      <p className="m-0 mb-9 text-[clamp(16px,calc(1.4*var(--u)),22px)] leading-[1.55]">
        {ctaMail.texte}
      </p>

      <form
        className="flex flex-wrap items-center gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
            "Demande de créneau"
          )}&body=${encodeURIComponent(`Mon e-mail : ${email}`)}`;
        }}
      >
        <input
          className="field field-inv min-w-[260px] flex-[1_1_340px]"
          type="email"
          required
          placeholder="votre@email.fr"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button className="btn btn-cream cursor-pointer border-0" type="submit">
          {ctaMail.bouton} <span>→</span>
        </button>
      </form>

      <p className="mt-7 mb-0 text-[15px]" style={{ color: "rgba(244,239,230,0.8)" }}>
        {ctaMail.rappel}{" "}
        <a className="tel-big" href={`tel:${site.phoneHref}`} style={{ color: "#F4EFE6" }}>
          {site.phone}
        </a>
      </p>
    </section>
  );
}
