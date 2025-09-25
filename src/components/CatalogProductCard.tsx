import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: string;
  nome: string;
  codigo: string;
  imagens: string[];
  descricao: string;
  caracteristicas: string[];
  link_ficha_tecnica?: string;
  category: string;
}

interface CatalogProductCardProps {
  product: Product;
  onClick: () => void;
}

export const CatalogProductCard = ({ product, onClick }: CatalogProductCardProps) => {
  return (
    <Card 
      className="group cursor-pointer overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="aspect-square bg-gradient-warm flex items-center justify-center relative overflow-hidden">
        {product.imagens.length > 0 ? (
          <img 
            src={product.imagens[0]} 
            alt={product.nome}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-primary text-2xl">📷</span>
            </div>
            <p className="text-sm text-muted-foreground">Imagem não disponível</p>
          </div>
        )}
        
        {/* Tags de características no topo */}
        <div className="absolute top-2 left-2 right-2 flex flex-wrap gap-1">
          {product.caracteristicas.slice(0, 2).map((caracteristica, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs bg-primary/90 text-primary-foreground backdrop-blur-sm"
            >
              {caracteristica}
            </Badge>
          ))}
        </div>

        {/* Categoria no canto superior direito */}
        <div className="absolute top-2 right-2">
          <Badge variant="outline" className="text-xs bg-background/90 backdrop-blur-sm">
            {product.category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {product.nome}
            </h3>
          </div>
          
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="text-xs">
              Código: {product.codigo}
            </Badge>
            {product.link_ficha_tecnica && (
              <Badge variant="outline" className="text-xs">
                Ficha Técnica
              </Badge>
            )}
          </div>
          
          <p className="text-muted-foreground text-sm line-clamp-2">
            {product.descricao}
          </p>

          {/* Características principais */}
          {product.caracteristicas.length > 2 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {product.caracteristicas.slice(2, 4).map((caracteristica, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {caracteristica}
                </Badge>
              ))}
              {product.caracteristicas.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{product.caracteristicas.length - 4} mais
                </Badge>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};