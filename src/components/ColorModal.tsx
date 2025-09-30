import * as React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Fabric } from "@/data/fabrics";
import { SwatchGrid } from "./SwatchGrid";

interface ColorModalProps {
  fabric: Fabric | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ColorModal = ({ fabric, isOpen, onClose }: ColorModalProps) => {
  if (!fabric) return null;

  const handleBudgetRequest = () => {
    const message = `Olá! Gostaria de fazer um orçamento para o tecido ${fabric.type}.`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-bold text-foreground">
            {fabric.type}
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4"
            onClick={onClose}
            aria-label="Fechar"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Description */}
          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-foreground leading-relaxed">{fabric.description}</p>
          </div>

          {/* Swatches */}
          <SwatchGrid colors={fabric.colors} />

          {/* Budget button */}
          <div className="flex justify-center pt-4 border-t">
            <Button
              onClick={handleBudgetRequest}
              size="lg"
              className="bg-gradient-primary hover:scale-105 transition-all duration-300"
            >
              Fazer orçamento
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
