import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const Catalogo = () => {
  const [searchTerm, setSearchTerm] = useState("");

  interface Tecido {
    name: string;
    description: string;
    category: string;
    imageUrl?: string;
  }

  const tecidos: Tecido[] = [
    { name: "Algodão Percal", description: "Tecido de algodão macio e fresco, ideal para roupas casuais e roupas de cama.", category: "Algodão" },
    { name: "Linho Natural", description: "Fibra natural respirável, perfeita para roupas de verão e peças elegantes.", category: "Linho" },
    { name: "Viscose Estampada", description: "Tecido fluido com estampas modernas, ideal para vestidos e blusas.", category: "Viscose" },
    { name: "Crepe Georgette", description: "Tecido leve e transparente, perfeito para peças delicadas e sobreposições.", category: "Crepe" },
    { name: "Jeans Denim", description: "Tecido resistente 100% algodão, ideal para calças, jaquetas e saias.", category: "Jeans" },
    { name: "Seda Pura", description: "Tecido nobre e brilhante, perfeito para ocasiões especiais e peças sofisticadas.", category: "Seda" },
    { name: "Tricoline Lisa", description: "Algodão de qualidade superior, ideal para camisas e peças estruturadas.", category: "Algodão" },
    { name: "Chiffon Transparente", description: "Tecido leve e etéreo, perfeito para vestidos de festa e sobreposições.", category: "Chiffon" },
    { name: "Malha Ribana", description: "Tecido elástico confortável, ideal para camisetas e roupas íntimas.", category: "Malha" },
    { name: "Cetim Acetinado", description: "Tecido com brilho intenso, perfeito para roupas de festa e forros.", category: "Cetim" },
    { name: "Flanela Xadrez", description: "Tecido quente e macio, ideal para camisas de inverno e pijamas.", category: "Flanela" },
    { name: "Organza Cristal", description: "Tecido transparente e estruturado, perfeito para vestidos de noiva e festa.", category: "Organza" },
    { name: "Veludo Molhado", description: "Tecido com textura aveludada e brilho sutil, ideal para peças elegantes.", category: "Veludo" },
    { name: "Oxford Listrado", description: "Tecido estruturado com listras finas, perfeito para camisas sociais.", category: "Oxford" },
    { name: "Tule Bordado", description: "Tecido delicado com bordados, ideal para vestidos de festa e aplicações.", category: "Tule" },
    { name: "Lã Batida", description: "Tecido quente e encorpado, perfeito para casacos e peças de inverno.", category: "Lã" },
    { name: "Popeline Stretch", description: "Algodão com elastano, oferece conforto e movimento às suas peças.", category: "Popeline" },
    { name: "Renda Francesa", description: "Tecido delicado com padrões elaborados, ideal para lingerie e detalhes.", category: "Renda" },
    { name: "Jacquard Texturizado", description: "Tecido com desenhos em relevo, perfeito para peças especiais.", category: "Jacquard" },
    { name: "Musseline Plissada", description: "Tecido leve com textura plissada, ideal para saias e vestidos românticos.", category: "Musseline" },
    { name: "Gabardine Importada", description: "Tecido resistente e elegante, perfeito para ternos e peças formais.", category: "Gabardine" },
    { name: "Lycra Fitness", description: "Tecido com alta elasticidade, ideal para roupas esportivas e fitness.", category: "Lycra" },
    { name: "Brocado Dourado", description: "Tecido luxuoso com fios metálicos, perfeito para ocasiões especiais.", category: "Brocado" },
    { name: "Chambray Lavado", description: "Tecido casual com aparência desbotada, ideal para peças do dia a dia.", category: "Chambray" },
    { name: "Tafetá Encorpado", description: "Tecido estruturado com brilho sutil, perfeito para vestidos de festa.", category: "Tafetá" },
    { name: "Moletom Flanelado", description: "Tecido quente e confortável, ideal para agasalhos e peças casuais.", category: "Moletom" },
    { name: "Piquet Texturizado", description: "Tecido com textura especial, perfeito para polos e peças esportivas.", category: "Piquet" },
    { name: "Cambraia Delicada", description: "Tecido fino e transparente, ideal para lingerie e peças íntimas.", category: "Cambraia" },
    { name: "Fustão Aveludado", description: "Tecido com textura macia e aveludada, perfeito para peças confortáveis.", category: "Fustão" },
    { name: "Tangerina ROMANTIK", description: "Tecido vibrante na cor tangerina, ideal para peças alegres e modernas.", category: "ROMANTIK", imageUrl: "/lovable-uploads/romantik-tangerina-nova.jpg" },
    { name: "Marrom ROMANTIK", description: "Tecido elegante na cor marrom, perfeito para peças sofisticadas e atemporais.", category: "ROMANTIK", imageUrl: "/lovable-uploads/romantik-marrom.jpg" },
    { name: "Turquesa ROMANTIK", description: "Tecido refrescante na cor turquesa, ideal para peças de verão e looks casuais.", category: "ROMANTIK", imageUrl: "/lovable-uploads/romantik-turquesa.jpg" },
    { name: "Coral ROMANTIK", description: "Tecido delicado na cor coral, perfeito para peças femininas e românticas.", category: "ROMANTIK", imageUrl: "/lovable-uploads/romantik-coral.jpg" },
    { name: "Chumbo ROMANTIK", description: "Tecido neutro na cor chumbo, ideal para peças versáteis e modernas.", category: "ROMANTIK", imageUrl: "/lovable-uploads/romantik-chumbo.jpg" },
    { name: "Castanho ROMANTIK", description: "Tecido rico na cor castanho, perfeito para peças elegantes e sofisticadas.", category: "ROMANTIK", imageUrl: "/lovable-uploads/romantik-castanho.jpg" },
    { name: "Verde Musgo ROMANTIK", description: "Tecido natural na cor verde musgo, ideal para peças modernas e estilosas.", category: "ROMANTIK", imageUrl: "/lovable-uploads/romantik-verde-musgo.jpg" },
    { name: "Azul Oceano ROMANTIK", description: "Tecido profundo na cor azul oceano, perfeito para peças marcantes.", category: "ROMANTIK", imageUrl: "/lovable-uploads/romantik-azul-oceano.jpg" },
    { name: "Verde Jade ROMANTIK", description: "Tecido vibrante na cor verde jade, ideal para peças únicas e especiais.", category: "ROMANTIK", imageUrl: "/lovable-uploads/romantik-verde-jade.jpg" },
    { name: "Branco ROMANTIK", description: "Tecido clássico na cor branco, perfeito para peças atemporais e versáteis.", category: "ROMANTIK", imageUrl: "/lovable-uploads/romantik-branco.jpg" },
    { name: "Tulipero ROMANTIK", description: "Tecido delicado na cor tulipero, ideal para peças femininas e românticas.", category: "ROMANTIK", imageUrl: "/lovable-uploads/romantik-tulipero.jpg" },
    { name: "Canela ROMANTIK", description: "Tecido aconchegante na cor canela, perfeito para peças casuais e elegantes.", category: "ROMANTIK", imageUrl: "/lovable-uploads/romantik-canela.jpg" },
    { name: "Preto ROMANTIK", description: "Tecido clássico na cor preta, ideal para peças sofisticadas e atemporais.", category: "ROMANTIK", imageUrl: "/lovable-uploads/romantik-preto.jpg" },
    { name: "BIC ROMANTIK", description: "Tecido vibrante na cor azul bic, perfeito para peças marcantes e modernas.", category: "ROMANTIK", imageUrl: "/lovable-uploads/romantik-bic.jpg" },
    { name: "Terra ROMANTIK", description: "Tecido terroso na cor terra, ideal para peças naturais e contemporâneas.", category: "ROMANTIK", imageUrl: "/lovable-uploads/romantik-terra.jpg" },
    { name: "Sensuale ROMANTIK", description: "Tecido sensual na cor vinho, ideal para peças elegantes e sofisticadas.", category: "ROMANTIK", imageUrl: "/lovable-uploads/romantik-sensuale.jpg" },
    { name: "Vermelho ROMANTIK", description: "Tecido vibrante na cor vermelho, perfeito para peças marcantes e cheias de energia.", category: "ROMANTIK", imageUrl: "/lovable-uploads/romantik-vermelho.jpg" },
    { name: "Pimenta ROMANTIK", description: "Tecido ardente na cor pimenta, ideal para peças modernas e impactantes.", category: "ROMANTIK", imageUrl: "/lovable-uploads/romantik-pimenta.jpg" },
    { name: "Amarelo BB ROMANTIK", description: "Tecido luminoso na cor amarelo bb, perfeito para peças alegres e vibrantes.", category: "ROMANTIK", imageUrl: "/lovable-uploads/romantik-amarelo-bb.jpg" },
    { name: "Tibeton ROMANTIK", description: "Tecido dourado na cor tibeton, ideal para peças luxuosas e especiais.", category: "ROMANTIK", imageUrl: "/lovable-uploads/romantik-tibeton.jpg" },
    { name: "Romance ROMANTIK", description: "Tecido delicado na cor romance, perfeito para peças românticas e femininas.", category: "ROMANTIK", imageUrl: "/lovable-uploads/romantik-romance.jpg" },
    { name: "Pink ROMANTIK", description: "Tecido vibrante na cor pink, ideal para peças alegres e modernas.", category: "ROMANTIK", imageUrl: "/lovable-uploads/romantik-pink.jpg" },
    { name: "Ires ROMANTIK", description: "Tecido suave na cor ires, perfeito para peças delicadas e elegantes.", category: "ROMANTIK", imageUrl: "/lovable-uploads/romantik-ires.jpg" },
    { name: "Rosa BB ROMANTIK", description: "Tecido suave na cor rosa bb, ideal para peças femininas e românticas.", category: "ROMANTIK", imageUrl: "/lovable-uploads/romantik-rosa-bb.jpg" },
    { name: "Fucsia ROMANTIK", description: "Tecido vibrante na cor fucsia, perfeito para peças impactantes e modernas.", category: "ROMANTIK", imageUrl: "/lovable-uploads/romantik-fucsia.jpg" }
  ];

  const filteredTecidos = tecidos.filter(tecido =>
    tecido.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tecido.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tecido.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(tecidos.map(tecido => tecido.category))];
  const displayCategories = categories.filter(cat => cat !== "Chiffon").slice(0, 7);
  displayCategories.push("ROMANTIK");

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredTecidos.map((tecido, index) => (
          <ProductCard
            key={index}
            name={tecido.name}
            description={tecido.description}
            category={tecido.category}
            imagePlaceholder={`Foto do ${tecido.name}`}
            imageUrl={tecido.imageUrl}
          />
        ))}
      </div>

      {filteredTecidos.length === 0 && (
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
        <Button
          asChild
          size="lg"
          className="bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-warm"
        >
          <a href="https://wa.me/5511999999999?text=Olá! Estou procurando um tecido específico e gostaria de ajuda." target="_blank" rel="noopener noreferrer">
            Falar no WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Catalogo;