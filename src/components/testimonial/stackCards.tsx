import { useState, useEffect, useRef } from "react";
import { cards } from "./constant/cards-object";
import { Controls } from "./controls";
import { Card } from "./card";
import { Current } from "./current";
import type { CardStackProps } from "./types";



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
    <div className="relative w-full h-fit [@media(max-width:380px)]:min-h-[85vh] [@media(min-width:400px)_and_(max-width:412px)]:min-h-[55vh] [@media(min-width:350px)_and_(max-width:360px)]:min-h-[84vh] [@media(min-width:1020px)_and_(max-width:1024px)]:min-h-[50vh]  min-h-[70vh] md:min-h-[45vh] grid md:h-96 mx-auto mt-20">
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
          />
          );
        })}

       
        <Controls
          currentIndex={currentIndex}
          total={cards.length}
          isAutoPlaying={isAutoPlaying}
          moveToNext={moveToNext}
          moveToPrevious={moveToPrevious}
          toggleAutoPlay={toggleAutoPlay}
          goToIndex={(index) => {
            const targetCard = cards[index];
            const currentCardIndex = cardStack.findIndex(c => c.id === targetCard.id);
            for (let i = 0; i < currentCardIndex; i++) moveToNext();
          }}
        />

      
      <Current length={cards.length} currentIndex={currentIndex}/>
      </div>
    </div>
  );
};