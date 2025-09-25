import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Download, X } from "lucide-react";
import { useState } from "react";

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

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) return null;

  const whatsappNumber = "5511999999999";
  const message = `Olá! Tenho interesse no produto: ${product.nome} - Código: ${product.codigo}. Poderia me dar mais informações?`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{product.nome}</DialogTitle>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="secondary">Código: {product.codigo}</Badge>
            <Badge variant="outline">{product.category}</Badge>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Galeria de Imagens */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img
                src={product.imagens[currentImageIndex]}
                alt={`${product.nome} - Imagem ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            
            {product.imagens.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {product.imagens.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-colors ${
                      currentImageIndex === index 
                        ? 'border-primary' 
                        : 'border-muted hover:border-primary/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.nome} - Miniatura ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Informações do Produto */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Descrição</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.descricao}
              </p>
            </div>

            {product.caracteristicas.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Características</h3>
                <div className="flex flex-wrap gap-2">
                  {product.caracteristicas.map((caracteristica, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {caracteristica}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-3 pt-4 border-t">
              <Button 
                asChild
                size="lg" 
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Consultar no WhatsApp
                </a>
              </Button>

              {product.link_ficha_tecnica && (
                <Button 
                  asChild
                  variant="outline" 
                  size="lg" 
                  className="w-full"
                >
                  <a href={product.link_ficha_tecnica} target="_blank" rel="noopener noreferrer">
                    <Download className="w-5 h-5 mr-2" />
                    Download Ficha Técnica
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};