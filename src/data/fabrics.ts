export interface ColorSwatch {
  name: string;
  code: string;
  swatch: string;
}

export interface Fabric {
  type: string;
  category: string;
  description: string;
  composition: string;
  recommendedUse: string;
  mainImage: string;
  colors: ColorSwatch[];
}

export interface FabricsData {
  fabrics: Fabric[];
}

export const fabricsData: FabricsData = {
  fabrics: [
    {
      type: "ROMANTIK LISO",
      category: "MICROFIBRAS DE POLIESTER",
      description: "Tecido leve e resistente com toque suave e fácil manutenção.",
      composition: "80% Poliéster, 20% Elastano",
      recommendedUse: "Ideal para vestidos, blusas e peças básicas",
      mainImage: "/lovable-uploads/romantik-branco-novo.jpg",
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
      category: "MICROFIBRAS DE POLIESTER",
      description: "Microfibra de poliéster premium com excelente caimento.",
      composition: "82% Poliéster, 18% Elastano",
      recommendedUse: "Ideal para moda íntima, fitness e peças confortáveis",
      mainImage: "/lovable-uploads/poliside-branco-novo.jpg",
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
        { name: "Ires", code: "POL-020", swatch: "/lovable-uploads/poliside-ires-novo.jpg" },
        { name: "Salmão", code: "POL-021", swatch: "/lovable-uploads/poliside-salmao-novo.jpg" },
        { name: "Denim", code: "POL-022", swatch: "/lovable-uploads/poliside-denim-novo.jpg" },
        { name: "Biscoito", code: "POL-023", swatch: "/lovable-uploads/poliside-biscoito-novo.jpg" },
        { name: "Gris", code: "POL-024", swatch: "/lovable-uploads/poliside-gris-novo.jpg" },
        { name: "Azul BB", code: "POL-025", swatch: "/lovable-uploads/poliside-azul-bb-novo.jpg" },
        { name: "Azul Celeste", code: "POL-026", swatch: "/lovable-uploads/poliside-azul-celeste-novo.jpg" },
        { name: "Verde TW", code: "POL-027", swatch: "/lovable-uploads/poliside-verde-tw-novo.jpg" },
        { name: "Cor 28", code: "POL-028", swatch: "/lovable-uploads/poliside-cor28.jpg" },
        { name: "Cor 29", code: "POL-029", swatch: "/lovable-uploads/poliside-cor29-novo.jpg" },
        { name: "Cor 30", code: "POL-030", swatch: "/lovable-uploads/poliside-cor30-novo.jpg" },
        { name: "Cor 31", code: "POL-031", swatch: "/lovable-uploads/poliside-cor31-novo.jpg" },
        { name: "Cor 32", code: "POL-032", swatch: "/lovable-uploads/poliside-cor32-novo.jpg" },
        { name: "Cor 33", code: "POL-033", swatch: "/lovable-uploads/poliside-cor33-novo.jpg" },
        { name: "Cor 34", code: "POL-034", swatch: "/lovable-uploads/poliside-cor34-novo.jpg" },
        { name: "Cor 35", code: "POL-035", swatch: "/lovable-uploads/poliside-cor35-novo.jpg" },
        { name: "Cor 36", code: "POL-036", swatch: "/lovable-uploads/poliside-cor36-novo.jpg" },
        { name: "Satim", code: "POL-037", swatch: "/lovable-uploads/poliside-satim-novo.jpg" },
        { name: "Tame", code: "POL-038", swatch: "/lovable-uploads/poliside-tame-novo.jpg" }
      ]
    },
    {
      type: "HAWAI",
      category: "MICROFIBRAS DE POLIESTER",
      description: "Microfibra com textura especial e cores vibrantes.",
      composition: "80% Poliéster, 20% Elastano",
      recommendedUse: "Perfeito para peças esportivas e casuais",
      mainImage: "/lovable-uploads/hawai-branco-novo.jpg",
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
      category: "MICROFIBRAS DE POLIESTER",
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
        { name: "Rosa BB", code: "MAD-010", swatch: "/lovable-uploads/madri-rosa-bb-novo.jpg" },
        { name: "Sensuale", code: "MAD-011", swatch: "/lovable-uploads/madri-sensuale-novo.jpg" },
        { name: "Terra", code: "MAD-012", swatch: "/lovable-uploads/madri-terra-novo.jpg" },
        { name: "Tibeton", code: "MAD-013", swatch: "/lovable-uploads/madri-tibeton-novo.jpg" },
        { name: "Tulipero", code: "MAD-014", swatch: "/lovable-uploads/madri-tulipero-novo.jpg" },
        { name: "Verde Jade", code: "MAD-015", swatch: "/lovable-uploads/madri-verde-jade-novo.jpg" },
        { name: "Vermelho", code: "MAD-016", swatch: "/lovable-uploads/madri-vermelho-novo.jpg" },
        { name: "Amarelo BB", code: "MAD-017", swatch: "/lovable-uploads/madri-amarelo-bb-novo.jpg" },
        { name: "Cor 1", code: "MAD-018", swatch: "/lovable-uploads/madri-cor1-novo.jpg" },
        { name: "Cor 2", code: "MAD-019", swatch: "/lovable-uploads/madri-cor2-novo.jpg" },
        { name: "Cor 3", code: "MAD-020", swatch: "/lovable-uploads/madri-cor3-novo.jpg" },
        { name: "Cor 4", code: "MAD-021", swatch: "/lovable-uploads/madri-cor4-novo.jpg" },
        { name: "Cor 5", code: "MAD-022", swatch: "/lovable-uploads/madri-cor5-novo.jpg" },
        { name: "Cor 6", code: "MAD-023", swatch: "/lovable-uploads/madri-cor6-novo.jpg" },
        { name: "Cor 7", code: "MAD-024", swatch: "/lovable-uploads/madri-cor7-novo.jpg" },
        { name: "Cor 8", code: "MAD-025", swatch: "/lovable-uploads/madri-cor8-novo.jpg" },
        { name: "Cor 9", code: "MAD-026", swatch: "/lovable-uploads/madri-cor9-novo.jpg" },
        { name: "Cor 10", code: "MAD-027", swatch: "/lovable-uploads/madri-cor10-novo.jpg" },
        { name: "Cor 11", code: "MAD-028", swatch: "/lovable-uploads/madri-cor11-novo.jpg" },
        { name: "Cor 12", code: "MAD-029", swatch: "/lovable-uploads/madri-cor12-novo.jpg" }
      ]
    },
    {
      type: "MILÃO",
      category: "MICROFIBRAS DE POLIESTER",
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
        { name: "Gris", code: "MIL-010", swatch: "/lovable-uploads/milao-gris-novo.jpg" },
        { name: "Ires", code: "MIL-011", swatch: "/lovable-uploads/milao-ires-novo.jpg" },
        { name: "Lavanda", code: "MIL-012", swatch: "/lovable-uploads/milao-lavanda-novo.jpg" },
        { name: "Marfim", code: "MIL-013", swatch: "/lovable-uploads/milao-marfim-novo.jpg" },
        { name: "Marrom", code: "MIL-014", swatch: "/lovable-uploads/milao-marrom.jpg" },
        { name: "Pavão", code: "MIL-015", swatch: "/lovable-uploads/milao-pavao-novo.jpg" },
        { name: "Pimenta", code: "MIL-016", swatch: "/lovable-uploads/milao-pimenta-novo.jpg" },
        { name: "Pink", code: "MIL-017", swatch: "/lovable-uploads/milao-pink.jpg" },
        { name: "Romance", code: "MIL-018", swatch: "/lovable-uploads/milao-romance-novo.jpg" },
        { name: "Sanremo", code: "MIL-019", swatch: "/lovable-uploads/milao-sanremo-novo.jpg" },
        { name: "Terra", code: "MIL-020", swatch: "/lovable-uploads/milao-terra-novo.jpg" },
        { name: "Tibeton", code: "MIL-021", swatch: "/lovable-uploads/milao-tibeton-novo.jpg" },
        { name: "Tulipero", code: "MIL-022", swatch: "/lovable-uploads/milao-tulipero-novo.jpg" },
        { name: "Verde TW", code: "MIL-023", swatch: "/lovable-uploads/milao-verde-tw.jpg" },
        { name: "Vermelho", code: "MIL-024", swatch: "/lovable-uploads/milao-vermelho-novo.jpg" },
        { name: "Amarelo BB", code: "MIL-025", swatch: "/lovable-uploads/milao-amarelo-bb-novo.jpg" }
      ]
    },
    {
      type: "POLISIDE PRIME",
      category: "MICROFIBRAS DE POLIESTER",
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
      category: "MICROFIBRAS DE POLIESTER",
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
      type: "MICROFIBRAS DE POLIAMIDA",
      category: "MICROFIBRAS DE POLIAMIDA",
      description: "Tecido flexível e confortável de alta qualidade.",
      composition: "85% Poliamida, 15% Elastano",
      recommendedUse: "Indicado para lingerie, moda fitness e peças íntimas",
      mainImage: "/lovable-uploads/poliamida-coral.jpg",
      colors: [
        { name: "Coral", code: "COR-PA-001", swatch: "/lovable-uploads/poliamida-coral.jpg" },
        { name: "Rosa BB", code: "RSB-PA-001", swatch: "/lovable-uploads/romantik-rosa-bb-novo.jpg" },
        { name: "Lavanda", code: "LAV-PA-001", swatch: "/lovable-uploads/romantik-lavanda-novo.jpg" },
        { name: "Sensuale", code: "SEN-PA-001", swatch: "/lovable-uploads/romantik-sensuale-novo.jpg" },
        { name: "Branco", code: "BRA-PA-001", swatch: "/lovable-uploads/poliside-branco-novo.jpg" },
        { name: "Marfim", code: "MAF-PA-001", swatch: "/lovable-uploads/poliside-marfim-novo.jpg" }
      ]
    },
    {
      type: "SUEDE",
      category: "SUEDE",
      description: "Tecido aveludado com toque macio e aspecto sofisticado.",
      composition: "85% Poliéster, 15% Lycra",
      recommendedUse: "Ideal para peças diferenciadas e com personalidade",
      mainImage: "/lovable-uploads/romantik-sensuale-novo.jpg",
      colors: [
        { name: "Canela", code: "CAN-SU-001", swatch: "/lovable-uploads/romantik-canela-novo.jpg" },
        { name: "Castanho", code: "CAS-SU-001", swatch: "/lovable-uploads/romantik-castanho-novo.jpg" },
        { name: "Terra", code: "TER-SU-001", swatch: "/lovable-uploads/romantik-terra-novo.jpg" },
        { name: "Coral", code: "COR-SU-001", swatch: "/lovable-uploads/romantik-coral-novo.jpg" },
        { name: "Sensuale", code: "SEN-SU-001", swatch: "/lovable-uploads/romantik-sensuale-novo.jpg" }
      ]
    },
    {
      type: "DRY-FIT",
      category: "DRY-FIT",
      description: "Tecido técnico respirável com tecnologia dry fit.",
      composition: "78% Poliéster Técnico, 22% Elastano",
      recommendedUse: "Indicado para atividades físicas intensas e esportes",
      mainImage: "/lovable-uploads/milao-preto.jpg",
      colors: [
        { name: "Preto", code: "PRE-DF-001", swatch: "/lovable-uploads/romantik-preto-novo.jpg" },
        { name: "Grafite", code: "GRA-DF-001", swatch: "/lovable-uploads/poliside-grafite-novo.jpg" },
        { name: "Azul Marinho", code: "AZM-DF-001", swatch: "/lovable-uploads/poliside-marinho-novo.jpg" }
      ]
    },
    {
      type: "ESTAMPADOS",
      category: "ESTAMPADOS",
      description: "Tecidos com padrões exclusivos e cores vibrantes.",
      composition: "Variável conforme estampa",
      recommendedUse: "Diversos tipos de estampas disponíveis para peças únicas e criativas",
      mainImage: "/lovable-uploads/romantik-fucsia-novo.jpg",
      colors: [
        { name: "Fucsia", code: "FUC-ES-001", swatch: "/lovable-uploads/romantik-fucsia-novo.jpg" },
        { name: "Tangerina", code: "TAN-ES-001", swatch: "/lovable-uploads/romantik-tangerina-nova.jpg" },
        { name: "Rosa BB", code: "RSB-ES-001", swatch: "/lovable-uploads/romantik-rosa-bb.jpg" }
      ]
    }
  ]
};
