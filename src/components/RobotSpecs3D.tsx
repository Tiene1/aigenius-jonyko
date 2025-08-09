import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Robot3D from "./Robot3D";
import { 
  Battery, 
  Weight, 
  Gauge, 
  Zap, 
  Shield, 
  Settings,
  MapPin,
  Clock
} from "lucide-react";

const RobotSpecs3D = () => {
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
    },
    {
      icon: MapPin,
      title: "Navigation",
      value: "IA Intégrée",
      description: "Capteurs haute précision"
    },
    {
      icon: Shield,
      title: "Résistance",
      value: "IP65",
      description: "Protection intempéries complète"
    }
  ];

  return (
    <section id="robot-3d" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Modèle 3D Interactif
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Découvrez JONYKO en
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Réalité Virtuelle
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explorez chaque détail de notre robot agricole intelligent 
            grâce à notre visualisation 3D interactive
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Modèle 3D */}
          <div className="animate-slide-in-left">
            <Card className="p-6 bg-gradient-mesh border-primary/20">
              <div className="relative">
                <Robot3D />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary/90 text-primary-foreground">
                    Modèle Interactif
                  </Badge>
                </div>
              </div>
            </Card>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Prêt à importer votre modèle 3D ?
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline">Format STEP</Badge>
                <Badge variant="outline">Format OBJ</Badge>
                <Badge variant="outline">Format GLTF</Badge>
                <Badge variant="outline">Format STL</Badge>
              </div>
            </div>
          </div>

          {/* Spécifications */}
          <div className="space-y-6 animate-slide-in-right">
            <div>
              <h3 className="text-2xl font-bold mb-2">Spécifications Techniques</h3>
              <p className="text-muted-foreground mb-8">
                JONYKO combine puissance, autonomie et intelligence pour 
                révolutionner votre exploitation agricole
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {specifications.map((spec, index) => {
                const IconComponent = spec.icon;
                return (
                  <Card 
                    key={spec.title}
                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-sm font-medium text-muted-foreground">
                            {spec.title}
                          </CardTitle>
                          <div className="text-lg font-bold text-primary">
                            {spec.value}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground">
                        {spec.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Avantages techniques */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Avantages Techniques
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Zap className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm">Zéro Émission</h4>
                      <p className="text-xs text-muted-foreground">Respect environnemental total</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm">Maintenance Facile</h4>
                      <p className="text-xs text-muted-foreground">Coûts d'entretien réduits</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RobotSpecs3D;