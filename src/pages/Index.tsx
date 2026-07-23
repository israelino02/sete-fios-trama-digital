import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Scissors, Palette, Heart, Star, Truck, Shield, Users, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { fabricsData, getFabricMainImage } from "@/data/fabrics";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
import { resolveUpload } from "@/lib/uploadAssets";
import { HeroCarousel } from "@/components/HeroCarousel";
import heroMain from "@/assets/hero-main.png.asset.json";
import heroTablet from "@/assets/hero-tablet-v2.png.asset.json";
import heroMobile from "@/assets/hero-mobile-v34.png.asset.json";
const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const whatsappNumber = "5581994616071";
  const message = "Olá! Vim do SITE e gostaria de saber mais sobre os produtos da 7 Fios.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
  const heroImages = [heroMain.url];
  const heroTabletImages = [heroTablet.url];
  const heroMobileImages = [heroMobile.url];


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
      <section className="relative md:min-h-[80vh] md:flex md:items-center md:justify-center overflow-hidden">
        {/* Mobile: full image, no crop */}
        <img
          src={heroMobile.url}
          alt="Sete Fios Têxtil"
          className="block md:hidden w-full h-auto object-contain"
          style={{ aspectRatio: "auto" }}
        />
        {/* Tablet/Desktop: carousel */}
        <div className="hidden md:block absolute inset-0">
          <HeroCarousel images={heroImages} tabletImages={heroTabletImages} mobileImages={heroMobileImages} interval={8000} onSlideChange={setCurrentSlide} />
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="py-6 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <Button asChild size="default" className="bg-primary hover:bg-primary/90 transition-colors duration-200 text-sm md:text-base px-6 md:px-8 py-2.5 md:py-4 h-auto font-medium w-full sm:w-auto rounded-md">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Fale Conosco Agora
              </a>
            </Button>
            
            <Button asChild variant="outline" size="default" className="text-sm md:text-base px-6 md:px-8 py-2.5 md:py-4 h-auto font-medium border-border hover:bg-muted transition-colors duration-200 w-full sm:w-auto rounded-md">
              <a href="tel:+5581994616071">
                <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Ligue para nós Agora
              </a>
            </Button>
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

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            {featuredProducts.map((product, index) => <Link key={index} to={getProductLink(product)}>
                <Card className="group overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <div className="relative overflow-hidden">
                    <ImageWithSkeleton src={product.fabric ? resolveUpload(getFabricMainImage(product.fabric)) : ''} alt={product.fabric?.type || ''} className="w-full h-full object-cover" aspectRatio="aspect-square" loading="eager" decoding="async" fetchPriority="high" />
                  </div>
                  
                  <CardContent className="p-3 md:p-4">
                    <h3 className="font-semibold text-sm md:text-lg text-foreground group-hover:text-primary transition-colors line-clamp-1 mb-2">
                      {product.fabric?.type}
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-sm line-clamp-2">
                      {product.fabric?.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>)}
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