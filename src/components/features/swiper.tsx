import 'swiper/css';
import { slides } from './constant';
import { useState, useEffect } from 'react';
import { Slide } from './slide';
import { SlideControls } from './slide-controls';
import { SlideIndicators } from './slide-indicators';
import { AutoplayIndicator } from './autoplay-indicator';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    const goToSlide = (index: number) => setCurrentSlide(index);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => nextSlide(), 4000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, currentSlide]);

    return (
        <div
            className="relative w-full h-[500px] group"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            {/* Amber corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-500 rounded-tl-2xl z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-500 rounded-tr-2xl z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-amber-500 rounded-bl-2xl z-10 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-500 rounded-br-2xl z-10 pointer-events-none" />

            <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-xl shadow-black/20">
                {slides.map((slide, index) => (
                    <Slide key={slide.id} slide={slide} isActive={index === currentSlide} />
                ))}
            </div>

            <SlideControls nextSlide={nextSlide} prevSlide={prevSlide} />
            <SlideIndicators slides={slides} currentSlide={currentSlide} goToSlide={goToSlide} />
            <AutoplayIndicator isAutoPlaying={isAutoPlaying} currentSlide={currentSlide} totalSlides={slides.length} />
        </div>
    );
};

export default Carousel;