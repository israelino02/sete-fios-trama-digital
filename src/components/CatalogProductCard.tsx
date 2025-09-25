import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/data/products";

interface CatalogProductCardProps {
  product: Product;
  onClick: () => void;
}

export const CatalogProductCard = ({ product, onClick }: CatalogProductCardProps) => {
  return (
    <Card 
      className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
      onClick={onClick}
    >
      <CardContent className="p-0">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden rounded-t-lg">
          <img
            src={product.imagens[0]}
            alt={product.nome}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          
          {/* Characteristics Tags */}
          <div className="absolute top-2 left-2 flex flex-wrap gap-1">
            {product.caracteristicas.slice(0, 2).map((caracteristica, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-xs bg-background/80 backdrop-blur-sm text-foreground"
              >
                {caracteristica}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Content */}
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {product.nome}
            </h3>
            <Badge variant="outline" className="text-xs">
              {product.codigo}
            </Badge>
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {product.descricao}
          </p>
          
          {/* Additional characteristics */}
          <div className="flex flex-wrap gap-1">
            {product.caracteristicas.slice(2).map((caracteristica, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-xs"
              >
                {caracteristica}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};