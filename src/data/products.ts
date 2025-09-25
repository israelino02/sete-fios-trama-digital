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
    id: "romantik-liso-8313",
    nome: "ROMANTIK LISO",
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
    id: "poliside-8874",
    nome: "POLISIDE",
    codigo: "8874",
    imagens: [
      "/lovable-uploads/poliside-grafite.jpg",
      "/lovable-uploads/poliside-branco.jpg",
      "/lovable-uploads/poliside-azul-bb.jpg"
    ],
    descricao: "Tecido técnico de alta performance, perfeito para roupas esportivas e casuais.",
    composicao: "75% Poliéster Reciclado, 25% Elastano",
    recomendacoes: "Excelente para atividades físicas e uso diário. Secagem rápida.",
    caracteristicas: ["Recicle +", "UV Protection", "Quick Dry"],
    categoria: "Esportivo"
  },
  {
    id: "hawai-9012",
    nome: "HAWAI",
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
    id: "madri-7845",
    nome: "MADRI",
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
    id: "milao-6721",
    nome: "MILÃO",
    codigo: "6721",
    imagens: [
      "/lovable-uploads/milao-branco.jpg",
      "/lovable-uploads/milao-preto.jpg",
      "/lovable-uploads/milao-verde-tw.jpg"
    ],
    descricao: "Malha clássica e versátil, perfeita para diversas aplicações.",
    composicao: "82% Poliéster, 18% Elastano",
    recomendacoes: "Perfeito para peças casuais e formais.",
    caracteristicas: ["Anti-fade", "Strech Plus", "Respirável"],
    categoria: "Clássico"
  },
  {
    id: "poliside-prime-5534",
    nome: "POLISIDE PRIME",
    codigo: "5534",
    imagens: [
      "/lovable-uploads/poliside-branco.jpg",
      "/lovable-uploads/poliside-marfim.jpg",
      "/lovable-uploads/poliside-salmao.jpg"
    ],
    descricao: "Versão premium da linha Poliside, com acabamento superior.",
    composicao: "90% Poliéster, 10% Elastano",
    recomendacoes: "Base perfeita para qualquer look. Fácil manutenção.",
    caracteristicas: ["Anti-manchas", "Easy Care", "Durabilidade +"],
    categoria: "Premium"
  },
  {
    id: "dry-fit-prime-4387",
    nome: "DRY FIT PRIME",
    codigo: "4387",
    imagens: [
      "/lovable-uploads/romantik-preto.jpg",
      "/lovable-uploads/romantik-branco.jpg",
      "/lovable-uploads/romantik-azul-oceano.jpg"
    ],
    descricao: "Tecnologia avançada de secagem rápida para alta performance.",
    composicao: "78% Poliéster Técnico, 22% Elastano",
    recomendacoes: "Ideal para atividades esportivas intensas.",
    caracteristicas: ["Quick Dry", "Anti-odor", "UV Protection"],
    categoria: "Esportivo"
  },
  {
    id: "suede-estampado-3298",
    nome: "SUEDE ESTAMPADO",
    codigo: "3298",
    imagens: [
      "/lovable-uploads/romantik-coral.jpg",
      "/lovable-uploads/romantik-sensuale.jpg",
      "/lovable-uploads/romantik-fucsia.jpg"
    ],
    descricao: "Suede com estampas exclusivas, toque aveludado e visual sofisticado.",
    composicao: "85% Poliéster, 15% Lycra",
    recomendacoes: "Perfeito para peças de destaque e ocasiões especiais.",
    caracteristicas: ["Soft Touch", "Estampado", "Aveludado"],
    categoria: "Premium"
  },
  {
    id: "suede-canelado-2156",
    nome: "SUEDE CANELADO",
    codigo: "2156",
    imagens: [
      "/lovable-uploads/romantik-canela.jpg",
      "/lovable-uploads/romantik-castanho.jpg",
      "/lovable-uploads/romantik-terra.jpg"
    ],
    descricao: "Suede com textura canelada, oferecendo visual diferenciado.",
    composicao: "80% Poliéster, 20% Elastano",
    recomendacoes: "Ideal para peças casuais com toque especial.",
    caracteristicas: ["Texturizado", "Soft Touch", "Durável"],
    categoria: "Texturizado"
  },
  {
    id: "suede-jacquard-1923",
    nome: "SUEDE JACQUARD",
    codigo: "1923",
    imagens: [
      "/lovable-uploads/romantik-lavanda.jpg",
      "/lovable-uploads/romantik-romance.jpg",
      "/lovable-uploads/romantik-rosa-bb.jpg"
    ],
    descricao: "Suede com desenhos jacquard, elegância e sofisticação.",
    composicao: "75% Poliéster, 25% Elastano",
    recomendacoes: "Perfeito para peças elegantes e femininas.",
    caracteristicas: ["Jacquard", "Soft Touch", "Elegante"],
    categoria: "Premium"
  },
  {
    id: "romantik-risca-giz-1789",
    nome: "ROMANTIK RISCA DE GIZ",
    codigo: "1789",
    imagens: [
      "/lovable-uploads/romantik-chumbo.jpg",
      "/lovable-uploads/romantik-preto.jpg",
      "/lovable-uploads/romantik-branco.jpg"
    ],
    descricao: "Clássico risca de giz da linha Romantik, elegância atemporal.",
    composicao: "88% Poliéster, 12% Elastano",
    recomendacoes: "Ideal para peças executivas e formais.",
    caracteristicas: ["Clássico", "Formal", "Elegante"],
    categoria: "Executivo"
  },
  {
    id: "romantik-estampado-1567",
    nome: "ROMANTIK ESTAMPADO",
    codigo: "1567",
    imagens: [
      "/lovable-uploads/romantik-tangerina.jpg",
      "/lovable-uploads/romantik-fucsia.jpg",
      "/lovable-uploads/romantik-pink.jpg"
    ],
    descricao: "Linha Romantik com estampas exclusivas e cores vibrantes.",
    composicao: "83% Poliéster, 17% Elastano",
    recomendacoes: "Perfeito para peças jovens e descoladas.",
    caracteristicas: ["Estampado", "Vibrante", "Moderno"],
    categoria: "Jovem"
  },
  {
    id: "delitex-poliamida-1345",
    nome: "DELITEX POLIAMIDA",
    codigo: "1345",
    imagens: [
      "/lovable-uploads/poliamida-coral.jpg",
      "/lovable-uploads/romantik-coral.jpg",
      "/lovable-uploads/poliside-salmao.jpg"
    ],
    descricao: "Poliamida de alta qualidade com toque sedoso e caimento perfeito.",
    composicao: "92% Poliamida, 8% Elastano",
    recomendacoes: "Excelente para lingerie e peças íntimas.",
    caracteristicas: ["Sedoso", "Confortável", "Flexível"],
    categoria: "Íntima"
  },
  {
    id: "poliamida-flex-1123",
    nome: "POLIAMIDA FLEX",
    codigo: "1123",
    imagens: [
      "/lovable-uploads/romantik-branco.jpg",
      "/lovable-uploads/poliside-branco.jpg",
      "/lovable-uploads/milao-branco.jpg"
    ],
    descricao: "Poliamida com alta elasticidade e resistência.",
    composicao: "85% Poliamida, 15% Elastano",
    recomendacoes: "Ideal para roupas esportivas e fitness.",
    caracteristicas: ["Super Elástico", "Resistente", "Confortável"],
    categoria: "Esportivo"
  },
  {
    id: "poliamida-sensi-0987",
    nome: "POLIAMIDA SENSI",
    codigo: "0987",
    imagens: [
      "/lovable-uploads/romantik-sensuale.jpg",
      "/lovable-uploads/romantik-romance.jpg",
      "/lovable-uploads/romantik-rosa-bb.jpg"
    ],
    descricao: "Poliamida com tratamento especial para peles sensíveis.",
    composicao: "90% Poliamida Hypoallergenic, 10% Elastano",
    recomendacoes: "Especial para peles delicadas e sensíveis.",
    caracteristicas: ["Hipoalergênico", "Suave", "Dermatológico"],
    categoria: "Sensível"
  },
  {
    id: "poliamida-premium-0765",
    nome: "POLIAMIDA PREMIUM",
    codigo: "0765",
    imagens: [
      "/lovable-uploads/romantik-lavanda.jpg",
      "/lovable-uploads/romantik-fucsia.jpg",
      "/lovable-uploads/romantik-pink.jpg"
    ],
    descricao: "A mais sofisticada linha de poliamida, com acabamento luxuoso.",
    composicao: "94% Poliamida Premium, 6% Elastano",
    recomendacoes: "Para peças de alta qualidade e ocasiões especiais.",
    caracteristicas: ["Luxuoso", "Premium", "Refinado"],
    categoria: "Luxo"
  },
  {
    id: "renda-7-mares-0543",
    nome: "RENDA 7 MARES",
    codigo: "0543",
    imagens: [
      "/lovable-uploads/romantik-azul-oceano.jpg",
      "/lovable-uploads/romantik-turquesa.jpg",
      "/lovable-uploads/romantik-verde-pavao.jpg"
    ],
    descricao: "Renda delicada inspirada nos sete mares, com padrões únicos.",
    composicao: "70% Poliamida, 30% Elastano",
    recomendacoes: "Perfeita para lingerie e peças românticas.",
    caracteristicas: ["Delicada", "Romântica", "Única"],
    categoria: "Renda"
  },
  {
    id: "renda-7-fios-0321",
    nome: "RENDA 7FIOS",
    codigo: "0321",
    imagens: [
      "/lovable-uploads/romantik-branco.jpg",
      "/lovable-uploads/romantik-marfim.jpg",
      "/lovable-uploads/milao-marfim.jpg"
    ],
    descricao: "Renda clássica de 7 fios, tradição e qualidade em cada detalhe.",
    composicao: "75% Poliamida, 25% Elastano",
    recomendacoes: "Tradicional para lingerie e acabamentos especiais.",
    caracteristicas: ["Clássica", "Tradicional", "Refinada"],
    categoria: "Renda"
  }
];