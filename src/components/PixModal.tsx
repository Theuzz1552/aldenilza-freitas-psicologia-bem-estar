import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface PixModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PixModal = ({ open, onOpenChange }: PixModalProps) => {
  const [copied, setCopied] = useState(false);
  
  const pixKey = "84999908241";
  const pixCopyPaste = "00020126580014br.gov.bcb.pix0136849999082415204000053039865802BR5925ANTONIA ALDENILZA LOPES D6009SAO PAULO62140510Psicologia63041D3A";
  
  const handleCopy = () => {
    navigator.clipboard.writeText(pixCopyPaste);
    setCopied(true);
    toast.success("Código Pix copiado!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center font-display text-2xl">
            Pagamento via Pix
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* QR Code Placeholder - você pode substituir por um QR code real */}
          <div className="flex justify-center">
            <div className="w-48 h-48 bg-white p-3 rounded-xl border-2 border-border">
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(pixCopyPaste)}`}
                alt="QR Code Pix"
                className="w-full h-full"
              />
            </div>
          </div>
          
          {/* Pix Info */}
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Chave Pix (Telefone):</strong> {pixKey}
            </p>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Banco:</strong> 0260 – Nu Pagamentos S.A.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Titular:</strong> Antônia Aldenilza Lopes de Freitas
            </p>
          </div>
          
          {/* Copy Paste Section */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-center text-foreground">
              Pix Copia e Cola:
            </p>
            <div className="p-3 bg-secondary rounded-lg text-xs text-muted-foreground break-all font-mono">
              {pixCopyPaste}
            </div>
            <Button 
              onClick={handleCopy} 
              className="w-full"
              variant={copied ? "default" : "outline"}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Copiado!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-2" />
                  Copiar código Pix
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PixModal;
