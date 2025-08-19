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
    <section id="equipe" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* GoGreen Style Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-transparent rounded-full border-2 border-primary mb-6">
            <span className="text-sm font-medium text-primary">Notre Équipe</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-display text-foreground">
            L'Équipe AiGENIUS GROUPE
            <span className="block text-primary mt-1">Derrière JONYKO</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez les experts passionnés qui ont conçu et développé le robot agricole JONYKO. 
            Une équipe pluridisciplinaire alliant innovation, expertise technique et vision entrepreneuriale.
          </p>
        </div>

        {/* Team Cards - GoGreen Style with Full Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 px-6 md:px-0">
          {teamMembers.slice(0, 3).map((member, index) => (
            <div 
              key={member.id}
              className="rounded-lg bg-card text-card-foreground shadow-sm group transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 animate-scale-in h-full flex flex-col relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 border-2 border-transparent hover:border-primary/20"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex flex-col space-y-1.5 p-6 text-center pb-6 relative z-10">
                <div className="relative mx-auto mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-20 group-hover:opacity-40 blur-sm transition-all duration-500 scale-110"></div>
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
              </div>
              <div className="p-6 pt-0 flex-1 flex flex-col text-center px-4 sm:px-5 md:px-4 lg:px-4 pb-4 sm:pb-5 md:pb-4 lg:pb-4 relative z-10">
                <p className="text-xs sm:text-sm md:text-xs lg:text-sm text-muted-foreground leading-relaxed min-h-[100px] sm:min-h-[120px] md:min-h-[140px] lg:min-h-[140px] overflow-hidden">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 2 Members Centered */}
        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl w-full px-6 md:px-0">
            {teamMembers.slice(3, 5).map((member, index) => (
              <div 
                key={member.id}
                className="rounded-lg bg-card text-card-foreground shadow-sm group transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 animate-scale-in h-full flex flex-col relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 border-2 border-transparent hover:border-primary/20"
                style={{ animationDelay: `${(index + 3) * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex flex-col space-y-1.5 p-6 text-center pb-6 relative z-10">
                  <div className="relative mx-auto mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-20 group-hover:opacity-40 blur-sm transition-all duration-500 scale-110"></div>
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
                </div>
                <div className="p-6 pt-0 flex-1 flex flex-col text-center px-4 sm:px-5 md:px-4 lg:px-4 pb-4 sm:pb-5 md:pb-4 lg:pb-4 relative z-10">
                  <p className="text-xs sm:text-sm md:text-xs lg:text-sm text-muted-foreground leading-relaxed min-h-[100px] sm:min-h-[120px] md:min-h-[140px] lg:min-h-[140px] overflow-hidden">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GoGreen Style - Contact Section */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '800ms' }}>
          
          {/* Company Info */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <div className="p-8">
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
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">Innovation</div>
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">Robotique Agricole</div>
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">Intelligence Artificielle</div>
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">Fabriqué en Côte d'Ivoire</div>
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">L'agriculture 4.0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
