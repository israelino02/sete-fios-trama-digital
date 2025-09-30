import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";

const EstampadoGenderSelect = () => {
  const navigate = useNavigate();
  const { categorySlug, fabricType } = useParams();

  const handleGenderSelect = (gender: "masculino" | "feminino") => {
    navigate(`/catalogo/${categorySlug}/${fabricType}/${gender}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate(`/catalogo/${categorySlug}`)}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar
        </Button>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            ROMANTIK ESTAMPADO
          </h1>
          <p className="text-lg text-muted-foreground">
            Selecione a categoria de estampas
          </p>
        </div>

        {/* Gender Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Card
            className="p-8 cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            onClick={() => handleGenderSelect("masculino")}
          >
            <div className="text-center space-y-4">
              <div className="text-6xl mb-4">👔</div>
              <h2 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                Masculino
              </h2>
              <p className="text-muted-foreground">
                Estampas para o público masculino
              </p>
            </div>
          </Card>

          <Card
            className="p-8 cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            onClick={() => handleGenderSelect("feminino")}
          >
            <div className="text-center space-y-4">
              <div className="text-6xl mb-4">👗</div>
              <h2 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                Feminino
              </h2>
              <p className="text-muted-foreground">
                Estampas para o público feminino
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EstampadoGenderSelect;
