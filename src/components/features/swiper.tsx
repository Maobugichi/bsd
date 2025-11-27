import 'swiper/css';
import { slides } from './constant';
import  { useState, useEffect } from 'react';
import { Slide } from './slide';
import { SlideControls } from './slide-controls';
import { SlideIndicators } from './slide-indicators';
import { AutoplayIndicator } from './autoplay-indicator';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index:number) => {
    setCurrentSlide(index);
  };

  
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div 
      className="relative w-full h-[500px] group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
    
      <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-xl">
        {slides.map((slide, index) => (
          <Slide key={slide.id} slide={slide} isActive={index === currentSlide} />
        ))}
      </div>     
      <SlideControls nextSlide={nextSlide} prevSlide={prevSlide}/>
      <SlideIndicators slides={slides} currentSlide={currentSlide} goToSlide={goToSlide}/>
      <AutoplayIndicator isAutoPlaying={isAutoPlaying} currentSlide={currentSlide} totalSlides={slides.length} />
    </div>
  );
};


export default Carousel;
