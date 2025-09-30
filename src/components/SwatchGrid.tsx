import * as React from "react";
import { ColorSwatch } from "@/data/fabrics";

interface SwatchGridProps {
  colors: ColorSwatch[];
}

export const SwatchGrid = ({ colors }: SwatchGridProps) => {
  if (colors.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">Nenhuma cor disponível no momento.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg text-foreground mb-4">Cores disponíveis:</h3>
      
      {/* Color swatches grid with names above each swatch */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {colors.map((color) => (
          <div
            key={color.code}
            className="group cursor-pointer space-y-2"
            title={`${color.name} - ${color.code}`}
          >
            {/* Color name above swatch */}
            <div className="text-center">
              <p className="text-sm font-medium text-foreground">{color.name}</p>
              <p className="text-xs text-muted-foreground">({color.code})</p>
            </div>
            
            {/* Swatch */}
            <div className="aspect-square rounded-lg overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:scale-105">
              <img
                src={color.swatch}
                alt={`${color.name} - ${color.code}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
