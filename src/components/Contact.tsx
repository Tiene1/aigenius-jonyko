import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock,
  Users,
  Award,
  Headphones
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      content: "Interlab Angré 8ème tranche",
      subContent: "Abidjan, Côte d'Ivoire",
      color: "primary"
    },
    {
      icon: Mail,
      title: "Email",
      content: "robotjonyko@gmail.com",
      subContent: "Réponse sous 24h",
      color: "secondary"
    },
    {
      icon: Phone,
      title: "Commercial",
      content: "+225 01 40 56 72 89",
      subContent: "Vente et devis",
      color: "accent"
    },
    {
      icon: Headphones,
      title: "Support Technique",
      content: "+225 05 55 93 84 44", 
      subContent: "Assistance technique",
      color: "primary"
    }
  ];

  const services = [
    {
      icon: Users,
      title: "Vente Directe",
      description: "Accompagnement personnalisé pour l'acquisition de votre robot JONYKO"
    },
    {
      icon: Clock,
      title: "Location Flexible",
      description: "Solutions saisonnières adaptées à vos cycles agricoles"
    },
    {
      icon: Award,
      title: "Maintenance Pro",
      description: "Service après-vente professionnel avec pièces d'origine"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Contact
          </Badge>
          <h2 className="text-3xl md:text-3xl font-bold mb-4">
            Parlons de Votre Projet
            <span className="block text-primary">Agricole</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            L'équipe AiGENIUS GROUPE est à votre disposition pour vous accompagner 
            dans la modernisation de votre exploitation agricole
          </p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Version mobile - une colonne */}
            <div className="grid grid-cols-1 gap-4 sm:hidden">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card 
                    key={info.title}
                    className={`group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-slide-in-left h-full`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <CardContent className="p-4 h-full flex flex-col">
                      <div className="flex items-start gap-4 flex-1">
                        <div className={`p-3 rounded-lg bg-${info.color}/10 flex-shrink-0`}>
                          <IconComponent className={`h-5 w-5 text-${info.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          <p className={`text-${info.color} font-medium mb-1 break-all`}>
                            {info.content}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {info.subContent}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Version tablette et plus - 2x2 disposition */}
            <div className="hidden sm:block">
              {/* Première rangée - Adresse et Email */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-5 lg:gap-5 mb-4 sm:mb-5 md:mb-5 lg:mb-5">
                {contactInfo.slice(0, 2).map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card 
                      key={info.title}
                      className={`group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-slide-in-left h-full md:col-span-2 lg:col-span-2`}
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <CardContent className="p-4 sm:p-5 md:p-4 lg:p-5 h-full flex flex-col">
                        <div className="flex items-start gap-3 sm:gap-4 md:gap-3 lg:gap-4 flex-1">
                          <div className={`p-2 sm:p-3 md:p-2 lg:p-3 rounded-lg bg-${info.color}/10 flex-shrink-0`}>
                            <IconComponent className={`h-4 w-4 sm:h-5 sm:w-5 md:h-4 md:w-4 lg:h-5 lg:w-5 text-${info.color}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold mb-1 text-sm sm:text-base md:text-sm lg:text-base">{info.title}</h3>
                            <p className={`text-${info.color} font-medium mb-1 break-all text-xs sm:text-sm md:text-xs lg:text-sm truncate`}>
                              {info.content}
                            </p>
                            <p className="text-xs sm:text-sm md:text-xs lg:text-sm text-muted-foreground">
                              {info.subContent}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              
              {/* Deuxième rangée - Commercial et Support technique */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-5 lg:gap-5">
                {contactInfo.slice(2, 4).map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card 
                      key={info.title}
                      className={`group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-slide-in-left h-full md:col-span-2 lg:col-span-2`}
                      style={{ animationDelay: `${(index + 2) * 150}ms` }}
                    >
                      <CardContent className="p-4 sm:p-5 md:p-4 lg:p-5 h-full flex flex-col">
                        <div className="flex items-start gap-3 sm:gap-4 md:gap-3 lg:gap-4 flex-1">
                          <div className={`p-2 sm:p-3 md:p-2 lg:p-3 rounded-lg bg-${info.color}/10 flex-shrink-0`}>
                            <IconComponent className={`h-4 w-4 sm:h-5 sm:w-5 md:h-4 md:w-4 lg:h-5 lg:w-5 text-${info.color}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold mb-1 text-sm sm:text-base md:text-sm lg:text-base">{info.title}</h3>
                            <p className={`text-${info.color} font-medium mb-1 break-all text-xs sm:text-sm md:text-xs lg:text-sm truncate`}>
                              {info.content}
                            </p>
                            <p className="text-xs sm:text-sm md:text-xs lg:text-sm text-muted-foreground">
                              {info.subContent}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Services Disponibles */}
            <Card className="animate-slide-in-left" style={{ animationDelay: '600ms' }}>
              <CardHeader>
                <CardTitle className="text-center">Services Clients Disponibles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-5 lg:gap-5">
                  {services.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <div 
                        key={service.title}
                        className="text-center space-y-3"
                      >
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="font-semibold">{service.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="max-w-6xl mx-auto">
            {/* Première rangée - 2 cartes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-8 lg:gap-5 mb-6 md:mb-8 lg:mb-0 animate-slide-in-up" style={{ animationDelay: '300ms' }}>
            <Card className="bg-gradient-primary text-primary-foreground h-full flex flex-col min-h-[280px] md:min-h-[320px]">
              <CardHeader className="flex-shrink-0 p-6 md:p-8">
                <CardTitle className="text-white text-xl md:text-2xl">Demande de Devis</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between p-6 md:p-8 pt-0">
                <p className="text-primary-foreground/90 text-base md:text-lg mb-6">
                  Obtenez un devis personnalisé pour votre exploitation agricole
                </p>
                <Button 
                  variant="secondary"
                  className="w-full bg-white text-primary hover:bg-white/90 mt-auto py-3 md:py-4 text-base md:text-lg"
                  onClick={() => window.open('mailto:robotjonyko@gmail.com?subject=Demande de devis JONYKO&body=Bonjour, je souhaiterais recevoir un devis pour le robot agricole JONYKO.', '_blank')}
                >
                  <Mail className="h-5 w-5 mr-3" />
                  Demander un devis
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-tech text-secondary-foreground h-full flex flex-col min-h-[280px] md:min-h-[320px]">
              <CardHeader className="flex-shrink-0 p-6 md:p-8">
                <CardTitle className="text-black text-xl md:text-2xl">Support Technique</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between p-6 md:p-8 pt-0">
                <p className="text-secondary-foreground/90 text-base md:text-lg mb-6">
                  Besoin d'assistance ? Notre équipe technique est là pour vous aider
                </p>
                <Button 
                  variant="secondary"
                  className="w-full bg-white text-secondary hover:bg-white/90 mt-auto py-3 md:py-4 text-base md:text-lg"
                  onClick={() => window.open('tel:+22505559384444', '_blank')}
                >
                  <Phone className="h-5 w-5 mr-3" />
                  Appeler le support
                </Button>
              </CardContent>
            </Card>

            </div>
            
            {/* Deuxième rangée - Carte Engagement Qualité centrée sur tablette */}
            <div className="hidden md:flex lg:hidden justify-center mt-8">
              <div className="max-w-md w-full">
                <Card className="h-full flex flex-col min-h-[280px] md:min-h-[320px]">
                  <CardHeader className="flex-shrink-0 p-6 md:p-8">
                    <CardTitle className="flex items-center gap-2 justify-center text-xl md:text-2xl">
                      <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" />
                      Engagement Qualité
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-4 md:space-y-5 text-base md:text-lg text-muted-foreground p-6 md:p-8 pt-0">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      Suivi personnalisé de chaque client
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      Formation continue des équipes
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      Amélioration continue des produits
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      Transparence totale sur les tarifs
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Version desktop - 3ème carte intégrée */}
            <div className="hidden lg:block">
              <Card className="h-full flex flex-col min-h-[280px] md:min-h-[320px]">
                <CardHeader className="flex-shrink-0 p-6 md:p-8">
                  <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
                    <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" />
                    Engagement Qualité
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 space-y-4 md:space-y-5 text-base md:text-lg text-muted-foreground p-6 md:p-8 pt-0">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Suivi personnalisé de chaque client
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    Formation continue des équipes
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Amélioration continue des produits
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Transparence totale sur les tarifs
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '800ms' }}>
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-background to-muted/50">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">A</span>
                </div>
                <h3 className="text-2xl font-bold">AiGENIUS GROUPE</h3>
              </div>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Pionnier de l'innovation agricole en Côte d'Ivoire, AiGENIUS GROUPE 
                développe des solutions technologiques avancées pour moderniser 
                l'agriculture africaine et améliorer la productivité des exploitations.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline">Innovation</Badge>
                <Badge variant="outline">Agriculture 4.0</Badge>
                <Badge variant="outline">Technologie Verte</Badge>
                <Badge variant="outline">Made in Africa</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;