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
        { name: "Pink", code: "PINK-001", swatch: "/lovable-uploads/romantik-pink.jpg" }
      ]
    },
    {
      type: "POLISIDE",
      category: "MICROFIBRAS DE POLIESTER",
      description: "Microfibra de alta qualidade com excelente caimento.",
      composition: "80% Poliéster, 20% Elastano",
      recommendedUse: "Versátil para diversos tipos de peças",
      mainImage: "/lovable-uploads/poliside-branco-novo.jpg",
      colors: [
        { name: "Branco", code: "POL-BRA-001", swatch: "/lovable-uploads/poliside-branco-novo.jpg" },
        { name: "Preto", code: "POL-PRE-001", swatch: "/lovable-uploads/poliside-preto-novo.jpg" },
        { name: "Bic", code: "POL-BIC-001", swatch: "/lovable-uploads/poliside-bic-novo.jpg" },
        { name: "Canela", code: "POL-CAN-001", swatch: "/lovable-uploads/poliside-canela-novo.jpg" },
        { name: "Castanho", code: "POL-CAS-001", swatch: "/lovable-uploads/poliside-castanho-novo.jpg" },
        { name: "Coral", code: "POL-COR-001", swatch: "/lovable-uploads/poliside-coral-novo.jpg" },
        { name: "Denim", code: "POL-DEN-001", swatch: "/lovable-uploads/poliside-denim-novo.jpg" },
        { name: "Grafite", code: "POL-GRA-001", swatch: "/lovable-uploads/poliside-grafite-novo.jpg" },
        { name: "Gris", code: "POL-GRI-001", swatch: "/lovable-uploads/poliside-gris-novo.jpg" },
        { name: "Ires", code: "POL-IRE-001", swatch: "/lovable-uploads/poliside-ires-novo.jpg" },
        { name: "Jade", code: "POL-JAD-001", swatch: "/lovable-uploads/poliside-jade-novo.jpg" },
        { name: "Marfim", code: "POL-MAR-001", swatch: "/lovable-uploads/poliside-marfim-novo.jpg" },
        { name: "Marinho", code: "POL-MARI-001", swatch: "/lovable-uploads/poliside-marinho-novo.jpg" },
        { name: "Pimenta", code: "POL-PIM-001", swatch: "/lovable-uploads/poliside-pimenta-novo.jpg" },
        { name: "Pink", code: "POL-PINK-001", swatch: "/lovable-uploads/poliside-pink-novo.jpg" },
        { name: "Romance", code: "POL-ROM-001", swatch: "/lovable-uploads/poliside-romance-novo.jpg" },
        { name: "Salmão", code: "POL-SAL-001", swatch: "/lovable-uploads/poliside-salmao-novo.jpg" },
        { name: "Satim", code: "POL-SAT-001", swatch: "/lovable-uploads/poliside-satim-novo.jpg" },
        { name: "Sensuale", code: "POL-SEN-001", swatch: "/lovable-uploads/poliside-sensuale-novo.jpg" },
        { name: "Tame", code: "POL-TAM-001", swatch: "/lovable-uploads/poliside-tame-novo.jpg" },
        { name: "Terra", code: "POL-TER-001", swatch: "/lovable-uploads/poliside-terra-novo.jpg" },
        { name: "Tibeton", code: "POL-TIB-001", swatch: "/lovable-uploads/poliside-tibeton-novo.jpg" },
        { name: "Turquesa", code: "POL-TUR-001", swatch: "/lovable-uploads/poliside-turquesa-novo.jpg" },
        { name: "Verde TW", code: "POL-VTW-001", swatch: "/lovable-uploads/poliside-verde-tw-novo.jpg" },
        { name: "Vermelho", code: "POL-VER-001", swatch: "/lovable-uploads/poliside-vermelho-novo.jpg" },
        { name: "Azul BB", code: "POL-AZB-001", swatch: "/lovable-uploads/poliside-azul-bb-novo.jpg" },
        { name: "Azul Celeste", code: "POL-AZC-001", swatch: "/lovable-uploads/poliside-azul-celeste-novo.jpg" },
        { name: "Biscoito", code: "POL-BIS-001", swatch: "/lovable-uploads/poliside-biscoito-novo.jpg" },
        { name: "Rosa BB", code: "POL-RSB-001", swatch: "/lovable-uploads/poliside-rosa-bb.jpg" },
        { name: "Erva Doce", code: "POL-ERV-001", swatch: "/lovable-uploads/poliside-erva-doce.jpg" }
      ]
    },
    {
      type: "HAWAI",
      category: "MICROFIBRAS DE POLIESTER",
      description: "Tecido macio com acabamento premium.",
      composition: "80% Poliéster, 20% Elastano",
      recommendedUse: "Perfeito para peças confortáveis e elegantes",
      mainImage: "/lovable-uploads/hawai-branco-novo.jpg",
      colors: [
        { name: "Azul Oceano", code: "HAW-AZO-001", swatch: "/lovable-uploads/hawai-azul-oceano-novo.jpg" },
        { name: "Bic", code: "HAW-BIC-001", swatch: "/lovable-uploads/hawai-bic-novo.jpg" },
        { name: "Branco", code: "HAW-BRA-001", swatch: "/lovable-uploads/hawai-branco-novo.jpg" },
        { name: "Canela", code: "HAW-CAN-001", swatch: "/lovable-uploads/hawai-canela-novo.jpg" },
        { name: "Castanho", code: "HAW-CAS-001", swatch: "/lovable-uploads/hawai-castanho-novo.jpg" },
        { name: "Chumbo", code: "HAW-CHU-001", swatch: "/lovable-uploads/hawai-chumbo-novo.jpg" },
        { name: "Coral", code: "HAW-COR-001", swatch: "/lovable-uploads/hawai-coral-novo.jpg" },
        { name: "Pimenta", code: "HAW-PIM-001", swatch: "/lovable-uploads/hawai-pimenta-novo.jpg" },
        { name: "Preto", code: "HAW-PRE-001", swatch: "/lovable-uploads/hawai-preto-novo.jpg" },
        { name: "Sensuale", code: "HAW-SEN-001", swatch: "/lovable-uploads/hawai-sensuale-novo.jpg" },
        { name: "Terra", code: "HAW-TER-001", swatch: "/lovable-uploads/hawai-terra-novo.jpg" },
        { name: "Tulipero", code: "HAW-TUL-001", swatch: "/lovable-uploads/hawai-tulipero-novo.jpg" },
        { name: "Turquesa", code: "HAW-TUR-001", swatch: "/lovable-uploads/hawai-turquesa-novo.jpg" },
        { name: "Verde Jade", code: "HAW-VEJ-001", swatch: "/lovable-uploads/hawai-verde-jade-novo.jpg" },
        { name: "Verde Musgo", code: "HAW-VEM-001", swatch: "/lovable-uploads/hawai-verde-musgo-novo.jpg" },
        { name: "Vermelho", code: "HAW-VER-001", swatch: "/lovable-uploads/hawai-vermelho-novo.jpg" }
      ]
    },
    {
      type: "MADRI",
      category: "MICROFIBRAS DE POLIESTER",
      description: "Tecido de textura diferenciada com toque especial.",
      composition: "80% Poliéster, 20% Elastano",
      recommendedUse: "Ideal para peças sofisticadas",
      mainImage: "/lovable-uploads/madri-branco-novo.jpg",
      colors: [
        { name: "Amarelo BB", code: "MAD-AMB-001", swatch: "/lovable-uploads/madri-amarelo-bb-novo.jpg" },
        { name: "Bic", code: "MAD-BIC-001", swatch: "/lovable-uploads/madri-bic-novo.jpg" },
        { name: "Branco", code: "MAD-BRA-001", swatch: "/lovable-uploads/madri-branco-novo.jpg" },
        { name: "Canela", code: "MAD-CAN-001", swatch: "/lovable-uploads/madri-canela-novo.jpg" },
        { name: "Fucsia", code: "MAD-FUC-001", swatch: "/lovable-uploads/madri-fucsia-novo.jpg" },
        { name: "Ires", code: "MAD-IRE-001", swatch: "/lovable-uploads/madri-ires-novo.jpg" },
        { name: "Pimenta", code: "MAD-PIM-001", swatch: "/lovable-uploads/madri-pimenta-novo.jpg" },
        { name: "Pink", code: "MAD-PINK-001", swatch: "/lovable-uploads/madri-pink-novo.jpg" },
        { name: "Preto", code: "MAD-PRE-001", swatch: "/lovable-uploads/madri-preto-novo.jpg" },
        { name: "Romance", code: "MAD-ROM-001", swatch: "/lovable-uploads/madri-romance-novo.jpg" },
        { name: "Rosa BB", code: "MAD-RSB-001", swatch: "/lovable-uploads/madri-rosa-bb-novo.jpg" },
        { name: "Sensuale", code: "MAD-SEN-001", swatch: "/lovable-uploads/madri-sensuale-novo.jpg" },
        { name: "Terra", code: "MAD-TER-001", swatch: "/lovable-uploads/madri-terra-novo.jpg" },
        { name: "Tibeton", code: "MAD-TIB-001", swatch: "/lovable-uploads/madri-tibeton-novo.jpg" },
        { name: "Tulipero", code: "MAD-TUL-001", swatch: "/lovable-uploads/madri-tulipero-novo.jpg" },
        { name: "Verde Jade", code: "MAD-VEJ-001", swatch: "/lovable-uploads/madri-verde-jade-novo.jpg" },
        { name: "Vermelho", code: "MAD-VER-001", swatch: "/lovable-uploads/madri-vermelho-novo.jpg" }
      ]
    },
    {
      type: "MILÃO",
      category: "MICROFIBRAS DE POLIESTER",
      description: "Microfibra premium com alta performance.",
      composition: "80% Poliéster, 20% Elastano",
      recommendedUse: "Excelente para moda fitness e casual",
      mainImage: "/lovable-uploads/milao-branco.jpg",
      colors: [
        { name: "Amarelo BB", code: "MIL-AMB-001", swatch: "/lovable-uploads/milao-amarelo-bb-novo.jpg" },
        { name: "Bic", code: "MIL-BIC-001", swatch: "/lovable-uploads/milao-bic-novo.jpg" },
        { name: "Branco", code: "MIL-BRA-001", swatch: "/lovable-uploads/milao-branco.jpg" },
        { name: "Canela", code: "MIL-CAN-001", swatch: "/lovable-uploads/milao-canela-novo.jpg" },
        { name: "Castanho", code: "MIL-CAS-001", swatch: "/lovable-uploads/milao-castanho-novo.jpg" },
        { name: "Coral", code: "MIL-COR-001", swatch: "/lovable-uploads/milao-coral-novo.jpg" },
        { name: "Cronos", code: "MIL-CRO-001", swatch: "/lovable-uploads/milao-cronos-novo.jpg" },
        { name: "Frozen", code: "MIL-FRO-001", swatch: "/lovable-uploads/milao-frozen-novo.jpg" },
        { name: "Fuscia", code: "MIL-FUC-001", swatch: "/lovable-uploads/milao-fuscia-novo.jpg" },
        { name: "Gris", code: "MIL-GRI-001", swatch: "/lovable-uploads/milao-gris-novo.jpg" },
        { name: "Ires", code: "MIL-IRE-001", swatch: "/lovable-uploads/milao-ires-novo.jpg" },
        { name: "Lavanda", code: "MIL-LAV-001", swatch: "/lovable-uploads/milao-lavanda-novo.jpg" },
        { name: "Marfim", code: "MIL-MAR-001", swatch: "/lovable-uploads/milao-marfim-novo.jpg" },
        { name: "Marrom", code: "MIL-MARO-001", swatch: "/lovable-uploads/milao-marrom.jpg" },
        { name: "Pavão", code: "MIL-PAV-001", swatch: "/lovable-uploads/milao-pavao-novo.jpg" },
        { name: "Pimenta", code: "MIL-PIM-001", swatch: "/lovable-uploads/milao-pimenta-novo.jpg" },
        { name: "Pink", code: "MIL-PINK-001", swatch: "/lovable-uploads/milao-pink.jpg" },
        { name: "Preto", code: "MIL-PRE-001", swatch: "/lovable-uploads/milao-preto.jpg" },
        { name: "Romance", code: "MIL-ROM-001", swatch: "/lovable-uploads/milao-romance-novo.jpg" },
        { name: "Sanremo", code: "MIL-SAN-001", swatch: "/lovable-uploads/milao-sanremo-novo.jpg" },
        { name: "Terra", code: "MIL-TER-001", swatch: "/lovable-uploads/milao-terra-novo.jpg" },
        { name: "Tibeton", code: "MIL-TIB-001", swatch: "/lovable-uploads/milao-tibeton-novo.jpg" },
        { name: "Tulipero", code: "MIL-TUL-001", swatch: "/lovable-uploads/milao-tulipero-novo.jpg" },
        { name: "Verde TW", code: "MIL-VTW-001", swatch: "/lovable-uploads/milao-verde-tw.jpg" },
        { name: "Vermelho", code: "MIL-VER-001", swatch: "/lovable-uploads/milao-vermelho-novo.jpg" }
      ]
    },
    {
      type: "POLISIDE PRIME",
      category: "MICROFIBRAS DE POLIESTER",
      description: "Versão premium do Poliside com acabamento superior.",
      composition: "82% Poliéster, 18% Elastano",
      recommendedUse: "Para peças de alta qualidade",
      mainImage: "/lovable-uploads/poliside-branco-novo.jpg",
      colors: [
        { name: "Branco", code: "POLP-BRA-001", swatch: "/lovable-uploads/poliside-branco-novo.jpg" },
        { name: "Preto", code: "POLP-PRE-001", swatch: "/lovable-uploads/poliside-preto-novo.jpg" },
        { name: "Marfim", code: "POLP-MAR-001", swatch: "/lovable-uploads/poliside-marfim-novo.jpg" }
      ]
    },
    {
      type: "ROMANTIK RISCA DE GIZ",
      category: "MICROFIBRAS DE POLIESTER",
      description: "Romantik com textura risca de giz sofisticada.",
      composition: "80% Poliéster, 20% Elastano",
      recommendedUse: "Perfeito para looks elegantes e diferenciados",
      mainImage: "/lovable-uploads/romantik-branco-novo.jpg",
      colors: [
        { name: "Branco", code: "ROMR-BRA-001", swatch: "/lovable-uploads/romantik-branco-novo.jpg" },
        { name: "Preto", code: "ROMR-PRE-001", swatch: "/lovable-uploads/romantik-preto-novo.jpg" },
        { name: "Canela", code: "ROMR-CAN-001", swatch: "/lovable-uploads/romantik-canela-novo.jpg" }
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
