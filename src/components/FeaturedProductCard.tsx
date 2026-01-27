import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, Star } from "lucide-react";

interface FeaturedProductCardProps {
  name: string;
  price: string;
  description: string;
  badge: string;
  rating?: number;
}

export const FeaturedProductCard = ({ 
  name, 
  price, 
  description, 
  badge,
  rating = 5
}: FeaturedProductCardProps) => {
  const whatsappUrl = `https://wa.me/5581994616071?text=Ol%C3%A1!%20Vim%20do%20SITE%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%207%20Fios.`;

  return (
    <Card className="group overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-square bg-gradient-warm flex items-center justify-center relative overflow-hidden">
        <Badge className="absolute top-2 left-2 text-xs z-10">
          {badge}
        </Badge>
        <div className="text-center p-4">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
            <span className="text-primary text-2xl">🧵</span>
          </div>
          <p className="text-sm text-muted-foreground">Foto do {name}</p>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {name}
          </h3>
          <div className="flex text-accent">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-current" />
            ))}
          </div>
        </div>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">{price}</span>
          <Button 
            asChild
            size="sm" 
            className="hover:scale-105 transition-transform"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-1" />
              Consultar
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};