interface AutoPlayProps {
  isAutoPlaying: boolean;
  currentSlide: number;
  totalSlides: number;
}


export const AutoplayIndicator = ({ isAutoPlaying, currentSlide, totalSlides }: AutoPlayProps) => {
    return(
        <>
          <div className="absolute top-6 right-6 z-20 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="text-white text-sm font-medium">
                  {currentSlide + 1} / {totalSlides}
                </span>
          </div>

     
          <div className="absolute top-6 left-6 z-20">
                <div className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}
                `} />
           </div>
        </>
    )
}