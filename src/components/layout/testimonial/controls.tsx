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
    <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-[#1c1c1c] border border-white/10 backdrop-blur-md rounded-2xl px-4 py-2.5">
        <button
            onClick={moveToPrevious}
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-amber-500/10 hover:scale-110 group"
            aria-label="Previous testimonial"
        >
            <ChevronLeft className="w-4 h-4 text-white/40 group-hover:text-amber-400 transition-colors" />
        </button>

        {/* Dots */}
        <div className="flex gap-1.5 items-center">
            {Array.from({ length: total }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => goToIndex(index)}
                    className={`h-1.5 rounded-full transition-all duration-300
                        ${index === currentIndex
                            ? 'bg-amber-500 w-6'
                            : 'bg-white/20 w-1.5 hover:bg-white/40'
                        }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                />
            ))}
        </div>

        {/* Divider */}
        <div className="w-px h-5 bg-white/10" />

        <button
            onClick={toggleAutoPlay}
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-amber-500/10 hover:scale-110 group"
            aria-label={isAutoPlaying ? 'Pause auto-play' : 'Start auto-play'}
        >
            {isAutoPlaying ? (
                <Pause className="w-3 h-3 text-white/40 group-hover:text-amber-400 transition-colors" />
            ) : (
                <Play className="w-3 h-3 text-white/40 group-hover:text-amber-400 transition-colors" />
            )}
        </button>

        <button
            onClick={moveToNext}
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-amber-500/10 hover:scale-110 group"
            aria-label="Next testimonial"
        >
            <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-amber-400 transition-colors" />
        </button>
    </div>
);