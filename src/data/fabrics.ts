import microfibraPoliesterMain from "@/assets/uploads/microfibra-poliester-main.webp";
import romantikLisoMain from "@/assets/uploads/romantik-liso-novo.webp";
import summersoulMain from "@/assets/uploads/hawai-principal-novo.webp";
import madriMain from "@/assets/uploads/madri-principal-novo.webp";
import romantikRiscaMain from "@/assets/uploads/romantik-risca-novo.webp";
import romantikMescladoMain from "@/assets/uploads/romantik-mesclado-novo.webp";
import microfibraPoliamidaMain from "@/assets/uploads/microfibra-poliamida-main.webp";
import delitexPoliamidaMain from "@/assets/uploads/poliamida-principal-novo.webp";
import poliamidaPremiumMain from "@/assets/uploads/poliamida-premium-novo.webp";
import dryfitMain from "@/assets/uploads/dryfit-main-v2.webp";
import estampadosMain from "@/assets/uploads/estampados-main-v2.webp";
import romantikEstampadoFemininoMain from "@/assets/uploads/romantik-estampado-feminino-new.webp";
import romantikEstampadoMasculinoMain from "@/assets/uploads/romantik-estampado-main.webp";
import romantikEstampadoInfantilMain from "@/assets/uploads/romantik-estampado-infantil-7.webp";

export interface ColorSwatch {
  name: string;
  code: string;
  swatch: string;
  gender?: string;
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
  mainImage: string | { feminino?: string; masculino?: string; infantil?: string; default: string };
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

// Helper function to get the correct main image based on gender
export const getFabricMainImage = (fabric: Fabric, gender?: string): string => {
  if (typeof fabric.mainImage === 'string') {
    return fabric.mainImage;
  }
  
  if (gender && fabric.mainImage[gender as 'feminino' | 'masculino' | 'infantil']) {
    return fabric.mainImage[gender as 'feminino' | 'masculino' | 'infantil']!;
  }
  
  return fabric.mainImage.default;
};

export const fabricsData: FabricsData = {
  categories: [
    {
      name: "MICROFIBRAS DE POLIESTER",
      slug: "poliester",
      description: "Microfibras de poliéster de alta qualidade, versáteis e duráveis.",
      mainImage: microfibraPoliesterMain,
      fabrics: [
        {
          type: "ROMANTIK LISO",
          category: "POLIESTER",
          description: "Tecido leve e resistente com toque suave e fácil manutenção.",
          composition: "92% Poliéster, 8% Elastano",
          recommendedUse: "Ideal para moda íntima, sleep wear, vestidos e peças básicas",
          mainImage: romantikLisoMain,
          technicalSpecs: [
            { label: "Largura", value: "1,65m" },
            { label: "Gramatura", value: "180g/m²" },
            { label: "Rendimento", value: "3,60m²/kg" }
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
          type: "SUMMERSOL",
          category: "POLIESTER",
          description: "Microfibra de poliéster com excelente caimento",
          composition: "93% Poliéster, 7% Elastano",
          recommendedUse: "Ideal para moda íntima e sleep wear",
          mainImage: summersoulMain,
          technicalSpecs: [
            { label: "Largura", value: "1,70m" },
            { label: "Gramatura", value: "165g/m²" },
            { label: "Rendimento", value: "3,70m²/kg" }
          ],
          usageExamples: ["Moda Íntima", "Moda Praia", "Moda Esportiva", "Peças Casuais"],
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
          mainImage: madriMain,
          technicalSpecs: [
            { label: "Largura", value: "1,70m" },
            { label: "Gramatura", value: "160g/m²" },
            { label: "Rendimento", value: "4m²/kg" }
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
          type: "ROMANTIK RISCA DE GIZ",
          category: "POLIESTER",
          description: "Tecido leve e resistente com toque suave e fácil manutenção",
          composition: "92% Poliéster, 8% Elastano",
          recommendedUse: "Ideal para moda masculina, fitness, íntima, sleep wear e peças básicas",
          mainImage: romantikRiscaMain,
          technicalSpecs: [
            { label: "Largura", value: "1,65m" },
            { label: "Gramatura", value: "180g/m²" },
            { label: "Rendimento", value: "3,60m²/kg" }
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
          mainImage: romantikMescladoMain,
          technicalSpecs: [
            { label: "Largura", value: "1,65m" },
            { label: "Gramatura", value: "180g/m²" },
            { label: "Rendimento", value: "3,60m²/kg" }
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
      mainImage: microfibraPoliamidaMain,
      fabrics: [
        {
          type: "DELITEX POLIAMIDA",
          category: "POLIAMIDA",
          description: "Poliamida de alta qualidade com toque sedoso e excelente elasticidade.",
          composition: "91% Poliamida, 9% Elastano",
          recommendedUse: "Ideal para moda fitness, praia e íntima",
          mainImage: delitexPoliamidaMain,
          technicalSpecs: [
            { label: "Largura", value: "160m" },
            { label: "Gramatura", value: "180g/m²" },
            { label: "Rendimento", value: "3,47m²/kg" }
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
            { name: "Ires", code: "DPA-017", swatch: "/lovable-uploads/delitex-ires.png" },
            { name: "Lavanda", code: "DPA-018", swatch: "/lovable-uploads/delitex-lavanda.png" },
            { name: "Marfim", code: "DPA-019", swatch: "/lovable-uploads/delitex-marfim.png" },
            { name: "Marrom", code: "DPA-020", swatch: "/lovable-uploads/delitex-marrom.png" },
            { name: "Mocha Mousse", code: "DPA-021", swatch: "/lovable-uploads/delitex-mocha-mousse.png" },
            { name: "Odalisca", code: "DPA-022", swatch: "/lovable-uploads/delitex-odalisca.png" },
            { name: "Pavão", code: "DPA-023", swatch: "/lovable-uploads/delitex-pavao.png" },
            { name: "Pimenta", code: "DPA-024", swatch: "/lovable-uploads/delitex-pimenta.png" },
            { name: "Pink", code: "DPA-025", swatch: "/lovable-uploads/delitex-pink.png" },
            { name: "Preto", code: "DPA-026", swatch: "/lovable-uploads/delitex-preto.png" },
            { name: "Romance", code: "DPA-027", swatch: "/lovable-uploads/delitex-romance.png" },
            { name: "Rubro", code: "DPA-028", swatch: "/lovable-uploads/delitex-rubro.png" },
            { name: "Sandia", code: "DPA-029", swatch: "/lovable-uploads/delitex-sandia.png" },
            { name: "Sanremo", code: "DPA-030", swatch: "/lovable-uploads/delitex-sanremo.png" },
            { name: "Tame", code: "DPA-031", swatch: "/lovable-uploads/delitex-tame.png" },
            { name: "Teos", code: "DPA-032", swatch: "/lovable-uploads/delitex-teos.png" },
            { name: "Terra", code: "DPA-033", swatch: "/lovable-uploads/delitex-terra.png" },
            { name: "Tibeton", code: "DPA-034", swatch: "/lovable-uploads/delitex-tibeton.png" },
            { name: "Tulipero", code: "DPA-035", swatch: "/lovable-uploads/delitex-tulipero.png" },
            { name: "Turquesa", code: "DPA-036", swatch: "/lovable-uploads/delitex-turquesa.png" },
            { name: "Verde TW", code: "DPA-037", swatch: "/lovable-uploads/delitex-verde-tw.png" },
            { name: "Vermelho", code: "DPA-038", swatch: "/lovable-uploads/delitex-vermelho.png" }
          ]
        },
        {
          type: "POLIAMIDA PREMIUM",
          category: "POLIAMIDA",
          description: "É um tecido de alto padrão, desenvolvido para quem busca qualidade superior, conforto e durabilidade.",
          composition: "90% Poliamida, 10% Elastano",
          recommendedUse: "Linha premium para peças exclusivas",
          mainImage: poliamidaPremiumMain,
          technicalSpecs: [
            { label: "Largura", value: "160m" },
            { label: "Gramatura", value: "180g/m²" },
            { label: "Rendimento", value: "3,47m²/kg" }
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
        },
        {
          type: "DELITEX CONFORT",
          category: "POLIAMIDA",
          description: "Poliamida com elastano de alto conforto e certificado de proteção UV 50+.",
          composition: "91% Poliamida, 9% Elastano",
          recommendedUse: "Ideal para moda casual, body, camisa UV, moda praia e moda íntima",
          mainImage: microfibraPoliamidaMain,
          technicalSpecs: [
            { label: "Largura", value: "1,60m" },
            { label: "Gramatura", value: "180g/m²" },
            { label: "Rendimento", value: "3,50m/kg" }
          ],
          usageExamples: ["Moda Casual", "Body", "Camisa UV", "Moda Praia", "Moda Íntima"],
          technologies: [
            { name: "Proteção UV 50+", description: "Certificado de proteção solar UV 50+" }
          ],
          colors: []
        },
        {
          type: "DELITEX CANELADO",
          category: "POLIAMIDA",
          description: "Poliamida canelada com elastano, textura marcante e ótimo caimento.",
          composition: "90% Poliamida, 10% Elastano",
          recommendedUse: "Ideal para moda casual",
          mainImage: microfibraPoliamidaMain,
          technicalSpecs: [
            { label: "Largura", value: "1,60m" },
            { label: "Gramatura", value: "180g/m²" },
            { label: "Rendimento", value: "3,50m/kg" }
          ],
          usageExamples: ["Moda Casual"],
          colors: []
        },
        {
          type: "MAX PREMIUM",
          category: "POLIAMIDA",
          description: "Poliamida premium com elastano, toque macio e excelente durabilidade.",
          composition: "90% Poliamida, 10% Elastano",
          recommendedUse: "Ideal para moda casual, body, camisa UV, moda praia e moda íntima",
          mainImage: microfibraPoliamidaMain,
          technicalSpecs: [
            { label: "Largura", value: "1,60m" },
            { label: "Gramatura", value: "180g/m²" },
            { label: "Rendimento", value: "3,50m/kg" }
          ],
          usageExamples: ["Moda Casual", "Body", "Camisa UV", "Moda Praia", "Moda Íntima"],
          colors: []
        },
        {
          type: "SUPLEX FLEX FIT",
          category: "POLIAMIDA",
          description: "Suplex de poliamida com alta elasticidade e compressão para alta performance.",
          composition: "83% Poliamida, 17% Elastano",
          recommendedUse: "Ideal para moda fitness e moda esportiva",
          mainImage: microfibraPoliamidaMain,
          technicalSpecs: [
            { label: "Largura", value: "1,60m" },
            { label: "Gramatura", value: "305g/m²" },
            { label: "Rendimento", value: "2,05m/kg" }
          ],
          usageExamples: ["Moda Fitness", "Moda Esportiva"],
          colors: []
        },
        {
          type: "SUPLEX BLACKOUT",
          category: "POLIAMIDA",
          description: "Suplex de poliamida com zero transparência, ideal para peças de alta performance.",
          composition: "85% Poliamida, 15% Elastano",
          recommendedUse: "Ideal para moda fitness e moda esportiva",
          mainImage: microfibraPoliamidaMain,
          technicalSpecs: [
            { label: "Largura", value: "1,60m" },
            { label: "Gramatura", value: "290g/m²" },
            { label: "Rendimento", value: "2,02m/kg" }
          ],
          usageExamples: ["Moda Fitness", "Moda Esportiva"],
          technologies: [
            { name: "Zero Transparência", description: "Cobertura total mesmo em alongamento" }
          ],
          colors: []
        }
      ]
    },
    {
      name: "DRY-FIT",
      slug: "dry-fit",
      description: "Tecidos técnicos com tecnologia de secagem rápida.",
      mainImage: dryfitMain,
      fabrics: [
        {
          type: "DRY FIT PRIME",
          category: "DRY-FIT",
          description: "É um tecido tecnológico de alta performance, desenvolvido para proporcionar máximo conforto, respirabilidade e liberdade de movimento, tecido soft touch.",
          composition: "90% Poliéster, 10% Elastano",
          recommendedUse: "Ideal para quem busca conforto térmico e leveza em roupas esportivas ou casuais.",
          mainImage: dryfitMain,
          technicalSpecs: [
            { label: "Largura", value: "1,70m" },
            { label: "Gramatura", value: "150g/m²" },
            { label: "Rendimento", value: "4m²/kg" }
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
      mainImage: estampadosMain,
      fabrics: [
        {
          type: "ROMANTIK ESTAMPADO",
          category: "ESTAMPADOS",
          description: "Tecido leve e resistente com toque suave e fácil manutenção. 92% Poliéster, 8% Elastano",
          composition: "92% Poliéster, 8% Elastano",
          recommendedUse: "Ideal para moda intima, moda praia, moda sleep wear e moda infantil",
          mainImage: {
            feminino: romantikEstampadoFemininoMain,
            masculino: romantikEstampadoMasculinoMain,
            infantil: romantikEstampadoInfantilMain,
            default: romantikEstampadoMasculinoMain
          },
          technicalSpecs: [
            { label: "Largura", value: "1,60m" },
            { label: "Gramatura", value: "150g/m²" },
            { label: "Rendimento", value: "4,15m²/kg" }
          ],
          usageExamples: ["Vestidos", "Lingerie", "Blusas", "Camisolas"],
          colors: [
            { name: "Estampa 1", code: "EST-M-003", swatch: "/lovable-uploads/romantik-estampado-masculino-3.jpg", gender: "masculino" },
            { name: "Estampa 2", code: "EST-M-004", swatch: "/lovable-uploads/romantik-estampado-masculino-4.jpg", gender: "masculino" },
            { name: "Estampa 3", code: "EST-M-006", swatch: "/lovable-uploads/romantik-estampado-masculino-6.jpg", gender: "masculino" },
            { name: "Estampa 1", code: "EST-F-001", swatch: "/lovable-uploads/romantik-estampado-fem-1.jpg", gender: "feminino" },
            { name: "Estampa 2", code: "EST-F-002", swatch: "/lovable-uploads/romantik-estampado-fem-2.jpg", gender: "feminino" },
            { name: "Estampa 3", code: "EST-F-003", swatch: "/lovable-uploads/romantik-estampado-fem-3.jpg", gender: "feminino" },
            { name: "Estampa 1", code: "EST-I-001", swatch: "/lovable-uploads/romantik-estampado-infantil-5.jpg", gender: "infantil" },
            { name: "Estampa 2", code: "EST-I-002", swatch: "/lovable-uploads/romantik-estampado-infantil-6.jpg", gender: "infantil" },
            { name: "Estampa 3", code: "EST-I-003", swatch: "/lovable-uploads/romantik-estampado-infantil-7.jpg", gender: "infantil" }
          ]
        }
      ]
    }
  ]
};
