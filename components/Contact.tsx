"use client";

import { useState } from "react";
import { contact, site } from "@/lib/site";

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
    <section
      id="contact"
      className="pt-[clamp(70px,11vh,130px)] pb-[clamp(70px,11vh,130px)]"
      style={{ background: "#1F3BD8", color: "#F4EFE6" }}
    >
      <h2 className="m-0 mb-10 text-[clamp(36px,5.8vw,108px)] leading-[0.92]"
        style={{ letterSpacing: "-0.03em" }}>
        {contact.titre}
      </h2>
      <p className="lede m-0 mb-[30px] max-w-none">{contact.lede}</p>

      <form
        onSubmit={onSubmit}
        className="grid gap-[22px]"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
      >
        <input className="field field-inv" name="nom" type="text" required placeholder="Nom" />
        <input className="field field-inv" name="entreprise" type="text" placeholder="Entreprise" />
        <input
          className="field field-inv"
          name="email"
          type="email"
          required
          placeholder="E-mail"
          style={{ gridColumn: "1 / -1" }}
        />
        <textarea
          className="field field-inv resize-none"
          name="message"
          rows={3}
          placeholder={contact.champMessage}
          style={{ gridColumn: "1 / -1" }}
        />
        <div style={{ gridColumn: "1 / -1" }}>
          <button
            className="btn btn-cream mt-[14px] cursor-pointer border-0"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Envoi…" : contact.bouton} <span>→</span>
          </button>
          {message && (
            <p className="body mt-5" role="status" style={{ color: "#F4EFE6" }}>
              {message}
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
