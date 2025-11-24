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
  gender?: string;
}

export const ColorModal = ({ fabric, isOpen, onClose, gender }: ColorModalProps) => {
  if (!fabric) return null;

  // Filter colors by gender if gender is specified
  const filteredColors = gender 
    ? fabric.colors.filter(color => color.gender === gender)
    : fabric.colors;

  const handleBudgetRequest = () => {
    const whatsappUrl = `https://wa.me/5581994616071?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%207%20Fios.`;
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
          {/* Swatches */}
          <SwatchGrid colors={filteredColors} fabric={fabric} />

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
