import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button-glow";
import { Menu, X, Code2 } from "lucide-react";

export default function Navigation() {
  var isOpenState = useState(false);
  var isOpen = isOpenState[0];
  var setIsOpen = isOpenState[1];

  var isScrolledState = useState(false);
  var isScrolled = isScrolledState[0];
  var setIsScrolled = isScrolledState[1];

  useEffect(function () {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", handleScroll);
    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  var navItems = [
    { label: "Inicio", href: "#hero" },
    { label: "Servicios", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Nosotros", href: "#about" },
    { label: "Contacto", href: "#contact" },
  ];

  function scrollToSection(href) {
    var element = document.querySelector(href === "#hero" ? "section" : href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  }

  function renderNavItems() {
    return navItems.map(function (item) {
      return (
        <button
          key={item.label}
          onClick={function () {
            scrollToSection(item.href);
          }}
          className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
        >
          {item.label}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
        </button>
      );
    });
  }

  function renderMobileNavItems() {
    return navItems.map(function (item) {
      return (
        <button
          key={item.label}
          onClick={function () {
            scrollToSection(item.href);
          }}
          className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors duration-200 py-2"
        >
          {item.label}
        </button>
      );
    });
  }

  return (
    <nav
      className={
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 " +
        (isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/20 shadow-lg" : "bg-transparent")
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">Zenithium</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {renderNavItems()}
            <Button
              variant="hero"
              size="sm"
              className="ml-4 rounded-lg"
              onClick={function () {
                scrollToSection("#contact");
              }}
            >
              Consulta Gratis
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={function () {
                setIsOpen(!isOpen);
              }}
              className="text-foreground hover:bg-surface-elevated"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-card border border-border/20 mx-4 rounded-lg shadow-xl animate-fade-in">
            <div className="px-6 py-4 space-y-4">
              {renderMobileNavItems()}
              <div className="pt-4 border-t border-border/20">
                <Button
                  variant="hero"
                  size="sm"
                  className="w-full"
                  onClick={function () {
                    scrollToSection("#contact");
                  }}
                >
                  Consulta Gratis
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
