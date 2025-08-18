import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UserCheck, Navigation, Gamepad2, Battery, Leaf, Shield } from "lucide-react";

const Features = () => {
  const modes = [
    {
      icon: UserCheck,
      title: "Mode Suiveur",
      description: "Le robot suit automatiquement l'utilisateur dans les champs",
      features: [
        "Suivi intelligent automatique",
        "Réduction complète de l'effort physique", 
        "Interface intuitive et simple",
        "Adaptation aux changements de direction"
      ],
      color: "primary"
    },
    {
      icon: Navigation,
      title: "Mode Autonome", 
      description: "Navigation indépendante vers des points précis de récolte",
      features: [
        "Navigation autonome intelligente",
        "Points de collecte programmables",
        "Optimisation automatique des trajets",
        "Gestion indépendante de la logistique"
      ],
      color: "secondary"
    },
    {
      icon: Gamepad2,
      title: "Mode Manuel",
      description: "Contrôle direct via interface de commande complète",
      features: [
        "Contrôles directionnels précis",
        "Bouton d'arrêt d'urgence", 
        "Indicateurs visuels temps réel",
        "Interface de pilotage intuitive"
      ],
      color: "accent"
    }
  ];

  const additionalFeatures = [
    {
      icon: Battery,
      title: "Autonomie 8h",
      description: "Journée complète de travail sans interruption"
    },
    {
      icon: Leaf,
      title: "100% Électrique",
      description: "Zéro émission, respectueux de l'environnement"
    },
    {
      icon: Shield,
      title: "Châssis Renforcé",
      description: "Résistant aux terrains difficiles et conditions extrêmes"
    }
  ];

  return (
    <section id="fonctionnalites" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        
        {/* GoGreen Style Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-background rounded-full border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Fonctionnalités</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-display text-foreground">
            Trois Modes de Fonctionnement
            <span className="block text-primary mt-1">Intelligents</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            JONYKO s'adapte à tous vos besoins agricoles avec ses trois modes 
            de fonctionnement révolutionnaires
          </p>
        </div>

        {/* GoGreen Style - Central Plant with Features Around */}
        <div className="relative max-w-6xl mx-auto mb-16">
          
          {/* Central Plant Icon */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary rounded-full flex items-center justify-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-background rounded-full" />
                  </div>
                </div>
              </div>
              
              {/* Plant stem */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-16 bg-primary" />
            </div>
          </div>

          {/* Features in Circle Layout - GoGreen Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {modes.map((mode, index) => {
              const IconComponent = mode.icon;
              
              return (
                <div 
                  key={mode.title}
                  className="text-center group animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Icon with GoGreen Style */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-primary rounded-full flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                      <IconComponent className="h-10 w-10 text-primary-foreground" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-4 font-display">
                    {mode.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {mode.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Modes Section - GoGreen Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {modes.map((mode, index) => {
            const IconComponent = mode.icon;
            
            return (
              <div 
                key={mode.title}
                className="bg-background rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${400 + index * 200}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-300">
                  <IconComponent className="h-8 w-8 text-primary-foreground" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-4 font-display">
                  {mode.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {mode.description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-3">
                  {mode.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* GoGreen Style - Let's Join With Us Section */}
        <div className="bg-secondary rounded-3xl p-8 lg:p-12 text-center animate-fade-in mb-16" style={{ animationDelay: '600ms' }}>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 font-display">
            Let's Join With Us
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            by doing it together we can definitely change the world to be more natural
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-accent text-primary-foreground px-8 py-4 rounded-2xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Join now
          </Button>
        </div>

        {/* Additional Features - Simple Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 px-6 sm:px-0">
          {additionalFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={feature.title}
                className="text-center group animate-scale-in"
                style={{ animationDelay: `${700 + index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center mb-4 group-hover:bg-primary transition-all duration-300">
                  <IconComponent className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="font-bold text-foreground mb-2 font-display">{feature.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;