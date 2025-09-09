import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Scissors, Palette, Heart, Star, Truck, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-tecidos.jpg";

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
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30 hover:bg-accent/30">
              ✨ Tecidos de Qualidade Superior
            </Badge>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Tecidos de <span className="text-accent">Qualidade</span> para seus Projetos
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Na <strong>7 Fios</strong>, você encontra os melhores tecidos, aviamentos e acessórios para dar vida às suas criações.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-warm text-lg px-8 py-4 h-auto"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Fale Conosco no WhatsApp
                </a>
              </Button>
              
              <Button asChild variant="secondary" size="lg" className="text-lg px-8 py-4 h-auto bg-accent text-primary hover:bg-accent/90">
                <Link to="/catalogo">
                  Ver Catálogo
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-accent text-sm font-medium">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                <Shield className="w-4 h-4" />
                <span>Qualidade Garantida</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                <Truck className="w-4 h-4" />
                <span>Entrega Rápida</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                <Users className="w-4 h-4" />
                <span>+10 Anos de Experiência</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-primary-foreground">🔥 Bombando no momento</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Produtos em Destaque
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Os tecidos mais procurados pelos nossos clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { name: "Malha Liganete Premium", price: "R$ 32,90", description: "Por metro - Alta qualidade", badge: "Mais Vendido", badgeColor: "bg-accent text-primary" },
              { name: "Suplex Fitness", price: "R$ 38,50", description: "Ideal para roupas esportivas", badge: "Novidade", badgeColor: "bg-primary text-primary-foreground" },
              { name: "Algodão Percal", price: "R$ 25,90", description: "Macio e respirável", badge: "Oferta", badgeColor: "bg-red-500 text-white" },
              { name: "Crepe Georgette", price: "R$ 42,90", description: "Elegante e fluido", badge: "Premium", badgeColor: "bg-gradient-accent text-primary" }
            ].map((product, index) => (
              <Card key={index} className="group overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square bg-gradient-warm flex items-center justify-center relative overflow-hidden">
                  <Badge className={`absolute top-2 left-2 text-xs ${product.badgeColor}`}>
                    {product.badge}
                  </Badge>
                  <div className="text-center p-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-primary text-2xl">🧵</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Foto do produto</p>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex text-accent">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">{product.price}</span>
                    <Button 
                      asChild
                      size="sm" 
                      className="hover:scale-105 transition-transform"
                    >
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        Consultar
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground">
              <Link to="/catalogo">Ver Todos os Produtos</Link>
            </Button>
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

      {/* Missão, Visão e Valores */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-primary-foreground">🏢 Institucional</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Conheça a Sete Fios Têxtil
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma empresa comprometida com a excelência e inovação no mercado têxtil
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Missão */}
            <Card className="shadow-soft hover:shadow-warm transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">Nossa Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Na Sete Fios Têxtil, nossa missão é simples e clara: oferecer tecidos e aviamentos que unem durabilidade, inovação e preço justo. Trabalhamos com excelência e eficiência para entregar muito mais do que produtos — entregamos soluções inteligentes que acompanham as necessidades e tendências do mercado têxtil.
                </p>
              </CardContent>
            </Card>

            {/* Visão */}
            <Card className="shadow-soft hover:shadow-warm transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🔭</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">Nossa Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser referência nacional em tecidos e aviamentos, reconhecida pela qualidade, inovação e custo-benefício de nossos produtos, proporcionando soluções em matéria-prima para confecções têxtil.
                </p>
              </CardContent>
            </Card>

            {/* Valores */}
            <Card className="shadow-soft hover:shadow-warm transition-all duration-300 lg:col-span-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">Nossos Valores</h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-foreground">Qualidade sem concessões:</p>
                      <p className="text-muted-foreground text-sm">produtos que seguem os mais altos padrões, garantindo durabilidade e conforto.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-foreground">Custo-benefício real:</p>
                      <p className="text-muted-foreground text-sm">excelência e preço justo que agregam valor ao investimento de cada cliente.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-foreground">Inteligência e inovação:</p>
                      <p className="text-muted-foreground text-sm">tecnologia aplicada para otimizar processos e criar soluções modernas.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-foreground">Agilidade que surpreende:</p>
                      <p className="text-muted-foreground text-sm">rapidez e eficiência para responder ao ritmo do mercado.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-foreground">Parceria de verdade:</p>
                      <p className="text-muted-foreground text-sm">relações de confiança e proximidade que fortalecem projetos e objetivos.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-foreground">Ética e transparência:</p>
                      <p className="text-muted-foreground text-sm">cada negociação pautada por integridade e responsabilidade.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Frase de Impacto */}
          <div className="text-center bg-gradient-primary p-8 rounded-2xl text-primary-foreground">
            <p className="text-lg md:text-xl font-medium leading-relaxed max-w-4xl mx-auto">
              "Aqui, cada fio conta uma história: a de uma empresa que cresce lado a lado com você, 
              oferecendo muito mais do que matéria-prima — oferecemos segurança, confiança e resultados."
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Fique por dentro das novidades
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Assine nossa newsletter e seja o primeiro a saber sobre novos tecidos, 
            promoções exclusivas e dicas de costura.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="flex-1 hover:scale-105 transition-all duration-300 bg-accent text-primary hover:bg-accent/90"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Receber Novidades no WhatsApp
              </a>
            </Button>
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