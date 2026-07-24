import { ProductCard } from "@/components/ProductCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Scissors, Sparkles, Layers } from "lucide-react";
import { useMemo, useState } from "react";
import { resolveUpload } from "@/lib/uploadAssets";

const WA_PHONE = "5581994616071";
const waLink = (name: string) =>
  `https://api.whatsapp.com/send?phone=${WA_PHONE}&text=${encodeURIComponent(
    `Olá! Tenho interesse em ${name}. Podem me ajudar?`
  )}`;

type MobileProduct = {
  name: string;
  description: string;
  bg: string;
  image?: string;
};

type MobileGroup = {
  key: "elasticos" | "vies" | "rendas";
  label: string;
  icon: JSX.Element;
  badge: string;
  products: MobileProduct[];
};

const mobileGroups: MobileGroup[] = [
  {
    key: "elasticos",
    label: "Elásticos",
    badge: "ELÁSTICO",
    icon: <Layers className="w-4 h-4" />,
    products: [
      {
        name: "Elástico liso",
        description: "25MM, 30MM e 35MM",
        bg: "#fef3c7",
        image: resolveUpload("/lovable-uploads/elasticos-lisos-1.jpg"),
      },
      {
        name: "Arte pública",
        description: "25MM, 30MM e 35MM",
        bg: "#fce7f3",
        image: resolveUpload("/lovable-uploads/elasticos-arte-publica-1.jpg"),
      },
      {
        name: "Elástico fino",
        description: "Alta qualidade",
        bg: "#dbeafe",
        image: resolveUpload("/lovable-uploads/elastico-fenix-1.jpg"),
      },
    ],
  },
  {
    key: "vies",
    label: "Viés",
    badge: "VIÉS",
    icon: <Scissors className="w-4 h-4" />,
    products: [
      {
        name: "Viés Noronha",
        description: "Diversas cores",
        bg: "#ede9fe",
        image: resolveUpload("/lovable-uploads/vies-noronha-1.jpg"),
      },
      {
        name: "Viés poliamida",
        description: "70MM e 75MM",
        bg: "#d1fae5",
        image: resolveUpload("/lovable-uploads/vies-poliamida-nova-1.jpg"),
      },
      {
        name: "Viés poliamida rubi",
        description: "70MM e 75MM",
        bg: "#fef9c3",
        image: resolveUpload("/lovable-uploads/vies-poliester-rubi-1.jpg"),
      },
    ],
  },
  {
    key: "rendas",
    label: "Rendas",
    badge: "RENDA",
    icon: <Sparkles className="w-4 h-4" />,
    products: [
      {
        name: "Renda 7 Mares",
        description: "17cm — diversas cores",
        bg: "#fee2e2",
        image: resolveUpload("/lovable-uploads/renda-7-mares-1.jpg"),
      },
      {
        name: "Renda 7 Fios",
        description: "3,2cm largura",
        bg: "#e0f2fe",
        image: resolveUpload("/lovable-uploads/renda-7-fios-1.jpg"),
      },
      {
        name: "Renda bebê",
        description: "Acabamentos elegantes",
        bg: "#f0fdf4",
        image: resolveUpload("/lovable-uploads/renda-belle.jpg"),
      },
    ],
  },
];

const TABS: { key: "todos" | MobileGroup["key"]; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "elasticos", label: "Elásticos" },
  { key: "vies", label: "Viés" },
  { key: "rendas", label: "Rendas" },
];

const MobileTabletView = () => {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]["key"]>("todos");

  const visibleGroups = useMemo(
    () => (activeTab === "todos" ? mobileGroups : mobileGroups.filter((g) => g.key === activeTab)),
    [activeTab]
  );

  return (
    <div className="lg:hidden">
      <style>{`
        .op-scroll::-webkit-scrollbar { display: none; }
        .op-scroll { scrollbar-width: none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; scroll-snap-type: x mandatory; }
        .op-snap { scroll-snap-align: start; }
      `}</style>

      {/* 1. Header */}
      <section style={{ backgroundColor: "#1B2A6B" }} className="px-4 py-5 md:px-10 md:py-8">
        <p className="text-[11px] md:text-xs font-semibold tracking-[0.2em] mb-2" style={{ color: "#FBBF24" }}>
          AVIAMENTOS
        </p>
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">Outros produtos</h1>
        <p className="text-sm md:text-base text-white/70">
          Complemente seus projetos com qualidade e variedade
        </p>
      </section>

      {/* 2. Tabs */}
      <nav className="sticky top-16 z-30 bg-white border-b border-gray-200">
        <div className="op-scroll flex overflow-x-auto px-3 md:px-10">
          {TABS.map((t) => {
            const active = activeTab === t.key;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setActiveTab(t.key)}
                className="op-snap flex-shrink-0 px-4 py-3 text-sm font-medium transition-colors relative"
                style={{ color: active ? "#1B2A6B" : "#6b7280" }}
              >
                {t.label}
                {active && (
                  <span
                    className="absolute left-3 right-3 bottom-0 h-0.5 rounded-full"
                    style={{ backgroundColor: "#1B2A6B" }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* 3. Carousels */}
      <div className="py-6" style={{ backgroundColor: "#f5f5f5" }}>
        {visibleGroups.map((group) => (
          <section key={group.key} className="mb-5 last:mb-0">
            {/* label separator */}
            <div className="flex items-center gap-3 px-4 md:px-10 mb-3">
              <span style={{ color: "#1B2A6B" }}>{group.icon}</span>
              <span
                className="text-xs font-bold tracking-[0.15em]"
                style={{ color: "#1B2A6B" }}
              >
                {group.label.toUpperCase()}
              </span>
              <span className="flex-1 h-px bg-gray-300" />
            </div>

            <div className="op-scroll flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible gap-3 md:gap-4 px-4 md:px-10 pb-2">
              {group.products.map((p) => (
                <article
                  key={p.name}
                  className="op-snap flex-shrink-0 w-[150px] md:w-auto bg-white rounded-lg shadow-sm overflow-hidden flex flex-col"

                >
                  <div
                    className="relative h-[110px] md:h-[140px]"

                    style={{ backgroundColor: p.bg }}
                  >
                    {p.image && (
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    )}
                    <span
                      className="absolute top-1.5 left-1.5 md:top-2.5 md:left-2.5 text-[9px] md:text-[11px] font-semibold px-1.5 py-0.5 md:px-2 md:py-1 rounded"
                      style={{ backgroundColor: "#1B2A6B", color: "#fff" }}
                    >
                      {group.badge}
                    </span>
                  </div>
                  <div className="p-2.5 md:p-4 flex-1 flex flex-col">
                    <h3 className="text-sm md:text-base font-bold leading-tight mb-1 md:mb-1.5" style={{ color: "#1B2A6B" }}>
                      {p.name}
                    </h3>
                    <p className="text-[11px] md:text-[13px] text-gray-500 leading-tight mb-2.5 md:mb-3 flex-1">
                      {p.description}
                    </p>

                    <a
                      href={waLink(p.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center text-xs md:text-sm font-semibold py-2 md:py-2.5 rounded transition-colors"
                      style={{ backgroundColor: "#1B2A6B", color: "#fff" }}
                    >
                      Consultar
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

// ---------- Desktop (existing layout) ----------

const DesktopView = () => {
  const vies = [
    { name: "Elástico Fênix", description: "Elástico Fênix com largura de 7mm disponível em diversas cores.", images: ["/lovable-uploads/elastico-fenix-1.jpg", "/lovable-uploads/elastico-fenix-2.jpg"] },
    { name: "Elástico Jurere", description: "Elástico Jurere com largura de 12mm disponível em diversas cores.", image: "/lovable-uploads/elastico-jurere.jpg" },
    { name: "Viés Noronha", description: "Viés Noronha disponível em diversas cores para acabamentos de alta qualidade.", images: ["/lovable-uploads/vies-noronha-1.jpg", "/lovable-uploads/vies-noronha-2.jpg", "/lovable-uploads/vies-noronha-3.jpg", "/lovable-uploads/vies-noronha-4.jpg"] },
    { name: "Viés de poliester rubi", description: "Viés de poliester rubi disponível nas larguras 16 MM e 25 MM.", images: ["/lovable-uploads/vies-poliester-rubi-1.jpg", "/lovable-uploads/vies-poliester-rubi-2.jpg", "/lovable-uploads/vies-poliester-rubi-3.jpg"] },
    { name: "Viés de poliamida paraná", description: "Viés de poliamida paraná disponível nas larguras 16 MM e 25 MM.", images: ["/lovable-uploads/vies-parana-nova-1.jpg", "/lovable-uploads/vies-parana-nova-2.jpg"] },
    { name: "Viés de poliamida 7 fios", description: "Viés de poliamida disponível nas larguras 16 MM e 25 MM.", images: ["/lovable-uploads/vies-poliamida-nova-1.jpg", "/lovable-uploads/vies-poliamida-nova-2.jpg", "/lovable-uploads/vies-poliamida-nova-3.jpg"] },
  ];

  const elasticos = [
    { name: "Elásticos personalizados", description: "Crie elásticos com sua marca", image: "/lovable-uploads/elasticos-personalizados.jpg" },
    { name: "Elástico liso", description: "Elásticos lisos de alta qualidade disponíveis em diversas cores. Largura 25MM, 30MM e 35MM", images: ["/lovable-uploads/elasticos-lisos-1.jpg", "/lovable-uploads/elasticos-lisos-2.jpg", "/lovable-uploads/elasticos-lisos-3.jpg", "/lovable-uploads/elasticos-lisos-4.jpg"] },
    { name: "Elásticos de arte pública", description: "Elásticos de arte pública disponíveis nas larguras 25MM, 30MM e 35MM", images: ["/lovable-uploads/elasticos-arte-publica-1.jpg", "/lovable-uploads/elasticos-arte-publica-2.jpg", "/lovable-uploads/elastico-arte-publica-3.jpg", "/lovable-uploads/elasticos-arte-publica-4.jpg", "/lovable-uploads/elasticos-arte-publica-5.jpg"] },
  ];

  const rendas = [
    { name: "Renda 7 Fios", description: "Renda 7 Fios com largura de 3,3 cm disponível em diversas cores. Composição: Poliamida e Elastano.", images: ["/lovable-uploads/renda-7-fios-1.jpg", "/lovable-uploads/renda-7-fios-2.jpg"] },
    { name: "Renda 7 Mares", description: "Renda 7 Mares largura 17cm disponível em diversas cores para acabamentos sofisticados.", images: ["/lovable-uploads/renda-7-mares-1.jpg", "/lovable-uploads/renda-7-mares-5.jpg", "/lovable-uploads/renda-7-mares-6.jpg", "/lovable-uploads/renda-7-mares-7.jpg", "/lovable-uploads/renda-7-mares-8.jpg", "/lovable-uploads/renda-7-mares-9.jpg", "/lovable-uploads/renda-7-mares-10.jpg", "/lovable-uploads/renda-7-mares-11.jpg"] },
    { name: "Renda Belle", description: "Renda Belle disponível em diversas cores para acabamentos elegantes.", image: "/lovable-uploads/renda-belle.jpg" },
  ];

  const categories = [
    { title: "Elástico", icon: <Package className="w-6 h-6" />, description: "Elásticos resistentes para todos os tipos de costura", products: elasticos },
    { title: "Rendas", icon: <Package className="w-6 h-6" />, description: "Rendas delicadas e sofisticadas para acabamentos elegantes", products: rendas },
    { title: "Aviamentos", icon: <Package className="w-6 h-6" />, description: "Aviamentos de qualidade para acabamentos perfeitos em suas peças", products: vies },
  ];

  return (
    <div className="hidden lg:block container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Outros Produtos</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Complete seus projetos com nossos aviamentos e acessórios de qualidade.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {categories.map((category, index) => (
          <Card key={index} className="text-center shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                {category.icon}
              </div>
              <CardTitle className="text-xl font-semibold text-foreground">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{category.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {categories.map((category, categoryIndex) => (
        <section key={categoryIndex} className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mr-3 text-primary-foreground">
              {category.icon}
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{category.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.products.map((product, productIndex) => (
              <ProductCard
                key={productIndex}
                name={product.name}
                description={product.description}
                category={category.title}
                imagePlaceholder={`Foto do ${product.name}`}
                imageUrl={(product as any).image}
                images={(product as any).images}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

const OutrosProdutos = () => (
  <>
    <MobileTabletView />
    <DesktopView />
  </>
);

export default OutrosProdutos;
