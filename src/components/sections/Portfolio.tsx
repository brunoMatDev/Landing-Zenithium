import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button-glow";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import ecommerceImg from "@/assets/ecomerce.jpeg";
import fintechImg from "@/assets/fintech.jpeg";
import healthImg from "@/assets/healthsys.jpeg";

const projects = [
  {
    title: "EcoMarket Pro",
    category: "E-Commerce",
    description: "Plataforma de comercio electrónico completa con pasarela de pagos, gestión de inventario y analytics avanzados. Desarrollada con React, Node.js y PostgreSQL.",
    image: ecommerceImg,
    tech: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "FinanceTracker",
    category: "FinTech",
    description: "Aplicación móvil para gestión financiera personal con IA predictiva y análisis de gastos en tiempo real.",
    image: fintechImg,
    tech: ["React Native", "Python", "Machine Learning", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "MediCare System",
    category: "HealthTech",
    description: "Sistema de gestión hospitalaria con telemedicina integrada, historiales médicos digitales y programación de citas.",
    image: healthImg,
    tech: ["Next.js", "TypeScript", "Prisma", "WebRTC"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

const Portfolio = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <Section id="portfolio" className="bg-gradient-to-b from-surface/30 to-background">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="gradient-text">Nuestro Portfolio</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Proyectos que demuestran nuestra expertise en tecnologías de vanguardia y diseño innovador
        </p>
      </div>

      {/* Featured Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {featuredProjects.map((project, index) => (
          <div 
            key={project.title}
            className="group relative glass-card overflow-hidden hover-glow hover-lift transition-all duration-500"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold text-primary bg-surface-elevated px-2 py-1 rounded-full border border-primary/20">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-glow transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="text-xs bg-surface-elevated px-3 py-1 rounded-full text-text-dim border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button variant="neon" size="sm" className="flex-1">
                  <ExternalLink className="w-4 h-4" />
                  Ver Proyecto
                </Button>
                <Button variant="ghost" size="sm">
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Other Projects Grid */}
      {otherProjects.length > 0 && (
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Más Proyectos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div 
                key={project.title}
                className="group glass-card p-6 hover-glow hover-lift transition-all duration-300"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                <span className="text-xs font-semibold text-accent-purple bg-surface-elevated px-2 py-1 rounded-full border border-accent-purple/20">
                  {project.category}
                </span>
                
                <h4 className="text-lg font-bold mt-3 mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="flex-1 text-xs">
                    <ExternalLink className="w-3 h-3" />
                    Ver
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="text-center">
        <Button variant="hero" size="lg" className="hover-lift">
          <Github className="w-5 h-5" />
          Ver Todos los Proyectos
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </Section>
  );
};

export default Portfolio;
