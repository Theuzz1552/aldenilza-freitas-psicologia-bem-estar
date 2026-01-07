import { Clock, Calendar, Video, User } from "lucide-react";

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Serviços
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-3">
              Como posso te ajudar
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Individual Therapy */}
            <div className="group p-8 bg-card rounded-2xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <User className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Psicoterapia Individual
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Sessões de 45 a 50 minutos</span>
                </li>
                <li className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Frequência inicial semanal</span>
                </li>
              </ul>
              <p className="mt-6 text-sm text-muted-foreground">
                Não há prazo pré-definido para alta. O tempo de tratamento varia
                conforme as necessidades e complexidade de cada caso.
              </p>
            </div>

            {/* Online Service */}
            <div className="group p-8 bg-card rounded-2xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Video className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Atendimento Online
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Os atendimentos online seguem os mesmos princípios éticos e
                padrões de qualidade do atendimento presencial.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Realizados em plataforma digital previamente acordada com o
                paciente, proporcionando comodidade sem perder a qualidade do
                cuidado.
              </p>
            </div>
          </div>

          {/* Reflection Box */}
          <div className="mt-16 p-8 md:p-12 bg-gradient-to-br from-sage-light/50 to-terracotta-light/30 rounded-3xl text-center">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Psicoterapia: um convite à reflexão
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Se você chegou até aqui, talvez seja o momento de se perguntar:
            </p>
            <p className="font-display text-xl md:text-2xl text-primary italic">
              "O que posso transformar em mim com a ajuda da psicoterapia?"
            </p>
            <p className="text-muted-foreground mt-6">
              Permita-se esse cuidado. Estou aqui para te ouvir e te acompanhar
              nesse processo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
