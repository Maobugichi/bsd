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
    <div className="flex items-center gap-3 bg-[#1c1c1c] border border-white/10 backdrop-blur-md px-4 h-25">
        <button
            onClick={moveToPrevious}
            className="w-9 h-9 flex items-center justify-center transition-colors duration-300 hover:bg-amber-500/10 group"
            aria-label="Previous testimonial"
        >
            <ChevronLeft size={16} className="text-white/40 group-hover:text-amber-400 transition-colors" />
        </button>

        
        <div className="flex gap-1.5 items-center">
            {Array.from({ length: total }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => goToIndex(index)}
                    className={`h-1.5 transition-all duration-300 ${
                        index === currentIndex
                            ? 'bg-amber-500 w-6'
                            : 'bg-white/20 w-1.5 hover:bg-white/40'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                />
            ))}
        </div>

        <div className="w-px h-5 bg-white/10" />

        <button
            onClick={toggleAutoPlay}
            className="w-9 h-9 flex items-center justify-center transition-colors duration-300 hover:bg-amber-500/10 group"
            aria-label={isAutoPlaying ? 'Pause auto-play' : 'Start auto-play'}
        >
            {isAutoPlaying
                ? <Pause size={12} className="text-white/40 group-hover:text-amber-400 transition-colors" />
                : <Play  size={12} className="text-white/40 group-hover:text-amber-400 transition-colors" />
            }
        </button>

        <button
            onClick={moveToNext}
            className="w-9 h-9 flex items-center justify-center transition-colors duration-300 hover:bg-amber-500/10 group"
            aria-label="Next testimonial"
        >
            <ChevronRight size={16} className="text-white/40 group-hover:text-amber-400 transition-colors" />
        </button>
    </div>
);