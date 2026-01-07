import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("home")}
          className="font-display text-xl font-semibold text-foreground hover:text-primary transition-colors"
        >
          Aldenilza Freitas
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("sobre")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("servicos")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection("investimento")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Investimento
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contato
          </button>
          <Button
            variant="hero"
            size="sm"
            className="px-6 py-2 h-auto"
            onClick={() => scrollToSection("contato")}
          >
            Agendar Sessão
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg py-6 animate-fade-in">
          <nav className="flex flex-col items-center gap-4">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("investimento")}
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Investimento
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contato
            </button>
            <Button
              variant="hero"
              size="sm"
              className="px-6 py-2 h-auto mt-2"
              onClick={() => scrollToSection("contato")}
            >
              Agendar Sessão
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
