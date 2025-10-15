import { useState, useEffect, useRef } from "react";
import {
  Star,
  ShieldCheck,
  Award,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from 'lucide-react';

type CardStackProps = {
  id: number;
  className: string;
  children: React.ReactNode;
  title: string;
  category: string;
}

const cards: CardStackProps[] = [
  {
    id: 1,
    title: 'Reliable and Transparent',
    category: 'Construction & Safety',
    className: 'bg-gradient-to-br from-slate-900 to-slate-800',
    children: (
      <div className="p-6 md:p-8 flex flex-col h-full gap-3 md:gap-5">
        <div className="grid gap-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Construction & Safety</span>
          </div>
          <h1 className="text-xl md:text-3xl font-semibold mb-3 text-white">Reliable and Transparent</h1>
          <p className="text-md tracking-wide md:text-lg tracking-wider leading-relaxed text-slate-300">
            "From the very beginning, the team showed outstanding transparency, professionalism, and responsiveness. Every phase of our warehouse expansion was managed with care and precision. They communicated clearly, met deadlines, and avoided cost overruns — a rare feat. Their commitment to safety and quality stood out, consistently meeting and exceeding standards."
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-600/20 border-2 border-emerald-600/30 rounded-full flex items-center justify-center backdrop-blur-sm">
            <ShieldCheck className="text-emerald-400 w-7 h-7" />
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: 'Exceptional Quality & Design',
    category: 'MEP & Design',
    className: 'bg-gradient-to-br from-gray-900 to-gray-800',
    children: (
      <div className="p-6 md:p-8 flex flex-col h-full gap-3 md:gap-5">
        <div className="grid gap-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">MEP & Design</span>
          </div>
          <h1 className="text-xl md:text-3xl font-semibold mb-3 text-white">Exceptional Quality & Design</h1>
          <p className="text-md md:text-lg tracking-wide leading-relaxed text-slate-300">
            "They transformed our outdated office into a sleek, modern environment that is both visually impressive and highly functional. From HVAC and acoustics to lighting and layout, every detail was thoughtfully executed with a balance of creativity and technical expertise. Their ability to deliver a polished, performance-driven workspace truly exceeded our expectations."
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-amber-600/20 border-2 border-amber-600/30 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Award className="text-amber-400 w-7 h-7" />
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: 'Tech-Forward Solutions',
    category: 'IT & Technology',
    className: 'bg-gradient-to-br from-slate-700 to-slate-600',
    children: (
      <div className="p-6 md:p-8 flex flex-col h-full gap-3 md:gap-5">
        <div className="grid gap-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">IT & Technology</span>
          </div>
          <h1 className="text-xl md:text-3xl font-semibold mb-3 text-white">Tech-Forward Solutions</h1>
          <p className="text-md md:text-lg tracking-wide leading-relaxed text-slate-300">
            "They handled our data center cabling and VoIP deployment with impressive precision and efficiency. Every aspect of the infrastructure was planned and executed with care, minimizing downtime and ensuring a smooth transition. Since implementation, our systems have run reliably, and their support team has been both responsive and knowledgeable."
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-600/20 border-2 border-blue-600/30 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Star className="text-blue-400 w-7 h-7" />
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>
      </div>
    )
  },
];

export const StackedCards = () => {
  const [cardStack, setCardStack] = useState<CardStackProps[]>(cards);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const intervalRef = useRef<any>(null);
  const constraintsRef = useRef(null);

  const moveToNext = () => {
    const [top, ...rest] = cardStack;
    setCardStack([...rest, top]);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const moveToPrevious = () => {
    const last = cardStack[cardStack.length - 1];
    const rest = cardStack.slice(0, -1);
    setCardStack([last, ...rest]);
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

 
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
      if (dragOffset > 0) {
        moveToPrevious();
      } else {
        moveToNext();
      }
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
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [cardStack, isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => {
    if (!isDragging) setIsAutoPlaying(true);
  };

  return (
    <div className="relative w-[95%] md:w-full h-fit min-h-[60vh] grid md:h-96 mx-auto mt-20">
      <div 
        ref={constraintsRef} 
        className="relative w-full h-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {cardStack.map((card, index) => {
          const isTop = index === 0;
          const zIndex = cards.length - index;
          const baseScale = 1 - index * 0.04;
          const baseY = index * -20;
          
          
          const transform = isTop && isDragging 
            ? `translateX(${dragOffset}px) translateY(${baseY}px) scale(${baseScale})` 
            : `translateY(${baseY}px) scale(${baseScale})`;

          return (
            <div
              key={card.id}
              className={`
                absolute w-full h-[90%] rounded-2xl shadow-xl cursor-pointer
                ${card.className}
                border border-white/10
                transition-all duration-300 ease-out
                ${isTop ? 'opacity-100' : 'opacity-75'}
                ${isDragging && isTop ? 'cursor-grabbing' : 'cursor-grab'}
              `}
              style={{
                zIndex,
                transform,
                top: 0,
                left: 0,
              }}
              onMouseDown={isTop ? handleDragStart : undefined}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onTouchStart={isTop ? handleDragStart : undefined}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
              onClick={!isDragging && isTop ? moveToNext : undefined}
            >
              {card.children}

           
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl pointer-events-none" />
              
            
              {isTop && (
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white/30 rounded-full" />
              )}
            </div>
          );
        })}

       
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-3 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-2 shadow-lg border border-gray-200">
        
          <button
            onClick={moveToPrevious}
            className="w-10 h-10 bg-transparent rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-900 hover:scale-110 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
          </button>

        
          <div className="flex gap-1.5">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const targetCard = cards[index];
                  const currentCardIndex = cardStack.findIndex(c => c.id === targetCard.id);
                  for (let i = 0; i < currentCardIndex; i++) {
                    moveToNext();
                  }
                }}
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

      
        <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md rounded-full px-3 py-1 border border-white/20">
          <span className="text-white text-sm font-medium">
            {currentIndex + 1} / {cards.length}
          </span>
        </div>

       
        <div className="absolute top-4 left-4">
          <div className={`
            w-2 h-2 rounded-full transition-all duration-300
            ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}
          `} />
        </div>
      </div>
    </div>
  );
};