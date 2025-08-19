import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Robot3D from "./Robot3D";
import { 
  UserCheck, 
  Navigation, 
  Gamepad2, 
  Battery, 
  Weight, 
  Clock,
  Shield,
  Zap,
  Leaf,
  Gauge
} from "lucide-react";

const FeaturesAndRobot3D = () => {
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

  const specifications = [
    {
      icon: Weight,
      title: "Capacité",
      value: "200-1000 kg",
      description: "Transport adaptatif selon vos besoins"
    },
    {
      icon: Clock,
      title: "Autonomie",
      value: "8 heures",
      description: "Journée complète de travail continue"
    },
    {
      icon: Battery,
      title: "Énergie",
      value: "100% Électrique",
      description: "Technologie lithium avancée"
    },
    {
      icon: Gauge,
      title: "Terrain",
      value: "Tout-terrain",
      description: "Châssis renforcé pour conditions difficiles"
    }
  ];

  const additionalFeatures = [
    {
      icon: Zap,
      title: "Zéro Émission",
      description: "Respect environnemental total"
    },
    {
      icon: Shield,
      title: "Résistance IP65",
      description: "Protection intempéries complète"
    },
    {
      icon: Leaf,
      title: "Maintenance Facile",
      description: "Coûts d'entretien réduits"
    }
  ];

  return (
    <section id="fonctionnalites" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Fonctionnalités & Spécifications
          </Badge>
          <h2 className="text-3xl md:text-3xl font-bold mb-4">
            Découvrez JONYKO en
            <span className="block text-primary">
              Détail et en 3D
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explorez les trois modes de fonctionnement intelligents et les spécifications techniques
            de notre robot agricole révolutionnaire
          </p>
        </div>

        <div className="space-y-12">
          {/* Section Fonctionnalités et Spécifications */}
          <div className="space-y-8 animate-slide-in-left">
            {/* Modes de Fonctionnement */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Modes de Fonctionnement</h3>
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-5 lg:gap-8 px-6 sm:px-0"></div>
                {modes.map((mode, index) => {
                  const IconComponent = mode.icon;
                  const colorClasses = {
                    primary: {
                      bg: 'bg-primary',
                      text: 'text-primary',
                      border: 'border-primary/20'
                    },
                    secondary: {
                      bg: 'bg-secondary',
                      text: 'text-secondary', 
                      border: 'border-secondary/20'
                    },
                    accent: {
                      bg: 'bg-accent',
                      text: 'text-accent',
                      border: 'border-accent/20'
                    }
                  };
                  
                  const currentColor = colorClasses[mode.color as keyof typeof colorClasses];
                  
                  return (
                    <Card 
                      key={mode.title} 
                      className={`transition-all duration-300 hover:shadow-lg ${currentColor.border}`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <CardHeader className="pb-3 sm:pb-4 md:pb-3 lg:pb-4">
                        <div className="flex items-center gap-2 sm:gap-3 md:gap-2 lg:gap-3">
                          <div className={`p-2 sm:p-3 md:p-2 lg:p-3 rounded-lg bg-primary flex-shrink-0`}>
                            <IconComponent className={`h-5 w-5 sm:h-6 sm:w-6 md:h-5 md:w-5 lg:h-6 lg:w-6 text-primary-foreground`} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <CardTitle className={`text-base sm:text-lg md:text-base lg:text-lg text-primary truncate`}>{mode.title}</CardTitle>
                            <p className="text-xs sm:text-sm md:text-xs lg:text-sm text-muted-foreground line-clamp-2">{mode.description}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <ul className="space-y-1 sm:space-y-2 md:space-y-1 lg:space-y-2">
                          {mode.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm md:text-xs lg:text-sm">
                              <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-1 md:h-1 lg:w-1.5 lg:h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0`} />
                              <span className="line-clamp-2">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
                </div>
              </div>
            </div>

            {/* Spécifications Techniques */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Spécifications Techniques</h3>
              
              {/* Spécifications principales */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-4 lg:gap-4 mb-6 px-6 sm:px-0">
                {specifications.map((spec, index) => {
                  const IconComponent = spec.icon;
                  return (
                    <Card 
                      key={spec.title}
                      className="hover:shadow-lg transition-all duration-300"
                      style={{ animationDelay: `${600 + index * 100}ms` }}
                    >
                      <CardContent className="p-2 sm:p-3 md:p-2 lg:p-3">
                        <div className="text-center">
                          <div className="p-1 sm:p-2 md:p-1 lg:p-2 rounded-lg bg-primary inline-flex mb-1 sm:mb-2 md:mb-1 lg:mb-2">
                            <IconComponent className="h-3 w-3 sm:h-4 sm:w-4 md:h-3 md:w-3 lg:h-4 lg:w-4 text-primary-foreground" />
                          </div>
                          <div className="font-semibold text-primary text-xs sm:text-sm md:text-xs lg:text-sm">{spec.value}</div>
                          <div className="text-xs sm:text-xs md:text-xs lg:text-xs text-muted-foreground truncate">{spec.title}</div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Avantages Supplémentaires */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 px-6 sm:px-0">
                {additionalFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <Card 
                      key={feature.title}
                      className="text-center p-3 hover:shadow-lg transition-all duration-300"
                      style={{ animationDelay: `${800 + index * 100}ms` }}
                    >
                      <div className="inline-flex items-center justify-center w-8 h-8 mb-2 bg-primary rounded-full">
                        <IconComponent className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <h4 className="font-semibold text-xs mb-1">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Section Robot 3D */}
          <div className="animate-slide-in-up">
            <Card className="p-6 bg-gradient-mesh border-primary/20">
              <div className="text-center mb-4">
                <Badge className="bg-primary/90 text-primary-foreground mb-3">
                  Modèle 3D Interactif
                </Badge>
              </div>
              
              <div className="relative">
                <Robot3D />
              </div>
              
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAndRobot3D;