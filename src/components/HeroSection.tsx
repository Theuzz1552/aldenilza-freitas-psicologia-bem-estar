import { Button } from "@/components/ui/button";
import { Heart, Video, Users } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage-light/50 via-background to-terracotta-light/30" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-in inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-8">
            <span className="text-sm font-medium text-secondary-foreground">
              Psicóloga Clínica • CRP 17/8503
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="animate-fade-in-up font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
            É um prazer recebê-lo(a).
          </h1>

          <p className="animate-fade-in-delay text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
            Sou <span className="font-semibold text-foreground">Aldenilza Freitas</span>, psicóloga clínica, e estou aqui para te escutar, compreender e caminhar ao seu lado no processo de transformação emocional e desenvolvimento pessoal.
          </p>

          {/* Highlights */}
          <div className="animate-fade-in-delay-2 flex flex-wrap justify-center gap-6 my-10">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="w-5 h-5 text-primary" />
              <span>Atendimento humanizado</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="w-5 h-5 text-primary" />
              <span>Terapia Cognitivo-Comportamental</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Video className="w-5 h-5 text-primary" />
              <span>Online e Presencial</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" onClick={scrollToContact}>
              Agende sua Sessão
            </Button>
            <Button variant="heroOutline" onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}>
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2.5 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
