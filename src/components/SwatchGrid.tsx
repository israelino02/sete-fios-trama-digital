import * as React from "react";
import { ColorSwatch, Fabric } from "@/data/fabrics";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
import estMasc3 from "@/assets/romantik-estampado-masc-3.jpg";
import estMasc4 from "@/assets/romantik-estampado-masc-4.jpg";
import estMasc6 from "@/assets/romantik-estampado-masc-6.jpg";
import estFem1 from "@/assets/romantik-estampado-fem-1.jpg";
import estFem2 from "@/assets/romantik-estampado-fem-2.jpg";
import estFem3 from "@/assets/romantik-estampado-fem-3.jpg";
import estInf5 from "@/assets/romantik-estampado-infantil-5.jpg";
import estInf6 from "@/assets/romantik-estampado-infantil-6.jpg";
import estInf7 from "@/assets/romantik-estampado-infantil-7.jpg";

// Override map for swatch images that need static imports
const swatchImageOverrides: Record<string, string> = {
  "/lovable-uploads/romantik-estampado-masculino-3.jpg": estMasc3,
  "/lovable-uploads/romantik-estampado-masculino-4.jpg": estMasc4,
  "/lovable-uploads/romantik-estampado-masculino-6.jpg": estMasc6,
  "/lovable-uploads/romantik-estampado-fem-1.jpg": estFem1,
  "/lovable-uploads/romantik-estampado-fem-2.jpg": estFem2,
  "/lovable-uploads/romantik-estampado-fem-3.jpg": estFem3,
  "/lovable-uploads/romantik-estampado-infantil-5.jpg": estInf5,
  "/lovable-uploads/romantik-estampado-infantil-6.jpg": estInf6,
  "/lovable-uploads/romantik-estampado-infantil-7.jpg": estInf7,
};

const getSwatchSrc = (swatch: string) => swatchImageOverrides[swatch] || swatch;

interface SwatchGridProps {
  colors: ColorSwatch[];
  fabric?: Fabric;
}

export const SwatchGrid = ({ colors, fabric }: SwatchGridProps) => {
  const [selectedSwatch, setSelectedSwatch] = React.useState<ColorSwatch | null>(null);

  const handleBudgetRequest = (color?: ColorSwatch) => {
    const fabricName = fabric?.type || "";
    const colorName = color?.name || "";
    const message = colorName
      ? `Olá! Vim do SITE e gostaria de solicitar um orçamento do subtecido *${fabricName}* na cor *${colorName}*.`
      : `Olá! Vim do SITE e gostaria de solicitar um orçamento do subtecido *${fabricName}*.`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5581994616071&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

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
                  src={getSwatchSrc(color.swatch)}
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
                  src={getSwatchSrc(selectedSwatch.swatch)}
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
                <Button
                  size="lg"
                  onClick={() => handleBudgetRequest(selectedSwatch || undefined)}
                  className="bg-gradient-primary hover:scale-105 transition-all duration-300"
                >
                  Fazer orçamento
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
