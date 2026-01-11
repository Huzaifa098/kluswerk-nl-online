import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/50" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Professioneel Kluswerk voor Uw Woning
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Van badkamerrenovaties tot schilderwerk - KluswerkNL is uw betrouwbare partner voor al uw klussen.
          </p>
          
          <div className="space-y-3 mb-8">
            {["Professionele service", "Eerlijke prijzen", "Vakkundig werk"].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg">
              <Link to="/contact">
                Offerte Aanvragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg">
              <Link to="/services">Bekijk Diensten</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
