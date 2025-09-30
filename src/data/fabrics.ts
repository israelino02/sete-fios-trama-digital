export interface ColorSwatch {
  name: string;
  code: string;
  swatch: string;
}

export interface Fabric {
  type: string;
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
      type: "MICROFIBRAS DE POLIESTER",
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
        { name: "Mescla", code: "MES-001", swatch: "/lovable-uploads/romantik-mescla-novo.jpg" }
      ]
    },
    {
      type: "MICROFIBRAS DE POLIAMIDA",
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
