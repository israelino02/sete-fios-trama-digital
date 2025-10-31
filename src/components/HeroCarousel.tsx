import { useEffect, useState } from "react";

interface HeroCarouselProps {
  images: string[];
  interval?: number;
  onSlideChange?: (index: number) => void;
}

export const HeroCarousel = ({ images, interval = 4000, onSlideChange }: HeroCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % images.length;
        onSlideChange?.(newIndex);
        return newIndex;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval, onSlideChange]);

  return (
    <div className="absolute inset-0">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}
    </div>
  );
};
