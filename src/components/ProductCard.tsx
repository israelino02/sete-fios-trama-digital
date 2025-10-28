import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ProductCardProps {
  name: string;
  description: string;
  category?: string;
  imagePlaceholder?: string;
  imageUrl?: string;
  images?: string[];
}

export const ProductCard = ({ 
  name, 
  description, 
  category,
  imagePlaceholder = "Imagem do produto",
  imageUrl,
  images
}: ProductCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const whatsappNumber = "5511999999999";
  const message = `Olá! Tenho interesse no produto: ${name}. Poderia me dar mais informações?`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const displayImages = images || (imageUrl ? [imageUrl] : []);
  const hasMultipleImages = displayImages.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
  };

  // Preload adjacent images to make transitions instant
  const preloaded = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (displayImages.length <= 1) return;

    const nextIndex = (currentImageIndex + 1) % displayImages.length;
    const prevIndex = (currentImageIndex - 1 + displayImages.length) % displayImages.length;

    [displayImages[nextIndex], displayImages[prevIndex]].forEach((url) => {
      if (!url || preloaded.current.has(url)) return;
      const img = new Image();
      (img as any).decoding = "async";
      img.src = url;
      img.onload = () => preloaded.current.add(url);
      img.onerror = () => {};
      // Try to decode for smoother swaps if supported
      const anyImg = img as any;
      if (typeof anyImg.decode === "function") {
        // Note: We don't await here to avoid blocking UI
        anyImg
          .decode()
          .then(() => preloaded.current.add(url))
          .catch(() => {});
      }
    });
  }, [currentImageIndex, displayImages]);

  return (
    <Card className="group overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-square bg-gradient-warm flex items-center justify-center relative overflow-hidden">
        {displayImages.length > 0 ? (
          <>
            <img 
              src={displayImages[currentImageIndex]} 
              alt={`${name} - ${currentImageIndex + 1}`}
              width={800}
              height={800}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 will-change-transform"
              loading="lazy"
              decoding="async"
              fetchPriority="high"
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
            {hasMultipleImages && (
              <>
                <button
                  onClick={previousImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {displayImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex ? "bg-white w-4" : "bg-white/50"
                      }`}
                      aria-label={`Ver imagem ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-primary text-2xl">📷</span>
            </div>
            <p className="text-sm text-muted-foreground">{imagePlaceholder}</p>
          </div>
        )}
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