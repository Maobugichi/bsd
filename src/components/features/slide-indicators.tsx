interface IndicatorsProps {
  slides: any[];
  currentSlide: number;
  goToSlide: (index: number) => void;
}

export const SlideIndicators = ({ slides , currentSlide, goToSlide }:IndicatorsProps) => {
    return(
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
    )
}