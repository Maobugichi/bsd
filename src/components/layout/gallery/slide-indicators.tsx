interface IndicatorsProps {
  slides: { id: string | number }[];
  currentSlide: number;
  goToSlide: (index: number) => void;
}

export const SlideIndicators = ({ slides, currentSlide, goToSlide }: IndicatorsProps) => {
  return (
    <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 sm:gap-2 px-4">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className="py-3 group focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full"
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === currentSlide ? 'true' : 'false'}
        >
          <span
            className={`
              block h-[3px] rounded-full transition-all duration-300 ease-out
              ${index === currentSlide
                ? 'bg-white w-8 sm:w-10'
                : 'bg-white/40 w-4 sm:w-5 group-hover:bg-white/60'
              }
            `}
          />
        </button>
      ))}
    </div>
  )
}