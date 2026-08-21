import Progress from "@/components/Progress";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Methode from "@/components/Methode";
import Trouver from "@/components/Trouver";
import CtaMail from "@/components/CtaMail";
import Terrains from "@/components/Terrains";
import Exemple from "@/components/Exemple";
import QuiSuisJe from "@/components/QuiSuisJe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.domain,
  email: site.email,
  telephone: site.phoneHref,
  description:
    "Consultant en optimisation. J'observe et j'analyse votre entreprise, puis je vous montre ce que je garderais, ce que je changerais et ce que j'explorerais.",
  areaServed: "FR",
  founder: { "@type": "Person", name: "Jean-Baptiste Manson" },
};

export default function Home() {
  return (
    <div className="relative" style={{ background: "#F4EFE6" }}>
      <Progress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <Methode />
        <Trouver />
        <CtaMail />
        <Terrains />
        <Exemple />
        <QuiSuisJe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
