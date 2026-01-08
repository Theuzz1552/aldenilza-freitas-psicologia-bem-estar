import { CreditCard, Banknote, Smartphone, AlertCircle, ExternalLink } from "lucide-react";
import { useState } from "react";
import PixModal from "./PixModal";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const InvestmentSection = () => {
  const [pixModalOpen, setPixModalOpen] = useState(false);

  // Substitua pelo seu link de pagamento real (PagSeguro, Mercado Pago, etc.)
  const cardPaymentLink = buildWhatsAppLink({
    phone: "5584999908241",
    text: "Olá! Gostaria de pagar com cartão de crédito.",
  });

  return (
    <section id="investimento" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Investimento
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-3">
              Valores e formas de pagamento
            </h2>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Single Session */}
            <div className="p-8 bg-card rounded-2xl border border-border text-center">
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Sessão Avulsa
              </h3>
              <div className="my-6">
                <span className="text-4xl font-display font-bold text-foreground">
                  R$ 125
                </span>
                <span className="text-muted-foreground">,00</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Ideal para quem deseja conhecer o processo terapêutico
              </p>
            </div>

            {/* Monthly Package */}
            <div className="p-8 bg-primary rounded-2xl text-center relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                Mais Popular
              </div>
              <h3 className="font-display text-xl font-semibold text-primary-foreground mb-2">
                Pacote Mensal
              </h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                04 sessões
              </p>
              <div className="my-6">
                <span className="text-4xl font-display font-bold text-primary-foreground">
                  R$ 400
                </span>
                <span className="text-primary-foreground/80">,00</span>
              </div>
              <p className="text-sm text-primary-foreground/80">
                Economia de R$ 100 em relação às sessões avulsas
              </p>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="p-8 bg-card rounded-2xl border border-border">
            <h3 className="font-display text-lg font-semibold text-foreground mb-6 text-center">
              Formas de Pagamento
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <button 
                onClick={() => setPixModalOpen(true)}
                className="flex items-center gap-3 justify-center p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer group"
              >
                <Smartphone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-foreground font-medium">Pix</span>
              </button>
              <div className="flex items-center gap-3 justify-center p-4 rounded-xl bg-secondary/30">
                <Banknote className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Dinheiro</span>
              </div>
              <a 
                href={cardPaymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 justify-center p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer group"
              >
                <CreditCard className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-foreground font-medium">
                  Cartão de crédito*
                </span>
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-4">
              *Com acréscimo
            </p>

          </div>

          {/* Important Notice */}
          <div className="mt-8 p-6 bg-terracotta-light/50 rounded-2xl border border-accent/20">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Importante
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  O agendamento deve ser realizado{" "}
                  <strong>antes da primeira sessão</strong>. Sem a confirmação
                  do pagamento, não haverá reserva de horário.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Política de Reagendamento:</strong> Cancelamentos
                  devem ser feitos com mínimo de 6 horas de antecedência. Caso
                  contrário, a sessão será contabilizada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <PixModal open={pixModalOpen} onOpenChange={setPixModalOpen} />
    </section>
  );
};

export default InvestmentSection;
