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
    { name: "Fucsia ROMANTIK", description: "Tecido vibrante na cor fucsia, perfeito para peças impactantes e modernas.", category: "ROMANTIK", imageUrl: "/lovable-uploads/romantik-fucsia.jpg" },
    { name: "Verde Pavão ROMANTIK", description: "Tecido elegante na cor verde pavão, ideal para peças sofisticadas e marcantes.", category: "ROMANTIK", imageUrl: "/lovable-uploads/romantik-verde-pavao.jpg" },
    { name: "Frozen ROMANTIK", description: "Tecido fresco na cor frozen, perfeito para peças modernas e refrescantes.", category: "ROMANTIK", imageUrl: "/lovable-uploads/romantik-frozen.jpg" },
    { name: "Lavanda ROMANTIK", description: "Tecido suave na cor lavanda, ideal para peças delicadas e românticas.", category: "ROMANTIK", imageUrl: "/lovable-uploads/romantik-lavanda.jpg" },
    { name: "Mescla ROMANTIK", description: "Tecido texturizado na cor mescla, perfeito para peças casuais e modernas.", category: "ROMANTIK", imageUrl: "/lovable-uploads/romantik-mescla.jpg" },
    { name: "Theos ROMANTIK", description: "Tecido elegante na cor theos, ideal para peças sofisticadas e atemporais.", category: "ROMANTIK", imageUrl: "/lovable-uploads/romantik-theos.jpg" },
    { name: "Marfim POLISIDE PRIME", description: "Tecido premium na cor marfim, com proteção UV, ideal para roupas de praia e esportivas.", category: "POLISIDE PRIME", imageUrl: "/lovable-uploads/poliside-marfim.jpg" },
    { name: "Azul BB POLISIDE PRIME", description: "Tecido premium na cor azul bb, com proteção UV, perfeito para peças infantis e esportivas.", category: "POLISIDE PRIME", imageUrl: "/lovable-uploads/poliside-azul-bb.jpg" },
    { name: "Grafite POLISIDE PRIME", description: "Tecido premium na cor grafite, com proteção UV, ideal para peças masculinas e esportivas.", category: "POLISIDE PRIME", imageUrl: "/lovable-uploads/poliside-grafite.jpg" },
    { name: "Tame POLISIDE PRIME", description: "Tecido premium na cor tame, com proteção UV, perfeito para roupas de banho e esportivas.", category: "POLISIDE PRIME", imageUrl: "/lovable-uploads/poliside-tame.jpg" },
    { name: "Branco POLISIDE PRIME", description: "Tecido premium na cor branca, com proteção UV, ideal para peças clássicas e elegantes.", category: "POLISIDE PRIME", imageUrl: "/lovable-uploads/poliside-branco.jpg" },
    { name: "Denim POLISIDE PRIME", description: "Tecido premium na cor denim, com proteção UV, perfeito para peças casuais e modernas.", category: "POLISIDE PRIME", imageUrl: "/lovable-uploads/poliside-denim.jpg" },
    { name: "Salmão POLISIDE PRIME", description: "Tecido premium na cor salmão, com proteção UV, ideal para peças femininas e delicadas.", category: "POLISIDE PRIME", imageUrl: "/lovable-uploads/poliside-salmao.jpg" },
    { name: "Erva-Doce POLISIDE PRIME", description: "Tecido premium na cor erva-doce, com proteção UV, perfeito para peças esportivas e casuais.", category: "POLISIDE PRIME", imageUrl: "/lovable-uploads/poliside-erva-doce.jpg" }
  ];

  const filteredTecidos = tecidos.filter(tecido =>
    tecido.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tecido.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tecido.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = ["ROMANTIK", "POLISIDE PRIME"];
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