import DivergingLines from "@/components/DivergingLines";
import Reveal from "@/components/Reveal";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import Observations from "@/components/Observations";
import Origine from "@/components/Origine";
import Methode from "@/components/Methode";
import Rupture from "@/components/Rupture";
import Preuves from "@/components/Preuves";
import Offre from "@/components/Offre";
import Objections from "@/components/Objections";
import Journal from "@/components/Journal";
import LeNom from "@/components/LeNom";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.domain,
  email: site.email,
  description:
    "Consultant indépendant : diagnostic d'activité et exécution du système d'acquisition. Le degré qui change la trajectoire.",
  areaServed: "FR",
  founder: { "@type": "Person", name: "Jean-Baptiste Manson" },
  offers: [
    {
      "@type": "Offer",
      name: "Le Diagnostic",
      price: "900",
      priceCurrency: "EUR",
      description:
        "Où se crée la valeur, où elle se perd, ce que l'inaction coûte, et l'ordre des priorités. Une semaine.",
    },
    {
      "@type": "Offer",
      name: "Le Système d'acquisition",
      price: "5500",
      priceCurrency: "EUR",
      description:
        "Arborescence, contenus de longue traîne, preuves clients, conversion et mesure. 8 jours de travail.",
    },
  ],
};

export default function Home() {
  return (
    <div className="relative overflow-x-clip bg-paper">
      <DivergingLines />
      <Reveal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative z-[1]">
        <Nav />
        <main>
          <Hero />
          <ProofBar />
          <Observations />
          <Origine />
          <Methode />
          <Rupture />
          <Preuves />
          <Offre />
          <Objections />
          <Journal />
          <LeNom />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
