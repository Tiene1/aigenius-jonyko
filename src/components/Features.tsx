import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserCheck, Navigation, Gamepad2, Battery, Leaf, Shield } from "lucide-react";
import modeSuiveurImg from "@/assets/mode-suiveur.jpg";
import modeAutonomeImg from "@/assets/mode-autonome.jpg";
import modeManuelImg from "@/assets/mode-manuel.jpg";

const Features = () => {
  const modes = [
    {
      icon: UserCheck,
      title: "Mode Suiveur",
      description: "Le robot suit automatiquement l'utilisateur dans les champs",
      image: modeSuiveurImg,
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
      image: modeAutonomeImg,
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
      image: modeManuelImg,
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
    <section id="fonctionnalites" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Fonctionnalités
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trois Modes de Fonctionnement
            <span className="block text-primary">Intelligents</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            JONYKO s'adapte à tous vos besoins agricoles avec ses trois modes 
            de fonctionnement révolutionnaires
          </p>
        </div>

        {/* Main Modes */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {modes.map((mode, index) => {
            const IconComponent = mode.icon;
            return (
              <Card 
                key={mode.title} 
                className={`group cursor-pointer transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border-2 hover:border-${mode.color}/50 animate-fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={mode.image} 
                    alt={mode.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className={`p-2 rounded-full bg-${mode.color}/20 backdrop-blur-sm`}>
                      <IconComponent className={`h-5 w-5 text-${mode.color}`} />
                    </div>
                    <h3 className="text-white font-semibold text-lg">{mode.title}</h3>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{mode.description}</p>
                  <ul className="space-y-2">
                    {mode.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${mode.color}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={feature.title}
                className={`text-center p-6 transition-all duration-300 hover:shadow-lg hover:bg-card/80 animate-scale-in`}
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-primary/10 rounded-full">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;