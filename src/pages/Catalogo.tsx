import { CatalogProductCard } from "@/components/CatalogProductCard";
import { ProductModal } from "@/components/ProductModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Download } from "lucide-react";
import { useState } from "react";

const Catalogo = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  interface Product {
    id: string;
    nome: string;
    codigo: string;
    imagens: string[];
    descricao: string;
    caracteristicas: string[];
    link_ficha_tecnica?: string;
    category: string;
  }

  const produtos: Product[] = [
    // ROMANTIK - Linha básica de poliéster
    { 
      id: "rom_001", 
      nome: "Tangerina ROMANTIK", 
      codigo: "8313",
      imagens: ["/lovable-uploads/romantik-tangerina-nova.jpg"], 
      descricao: "Tecido poliéster vibrante na cor tangerina, ideal para peças alegres e modernas. Excelente caimento e durabilidade.", 
      caracteristicas: ["100% Poliéster", "Gramatura 150g/m²", "Largura 1,50m", "Anti-pilling"], 
      category: "ROMANTIK" 
    },
    { 
      id: "rom_002", 
      nome: "Marrom ROMANTIK", 
      codigo: "8314",
      imagens: ["/lovable-uploads/romantik-marrom.jpg"], 
      descricao: "Tecido poliéster elegante na cor marrom, perfeito para peças sofisticadas e atemporais.", 
      caracteristicas: ["100% Poliéster", "Gramatura 150g/m²", "Largura 1,50m", "Resistente"], 
      category: "ROMANTIK" 
    },
    { 
      id: "rom_003", 
      nome: "Turquesa ROMANTIK", 
      codigo: "8315",
      imagens: ["/lovable-uploads/romantik-turquesa.jpg"], 
      descricao: "Tecido poliéster refrescante na cor turquesa, ideal para peças de verão e looks casuais.", 
      caracteristicas: ["100% Poliéster", "Gramatura 150g/m²", "Largura 1,50m", "Secagem Rápida"], 
      category: "ROMANTIK" 
    },
    { 
      id: "rom_004", 
      nome: "Coral ROMANTIK", 
      codigo: "8316",
      imagens: ["/lovable-uploads/romantik-coral.jpg"], 
      descricao: "Tecido poliéster delicado na cor coral, perfeito para peças femininas e românticas.", 
      caracteristicas: ["100% Poliéster", "Gramatura 150g/m²", "Largura 1,50m", "Macio ao Toque"], 
      category: "ROMANTIK" 
    },
    { 
      id: "rom_005", 
      nome: "Chumbo ROMANTIK", 
      codigo: "8317",
      imagens: ["/lovable-uploads/romantik-chumbo.jpg"], 
      descricao: "Tecido poliéster neutro na cor chumbo, ideal para peças versáteis e modernas.", 
      caracteristicas: ["100% Poliéster", "Gramatura 150g/m²", "Largura 1,50m", "Não Desbota"], 
      category: "ROMANTIK" 
    },
    { 
      id: "rom_006", 
      nome: "Castanho ROMANTIK", 
      codigo: "8318",
      imagens: ["/lovable-uploads/romantik-castanho.jpg"], 
      descricao: "Tecido poliéster rico na cor castanho, perfeito para peças elegantes e sofisticadas.", 
      caracteristicas: ["100% Poliéster", "Gramatura 150g/m²", "Largura 1,50m", "Durável"], 
      category: "ROMANTIK" 
    },
    { 
      id: "rom_007", 
      nome: "Verde Musgo ROMANTIK", 
      codigo: "8319",
      imagens: ["/lovable-uploads/romantik-verde-musgo.jpg"], 
      descricao: "Tecido poliéster natural na cor verde musgo, ideal para peças modernas e estilosas.", 
      caracteristicas: ["100% Poliéster", "Gramatura 150g/m²", "Largura 1,50m", "Eco-friendly"], 
      category: "ROMANTIK" 
    },
    { 
      id: "rom_008", 
      nome: "Azul Oceano ROMANTIK", 
      codigo: "8320",
      imagens: ["/lovable-uploads/romantik-azul-oceano.jpg"], 
      descricao: "Tecido poliéster profundo na cor azul oceano, perfeito para peças marcantes.", 
      caracteristicas: ["100% Poliéster", "Gramatura 150g/m²", "Largura 1,50m", "Resistente"], 
      category: "ROMANTIK" 
    },
    { 
      id: "rom_009", 
      nome: "Verde Jade ROMANTIK", 
      codigo: "8321",
      imagens: ["/lovable-uploads/romantik-verde-jade.jpg"], 
      descricao: "Tecido poliéster vibrante na cor verde jade, ideal para peças únicas e especiais.", 
      caracteristicas: ["100% Poliéster", "Gramatura 150g/m²", "Largura 1,50m", "Eco-friendly"], 
      category: "ROMANTIK" 
    },
    { 
      id: "rom_010", 
      nome: "Branco ROMANTIK", 
      codigo: "8322",
      imagens: ["/lovable-uploads/romantik-branco.jpg"], 
      descricao: "Tecido poliéster clássico na cor branco, perfeito para peças atemporais e versáteis.", 
      caracteristicas: ["100% Poliéster", "Gramatura 150g/m²", "Largura 1,50m", "Não Amarela"], 
      category: "ROMANTIK" 
    },
    { 
      id: "rom_011", 
      nome: "Preto ROMANTIK", 
      codigo: "8323",
      imagens: ["/lovable-uploads/romantik-preto.jpg"], 
      descricao: "Tecido poliéster clássico na cor preta, ideal para peças sofisticadas e atemporais.", 
      caracteristicas: ["100% Poliéster", "Gramatura 150g/m²", "Largura 1,50m", "Não Desbota"], 
      category: "ROMANTIK" 
    },

    // POLISIDE PRIME - Linha premium com proteção UV
    { 
      id: "pol_001", 
      nome: "Marfim POLISIDE PRIME", 
      codigo: "9001",
      imagens: ["/lovable-uploads/poliside-marfim.jpg"], 
      descricao: "Tecido poliéster premium na cor marfim, com proteção UV, ideal para roupas de praia e esportivas.", 
      caracteristicas: ["100% Poliéster", "Proteção UV 50+", "Dope Dyeing", "Secagem Rápida", "Antibacteriano"], 
      category: "POLISIDE PRIME" 
    },
    { 
      id: "pol_002", 
      nome: "Azul BB POLISIDE PRIME", 
      codigo: "9002",
      imagens: ["/lovable-uploads/poliside-azul-bb.jpg"], 
      descricao: "Tecido poliéster premium na cor azul bb, com proteção UV, perfeito para peças infantis e esportivas.", 
      caracteristicas: ["100% Poliéster", "Proteção UV 50+", "Dope Dyeing", "Hipoalergênico"], 
      category: "POLISIDE PRIME" 
    },
    { 
      id: "pol_003", 
      nome: "Grafite POLISIDE PRIME", 
      codigo: "9003",
      imagens: ["/lovable-uploads/poliside-grafite.jpg"], 
      descricao: "Tecido poliéster premium na cor grafite, com proteção UV, ideal para peças masculinas e esportivas.", 
      caracteristicas: ["100% Poliéster", "Proteção UV 50+", "Dope Dyeing", "Anti-odor"], 
      category: "POLISIDE PRIME" 
    },
    { 
      id: "pol_004", 
      nome: "Tame POLISIDE PRIME", 
      codigo: "9004",
      imagens: ["/lovable-uploads/poliside-tame.jpg"], 
      descricao: "Tecido poliéster premium na cor tame, com proteção UV, perfeito para roupas de banho e esportivas.", 
      caracteristicas: ["100% Poliéster", "Proteção UV 50+", "Dope Dyeing", "Secagem Rápida"], 
      category: "POLISIDE PRIME" 
    },
    { 
      id: "pol_005", 
      nome: "Branco POLISIDE PRIME", 
      codigo: "9005",
      imagens: ["/lovable-uploads/poliside-branco.jpg"], 
      descricao: "Tecido poliéster premium na cor branca, com proteção UV, ideal para peças clássicas e elegantes.", 
      caracteristicas: ["100% Poliéster", "Proteção UV 50+", "Dope Dyeing", "Não Amarela"], 
      category: "POLISIDE PRIME" 
    },

    // MILÃO - Linha premium com proteção UV
    { 
      id: "mil_001", 
      nome: "Ires MILÃO", 
      codigo: "7501",
      imagens: ["/lovable-uploads/milao-ires.jpg"], 
      descricao: "Tecido MILÃO premium na cor ires, com proteção UV, ideal para peças elegantes e esportivas.", 
      caracteristicas: ["100% Poliamida", "Proteção UV 50+", "Recicle +", "Elastano", "Compress"], 
      category: "MILÃO" 
    },
    { 
      id: "mil_002", 
      nome: "Preto MILÃO", 
      codigo: "7502",
      imagens: ["/lovable-uploads/milao-preto.jpg"], 
      descricao: "Tecido MILÃO premium na cor preta, com proteção UV, perfeito para peças sofisticadas e atemporais.", 
      caracteristicas: ["100% Poliamida", "Proteção UV 50+", "Recicle +", "Elastano"], 
      category: "MILÃO" 
    },
    { 
      id: "mil_003", 
      nome: "Amarelo BB MILÃO", 
      codigo: "7503",
      imagens: ["/lovable-uploads/milao-amarelo-bb.jpg"], 
      descricao: "Tecido MILÃO premium na cor amarelo bb, com proteção UV, ideal para peças alegres e vibrantes.", 
      caracteristicas: ["100% Poliamida", "Proteção UV 50+", "Recicle +", "Elastano"], 
      category: "MILÃO" 
    },
    { 
      id: "mil_004", 
      nome: "Frozen MILÃO", 
      codigo: "7504",
      imagens: ["/lovable-uploads/milao-frozen.jpg"], 
      descricao: "Tecido MILÃO premium na cor frozen, com proteção UV, perfeito para peças modernas e refrescantes.", 
      caracteristicas: ["100% Poliamida", "Proteção UV 50+", "Recicle +", "Elastano"], 
      category: "MILÃO" 
    },
    { 
      id: "mil_005", 
      nome: "Branco MILÃO", 
      codigo: "7505",
      imagens: ["/lovable-uploads/milao-branco.jpg"], 
      descricao: "Tecido MILÃO premium na cor branca, com proteção UV, ideal para peças atemporais e versáteis.", 
      caracteristicas: ["100% Poliamida", "Proteção UV 50+", "Recicle +", "Elastano"], 
      category: "MILÃO" 
    },

    // POLIAMIDA - Tecido especial
    { 
      id: "pa_001", 
      nome: "Coral POLIAMIDA", 
      codigo: "6001",
      imagens: ["/lovable-uploads/poliamida-coral.jpg"], 
      descricao: "Tecido POLIAMIDA premium na cor coral, com proteção UV, perfeito para peças delicadas e femininas.", 
      caracteristicas: ["100% Poliamida", "Proteção UV 50+", "Elastano", "Antibacteriano", "Eco-friendly"], 
      category: "POLIAMIDA" 
    }
  ];

  const filteredProdutos = produtos.filter(produto =>
    produto.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    produto.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
    produto.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    produto.codigo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    produto.caracteristicas.some(c => c.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const categories = ["ROMANTIK", "MILÃO", "POLISIDE PRIME", "POLIAMIDA"];
  const displayCategories = categories;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          Catálogo de Tecidos
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Descubra nossa ampla variedade de tecidos de qualidade para todos os seus projetos de costura.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="text"
            placeholder="Buscar tecidos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <Button
          variant={searchTerm === "" ? "default" : "outline"}
          size="sm"
          onClick={() => setSearchTerm("")}
          className="hover:bg-primary hover:text-primary-foreground"
        >
          Todos
        </Button>
        {displayCategories.map((category) => (
          <Button
            key={category}
            variant={searchTerm === category.toLowerCase() ? "default" : "outline"}
            size="sm"
            onClick={() => setSearchTerm(category.toLowerCase())}
            className="hover:bg-primary hover:text-primary-foreground"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProdutos.map((produto) => (
          <CatalogProductCard
            key={produto.id}
            product={produto}
            onClick={() => handleProductClick(produto)}
          />
        ))}
      </div>

      {filteredProdutos.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            Nenhum tecido encontrado com os critérios de busca.
          </p>
          <Button
            variant="outline"
            onClick={() => setSearchTerm("")}
            className="mt-4 hover:bg-primary hover:text-primary-foreground"
          >
            Limpar filtros
          </Button>
        </div>
      )}

      {/* Call to Action */}
      <div className="text-center mt-16 py-12 bg-muted rounded-lg">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
          Não encontrou o que procura?
        </h2>
        <p className="text-muted-foreground mb-6">
          Entre em contato conosco pelo WhatsApp e nos conte sobre seu projeto. Temos muito mais opções!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-warm"
          >
            <a href="https://wa.me/5511999999999?text=Olá! Estou procurando um tecido específico e gostaria de ajuda." target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="hover:bg-primary hover:text-primary-foreground"
          >
            <a href="/catalogo-malhas.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="w-5 h-5 mr-2" />
              Download Catálogo Completo
            </a>
          </Button>
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Catalogo;