import * as React from "react";
import { ColorSwatch, Fabric } from "@/data/fabrics";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
import { WhatsAppButton } from "./WhatsAppButton";

interface SwatchGridProps {
  colors: ColorSwatch[];
  fabric?: Fabric;
}

export const SwatchGrid = ({ colors, fabric }: SwatchGridProps) => {
  const [selectedSwatch, setSelectedSwatch] = React.useState<ColorSwatch | null>(null);

  if (colors.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">Nenhuma cor disponível no momento.</p>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-4">
        <h3 className="font-semibold text-lg text-foreground mb-4">Cores disponíveis:</h3>
        
        {/* Color swatches grid with names below each swatch */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {colors.map((color) => (
            <div
              key={color.code}
              className="group cursor-pointer space-y-2"
              onClick={() => setSelectedSwatch(color)}
              title="Clique para ampliar"
            >
              {/* Swatch */}
              <div className="aspect-square rounded-lg overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:scale-105">
                <ImageWithSkeleton
                  src={color.swatch}
                  alt={`${color.name} - ${color.code}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover will-change-transform"
                  aspectRatio="aspect-square"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              {/* Color name below swatch - only name, no code */}
              <div className="text-center">
                <p className="text-sm font-medium text-foreground">{color.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox for enlarged swatch */}
      <Dialog open={!!selectedSwatch} onOpenChange={() => setSelectedSwatch(null)}>
        <DialogContent className="max-w-3xl">
          {selectedSwatch && (
            <div className="space-y-6 p-2">
              {/* Color name and code */}
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-display font-bold text-foreground">
                  {selectedSwatch.name}
                </h2>
                <p className="text-xl text-muted-foreground font-medium">
                  Código: {selectedSwatch.code}
                </p>
              </div>
              
              {/* Enlarged swatch image */}
              <div className="aspect-square w-full max-w-xl mx-auto rounded-lg overflow-hidden border-2 shadow-lg">
                <img
                  src={selectedSwatch.swatch}
                  alt={`${selectedSwatch.name} - ${selectedSwatch.code}`}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
              </div>

              {/* Action buttons */}
              <div className="flex gap-4 justify-center pt-4">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setSelectedSwatch(null)}
                >
                  Fechar
                </Button>
                <WhatsAppButton
                  message={selectedSwatch && fabric ? `Olá! Gostaria de fazer um orçamento para:\n\nTecido: ${fabric.type}\nCor: ${selectedSwatch.name}\nCódigo: ${selectedSwatch.code}` : ""}
                  size="lg"
                  className="bg-gradient-primary hover:scale-105 transition-all duration-300"
                  disabled={!selectedSwatch || !fabric}
                >
                  Fazer orçamento
                </WhatsAppButton>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
