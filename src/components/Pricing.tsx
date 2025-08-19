import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ShoppingCart, Calendar, Wrench } from "lucide-react";

const Pricing = () => {
  const pricingOptions = [
    {
      icon: ShoppingCart,
      title: "Achat Direct",
      price: "1 800 000 - 2 300 000",
      currency: "FCFA",
      description: "Acquisition complète avec services inclus",
      color: "primary",
      popular: true,
      features: [
        "Robot JONYKO complet avec accessoires",
        "Formation complète équipe agricole",
        "Garantie constructeur incluse",
        "Support technique initial",
        "Documentation technique complète",
        "Livraison sur site incluse"
      ]
    },
    {
      icon: Calendar,
      title: "Location Flexible",
      price: "200 000 - 350 000",
      currency: "FCFA/période",
      description: "Solution saisonnière avec flexibilité maximale",
      color: "secondary",
      popular: false,
      features: [
        "Location courte et longue durée",
        "Maintenance complètement incluse",
        "Support technique permanent",
        "Formation utilisateurs renouvelée",
        "Assurance complète du matériel",
        "Flexibilité cycles saisonniers"
      ]
    },
    {
      icon: Wrench,
      title: "Maintenance Pro",
      price: "50 000 - 200 000",
      currency: "FCFA/intervention",
      description: "Service après-vente professionnel",
      color: "accent",
      popular: false,
      features: [
        "Diagnostic complet du système",
        "Réparations avec pièces d'origine",
        "Pièces de rechange certifiées",
        "Optimisation des performances",
        "Mise à jour logicielle",
        "Rapport détaillé d'intervention"
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const renderPricingCard = (option: typeof pricingOptions[0], index: number) => {
    const IconComponent = option.icon;
    const colorClasses = {
      primary: {
        bg: 'bg-primary-transparent',
        text: 'text-primary',
        border: 'border-primary/20',
        iconColor: 'text-primary-dark',
        buttonBg: 'bg-primary-darker',
        checkBg: 'bg-primary-darker'
      },
      secondary: {
        bg: 'bg-secondary-transparent',
        text: 'text-secondary', 
        border: 'border-secondary/20',
        iconColor: 'text-secondary-dark',
        buttonBg: 'bg-secondary-darker',
        checkBg: 'bg-secondary-darker'
      },
      accent: {
        bg: 'bg-accent-transparent',
        text: 'text-accent',
        border: 'border-accent/20',
        iconColor: 'text-accent-dark',
        buttonBg: 'bg-accent-darker',
        checkBg: 'bg-accent-darker'
      }
    };
    
    const currentColor = colorClasses[option.color as keyof typeof colorClasses];
    return (
      <div className="relative">
        {/* Badge repositionné pour ne pas affecter l'alignement */}
        {option.popular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
            <Badge className="bg-primary text-primary-foreground px-4 py-1">
              Recommandé
            </Badge>
          </div>
        )}
        <Card 
          key={option.title}
          className={`transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 animate-scale-in h-full flex flex-col group ${
            option.popular ? 'border-2 border-primary shadow-lg hover:shadow-primary/20' : 'border border-border hover:shadow-lg'
          }`}
          style={{ animationDelay: `${index * 200}ms` }}
        >

        <CardHeader className="text-center pb-4 flex-shrink-0">
          <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 mb-4 ${currentColor.bg} rounded-2xl mx-auto transition-all duration-300 group-hover:${currentColor.bg} group-hover:scale-110`}>
            <IconComponent className={`h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9 ${currentColor.iconColor}`} />
          </div>
          <CardTitle className="text-lg sm:text-xl lg:text-2xl mb-3 font-display">{option.title}</CardTitle>
          <div className="mb-3">
            <span className={`text-xl sm:text-2xl lg:text-3xl font-bold ${currentColor.text} font-display`}>
              {option.price.split(' - ')[0]}
            </span>
            {option.price.includes(' - ') && (
              <span className="text-sm sm:text-base lg:text-lg text-muted-foreground">
                {' - ' + option.price.split(' - ')[1]}
              </span>
            )}
            <div className="text-xs sm:text-sm lg:text-base text-muted-foreground mt-1">
              {option.currency}
            </div>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
            {option.description}
          </p>
        </CardHeader>

        <CardContent className="pt-0 flex flex-col flex-1">
          <div className="flex justify-center mb-4 sm:mb-6 flex-1">
            <ul className="space-y-2 sm:space-y-3 w-full">
              {option.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 sm:gap-3">
                  <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full ${currentColor.checkBg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <Check className={`h-2.5 w-2.5 sm:h-3 sm:w-3 text-white`} />
                  </div>
                  <span className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed flex-1">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button 
            className={`w-full mt-auto py-2 sm:py-3 text-sm sm:text-base lg:text-lg ${currentColor.buttonBg} text-white hover:shadow-lg hover:shadow-${option.color}/25 hover:scale-105 transition-all duration-300`}
            onClick={scrollToContact}
          >
            {option.title === "Achat Direct" ? "Demander un devis" :
             option.title === "Location Flexible" ? "Demander location" :
             "Planifier maintenance"}
          </Button>
        </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <section id="prix" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in px-4">
          <Badge variant="outline" className="mb-4 border-primary text-primary font-medium">
            Options Commerciales
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 font-display">
            Solutions Flexibles
            <span className="block text-primary mt-1">Pour Chaque Besoin</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Choisissez la solution qui correspond le mieux à vos besoins et 
            à votre budget agricole
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* SMARTPHONE : 1 colonne (moins de 640px) */}
          <div className="block sm:hidden">
            <div className="space-y-6 px-6">
              {pricingOptions.map((option, index) => renderPricingCard(option, index))}
            </div>
          </div>

          {/* TABLETTE : 2 cartes en haut, 1 centrée en bas (640px à 1024px) */}
          <div className="hidden sm:block lg:hidden">
            {/* Première rangée - 2 cartes */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {pricingOptions.slice(0, 2).map((option, index) => renderPricingCard(option, index))}
            </div>
            
            {/* Deuxième rangée - 1 carte centrée */}
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                {renderPricingCard(pricingOptions[2], 2)}
              </div>
            </div>
          </div>

          {/* PC/DESKTOP : 3 cartes sur une ligne (1024px et plus) */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-6 lg:gap-8 items-start">
              {pricingOptions.map((option, index) => renderPricingCard(option, index))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '800ms' }}>
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl font-bold mb-4">Engagement Qualité AiGENIUS GROUPE</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-muted-foreground">
                <div className="text-center">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p>Suivi personnalisé de chaque client</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center mx-auto mb-2">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p>Respect des délais de livraison</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mx-auto mb-2">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p>Transparence totale sur tarifs</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
