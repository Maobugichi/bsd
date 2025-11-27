import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface ControlsProps {
  currentIndex: number;
  total: number;
  isAutoPlaying: boolean;
  moveToNext: () => void;
  moveToPrevious: () => void;
  toggleAutoPlay: () => void;
  goToIndex: (index: number) => void;
}

export const Controls = ({
  currentIndex,
  total,
  isAutoPlaying,
  moveToNext,
  moveToPrevious,
  toggleAutoPlay,
  goToIndex,
}: ControlsProps) => (
  <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 flex items-center gap-3 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-2 shadow-lg border border-gray-200">
     <button
        onClick={moveToPrevious}
        className="w-10 h-10 bg-transparent rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-900 hover:scale-110 group"
        aria-label="Previous testimonial"
        >
        <ChevronLeft className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
     </button>

    <div className="flex gap-1.5">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => goToIndex(index)}
          className={`
            w-2 h-2 rounded-full transition-all duration-300
            ${index === currentIndex 
            ? 'bg-gray-900 scale-125 w-4' 
            : 'bg-gray-400 hover:bg-gray-600'
            }
        `}
        aria-label={`Go to testimonial ${index + 1}`}
        />
      ))}
    </div>

  
     <button
        onClick={toggleAutoPlay}
        className="w-10 h-10 bg-transparent rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-900 hover:scale-110 group"
        aria-label={isAutoPlaying ? 'Pause auto-play' : 'Start auto-play'}
        >
        {isAutoPlaying ? (
            <Pause className="w-3 h-3 text-gray-600 group-hover:text-white transition-colors" />
        ) : (
            <Play className="w-3 h-3 text-gray-600 group-hover:text-white transition-colors" />
        )}
    </button>

    <button
        onClick={moveToNext}
        className="w-10 h-10 bg-transparent rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-900 hover:scale-110 group"
        aria-label="Next testimonial"
        >
        <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
    </button>
  </div>
);
