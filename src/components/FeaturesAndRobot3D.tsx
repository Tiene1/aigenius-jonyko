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
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Fonctionnalités & Spécifications
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Découvrez JONYKO en
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
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
              <div className="grid md:grid-cols-3 gap-4">
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
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-3 rounded-lg ${currentColor.bg}/10`}>
                            <IconComponent className={`h-6 w-6 ${currentColor.text}`} />
                          </div>
                          <div>
                            <CardTitle className={`text-lg ${currentColor.text}`}>{mode.title}</CardTitle>
                            <p className="text-sm text-muted-foreground">{mode.description}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {mode.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <div className={`w-1.5 h-1.5 rounded-full ${currentColor.bg}`} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Spécifications Techniques */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Spécifications Techniques</h3>
              
              {/* Spécifications principales */}
              <div className="grid md:grid-cols-4 gap-3 mb-6">
                {specifications.map((spec, index) => {
                  const IconComponent = spec.icon;
                  return (
                    <Card 
                      key={spec.title}
                      className="hover:shadow-lg transition-all duration-300"
                      style={{ animationDelay: `${600 + index * 100}ms` }}
                    >
                      <CardContent className="p-3">
                        <div className="text-center">
                          <div className="p-2 rounded-lg bg-primary/10 inline-flex mb-2">
                            <IconComponent className="h-4 w-4 text-primary" />
                          </div>
                          <div className="font-semibold text-primary text-sm">{spec.value}</div>
                          <div className="text-xs text-muted-foreground">{spec.title}</div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Avantages Supplémentaires */}
              <div className="grid md:grid-cols-3 gap-3">
                {additionalFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <Card 
                      key={feature.title}
                      className="text-center p-3 hover:shadow-lg transition-all duration-300"
                      style={{ animationDelay: `${800 + index * 100}ms` }}
                    >
                      <div className="inline-flex items-center justify-center w-8 h-8 mb-2 bg-primary/10 rounded-full">
                        <IconComponent className="h-4 w-4 text-primary" />
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
              
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  Formats 3D supportés
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="outline">STEP</Badge>
                  <Badge variant="outline">OBJ</Badge>
                  <Badge variant="outline">GLTF</Badge>
                  <Badge variant="outline">STL</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAndRobot3D;