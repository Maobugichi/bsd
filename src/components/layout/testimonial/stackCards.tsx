import { Star } from "lucide-react";
import { Controls } from "./controls";
import { Card } from "./card";
import { Current } from "./current";
import { cardsData } from "@/constants/testimonial.constant";
import { useCardStack } from "./hooks/useCardStack";
import { useAutoPlay } from "./hooks/useAutoplay";
import { useDrag } from "./hooks/useDrag";

const themeMap: Record<string, { bg: string; text: string }> = {
    emerald: { bg: "bg-emerald-500/10 border-emerald-500/30", text: "text-emerald-400" },
    amber:   { bg: "bg-amber-500/10  border-amber-500/30",   text: "text-amber-400"   },
    blue:    { bg: "bg-blue-500/10   border-blue-500/30",    text: "text-blue-400"    },
};

export const StackedCards = () => {
    

    const { cardStack, currentIndex, moveToNext, moveToPrevious, goToIndex } = useCardStack();

    const { isAutoPlaying, pauseAutoPlay, resumeAutoPlay, toggleAutoPlay } =
        useAutoPlay(moveToNext);

    const { dragOffset, handleDragStart, handleCardClick } = useDrag({
        onSwipeLeft:  moveToNext,
        onSwipeRight: moveToPrevious,
        isAutoPlaying,
        pauseAutoPlay,
        resumeAutoPlay,
    });

    if (!cardsData?.length) return null;

    return (
        <div
            className="relative w-full flex flex-col mt-20"
            style={{ touchAction: "none", userSelect: "none" }}
        >
           
            <div
                className="relative w-full h-[73vh] sm:h-[75vh] md:h-[80vh]"
                onMouseEnter={() => pauseAutoPlay()}
                onMouseLeave={() => resumeAutoPlay()}
            >
                {cardStack.map((card, index) => {
                    const isTop         = index === 0;
                    const zIndex        = cardsData.length - index;
                    const baseScale     = 1 - index * 0.04;
                    const baseY         = index * -20;
                    const { bg, text }  = themeMap[card.theme] ?? themeMap.amber;
                    const IconComponent = card.Icon;

                    const transform =
                        isTop && dragOffset !== 0
                            ? `translateX(${dragOffset}px) translateY(${baseY}px) scale(${baseScale})`
                            : `translateY(${baseY}px) scale(${baseScale})`;

                    return (
                        <Card
                            key={card.id}
                            {...card}
                            isTop={isTop}
                            isDragging={isTop && dragOffset !== 0}
                            transform={transform}
                            onDragStart={handleDragStart}
                            onDragMove={() => {}}
                            onDragEnd={() => {}}
                            onClick={handleCardClick}
                            zIndex={zIndex}
                        >
                            <div className="flex flex-col  h-fit py-20 px-6 md:px-10 gap-10">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-4 bg-amber-500 rounded-full" />
                                    <span className="text-xs font-inter font-medium text-white/40 uppercase tracking-widest">
                                        {card.category}
                                    </span>
                                </div>

                                <div className="grid gap-4">
                                    <h3 className="font-montserrat text-xl md:text-3xl font-bold text-white">
                                        {card.title}
                                    </h3>
                                    <p className="font-inter text-base md:text-lg leading-8 font-light tracking-wide text-white/60">
                                        &ldquo;{card.description}&rdquo;
                                    </p>
                                </div>

                                <div className="flex items-center justify-between mt-2 pt-4 border-t border-white/10">
                                    <div className={`w-11 h-11 border-2 rounded-sm flex items-center justify-center ${bg}`}>
                                        <IconComponent className={`${text} w-5 h-5`} />
                                    </div>
                                    <div className="flex gap-1" aria-label="5 out of 5 stars">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    );
                })}

                <Current length={cardsData.length} currentIndex={currentIndex} />
            </div>

           
            <div className="flex justify-center py-6">
                <Controls
                    currentIndex={currentIndex}
                    total={cardsData.length}
                    isAutoPlaying={isAutoPlaying}
                    moveToNext={moveToNext}
                    moveToPrevious={moveToPrevious}
                    toggleAutoPlay={toggleAutoPlay}
                    goToIndex={goToIndex}
                />
            </div>
        </div>
    );
};