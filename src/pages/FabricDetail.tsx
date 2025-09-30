import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fabricsData, Fabric } from "@/data/fabrics";
import { ColorModal } from "@/components/ColorModal";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

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
    } else {
      navigate("/catalogo");
    }
  }, [fabricType, navigate]);

  const handleFabricSelect = (fabric: Fabric) => {
    setSelectedFabric(fabric);
    navigate(`/catalogo/${encodeURIComponent(fabric.type)}`);
    setIsColorModalOpen(true);
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
          <div className="bg-muted/50 p-6 rounded-lg">
            <p className="text-foreground text-lg leading-relaxed">
              {selectedFabric.description}
            </p>
          </div>

          {/* Available Fabrics List */}
          <div>
            <h3 className="font-semibold text-xl text-foreground mb-6">
              Tecidos disponíveis:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {fabricsData.fabrics
                .filter((f) => f.category === selectedFabric.category)
                .map((f) => (
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
