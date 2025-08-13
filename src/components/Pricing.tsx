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
          className={`transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-scale-in h-full flex flex-col lg:min-h-[580px] xl:min-h-[620px] ${
            option.popular ? 'border-2 border-primary shadow-lg' : 'border border-border'
          }`}
          style={{ animationDelay: `${index * 200}ms` }}
        >

        <CardHeader className="text-center pb-4 flex-shrink-0 lg:p-6 xl:p-8">
          <div className={`inline-flex items-center justify-center w-16 h-16 lg:w-18 lg:h-18 mb-4 bg-${option.color}/10 rounded-full mx-auto`}>
            <IconComponent className={`h-8 w-8 lg:h-9 lg:w-9 text-${option.color}`} />
          </div>
          <CardTitle className="text-xl lg:text-2xl xl:text-3xl mb-3">{option.title}</CardTitle>
          <div className="mb-3">
            <span className={`text-2xl lg:text-3xl xl:text-4xl font-bold text-${option.color}`}>
              {option.price.split(' - ')[0]}
            </span>
            {option.price.includes(' - ') && (
              <span className="text-sm lg:text-lg xl:text-xl text-muted-foreground">
                {' - ' + option.price.split(' - ')[1]}
              </span>
            )}
            <div className="text-sm lg:text-base text-muted-foreground mt-1">
              {option.currency}
            </div>
          </div>
          <p className="text-sm lg:text-base xl:text-lg text-muted-foreground">
            {option.description}
          </p>
        </CardHeader>

        <CardContent className="pt-0 flex flex-col flex-1 lg:px-6 xl:px-8 lg:pb-6 xl:pb-8">
          <ul className="space-y-3 lg:space-y-4 xl:space-y-5 mb-6 flex-1">
            {option.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 lg:gap-4">
                <div className={`w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-${option.color}/10 flex items-center justify-center flex-shrink-0`}>
                  <Check className={`h-3 w-3 lg:h-4 lg:w-4 text-${option.color}`} />
                </div>
                <span className="text-sm lg:text-base xl:text-lg text-muted-foreground flex-1 leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>

          <Button 
            className={`w-full mt-auto lg:py-3 xl:py-4 lg:text-lg xl:text-xl ${
              option.popular 
                ? 'bg-gradient-primary hover:shadow-lg hover:shadow-primary/25' 
                : option.color === 'secondary'
                ? 'bg-gradient-tech hover:shadow-lg hover:shadow-secondary/25'
                : 'bg-gradient-accent hover:shadow-lg hover:shadow-accent/25'
            } transition-all duration-300`}
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
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-accent text-accent">
            Options Commerciales
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Solutions Flexibles
            <span className="block text-accent">Pour Chaque Besoin</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choisissez la solution qui correspond le mieux à vos besoins et 
            à votre budget agricole
          </p>
        </div>

        <div className="max-w-8xl mx-auto">
          {/* SMARTPHONE : 1 colonne (moins de 640px) */}
          <div className="block sm:hidden">
            <div className="space-y-6">
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
            <div className="grid grid-cols-3 gap-10 xl:gap-12 items-start">
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
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p>Suivi personnalisé de chaque client</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Check className="h-4 w-4 text-secondary" />
                  </div>
                  <p>Respect des délais de livraison</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Check className="h-4 w-4 text-accent" />
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