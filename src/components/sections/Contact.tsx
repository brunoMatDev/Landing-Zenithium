import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button-glow";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle,
  Calendar,
  Linkedin,
  Github,
  Twitter
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Section id="contact" className="bg-gradient-to-b from-background to-surface/50">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="gradient-text">Hablemos</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          ¿Tienes un proyecto en mente? Nos encantaría conocer tu idea y ayudarte a hacerla realidad.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Conecta con <span className="text-accent-neon">Nosotros</span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Estamos aquí para convertir tus ideas en soluciones tecnológicas excepcionales. 
              Contáctanos para una consulta gratuita.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 glass-card p-6 hover-glow">
              <div className="p-3 rounded-lg bg-accent-neon/10 border border-accent-neon/20">
                <Mail className="w-6 h-6 text-accent-neon" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Email</div>
                <div className="text-muted-foreground">hola@zenithium.dev.ar</div>
              </div>
            </div>

            <div className="flex items-center gap-4 glass-card p-6 hover-glow">
              <div className="p-3 rounded-lg bg-accent-purple/10 border border-accent-purple/20">
                <Phone className="w-6 h-6 text-accent-purple" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Teléfono</div>
                <div className="text-muted-foreground">+54 11 1234-5678</div>
              </div>
            </div>

            <div className="flex items-center gap-4 glass-card p-6 hover-glow">
              <div className="p-3 rounded-lg bg-accent-pink/10 border border-accent-pink/20">
                <MapPin className="w-6 h-6 text-accent-pink" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Ubicación</div>
                <div className="text-muted-foreground">Buenos Aires, Argentina</div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Síguenos</h4>
            <div className="flex gap-4">
              <Button variant="glass" size="icon" className="hover:text-accent-neon hover:border-accent-neon/50">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="glass" size="icon" className="hover:text-accent-purple hover:border-accent-purple/50">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="glass" size="icon" className="hover:text-accent-pink hover:border-accent-pink/50">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-4 pt-6">
            <Button variant="neon" size="lg" className="w-full hover-lift">
              <Calendar className="w-5 h-5" />
              Agendar Reunión
            </Button>
            <Button variant="glass" size="lg" className="w-full hover-lift">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </Button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-card p-8 hover-glow">
          <h3 className="text-2xl font-bold mb-6 text-foreground">
            Cuéntanos sobre tu <span className="gradient-text">Proyecto</span>
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Nombre *
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  className="bg-surface-elevated border-border/50 focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email *
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="bg-surface-elevated border-border/50 focus:border-primary"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Empresa
              </label>
              <Input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Nombre de tu empresa (opcional)"
                className="bg-surface-elevated border-border/50 focus:border-primary"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Mensaje *
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntanos sobre tu proyecto, necesidades y objetivos..."
                className="bg-surface-elevated border-border/50 focus:border-primary min-h-[120px] resize-none"
                required
              />
            </div>

            <Button 
              type="submit" 
              variant="hero" 
              size="lg" 
              className="w-full hover-lift"
            >
              <Send className="w-5 h-5" />
              Enviar Mensaje
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-border/20 text-center">
            <p className="text-sm text-muted-foreground">
              Te responderemos en menos de 24 horas
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;