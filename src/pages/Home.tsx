import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bath, Paintbrush, Hammer, Square, Grid3x3, ArrowRight } from "lucide-react";
import bathroomImage from "@/assets/bathroom-1.jpg";
import paintedRoomImage from "@/assets/painted-room.jpg";
import tileWorkImage from "@/assets/tile-work.jpg";
import laminateImage from "@/assets/laminate-floor.jpg";

const Home = () => {
  const services = [
    {
      icon: Bath,
      title: "Badkamerrenovaties",
      description: "Complete badkamerrenovaties van ontwerp tot realisatie. Wij zorgen voor een moderne en functionele badkamer.",
      image: bathroomImage,
    },
    {
      icon: Paintbrush,
      title: "Schilderwerk",
      description: "Professioneel binnen- en buitenschilderwerk voor een perfecte afwerking van uw woning.",
      image: paintedRoomImage,
    },
    {
      icon: Hammer,
      title: "Stukadoorwerk",
      description: "Gipsplaten plaatsen en stucwerk voor gladde en mooie wanden en plafonds.",
    },
    {
      icon: Square,
      title: "Laminaat Plaatsen",
      description: "Vakkundige plaatsing van laminaatvloeren voor een moderne uitstraling van uw woning.",
      image: laminateImage,
    },
    {
      icon: Grid3x3,
      title: "Tegelwerk",
      description: "Professioneel plaatsen van wand- en vloertegels voor badkamer, keuken en andere ruimtes.",
      image: tileWorkImage,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />

        {/* Services Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Onze Diensten
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                KluswerkNL biedt een breed scala aan professionele klusservices voor particulieren en bedrijven.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg">
                <Link to="/services">
                  Alle Diensten Bekijken
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Waarom KluswerkNL?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Betrouwbaar</h3>
                <p className="text-muted-foreground">
                  Jarenlange ervaring en tevreden klanten door heel Nederland.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Eerlijke Prijzen</h3>
                <p className="text-muted-foreground">
                  Transparante prijzen zonder verborgen kosten. Wat u ziet is wat u betaalt.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Vakmanschap</h3>
                <p className="text-muted-foreground">
                  Professioneel en vakkundig uitgevoerd werk met oog voor detail.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Klaar om te beginnen met uw project?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Neem vandaag nog contact met ons op voor een vrijblijvende offerte. 
              Wij helpen u graag verder!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link to="/contact">Contact Opnemen</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href="tel:+31685258227">Bel Ons Direct</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
