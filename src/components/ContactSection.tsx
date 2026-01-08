import { Button } from "@/components/ui/button";
import { Phone, Instagram, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const ContactSection = () => {
  const whatsappLink = buildWhatsAppLink({ phone: "5584999908241" });

  return (
    <section id="contato" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Contato
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-3 mb-4">
            Agende sua Sessão
          </h2>
          <p className="text-muted-foreground mb-12">
            Entre em contato para verificar disponibilidade de horários e dar o
            primeiro passo para cuidar da sua saúde emocional.
          </p>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-card rounded-2xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center"
            >
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                <Phone className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
              <p className="text-muted-foreground">(84) 99990-8241</p>
            </a>

            <a
              href="https://www.instagram.com/psicologa_aldenilzafreitas?igsh=cDllY2hxb2pjYXk5"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-card rounded-2xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center"
            >
              <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-pink-200 transition-colors">
                <Instagram className="w-7 h-7 text-pink-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Instagram</h3>
              <p className="text-muted-foreground">@psicologa_aldenilzafreitas</p>
            </a>
          </div>

          {/* CTA Button */}
          <Button
            variant="whatsapp"
            asChild
            className="group"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Agendar pelo WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
