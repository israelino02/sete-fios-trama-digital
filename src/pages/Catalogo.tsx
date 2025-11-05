import { useNavigate } from "react-router-dom";
import { fabricsData } from "@/data/fabrics";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
const Catalogo = () => {
  const navigate = useNavigate();
  const handleCategoryClick = (slug: string) => {
    navigate(`/catalogo/${slug}`);
  };
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Catálogo de Tecidos
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Descubra nossa linha completa de tecidos técnicos e premium
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-12 max-w-5xl mx-auto">
          {fabricsData.categories.map(category => <button key={category.slug} onClick={() => handleCategoryClick(category.slug)} className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary flex flex-col h-full" aria-label={`Ver tecidos de ${category.name}`}>
              {/* Image */}
              <div className="w-full">
                <ImageWithSkeleton src={category.mainImage} alt={category.name} width={800} height={800} className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300 will-change-transform" aspectRatio="aspect-square" loading="eager" decoding="async" fetchPriority="high" />
              </div>
              
              {/* Name */}
              <div className="p-6 bg-card border-t flex-shrink-0">
                <h3 className="font-display md:text-2xl text-foreground text-center font-bold text-sm">
                  {category.name}
                </h3>
              </div>
            </button>)}
        </div>
      </div>
    </div>;
};
export default Catalogo;