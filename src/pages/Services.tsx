import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bath, Paintbrush, Hammer, Square, Grid3x3 } from "lucide-react";
import bathroomImage from "@/assets/bathroom-1.jpg";
import bathroomImage2 from "@/assets/bathroom-2.jpg";
import paintedRoomImage from "@/assets/painted-room.jpg";
import tileWorkImage from "@/assets/tile-work.jpg";
import laminateImage from "@/assets/laminate-floor.jpg";

const Services = () => {
  const services = [
    {
      icon: Bath,
      title: "Badkamerrenovaties",
      description: "Complete badkamerrenovaties van A tot Z. Wij verzorgen het gehele proces van ontwerp tot realisatie. Of u nu een kleine badkamer wilt moderniseren of een complete luxe badkamer wilt laten installeren, wij zorgen voor een vakkundige uitvoering met oog voor detail.",
      features: [
        "Ontwerp en advies",
        "Loodgieterswerk",
        "Tegelwerk",
        "Sanitair installatie",
        "Vloerverwarming",
        "Afvoer en leidingwerk",
      ],
      image: bathroomImage,
      image2: bathroomImage2,
    },
    {
      icon: Paintbrush,
      title: "Schilderwerk",
      description: "Professioneel schilderwerk voor binnen en buiten. Van het schilderen van wanden en plafonds tot het lakwerk van kozijnen en deuren. Wij gebruiken alleen kwaliteitsverf en zorgen voor een perfecte afwerking.",
      features: [
        "Binnenschilderwerk",
        "Buitenschilderwerk",
        "Behangen",
        "Houtwerk lakken",
        "Sierpleisterwerk",
        "Voorbereiding en afwerking",
      ],
      image: paintedRoomImage,
    },
    {
      icon: Hammer,
      title: "Stukadoorwerk & Gipsplaten",
      description: "Professioneel stukadoorwerk en het plaatsen van gipsplaten voor mooie gladde wanden en plafonds. Ideaal voor het creëren van extra ruimtes of het moderniseren van uw interieur.",
      features: [
        "Gipsplaten plaatsen",
        "Stucwerk",
        "Wandafwerking",
        "Plafonds",
        "Spuitwerk",
        "Wandisolatie",
      ],
    },
    {
      icon: Square,
      title: "Laminaat Plaatsen",
      description: "Vakkundige plaatsing van laminaatvloeren voor een stijlvolle en duurzame vloer. Wij adviseren u graag over de beste keuze voor uw woning en zorgen voor een perfecte plaatsing met aandacht voor ondervloer en afwerking.",
      features: [
        "Laminaat plaatsen",
        "Ondervloer advies",
        "Plinten plaatsen",
        "Oude vloer verwijderen",
        "Vloerverwarming compatibel",
        "Diverse designs beschikbaar",
      ],
      image: laminateImage,
    },
    {
      icon: Grid3x3,
      title: "Tegelwerk",
      description: "Professioneel tegelwerk voor wand en vloer. Of het nu gaat om uw badkamer, keuken, toilet of andere ruimte, wij zorgen voor een strak en duurzaam resultaat. Wij werken met alle soorten tegels en formaten.",
      features: [
        "Vloertegels",
        "Wandtegels",
        "Mozaïek",
        "Natuursteen",
        "Voegwerk",
        "Ondervloer voorbereiden",
      ],
      image: tileWorkImage,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Onze Diensten
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              KluswerkNL biedt een uitgebreid pakket aan professionele klusservices. 
              Van complete badkamerrenovaties tot schilderwerk en tegelwerk - wij staan voor u klaar.
            </p>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8 lg:gap-12 items-center`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="absolute top-6 left-6 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                        <service.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                    </div>
                    {service.image2 && (
                      <div className="mt-4 rounded-lg overflow-hidden shadow-lg">
                        <img 
                          src={service.image2} 
                          alt={`${service.title} voorbeeld 2`}
                          className="w-full h-[250px] object-cover"
                        />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    
                    <div className="bg-muted/50 rounded-lg p-6 mb-6">
                      <h3 className="font-semibold text-foreground mb-4">Wat wij doen:</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <svg 
                              className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild>
                      <Link to="/contact">Offerte Aanvragen</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interesse in één van onze diensten?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Neem contact met ons op voor een vrijblijvende offerte of bel ons direct.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Contact Opnemen</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href="tel:+31685258227">+31 6 8525 8227</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
