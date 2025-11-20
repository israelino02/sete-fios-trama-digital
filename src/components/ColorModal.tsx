import * as React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Fabric } from "@/data/fabrics";
import { SwatchGrid } from "./SwatchGrid";
import { WhatsAppButton } from "./WhatsAppButton";

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
            <WhatsAppButton
              message={`Olá! Gostaria de fazer um orçamento para o tecido ${fabric.type}.`}
              size="lg"
              className="bg-gradient-primary hover:scale-105 transition-all duration-300"
            >
              Fazer orçamento
            </WhatsAppButton>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
