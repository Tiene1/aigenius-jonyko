import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Weight, 
  Clock, 
  Zap, 
  Gauge, 
  Shield, 
  Wrench,
  MapPin,
  Radio
} from "lucide-react";

const Specifications = () => {
  const specs = [
    {
      icon: Weight,
      title: "Capacité de Charge",
      value: "200 - 1000 kg",
      description: "Adaptable selon les besoins",
      progress: 85,
      color: "primary"
    },
    {
      icon: Clock,
      title: "Autonomie",
      value: "8 heures",
      description: "Journée complète de travail",
      progress: 100,
      color: "secondary"
    },
    {
      icon: Zap,
      title: "Motorisation",
      value: "100% Électrique",
      description: "Technologie lithium avancée",
      progress: 95,
      color: "accent"
    },
    {
      icon: Gauge,
      title: "Performance",
      value: "Tout-terrain",
      description: "Châssis renforcé",
      progress: 90,
      color: "primary"
    }
  ];

  const technicalFeatures = [
    {
      icon: MapPin,
      title: "Capteurs de Suivi",
      description: "Navigation autonome haute précision"
    },
    {
      icon: Shield,
      title: "Protection Intempéries", 
      description: "Fonctionnement fiable toutes conditions"
    },
    {
      icon: Wrench,
      title: "Maintenance Simplifiée",
      description: "Coûts réduits et entretien facile"
    },
    {
      icon: Radio,
      title: "Télécommande Longue Portée",
      description: "Contrôle à distance sur grandes distances"
    }
  ];

  return (
    <section id="specifications" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-secondary text-secondary">
            Spécifications
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Caractéristiques Techniques
            <span className="block text-secondary">Avancées</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            JONYKO intègre les technologies les plus avancées pour offrir 
            des performances exceptionnelles en toutes conditions
          </p>
        </div>

        {/* Main Specifications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {specs.map((spec, index) => {
            const IconComponent = spec.icon;
            return (
              <Card 
                key={spec.title}
                className={`group transition-all duration-500 hover:shadow-xl hover:-translate-y-1 animate-scale-in`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-${spec.color}/10`}>
                      <IconComponent className={`h-5 w-5 text-${spec.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        {spec.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className={`text-2xl font-bold text-${spec.color} mb-1`}>
                    {spec.value}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {spec.description}
                  </p>
                  <Progress 
                    value={spec.progress} 
                    className="h-2"
                  />
                  <div className="text-xs text-muted-foreground mt-1 text-right">
                    {spec.progress}%
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Technical Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Features List */}
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6">Fonctionnalités Avancées</h3>
            {technicalFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={feature.title}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-300"
                >
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column - Technical Overview */}
          <div className="animate-slide-in-right">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" />
                  Performance Optimale
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Adaptabilité Terrain</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Châssis conçu pour résister aux sols labourés, boueux ou inégaux 
                    tout en maintenant une stabilité parfaite.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="outline">Tout-terrain</Badge>
                    <Badge variant="outline">Stabilité</Badge>
                    <Badge variant="outline">Durabilité</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-secondary">Éco-responsable</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Technologie 100% électrique pour une agriculture durable et 
                    respectueuse de l'environnement.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="outline">Zéro émission</Badge>
                    <Badge variant="outline">Silencieux</Badge>
                    <Badge variant="outline">Durable</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-accent">Innovation</h4>
                  <p className="text-sm text-muted-foreground">
                    Intelligence artificielle intégrée pour une navigation optimale 
                    et une adaptation aux besoins spécifiques de chaque exploitation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specifications;