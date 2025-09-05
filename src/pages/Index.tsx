import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Scissors, Palette, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const whatsappNumber = "5511999999999";
  const message = "Olá! Gostaria de conhecer os produtos da 7 Fios.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const features = [
    {
      icon: <Scissors className="w-6 h-6" />,
      title: "Tecidos de Qualidade",
      description: "Ampla variedade de tecidos para todos os seus projetos de costura"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Aviamentos Completos",
      description: "Zíperes, elásticos, elastano e tudo que você precisa"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Atendimento Personalizado",
      description: "Nossa equipe está pronta para ajudar no seu projeto"
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-warm py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-gradient-to-br from-primary/5 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Tecidos de <span className="text-primary">Qualidade</span> para seus Projetos
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Na <strong>7 Fios</strong>, você encontra os melhores tecidos, aviamentos e acessórios para dar vida às suas criações.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-warm text-lg px-8 py-4 h-auto"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Fale Conosco no WhatsApp
                </a>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 h-auto hover:bg-primary hover:text-primary-foreground">
                <Link to="/catalogo">
                  Ver Catálogo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Por que escolher a 7 Fios?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos produtos de qualidade e atendimento especializado para todos os seus projetos de costura.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pronto para começar seu projeto?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Entre em contato conosco pelo WhatsApp e receba atendimento personalizado para encontrar exatamente o que você precisa.
            </p>
            
            <Button 
              asChild
              size="lg"
              className="bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-warm text-lg px-8 py-4 h-auto"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Conversar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  Catálogo de Tecidos
                </h3>
                <p className="text-muted-foreground mb-4">
                  Explore nossa ampla variedade de tecidos para todos os tipos de projeto.
                </p>
                <Button asChild variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                  <Link to="/catalogo">Ver Catálogo</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  Outros Produtos
                </h3>
                <p className="text-muted-foreground mb-4">
                  Zíperes, elásticos, elastano e muito mais para complementar seus projetos.
                </p>
                <Button asChild variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                  <Link to="/outros-produtos">Ver Produtos</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  Entre em Contato
                </h3>
                <p className="text-muted-foreground mb-4">
                  Tire suas dúvidas e receba atendimento personalizado.
                </p>
                <Button asChild variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                  <Link to="/contato">Falar Conosco</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;