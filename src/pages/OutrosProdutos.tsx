import { ProductCard } from "@/components/ProductCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Package } from "lucide-react";

const OutrosProdutos = () => {
  const whatsappNumber = "5511999999999";
  const message = "Olá! Gostaria de saber mais sobre os aviamentos e acessórios da 7 Fios.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const ziperes = [
    { name: "Zíper Comum 15cm", description: "Zíper tradicional de nylon, ideal para necessaires e bolsas pequenas." },
    { name: "Zíper Comum 20cm", description: "Zíper resistente para calças, saias e diversos projetos de costura." },
    { name: "Zíper Comum 30cm", description: "Zíper versátil para vestidos, jaquetas e peças diversas." },
    { name: "Zíper Comum 40cm", description: "Zíper longo para casacos, moletons e peças maiores." },
    { name: "Zíper Comum 50cm", description: "Zíper extra longo para jaquetas grandes e projetos especiais." },
    { name: "Zíper Separador 60cm", description: "Zíper que abre completamente, ideal para casacos e jaquetas." }
  ];

  const elasticos = [
    { name: "Elástico 10mm", description: "Elástico fino para acabamentos delicados e roupas íntimas." },
    { name: "Elástico 15mm", description: "Elástico médio para cintura de shorts e saias." },
    { name: "Elástico 20mm", description: "Elástico versátil para diversas aplicações em costura." },
    { name: "Elástico 25mm", description: "Elástico resistente para cintura de calças e bermudas." },
    { name: "Elástico 30mm", description: "Elástico largo para cintura alta e peças esportivas." },
    { name: "Elástico 40mm", description: "Elástico extra largo para projetos especiais e cintas." }
  ];

  const elastanos = [
    { name: "Elastano 10mm", description: "Fita elástica fina com alta elasticidade para acabamentos." },
    { name: "Elastano 15mm", description: "Elastano médio para aplicações em roupas fitness." },
    { name: "Elastano 20mm", description: "Elastano versátil para diversas peças de vestuário." },
    { name: "Elastano 25mm", description: "Elastano resistente para roupas esportivas e fitness." },
    { name: "Elastano 30mm", description: "Elastano largo para cintas e peças com alta compressão." }
  ];

  const categories = [
    {
      title: "Zíperes",
      icon: <Package className="w-6 h-6" />,
      description: "Zíperes de qualidade em diversos tamanhos e cores",
      products: ziperes
    },
    {
      title: "Elásticos",
      icon: <Package className="w-6 h-6" />,
      description: "Elásticos resistentes para todos os tipos de costura",
      products: elasticos
    },
    {
      title: "Elastano",
      icon: <Package className="w-6 h-6" />,
      description: "Elastano de alta qualidade para peças que precisam de elasticidade",
      products: elastanos
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