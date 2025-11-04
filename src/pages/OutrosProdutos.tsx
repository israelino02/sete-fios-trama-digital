import { ProductCard } from "@/components/ProductCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Package } from "lucide-react";

const OutrosProdutos = () => {
  const whatsappNumber = "5581994616071";
  const message = "Olá! Gostaria de saber mais sobre os aviamentos e acessórios da 7 Fios.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const vies = [
    {
      name: "Elástico Fênix", 
      description: "Elástico Fênix com largura de 7mm disponível em diversas cores.", 
      images: [
        "/lovable-uploads/elastico-fenix-1.jpg",
        "/lovable-uploads/elastico-fenix-2.jpg"
      ]
    },
    { 
      name: "Elástico Jurere", 
      description: "Elástico Jurere com largura de 12mm disponível em diversas cores.", 
      image: "/lovable-uploads/elastico-jurere.jpg"
    },
    { 
      name: "Viés Noronha", 
      description: "Viés Noronha disponível em diversas cores para acabamentos de alta qualidade.", 
      images: [
        "/lovable-uploads/vies-noronha-1.jpg",
        "/lovable-uploads/vies-noronha-2.jpg",
        "/lovable-uploads/vies-noronha-3.jpg",
        "/lovable-uploads/vies-noronha-4.jpg"
      ]
    },
    { 
      name: "Viés de poliester rubi", 
      description: "Viés de poliester rubi disponível nas larguras 16 MM e 25 MM.", 
      images: [
        "/lovable-uploads/vies-poliester-rubi-1.jpg",
        "/lovable-uploads/vies-poliester-rubi-2.jpg",
        "/lovable-uploads/vies-poliester-rubi-3.jpg"
      ]
    },
    { 
      name: "Viés de poliamida paraná", 
      description: "Viés de poliamida paraná disponível nas larguras 16 MM e 25 MM.", 
      images: [
        "/lovable-uploads/vies-parana-nova-1.jpg",
        "/lovable-uploads/vies-parana-nova-2.jpg"
      ]
    },
    { 
      name: "Viés de poliamida", 
      description: "Viés de poliamida disponível nas larguras 16 MM e 25 MM.", 
      images: [
        "/lovable-uploads/vies-poliamida-nova-1.jpg",
        "/lovable-uploads/vies-poliamida-nova-2.jpg",
        "/lovable-uploads/vies-poliamida-nova-3.jpg"
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
        "/lovable-uploads/elastico-arte-publica-3.jpg",
        "/lovable-uploads/elasticos-arte-publica-4.jpg",
        "/lovable-uploads/elasticos-arte-publica-5.jpg"
      ]
    }
  ];

  const rendas = [
    { 
      name: "Renda 7 Fios", 
      description: "Renda 7 Fios com largura de 3,3 cm disponível em diversas cores. Composição: Poliamida e Elastano.", 
      images: [
        "/lovable-uploads/renda-7-fios-1.jpg",
        "/lovable-uploads/renda-7-fios-2.jpg"
      ]
    },
    { 
      name: "Renda 7 Mares",
      description: "Renda 7 Mares largura 17cm disponível em diversas cores para acabamentos sofisticados.", 
      images: [
        "/lovable-uploads/renda-7-mares.jpg",
        "/lovable-uploads/renda-7-mares-2.jpg",
        "/lovable-uploads/renda-7-mares-3.jpg",
        "/lovable-uploads/renda-7-mares-4.jpg"
      ]
    },
    { 
      name: "Renda Belle", 
      description: "Renda Belle disponível em diversas cores para acabamentos elegantes.", 
      image: "/lovable-uploads/renda-belle.jpg"
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