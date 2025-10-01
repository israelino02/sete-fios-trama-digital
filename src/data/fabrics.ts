export interface ColorSwatch {
  name: string;
  code: string;
  swatch: string;
}

export interface TechnicalSpec {
  label: string;
  value: string;
}

export interface Technology {
  name: string;
  description: string;
}

export interface Fabric {
  type: string;
  category: string;
  description: string;
  composition: string;
  recommendedUse: string;
  mainImage: string;
  colors: ColorSwatch[];
  technicalSpecs?: TechnicalSpec[];
  usageExamples?: string[];
  technologies?: Technology[];
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  mainImage: string;
  fabrics: Fabric[];
}

export interface FabricsData {
  categories: Category[];
}

export const fabricsData: FabricsData = {
  categories: [
    {
      name: "MICROFIBRAS DE POLIESTER",
      slug: "poliester",
      description: "Microfibras de poliéster de alta qualidade, versáteis e duráveis.",
      mainImage: "/lovable-uploads/romantik-branco-novo.jpg",
      fabrics: [
        {
          type: "ROMANTIK LISO",
          category: "POLIESTER",
          description: "Tecido leve e resistente com toque suave e fácil manutenção.",
          composition: "92% Poliéster, 8% Elastano",
          recommendedUse: "Ideal para vestidos, blusas e peças básicas",
          mainImage: "/lovable-uploads/romantik-branco-novo.jpg",
          technicalSpecs: [
            { label: "Largura", value: "1,65" },
            { label: "Gramatura", value: "180 g/m²" },
            { label: "Rendimento", value: "3,60MM" }
          ],
          usageExamples: ["Vestidos", "Blusas", "Saias", "Peças Básicas"],
          technologies: [
            { name: "Toque Suave", description: "Textura macia ao toque" },
            { name: "Fácil Manutenção", description: "Não amassa facilmente" }
          ],
          colors: [
            { name: "Romance", code: "ROM-001", swatch: "/lovable-uploads/romantik-romance.jpg" },
            { name: "Tulipero", code: "TUL-001", swatch: "/lovable-uploads/romantik-tulipero.jpg" },
            { name: "Rosa BB", code: "RSB-001", swatch: "/lovable-uploads/romantik-rosa-bb.jpg" },
            { name: "Tangerina", code: "TAN-001", swatch: "/lovable-uploads/romantik-tangerina.jpg" },
            { name: "Marrom", code: "MAR-001", swatch: "/lovable-uploads/romantik-marrom-novo.jpg" },
            { name: "Turquesa", code: "TUR-001", swatch: "/lovable-uploads/romantik-turquesa-novo.jpg" },
            { name: "Coral", code: "COR-001", swatch: "/lovable-uploads/romantik-coral-novo.jpg" },
            { name: "Chumbo", code: "CHU-001", swatch: "/lovable-uploads/romantik-chumbo-novo.jpg" },
            { name: "Castanho", code: "CAS-001", swatch: "/lovable-uploads/romantik-castanho-novo.jpg" },
            { name: "Verde Musgo", code: "VEM-001", swatch: "/lovable-uploads/romantik-verde-musgo-novo.jpg" },
            { name: "Azul Oceano", code: "AZO-001", swatch: "/lovable-uploads/romantik-azul-oceano-novo.jpg" },
            { name: "Verde Jade", code: "VEJ-001", swatch: "/lovable-uploads/romantik-verde-jade-novo.jpg" },
            { name: "Branco", code: "BRA-001", swatch: "/lovable-uploads/romantik-branco-novo.jpg" },
            { name: "Canela", code: "CAN-001", swatch: "/lovable-uploads/romantik-canela-novo.jpg" },
            { name: "Preto", code: "PRE-001", swatch: "/lovable-uploads/romantik-preto-novo.jpg" },
            { name: "Bic", code: "BIC-001", swatch: "/lovable-uploads/romantik-bic-novo.jpg" },
            { name: "Terra", code: "TER-001", swatch: "/lovable-uploads/romantik-terra-novo.jpg" },
            { name: "Sensuale", code: "SEN-001", swatch: "/lovable-uploads/romantik-sensuale-novo.jpg" },
            { name: "Vermelho", code: "VER-001", swatch: "/lovable-uploads/romantik-vermelho-novo.jpg" },
            { name: "Pimenta", code: "PIM-001", swatch: "/lovable-uploads/romantik-pimenta-novo.jpg" },
            { name: "Amarelo BB", code: "AMB-001", swatch: "/lovable-uploads/romantik-amarelo-bb-novo.jpg" },
            { name: "Tibeton", code: "TIB-001", swatch: "/lovable-uploads/romantik-tibeton-novo.jpg" },
            { name: "Ires", code: "IRE-001", swatch: "/lovable-uploads/romantik-ires-novo.jpg" },
            { name: "Fucsia", code: "FUC-001", swatch: "/lovable-uploads/romantik-fucsia-novo.jpg" },
            { name: "Theos", code: "THE-001", swatch: "/lovable-uploads/romantik-theos-novo.jpg" },
            { name: "Verde Pavão", code: "VEP-001", swatch: "/lovable-uploads/romantik-verde-pavao-novo.jpg" },
            { name: "Frozen", code: "FRO-001", swatch: "/lovable-uploads/romantik-frozen-novo.jpg" },
            { name: "Lavanda", code: "LAV-001", swatch: "/lovable-uploads/romantik-lavanda-novo.jpg" },
            { name: "Mescla", code: "MES-001", swatch: "/lovable-uploads/romantik-mescla-novo.jpg" },
            { name: "Pink", code: "PIN-001", swatch: "/lovable-uploads/romantik-pink.jpg" }
          ]
        },
        {
          type: "POLISIDE",
          category: "POLIESTER",
          description: "Microfibra de poliéster premium com excelente caimento.",
          composition: "82% Poliéster, 18% Elastano",
          recommendedUse: "Ideal para moda íntima, fitness e peças confortáveis",
          mainImage: "/lovable-uploads/poliside-branco-novo.jpg",
          technicalSpecs: [
            { label: "Largura", value: "1,50m" },
            { label: "Gramatura", value: "200 g/m²" },
            { label: "Rendimento", value: "Médio-Alto" }
          ],
          usageExamples: ["Lingerie", "Fitness", "Moda Praia", "Peças Confortáveis"],
          technologies: [
            { name: "Excelente Caimento", description: "Molda ao corpo perfeitamente" },
            { name: "Alta Elasticidade", description: "Movimentação livre e confortável" }
          ],
          colors: [
            { name: "Branco", code: "POL-001", swatch: "/lovable-uploads/poliside-branco-novo.jpg" },
            { name: "Preto", code: "POL-002", swatch: "/lovable-uploads/poliside-preto-novo.jpg" },
            { name: "Bic", code: "POL-003", swatch: "/lovable-uploads/poliside-bic-novo.jpg" },
            { name: "Canela", code: "POL-004", swatch: "/lovable-uploads/poliside-canela-novo.jpg" },
            { name: "Castanho", code: "POL-005", swatch: "/lovable-uploads/poliside-castanho-novo.jpg" },
            { name: "Coral", code: "POL-006", swatch: "/lovable-uploads/poliside-coral-novo.jpg" },
            { name: "Marfim", code: "POL-007", swatch: "/lovable-uploads/poliside-marfim-novo.jpg" },
            { name: "Pimenta", code: "POL-008", swatch: "/lovable-uploads/poliside-pimenta-novo.jpg" },
            { name: "Terra", code: "POL-009", swatch: "/lovable-uploads/poliside-terra-novo.jpg" },
            { name: "Vermelho", code: "POL-010", swatch: "/lovable-uploads/poliside-vermelho-novo.jpg" },
            { name: "Jade", code: "POL-011", swatch: "/lovable-uploads/poliside-jade-novo.jpg" },
            { name: "Turquesa", code: "POL-012", swatch: "/lovable-uploads/poliside-turquesa-novo.jpg" },
            { name: "Grafite", code: "POL-013", swatch: "/lovable-uploads/poliside-grafite-novo.jpg" },
            { name: "Marinho", code: "POL-014", swatch: "/lovable-uploads/poliside-marinho-novo.jpg" },
            { name: "Pink", code: "POL-015", swatch: "/lovable-uploads/poliside-pink-novo.jpg" },
            { name: "Rosa BB", code: "POL-016", swatch: "/lovable-uploads/poliside-rosa-bb.jpg" },
            { name: "Romance", code: "POL-017", swatch: "/lovable-uploads/poliside-romance-novo.jpg" },
            { name: "Sensuale", code: "POL-018", swatch: "/lovable-uploads/poliside-sensuale-novo.jpg" },
            { name: "Tibeton", code: "POL-019", swatch: "/lovable-uploads/poliside-tibeton-novo.jpg" },
            { name: "Ires", code: "POL-020", swatch: "/lovable-uploads/poliside-ires-novo.jpg" }
          ]
        },
        {
          type: "HAWAI",
          category: "POLIESTER",
          description: "Microfibra com textura especial e cores vibrantes.",
          composition: "92% Poliéster, 8% Elastano",
          recommendedUse: "Perfeito para peças esportivas e casuais",
          mainImage: "/lovable-uploads/hawai-branco-novo.jpg",
          technicalSpecs: [
            { label: "Largura", value: "170" },
            { label: "Gramatura", value: "185" },
            { label: "Rendimento", value: "3,70" }
          ],
          usageExamples: ["Sportswear", "Casual", "Moda Praia"],
          colors: [
            { name: "Branco", code: "HAW-001", swatch: "/lovable-uploads/hawai-branco-novo.jpg" },
            { name: "Preto", code: "HAW-002", swatch: "/lovable-uploads/hawai-preto-novo.jpg" },
            { name: "Bic", code: "HAW-003", swatch: "/lovable-uploads/hawai-bic-novo.jpg" },
            { name: "Canela", code: "HAW-004", swatch: "/lovable-uploads/hawai-canela-novo.jpg" },
            { name: "Castanho", code: "HAW-005", swatch: "/lovable-uploads/hawai-castanho-novo.jpg" },
            { name: "Chumbo", code: "HAW-006", swatch: "/lovable-uploads/hawai-chumbo-novo.jpg" },
            { name: "Coral", code: "HAW-007", swatch: "/lovable-uploads/hawai-coral-novo.jpg" },
            { name: "Pimenta", code: "HAW-008", swatch: "/lovable-uploads/hawai-pimenta-novo.jpg" },
            { name: "Sensuale", code: "HAW-009", swatch: "/lovable-uploads/hawai-sensuale-novo.jpg" },
            { name: "Terra", code: "HAW-010", swatch: "/lovable-uploads/hawai-terra-novo.jpg" },
            { name: "Tulipero", code: "HAW-011", swatch: "/lovable-uploads/hawai-tulipero-novo.jpg" },
            { name: "Turquesa", code: "HAW-012", swatch: "/lovable-uploads/hawai-turquesa-novo.jpg" },
            { name: "Verde Jade", code: "HAW-013", swatch: "/lovable-uploads/hawai-verde-jade-novo.jpg" },
            { name: "Verde Musgo", code: "HAW-014", swatch: "/lovable-uploads/hawai-verde-musgo-novo.jpg" },
            { name: "Vermelho", code: "HAW-015", swatch: "/lovable-uploads/hawai-vermelho-novo.jpg" },
            { name: "Azul Oceano", code: "HAW-016", swatch: "/lovable-uploads/hawai-azul-oceano-novo.jpg" }
          ]
        },
        {
          type: "MADRI",
          category: "POLIESTER",
          description: "Microfibra de alta qualidade com ampla cartela de cores.",
          composition: "78% Poliéster, 22% Elastano",
          recommendedUse: "Versátil para diversos tipos de confecção",
          mainImage: "/lovable-uploads/madri-branco-novo.jpg",
          colors: [
            { name: "Branco", code: "MAD-001", swatch: "/lovable-uploads/madri-branco-novo.jpg" },
            { name: "Preto", code: "MAD-002", swatch: "/lovable-uploads/madri-preto-novo.jpg" },
            { name: "Bic", code: "MAD-003", swatch: "/lovable-uploads/madri-bic-novo.jpg" },
            { name: "Canela", code: "MAD-004", swatch: "/lovable-uploads/madri-canela-novo.jpg" },
            { name: "Fucsia", code: "MAD-005", swatch: "/lovable-uploads/madri-fucsia-novo.jpg" },
            { name: "Ires", code: "MAD-006", swatch: "/lovable-uploads/madri-ires-novo.jpg" },
            { name: "Pimenta", code: "MAD-007", swatch: "/lovable-uploads/madri-pimenta-novo.jpg" },
            { name: "Pink", code: "MAD-008", swatch: "/lovable-uploads/madri-pink-novo.jpg" },
            { name: "Romance", code: "MAD-009", swatch: "/lovable-uploads/madri-romance-novo.jpg" },
            { name: "Rosa BB", code: "MAD-010", swatch: "/lovable-uploads/madri-rosa-bb-novo.jpg" }
          ]
        },
        {
          type: "MILÃO",
          category: "POLIESTER",
          description: "Microfibra premium com toque sedoso e ótimo caimento.",
          composition: "85% Poliéster, 15% Elastano",
          recommendedUse: "Ideal para peças sofisticadas e confortáveis",
          mainImage: "/lovable-uploads/milao-branco.jpg",
          colors: [
            { name: "Branco", code: "MIL-001", swatch: "/lovable-uploads/milao-branco.jpg" },
            { name: "Preto", code: "MIL-002", swatch: "/lovable-uploads/milao-preto.jpg" },
            { name: "Bic", code: "MIL-003", swatch: "/lovable-uploads/milao-bic-novo.jpg" },
            { name: "Canela", code: "MIL-004", swatch: "/lovable-uploads/milao-canela-novo.jpg" },
            { name: "Castanho", code: "MIL-005", swatch: "/lovable-uploads/milao-castanho-novo.jpg" },
            { name: "Coral", code: "MIL-006", swatch: "/lovable-uploads/milao-coral-novo.jpg" },
            { name: "Cronos", code: "MIL-007", swatch: "/lovable-uploads/milao-cronos-novo.jpg" },
            { name: "Frozen", code: "MIL-008", swatch: "/lovable-uploads/milao-frozen-novo.jpg" },
            { name: "Fuscia", code: "MIL-009", swatch: "/lovable-uploads/milao-fuscia-novo.jpg" },
            { name: "Gris", code: "MIL-010", swatch: "/lovable-uploads/milao-gris-novo.jpg" }
          ]
        },
        {
          type: "POLISIDE PRIME",
          category: "POLIESTER",
          description: "Versão premium da linha Poliside com acabamento especial.",
          composition: "85% Poliéster, 18% Elastano",
          recommendedUse: "Premium para lingerie e moda fitness de alta qualidade",
          mainImage: "/lovable-uploads/poliside-branco-novo.jpg",
          colors: [
            { name: "Branco", code: "PP-001", swatch: "/lovable-uploads/poliside-branco-novo.jpg" },
            { name: "Preto", code: "PP-002", swatch: "/lovable-uploads/poliside-preto-novo.jpg" },
            { name: "Sensuale", code: "PP-003", swatch: "/lovable-uploads/poliside-sensuale-novo.jpg" },
            { name: "Romance", code: "PP-004", swatch: "/lovable-uploads/poliside-romance-novo.jpg" },
            { name: "Coral", code: "PP-005", swatch: "/lovable-uploads/poliside-coral-novo.jpg" },
            { name: "Jade", code: "PP-006", swatch: "/lovable-uploads/poliside-jade-novo.jpg" }
          ]
        },
        {
          type: "ROMANTIK RISCA DE GIZ",
          category: "POLIESTER",
          description: "Romantik com padrão de risca de giz elegante e moderno.",
          composition: "80% Poliéster, 20% Elastano",
          recommendedUse: "Ideal para peças diferenciadas e executivas",
          mainImage: "/lovable-uploads/romantik-mescla-novo.jpg",
          colors: [
            { name: "Mescla", code: "RRG-001", swatch: "/lovable-uploads/romantik-mescla-novo.jpg" },
            { name: "Preto", code: "RRG-002", swatch: "/lovable-uploads/romantik-preto-novo.jpg" },
            { name: "Chumbo", code: "RRG-003", swatch: "/lovable-uploads/romantik-chumbo-novo.jpg" },
            { name: "Castanho", code: "RRG-004", swatch: "/lovable-uploads/romantik-castanho-novo.jpg" }
          ]
        }
      ]
    },
    {
      name: "MICROFIBRAS DE POLIAMIDA",
      slug: "poliamida",
      description: "Microfibras de poliamida com alta elasticidade e conforto.",
      mainImage: "/lovable-uploads/poliamida-coral.jpg",
      fabrics: [
        {
          type: "DELITEX POLIAMIDA",
          category: "POLIAMIDA",
          description: "Poliamida de alta qualidade com toque sedoso e excelente elasticidade.",
          composition: "85% Poliamida, 15% Elastano",
          recommendedUse: "Indicado para lingerie premium e moda fitness",
          mainImage: "/lovable-uploads/poliamida-coral.jpg",
          colors: [
            { name: "Coral", code: "DPA-001", swatch: "/lovable-uploads/poliamida-coral.jpg" },
            { name: "Rosa BB", code: "DPA-002", swatch: "/lovable-uploads/romantik-rosa-bb-novo.jpg" },
            { name: "Lavanda", code: "DPA-003", swatch: "/lovable-uploads/romantik-lavanda-novo.jpg" }
          ]
        },
        {
          type: "POLIAMIDA FLEX",
          category: "POLIAMIDA",
          description: "Poliamida com máxima elasticidade para máximo conforto.",
          composition: "82% Poliamida, 18% Elastano",
          recommendedUse: "Ideal para peças que exigem alta flexibilidade",
          mainImage: "/lovable-uploads/poliside-branco-novo.jpg",
          colors: [
            { name: "Branco", code: "PFL-001", swatch: "/lovable-uploads/poliside-branco-novo.jpg" },
            { name: "Preto", code: "PFL-002", swatch: "/lovable-uploads/poliside-preto-novo.jpg" }
          ]
        },
        {
          type: "POLIAMIDA SENSI",
          category: "POLIAMIDA",
          description: "Poliamida com toque extra suave para peles sensíveis.",
          composition: "88% Poliamida, 12% Elastano",
          recommendedUse: "Perfeito para peças delicadas e íntimas",
          mainImage: "/lovable-uploads/romantik-sensuale-novo.jpg",
          colors: [
            { name: "Sensuale", code: "PSE-001", swatch: "/lovable-uploads/romantik-sensuale-novo.jpg" },
            { name: "Marfim", code: "PSE-002", swatch: "/lovable-uploads/poliside-marfim-novo.jpg" }
          ]
        },
        {
          type: "POLIAMIDA PREMIUM",
          category: "POLIAMIDA",
          description: "Nossa melhor poliamida com acabamento premium.",
          composition: "90% Poliamida, 10% Elastano",
          recommendedUse: "Linha premium para peças exclusivas",
          mainImage: "/lovable-uploads/poliside-romance-novo.jpg",
          colors: [
            { name: "Romance", code: "PPR-001", swatch: "/lovable-uploads/poliside-romance-novo.jpg" },
            { name: "Coral", code: "PPR-002", swatch: "/lovable-uploads/poliside-coral-novo.jpg" }
          ]
        }
      ]
    },
    {
      name: "DRY-FIT",
      slug: "dry-fit",
      description: "Tecidos técnicos com tecnologia de secagem rápida.",
      mainImage: "/lovable-uploads/milao-preto.jpg",
      fabrics: [
        {
          type: "DRY FIT PRIME",
          category: "DRY-FIT",
          description: "Tecido técnico respirável com tecnologia dry fit para performance máxima.",
          composition: "78% Poliéster Técnico, 22% Elastano",
          recommendedUse: "Indicado para atividades físicas intensas e esportes",
          mainImage: "/lovable-uploads/milao-preto.jpg",
          technicalSpecs: [
            { label: "Tecnologia", value: "Dry Fit" },
            { label: "Respirabilidade", value: "Alta" },
            { label: "Secagem", value: "Rápida" }
          ],
          usageExamples: ["Fitness", "Corrida", "Esportes", "Academia"],
          technologies: [
            { name: "Secagem Rápida", description: "Elimina umidade rapidamente" },
            { name: "Respirável", description: "Permite circulação de ar" },
            { name: "Anti-odor", description: "Controle de bactérias" }
          ],
          colors: [
            { name: "Preto", code: "DRY-001", swatch: "/lovable-uploads/romantik-preto-novo.jpg" },
            { name: "Grafite", code: "DRY-002", swatch: "/lovable-uploads/poliside-grafite-novo.jpg" },
            { name: "Azul Marinho", code: "DRY-003", swatch: "/lovable-uploads/poliside-marinho-novo.jpg" }
          ]
        }
      ]
    },
    {
      name: "ESTAMPADOS",
      slug: "estampados",
      description: "Tecidos com estampas exclusivas e designs únicos.",
      mainImage: "/lovable-uploads/romantik-fucsia-novo.jpg",
      fabrics: [
        {
          type: "ROMANTIK ESTAMPADO",
          category: "ESTAMPADOS",
          description: "Tecidos com padrões exclusivos e cores vibrantes para peças únicas e criativas.",
          composition: "80% Poliéster, 20% Elastano",
          recommendedUse: "Diversos tipos de estampas disponíveis para peças únicas",
          mainImage: "/lovable-uploads/romantik-fucsia-novo.jpg",
          colors: [
            { name: "Fucsia", code: "EST-001", swatch: "/lovable-uploads/romantik-fucsia-novo.jpg" },
            { name: "Tangerina", code: "EST-002", swatch: "/lovable-uploads/romantik-tangerina-nova.jpg" },
            { name: "Rosa BB", code: "EST-003", swatch: "/lovable-uploads/romantik-rosa-bb.jpg" }
          ]
        }
      ]
    }
  ]
};
