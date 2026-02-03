interface IndicatorsProps {
  slides: any[];
  currentSlide: number;
  goToSlide: (index: number) => void;
}

export const SlideIndicators = ({ slides, currentSlide, goToSlide }: IndicatorsProps) => {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-1">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className="p-3 group focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full"
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === currentSlide ? 'true' : 'false'}
        >
          <span
            className={`
              block rounded-full transition-all duration-300 ease-out
              ${index === currentSlide
                ? 'bg-white w-6 h-2' // Active: elongated
                : 'bg-white/50 w-2 h-2 group-hover:bg-white/75' // Inactive: small dot
              }
            `}
          />
        </button>
      ))}
    </div>
  )
}