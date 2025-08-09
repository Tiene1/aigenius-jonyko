import { Badge } from "@/components/ui/badge";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">J</span>
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                JONYKO
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Robot agricole intelligent développé par AiGENIUS GROUPE pour 
              révolutionner le transport des récoltes.
            </p>
            <div className="flex gap-2">
              <Badge variant="outline" className="text-xs">Agriculture 4.0</Badge>
              <Badge variant="outline" className="text-xs">100% Électrique</Badge>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#accueil" className="hover:text-primary transition-colors">Accueil</a></li>
              <li><a href="#fonctionnalites" className="hover:text-primary transition-colors">Fonctionnalités & 3D</a></li>
              <li><a href="#prix" className="hover:text-primary transition-colors">Options Commerciales</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Vente directe</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Location flexible</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Maintenance professionnelle</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Formation utilisateurs</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Support technique</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Interlab Angré 8ème tranche</p>
              <p>Abidjan, Côte d'Ivoire</p>
              <p className="text-primary">robotjonyko@gmail.com</p>
              <p className="text-secondary">+225 01 40 56 72 89</p>
              <p className="text-accent">+225 05 55 93 84 44</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 AiGENIUS GROUPE. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Développé avec</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
              <span className="text-sm font-medium text-primary">Innovation Africaine</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;