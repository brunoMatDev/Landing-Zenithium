import { Section } from "../ui/section";
import { Button } from "../ui/button-glow";
import { 
  Users, 
  Award, 
  Target, 
  Zap, 
  ArrowRight,
  Linkedin
} from "lucide-react";

export default function About() {
  const stats = [
    { number: "4+", label: "Años de Experiencia", icon: Award },
    { number: "100+", label: "Proyectos Completados", icon: Target },
    { number: "50+", label: "Clientes Satisfechos", icon: Users },
    { number: "24/7", label: "Soporte Técnico", icon: Zap }
  ];

  const team = [
    {
      name: "Agustin Sgromo",
      role: "Tech Lead & Founder",
      bio: "Full-stack developer especializado en arquitecturas escalables. Stack: React, .NET, TypeScript.",
      skills: ["React", ".NET", "TypeScript", "Architecture"],
      social: { linkedin: "#" }
    },
    {
      name: "Julian Lingurini",
      role: "Backend & Database Specialist",
      bio: "Experto en modelado de datos y optimización de queries, con foco en escalabilidad en la nube. Stack: SQL, .NET, AWS.",
      skills: ["SQL", ".NET", "AWS", "Database"],
      social: { linkedin: "#" }
    },
    {
      name: "Tomas Corujo",
      role: "Full-stack Developer",
      bio: "Full-stack Developer con versatilidad en distintas capas de desarrollo. Apasionado por la integración de tecnologías y despliegues ágiles. Stack: Docker, PHP, React.",
      skills: ["Docker", "PHP", "React", "DevOps"],
      social: { linkedin: "#" }
    },
    {
      name: "Bruno Maturano",
      role: "Full-stack Developer",
      bio: "Enfocado en construir aplicaciones robustas y escalables con enfoque en buenas prácticas. Stack: React, .NET, Java, Spring Boot.",
      skills: ["React", ".NET", "Java", "Spring Boot"],
      social: { linkedin: "#" }
    },
    {
      name: "Maximo Schmith",
      role: "Frontend Developer & UX/UI Designer",
      bio: "Especialista en interfaces limpias y centradas en el usuario. Stack: React, Figma, TypeScript.",
      skills: ["React", "Figma", "TypeScript", "UI/UX"],
      social: { linkedin: "#" }
    }
  ];

  function renderStats() {
    return stats.map(function(stat, index) {
      const Icon = stat.icon;
      return (
        <div 
          key={stat.label}
          className="text-center glass-card p-6 hover-glow hover-lift transition-all duration-300"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="inline-flex p-3 rounded-lg bg-surface-elevated border border-primary/20 mb-4">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div className="text-3xl md:text-4xl font-bold text-accent-neon mb-2">
            {stat.number}
          </div>
          <div className="text-sm text-muted-foreground">
            {stat.label}
          </div>
        </div>
      );
    });
  }

  function renderTeam() {
    return team.map(function(member, index) {
      return (
        <div 
          key={member.name}
          className="group glass-card p-8 hover-glow hover-lift transition-all duration-500 text-center"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center text-2xl font-bold text-white">
            {member.name.split(' ').map(function(n){ return n[0]; }).join('')}
          </div>
          
          <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {member.name}
          </h4>
          
          <div className="text-accent-neon text-sm font-semibold mb-4">
            {member.role}
          </div>
          
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            {member.bio}
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {member.skills.map(function(skill) {
              return (
                <span 
                  key={skill}
                  className="text-xs bg-surface-elevated px-2 py-1 rounded-full text-text-dim border border-border/50"
                >
                  {skill}
                </span>
              );
            })}
          </div>
          
          <div className="flex justify-center">
            <Button variant="ghost" size="icon" className="hover:text-accent-neon" asChild>
              <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      );
    });
  }

  return (
    <Section id="about" className="bg-surface/30">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="gradient-text">Sobre Zenithium</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Somos un equipo apasionado de desarrolladores y diseñadores comprometidos con transformar ideas 
          innovadoras en soluciones tecnológicas que impulsan el crecimiento de nuestros clientes.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {renderStats()}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div className="glass-card p-8 hover-glow">
          <h3 className="text-2xl font-bold mb-4 text-accent-neon">Nuestra Misión</h3>
          <p className="text-muted-foreground leading-relaxed">
            Democratizar el acceso a la tecnología de vanguardia, ayudando a empresas de todos los tamaños 
            a digitalizar sus procesos y alcanzar su máximo potencial a través de soluciones innovadoras, 
            escalables y centradas en el usuario.
          </p>
        </div>
        
        <div className="glass-card p-8 hover-glow">
          <h3 className="text-2xl font-bold mb-4 text-accent-purple">Nuestra Visión</h3>
          <p className="text-muted-foreground leading-relaxed">
            Ser la empresa líder en desarrollo de software en América Latina, reconocida por nuestra 
            excelencia técnica, innovación constante y por construir relaciones duraderas basadas en 
            la confianza y resultados excepcionales.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Conoce a Nuestro <span className="gradient-text">Equipo</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {renderTeam()}
        </div>
      </div>

      <div className="text-center">
        <Button variant="hero" size="lg" className="hover-lift">
          <Users className="w-5 h-5" />
          Únete a Nuestro Equipo
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </Section>
  );
}