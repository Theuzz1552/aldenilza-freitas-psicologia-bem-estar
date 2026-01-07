import { Shield, Lock, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Sobre Mim
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-3">
              Conheça minha abordagem
            </h2>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Heart className="w-12 h-12 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    Aldenilza Freitas
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Psicóloga Clínica
                  </p>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sou psicóloga clínica, com atuação baseada na{" "}
                <span className="font-semibold text-foreground">
                  Terapia Cognitivo-Comportamental (TCC)
                </span>
                . Atendo{" "}
                <span className="font-semibold text-foreground">
                  adultos e pessoas idosas
                </span>
                , oferecendo um espaço seguro, acolhedor e confidencial para o
                cuidado com a saúde mental.
              </p>

              {/* Values */}
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      Ética Profissional
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Atendimento pautado no código de ética do psicólogo.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      Sigilo Absoluto
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Confidencialidade garantida, exceto em situações de risco
                      à vida.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      Acolhimento
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Espaço seguro para sua transformação emocional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
