import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
interface HeroCarouselProps {
  images: string[];
  tabletImages?: string[];
  mobileImages?: string[];
  interval?: number;
  onSlideChange?: (index: number) => void;
}
export const HeroCarousel = ({
  images,
  tabletImages,
  mobileImages,
  interval = 4000,
  onSlideChange
}: HeroCarouselProps) => {
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
      {images.map((image, index) => <div key={`desktop-${index}`} className={`absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-1000 hidden lg:block ${index === currentIndex ? "opacity-100" : "opacity-0"} ${index === 0 ? 'lg:bg-left-center xl:bg-center' : ''}`} style={{
      backgroundImage: `url(${image})`,
      backgroundPosition: index === 2 ? 'left center' : 'center center'
    }} />)}

      {/* Tablet images */}
      {tabletImages && tabletImages.map((image, index) => <div key={`tablet-${index}`} className={`absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-1000 hidden md:block lg:hidden ${index === currentIndex ? "opacity-100" : "opacity-0"}`} style={{
      backgroundImage: `url(${image})`,
      backgroundPosition: 'center center'
    }} />)}

      {/* Mobile images */}
      {(mobileImages || images).map((image, index) => <div key={`mobile-${index}`} className={`absolute inset-0 transition-opacity duration-1000 md:hidden ${index === currentIndex ? "opacity-100" : "opacity-0"}`} style={{
      backgroundImage: `url(${image})`,
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100%'
    }} />)}
      
      {/* Navigation Arrows */}
      
      
      

      {/* Dots Navigation - Desktop */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden lg:flex gap-2">
        {images.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"}`} aria-label={`Ir para imagem ${index + 1}`} />)}
      </div>
      
      {/* Dots Navigation - Tablet */}
      {tabletImages && <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex lg:hidden gap-2">
        {tabletImages.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"}`} aria-label={`Ir para imagem ${index + 1}`} />)}
      </div>}
      
      {/* Dots Navigation - Mobile */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex md:hidden gap-2">
        {(mobileImages || images).map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"}`} aria-label={`Ir para imagem ${index + 1}`} />)}
      </div>
    </div>;
};