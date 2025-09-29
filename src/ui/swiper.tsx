import 'swiper/css';
import slide1 from "../assets/bsd-3.png"
import slide2 from "../assets/bsd-4.png"
import slide3 from "../assets/bsd-5.png"
import slide4 from "../assets/bsd-6.png"
import slide5 from "../assets/bsd-7.png"
import slide6 from "../assets/bsd-8.png"
import slide7 from "../assets/bsd-9.png"
import slide8 from "../assets/bsd-0.png"
import slide9 from "../assets/bsd-11.png"
import slide10 from "../assets/bsd-12.png"
import slide11 from "../assets/bsd-13.png"
import slide12 from "../assets/bsd-14.png"



import  { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    { id: 1, image: slide1, bg: '#FDEBDD' },
    { id: 2, image: slide2, bg: '#DCF0F2' },
    { id: 3, image: slide3, bg: '#FDEBDD' },
    { id: 4, image: slide4, bg: '#DCF0F2' },
    { id: 5, image: slide5, bg: '#FDEBDD' },
    { id: 6, image: slide6, bg: '#DCF0F2' },
    { id: 7, image: slide7, bg: '#FDEBDD' },
    { id: 8, image: slide8, bg: '#DCF0F2' },
    { id: 9, image: slide9, bg: '#FDEBDD' },
    { id: 10, image: slide10, bg: '#DCF0F2' },
    { id: 11, image: slide11, bg: '#FDEBDD' },
    { id: 12, image: slide12, bg: '#DCF0F2' },
  ];

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
          <div
            key={slide.id}
            className={`
              absolute inset-0 transition-all duration-700 ease-in-out
              ${index === currentSlide 
                ? 'opacity-100 translate-x-0' 
                : index < currentSlide 
                  ? 'opacity-0 -translate-x-full' 
                  : 'opacity-0 translate-x-full'
              }
            `}
            style={{ backgroundColor: slide.bg }}
          >
           
            <div className="absolute inset-0 bg-black/20 z-10 rounded-2xl" />
            
          
            <img
              src={slide.image}
              alt={`Construction project ${slide.id}`}
              className="w-full h-full object-cover rounded-2xl"
              loading="lazy"
            />
          </div>
        ))}
      </div>

     
      <button
        onClick={prevSlide}
        className="
        absolute left-4 top-1/2 -translate-y-1/2 z-20
        w-12 h-12 bg-white/70 lg:bg-white/90 backdrop-blur-sm rounded-full
        flex items-center justify-center
        transition-all duration-300 ease-out
        opacity-80 lg:opacity-0 lg:group-hover:opacity-100
        active:scale-95 hover:bg-white hover:scale-110 hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-gray-900/20
      "
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-900" />
      </button>

      <button
        onClick={nextSlide}
       className="
      absolute right-4 top-1/2 -translate-y-1/2 z-20
      w-12 h-12 bg-white/70 lg:bg-white/90 backdrop-blur-sm rounded-full
      flex items-center justify-center
      transition-all duration-300 ease-out
      opacity-80 lg:opacity-0 lg:group-hover:opacity-100
      active:scale-95 hover:bg-white hover:scale-110 hover:shadow-lg
      focus:outline-none focus:ring-2 focus:ring-gray-900/20
    "
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-900" />
      </button>

    
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`
              w-2 h-2 rounded-full transition-all duration-300 ease-out
              focus:outline-none focus:ring-2 focus:ring-white/50
              ${index === currentSlide
                ? 'bg-white scale-125 w-8'
                : 'bg-white/50 hover:bg-white/75'
              }
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

     
      <div className="absolute top-6 right-6 z-20 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
        <span className="text-white text-sm font-medium">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>

     
      <div className="absolute top-6 left-6 z-20">
        <div className={`
          w-2 h-2 rounded-full transition-all duration-300
          ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}
        `} />
      </div>
    </div>
  );
};


export default Carousel;
