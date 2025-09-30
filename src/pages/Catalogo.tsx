import { useNavigate } from "react-router-dom";
import { fabricsData, Fabric } from "@/data/fabrics";

const Catalogo = () => {
  const navigate = useNavigate();

  const handleCardClick = (fabric: Fabric) => {
    navigate(`/catalogo/${encodeURIComponent(fabric.type)}`);
  };

  return (
    <div className="min-h-screen bg-background">
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
        {/* Fabric Cards Grid - Always 2 columns on mobile/tablet, 3 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {fabricsData.fabrics.map((fabric) => (
            <button
              key={fabric.type}
              onClick={() => handleCardClick(fabric)}
              className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={`Ver detalhes de ${fabric.type}`}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={fabric.mainImage}
                  alt={fabric.type}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Name */}
              <div className="p-4 bg-card border-t">
                <h3 className="font-display font-bold text-lg text-foreground text-center">
                  {fabric.type}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalogo;