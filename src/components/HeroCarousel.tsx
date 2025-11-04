import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
interface HeroCarouselProps {
  images: string[];
  tabletImages?: string[];
  interval?: number;
  onSlideChange?: (index: number) => void;
}
export const HeroCarousel = ({
  images,
  tabletImages,
  interval = 4000,
  onSlideChange
}: HeroCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    onSlideChange?.(index);
  };
  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };
  const goToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    goToSlide(newIndex);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const newIndex = (prevIndex + 1) % images.length;
        onSlideChange?.(newIndex);
        return newIndex;
      });
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval, onSlideChange]);
  return <div className="absolute inset-0">
      {/* Desktop/Mobile images */}
      {images.map((image, index) => <div key={`desktop-${index}`} className={`absolute inset-0 bg-contain lg:bg-cover bg-no-repeat transition-opacity duration-1000 ${tabletImages ? 'hidden lg:block' : ''} ${index === currentIndex ? "opacity-100" : "opacity-0"} ${index === 0 ? 'lg:bg-left-center xl:bg-center' : ''}`} style={{
      backgroundImage: `url(${image})`,
      backgroundPosition: index === 2 ? 'left center' : 'center center'
    }} />)}

      {/* Tablet images */}
      {tabletImages && tabletImages.map((image, index) => <div key={`tablet-${index}`} className={`absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-1000 hidden md:block lg:hidden ${index === currentIndex ? "opacity-100" : "opacity-0"}`} style={{
      backgroundImage: `url(${image})`,
      backgroundPosition: 'center center'
    }} />)}
      
      {/* Navigation Arrows */}
      
      
      

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"}`} aria-label={`Ir para imagem ${index + 1}`} />)}
      </div>
    </div>;
};