import { useEffect, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UseCardStackAnimationProps {
  cardsRef: RefObject<(HTMLDivElement | null)[]>;
  yOffset?: number;
  scaleIncrement?: number;
  opacityDecrement?: number;
  startTrigger?: string;
  endTrigger?: string;
  keepLastCardFull?: boolean;
  id?: string; 
  enabled?:boolean
}

export function useCardStackAnimation({
  cardsRef,
  yOffset = 20,
  scaleIncrement = 0.05,
  opacityDecrement = 0.1,
  startTrigger = 'top center',
  endTrigger = 'top 120px',
  keepLastCardFull = true,
  id = '' ,
  enabled
}: UseCardStackAnimationProps) {
  useEffect(() => {
    if (!enabled) return;

    const cards = cardsRef.current;
    if (!cards) return;
    
    const validCards = cards.filter(Boolean) as HTMLDivElement[];
    if (validCards.length === 0) return;
    
   
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars.id === id) {
        trigger.kill();
      }
    });

    const totalCards = validCards.length
    
    validCards.forEach((card, index) => {
      const isLastCard = index === validCards.length - 1;
      const reverseIndex = totalCards - 1 - index;
        gsap.to(card, {
          y:(index + 1) * 20,
          scale: 1 - (reverseIndex * scaleIncrement),
          
          opacity: isLastCard ? 1 : 1 - (index * 0.1),
          ease: 'none',
          scrollTrigger: {
            id: id,
            trigger: card,
            start:startTrigger,
            end:endTrigger,
            scrub: 1,
            invalidateOnRefresh: true
          }
        });
      
    });

  

    ScrollTrigger.refresh();

    return () => {
     
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.id === id) {
          trigger.kill();
        }
      });
    };
  }, [cardsRef, yOffset, scaleIncrement, opacityDecrement, startTrigger, endTrigger, keepLastCardFull, id, enabled]);
}