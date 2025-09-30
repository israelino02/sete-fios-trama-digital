import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fabricsData, Fabric } from "@/data/fabrics";
import { ColorModal } from "@/components/ColorModal";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Lightbulb, Shirt } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    if (!selectedFabric) return;
    
    let message = `Olá! Tenho interesse na malha ${selectedFabric.type} e gostaria de um orçamento.`;
    
    if (gender) {
      message += ` (Categoria: ${gender})`;
    }
    
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
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

        <div className="space-y-8">
          {/* Main Image */}
          <div className="aspect-video rounded-lg overflow-hidden border shadow-lg">
            <img
              src={selectedFabric.mainImage}
              alt={selectedFabric.type}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description Card */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Descrição
            </h2>
            <p className="text-foreground text-lg leading-relaxed mb-4">
              {selectedFabric.description}
            </p>
            <div className="space-y-2 text-muted-foreground">
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {selectedFabric.technicalSpecs.map((spec, index) => (
                  <div key={index} className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">
                      {spec.label}
                    </p>
                    <p className="text-lg font-semibold text-foreground">
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
                  <Badge key={index} variant="secondary" className="text-base py-2 px-4">
                    {example}
                  </Badge>
                ))}
              </div>
            </Card>
          )}

          {/* Technologies */}
          {selectedFabric.technologies && selectedFabric.technologies.length > 0 && (
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold text-foreground">
                  Tecnologias Aplicadas
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedFabric.technologies.map((tech, index) => (
                  <div key={index} className="bg-muted/50 p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">
                      {tech.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              variant="outline"
              className="flex-1 text-lg py-6"
              onClick={() => setIsColorModalOpen(true)}
            >
              Ver Cores
            </Button>
            <Button
              size="lg"
              className="flex-1 text-lg py-6 bg-gradient-primary hover:scale-105 transition-all duration-300"
              onClick={handleGeneralBudgetRequest}
            >
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </div>

      {/* Color Modal */}
      <ColorModal
        fabric={selectedFabric}
        isOpen={isColorModalOpen}
        onClose={() => setIsColorModalOpen(false)}
      />
    </div>
  );
};

export default FabricDetail;
