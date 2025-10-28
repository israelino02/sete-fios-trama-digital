import { ProductCard } from "@/components/ProductCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Package } from "lucide-react";

const OutrosProdutos = () => {
  const whatsappNumber = "5511999999999";
  const message = "Olá! Gostaria de saber mais sobre os aviamentos e acessórios da 7 Fios.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const vies = [
    { name: "Viés de poliamida 16mm", description: "Viés de poliamida largura 16mm para acabamentos duráveis e resistentes.", image: "/lovable-uploads/vies-poliamida.jpg" },
    { name: "Viés de poliamida 25mm", description: "Viés de poliamida largura 25mm para acabamentos duráveis e resistentes.", image: "/lovable-uploads/vies-poliamida-25mm.jpg" },
    { 
      name: "Viés de poliamida Paraná", 
      description: "Viés de poliamida Paraná disponível em diversas cores para acabamentos de alta qualidade.", 
      images: [
        "/lovable-uploads/vies-parana-1.jpg",
        "/lovable-uploads/vies-parana-2.jpg",
        "/lovable-uploads/vies-parana-3.jpg",
        "/lovable-uploads/vies-parana-4.jpg",
        "/lovable-uploads/vies-parana-5.jpg",
        "/lovable-uploads/vies-parana-6.jpg",
        "/lovable-uploads/vies-parana-7.jpg",
        "/lovable-uploads/vies-parana-8.jpg"
      ]
    }
  ];

  const elasticos = [
    { 
      name: "Elásticos personalizados", 
      description: "Crie elásticos com sua marca",
      image: "/lovable-uploads/elasticos-personalizados.jpg"
    },
    { 
      name: "Elástico liso", 
      description: "Elásticos lisos de alta qualidade disponíveis em diversas cores. Largura 25MM, 30MM e 35MM",
      images: [
        "/lovable-uploads/elasticos-lisos-1.jpg",
        "/lovable-uploads/elasticos-lisos-2.jpg",
        "/lovable-uploads/elasticos-lisos-3.jpg",
        "/lovable-uploads/elasticos-lisos-4.jpg"
      ]
    },
    { 
      name: "Elásticos de arte pública", 
      description: "Elásticos de arte pública disponíveis nas larguras 25MM, 30MM e 35MM",
      images: [
        "/lovable-uploads/elasticos-arte-publica-1.jpg",
        "/lovable-uploads/elasticos-arte-publica-2.jpg",
        "/lovable-uploads/elasticos-arte-publica-3.jpg",
        "/lovable-uploads/elasticos-arte-publica-4.jpg",
        "/lovable-uploads/elasticos-arte-publica-5.jpg"
      ]
    }
  ];

  const rendas = [
    { 
      name: "Renda 7 Fios (Largura 3,3mm)", 
      description: "Renda 7 Fios disponível em diversas cores. Composição: Poliamida e Elastano.", 
      image: "/lovable-uploads/renda-7-fios.jpg" 
    },
    { 
      name: "Renda Noronha (25mm)", 
      description: "Renda Noronha largura 25mm disponível em diversas cores para acabamentos delicados.", 
      images: [
        "/lovable-uploads/renda-noronha.jpg",
        "/lovable-uploads/renda-noronha-2.jpg"
      ]
    },
    { 
      name: "Renda 7 Mares (17cm)", 
      description: "Renda 7 Mares largura 17cm disponível em diversas cores para acabamentos sofisticados.", 
      images: [
        "/lovable-uploads/renda-7-mares.jpg",
        "/lovable-uploads/renda-7-mares-2.jpg",
        "/lovable-uploads/renda-7-mares-3.jpg",
        "/lovable-uploads/renda-7-mares-4.jpg"
      ]
    }
  ];

  const categories = [
    {
      title: "Elástico",
      icon: <Package className="w-6 h-6" />,
      description: "Elásticos resistentes para todos os tipos de costura",
      products: elasticos
    },
    {
      title: "Rendas",
      icon: <Package className="w-6 h-6" />,
      description: "Rendas delicadas e sofisticadas para acabamentos elegantes",
      products: rendas
    },
    {
      title: "Aviamentos",
      icon: <Package className="w-6 h-6" />,
      description: "Aviamentos de qualidade para acabamentos perfeitos em suas peças",
      products: vies
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          Outros Produtos
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Complete seus projetos com nossos aviamentos e acessórios de qualidade.
        </p>
      </div>

      {/* Categories Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {categories.map((category, index) => (
          <Card key={index} className="text-center shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                {category.icon}
              </div>
              <CardTitle className="text-xl font-semibold text-foreground">
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {category.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Products by Category */}
      {categories.map((category, categoryIndex) => (
        <section key={categoryIndex} className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mr-3 text-primary-foreground">
              {category.icon}
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              {category.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.products.map((product, productIndex) => (
              <ProductCard
                key={productIndex}
                name={product.name}
                description={product.description}
                category={category.title}
                imagePlaceholder={`Foto do ${product.name}`}
                imageUrl={product.image}
                images={product.images}
              />
            ))}
          </div>
        </section>
      ))}

    </div>
  );
};

export default OutrosProdutos;