import { useState, useEffect, useRef, useCallback } from "react";
import { Star } from "lucide-react";
import { Controls } from "./controls";
import { Card } from "./card";
import { Current } from "./current";
import { cardsData } from "@/constants/testimonial.constant";

// ── Theme map ─────────────────────────────────────────────────────────────────

const themeMap: Record<string, { bg: string; text: string }> = {
    emerald: { bg: "bg-emerald-500/10 border-emerald-500/30", text: "text-emerald-400" },
    amber:   { bg: "bg-amber-500/10  border-amber-500/30",   text: "text-amber-400"   },
    blue:    { bg: "bg-blue-500/10   border-blue-500/30",    text: "text-blue-400"    },
};

// ── Component ─────────────────────────────────────────────────────────────────

export const StackedCards = () => {
    const [cardStack, setCardStack] = useState(cardsData);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Drag values as refs — they don't need to trigger re-renders,
    // and refs are always fresh inside event handlers (no stale closure risk).
    const isDraggingRef = useRef(false);
    const dragStartXRef = useRef(0);
    const dragOffsetRef = useRef(0);

    // dragOffset as state only for driving the transform style
    const [dragOffset, setDragOffset] = useState(0);

    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    // ── Navigation ────────────────────────────────────────────────────────────

    const moveToNext = useCallback(() => {
        setCardStack((prev) => {
            const [top, ...rest] = prev;
            return [...rest, top];
        });
        setCurrentIndex((prev) => (prev + 1) % cardsData.length);
    }, []);

    const moveToPrevious = useCallback(() => {
        setCardStack((prev) => {
            const last = prev[prev.length - 1];
            return [last, ...prev.slice(0, -1)];
        });
        setCurrentIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);
    }, []);

    const goToIndex = useCallback((targetIndex: number) => {
        setCardStack((prev) => {
            const targetId = cardsData[targetIndex].id;
            const pos = prev.findIndex((c) => c.id === targetId);
            if (pos === 0) return prev;
            return [...prev.slice(pos), ...prev.slice(0, pos)];
        });
        setCurrentIndex(targetIndex);
    }, []);

    const toggleAutoPlay = () => setIsAutoPlaying((v) => !v);

    // ── Autoplay ──────────────────────────────────────────────────────────────

    const stopAutoPlay = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, []);

    const startAutoPlay = useCallback(() => {
        stopAutoPlay();
        intervalRef.current = setInterval(moveToNext, 4000);
    }, [moveToNext, stopAutoPlay]);

    useEffect(() => {
        if (isAutoPlaying) startAutoPlay();
        else stopAutoPlay();
        return stopAutoPlay;
    }, [isAutoPlaying, startAutoPlay, stopAutoPlay]);

    // ── Hover ─────────────────────────────────────────────────────────────────

    const handleMouseEnter = useCallback(() => setIsAutoPlaying(false), []);
    const handleMouseLeave = useCallback(() => {
        if (!isDraggingRef.current) setIsAutoPlaying(true);
    }, []);

    // ── Drag ──────────────────────────────────────────────────────────────────

    const handleDragStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
        isDraggingRef.current = true;
        setIsAutoPlaying(false);
        dragStartXRef.current = "touches" in e ? e.touches[0].clientX : e.clientX;
    }, []);

    const handleDragMove = useCallback((e: React.MouseEvent | React.TouchEvent) => {
        if (!isDraggingRef.current) return;
        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        const offset = clientX - dragStartXRef.current;
        dragOffsetRef.current = offset;
        setDragOffset(offset); // only used for transform style
    }, []);

    const handleDragEnd = useCallback(() => {
        if (!isDraggingRef.current) return;
        isDraggingRef.current = false;

        const offset = dragOffsetRef.current;
        if (Math.abs(offset) > 100) {
                    if (offset > 0) {
                moveToPrevious();
            } else {
                moveToNext();
            }
        }

        dragOffsetRef.current = 0;
        setDragOffset(0);
        setIsAutoPlaying(true);
    }, [moveToNext, moveToPrevious]);

    // Guard: don't fire onClick if the user just finished a drag
    const handleCardClick = useCallback(() => {
        if (Math.abs(dragOffsetRef.current) > 5) return;
        moveToNext();
    }, [moveToNext]);

    // ── Render ────────────────────────────────────────────────────────────────

    return (
        <div
            className="relative w-full h-fit [@media(max-width:380px)]:min-h-[85vh] [@media(min-width:400px)_and_(max-width:412px)]:min-h-[55vh] [@media(min-width:350px)_and_(max-width:360px)]:min-h-[84vh] [@media(min-width:1020px)_and_(max-width:1024px)]:min-h-[50vh] min-h-[70vh] md:min-h-[45vh] grid md:h-96 mx-auto mt-20"
            style={{ touchAction: "none", userSelect: "none" }}
        >
            <div
                className="relative w-full h-full"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {cardStack.map((card, index) => {
                    const isTop = index === 0;
                    const zIndex = cardsData.length - index;
                    const baseScale = 1 - index * 0.04;
                    const baseY = index * -20;
                    const { bg, text } = themeMap[card.theme] ?? themeMap.amber;
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
                            onDragMove={handleDragMove}
                            onDragEnd={handleDragEnd}
                            onClick={handleCardClick}
                            zIndex={zIndex}
                        >
                            <div className="flex flex-col h-fit py-20 px-6 md:px-10 gap-6">
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
                                    <p className="font-inter text-base md:text-lg leading-8 text-white/60">
                                        &ldquo;{card.description}&rdquo;
                                    </p>
                                </div>

                                <div className="flex items-center justify-between mt-2 pt-4 border-t border-white/10">
                                    <div className={`w-11 h-11 border-2 rounded-xl flex items-center justify-center ${bg}`}>
                                        <IconComponent className={`${text} w-5 h-5`} />
                                    </div>
                                    <div className="flex gap-1">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    );
                })}

                <Controls
                    currentIndex={currentIndex}
                    total={cardsData.length}
                    isAutoPlaying={isAutoPlaying}
                    moveToNext={moveToNext}
                    moveToPrevious={moveToPrevious}
                    toggleAutoPlay={toggleAutoPlay}
                    goToIndex={goToIndex}
                />

                <Current length={cardsData.length} currentIndex={currentIndex} />
            </div>
        </div>
    );
};