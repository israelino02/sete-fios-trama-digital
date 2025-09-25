import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Phone, MessageCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { products } from "@/data/products";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: ""
  });

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
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', { ...formData, produto: product.nome });
    // Implementar envio do formulário
  };

  const handleDownloadFicha = () => {
    if (product.link_ficha_tecnica) {
      window.open(product.link_ficha_tecnica, '_blank');
    }
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
          {/* Galeria de Imagens */}
          <div>
            {/* Imagem Principal */}
            <div className="aspect-square mb-4 overflow-hidden rounded-lg border bg-card">
              <img
                src={product.imagens[selectedImage]}
                alt={`${product.nome} - Imagem ${selectedImage + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-2">
              {product.imagens.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-md border-2 transition-colors ${
                    selectedImage === index 
                      ? 'border-primary' 
                      : 'border-border hover:border-muted-foreground'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.nome} - Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
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

            {/* Ações Rápidas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <Button 
                onClick={handleWhatsAppContact}
                className="bg-green-600 hover:bg-green-700"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              <Button 
                onClick={handleDownloadFicha}
                variant="outline"
              >
                <Download className="w-4 h-4 mr-2" />
                Ficha Técnica
              </Button>
            </div>

            {/* Formulário de Contato */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Solicitar Informações
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Seu nome"
                        value={formData.nome}
                        onChange={(e) => setFormData({...formData, nome: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Seu e-mail"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Seu telefone"
                      value={formData.telefone}
                      onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Sua mensagem (opcional)"
                      value={formData.mensagem}
                      onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Enviar Solicitação
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;