import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Produto não encontrado</h1>
          <Link to="/catalogo">
            <Button>Voltar ao Catálogo</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleWhatsAppContact = () => {
    const message = `Olá! Tenho interesse no tecido ${product.nome} - Código: ${product.codigo}. Gostaria de mais informações!`;
    const whatsappUrl = `https://wa.me/5581994616071?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };


  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-white py-8">
        <div className="container mx-auto px-4">
          <Link 
            to="/catalogo" 
            className="inline-flex items-center text-white hover:text-white/80 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar ao Catálogo
          </Link>
          <h1 className="font-display text-3xl md:text-4xl font-bold">
            {product.nome}
          </h1>
          <p className="text-white/90 text-lg">Código: {product.codigo}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Imagem Principal */}
          <div>
            <div className="aspect-square mb-4 overflow-hidden rounded-lg border bg-card">
              <img
                src={product.imagens[selectedImage]}
                alt={`${product.nome} - Imagem ${selectedImage + 1}`}
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

          {/* Informações do Produto */}
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Descrição</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{product.descricao}</p>
                
                {product.composicao && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Composição:</h4>
                    <p className="text-muted-foreground">{product.composicao}</p>
                  </div>
                )}
                
                {product.recomendacoes && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Recomendações de Uso:</h4>
                    <p className="text-muted-foreground">{product.recomendacoes}</p>
                  </div>
                )}
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Características:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.caracteristicas.map((caracteristica, index) => (
                      <Badge key={index} variant="secondary">
                        {caracteristica}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ação Rápida */}
            <div className="mb-6">
              <Button 
                onClick={handleWhatsAppContact}
                className="bg-green-600 hover:bg-green-700 w-full"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Entrar em Contato via WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Galeria de Cores */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Cores Disponíveis
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {product.imagens.map((image, index) => {
              const colorName = image
                .split('/').pop()
                ?.replace(/^[a-z]+-/, '')
                .replace(/-novo\.jpg$/, '.jpg')
                .replace(/\.jpg$/, '')
                .replace(/-/g, ' ')
                .toUpperCase() || `Cor ${index + 1}`;
              
              return (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                    selectedImage === index 
                      ? 'border-primary shadow-lg' 
                      : 'border-border hover:border-muted-foreground hover:shadow-md'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.nome} - ${colorName}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-0 left-0 right-0 bg-black/70 text-white text-xs py-1 px-2 text-center font-medium">
                    {colorName}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;