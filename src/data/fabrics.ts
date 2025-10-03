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
      mainImage: "/lovable-uploads/romantik-branco-new.jpg",
      fabrics: [
        {
          type: "ROMANTIK LISO",
          category: "POLIESTER",
          description: "Tecido leve e resistente com toque suave e fácil manutenção.",
          composition: "92% Poliéster, 8% Elastano",
          recommendedUse: "Ideal para vestidos, blusas e peças básicas",
          mainImage: "/lovable-uploads/romantik-branco-new.jpg",
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
            { name: "Amarelo BB", code: "AMB-001", swatch: "/lovable-uploads/romantik-amarelo-bb-new.jpg" },
            { name: "Azul Oceano", code: "AZO-001", swatch: "/lovable-uploads/romantik-azul-oceano-new.jpg" },
            { name: "Bic", code: "BIC-001", swatch: "/lovable-uploads/romantik-bic-new.jpg" },
            { name: "Branco", code: "BRA-001", swatch: "/lovable-uploads/romantik-branco-new.jpg" },
            { name: "Canela", code: "CAN-001", swatch: "/lovable-uploads/romantik-canela-new.jpg" },
            { name: "Castanho", code: "CAS-001", swatch: "/lovable-uploads/romantik-castanho-new.jpg" },
            { name: "Chumbo", code: "CHU-001", swatch: "/lovable-uploads/romantik-chumbo-new.jpg" },
            { name: "Coral", code: "COR-001", swatch: "/lovable-uploads/romantik-coral-new.jpg" },
            { name: "Frozen", code: "FRO-001", swatch: "/lovable-uploads/romantik-frozen-new.jpg" },
            { name: "Fucsia", code: "FUC-001", swatch: "/lovable-uploads/romantik-fucsia-new.jpg" },
            { name: "Ires", code: "IRE-001", swatch: "/lovable-uploads/romantik-ires-new.jpg" },
            { name: "Lavanda", code: "LAV-001", swatch: "/lovable-uploads/romantik-lavanda-new.jpg" },
            { name: "Marrom", code: "MAR-001", swatch: "/lovable-uploads/romantik-marrom-new.jpg" },
            { name: "Pimenta", code: "PIM-001", swatch: "/lovable-uploads/romantik-pimenta-new.jpg" },
            { name: "Pink", code: "PIN-001", swatch: "/lovable-uploads/romantik-pink-new.jpg" },
            { name: "Preto", code: "PRE-001", swatch: "/lovable-uploads/romantik-preto-new.jpg" },
            { name: "Romance", code: "ROM-001", swatch: "/lovable-uploads/romantik-romance-new.jpg" },
            { name: "Rosa BB", code: "RSB-001", swatch: "/lovable-uploads/romantik-rosa-bb-new.jpg" },
            { name: "Sensuale", code: "SEN-001", swatch: "/lovable-uploads/romantik-sensuale-new.jpg" },
            { name: "Tangerina", code: "TAN-001", swatch: "/lovable-uploads/romantik-tangerina-new.jpg" },
            { name: "Teos", code: "TEO-001", swatch: "/lovable-uploads/romantik-teos-new.jpg" },
            { name: "Terra", code: "TER-001", swatch: "/lovable-uploads/romantik-terra-new.jpg" },
            { name: "Tibeton", code: "TIB-001", swatch: "/lovable-uploads/romantik-tibeton-new.jpg" },
            { name: "Tulipero", code: "TUL-001", swatch: "/lovable-uploads/romantik-tulipero-new.jpg" },
            { name: "Turquesa", code: "TUR-001", swatch: "/lovable-uploads/romantik-turquesa-new.jpg" },
            { name: "Verde Jade", code: "VJA-001", swatch: "/lovable-uploads/romantik-verde-jade-new.jpg" },
            { name: "Verde Musgo", code: "VMU-001", swatch: "/lovable-uploads/romantik-verde-musgo-new.jpg" },
            { name: "Verde Pavão", code: "VPA-001", swatch: "/lovable-uploads/romantik-verde-pavao-new.jpg" },
            { name: "Vermelho", code: "VER-001", swatch: "/lovable-uploads/romantik-vermelho-new.jpg" }
          ]
        },
        {
          type: "POLISIDE",
          category: "POLIESTER",
          description: "Microfibra de poliéster premium com excelente caimento e proteção UV 30+.",
          composition: "93% Poliéster, 7% Elastano",
          recommendedUse: "Ideal para moda íntima, fitness e peças confortáveis",
          mainImage: "/lovable-uploads/poliside-branco-novo.jpg",
          technicalSpecs: [
            { label: "Largura", value: "1,70" },
            { label: "Gramatura", value: "160" },
            { label: "Rendimento", value: "3,80MM" }
          ],
          usageExamples: ["Lingerie", "Fitness", "Moda Praia", "Peças Confortáveis"],
          technologies: [
            { name: "Excelente Caimento", description: "Molda ao corpo perfeitamente" },
            { name: "Alta Elasticidade", description: "Movimentação livre e confortável" }
          ],
          colors: [
            { name: "Azul Celeste", code: "POL-001", swatch: "/lovable-uploads/poliside-azul-celeste-novo.jpg" },
            { name: "Verde Jade", code: "POL-002", swatch: "/lovable-uploads/poliside-verde-jade-novo.jpg" },
            { name: "Cor 1", code: "POL-003", swatch: "/lovable-uploads/poliside-cor1-novo.jpg" },
            { name: "Cor 2", code: "POL-004", swatch: "/lovable-uploads/poliside-cor2-novo.jpg" },
            { name: "Cor 3", code: "POL-005", swatch: "/lovable-uploads/poliside-cor3-novo.jpg" },
            { name: "Cor 4", code: "POL-006", swatch: "/lovable-uploads/poliside-cor4-novo.jpg" },
            { name: "Cor 5", code: "POL-007", swatch: "/lovable-uploads/poliside-cor5-novo.jpg" },
            { name: "Cor 6", code: "POL-008", swatch: "/lovable-uploads/poliside-cor6-novo.jpg" },
            { name: "Cor 7", code: "POL-009", swatch: "/lovable-uploads/poliside-cor7-novo.jpg" },
            { name: "Cor 8", code: "POL-010", swatch: "/lovable-uploads/poliside-cor8-novo.jpg" }
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
            { name: "Azul Oceano", code: "HAW-001", swatch: "/lovable-uploads/hawai-azul-oceano-novo.jpg" },
            { name: "Bic", code: "HAW-002", swatch: "/lovable-uploads/hawai-bic-novo.jpg" },
            { name: "Branco", code: "HAW-003", swatch: "/lovable-uploads/hawai-branco-novo.jpg" },
            { name: "Canela", code: "HAW-004", swatch: "/lovable-uploads/hawai-canela-novo.jpg" },
            { name: "Castanho", code: "HAW-005", swatch: "/lovable-uploads/hawai-castanho-novo.jpg" },
            { name: "Chumbo", code: "HAW-006", swatch: "/lovable-uploads/hawai-chumbo-novo.jpg" }
          ]
        },
        {
          type: "MADRI",
          category: "POLIESTER",
          description: "Microfibra de alta qualidade com ampla cartela de cores.",
          composition: "92% Poliéster, 8% Elastano",
          recommendedUse: "Versátil para diversos tipos de confecção",
          mainImage: "/lovable-uploads/madri-branco-novo.jpg",
          technicalSpecs: [
            { label: "Largura", value: "1,70" },
            { label: "Gramatura", value: "160" },
            { label: "Rendimento", value: "4MM" }
          ],
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
          composition: "92% Poliéster, 8% Elastano",
          recommendedUse: "Ideal para peças sofisticadas e confortáveis",
          mainImage: "/lovable-uploads/milao-branco.jpg",
          technicalSpecs: [
            { label: "Largura", value: "1,65m" },
            { label: "Gramatura", value: "165" },
            { label: "Rendimento", value: "3,70m²/kg" }
          ],
          colors: [
            { name: "Amarelo BB", code: "MIL-001", swatch: "/lovable-uploads/milao-amarelo-bb-novo2.jpg" },
            { name: "Azul Oceano", code: "MIL-002", swatch: "/lovable-uploads/milao-azul-oceano-novo.jpg" },
            { name: "Bic", code: "MIL-003", swatch: "/lovable-uploads/milao-bic-novo2.jpg" },
            { name: "Branco", code: "MIL-004", swatch: "/lovable-uploads/milao-branco-novo.jpg" },
            { name: "Canela", code: "MIL-005", swatch: "/lovable-uploads/milao-canela-novo2.jpg" },
            { name: "Castanho", code: "MIL-006", swatch: "/lovable-uploads/milao-castanho-novo2.jpg" },
            { name: "Chumbo", code: "MIL-007", swatch: "/lovable-uploads/milao-chumbo-novo.jpg" },
            { name: "Coral", code: "MIL-008", swatch: "/lovable-uploads/milao-coral-novo2.jpg" },
            { name: "Frozen", code: "MIL-009", swatch: "/lovable-uploads/milao-frozen-novo2.jpg" },
            { name: "Fucsia", code: "MIL-010", swatch: "/lovable-uploads/milao-fuscia-novo2.jpg" },
            { name: "Ires", code: "MIL-011", swatch: "/lovable-uploads/milao-ires-novo2.jpg" },
            { name: "Lavanda", code: "MIL-012", swatch: "/lovable-uploads/milao-lavanda-novo2.jpg" },
            { name: "Marrom", code: "MIL-013", swatch: "/lovable-uploads/milao-marrom-novo.jpg" },
            { name: "Pimenta", code: "MIL-014", swatch: "/lovable-uploads/milao-pimenta-novo3.jpg" },
            { name: "Pink", code: "MIL-015", swatch: "/lovable-uploads/milao-pink-novo.jpg" },
            { name: "Preto", code: "MIL-016", swatch: "/lovable-uploads/milao-preto-novo.jpg" },
            { name: "Romance", code: "MIL-017", swatch: "/lovable-uploads/milao-romance-novo2.jpg" },
            { name: "Rosa BB", code: "MIL-018", swatch: "/lovable-uploads/milao-rosa-bb-novo.jpg" },
            { name: "Sanremo", code: "MIL-019", swatch: "/lovable-uploads/milao-sanremo-novo3.jpg" },
            { name: "Sensuale", code: "MIL-020", swatch: "/lovable-uploads/milao-sensuale-novo.jpg" },
            { name: "Teos", code: "MIL-021", swatch: "/lovable-uploads/milao-teos-novo.jpg" },
            { name: "Terra", code: "MIL-022", swatch: "/lovable-uploads/milao-terra-novo2.jpg" },
            { name: "Tibeton", code: "MIL-023", swatch: "/lovable-uploads/milao-tibeton-novo3.jpg" },
            { name: "Tulipero", code: "MIL-024", swatch: "/lovable-uploads/milao-tulipero-novo2.jpg" },
            { name: "Turquesa", code: "MIL-025", swatch: "/lovable-uploads/milao-turquesa-novo.jpg" },
            { name: "Verde Jade", code: "MIL-026", swatch: "/lovable-uploads/milao-verde-jade-novo.jpg" },
            { name: "Verde Musgo", code: "MIL-027", swatch: "/lovable-uploads/milao-verde-musgo-novo.jpg" },
            { name: "Verde Pavão", code: "MIL-028", swatch: "/lovable-uploads/milao-verde-pavao-novo.jpg" },
            { name: "Vermelho", code: "MIL-029", swatch: "/lovable-uploads/milao-vermelho-novo3.jpg" }
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
        },
        {
          type: "ROMANTIK MESCLADO",
          category: "POLIESTER",
          description: "Romantik com efeito mesclado moderno e versátil.",
          composition: "92% Poliéster, 8% Elastano",
          recommendedUse: "Ideal para peças casuais e estilosas",
          mainImage: "/lovable-uploads/romantik-mescla-novo.jpg",
          technicalSpecs: [
            { label: "Largura", value: "1,65" },
            { label: "Gramatura", value: "180 g/m²" },
            { label: "Rendimento", value: "3,60MM" }
          ],
          usageExamples: ["Vestidos", "Blusas", "Saias", "Peças Casuais"],
          colors: [
            { name: "Mescla", code: "RME-001", swatch: "/lovable-uploads/romantik-mescla-novo.jpg" }
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
