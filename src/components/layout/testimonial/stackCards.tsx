import { useState, useEffect, useRef } from "react";
import { Star, ShieldCheck, Award } from "lucide-react";
import { Controls } from "./controls";
import { Card } from "./card";
import { Current } from "./current";

export const cardsData = [
    {
        id: 1,
        title: 'Reliable and Transparent',
        category: 'Construction & Safety',
        className: 'bg-[#1c1c1c]',
        description: "From the very beginning, the team showed outstanding transparency, professionalism, and responsiveness. Every phase of our warehouse expansion was managed with care and precision. They communicated clearly, met deadlines, and avoided cost overruns — a rare feat.",
        theme: 'emerald',
        Icon: ShieldCheck
    },
    {
        id: 2,
        title: 'Exceptional Quality & Design',
        category: 'MEP & Design',
        className: 'bg-[#242424]',
        description: "They transformed our outdated office into a sleek, modern environment that is both visually impressive and highly functional. From HVAC and acoustics to lighting and layout, every detail was thoughtfully executed with a balance of creativity and technical expertise.",
        theme: 'amber',
        Icon: Award
    },
    {
        id: 3,
        title: 'Tech-Forward Solutions',
        category: 'IT & Technology',
        className: 'bg-[#2a2a2a]',
        description: "They handled our data center cabling and VoIP deployment with impressive precision and efficiency. Every aspect of the infrastructure was planned and executed with care, minimizing downtime and ensuring a smooth transition.",
        theme: 'blue',
        Icon: Star
    },
];

export const StackedCards = () => {
    const [cardStack, setCardStack] = useState(cardsData);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStartX, setDragStartX] = useState(0);
    const [dragOffset, setDragOffset] = useState(0);
    const intervalRef = useRef<any>(null);
    const constraintsRef = useRef(null);

    const getThemeStyles = (theme: string) => {
        switch (theme) {
            case 'emerald': return { bg: 'bg-amber-500/10 border-amber-500/30', text: 'text-amber-400' };
            case 'amber': return { bg: 'bg-amber-500/10 border-amber-500/30', text: 'text-amber-400' };
            case 'blue': return { bg: 'bg-amber-500/10 border-amber-500/30', text: 'text-amber-400' };
            default: return { bg: 'bg-amber-500/10 border-amber-500/30', text: 'text-amber-400' };
        }
    };

    const moveToNext = () => {
        setCardStack((prev) => {
            const [top, ...rest] = prev;
            return [...rest, top];
        });
        setCurrentIndex((prev) => (prev + 1) % cardsData.length);
    };

    const moveToPrevious = () => {
        setCardStack((prev) => {
            const last = prev[prev.length - 1];
            const rest = prev.slice(0, -1);
            return [last, ...rest];
        });
        setCurrentIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);
    };

    const toggleAutoPlay = () => setIsAutoPlaying(!isAutoPlaying);

    const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
        setIsDragging(true);
        setIsAutoPlaying(false);
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        setDragStartX(clientX);
    };

    const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging) return;
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        setDragOffset(clientX - dragStartX);
    };

    const handleDragEnd = () => {
        if (!isDragging) return;
        setIsDragging(false);
        if (Math.abs(dragOffset) > 100) {
            dragOffset > 0 ? moveToPrevious() : moveToNext();
        }
        setDragOffset(0);
        setIsAutoPlaying(true);
    };

    useEffect(() => {
        if (!isAutoPlaying) return;
        intervalRef.current = setInterval(() => {
            moveToNext();
        }, 4000);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [cardStack, isAutoPlaying]);

    const handleMouseEnter = () => setIsAutoPlaying(false);
    const handleMouseLeave = () => {
        if (!isDragging) setIsAutoPlaying(true);
    };

    return (
        <div className="relative w-full h-fit [@media(max-width:380px)]:min-h-[85vh] [@media(min-width:400px)_and_(max-width:412px)]:min-h-[55vh] [@media(min-width:350px)_and_(max-width:360px)]:min-h-[84vh] [@media(min-width:1020px)_and_(max-width:1024px)]:min-h-[50vh] min-h-[70vh] md:min-h-[45vh] grid md:h-96 mx-auto mt-20">
            <div
                ref={constraintsRef}
                className="relative w-full h-full"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {cardStack.map((card, index) => {
                    const isTop = index === 0;
                    const zIndex = cardsData.length - index;
                    const baseScale = 1 - index * 0.04;
                    const baseY = index * -20;

                    const transform = isTop && isDragging
                        ? `translateX(${dragOffset}px) translateY(${baseY}px) scale(${baseScale})`
                        : `translateY(${baseY}px) scale(${baseScale})`;

                    const themeStyles = getThemeStyles(card.theme);
                    const IconComponent = card.Icon;

                    return (
                        <Card
                            key={card.id}
                            {...card}
                            isTop={index === 0}
                            isDragging={isDragging}
                            transform={transform}
                            onDragStart={handleDragStart}
                            onDragMove={handleDragMove}
                            onDragEnd={handleDragEnd}
                            onClick={moveToNext}
                            zIndex={zIndex}
                        >
                            <div className="flex flex-col h-fit py-20 px-6 md:px-10 gap-6">
                                {/* Category */}
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-4 bg-amber-500 rounded-full" />
                                    <span className="text-xs font-inter font-medium text-white/40 uppercase tracking-widest">
                                        {card.category}
                                    </span>
                                </div>

                                {/* Title + quote */}
                                <div className="grid gap-4">
                                    <h3 className="font-montserrat text-xl md:text-3xl font-bold text-white">
                                        {card.title}
                                    </h3>
                                    <p className="font-inter text-base md:text-lg leading-8 text-white/60">
                                        &ldquo;{card.description}&rdquo;
                                    </p>
                                </div>

                                {/* Footer */}
                                <div className="flex items-center justify-between mt-2 pt-4 border-t border-white/10">
                                    <div className={`w-11 h-11 border-2 rounded-xl flex items-center justify-center ${themeStyles.bg}`}>
                                        <IconComponent className={`${themeStyles.text} w-5 h-5`} />
                                    </div>
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
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
                    goToIndex={(index) => {
                        const targetCard = cardsData[index];
                        const currentCardIndex = cardStack.findIndex(c => c.id === targetCard.id);
                        for (let i = 0; i < currentCardIndex; i++) moveToNext();
                    }}
                />

                <Current length={cardsData.length} currentIndex={currentIndex} />
            </div>
        </div>
    );
};