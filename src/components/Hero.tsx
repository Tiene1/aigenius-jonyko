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
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/60" />
        <div className="absolute inset-0 bg-gradient-mesh" />
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
                <span className="text-foreground">
                  Soutenir les Agriculteurs
                </span>
                <br />
                <span className="text-muted-foreground text-2xl md:text-3xl">
                  pour nourrir durablement,
                </span>
                <br />
                <span className="bg-gradient-hero bg-clip-text text-transparent text-3xl md:text-5xl">
                  grâce à JONYKO
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Le robot JONYKO est une merveille technologique adaptée au monde agricole, 
                capable de transporter vos récoltes intelligemment. La robotique de haute 
                précision combinée à l'intelligence artificielle en soutien des agriculteurs.
              </p>
            </div>

            {/* CTA Buttons - Aisprid inspired */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 px-8 py-3 rounded-full"
                onClick={() => scrollToSection("#robot-3d")}
              >
                Découvrir notre robot
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 py-3"
                onClick={() => scrollToSection("#contact")}
              >
                Contactez-nous
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