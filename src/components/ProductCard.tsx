import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  category?: string;
  imagePlaceholder?: string;
}

export const ProductCard = ({ 
  name, 
  description, 
  category,
  imagePlaceholder = "Imagem do produto" 
}: ProductCardProps) => {
  const whatsappNumber = "5511999999999";
  const message = `Olá! Tenho interesse no produto: ${name}. Poderia me dar mais informações?`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Card className="group overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-square bg-gradient-warm flex items-center justify-center relative overflow-hidden">
        <div className="text-center p-4">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
            <span className="text-primary text-2xl">📷</span>
          </div>
          <p className="text-sm text-muted-foreground">{imagePlaceholder}</p>
        </div>
        {category && (
          <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-md">
            {category}
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        <Button 
          asChild
          variant="outline" 
          size="sm" 
          className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4 mr-2" />
            Consultar no WhatsApp
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};