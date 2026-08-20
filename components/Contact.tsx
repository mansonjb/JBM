"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full border-0 border-b border-paper/45 bg-transparent px-0 py-3 text-base text-paper outline-none placeholder:text-paper/60 focus:border-paper";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (result.fallback) {
        // Pas d'envoi configuré côté serveur : on bascule sur le client mail.
        const body = `Nom : ${data.nom}\nEntreprise : ${data.entreprise}\nE-mail : ${data.email}\n\n${data.message}`;
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
          "Diagnostic — " + (data.entreprise || data.nom)
        )}&body=${encodeURIComponent(body)}`;
        setStatus("sent");
        setMessage("Votre logiciel de messagerie s'ouvre avec le message prêt.");
        return;
      }

      if (!response.ok) throw new Error(result.error ?? "Envoi impossible");

      form.reset();
      setStatus("sent");
      setMessage("Message reçu. Réponse sous 24 heures ouvrées.");
    } catch {
      setStatus("error");
      setMessage(`Envoi impossible. Écrivez directement à ${site.email}.`);
    }
  }

  return (
    <section id="contact" className="bg-blue px-[6vw] py-[100px] text-paper lg:py-[120px]">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-[clamp(40px,6vw,110px)]">
        <div>
          <h2 className="u-display m-0 mb-7 text-[clamp(38px,5.6vw,96px)]">
            Réserver le diagnostic.
          </h2>
          <p className="m-0 max-w-[46ch] text-[clamp(16px,1.35vw,20px)] leading-[1.6] text-paper/80">
            Une semaine. Deux rendez-vous de votre côté, pas un de plus. Vous
            repartez avec la carte de votre activité et un point de départ
            chiffré, que la suite se fasse avec moi ou sans moi.
          </p>
          <p className="m-0 mt-6 text-[13px] text-paper/70">
            Le diagnostic est déduit de la mission si elle a lieu.
          </p>
        </div>

        <form onSubmit={onSubmit} className="u-tilt grid gap-6">
          <input name="nom" type="text" required placeholder="Nom" className={field} />
          <input name="entreprise" type="text" placeholder="Entreprise" className={field} />
          <input name="email" type="email" required placeholder="E-mail" className={field} />
          <textarea
            name="message"
            rows={3}
            placeholder="Message"
            className={`${field} resize-none`}
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-3 cursor-pointer justify-self-start border-0 bg-paper px-7 py-4 text-[15px] font-semibold tracking-[0.04em] text-blue uppercase transition-opacity disabled:opacity-60"
          >
            {status === "sending"
              ? "Envoi…"
              : site.ctaSecondary}
          </button>
          {message && (
            <p
              role="status"
              className={`m-0 text-sm ${
                status === "error" ? "text-paper" : "text-paper/85"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
