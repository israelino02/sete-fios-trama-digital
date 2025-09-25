export interface Product {
  id: string;
  nome: string;
  codigo: string;
  imagens: string[];
  descricao: string;
  composicao?: string;
  recomendacoes?: string;
  caracteristicas: string[];
  link_ficha_tecnica?: string;
  categoria: string;
}

export const products: Product[] = [
  {
    id: "delicate-select-8313",
    nome: "Delicate Select",
    codigo: "8313",
    imagens: [
      "/lovable-uploads/romantik-romance.jpg",
      "/lovable-uploads/romantik-tulipero.jpg",
      "/lovable-uploads/romantik-rosa-bb.jpg"
    ],
    descricao: "Malha premium com toque sedoso e caimento perfeito, ideal para peças sofisticadas e femininas.",
    composicao: "80% Poliéster, 20% Elastano",
    recomendacoes: "Ideal para vestidos, blusas e peças íntimas. Lavagem a 30°C.",
    caracteristicas: ["Dope Dyeing", "Eco-friendly", "Anti-bacteriano"],
    categoria: "Premium"
  },
  {
    id: "progress-black-8874",
    nome: "Progress Black",
    codigo: "8874",
    imagens: [
      "/lovable-uploads/romantik-preto.jpg",
      "/lovable-uploads/milao-preto.jpg",
      "/lovable-uploads/poliside-grafite.jpg"
    ],
    descricao: "Tecido técnico de alta performance na cor preta, perfeito para roupas esportivas e casuais.",
    composicao: "75% Poliéster Reciclado, 25% Elastano",
    recomendacoes: "Excelente para atividades físicas e uso diário. Secagem rápida.",
    caracteristicas: ["Recicle +", "UV Protection", "Quick Dry"],
    categoria: "Esportivo"
  },
  {
    id: "ocean-breeze-9012",
    nome: "Ocean Breeze",
    codigo: "9012",
    imagens: [
      "/lovable-uploads/romantik-azul-oceano.jpg",
      "/lovable-uploads/romantik-turquesa.jpg",
      "/lovable-uploads/poliside-azul-bb.jpg"
    ],
    descricao: "Malha fresca e leve com tons oceânicos, ideal para coleções de verão.",
    composicao: "85% Poliéster, 15% Elastano",
    recomendacoes: "Perfeito para peças de praia e roupas casuais de verão.",
    caracteristicas: ["UV Protection", "Respirável", "Quick Dry"],
    categoria: "Verão"
  },
  {
    id: "earth-tone-7845",
    nome: "Earth Tone",
    codigo: "7845",
    imagens: [
      "/lovable-uploads/romantik-terra.jpg",
      "/lovable-uploads/romantik-castanho.jpg",
      "/lovable-uploads/romantik-canela.jpg"
    ],
    descricao: "Linha natural com tons terrosos, inspirada na sustentabilidade e conexão com a natureza.",
    composicao: "70% Poliéster Reciclado, 30% Viscose",
    recomendacoes: "Ideal para peças casuais e de trabalho. Muito confortável.",
    caracteristicas: ["Eco-friendly", "Recicle +", "Biodegradável"],
    categoria: "Sustentável"
  },
  {
    id: "vibrant-energy-6721",
    nome: "Vibrant Energy",
    codigo: "6721",
    imagens: [
      "/lovable-uploads/romantik-tangerina-nova.jpg",
      "/lovable-uploads/romantik-amarelo-bb.jpg",
      "/lovable-uploads/romantik-fucsia.jpg"
    ],
    descricao: "Cores vibrantes e energéticas para peças que fazem a diferença.",
    composicao: "82% Poliéster, 18% Elastano",
    recomendacoes: "Perfeito para peças esportivas e casuais jovens.",
    caracteristicas: ["Anti-fade", "Strech Plus", "Respirável"],
    categoria: "Jovem"
  },
  {
    id: "minimal-white-5534",
    nome: "Minimal White",
    codigo: "5534",
    imagens: [
      "/lovable-uploads/romantik-branco.jpg",
      "/lovable-uploads/milao-branco.jpg",
      "/lovable-uploads/poliside-branco.jpg"
    ],
    descricao: "Branco puro e versátil, essencial para qualquer guarda-roupa.",
    composicao: "90% Poliéster, 10% Elastano",
    recomendacoes: "Base perfeita para qualquer look. Fácil manutenção.",
    caracteristicas: ["Anti-manchas", "Easy Care", "Durabilidade +"],
    categoria: "Básico"
  },
  {
    id: "forest-green-4387",
    nome: "Forest Green",
    codigo: "4387",
    imagens: [
      "/lovable-uploads/romantik-verde-musgo.jpg",
      "/lovable-uploads/romantik-verde-jade.jpg",
      "/lovable-uploads/milao-verde-tw.jpg"
    ],
    descricao: "Tons verdes inspirados na natureza, trazendo frescor e sofisticação.",
    composicao: "78% Poliéster Orgânico, 22% Elastano",
    recomendacoes: "Ideal para peças elegantes e casuais chiques.",
    caracteristicas: ["Orgânico", "Eco-friendly", "Anti-odor"],
    categoria: "Natural"
  },
  {
    id: "sunset-collection-3298",
    nome: "Sunset Collection",
    codigo: "3298",
    imagens: [
      "/lovable-uploads/romantik-coral.jpg",
      "/lovable-uploads/romantik-sensuale.jpg",
      "/lovable-uploads/poliside-salmao.jpg"
    ],
    descricao: "Coleção inspirada no pôr do sol, com tons quentes e acolhedores.",
    composicao: "85% Poliéster, 15% Lycra",
    recomendacoes: "Perfeito para peças românticas e femininas.",
    caracteristicas: ["Soft Touch", "Color Plus", "Conforto Max"],
    categoria: "Romântico"
  }
];