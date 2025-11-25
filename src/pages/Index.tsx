import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Scissors, Palette, Heart, Star, Truck, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { fabricsData, getFabricMainImage } from "@/data/fabrics";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
import { HeroCarousel } from "@/components/HeroCarousel";
import heroSlide1 from "@/assets/hero-slide-1.png";
import heroSlide2 from "@/assets/hero-slide-2.png";
import heroSlide3 from "@/assets/hero-slide-3.png";
import heroSlide4 from "@/assets/hero-slide-4.png";
import heroSlide5 from "@/assets/hero-slide-5.png";
import heroTablet1 from "@/assets/hero-tablet-1.png";
import heroTablet3 from "@/assets/hero-tablet-3.png";
import heroTablet4 from "@/assets/hero-tablet-4.png";
import heroMobile1 from "@/assets/hero-mobile-1.jpg";
import heroMobile2 from "@/assets/hero-mobile-2.png";
import heroMobile3 from "@/assets/hero-mobile-3.png";
import heroMobile4 from "@/assets/hero-mobile-4.png";
import heroMobile5 from "@/assets/hero-mobile-5.png";
const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const whatsappNumber = "5581994616071";
  const message = "Olá! Gostaria de entrar em contato com a Sete Fios Têxtil";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
  const heroImages = [heroSlide1, heroSlide2, heroSlide3, heroSlide4, heroSlide5];
  const heroTabletImages = [heroTablet1, heroSlide2, heroTablet3, heroTablet4, heroSlide5];
  const heroMobileImages = [heroMobile1, heroMobile2, heroMobile3, heroMobile4, heroMobile5];

  // Featured products from fabrics data
  const featuredProducts = [{
    fabric: fabricsData.categories.find(c => c.slug === "poliester")?.fabrics.find(f => f.type === "MADRI"),
    badge: "Mais Vendido",
    categorySlug: "poliester"
  }, {
    fabric: fabricsData.categories.find(c => c.slug === "poliamida")?.fabrics.find(f => f.type === "POLIAMIDA PREMIUM"),
    badge: "Premium",
    categorySlug: "poliamida"
  }, {
    fabric: fabricsData.categories.find(c => c.slug === "dry-fit")?.fabrics.find(f => f.type === "DRY FIT PRIME"),
    badge: "Alta Performance",
    categorySlug: "dry-fit"
  }, {
    fabric: fabricsData.categories.find(c => c.slug === "estampados")?.fabrics.find(f => f.type === "ROMANTIK ESTAMPADO"),
    badge: "Exclusivo",
    categorySlug: "estampados"
  }];

  // Helper to check if fabric has gender options
  const hasGenderOptions = (fabric: any) => {
    return fabric?.colors?.some((color: any) => color.gender);
  };

  // Get appropriate link for product
  const getProductLink = (product: any) => {
    const fabricType = product.fabric?.type.toLowerCase().replace(/ /g, '-');

    // Romantik Estampado deve ir para seleção de gênero
    if (hasGenderOptions(product.fabric)) {
      return `/catalogo/${product.categorySlug}/${fabricType}/selecionar-genero`;
    }

    // Outros tecidos vão direto para o detalhe
    return `/catalogo/${product.categorySlug}/${fabricType}`;
  };
  const features = [{
    icon: <Scissors className="w-6 h-6" />,
    title: "Tecidos de Qualidade",
    description: "Ampla variedade de tecidos para todos os seus projetos de costura"
  }, {
    icon: <Palette className="w-6 h-6" />,
    title: "Aviamentos Completos",
    description: "Zíperes, elásticos, elastano e tudo que você precisa"
  }, {
    icon: <Heart className="w-6 h-6" />,
    title: "Atendimento Personalizado",
    description: "Nossa equipe está pronta para ajudar no seu projeto"
  }];
  return <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <HeroCarousel images={heroImages} tabletImages={heroTabletImages} mobileImages={heroMobileImages} interval={8000} onSlideChange={setCurrentSlide} />
        
        
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

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            {featuredProducts.map((product, index) => <Card key={index} className="group overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <ImageWithSkeleton src={product.fabric ? getFabricMainImage(product.fabric) : ''} alt={product.fabric?.type || ''} className="w-full h-full object-cover" aspectRatio="aspect-square" loading="eager" decoding="async" fetchPriority="high" />
                  </div>
                  
                  <CardContent className="p-3 md:p-4">
                    <h3 className="font-semibold text-sm md:text-lg text-foreground mb-2 line-clamp-1">
                      {product.fabric?.type}
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-sm mb-3 line-clamp-2">
                      {product.fabric?.description}
                    </p>
                    <div className="flex flex-col gap-2">
                      <Button 
                        asChild 
                        variant="outline" 
                        size="sm" 
                        className="w-full text-xs"
                      >
                        <Link to={getProductLink(product)}>Ver Cores</Link>
                      </Button>
                      <Button 
                        size="sm" 
                        className="w-full bg-gradient-primary hover:scale-105 transition-all duration-300 text-xs"
                        onClick={() => window.open(`https://wa.me/5581994616071?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%207%20Fios.`, "_blank")}
                      >
                        Solicitar Orçamento
                      </Button>
                    </div>
                  </CardContent>
                </Card>)}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-primary hover:bg-gradient-primary/90 text-lg px-12 py-6 h-auto font-bold shadow-warm hover:shadow-xl hover:scale-105 transition-all duration-300 text-primary-foreground">
              <Link to="/catalogo">Ver Todos os Produtos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Vídeo Institucional */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-primary-foreground">🎥 Vídeo Institucional</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Conheça Nossa História
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubra como a Sete Fios Têxtil transforma ideias em realidade
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-warm aspect-video">
              <video controls className="w-full h-full" poster="/images/video-poster.jpg">
                <source src="/videos/video-institucional.mp4" type="video/mp4" />
                Seu navegador não suporta a reprodução de vídeos.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          

          

          {/* Frase de Impacto */}
          <div className="text-center bg-gradient-primary p-8 rounded-2xl text-primary-foreground">
            <p className="text-lg md:text-xl font-medium leading-relaxed max-w-4xl mx-auto">
              "Aqui, cada fio conta uma história: a de uma empresa que cresce lado a lado com você, 
              oferecendo muito mais do que matéria-prima — oferecemos segurança, confiança e resultados."
            </p>
          </div>
        </div>
      </section>


      {/* Quick Links */}
      <section className="py-20 lg:py-28 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Navegue por Nossas Categorias
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Encontre rapidamente o que você precisa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group relative overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <CardContent className="p-8 text-center relative z-10 flex flex-col h-full min-h-[400px]">
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-warm">
                  <Scissors className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  Catálogo de Tecidos
                </h3>
                <p className="text-muted-foreground mb-6 text-base leading-relaxed flex-grow">
                  Explore nossa ampla variedade de tecidos para todos os tipos de projeto.
                </p>
                <Button asChild size="lg" className="w-full hover:scale-105 transition-transform shadow-soft mt-auto">
                  <Link to="/catalogo">Ver Catálogo</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <CardContent className="p-8 text-center relative z-10 flex flex-col h-full min-h-[400px]">
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-warm">
                  <Palette className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  Outros Produtos
                </h3>
                <p className="text-muted-foreground mb-6 text-base leading-relaxed flex-grow">
                  Elásticos, Rendas e Aviamentos para complementar seus projetos.
                </p>
                <Button asChild size="lg" className="w-full hover:scale-105 transition-transform shadow-soft mt-auto">
                  <Link to="/outros-produtos">Ver Produtos</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <CardContent className="p-8 text-center relative z-10 flex flex-col h-full min-h-[400px]">
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-warm">
                  <MessageCircle className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  Entre em Contato
                </h3>
                <p className="text-muted-foreground mb-6 text-base leading-relaxed flex-grow">
                  Tire suas dúvidas e receba atendimento personalizado.
                </p>
                <Button asChild size="lg" className="w-full hover:scale-105 transition-transform shadow-soft mt-auto">
                  <Link to="/contato">Falar Conosco</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;