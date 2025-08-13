import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Linkedin,
  Mail
} from "lucide-react";
import anselmePic from "@/assets/anselme.jpg";
import jonyPic from "@/assets/jony.jpg";
import karimouPic from "@/assets/karimou.jpg";
import ndehouPic from "@/assets/ndehou.jpg";
import membre5Pic from "@/assets/membre5.jpg";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Anselme",
      role: "Chef d'équipe et Chef de projet",
      description: "Chef d'équipe et chef de projet passionné par l'innovation, j'allie expertise technique et sens du leadership pour mener à bien le projet, de la conception à la réalisation. Avec une expérience en automatisation, robotique et gestion d'équipes pluridisciplinaires, je veille à la performance, à la qualité et au respect des délais, tout en motivant mes collaborateurs à donner le meilleur d'eux-mêmes.",
      image: anselmePic,
      specialties: ["Leadership", "Automatisation", "Robotique", "Gestion d'équipe"]
    },
    {
      id: 2,
      name: "Jony",
      role: "Développeur et Concepteur",
      description: "Passionné de développement et de conception, je me consacre à créer des solutions innovantes et fonctionnelles. Mon expertise couvre le développement logiciel, la conception de systèmes et l'intégration de technologies avancées pour donner vie aux idées les plus ambitieuses.",
      image: jonyPic,
      specialties: ["Développement", "Conception", "Innovation", "Technologie"]
    },
    {
      id: 3,
      name: "Karimou",
      role: "Ingénieur Systèmes",
      description: "Spécialiste en ingénierie des systèmes, je conçois et optimise les architectures techniques complexes. Mon rôle consiste à assurer la cohérence, la performance et la fiabilité de tous les composants du système robotique JONYKO.",
      image: karimouPic,
      specialties: ["Ingénierie", "Systèmes", "Architecture", "Optimisation"]
    },
    {
      id: 4,
      name: "Ndehou",
      role: "Expert Technique",
      description: "Expert technique polyvalent, j'apporte mon expertise dans les domaines critiques du projet. Je me concentre sur la résolution de problèmes complexes et l'amélioration continue des performances techniques du robot agricole.",
      image: ndehouPic,
      specialties: ["Expertise technique", "Résolution de problèmes", "Performance", "Innovation"]
    },
    {
      id: 5,
      name: "Membre 5",
      role: "Spécialiste Agriculture",
      description: "Spécialisé dans le domaine agricole, j'apporte une expertise terrain essentielle au projet. Mon rôle est de s'assurer que JONYKO répond parfaitement aux besoins réels des agriculteurs et aux défis de l'agriculture moderne.",
      image: membre5Pic,
      specialties: ["Agriculture", "Terrain", "Besoins utilisateurs", "Efficacité"]
    }
  ];

  return (
    <section id="equipe" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Notre Équipe
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            L'Équipe AiGENIUS GROUPE
            <span className="block text-primary">
              Derrière JONYKO
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Découvrez les experts passionnés qui ont conçu et développé le robot agricole JONYKO. 
            Une équipe pluridisciplinaire alliant innovation, expertise technique et vision entrepreneuriale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.id}
              className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-scale-in h-full flex flex-col"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-4">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gradient-primary mb-3">
                    <img 
                      src={member.image} 
                      alt={`Photo de ${member.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-muted-foreground">
                  {member.role}
                </p>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                  {member.description}
                </p>
                
                {/* Spécialités */}
                <div className="mt-auto">
                  <h4 className="text-sm font-semibold mb-2">Spécialités :</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="text-xs border-primary/30 text-primary"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Boutons de contact */}
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs bg-primary/10 hover:bg-primary/20 text-primary rounded-md transition-colors">
                    <Linkedin className="w-3 h-3" />
                    LinkedIn
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs bg-secondary/10 hover:bg-secondary/20 text-secondary rounded-md transition-colors">
                    <Mail className="w-3 h-3" />
                    Contact
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section entreprise */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '800ms' }}>
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Users className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold">AiGENIUS GROUPE</h3>
              </div>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Une startup innovante spécialisée dans le développement de solutions robotiques 
                pour l'agriculture moderne. Notre mission : révolutionner le secteur agricole 
                africain grâce à l'intelligence artificielle et la robotique avancée.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline">Innovation</Badge>
                <Badge variant="outline">Robotique Agricole</Badge>
                <Badge variant="outline">Intelligence Artificielle</Badge>
                <Badge variant="outline">Made in Côte d'Ivoire</Badge>
                <Badge variant="outline">Agriculture 4.0</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;