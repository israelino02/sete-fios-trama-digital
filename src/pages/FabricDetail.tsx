import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fabricsData, Fabric } from "@/data/fabrics";
import { ColorModal } from "@/components/ColorModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShieldCheck, Zap, Droplets, Package, Ruler, Weight } from "lucide-react";

const FabricDetail = () => {
  const { fabricType } = useParams();
  const navigate = useNavigate();
  const [selectedFabric, setSelectedFabric] = useState<Fabric | null>(null);
  const [isColorModalOpen, setIsColorModalOpen] = useState(false);

  useEffect(() => {
    const fabric = fabricsData.fabrics.find(
      (f) => f.type === decodeURIComponent(fabricType || "")
    );
    if (fabric) {
      setSelectedFabric(fabric);
      setIsColorModalOpen(false); // Reset modal state when changing fabric
    } else {
      navigate("/catalogo");
    }
  }, [fabricType, navigate]);

  const handleFabricSelect = (fabric: Fabric) => {
    setSelectedFabric(fabric);
    navigate(`/catalogo/${encodeURIComponent(fabric.type)}`);
  };

  const handleGeneralBudgetRequest = () => {
    const message = `Olá! Tenho interesse na malha ${selectedFabric?.type} e gostaria de um orçamento.`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const getTechnologyIcon = (techName: string) => {
    if (techName.toLowerCase().includes("uv") || techName.toLowerCase().includes("proteção")) {
      return <ShieldCheck className="h-5 w-5" />;
    }
    if (techName.toLowerCase().includes("secagem") || techName.toLowerCase().includes("rápida")) {
      return <Droplets className="h-5 w-5" />;
    }
    if (techName.toLowerCase().includes("flex") || techName.toLowerCase().includes("elasticidade")) {
      return <Zap className="h-5 w-5" />;
    }
    return <Package className="h-5 w-5" />;
  };

  if (!selectedFabric) return null;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/catalogo")}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar ao Catálogo
        </Button>

        {/* Fabric Title */}
        <h1 className="text-3xl font-display font-bold text-foreground mb-8">
          {selectedFabric.type}
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

          {/* Description */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-foreground">Descrição</h2>
              <p className="text-foreground text-lg leading-relaxed">
                {selectedFabric.description}
              </p>
            </CardContent>
          </Card>

          {/* Technical Specs */}
          {selectedFabric.technicalSpecs && selectedFabric.technicalSpecs.length > 0 && (
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <Ruler className="h-5 w-5" />
                  Ficha Técnica
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {selectedFabric.technicalSpecs.map((spec, idx) => (
                    <div key={idx} className="bg-muted/50 p-4 rounded-lg text-center">
                      <p className="text-sm text-muted-foreground mb-1">{spec.label}</p>
                      <p className="text-lg font-semibold text-foreground">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Usage Examples */}
          {selectedFabric.usageExamples && selectedFabric.usageExamples.length > 0 && (
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Possibilidades de Uso
                </h2>
                <div className="flex flex-wrap gap-2">
                  {selectedFabric.usageExamples.map((usage, idx) => (
                    <Badge key={idx} variant="secondary" className="text-base py-2 px-4">
                      {usage}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Technologies */}
          {selectedFabric.technologies && selectedFabric.technologies.length > 0 && (
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-foreground">Tecnologias Aplicadas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedFabric.technologies.map((tech, idx) => (
                    <div key={idx} className="bg-muted/50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2 text-primary">
                        {getTechnologyIcon(tech.name)}
                        <h3 className="font-semibold">{tech.name}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={() => setIsColorModalOpen(true)}
              className="w-full sm:w-auto text-lg py-6 px-8"
            >
              Ver Cores
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleGeneralBudgetRequest}
              className="w-full sm:w-auto text-lg py-6 px-8"
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Available Fabrics List */}
          <div className="border-t pt-8 mt-8">
            <h3 className="font-semibold text-xl text-foreground mb-6">
              Outros Tecidos Disponíveis:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {fabricsData.fabrics.map((f) => (
                <Button
                  key={f.type}
                  variant={f.type === selectedFabric.type ? "default" : "outline"}
                  className="h-auto py-4 px-6 font-medium text-base"
                  onClick={() => handleFabricSelect(f)}
                >
                  {f.type}
                </Button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Modal 2 - Color Selection */}
      <ColorModal
        fabric={selectedFabric}
        isOpen={isColorModalOpen}
        onClose={() => setIsColorModalOpen(false)}
      />
    </div>
  );
};

export default FabricDetail;
