import { ProductCard } from "@/components/ProductCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Package } from "lucide-react";

const OutrosProdutos = () => {
  const whatsappNumber = "5511999999999";
  const message = "Olá! Gostaria de saber mais sobre os aviamentos e acessórios da 7 Fios.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const vies = [
    { name: "Viés Simples 12mm", description: "Viés tradicional para acabamentos básicos em costuras.", image: undefined },
    { name: "Viés Simples 18mm", description: "Viés médio ideal para acabamento de decotes e cavas.", image: undefined },
    { name: "Viés Simples 25mm", description: "Viés largo versátil para diversos tipos de acabamento.", image: undefined },
    { name: "Viés Duplo 12mm", description: "Viés duplo para acabamentos mais resistentes.", image: undefined },
    { name: "Viés Duplo 18mm", description: "Viés duplo médio para acabamentos profissionais.", image: undefined },
    { name: "Viés Estampado 25mm", description: "Viés com estampas para dar charme especial às suas peças.", image: undefined }
  ];

  const elasticos = [
    { 
      name: "Elásticos personalizados", 
      description: "Crie elásticos com sua marca",
      image: "/lovable-uploads/elasticos-personalizados.jpg"
    }
  ];

  const rendas = [
    { name: "Renda Guipir 3cm", description: "Renda delicada ideal para acabamentos finos e detalhes.", image: undefined },
    { name: "Renda Guipir 5cm", description: "Renda média versátil para aplicações em diversos tecidos.", image: undefined },
    { name: "Renda Guipir 8cm", description: "Renda larga perfeita para barras e detalhes elegantes.", image: undefined },
    { name: "Renda Chantilly 10cm", description: "Renda sofisticada para peças especiais e festas.", image: undefined },
    { name: "Renda Chantilly 15cm", description: "Renda ampla para criar peças deslumbrantes.", image: undefined }
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
      title: "Viés",
      icon: <Package className="w-6 h-6" />,
      description: "Viés de qualidade para acabamentos perfeitos em suas peças",
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
              />
            ))}
          </div>
        </section>
      ))}

      {/* Additional Products Section */}
      <section className="py-12 bg-muted rounded-lg">
        <div className="text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            E muito mais!
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Além dos produtos listados, temos uma grande variedade de aviamentos, botões, fitas, 
            viés, entretelas e muito mais. Entre em contato para descobrir tudo que temos disponível.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">🔘</span>
              </div>
              <p className="text-sm text-muted-foreground">Botões</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">🎀</span>
              </div>
              <p className="text-sm text-muted-foreground">Fitas</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">📏</span>
              </div>
              <p className="text-sm text-muted-foreground">Viés</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">📋</span>
              </div>
              <p className="text-sm text-muted-foreground">Entretelas</p>
            </div>
          </div>

          <Button
            asChild
            size="lg"
            className="bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-warm"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Consultar Outros Produtos
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default OutrosProdutos;