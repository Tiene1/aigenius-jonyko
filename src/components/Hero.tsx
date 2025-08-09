import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/jonyko-hero.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Robot agricole JONYKO dans un champ"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
                <span className="text-sm font-medium text-primary">Innovation Agricole</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  JONYKO
                </span>
                <br />
                <span className="text-foreground">
                  Robot Agricole
                </span>
                <br />
                <span className="text-muted-foreground text-3xl md:text-4xl">
                  Intelligent
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Révolutionnez votre agriculture avec JONYKO, le robot qui transporte 
                vos récoltes de 200 à 1000kg avec une autonomie de 8 heures. 
                Technologie électrique et écologique.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection("#fonctionnalites")}
              >
                Découvrir JONYKO
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                onClick={() => scrollToSection("#contact")}
              >
                Demander un devis
              </Button>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">200-1000kg</div>
                <div className="text-sm text-muted-foreground">Capacité</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">8h</div>
                <div className="text-sm text-muted-foreground">Autonomie</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">Électrique</div>
              </div>
            </div>
          </div>

          {/* Robot Visual */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-radial from-primary/20 to-transparent animate-float" />
              <div className="absolute inset-8 rounded-full bg-gradient-primary opacity-20 animate-glow-pulse" />
              <div className="absolute inset-16 flex items-center justify-center">
                <div className="text-8xl animate-float">🤖</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => scrollToSection("#fonctionnalites")}
          className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary"
        >
          <span className="text-xs">Découvrir</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;