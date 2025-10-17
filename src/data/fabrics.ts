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
          recommendedUse: "Ideal para moda íntima, sleep wear, vestidos e peças básicas",
          mainImage: "/lovable-uploads/romantik-liso-novo.jpg",
          technicalSpecs: [
            { label: "Largura", value: "1,65" },
            { label: "Gramatura", value: "180" },
            { label: "Rendimento", value: "3,60MM" }
          ],
          usageExamples: ["Vestidos", "Lingerie", "Blusas", "Peças Básicas", "Camisolas"],
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
          description: "Microfibra de poliéster com excelente caimento e proteção UV 30+",
          composition: "93% Poliéster, 7% Elastano",
          recommendedUse: "Ideal para moda íntima e sleep wear",
          mainImage: "/lovable-uploads/poliside-principal-novo.jpg",
          technicalSpecs: [
            { label: "Largura", value: "1,70" },
            { label: "Gramatura", value: "160" },
            { label: "Rendimento", value: "3,80MM" }
          ],
          usageExamples: ["Lingerie", "Moda Praia", "Peças Confortáveis", "Camisolas"],
          technologies: [
            { name: "Excelente Caimento", description: "Molda ao corpo perfeitamente" },
            { name: "Alta Elasticidade", description: "Movimentação livre e confortável" }
          ],
          colors: [
            { name: "Amarelo BB", code: "POL-001", swatch: "/lovable-uploads/hawai-amarelo-bb-novo.jpg" },
            { name: "Azul Oceano", code: "POL-002", swatch: "/lovable-uploads/hawai-azul-oceano-novo.jpg" },
            { name: "Bic", code: "POL-003", swatch: "/lovable-uploads/hawai-bic-novo.jpg" },
            { name: "Branco", code: "POL-004", swatch: "/lovable-uploads/hawai-branco-novo.jpg" },
            { name: "Canela", code: "POL-005", swatch: "/lovable-uploads/hawai-canela-novo.jpg" },
            { name: "Castanho", code: "POL-006", swatch: "/lovable-uploads/hawai-castanho-novo.jpg" },
            { name: "Chumbo", code: "POL-007", swatch: "/lovable-uploads/hawai-chumbo-novo.jpg" },
            { name: "Coral", code: "POL-008", swatch: "/lovable-uploads/hawai-coral-novo2.jpg" },
            { name: "Frozen", code: "POL-009", swatch: "/lovable-uploads/hawai-frozen-novo.jpg" },
            { name: "Fucsia", code: "POL-010", swatch: "/lovable-uploads/hawai-fucsia-novo.jpg" },
            { name: "Ires", code: "POL-011", swatch: "/lovable-uploads/hawai-ires-novo.jpg" },
            { name: "Pimenta", code: "POL-012", swatch: "/lovable-uploads/hawai-pimenta-novo2.jpg" },
            { name: "Preto", code: "POL-013", swatch: "/lovable-uploads/hawai-preto-novo2.jpg" },
            { name: "Sensuale", code: "POL-014", swatch: "/lovable-uploads/hawai-sensuale-novo2.jpg" },
            { name: "Terra", code: "POL-015", swatch: "/lovable-uploads/hawai-terra-novo2.jpg" },
            { name: "Tulipero", code: "POL-016", swatch: "/lovable-uploads/hawai-tulipero-novo2.jpg" },
            { name: "Turquesa", code: "POL-017", swatch: "/lovable-uploads/hawai-turquesa-novo2.jpg" },
            { name: "Verde Jade", code: "POL-018", swatch: "/lovable-uploads/hawai-verde-jade-novo2.jpg" },
            { name: "Verde Musgo", code: "POL-019", swatch: "/lovable-uploads/hawai-verde-musgo-novo2.jpg" },
            { name: "Vermelho", code: "POL-020", swatch: "/lovable-uploads/hawai-vermelho-novo2.jpg" },
            { name: "Lavanda", code: "POL-021", swatch: "/lovable-uploads/hawai-lavanda-novo.jpg" },
            { name: "Marrom", code: "POL-022", swatch: "/lovable-uploads/hawai-marrom-novo.jpg" },
            { name: "Pink", code: "POL-023", swatch: "/lovable-uploads/hawai-pink-novo.jpg" },
            { name: "Romance", code: "POL-024", swatch: "/lovable-uploads/hawai-romance-novo.jpg" },
            { name: "Rosa BB", code: "POL-025", swatch: "/lovable-uploads/hawai-rosa-bb-novo.jpg" },
            { name: "Tangerina", code: "POL-026", swatch: "/lovable-uploads/hawai-tangerina-novo.jpg" },
            { name: "Teos", code: "POL-027", swatch: "/lovable-uploads/hawai-teos-novo.jpg" },
            { name: "Tibeton", code: "POL-028", swatch: "/lovable-uploads/hawai-tibeton-novo.jpg" },
            { name: "Verde Pavão", code: "POL-029", swatch: "/lovable-uploads/hawai-verde-pavao-novo.jpg" },
            { name: "Azul BB", code: "POL-030", swatch: "/lovable-uploads/poliside-azul-bb-novo2.jpg" },
            { name: "Denim", code: "POL-031", swatch: "/lovable-uploads/poliside-denim-novo2.jpg" },
            { name: "Erva Doce", code: "POL-032", swatch: "/lovable-uploads/poliside-erva-doce-novo.jpg" },
            { name: "Grafite", code: "POL-033", swatch: "/lovable-uploads/poliside-grafite-novo2.jpg" },
            { name: "Marfim", code: "POL-034", swatch: "/lovable-uploads/poliside-marfim-novo2.jpg" },
            { name: "Salmão", code: "POL-035", swatch: "/lovable-uploads/poliside-salmao-novo2.jpg" },
            { name: "Tame", code: "POL-036", swatch: "/lovable-uploads/poliside-tame-novo2.jpg" }
          ]
        },
        {
          type: "HAWAI",
          category: "POLIESTER",
          description: "Microfibra de poliéster com excelente caimento",
          composition: "92% Poliéster, 8% Elastano",
          recommendedUse: "Ideal para moda íntima e sleep wear",
          mainImage: "/lovable-uploads/hawai-principal-novo.jpg",
          technicalSpecs: [
            { label: "Largura", value: "170" },
            { label: "Gramatura", value: "185" },
            { label: "Rendimento", value: "3,70" }
          ],
          usageExamples: ["Lingerie", "Moda Praia", "Peças Confortáveis", "Camisolas"],
          colors: [
            { name: "Amarelo BB", code: "HAW-001", swatch: "/lovable-uploads/hawai-amarelo-bb-novo.jpg" },
            { name: "Azul Oceano", code: "HAW-002", swatch: "/lovable-uploads/hawai-azul-oceano-novo.jpg" },
            { name: "Bic", code: "HAW-003", swatch: "/lovable-uploads/hawai-bic-novo.jpg" },
            { name: "Branco", code: "HAW-004", swatch: "/lovable-uploads/hawai-branco-novo.jpg" },
            { name: "Canela", code: "HAW-005", swatch: "/lovable-uploads/hawai-canela-novo.jpg" },
            { name: "Castanho", code: "HAW-006", swatch: "/lovable-uploads/hawai-castanho-novo.jpg" },
            { name: "Chumbo", code: "HAW-007", swatch: "/lovable-uploads/hawai-chumbo-novo.jpg" },
            { name: "Coral", code: "HAW-008", swatch: "/lovable-uploads/hawai-coral-novo2.jpg" },
            { name: "Frozen", code: "HAW-009", swatch: "/lovable-uploads/hawai-frozen-novo.jpg" },
            { name: "Fucsia", code: "HAW-010", swatch: "/lovable-uploads/hawai-fucsia-novo.jpg" },
            { name: "Ires", code: "HAW-011", swatch: "/lovable-uploads/hawai-ires-novo.jpg" },
            { name: "Pimenta", code: "HAW-012", swatch: "/lovable-uploads/hawai-pimenta-novo2.jpg" },
            { name: "Preto", code: "HAW-013", swatch: "/lovable-uploads/hawai-preto-novo2.jpg" },
            { name: "Sensuale", code: "HAW-014", swatch: "/lovable-uploads/hawai-sensuale-novo2.jpg" },
            { name: "Terra", code: "HAW-015", swatch: "/lovable-uploads/hawai-terra-novo2.jpg" },
            { name: "Tulipero", code: "HAW-016", swatch: "/lovable-uploads/hawai-tulipero-novo2.jpg" },
            { name: "Turquesa", code: "HAW-017", swatch: "/lovable-uploads/hawai-turquesa-novo2.jpg" },
            { name: "Verde Jade", code: "HAW-018", swatch: "/lovable-uploads/hawai-verde-jade-novo2.jpg" },
            { name: "Verde Musgo", code: "HAW-019", swatch: "/lovable-uploads/hawai-verde-musgo-novo2.jpg" },
            { name: "Vermelho", code: "HAW-020", swatch: "/lovable-uploads/hawai-vermelho-novo2.jpg" },
            { name: "Lavanda", code: "HAW-021", swatch: "/lovable-uploads/hawai-lavanda-novo.jpg" },
            { name: "Marrom", code: "HAW-022", swatch: "/lovable-uploads/hawai-marrom-novo.jpg" },
            { name: "Pink", code: "HAW-023", swatch: "/lovable-uploads/hawai-pink-novo.jpg" },
            { name: "Romance", code: "HAW-024", swatch: "/lovable-uploads/hawai-romance-novo.jpg" },
            { name: "Rosa BB", code: "HAW-025", swatch: "/lovable-uploads/hawai-rosa-bb-novo.jpg" },
            { name: "Tangerina", code: "HAW-026", swatch: "/lovable-uploads/hawai-tangerina-novo.jpg" },
            { name: "Teos", code: "HAW-027", swatch: "/lovable-uploads/hawai-teos-novo.jpg" },
            { name: "Tibeton", code: "HAW-028", swatch: "/lovable-uploads/hawai-tibeton-novo.jpg" },
            { name: "Verde Pavão", code: "HAW-029", swatch: "/lovable-uploads/hawai-verde-pavao-novo.jpg" }
          ]
        },
        {
          type: "MADRI",
          category: "POLIESTER",
          description: "Microfibra com alto rendimento e variedade de cores",
          composition: "92% Poliéster, 8% Elastano",
          recommendedUse: "Ideal para moda praia e moda íntima",
          mainImage: "/lovable-uploads/madri-principal-novo.jpg",
          technicalSpecs: [
            { label: "Largura", value: "1,70" },
            { label: "Gramatura", value: "160" },
            { label: "Rendimento", value: "4MM" }
          ],
          usageExamples: ["Camisa UV", "Lingerie", "Baby Dolls", "Moda Infantil", "Cuecas"],
          colors: [
            { name: "Amarelo BB", code: "MAD-001", swatch: "/lovable-uploads/hawai-amarelo-bb-novo.jpg" },
            { name: "Azul Oceano", code: "MAD-002", swatch: "/lovable-uploads/hawai-azul-oceano-novo.jpg" },
            { name: "Bic", code: "MAD-003", swatch: "/lovable-uploads/hawai-bic-novo.jpg" },
            { name: "Branco", code: "MAD-004", swatch: "/lovable-uploads/hawai-branco-novo.jpg" },
            { name: "Canela", code: "MAD-005", swatch: "/lovable-uploads/hawai-canela-novo.jpg" },
            { name: "Castanho", code: "MAD-006", swatch: "/lovable-uploads/hawai-castanho-novo.jpg" },
            { name: "Chumbo", code: "MAD-007", swatch: "/lovable-uploads/hawai-chumbo-novo.jpg" },
            { name: "Coral", code: "MAD-008", swatch: "/lovable-uploads/hawai-coral-novo2.jpg" },
            { name: "Frozen", code: "MAD-009", swatch: "/lovable-uploads/hawai-frozen-novo.jpg" },
            { name: "Fucsia", code: "MAD-010", swatch: "/lovable-uploads/hawai-fucsia-novo.jpg" },
            { name: "Ires", code: "MAD-011", swatch: "/lovable-uploads/hawai-ires-novo.jpg" },
            { name: "Pimenta", code: "MAD-012", swatch: "/lovable-uploads/hawai-pimenta-novo2.jpg" },
            { name: "Preto", code: "MAD-013", swatch: "/lovable-uploads/hawai-preto-novo2.jpg" },
            { name: "Sensuale", code: "MAD-014", swatch: "/lovable-uploads/hawai-sensuale-novo2.jpg" },
            { name: "Terra", code: "MAD-015", swatch: "/lovable-uploads/hawai-terra-novo2.jpg" },
            { name: "Tulipero", code: "MAD-016", swatch: "/lovable-uploads/hawai-tulipero-novo2.jpg" },
            { name: "Turquesa", code: "MAD-017", swatch: "/lovable-uploads/hawai-turquesa-novo2.jpg" },
            { name: "Verde Jade", code: "MAD-018", swatch: "/lovable-uploads/hawai-verde-jade-novo2.jpg" },
            { name: "Verde Musgo", code: "MAD-019", swatch: "/lovable-uploads/hawai-verde-musgo-novo2.jpg" },
            { name: "Vermelho", code: "MAD-020", swatch: "/lovable-uploads/hawai-vermelho-novo2.jpg" },
            { name: "Lavanda", code: "MAD-021", swatch: "/lovable-uploads/hawai-lavanda-novo.jpg" },
            { name: "Marrom", code: "MAD-022", swatch: "/lovable-uploads/hawai-marrom-novo.jpg" },
            { name: "Pink", code: "MAD-023", swatch: "/lovable-uploads/hawai-pink-novo.jpg" },
            { name: "Romance", code: "MAD-024", swatch: "/lovable-uploads/hawai-romance-novo.jpg" },
            { name: "Rosa BB", code: "MAD-025", swatch: "/lovable-uploads/hawai-rosa-bb-novo.jpg" },
            { name: "Tangerina", code: "MAD-026", swatch: "/lovable-uploads/hawai-tangerina-novo.jpg" },
            { name: "Teos", code: "MAD-027", swatch: "/lovable-uploads/hawai-teos-novo.jpg" },
            { name: "Tibeton", code: "MAD-028", swatch: "/lovable-uploads/hawai-tibeton-novo.jpg" },
            { name: "Verde Pavão", code: "MAD-029", swatch: "/lovable-uploads/hawai-verde-pavao-novo.jpg" }
          ]
        },
        {
          type: "MILÃO",
          category: "POLIESTER",
          description: "Microfibra premium com toque sedoso e ótimo caimento",
          composition: "92% Poliéster, 8% Elastano",
          recommendedUse: "Ideal para peças confortáveis, ideal para o verão",
          mainImage: "/lovable-uploads/milao-principal-novo.jpg",
          technicalSpecs: [
            { label: "Largura", value: "1,65m" },
            { label: "Gramatura", value: "165" },
            { label: "Rendimento", value: "3,70m²/kg" }
          ],
          usageExamples: ["Vestidos", "Lingerie", "Blusas", "Peças Básicas", "Camisolas"],
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
          type: "ROMANTIK RISCA DE GIZ",
          category: "POLIESTER",
          description: "Tecido leve e resistente com toque suave e fácil manutenção",
          composition: "92% Poliéster, 8% Elastano",
          recommendedUse: "Ideal para moda masculina, fitness, íntima, sleep wear e peças básicas",
          mainImage: "/lovable-uploads/romantik-risca-novo.jpg",
          technicalSpecs: [
            { label: "Largura", value: "1,65" },
            { label: "Gramatura", value: "180" },
            { label: "Rendimento", value: "3,60MM" }
          ],
          usageExamples: ["Fitness", "Cueca", "Blusas", "Peças Básicas", "Camisolas"],
          technologies: [
            { name: "Toque Suave", description: "Textura macia ao toque" },
            { name: "Fácil Manutenção", description: "Não amassa facilmente" }
          ],
          colors: [
            { name: "Azul Oceano", code: "RRC-001", swatch: "/lovable-uploads/romantik-risca-azul-oceano.jpg" },
            { name: "Bic", code: "RRC-002", swatch: "/lovable-uploads/romantik-risca-bic.jpg" },
            { name: "Branco", code: "RRC-003", swatch: "/lovable-uploads/romantik-risca-branco.jpg" },
            { name: "Castanho", code: "RRC-004", swatch: "/lovable-uploads/romantik-risca-castanho.jpg" },
            { name: "Frozen", code: "RRC-005", swatch: "/lovable-uploads/romantik-risca-frozen.jpg" },
            { name: "Gris", code: "RRC-006", swatch: "/lovable-uploads/romantik-risca-gris.jpg" },
            { name: "Jade", code: "RRC-007", swatch: "/lovable-uploads/romantik-risca-jade.jpg" },
            { name: "Pavão", code: "RRC-008", swatch: "/lovable-uploads/romantik-risca-pavao.jpg" },
            { name: "Pimenta", code: "RRC-009", swatch: "/lovable-uploads/romantik-risca-pimenta.jpg" },
            { name: "Preto", code: "RRC-010", swatch: "/lovable-uploads/romantik-risca-preto.jpg" },
            { name: "Sensuale", code: "RRC-011", swatch: "/lovable-uploads/romantik-risca-sensuale.jpg" },
            { name: "Tibeton", code: "RRC-012", swatch: "/lovable-uploads/romantik-risca-tibeton.jpg" },
            { name: "Turquesa", code: "RRC-013", swatch: "/lovable-uploads/romantik-risca-turquesa.jpg" },
            { name: "Vermelho", code: "RRC-014", swatch: "/lovable-uploads/romantik-risca-vermelho.jpg" }
          ]
        },
        {
          type: "ROMANTIK MESCLADO",
          category: "POLIESTER",
          description: "Tecido leve e resistente com toque suave e fácil manutenção",
          composition: "92% Poliéster, 8% Elastano",
          recommendedUse: "Ideal para moda masculina, fitness, íntima, sleep wear e peças básicas",
          mainImage: "/lovable-uploads/romantik-mesclado-novo.jpg",
          technicalSpecs: [
            { label: "Largura", value: "1,65" },
            { label: "Gramatura", value: "180" },
            { label: "Rendimento", value: "3,60MM" }
          ],
          usageExamples: ["Fitness", "Cueca", "Blusas", "Peças Básicas", "Camisolas"],
          technologies: [
            { name: "Toque Suave", description: "Textura macia ao toque" },
            { name: "Fácil Manutenção", description: "Não amassa facilmente" }
          ],
          colors: [
            { name: "Azul Oceano", code: "RME-001", swatch: "/lovable-uploads/romantik-mescla-azul-oceano.jpg" },
            { name: "Bic", code: "RME-002", swatch: "/lovable-uploads/romantik-mescla-bic.jpg" },
            { name: "Major", code: "RME-003", swatch: "/lovable-uploads/romantik-mescla-major.jpg" },
            { name: "Sensuale", code: "RME-004", swatch: "/lovable-uploads/romantik-mescla-sensuale.jpg" },
            { name: "Tibeton", code: "RME-005", swatch: "/lovable-uploads/romantik-mescla-tibeton.jpg" },
            { name: "Tomate", code: "RME-006", swatch: "/lovable-uploads/romantik-mescla-tomate.jpg" },
            { name: "Turquesa", code: "RME-007", swatch: "/lovable-uploads/romantik-mescla-turquesa.jpg" },
            { name: "Verde Musgo", code: "RME-008", swatch: "/lovable-uploads/romantik-mescla-verde-musgo.jpg" }
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
          composition: "91% Poliamida, 9% Elastano",
          recommendedUse: "Ideal para moda fitness, praia e íntima",
          mainImage: "/lovable-uploads/poliamida-principal-novo.jpg",
          technicalSpecs: [
            { label: "Largura", value: "160m" },
            { label: "Gramatura", value: "180" },
            { label: "Rendimento", value: "3,47" }
          ],
          usageExamples: ["Biquínis", "Maiôs", "Tops", "Shorts", "Calcinha", "Cuecas", "Saias", "Vestidos Leves"],
          colors: [
            { name: "Amarelo BB", code: "DPA-001", swatch: "/lovable-uploads/delitex-amarelo-bb.png" },
            { name: "Aventurine", code: "DPA-002", swatch: "/lovable-uploads/delitex-aventurine.png" },
            { name: "Azulejo", code: "DPA-003", swatch: "/lovable-uploads/delitex-azulejo.png" },
            { name: "Bic", code: "DPA-004", swatch: "/lovable-uploads/delitex-bic.png" },
            { name: "Branco", code: "DPA-005", swatch: "/lovable-uploads/delitex-branco.png" },
            { name: "Burgundy", code: "DPA-006", swatch: "/lovable-uploads/delitex-burgundy.png" },
            { name: "Canela", code: "DPA-007", swatch: "/lovable-uploads/delitex-canela.png" },
            { name: "Carol", code: "DPA-008", swatch: "/lovable-uploads/delitex-carol.png" },
            { name: "Castanho", code: "DPA-009", swatch: "/lovable-uploads/delitex-castanho.png" },
            { name: "Cronos", code: "DPA-010", swatch: "/lovable-uploads/delitex-cronos.png" },
            { name: "Denim", code: "DPA-011", swatch: "/lovable-uploads/delitex-denim.png" },
            { name: "Frozen", code: "DPA-012", swatch: "/lovable-uploads/delitex-frozen.png" },
            { name: "Fuscia", code: "DPA-013", swatch: "/lovable-uploads/delitex-fuscia.png" },
            { name: "Grafite", code: "DPA-014", swatch: "/lovable-uploads/delitex-grafite.png" },
            { name: "Green Olive", code: "DPA-015", swatch: "/lovable-uploads/delitex-green-olive.png" },
            { name: "Gris", code: "DPA-016", swatch: "/lovable-uploads/delitex-gris.png" },
            { name: "Ires", code: "DPA-017", swatch: "/lovable-uploads/delitex-ires.png" }
          ]
        },
        {
          type: "POLIAMIDA DARLYNG",
          category: "POLIAMIDA",
          description: "É um tecido de alta qualidade, desenvolvido para quem busca conforto, toque macio e excelente caimento.",
          composition: "90% Poliamida, 10% Elastano",
          recommendedUse: "Ideal para moda casual, íntima, praia e fitness",
          mainImage: "/lovable-uploads/poliamida-darlyng-principal.jpg",
          technicalSpecs: [
            { label: "Largura", value: "160m" },
            { label: "Gramatura", value: "180" },
            { label: "Rendimento", value: "3,47" }
          ],
          usageExamples: ["Blusas leves", "Vestidos", "Saias", "Calcinhas", "Cuecas", "Biquínis", "Maiôs", "Tops", "Shorts"],
          colors: [
            { name: "Branco", code: "PFL-001", swatch: "/lovable-uploads/poliside-branco-novo.jpg" },
            { name: "Preto", code: "PFL-002", swatch: "/lovable-uploads/poliside-preto-novo.jpg" }
          ]
        },
        {
          type: "POLIAMIDA PREMIUM",
          category: "POLIAMIDA",
          description: "É um tecido de alto padrão, desenvolvido para quem busca qualidade superior, conforto e durabilidade.",
          composition: "90% Poliamida, 10% Elastano",
          recommendedUse: "Linha premium para peças exclusivas",
          mainImage: "/lovable-uploads/poliamida-premium-novo.jpg",
          technicalSpecs: [
            { label: "Largura", value: "160m" },
            { label: "Gramatura", value: "180" },
            { label: "Rendimento", value: "3,47" }
          ],
          usageExamples: ["Biquínis", "Maiôs", "Tops", "Shorts", "Macacões", "Calcinhas", "Sutiãs", "Cuecas", "Blusas ajustadas", "Vestidos leves", "Saias confortáveis", "Camisetas"],
          colors: [
            { name: "Aço", code: "PP-001", swatch: "/lovable-uploads/poliamida-premium-aco.png" },
            { name: "Aquaril", code: "PP-002", swatch: "/lovable-uploads/poliamida-premium-aquaril.png" },
            { name: "Atalaia", code: "PP-003", swatch: "/lovable-uploads/poliamida-premium-atalaia.png" },
            { name: "Blue", code: "PP-004", swatch: "/lovable-uploads/poliamida-premium-blue.png" },
            { name: "Branco", code: "PP-005", swatch: "/lovable-uploads/poliamida-premium-branco.png" },
            { name: "Bubblegum", code: "PP-006", swatch: "/lovable-uploads/poliamida-premium-bubblegum.png" },
            { name: "Cabaret", code: "PP-007", swatch: "/lovable-uploads/poliamida-premium-cabaret.png" },
            { name: "Canela", code: "PP-008", swatch: "/lovable-uploads/poliamida-premium-canela.png" },
            { name: "Coral", code: "PP-009", swatch: "/lovable-uploads/poliamida-premium-coral.png" },
            { name: "Cronos", code: "PP-010", swatch: "/lovable-uploads/poliamida-premium-cronos.png" },
            { name: "Herança", code: "PP-011", swatch: "/lovable-uploads/poliamida-premium-heranca.png" },
            { name: "Hot", code: "PP-012", swatch: "/lovable-uploads/poliamida-premium-hot.png" },
            { name: "Iceberg", code: "PP-013", swatch: "/lovable-uploads/poliamida-premium-iceberg.png" },
            { name: "Jaipur", code: "PP-014", swatch: "/lovable-uploads/poliamida-premium-jaipur.png" },
            { name: "Lavanda", code: "PP-015", swatch: "/lovable-uploads/poliamida-premium-lavanda.png" },
            { name: "Lichia", code: "PP-016", swatch: "/lovable-uploads/poliamida-premium-lichia.png" },
            { name: "Louise", code: "PP-017", swatch: "/lovable-uploads/poliamida-premium-louise.png" },
            { name: "Marinho", code: "PP-018", swatch: "/lovable-uploads/poliamida-premium-marinho.png" },
            { name: "Marrocos", code: "PP-019", swatch: "/lovable-uploads/poliamida-premium-marrocos.png" },
            { name: "Mocassim", code: "PP-020", swatch: "/lovable-uploads/poliamida-premium-mocassim.png" },
            { name: "Odalisca", code: "PP-021", swatch: "/lovable-uploads/poliamida-premium-odalisca.png" },
            { name: "Pantera", code: "PP-022", swatch: "/lovable-uploads/poliamida-premium-pantera.png" },
            { name: "Pavão", code: "PP-023", swatch: "/lovable-uploads/poliamida-premium-pavao.png" },
            { name: "Pérola Sol", code: "PP-024", swatch: "/lovable-uploads/poliamida-premium-perola-sol.png" },
            { name: "Pimenta", code: "PP-025", swatch: "/lovable-uploads/poliamida-premium-pimenta.png" },
            { name: "Preto", code: "PP-026", swatch: "/lovable-uploads/poliamida-premium-preto.png" },
            { name: "Rouse", code: "PP-027", swatch: "/lovable-uploads/poliamida-premium-rouse.png" },
            { name: "Sandia", code: "PP-028", swatch: "/lovable-uploads/poliamida-premium-sandia.png" },
            { name: "Sanremo", code: "PP-029", swatch: "/lovable-uploads/poliamida-premium-sanremo.png" },
            { name: "Sensuale", code: "PP-030", swatch: "/lovable-uploads/poliamida-premium-sensuale.png" },
            { name: "Sun Kiss", code: "PP-031", swatch: "/lovable-uploads/poliamida-premium-sunkiss.png" },
            { name: "Teos", code: "PP-032", swatch: "/lovable-uploads/poliamida-premium-teos.png" },
            { name: "Terra", code: "PP-033", swatch: "/lovable-uploads/poliamida-premium-terra.png" },
            { name: "Tulipero", code: "PP-034", swatch: "/lovable-uploads/poliamida-premium-tulipero.png" },
            { name: "Vintage", code: "PP-035", swatch: "/lovable-uploads/poliamida-premium-vintage.png" }
          ]
        }
      ]
    },
    {
      name: "DRY-FIT",
      slug: "dry-fit",
      description: "Tecidos técnicos com tecnologia de secagem rápida.",
      mainImage: "/lovable-uploads/dry-fit-principal.jpg",
      fabrics: [
        {
          type: "DRY FIT PRIME",
          category: "DRY-FIT",
          description: "É um tecido tecnológico de alta performance, desenvolvido para proporcionar máximo conforto, respirabilidade e liberdade de movimento, tecido soft touch.",
          composition: "90% Poliéster, 10% Elastano",
          recommendedUse: "Ideal para quem busca conforto térmico e leveza em roupas esportivas ou casuais.",
          mainImage: "/lovable-uploads/dry-fit-principal.jpg",
          technicalSpecs: [
            { label: "Largura", value: "1,60" },
            { label: "Gramatura", value: "150" },
            { label: "Rendimento", value: "4,15" }
          ],
          usageExamples: ["Moda fitness", "Moda esportiva", "Moda casual", "Uniformes profissionais"],
          technologies: [
            { name: "Secagem Rápida", description: "Elimina umidade rapidamente" },
            { name: "Respirável", description: "Permite circulação de ar" },
            { name: "Anti-odor", description: "Controle de bactérias" }
          ],
          colors: [
            { name: "Azul", code: "DRY-001", swatch: "/lovable-uploads/dry-fit-azul.png" },
            { name: "Bic", code: "DRY-002", swatch: "/lovable-uploads/dry-fit-bic.png" },
            { name: "Bordô", code: "DRY-003", swatch: "/lovable-uploads/dry-fit-bordo.png" },
            { name: "Branco", code: "DRY-004", swatch: "/lovable-uploads/dry-fit-branco.png" },
            { name: "Chumbo", code: "DRY-005", swatch: "/lovable-uploads/dry-fit-chumbo.png" },
            { name: "Laranja", code: "DRY-006", swatch: "/lovable-uploads/dry-fit-laranja.png" },
            { name: "Lavanda", code: "DRY-007", swatch: "/lovable-uploads/dry-fit-lavanda.png" },
            { name: "Lipstick", code: "DRY-008", swatch: "/lovable-uploads/dry-fit-lipstick.png" },
            { name: "Major", code: "DRY-009", swatch: "/lovable-uploads/dry-fit-major.png" },
            { name: "Marinho", code: "DRY-010", swatch: "/lovable-uploads/dry-fit-marinho.png" },
            { name: "Marrom", code: "DRY-011", swatch: "/lovable-uploads/dry-fit-marrom.png" },
            { name: "Preto", code: "DRY-012", swatch: "/lovable-uploads/dry-fit-preto.png" },
            { name: "Rosa", code: "DRY-013", swatch: "/lovable-uploads/dry-fit-rosa.png" },
            { name: "Terra", code: "DRY-014", swatch: "/lovable-uploads/dry-fit-terra.png" },
            { name: "Verde", code: "DRY-015", swatch: "/lovable-uploads/dry-fit-verde.png" },
            { name: "Vermelho", code: "DRY-016", swatch: "/lovable-uploads/dry-fit-vermelho.png" }
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
          description: "Tecido leve e resistente com toque suave e fácil manutenção. 92% Poliéster, 8% Elastano",
          composition: "92% Poliéster, 8% Elastano",
          recommendedUse: "Ideal para moda intima, moda praia, moda sleep wear e moda infantil",
          mainImage: "/lovable-uploads/romantik-fucsia-novo.jpg",
          technicalSpecs: [
            { label: "Largura", value: "1,60" },
            { label: "Gramatura", value: "150" },
            { label: "Rendimento", value: "4,15" }
          ],
          usageExamples: ["Vestidos", "Lingerie", "Blusas", "Camisolas"],
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
