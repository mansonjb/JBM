"use client";

import { useState } from "react";
import { cloture, site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const champ =
  "w-full border-0 border-b border-paper/45 bg-transparent px-0 py-4 text-[length:var(--fs-corps)] text-paper outline-none placeholder:text-paper/60 focus:border-paper";

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
    <section id="contact" className="u-bande u-fond-bleu">
      <div className="u-dedans">
        <h2 className="u-titre">{cloture.title}</h2>
        <div className="mt-[var(--pas-40)]">
          {cloture.paragraphes.map((paragraphe) => (
            <p key={paragraphe} className="u-corps">
              {paragraphe}
            </p>
          ))}
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-[var(--pas-64)] grid grid-cols-1 gap-[var(--pas-40)] md:grid-cols-2"
        >
          <input name="nom" type="text" required placeholder="Nom" className={champ} />
          <input name="entreprise" type="text" placeholder="Entreprise" className={champ} />
          <input name="email" type="email" required placeholder="E-mail" className={champ} />
          <textarea name="message" rows={1} placeholder="Message" className={`${champ} resize-none`} />
          <div className="md:col-span-2">
            <button type="submit" disabled={status === "sending"} className="u-cta">
              {status === "sending" ? "Envoi…" : site.ctaFinal}
              <span className="u-cta-fleche" aria-hidden="true">
                →
              </span>
            </button>
            {message && (
              <p role="status" className="u-note mt-[var(--pas-24)]">
                {message}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
