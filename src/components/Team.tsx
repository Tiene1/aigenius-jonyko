import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";
import anselmePic from "@/assets/anselme.jpg";
import jonyPic from "@/assets/jony.jpg";
import karimouPic from "@/assets/karimou.jpg";
import ndehouPic from "@/assets/ndehou.jpg";
import membre5Pic from "@/assets/membre5.jpg";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Kouassi Bawannou Anselme",
      role: "Électrotechnicien",
      description: "Électrotechnicien et responsable diagnostic AIGENUS groupe. passionné de nouvelles technologies et solution intelligente.",
      image: anselmePic
    },
    {
      id: 2,
      name: "Koffi Kouamé Jonas",
      role: "Chef d'équipe et Chef de projet",
      description: "Chef d'équipe et chef de projet passionné par l'innovation, j'allie expertise technique et sens du leadership pour mener à bien le projet, de la conception à la réalisation. Avec une expérience en automatisation, robotique et gestion d'équipes pluridisciplinaires, je veille à la performance, à la qualité et au respect des délais, tout en motivant mes collaborateurs à donner le meilleur d'eux-mêmes.",
      image: jonyPic
    },
    {
      id: 3,
      name: "Karimou Farhane",
      role: "Technicien Supérieur en Électronique",
      description: "Technicien Supérieur en Électronique, Systèmes Embarqués et IoT. Passionné par la conception de solutions intelligentes intégrant électronique, programmation embarquée et connectivité IoT.",
      image: karimouPic
    },
    {
      id: 4,
      name: "N’Dehou Yavo Ulrich",
      role: "Master IA & Communication",
      description: "Actuellement en Master en Intelligence Artificielle et chargé de communication chez AIGENIUS GROUPE, je suis passionné par la robotique et l'agriculture durable. Engagé et motivé, je m'investis dans le développement de solutions technologiques innovantes pour relever des défis concrets et répondre aux problématiques actuelles.",
      image: ndehouPic
    },
    {
      id: 5,
      name: "Kouadio Jean Mermoz",
      role: "Développeur système embarqué",
      description: "Développeur système embarqué Responsable maquettiste AIGENIUS groupe son parcours allie innovation, discipline.",
      image: membre5Pic
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

        <div className="max-w-7xl mx-auto">
          {/* Première rangée - 3 cartes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-7 lg:gap-7 mb-6 sm:mb-7">
            {teamMembers.slice(0, 3).map((member, index) => (
            <Card 
              key={member.id}
              className="group transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 animate-scale-in h-full flex flex-col relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 border-2 border-transparent hover:border-primary/20"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Effet de background animé */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="text-center pb-6 relative z-10">
                <div className="relative mx-auto mb-6">
                  {/* Container avec effet de border animé */}
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-20 group-hover:opacity-40 blur-sm transition-all duration-500 scale-110" />
                    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-30 md:h-30 mx-auto rounded-full overflow-hidden bg-gradient-primary border-2 sm:border-3 md:border-3 border-white shadow-xl relative z-10 group-hover:scale-105 transition-transform duration-300">
                      <img 
                        src={member.image} 
                        alt={`Photo de ${member.name}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl md:text-xl font-bold text-primary mb-2 group-hover:text-primary/90 transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm md:text-sm font-semibold text-secondary uppercase tracking-wide">
                  {member.role}
                </p>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col text-center px-4 sm:px-5 md:px-4 lg:px-4 pb-4 sm:pb-5 md:pb-4 lg:pb-4 relative z-10">
                <p className="text-xs sm:text-sm md:text-xs lg:text-sm text-muted-foreground leading-relaxed min-h-[100px] sm:min-h-[120px] md:min-h-[140px] lg:min-h-[140px] overflow-hidden">
                  {member.description}
                </p>
              </CardContent>
            </Card>
            ))}
          </div>
          
          {/* Deuxième rangée - 2 cartes centrées */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-7 md:gap-7 lg:gap-7 max-w-2xl w-full px-4 sm:px-0">
              {teamMembers.slice(3, 5).map((member, index) => (
              <Card 
                key={member.id}
                className="group transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 animate-scale-in h-full flex flex-col relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 border-2 border-transparent hover:border-primary/20"
                style={{ animationDelay: `${(index + 3) * 150}ms` }}
              >
                {/* Effet de background animé */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="text-center pb-6 relative z-10">
                  <div className="relative mx-auto mb-6">
                    {/* Container avec effet de border animé */}
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-20 group-hover:opacity-40 blur-sm transition-all duration-500 scale-110" />
                      <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-30 md:h-30 mx-auto rounded-full overflow-hidden bg-gradient-primary border-2 sm:border-3 md:border-3 border-white shadow-xl relative z-10 group-hover:scale-105 transition-transform duration-300">
                        <img 
                          src={member.image} 
                          alt={`Photo de ${member.name}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-primary/90 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-secondary uppercase tracking-wide">
                    {member.role}
                  </p>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col text-center px-6 pb-6 relative z-10">
                  <p className="text-sm text-muted-foreground leading-relaxed min-h-[120px]">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
              ))}
            </div>
          </div>
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