import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Name */}
          <h3 className="font-display text-2xl font-semibold mb-2">
            Aldenilza Freitas
          </h3>
          <p className="text-background/70 mb-6">
            Psicóloga Clínica | CRP 17/8503
          </p>

          {/* Tagline */}
          <p className="text-sm text-background/60 flex items-center justify-center gap-2 mb-8">
            Atendimento ético, humano e comprometido com o seu bem-estar emocional
            <Heart className="w-4 h-4 text-accent" fill="currentColor" />
          </p>

          {/* Divider */}
          <div className="w-16 h-px bg-background/20 mx-auto mb-6" />

          {/* Copyright */}
          <p className="text-xs text-background/50">
            © {new Date().getFullYear()} Aldenilza Freitas. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
