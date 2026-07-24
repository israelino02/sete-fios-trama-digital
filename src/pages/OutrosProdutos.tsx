import { useState } from "react";
import { Sparkles, Layers, Scissors } from "lucide-react";

type CategoryKey = "elasticos" | "vies" | "rendas";

interface Product {
  name: string;
  description: string;
  bg: string;
}

interface Section {
  key: CategoryKey;
  label: string;
  tabLabel: string;
  icon: React.ReactNode;
  products: Product[];
}

const WA_PHONE = "5581994616071";
const buildWa = (productName: string) =>
  `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(
    `Olá! Tenho interesse em ${productName}. Podem me ajudar?`
  )}`;

const sections: Section[] = [
  {
    key: "elasticos",
    label: "ELÁSTICOS",
    tabLabel: "Elásticos",
    icon: <Layers className="w-4 h-4" />,
    products: [
      { name: "Elástico liso", description: "25MM, 30MM e 35MM", bg: "#fef3c7" },
      { name: "Arte pública", description: "25MM, 30MM e 35MM", bg: "#fce7f3" },
      { name: "Elástico fino", description: "Alta qualidade", bg: "#dbeafe" },
    ],
  },
  {
    key: "vies",
    label: "VIÉS",
    tabLabel: "Viés",
    icon: <Scissors className="w-4 h-4" />,
    products: [
      { name: "Viés Noronha", description: "Diversas cores", bg: "#ede9fe" },
      { name: "Viés poliamida", description: "70MM e 75MM", bg: "#d1fae5" },
      { name: "Viés poliamida rubi", description: "70MM e 75MM", bg: "#fef9c3" },
    ],
  },
  {
    key: "rendas",
    label: "RENDAS",
    tabLabel: "Rendas",
    icon: <Sparkles className="w-4 h-4" />,
    products: [
      { name: "Renda 7 Mares", description: "17cm — diversas cores", bg: "#fee2e2" },
      { name: "Renda 7 Fios", description: "3,2cm largura", bg: "#e0f2fe" },
      { name: "Renda bebê", description: "Acabamentos elegantes", bg: "#f0fdf4" },
    ],
  },
];

const NAVY = "#1B2A6B";
const YELLOW = "#FBBF24";

type TabKey = "todos" | CategoryKey;

const tabs: { key: TabKey; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "elasticos", label: "Elásticos" },
  { key: "vies", label: "Viés" },
  { key: "rendas", label: "Rendas" },
];

const ProductCard = ({ product, categoryLabel }: { product: Product; categoryLabel: string }) => (
  <div className="flex-shrink-0 w-[150px] snap-start rounded-lg overflow-hidden bg-white shadow-sm border border-black/5">
    <div
      className="relative h-[110px] flex items-center justify-center"
      style={{ backgroundColor: product.bg }}
    >
      <span
        className="absolute top-2 left-2 text-[10px] font-semibold px-2 py-0.5 rounded"
        style={{ backgroundColor: NAVY, color: "#fff" }}
      >
        {categoryLabel}
      </span>
    </div>
    <div className="p-2.5 flex flex-col gap-2">
      <div>
        <h3 className="text-sm font-bold leading-tight" style={{ color: NAVY }}>
          {product.name}
        </h3>
        <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">{product.description}</p>
      </div>
      <a
        href={buildWa(product.name)}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full text-center text-xs font-semibold py-1.5 rounded transition-opacity hover:opacity-90"
        style={{ backgroundColor: NAVY, color: "#fff" }}
      >
        Consultar
      </a>
    </div>
  </div>
);

const Carousel = ({ section }: { section: Section }) => (
  <div>
    <div className="flex items-center gap-3 mb-3 px-4">
      <span style={{ color: NAVY }}>{section.icon}</span>
      <h2 className="text-sm font-bold tracking-wider" style={{ color: NAVY }}>
        {section.label}
      </h2>
      <div className="flex-1 h-px bg-gray-300" />
    </div>
    <div
      className="flex gap-3 overflow-x-auto px-4 pb-2 no-scrollbar"
      style={{
        scrollSnapType: "x mandatory",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {section.products.map((p) => (
        <ProductCard key={p.name} product={p} categoryLabel={section.tabLabel} />
      ))}
    </div>
  </div>
);

const OutrosProdutos = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("todos");

  const visibleSections =
    activeTab === "todos" ? sections : sections.filter((s) => s.key === activeTab);

  return (
    <div style={{ backgroundColor: "#f5f5f5" }} className="min-h-screen -mt-0">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
      `}</style>

      {/* HEADER */}
      <header style={{ backgroundColor: NAVY }} className="px-4 py-10 text-center">
        <p
          className="text-xs font-bold tracking-[0.2em] mb-3"
          style={{ color: YELLOW }}
        >
          AVIAMENTOS
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Outros produtos</h1>
        <p className="text-sm md:text-base text-white/70">
          Complemente seus projetos com qualidade e variedade
        </p>
      </header>

      {/* TABS */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-20">
        <div
          className="flex overflow-x-auto no-scrollbar px-4"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {tabs.map((tab) => {
            const active = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="relative px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors"
                style={{ color: active ? NAVY : "#6b7280" }}
              >
                {tab.label}
                {active && (
                  <span
                    className="absolute left-2 right-2 bottom-0 h-0.5 rounded-t"
                    style={{ backgroundColor: NAVY }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* CAROUSELS */}
      <div className="py-6 space-y-5 max-w-4xl mx-auto">
        {visibleSections.map((section) => (
          <Carousel key={section.key} section={section} />
        ))}
      </div>
    </div>
  );
};

export default OutrosProdutos;
