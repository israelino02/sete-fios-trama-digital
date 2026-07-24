import { Link } from "react-router-dom";
import { Play, Truck, Award, Store, Clock, Package, MapPin, MessageCircle, ChevronRight, Scissors, Palette, Sparkles, Layers } from "lucide-react";
import { fabricsData, getFabricMainImage } from "@/data/fabrics";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
import { resolveUpload } from "@/lib/uploadAssets";
import { useState } from "react";
import heroBanner from "@/assets/hero-banner-fabrics.png.asset.json";
import elasticosPersonalizados from "@/assets/elasticos-personalizados-home.jpg.asset.json";
import { HeroCarousel } from "@/components/HeroCarousel";
import heroMainDesktop from "@/assets/hero-main.png.asset.json";
import heroMainTablet from "@/assets/hero-tablet-v2.png.asset.json";
import heroMainMobile from "@/assets/hero-mobile-v34.png.asset.json";
import heroMicrofibrasDesktop from "@/assets/hero-microfibras-desktop.png.asset.json";
import heroMicrofibrasTablet from "@/assets/hero-microfibras-tablet.png.asset.json";
import heroMicrofibrasMobile from "@/assets/hero-microfibras-mobile.png.asset.json";
import heroMicrofibraDesktop from "@/assets/hero-microfibra-desktop.png.asset.json";
import heroMicrofibraTablet from "@/assets/hero-microfibra-tablet.png.asset.json";
import heroMicrofibraMobile from "@/assets/hero-microfibra-mobile.png.asset.json";
import heroPoliamidaDesktop from "@/assets/hero-poliamida-desktop.png.asset.json";
import heroPoliamidaTablet from "@/assets/hero-poliamida-tablet.png.asset.json";
import heroPoliamidaMobile from "@/assets/hero-poliamida-mobile.png.asset.json";
import heroPoliesterDesktop from "@/assets/hero-poliester-desktop.png.asset.json";
import heroPoliesterTablet from "@/assets/hero-poliester-tablet.png.asset.json";
import heroPoliesterMobile from "@/assets/hero-poliester-mobile.png.asset.json";

const heroDesktop = [heroMainDesktop.url, heroMicrofibrasDesktop.url, heroMicrofibraDesktop.url, heroPoliamidaDesktop.url, heroPoliesterDesktop.url];
const heroTablet = [heroMainTablet.url, heroMicrofibrasTablet.url, heroMicrofibraTablet.url, heroPoliamidaTablet.url, heroPoliesterTablet.url];
const heroMobile = [heroMainMobile.url, heroMicrofibrasMobile.url, heroMicrofibraMobile.url, heroPoliamidaMobile.url, heroPoliesterMobile.url];

const WHATSAPP_PHONE = "5581994616071";
const buildWa = (msg: string) =>
  `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(msg)}`;

const catalogWa = buildWa("Olá! Vim do SITE e gostaria de falar com um vendedor.");

const trustItems = [
  { icon: Award, value: "+10 anos", label: "no mercado" },
  { icon: Truck, value: "Entrega", label: "rápida" },
  { icon: Store, value: "Atacado", label: "e varejo" },
  { icon: Sparkles, value: "Alta", label: "qualidade" },
];

import catMicrofibras from "@/assets/cat-dryfit.jpg.asset.json";
import catDryfit from "@/assets/cat-microfibras.png.asset.json";
import catEstampados from "@/assets/cat-estampados.jpg.asset.json";
import catAviamentos from "@/assets/cat-aviamentos.jpg.asset.json";
import historiaVideo from "@/assets/historia-7fios.mp4.asset.json";

const categories = [
  {
    name: "Microfibras",
    subtitle: "Poliamida e Poliéster",
    href: "/catalogo/poliamida",
    gradient: "bg-gradient-cat-blue",
    icon: Layers,
    image: catMicrofibras.url,
  },
  {
    name: "Dry-fit",
    subtitle: "Alta performance",
    href: "/catalogo/dry-fit",
    gradient: "bg-gradient-cat-amber",
    icon: Scissors,
    image: catDryfit.url,
  },
  {
    name: "Estampados",
    subtitle: "Exclusivos e modernos",
    href: "/catalogo/estampados",
    gradient: "bg-gradient-cat-green",
    icon: Palette,
    image: catEstampados.url,
  },
  {
    name: "Aviamentos",
    subtitle: "Elásticos, viés, rendas",
    href: "/outros-produtos",
    gradient: "bg-gradient-cat-purple",
    icon: Sparkles,
    image: catAviamentos.url,
  },
];

const findFabric = (categorySlug: string, type: string) => {
  const cat = fabricsData.categories.find((c) => c.slug === categorySlug);
  return cat?.fabrics.find((f) => f.type === type);
};

const featuredFabrics = [
  {
    name: "Microfibra Poliamida",
    tag: "+30 cores disponíveis",
    image: (() => {
      const f = findFabric("poliamida", "POLIAMIDA PREMIUM");
      return f ? resolveUpload(getFabricMainImage(f)) : "";
    })(),
    link: "/catalogo/poliamida",
    waMsg: "Olá! Tenho interesse em Microfibra Poliamida. Podem me ajudar?",
  },
  {
    name: "Dry-fit Prime",
    tag: "Alta performance",
    image: (() => {
      const f = findFabric("dry-fit", "DRY FIT PRIME");
      return f ? resolveUpload(getFabricMainImage(f)) : "";
    })(),
    link: "/catalogo/dry-fit",
    waMsg: "Olá! Tenho interesse em Dry-fit Prime. Podem me ajudar?",
  },
  {
    name: "Estampados",
    tag: "Moda casual",
    image: (() => {
      const f = findFabric("estampados", "ROMANTIK ESTAMPADO");
      return f ? resolveUpload(getFabricMainImage(f)) : "";
    })(),
    link: "/catalogo/estampados",
    waMsg: "Olá! Tenho interesse em tecidos Estampados. Podem me ajudar?",
  },
];

const aviamentos = [
  {
    name: "Elástico",
    tag: "Vários tamanhos",
    image: elasticosPersonalizados.url,
    waMsg: "Olá! Tenho interesse em Elásticos. Podem me ajudar?",
  },
  {
    name: "Viés",
    tag: "Acabamento perfeito",
    image: resolveUpload("/lovable-uploads/vies-noronha-1.jpg"),
    waMsg: "Olá! Tenho interesse em Viés. Podem me ajudar?",
  },
  {
    name: "Rendas",
    tag: "Modelos variados",
    image: resolveUpload("/lovable-uploads/renda-7-mares-1.jpg"),
    waMsg: "Olá! Tenho interesse em Rendas. Podem me ajudar?",
  },
];

const whyItems = [
  {
    icon: Package,
    title: "Estoque disponível",
    description: "Sem esperar. Tecido na hora que você precisa.",
  },
  {
    icon: Award,
    title: "Alta qualidade",
    description: "Tecidos premium para confecções exigentes.",
  },
  {
    icon: MapPin,
    title: "No Polo de PE",
    description: "Santa Cruz do Capibaribe — perto de você.",
  },
  {
    icon: MessageCircle,
    title: "Atendimento rápido",
    description: "Fale direto com o vendedor pelo WhatsApp.",
  },
];

const Index = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div>
      {/* 2. HERO */}
      <section className="relative w-full min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh] overflow-hidden bg-primary">
        <HeroCarousel images={heroDesktop} tabletImages={heroTablet} mobileImages={heroMobile} />
      </section>


      {/* 3. BARRA DE CONFIANÇA */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="leading-tight">
                    <div className="font-bold text-foreground text-sm md:text-base">{item.value}</div>
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. NOSSAS CATEGORIAS */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Nossas categorias</h2>
            <p className="text-sm md:text-base text-muted-foreground mt-2">
              Escolha a categoria e fale com o vendedor
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-5 max-w-4xl mx-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.name}
                  to={cat.href}
                  className={`${cat.gradient} relative overflow-hidden rounded-xl min-h-[140px] md:min-h-[180px] flex flex-col justify-end text-primary-foreground shadow-soft hover:shadow-warm hover:-translate-y-0.5 transition-all group`}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
                  
                  <div className="relative z-10 p-5 md:p-8">
                    <h3 className="font-display font-bold text-lg md:text-2xl leading-tight">{cat.name}</h3>
                    <p className="text-xs md:text-sm text-primary-foreground/90 mt-1">{cat.subtitle}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. TECIDOS MAIS PROCURADOS */}
      <section className="py-12 md:py-16 bg-surface-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Tecidos mais procurados</h2>
            <p className="text-sm md:text-base text-muted-foreground mt-2">Os favoritos das confecções de PE</p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible">
            {featuredFabrics.map((p) => (
              <article
                key={p.name}
                className="snap-center flex-shrink-0 w-[80%] sm:w-[45%] md:w-auto bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-warm transition-shadow"
              >
                <Link to={p.link} className="block">
                  <ImageWithSkeleton
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover"
                    aspectRatio="aspect-[4/3]"
                    loading="lazy"
                    decoding="async"
                  />
                </Link>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground text-base md:text-lg">{p.name}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">{p.tag}</p>
                  <a
                    href={buildWa(p.waMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-primary text-primary-foreground font-semibold px-4 py-2.5 hover:bg-primary/90 transition"
                  >
                    Consultar
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BANNER IMAGEM TECIDOS */}
      <section className="relative w-full h-[140px] md:h-[180px] overflow-hidden">
        <img
          src={heroBanner.url}
          alt="Microfibras 7 Fios"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary/40" />
        <div className="relative z-10 h-full container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <p className="text-xs md:text-sm tracking-widest uppercase text-primary-foreground/90">
            Qualidade em cada detalhe
          </p>
          <h3 className="font-display text-2xl md:text-4xl font-extrabold text-accent">
            Microfibras 7 Fios
          </h3>
        </div>
      </section>

      {/* 7. OUTROS MAIS PROCURADOS */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Outros mais procurados</h2>
            <p className="text-sm md:text-base text-muted-foreground mt-2">Complemente seus projetos com qualidade</p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible">
            {aviamentos.map((p) => (
              <article
                key={p.name}
                className="snap-center flex-shrink-0 w-[80%] sm:w-[45%] md:w-auto bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-warm transition-shadow"
              >
                <Link to="/outros-produtos" className="block">
                  <ImageWithSkeleton
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover"
                    aspectRatio="aspect-[4/3]"
                    loading="lazy"
                    decoding="async"
                  />
                </Link>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground text-base md:text-lg">{p.name}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">{p.tag}</p>
                  <a
                    href={buildWa(p.waMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-primary text-primary-foreground font-semibold px-4 py-2.5 hover:bg-primary/90 transition"
                  >
                    Consultar
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. VÍDEO INSTITUCIONAL */}
      <section className="py-12 md:py-16 bg-surface-alt">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Conheça nossa história</h2>
          <div className="max-w-3xl mx-auto mt-8">
            {videoOpen ? (
              <div className="aspect-video rounded-xl overflow-hidden shadow-soft">
                <video controls autoPlay className="w-full h-full">
                  <source src={historiaVideo.url} type="video/mp4" />
                </video>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                className="relative w-full aspect-video rounded-xl overflow-hidden bg-primary shadow-soft group"
                aria-label="Reproduzir vídeo institucional"
              >
                <img
                  src={historiaPoster.url}
                  alt="Prévia do vídeo institucional Sete Fios Têxtil"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-20 h-20 rounded-full bg-accent flex items-center justify-center shadow-warm group-hover:scale-110 transition-transform">
                    <Play className="w-9 h-9 text-primary ml-1" fill="currentColor" />
                  </span>
                </div>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 9. POR QUE A 7 FIOS */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold">Seu fornecedor no Polo de Confecções</h2>
            <p className="text-sm md:text-base text-primary-foreground/80 mt-2">
              Aqui você encontra tudo em um só lugar
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {whyItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-xl p-6 bg-primary-foreground/5 border border-primary-foreground/10"
                >
                  <Icon className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-base md:text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-primary-foreground/80">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. NAVEGUE POR NOSSAS CATEGORIAS */}
      <section className="py-12 md:py-16 bg-surface-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Por nossas categorias</h2>
            <p className="text-sm md:text-base text-muted-foreground mt-2">
              Encontre rapidamente o que você precisa
            </p>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="bg-card rounded-xl p-6 border border-border flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-soft">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                <Scissors className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-foreground">Catálogo de Tecidos</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Explore nossa ampla variedade de tecidos para todos os tipos de projeto.
                </p>
              </div>
              <Link
                to="/catalogo"
                className="inline-flex items-center gap-1 rounded-md bg-primary text-primary-foreground font-semibold px-4 py-2.5 hover:bg-primary/90 transition w-full sm:w-auto justify-center"
              >
                Ver Catálogo <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-card rounded-xl p-6 border-2 border-primary flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-soft">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-foreground">Outros Produtos</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Elásticos, Rendas e Aviamentos para complementar seus projetos.
                </p>
              </div>
              <Link
                to="/outros-produtos"
                className="inline-flex items-center gap-1 rounded-md bg-primary text-primary-foreground font-semibold px-4 py-2.5 hover:bg-primary/90 transition w-full sm:w-auto justify-center"
              >
                Ver Produtos <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 11. CTA FINAL */}
      <section className="bg-accent py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-accent-foreground">
            Encontrou o que procura?
          </h2>
          <p className="text-sm md:text-base text-accent-foreground/85 mt-3 max-w-xl mx-auto">
            Fale com nosso vendedor agora e receba atendimento personalizado.
          </p>
          <a
            href="https://wa.me/5581994616071"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full max-w-md items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground font-semibold px-6 py-4 hover:bg-primary/90 transition"
          >
            <MessageCircle className="w-5 h-5" />
            Conversar no WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;
