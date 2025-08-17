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

  const renderContactCard = (info: typeof contactInfo[0], index: number) => {
    const IconComponent = info.icon;
    return (
      <Card 
        key={info.title}
        className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-slide-in-left h-full"
        style={{ animationDelay: `${index * 150}ms` }}
      >
        <CardContent className="p-4 sm:p-5 lg:p-6 h-full flex flex-col">
          <div className="flex items-start gap-3 sm:gap-4 flex-1">
            <div className={`p-2 sm:p-3 rounded-lg bg-${info.color}/10 flex-shrink-0`}>
              <IconComponent className={`h-4 w-4 sm:h-5 sm:w-5 text-${info.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold mb-1 text-sm sm:text-base">{info.title}</h3>
              <p className={`text-${info.color} font-medium mb-1 text-xs sm:text-sm break-all`}>
                {info.content}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {info.subContent}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Contact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Parlez Nous de Vos Besoins
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            L'équipe AiGENIUS GROUPE est à votre disposition pour vous accompagner 
            dans la modernisation de votre exploitation agricole
          </p>
        </div>

        <div className="space-y-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* SMARTPHONE : 1 colonne (moins de 640px) */}
            <div className="block sm:hidden">
              <div className="space-y-4">
                {contactInfo.map((info, index) => renderContactCard(info, index))}
              </div>
            </div>

            {/* TABLETTE : 2x2 disposition (640px à 1024px) */}
            <div className="hidden sm:block lg:hidden">
              {/* Première rangée - Adresse et Email */}
              <div className="grid grid-cols-2 gap-5 mb-6">
                {contactInfo.slice(0, 2).map((info, index) => renderContactCard(info, index))}
              </div>
              
              {/* Deuxième rangée - Commercial et Support technique */}
              <div className="grid grid-cols-2 gap-5">
                {contactInfo.slice(2, 4).map((info, index) => renderContactCard(info, index + 2))}
              </div>
            </div>

            {/* PC/DESKTOP : 4 cartes sur une ligne (1024px et plus) */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-4 gap-6">
                {contactInfo.map((info, index) => renderContactCard(info, index))}
              </div>
            </div>
          </div>

          {/* Services Disponibles */}
          <Card className="animate-slide-in-left" style={{ animationDelay: '600ms' }}>
            <CardHeader>
              <CardTitle className="text-center text-xl sm:text-2xl">Services Clients Disponibles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                      <h4 className="font-semibold text-base sm:text-lg">{service.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="space-y-8">
            {/* SMARTPHONE : 1 colonne (moins de 640px) */}
            <div className="block sm:hidden">
              <div className="space-y-6 animate-slide-in-up" style={{ animationDelay: '300ms' }}>
                <Card className="bg-gradient-primary text-primary-foreground">
                  <CardHeader className="p-6">
                    <CardTitle className="text-white text-xl">Demande de Devis</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <p className="text-primary-foreground/90 text-base mb-6">
                      Obtenez un devis personnalisé pour votre exploitation agricole
                    </p>
                    <Button 
                      variant="secondary"
                      className="w-full bg-white text-primary hover:bg-white/90 py-3 text-base"
                      onClick={() => window.open('mailto:robotjonyko@gmail.com?subject=Demande de devis JONYKO&body=Bonjour, je souhaiterais recevoir un devis pour le robot agricole JONYKO.', '_blank')}
                    >
                      <Mail className="h-5 w-5 mr-3" />
                      Demander un devis
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-tech text-secondary-foreground">
                  <CardHeader className="p-6">
                    <CardTitle className="text-black text-xl">Support Technique</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <p className="text-secondary-foreground/90 text-base mb-6">
                      Besoin d'assistance ? Notre équipe technique est là pour vous aider
                    </p>
                    <Button 
                      variant="secondary"
                      className="w-full bg-white text-secondary hover:bg-white/90 py-3 text-base"
                      onClick={() => window.open('tel:+22505559384444', '_blank')}
                    >
                      <Phone className="h-5 w-5 mr-3" />
                      Appeler le support
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="p-6">
                    <CardTitle className="flex items-center gap-2 justify-center text-xl">
                      <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" />
                      Engagement Qualité
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 space-y-4 text-base text-muted-foreground">
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

            {/* TABLETTE : 2 cartes en haut, 1 centrée en bas (640px à 1024px) */}
            <div className="hidden sm:block lg:hidden">
              {/* Première rangée - 2 cartes */}
              <div className="grid grid-cols-2 gap-8 mb-8 animate-slide-in-up" style={{ animationDelay: '300ms' }}>
                <Card className="bg-gradient-primary text-primary-foreground">
                  <CardHeader className="p-6">
                    <CardTitle className="text-white text-xl">Demande de Devis</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <p className="text-primary-foreground/90 text-base mb-6">
                      Obtenez un devis personnalisé pour votre exploitation agricole
                    </p>
                    <Button 
                      variant="secondary"
                      className="w-full bg-white text-primary hover:bg-white/90 py-3 text-base"
                      onClick={() => window.open('mailto:robotjonyko@gmail.com?subject=Demande de devis JONYKO&body=Bonjour, je souhaiterais recevoir un devis pour le robot agricole JONYKO.', '_blank')}
                    >
                      <Mail className="h-5 w-5 mr-3" />
                      Demander un devis
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-tech text-secondary-foreground">
                  <CardHeader className="p-6">
                    <CardTitle className="text-black text-xl">Support Technique</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <p className="text-secondary-foreground/90 text-base mb-6">
                      Besoin d'assistance ? Notre équipe technique est là pour vous aider
                    </p>
                    <Button 
                      variant="secondary"
                      className="w-full bg-white text-secondary hover:bg-white/90 py-3 text-base"
                      onClick={() => window.open('tel:+22505559384444', '_blank')}
                    >
                      <Phone className="h-5 w-5 mr-3" />
                      Appeler le support
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              {/* Deuxième rangée - Carte Engagement Qualité centrée */}
              <div className="flex justify-center">
                <div className="w-full max-w-md">
                  <Card>
                    <CardHeader className="p-6">
                      <CardTitle className="flex items-center gap-2 justify-center text-xl">
                        <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" />
                        Engagement Qualité
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 pt-0 space-y-4 text-base text-muted-foreground">
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

            {/* PC/DESKTOP : 3 cartes sur une ligne (1024px et plus) */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-3 gap-8 animate-slide-in-up" style={{ animationDelay: '300ms' }}>
                <Card className="bg-gradient-primary text-primary-foreground">
                  <CardHeader className="p-8">
                    <CardTitle className="text-white text-2xl">Demande de Devis</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <p className="text-primary-foreground/90 text-lg mb-6">
                      Obtenez un devis personnalisé pour votre exploitation agricole
                    </p>
                    <Button 
                      variant="secondary"
                      className="w-full bg-white text-primary hover:bg-white/90 py-4 text-lg"
                      onClick={() => window.open('mailto:robotjonyko@gmail.com?subject=Demande de devis JONYKO&body=Bonjour, je souhaiterais recevoir un devis pour le robot agricole JONYKO.', '_blank')}
                    >
                      <Mail className="h-5 w-5 mr-3" />
                      Demander un devis
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-tech text-secondary-foreground">
                  <CardHeader className="p-8">
                    <CardTitle className="text-black text-2xl">Support Technique</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <p className="text-secondary-foreground/90 text-lg mb-6">
                      Besoin d'assistance ? Notre équipe technique est là pour vous aider
                    </p>
                    <Button 
                      variant="secondary"
                      className="w-full bg-white text-secondary hover:bg-white/90 py-4 text-lg"
                      onClick={() => window.open('tel:+22505559384444', '_blank')}
                    >
                      <Phone className="h-5 w-5 mr-3" />
                      Appeler le support
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="p-8">
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" />
                      Engagement Qualité
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 pt-0 space-y-5 text-lg text-muted-foreground">
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
        </div>

        {/* Company Info */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '800ms' }}>
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-background to-muted/50">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">A</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">AiGENIUS GROUPE</h3>
              </div>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-sm sm:text-base">
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
