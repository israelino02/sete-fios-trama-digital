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
      <DialogContent className="max-w-5xl max-h-[95vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-display font-bold text-foreground">
            {fabric.type}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Information Boxes */}
          <div className="space-y-4">
            {/* Description */}
            <div className="bg-muted/50 p-5 rounded-lg border">
              <h3 className="font-semibold text-sm text-muted-foreground uppercase mb-2">Descrição</h3>
              <p className="text-foreground leading-relaxed">{fabric.description}</p>
            </div>

            {/* Composition */}
            <div className="bg-muted/50 p-5 rounded-lg border">
              <h3 className="font-semibold text-sm text-muted-foreground uppercase mb-2">Composição</h3>
              <p className="text-foreground font-medium">{fabric.composition}</p>
            </div>

            {/* Recommended Use */}
            <div className="bg-muted/50 p-5 rounded-lg border">
              <h3 className="font-semibold text-sm text-muted-foreground uppercase mb-2">Uso Recomendado</h3>
              <p className="text-foreground leading-relaxed">{fabric.recommendedUse}</p>
            </div>
          </div>

          {/* Swatches */}
          <SwatchGrid colors={fabric.colors} fabric={fabric} />

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
