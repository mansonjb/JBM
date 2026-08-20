import DivergingLines from "@/components/DivergingLines";
import Reveal from "@/components/Reveal";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustLine from "@/components/TrustLine";
import Constat from "@/components/Constat";
import Idee from "@/components/Idee";
import Methode from "@/components/Methode";
import Cas from "@/components/Cas";
import Guide from "@/components/Guide";
import Offre from "@/components/Offre";
import Objections from "@/components/Objections";
import Journal from "@/components/Journal";
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
      description:
        "Où se crée la valeur, où elle se perd, ce que l'inaction coûte, et l'ordre des priorités. Une semaine, deux rendez-vous.",
    },
    {
      "@type": "Offer",
      name: "Le Système d'acquisition",
      description:
        "Arborescence, contenus de longue traîne, preuves clients, conversion et mesure. Huit jours de travail.",
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
          <TrustLine />
          <Constat />
          <Idee />
          <Methode />
          <Cas />
          <Guide />
          <Offre />
          <Objections />
          <Journal />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
