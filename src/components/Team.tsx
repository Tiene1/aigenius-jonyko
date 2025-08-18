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
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-secondary rounded-full border border-primary/20 mb-6">
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
              className="bg-background rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Photo */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <img 
                    src={member.image} 
                    alt={`Photo de ${member.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Name */}
              <h3 className="font-bold text-foreground mb-2 font-display text-center">
                {member.name}
              </h3>
              
              {/* Role */}
              <p className="text-sm text-primary font-semibold text-center mb-4">
                {member.role}
              </p>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed text-center">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row - 2 Members Centered */}
        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl w-full px-6 md:px-0">
            {teamMembers.slice(3, 5).map((member, index) => (
              <div 
                key={member.id}
                className="bg-background rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${(index + 3) * 150}ms` }}
              >
                {/* Photo */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <img 
                      src={member.image} 
                      alt={`Photo de ${member.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Name */}
                <h3 className="font-bold text-foreground mb-2 font-display text-center">
                  {member.name}
                </h3>
                
                {/* Role */}
                <p className="text-sm text-primary font-semibold text-center mb-4">
                  {member.role}
                </p>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed text-center">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* GoGreen Style - Contact Section */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '800ms' }}>
          
          {/* Company Info */}
          <div className="bg-secondary rounded-3xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-display">
              AiGENIUS GROUPE
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Une startup innovante spécialisée dans le développement de solutions robotiques 
              pour l'agriculture moderne. Notre mission : révolutionner le secteur agricole 
              africain grâce à l'intelligence artificielle et la robotique avancée.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm">Innovation</span>
              <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm">Robotique Agricole</span>
              <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm">Made in Côte d'Ivoire</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
