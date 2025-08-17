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
      {/* Background with aisprid-inspired overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Robot agricole JONYKO dans un champ"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-background/30 to-background/20" />
        <div className="absolute inset-0 bg-gradient-mesh" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="space-y-12 animate-slide-in-left w-full flex flex-col items-center">
            <div className="space-y-4 flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
                <span className="text-base font-medium text-white">Innovation Agricole</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  JONYKO
                </span>
                <br />
                <span className="text-white text-2xl sm:text-3xl md:text-4xl">
                  Robot Agricole
                </span>
                <br />
                <span className="text-white text-xl sm:text-2xl md:text-3xl">
                  Intelligent
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-white max-w-5xl mx-auto leading-relaxed px-4">
                Solution innovante pour le transport des récoltes de l'intérieur des champs au bord champs. 
                Réduisez l'effort physique et optimisez votre logistique post-récolte.
              </p>
            </div>

            {/* CTA Buttons - Aisprid inspired */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 transform hover:scale-105 px-6 sm:px-10 md:px-9 py-3 sm:py-4 md:py-3 rounded-full text-base sm:text-lg md:text-lg w-full sm:w-auto"
                onClick={() => scrollToSection("#fonctionnalites")}
              >
                Découvrir notre robot
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-6 sm:px-10 md:px-9 py-3 sm:py-4 md:py-3 text-base sm:text-lg md:text-lg w-full sm:w-auto"
                onClick={() => scrollToSection("#contact")}
              >
                Contactez-nous
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 w-full flex justify-center animate-bounce">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => scrollToSection("#fonctionnalites")}
          className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
        >
          <span className="text-sm font-medium text-white">Découvrir</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;