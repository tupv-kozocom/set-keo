"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SlideShowProps } from "@/types/slide.type";


const SlideShow = ({ slides, fullWidth = false }: SlideShowProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<any>(null);

  // Theo dõi thay đổi slide khi API có sẵn
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Hàm điều hướng đến slide cụ thể
  const scrollToSlide = (index: number) => {
    if (api) {
      api.scrollTo(index);
    } else {
      setCurrentSlide(index);
    }
  };

  return (
    <div className={`relative ${fullWidth ? 'w-full' : 'w-full lg:w-2/3'} h-full rounded-2xl overflow-hidden`}>
      <Carousel 
        className="w-full h-full relative" 
        opts={{ startIndex: currentSlide }}
        setApi={setApi}
      >
        <CarouselContent className="h-full">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="h-full">
              <div className="w-full">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="object-cover md:h-125 h-70 w-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="absolute left-4 hover:bg-white/70 h-8 w-8 rounded-full border-0 bg-white/30 text-black" />
        <CarouselNext className="absolute right-4 hover:bg-white/70 h-8 w-8 rounded-full border-0 bg-white/30 text-black" />

        {/* Custom Dots Navigation - Simplified */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                currentSlide === index ? 'bg-primary' : 'bg-[#c4c4c4]'
              }`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default SlideShow; 