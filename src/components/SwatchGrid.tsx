import * as React from "react";
import { ColorSwatch } from "@/data/fabrics";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SwatchGridProps {
  colors: ColorSwatch[];
}

export const SwatchGrid = ({ colors }: SwatchGridProps) => {
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
                <img
                  src={color.swatch}
                  alt={`${color.name} - ${color.code}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Color name below swatch */}
              <div className="text-center">
                <p className="text-sm font-medium text-foreground">{color.name}</p>
                <p className="text-xs text-muted-foreground">({color.code})</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox for enlarged swatch */}
      <Dialog open={!!selectedSwatch} onOpenChange={() => setSelectedSwatch(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-10 bg-background/80 hover:bg-background"
            onClick={() => setSelectedSwatch(null)}
            aria-label="Fechar"
          >
            <X className="h-4 w-4" />
          </Button>
          
          {selectedSwatch && (
            <div className="space-y-4 p-6">
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-semibold text-foreground">{selectedSwatch.name}</h3>
                <p className="text-muted-foreground">{selectedSwatch.code}</p>
              </div>
              
              <div className="aspect-square w-full rounded-lg overflow-hidden border">
                <img
                  src={selectedSwatch.swatch}
                  alt={`${selectedSwatch.name} - ${selectedSwatch.code}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
