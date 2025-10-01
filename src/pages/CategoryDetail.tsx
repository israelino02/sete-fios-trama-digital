import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fabricsData, Category } from "@/data/fabrics";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const CategoryDetail = () => {
  const { categorySlug } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    const found = fabricsData.categories.find(
      (cat) => cat.slug === categorySlug
    );
    if (found) {
      setCategory(found);
    } else {
      navigate("/catalogo");
    }
  }, [categorySlug, navigate]);

  const handleFabricClick = (fabricType: string) => {
    // Special handling for ROMANTIK ESTAMPADO
    if (fabricType === "ROMANTIK ESTAMPADO") {
      navigate(`/catalogo/${categorySlug}/${encodeURIComponent(fabricType)}/selecionar-genero`);
    } else {
      navigate(`/catalogo/${categorySlug}/${encodeURIComponent(fabricType)}`);
    }
  };

  if (!category) return null;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/catalogo")}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar ao Catálogo
        </Button>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Image Only */}
          <div>
            <div className="aspect-video rounded-lg overflow-hidden border shadow-lg">
              <img
                src={category.mainImage}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Title, Description & Subfabrics List */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                {category.name}
              </h1>
              <p className="text-lg text-muted-foreground">
                {category.description}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl text-foreground mb-6">
                Subtecidos disponíveis:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.fabrics.map((fabric) => (
                  <Button
                    key={fabric.type}
                    variant="outline"
                    className="h-auto py-4 px-6 font-medium text-base hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => handleFabricClick(fabric.type)}
                  >
                    {fabric.type}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
