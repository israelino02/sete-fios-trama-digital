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
    <div className="space-y-6">
      {/* Color names list */}
      <div className="space-y-2">
        <h3 className="font-semibold text-sm text-foreground mb-3">Cores disponíveis:</h3>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <div
              key={color.code}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted rounded-md text-sm"
            >
              <span className="font-medium text-foreground">{color.name}</span>
              <span className="text-muted-foreground">({color.code})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Color swatches grid */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {colors.map((color) => (
          <div
            key={color.code}
            className="group cursor-pointer"
            title={`${color.name} - ${color.code}`}
          >
            <div className="aspect-square rounded-lg overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:scale-105">
              <img
                src={color.swatch}
                alt={`${color.name} - ${color.code}`}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-center mt-2 text-muted-foreground group-hover:text-foreground transition-colors">
              {color.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
