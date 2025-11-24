import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fabricsData, Fabric, getFabricMainImage } from "@/data/fabrics";
import { ColorModal } from "@/components/ColorModal";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Lightbulb, Shirt } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";

const FabricDetail = () => {
  const { categorySlug, fabricType, gender } = useParams();
  const navigate = useNavigate();
  const [selectedFabric, setSelectedFabric] = useState<Fabric | null>(null);
  const [isColorModalOpen, setIsColorModalOpen] = useState(false);

  useEffect(() => {
    const category = fabricsData.categories.find(
      (cat) => cat.slug === categorySlug
    );
    
    if (category) {
      const fabric = category.fabrics.find(
        (f) => f.type === decodeURIComponent(fabricType || "")
      );
      
      if (fabric) {
        setSelectedFabric(fabric);
      } else {
        navigate("/catalogo");
      }
    } else {
      navigate("/catalogo");
    }
  }, [categorySlug, fabricType, navigate]);

  const handleGeneralBudgetRequest = () => {
    const whatsappUrl = `https://wa.me/5581994616071?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%207%20Fios.`;
    window.open(whatsappUrl, "_blank");
  };

  if (!selectedFabric) return null;

  const pageTitle = gender 
    ? `${selectedFabric.type} - ${gender.charAt(0).toUpperCase() + gender.slice(1)}`
    : selectedFabric.type;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => {
            if (gender) {
              navigate(`/catalogo/${categorySlug}/${encodeURIComponent(fabricType!)}/selecionar-genero`);
            } else {
              navigate(`/catalogo/${categorySlug}`);
            }
          }}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar
        </Button>

        {/* Fabric Title */}
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
          {pageTitle}
        </h1>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Main Image */}
          <div>
            <div className="rounded-lg overflow-hidden border shadow-lg sticky top-8">
              <ImageWithSkeleton
                src={getFabricMainImage(selectedFabric, gender)}
                alt={selectedFabric.type}
                width={1200}
                height={675}
                className="w-full h-full object-cover will-change-transform"
                aspectRatio="aspect-video"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </div>

          {/* Right Column - All Information */}
          <div className="space-y-6">
            {/* Description Card */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Descrição
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                {selectedFabric.description}
              </p>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p><strong>Composição:</strong> {selectedFabric.composition}</p>
                <p><strong>Uso Recomendado:</strong> {selectedFabric.recommendedUse}</p>
              </div>
            </Card>

            {/* Technical Specs */}
            {selectedFabric.technicalSpecs && selectedFabric.technicalSpecs.length > 0 && (
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold text-foreground">
                    Ficha Técnica
                  </h2>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {selectedFabric.technicalSpecs.map((spec, index) => (
                    <div key={index} className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">
                        {spec.label}
                      </p>
                      <p className="text-base font-semibold text-foreground">
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Usage Examples */}
            {selectedFabric.usageExamples && selectedFabric.usageExamples.length > 0 && (
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Shirt className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold text-foreground">
                    Possibilidades de Uso
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedFabric.usageExamples.map((example, index) => (
                    <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                      {example}
                    </Badge>
                  ))}
                </div>
              </Card>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 pt-4">
              <Button
                size="lg"
                variant="outline"
                className="w-full text-base py-6"
                onClick={() => setIsColorModalOpen(true)}
              >
                Ver Cores
              </Button>
              <Button
                size="lg"
                className="w-full text-base py-6 bg-gradient-primary hover:scale-105 transition-all duration-300"
                onClick={handleGeneralBudgetRequest}
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Color Modal */}
      <ColorModal
        fabric={selectedFabric}
        isOpen={isColorModalOpen}
        onClose={() => setIsColorModalOpen(false)}
        gender={gender}
      />
    </div>
  );
};

export default FabricDetail;
