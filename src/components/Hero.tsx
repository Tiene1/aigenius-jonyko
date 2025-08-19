import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/jonyko-hero.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log(`Element with selector ${href} not found`);
    }
  };

  return (
    <section id="accueil" className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* GoGreen Style Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-muted opacity-95" />
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-primary rounded-full blur-3xl" />
      </div>

      {/* Main Content - GoGreen Style Layout */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          
          {/* Left Content - Text */}
          <div className="space-y-8 animate-slide-in-left">
            
            {/* Badge - GoGreen Style */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-transparent rounded-full border-2 border-primary">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">Innovation Agricole</span>
            </div>
            
            {/* Main Title - GoGreen Typography */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight font-display text-foreground">
                Optimisez 
                <span className="block text-primary">vos récoltes</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl text-foreground font-bold">
                  avec <span className="text-primary font-black">JONYKO</span>
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-lg">
                Solution innovante pour le transport des récoltes de l'intérieur des champs au bord champs. 
                Réduisez l'effort physique et optimisez votre logistique post-récolte.
              </p>
            </div>

            {/* CTA Button - GoGreen Style */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-accent text-primary-foreground px-8 py-4 rounded-2xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection("#fonctionnalites")}
              >
                Découvrir notre robot
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-2xl px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection("#contact")}
              >
                Contactez-nous
              </Button>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Robot agricole JONYKO dans un champ"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
            </div>
            
            {/* Floating Elements - GoGreen Style */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full opacity-20 animate-float" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full opacity-30 animate-float" style={{animationDelay: '1s'}} />
          </div>
        </div>
      </div>

      {/* Scroll Indicator - GoGreen Style */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => scrollToSection("#fonctionnalites")}
          className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-all duration-300"
        >
          <span className="text-sm font-medium">Découvrir</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;