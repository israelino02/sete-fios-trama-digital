import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
interface HeroCarouselProps {
  images: string[];
  tabletImages?: string[];
  mobileImages?: string[];
  alts?: string[];
  interval?: number;
  onSlideChange?: (index: number) => void;
}
export const HeroCarousel = ({
  images,
  tabletImages,
  mobileImages,
  alts,
  interval = 4000,
  onSlideChange
}: HeroCarouselProps) => {
  const altFor = (index: number) => alts?.[index] ?? "Tecidos e aviamentos 7 Fios Têxtil";
  const [currentIndex, setCurrentIndex] = useState(0);
  const getActiveImagesLength = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) {
        return mobileImages?.length || images.length;
      }
      if (window.innerWidth < 1024) {
        return tabletImages?.length || images.length;
      }
    }
    return images.length;
  };

  const [activeImagesLength, setActiveImagesLength] = useState(getActiveImagesLength());

  useEffect(() => {
    const handleResize = () => {
      setActiveImagesLength(getActiveImagesLength());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [images.length, tabletImages?.length, mobileImages?.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    onSlideChange?.(index);
  };
  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? activeImagesLength - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };
  const goToNext = () => {
    const newIndex = (currentIndex + 1) % activeImagesLength;
    goToSlide(newIndex);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const newIndex = (prevIndex + 1) % activeImagesLength;
        onSlideChange?.(newIndex);
        return newIndex;
      });
    }, interval);
    return () => clearInterval(timer);
  }, [activeImagesLength, interval, onSlideChange]);
  return <div className="absolute inset-0">
      {/* Desktop images */}
      {images.map((image, index) => <img key={`desktop-${index}`} src={image} alt={altFor(index)} loading={index === 0 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : "low"} decoding={index === 0 ? "sync" : "async"} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 hidden lg:block ${index === currentIndex ? "opacity-100" : "opacity-0"} ${index === 0 ? 'lg:object-left-center xl:object-center' : ''}`} style={{
      objectPosition: index === 2 ? 'left center' : 'center center'
    }} />)}

      {/* Tablet images */}
      {tabletImages && tabletImages.map((image, index) => <img key={`tablet-${index}`} src={image} alt={altFor(index)} loading={index === 0 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : "low"} decoding={index === 0 ? "sync" : "async"} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 hidden md:block lg:hidden ${index === currentIndex ? "opacity-100" : "opacity-0"}`} style={{
      objectPosition: 'center center'
    }} />)}

      {/* Mobile images */}
      {(mobileImages || images).map((image, index) => <img key={`mobile-${index}`} src={image} alt={altFor(index)} loading={index === 0 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : "low"} decoding={index === 0 ? "sync" : "async"} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 md:hidden ${index === currentIndex ? "opacity-100" : "opacity-0"}`} style={{
      objectPosition: index === 1 || index === 2 ? 'center 75%' : 'center center'
    }} />)}
      
      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        aria-label="Imagem anterior"
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white/80 hover:text-white transition-all backdrop-blur-sm"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={goToNext}
        aria-label="Próxima imagem"
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white/80 hover:text-white transition-all backdrop-blur-sm"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </div>;

};