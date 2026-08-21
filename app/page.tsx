import Reveal from "@/components/Reveal";
import ScrollRail from "@/components/ScrollRail";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ouverture from "@/components/Ouverture";
import Regard from "@/components/Regard";
import Manifeste from "@/components/Manifeste";
import Deroule from "@/components/Deroule";
import Trouvailles from "@/components/Trouvailles";
import Qui from "@/components/Qui";
import Cas from "@/components/Cas";
import Audit from "@/components/Audit";
import Questions from "@/components/Questions";
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
    "Consultant en optimisation. J'observe et j'analyse votre entreprise, puis je vous montre ce que je garderais, ce que je changerais et ce que j'explorerais.",
  areaServed: "FR",
  founder: { "@type": "Person", name: "Jean-Baptiste Manson" },
  makesOffer: {
    "@type": "Offer",
    name: "L'audit",
    description:
      "Une lecture extérieure de votre activité, les opportunités identifiées, les améliorations possibles, leur niveau de priorité et une feuille de route pour avancer.",
  },
};

export default function Home() {
  return (
    <div className="relative overflow-x-clip bg-paper">
      <Reveal />
      <ScrollRail />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative z-[1]">
        <Nav />
        <main>
          <Hero />
          <Ouverture />
          <Regard />
          <Deroule />
          <Trouvailles />
          <Manifeste />
          <Cas />
          <Qui />
          <Audit />
          <Questions />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
