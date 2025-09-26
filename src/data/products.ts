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
    id: "romantik-liso-001",
    nome: "ROMANTIK LISO",
    codigo: "8313",
    imagens: [
      "/lovable-uploads/romantik-romance.jpg",
      "/lovable-uploads/romantik-tulipero.jpg",
      "/lovable-uploads/romantik-rosa-bb.jpg",
      "/lovable-uploads/romantik-tangerina.jpg",
      "/lovable-uploads/romantik-marrom-novo.jpg",
      "/lovable-uploads/romantik-turquesa-novo.jpg",
      "/lovable-uploads/romantik-coral-novo.jpg",
      "/lovable-uploads/romantik-chumbo-novo.jpg",
      "/lovable-uploads/romantik-castanho-novo.jpg",
      "/lovable-uploads/romantik-verde-musgo-novo.jpg",
      "/lovable-uploads/romantik-azul-oceano-novo.jpg",
      "/lovable-uploads/romantik-verde-jade-novo.jpg",
      "/lovable-uploads/romantik-branco-novo.jpg",
      "/lovable-uploads/romantik-canela-novo.jpg",
      "/lovable-uploads/romantik-preto-novo.jpg",
      "/lovable-uploads/romantik-bic-novo.jpg",
      "/lovable-uploads/romantik-terra-novo.jpg",
      "/lovable-uploads/romantik-sensuale-novo.jpg",
      "/lovable-uploads/romantik-vermelho-novo.jpg",
      "/lovable-uploads/romantik-pimenta-novo.jpg",
      "/lovable-uploads/romantik-amarelo-bb-novo.jpg",
      "/lovable-uploads/romantik-tibeton-novo.jpg",
      "/lovable-uploads/romantik-rosa-bb-novo.jpg",
      "/lovable-uploads/romantik-ires-novo.jpg",
      "/lovable-uploads/romantik-fucsia-novo.jpg",
      "/lovable-uploads/romantik-theos-novo.jpg",
      "/lovable-uploads/romantik-verde-pavao-novo.jpg",
      "/lovable-uploads/romantik-frozen-novo.jpg",
      "/lovable-uploads/romantik-lavanda-novo.jpg",
      "/lovable-uploads/romantik-mescla-novo.jpg"
    ],
    descricao: "Malha lisa com toque suave e caimento perfeito, ideal para peças versáteis e confortáveis. Disponível em ampla gama de cores incluindo Tangerina, Marrom, Turquesa, Coral, Chumbo, Castanho, Verde Musgo, Azul Oceano, Verde Jade, Branco, Canela, Preto, Bic, Terra, Sensuale, Vermelho, Pimenta, Amarelo BB, Tibeton, Rosa BB, Ires, Fucsia, Theos, Verde Pavão, Frozen, Lavanda e Mescla.",
    composicao: "80% Poliéster, 20% Elastano",
    recomendacoes: "Ideal para vestidos, blusas e peças básicas. Lavagem a 30°C.",
    caracteristicas: ["Toque Suave", "Boa Elasticidade", "Fácil Manutenção"],
    categoria: "ROMANTIK LISO"
  },
  {
    id: "poliside-002",
    nome: "POLISIDE",
    codigo: "8874",
    imagens: [
      "/lovable-uploads/poliside-turquesa-novo.jpg",
      "/lovable-uploads/poliside-coral-novo.jpg",
      "/lovable-uploads/poliside-marfim-novo.jpg",
      "/lovable-uploads/poliside-azul-bb-novo.jpg"
    ],
    descricao: "Tecido técnico de alta performance, perfeito para roupas esportivas e casuais. Disponível em 4 cores: Turquesa, Coral, Marfim e Azul BB.",
    composicao: "75% Poliéster Reciclado, 25% Elastano",
    recomendacoes: "Excelente para atividades físicas e uso diário. Secagem rápida.",
    caracteristicas: ["Recicle +", "UV Protection", "Quick Dry"],
    categoria: "POLISIDE"
  },
  {
    id: "hawai-003",
    nome: "HAWAI",
    codigo: "9012",
    imagens: [
      "/lovable-uploads/romantik-azul-oceano.jpg",
      "/lovable-uploads/romantik-turquesa.jpg",
      "/lovable-uploads/poliside-azul-bb.jpg"
    ],
    descricao: "Malha fresca e leve inspirada no verão tropical, ideal para peças casuais.",
    composicao: "85% Poliéster, 15% Elastano",
    recomendacoes: "Perfeito para peças de praia e roupas casuais de verão.",
    caracteristicas: ["UV Protection", "Respirável", "Quick Dry"],
    categoria: "HAWAI"
  },
  {
    id: "madri-004",
    nome: "MADRI",
    codigo: "7845",
    imagens: [
      "/lovable-uploads/romantik-terra.jpg",
      "/lovable-uploads/romantik-castanho.jpg",
      "/lovable-uploads/romantik-canela.jpg"
    ],
    descricao: "Tecido sofisticado com inspiração europeia, ideal para peças elegantes.",
    composicao: "70% Poliéster, 30% Viscose",
    recomendacoes: "Ideal para peças sociais e casuais elegantes. Muito confortável.",
    caracteristicas: ["Toque Nobre", "Caimento Elegante", "Durabilidade"],
    categoria: "MADRI"
  },
  {
    id: "milao-005",
    nome: "MILÃO",
    codigo: "6721",
    imagens: [
      "/lovable-uploads/milao-preto.jpg",
      "/lovable-uploads/milao-branco.jpg",
      "/lovable-uploads/milao-verde-tw.jpg"
    ],
    descricao: "Malha premium com design italiano, perfeita para peças de alta qualidade.",
    composicao: "82% Poliéster, 18% Elastano",
    recomendacoes: "Perfeito para peças sofisticadas e de qualidade superior.",
    caracteristicas: ["Design Premium", "Alta Qualidade", "Resistência"],
    categoria: "MILÃO"
  },
  {
    id: "poliside-prime-006",
    nome: "POLISIDE PRIME",
    codigo: "5534",
    imagens: [
      "/lovable-uploads/poliside-branco.jpg",
      "/lovable-uploads/poliside-marfim.jpg",
      "/lovable-uploads/poliside-preto.jpg",
      "/lovable-uploads/poliside-azul-bb.jpg",
      "/lovable-uploads/poliside-bic.jpg",
      "/lovable-uploads/poliside-marinho.jpg",
      "/lovable-uploads/poliside-turquesa.jpg",
      "/lovable-uploads/poliside-jade.jpg",
      "/lovable-uploads/poliside-verde-tw.jpg",
      "/lovable-uploads/poliside-coral.jpg",
      "/lovable-uploads/poliside-terra.jpg",
      "/lovable-uploads/poliside-castanho.jpg",
      "/lovable-uploads/poliside-canela.jpg",
      "/lovable-uploads/poliside-sensuale.jpg",
      "/lovable-uploads/poliside-erva-doce.jpg",
      "/lovable-uploads/poliside-tame.jpg",
      "/lovable-uploads/poliside-satim.jpg",
      "/lovable-uploads/poliside-vermelho.jpg",
      "/lovable-uploads/poliside-pimenta.jpg",
      "/lovable-uploads/poliside-biscoito.jpg",
      "/lovable-uploads/poliside-tibeton.jpg",
      "/lovable-uploads/poliside-salmao.jpg",
      "/lovable-uploads/poliside-romance.jpg",
      "/lovable-uploads/poliside-pink.jpg",
      "/lovable-uploads/poliside-ires.jpg",
      "/lovable-uploads/poliside-rosa-bb.jpg",
      "/lovable-uploads/poliside-cor29.jpg",
      "/lovable-uploads/poliside-cor30.jpg",
      "/lovable-uploads/poliside-cor31.jpg",
      "/lovable-uploads/poliside-cor32.jpg",
      "/lovable-uploads/poliside-cor33.jpg",
      "/lovable-uploads/poliside-cor34.jpg",
      "/lovable-uploads/poliside-cor35.jpg",
      "/lovable-uploads/poliside-cor36.jpg",
      "/lovable-uploads/poliside-bic-novo.jpg",
      "/lovable-uploads/poliside-sensuale-novo.jpg",
      "/lovable-uploads/poliside-gris-novo.jpg"
    ],
    descricao: "Versão premium do Poliside, com tecnologia avançada e acabamento superior. Disponível em 37 cores: Branco, Marfim, Preto, Azul BB, Bic, Marinho, Turquesa, Jade, Verde TW, Coral, Terra, Castanho, Canela, Sensuale, Erva Doce, Tame, Satim, Vermelho, Pimenta, Biscoito, Tibeton, Salmão, Romance, Pink, Ires, Rosa BB, Gris e mais 10 opções com novas versões de BIC e SENSUALE.",
    composicao: "90% Poliéster, 10% Elastano",
    recomendacoes: "Base perfeita para qualquer look. Fácil manutenção.",
    caracteristicas: ["Anti-manchas", "Easy Care", "Durabilidade +"],
    categoria: "POLISIDE PRIME"
  },
  {
    id: "dry-fit-prime-007",
    nome: "DRY FIT PRIME",
    codigo: "4387",
    imagens: [
      "/lovable-uploads/romantik-preto.jpg",
      "/lovable-uploads/poliside-grafite.jpg",
      "/lovable-uploads/milao-preto.jpg"
    ],
    descricao: "Tecnologia dry fit avançada para máxima performance esportiva.",
    composicao: "78% Poliéster Técnico, 22% Elastano",
    recomendacoes: "Ideal para atividades físicas intensas e esportes.",
    caracteristicas: ["Dry Fit", "Anti-odor", "Performance +"],
    categoria: "DRY FIT PRIME"
  },
  {
    id: "suede-estampado-008",
    nome: "SUEDE ESTAMPADO",
    codigo: "3298",
    imagens: [
      "/lovable-uploads/romantik-coral.jpg",
      "/lovable-uploads/romantik-sensuale.jpg",
      "/lovable-uploads/poliside-salmao.jpg"
    ],
    descricao: "Suede com estampas exclusivas, toque aveludado e visual sofisticado.",
    composicao: "85% Poliéster, 15% Lycra",
    recomendacoes: "Perfeito para peças diferenciadas e com personalidade.",
    caracteristicas: ["Toque Aveludado", "Estampas Exclusivas", "Conforto Max"],
    categoria: "SUEDE ESTAMPADO"
  },
  {
    id: "suede-canelado-009",
    nome: "SUEDE CANELADO",
    codigo: "2187",
    imagens: [
      "/lovable-uploads/romantik-canela.jpg",
      "/lovable-uploads/romantik-castanho.jpg",
      "/lovable-uploads/romantik-terra.jpg"
    ],
    descricao: "Suede com textura canelada, oferecendo toque único e visual moderno.",
    composicao: "80% Poliéster, 20% Elastano",
    recomendacoes: "Ideal para peças casuais com toque especial.",
    caracteristicas: ["Textura Canelada", "Toque Diferenciado", "Flexibilidade"],
    categoria: "SUEDE CANELADO"
  },
  {
    id: "suede-jacquard-010",
    nome: "SUEDE JACQUARD",
    codigo: "1876",
    imagens: [
      "/lovable-uploads/romantik-romance.jpg",
      "/lovable-uploads/romantik-lavanda.jpg",
      "/lovable-uploads/romantik-sensuale.jpg"
    ],
    descricao: "Suede com padrão jacquard, combinando textura e elegância.",
    composicao: "82% Poliéster, 18% Elastano",
    recomendacoes: "Perfeito para peças elegantes e sofisticadas.",
    caracteristicas: ["Padrão Jacquard", "Elegância", "Textura Rica"],
    categoria: "SUEDE JACQUARD"
  },
  {
    id: "romantik-risca-giz-011",
    nome: "ROMANTIK RISCA DE GIZ",
    codigo: "9654",
    imagens: [
      "/lovable-uploads/romantik-chumbo.jpg",
      "/lovable-uploads/romantik-preto.jpg",
      "/lovable-uploads/romantik-mescla.jpg"
    ],
    descricao: "Padrão clássico risca de giz com toque romântico e sofisticado.",
    composicao: "75% Poliéster, 25% Viscose",
    recomendacoes: "Ideal para peças sociais e profissionais.",
    caracteristicas: ["Padrão Clássico", "Elegância Atemporal", "Versatilidade"],
    categoria: "ROMANTIK RISCA DE GIZ"
  },
  {
    id: "romantik-estampado-012",
    nome: "ROMANTIK ESTAMPADO",
    codigo: "8543",
    imagens: [
      "/lovable-uploads/romantik-fucsia.jpg",
      "/lovable-uploads/romantik-tangerina-nova.jpg",
      "/lovable-uploads/romantik-rosa-bb.jpg"
    ],
    descricao: "Estampas românticas e delicadas para peças femininas especiais.",
    composicao: "80% Poliéster, 20% Elastano",
    recomendacoes: "Perfeito para peças românticas e femininas.",
    caracteristicas: ["Estampas Românticas", "Feminilidade", "Delicadeza"],
    categoria: "ROMANTIK ESTAMPADO"
  },
  {
    id: "delitex-poliamida-013",
    nome: "DELITEX POLIAMIDA",
    codigo: "7432",
    imagens: [
      "/lovable-uploads/poliamida-coral.jpg",
      "/lovable-uploads/romantik-coral.jpg",
      "/lovable-uploads/poliside-salmao.jpg"
    ],
    descricao: "Poliamida premium com tecnologia Delitex para máximo conforto.",
    composicao: "85% Poliamida, 15% Elastano",
    recomendacoes: "Ideal para lingerie e peças íntimas de alta qualidade.",
    caracteristicas: ["Tecnologia Delitex", "Conforto Premium", "Elasticidade Superior"],
    categoria: "DELITEX POLIAMIDA"
  },
  {
    id: "poliamida-flex-014",
    nome: "POLIAMIDA FLEX",
    codigo: "6321",
    imagens: [
      "/lovable-uploads/romantik-azul-oceano.jpg",
      "/lovable-uploads/poliside-azul-bb.jpg",
      "/lovable-uploads/romantik-turquesa.jpg"
    ],
    descricao: "Poliamida com máxima flexibilidade e elasticidade.",
    composicao: "90% Poliamida, 10% Elastano",
    recomendacoes: "Perfeito para roupas esportivas e de compressão.",
    caracteristicas: ["Máxima Flexibilidade", "Compressão", "Durabilidade"],
    categoria: "POLIAMIDA FLEX"
  },
  {
    id: "poliamida-sensi-015",
    nome: "POLIAMIDA SENSI",
    codigo: "5210",
    imagens: [
      "/lovable-uploads/romantik-rosa-bb.jpg",
      "/lovable-uploads/romantik-lavanda.jpg",
      "/lovable-uploads/romantik-sensuale.jpg"
    ],
    descricao: "Poliamida sensível, desenvolvida para peles delicadas.",
    composicao: "88% Poliamida, 12% Elastano",
    recomendacoes: "Ideal para pessoas com pele sensível.",
    caracteristicas: ["Hipoalergênico", "Toque Suave", "Pele Sensível"],
    categoria: "POLIAMIDA SENSI"
  },
  {
    id: "poliamida-premium-016",
    nome: "POLIAMIDA PREMIUM",
    codigo: "4109",
    imagens: [
      "/lovable-uploads/romantik-branco.jpg",
      "/lovable-uploads/poliside-branco.jpg",
      "/lovable-uploads/poliside-marfim.jpg"
    ],
    descricao: "A mais alta qualidade em poliamida, para produtos de luxo.",
    composicao: "92% Poliamida Premium, 8% Elastano",
    recomendacoes: "Para produtos de mais alta qualidade e luxo.",
    caracteristicas: ["Qualidade Premium", "Luxo", "Durabilidade Máxima"],
    categoria: "POLIAMIDA PREMIUM"
  },
  {
    id: "renda-7-mares-017",
    nome: "RENDA 7 MARES",
    codigo: "3087",
    imagens: [
      "/lovable-uploads/romantik-romance.jpg",
      "/lovable-uploads/romantik-rosa-bb.jpg",
      "/lovable-uploads/romantik-lavanda.jpg"
    ],
    descricao: "Renda delicada inspirada nos sete mares, para peças especiais.",
    composicao: "70% Poliamida, 25% Poliéster, 5% Elastano",
    recomendacoes: "Perfeito para lingerie e peças íntimas delicadas.",
    caracteristicas: ["Renda Delicada", "Design Especial", "Feminilidade"],
    categoria: "RENDA 7 MARES"
  },
  {
    id: "renda-7fios-018",
    nome: "RENDA 7FIOS",
    codigo: "2976",
    imagens: [
      "/lovable-uploads/romantik-fucsia.jpg",
      "/lovable-uploads/romantik-sensuale.jpg",
      "/lovable-uploads/romantik-romance.jpg"
    ],
    descricao: "Renda especial com 7 fios, oferecendo resistência e beleza.",
    composicao: "65% Poliamida, 30% Poliéster, 5% Elastano",
    recomendacoes: "Ideal para peças de lingerie de alta qualidade.",
    caracteristicas: ["7 Fios", "Resistência", "Beleza Única"],
    categoria: "RENDA 7FIOS"
  }
];