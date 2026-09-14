interface IndicatorsProps {
  slides: { id: string | number }[];
  currentSlide: number;
  goToSlide: (index: number) => void;
}

export const SlideIndicators = ({ slides, currentSlide }: IndicatorsProps) => {
  return (
    <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 w-24 sm:w-32 h-[2px] bg-white/25 rounded-full overflow-hidden">
      <div
        className="absolute inset-y-0 left-0 bg-white rounded-full transition-all duration-300 ease-out"
        style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
      />
    </div>
  )
}