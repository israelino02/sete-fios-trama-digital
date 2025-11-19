import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Download, MessageCircle, X } from "lucide-react";
import { Product } from "@/data/products";
import { useState } from "react";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) return null;

  const handleWhatsAppContact = () => {
    const message = `Olá! Tenho interesse no produto ${product.nome} (Código: ${product.codigo}). Gostaria de mais informações.`;
    window.open(`https://api.whatsapp.com/send?phone=5581994616071&text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleDownloadCatalog = () => {
    // Implementar download do catálogo
    console.log('Download do catálogo');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-foreground">
              {product.nome}
            </DialogTitle>
            <Badge variant="outline" className="text-sm">
              Código: {product.codigo}
            </Badge>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square overflow-hidden rounded-lg border border-border">
              <img
                src={product.imagens[selectedImageIndex]}
                alt={`${product.nome} - Imagem ${selectedImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Gallery */}
            {product.imagens.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {product.imagens.map((imagem, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                      index === selectedImageIndex 
                        ? 'border-primary' 
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <img
                      src={imagem}
                      alt={`${product.nome} - Miniatura ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Description */}
            <div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Descrição</h3>
              <p className="text-muted-foreground">{product.descricao}</p>
            </div>

            {/* Composition */}
            {product.composicao && (
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Composição</h3>
                <p className="text-muted-foreground">{product.composicao}</p>
              </div>
            )}

            {/* Recommendations */}
            {product.recomendacoes && (
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Recomendações de Uso</h3>
                <p className="text-muted-foreground">{product.recomendacoes}</p>
              </div>
            )}

            <Separator />

            {/* Characteristics */}
            <div>
              <h3 className="font-semibold text-lg mb-3 text-foreground">Características</h3>
              <div className="flex flex-wrap gap-2">
                {product.caracteristicas.map((caracteristica, index) => (
                  <Badge key={index} variant="secondary">
                    {caracteristica}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button 
                onClick={handleWhatsAppContact}
                className="w-full bg-gradient-primary hover:scale-105 transition-all duration-300"
                size="lg"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Solicitar Orçamento via WhatsApp
              </Button>
              
              <Button 
                variant="outline" 
                onClick={handleDownloadCatalog}
                className="w-full"
                size="lg"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Catálogo Completo
              </Button>
              
              {product.link_ficha_tecnica && (
                <Button 
                  variant="outline" 
                  asChild
                  className="w-full"
                  size="lg"
                >
                  <a href={product.link_ficha_tecnica} target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 mr-2" />
                    Ficha Técnica (PDF)
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