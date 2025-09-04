import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button-glow";
import { ArrowRight, Code2, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "Desarrollamos el futuro digital";

  function typeEffect() {
    if (!isDeleting && currentIndex < fullText.length) {
      setDisplayedText(function (prev) {
        return prev + fullText[currentIndex];
      });
      setCurrentIndex(function (prev) {
        return prev + 1;
      });
    } else if (!isDeleting && currentIndex === fullText.length) {
      setTimeout(function () {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayedText.length > 0) {
      setDisplayedText(function (prev) {
        return prev.slice(0, -1);
      });
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentIndex(0);
    }
  }

  useEffect(
    function () {
      const timeout = setTimeout(typeEffect, isDeleting ? 50 : 100);
      return function () {
        clearTimeout(timeout);
      };
    },
    [currentIndex, displayedText, isDeleting, fullText]
  );

  function scrollToContact() {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section className="flex flex-col min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Technology Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-primary opacity-20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-neon opacity-15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 min-w-5xl mt-8">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in stagger-1">
          <span className="gradient-text block mb-2">Zenithium</span>
          <span className="text-white/90 text-4xl md:text-6xl font-normal">
            {displayedText}
            <span className="animate-pulse text-primary">|</span>
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in stagger-2">
          Transformamos ideas innovadoras en soluciones tecnológicas de vanguardia.
          <span className="text-accent-neon"> Especialistas en desarrollo web, móvil y cloud.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in stagger-3">
          <Button variant="hero" size="xl" className="hover-lift group p-3">
            <Code2 className="w-5 h-5 text-white" />
            Ver Nuestros Proyectos
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>

          <Button variant="glass" size="xl" className="hover-lift p-3" onClick={scrollToContact}>
            <Zap className="w-5 h-5" />
            Contactar Equipo
          </Button>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-fade-in stagger-4">
        <div className="glass-card p-6 hover-glow hover-lift">
          <div className="text-3xl font-bold text-accent-neon mb-2">100+</div>
          <div className="text-muted-foreground">Proyectos Completados</div>
        </div>
        <div className="glass-card p-6 hover-glow hover-lift">
          <div className="text-3xl font-bold text-accent-purple mb-2">4+</div>
          <div className="text-muted-foreground">Años de Experiencia</div>
        </div>
        <div className="glass-card p-6 hover-glow hover-lift">
          <div className="text-3xl font-bold text-accent-pink mb-2">24/7</div>
          <div className="text-muted-foreground">Soporte Técnico</div>
        </div>
      </div>
    </section>
  );
}
