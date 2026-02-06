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
    className: 'bg-gradient-to-br from-slate-900 to-slate-800',
    description: "From the very beginning, the team showed outstanding transparency, professionalism, and responsiveness. Every phase of our warehouse expansion was managed with care and precision. They communicated clearly, met deadlines, and avoided cost overruns — a rare feat.",
    theme: 'emerald',
    Icon: ShieldCheck
  },
  {
    id: 2,
    title: 'Exceptional Quality & Design',
    category: 'MEP & Design',
    className: 'bg-gradient-to-br from-gray-900 to-gray-800',
    description: "They transformed our outdated office into a sleek, modern environment that is both visually impressive and highly functional. From HVAC and acoustics to lighting and layout, every detail was thoughtfully executed with a balance of creativity and technical expertise.",
    theme: 'amber',
    Icon: Award
  },
  {
    id: 3,
    title: 'Tech-Forward Solutions',
    category: 'IT & Technology',
    className: 'bg-gradient-to-br from-slate-700 to-slate-600',
    description: "They handled our data center cabling and VoIP deployment with impressive precision and efficiency. Every aspect of the infrastructure was planned and executed with care, minimizing downtime and ensuring a smooth transition.",
    theme: 'blue',
    Icon: Star
  },
];

export const StackedCards = () => {
  // mapped to cardsData instead of the old object
  const [cardStack, setCardStack] = useState(cardsData); 
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const intervalRef = useRef<any>(null);
  const constraintsRef = useRef(null);

  // --- Helper to get theme colors based on data ---
  const getThemeStyles = (theme: string) => {
    switch (theme) {
      case 'emerald': return { bg: 'bg-emerald-600/20 border-emerald-600/30', text: 'text-emerald-400' };
      case 'amber': return { bg: 'bg-amber-600/20 border-amber-600/30', text: 'text-amber-400' };
      case 'blue': return { bg: 'bg-blue-600/20 border-blue-600/30', text: 'text-blue-400' };
      default: return { bg: 'bg-slate-600/20 border-slate-600/30', text: 'text-slate-400' };
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

          // Get theme styles dynamically
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
            {/* RECONSTRUCTED JSX CONTENT INSIDE THE COMPONENT */}
            <div className="flex flex-col h-fit py-20 px-4 md:px-8 gap-3 md:gap-5">
              <div className="grid gap-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    {card.category}
                  </span>
                </div>
                <h1 className="text-xl md:text-3xl font-semibold mb-3 text-white">
                  {card.title}
                </h1>
                <p className="text-md tracking-wide md:text-lg leading-10 text-slate-300">
                  "{card.description}"
                </p>
              </div>
              
              <div className="flex items-center justify-between mt-4">
                <div className={`w-12 h-12 md:w-14 md:h-14 border-2 rounded-full flex items-center justify-center backdrop-blur-sm ${themeStyles.bg}`}>
                  <IconComponent className={`${themeStyles.text} w-7 h-7`} />
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

      <Current length={cardsData.length} currentIndex={currentIndex}/>
      </div>
    </div>
  );
};