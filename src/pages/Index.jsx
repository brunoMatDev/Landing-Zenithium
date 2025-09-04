import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import { Button } from "@/components/ui/button-glow";
import { Linkedin } from "lucide-react";

export default function Index() {
  function renderFooter() {
    return (
      <footer className="bg-surface-elevated border-t border-border/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <div className="w-6 h-6 flex items-center justify-center text-white font-bold">Z</div>
              </div>
              <span className="text-xl font-bold gradient-text">Zenithium</span>
            </div>
            <p className="text-muted-foreground mb-4">Transformando ideas en soluciones tecnológicas de vanguardia</p>
            <div className="flex justify-center mb-4">
              <Button variant="ghost" size="icon" className="hover:text-accent-neon" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Zenithium">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
            </div>
            <div className="text-sm text-text-dim">© 2024 Zenithium. Todos los derechos reservados.</div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <div className="min-h-screen bg-surface/50">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      {renderFooter()}
    </div>
  );
}
