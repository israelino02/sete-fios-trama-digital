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
            {/* Description with Composition and Recommended Use */}
            <div className="bg-muted/50 p-5 rounded-lg border">
              <h3 className="font-semibold text-sm text-muted-foreground uppercase mb-3">Descrição</h3>
              <p className="text-foreground leading-relaxed mb-4">{fabric.description}</p>
              <p className="text-foreground">
                <span className="font-semibold text-primary">Composição:</span> {fabric.composition}
              </p>
              <p className="text-foreground mt-2">
                <span className="font-semibold text-primary">Uso Recomendado:</span> {fabric.recommendedUse}
              </p>
            </div>

            {/* Technical Specifications */}
            {fabric.technicalSpecs && fabric.technicalSpecs.length > 0 && (
              <div className="bg-muted/50 p-5 rounded-lg border">
                <h3 className="font-semibold text-sm text-muted-foreground uppercase mb-3">Ficha Técnica</h3>
                <div className="space-y-2">
                  {fabric.technicalSpecs.map((spec, index) => (
                    <p key={index} className="text-foreground">
                      <span className="font-semibold">{spec.label}:</span> {spec.value}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Usage Examples */}
            {fabric.usageExamples && fabric.usageExamples.length > 0 && (
              <div className="bg-muted/50 p-5 rounded-lg border">
                <h3 className="font-semibold text-sm text-muted-foreground uppercase mb-3">Possibilidades de Uso</h3>
                <ul className="list-disc list-inside space-y-1">
                  {fabric.usageExamples.map((example, index) => (
                    <li key={index} className="text-foreground">{example}</li>
                  ))}
                </ul>
              </div>
            )}
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
