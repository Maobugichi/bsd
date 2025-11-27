// src/hooks/useCardStackAnimation.ts
import { useEffect, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UseCardStackAnimationOptions {
  cardsRef: RefObject<(HTMLDivElement | null)[]>;
  backScales?: number[];
  backY?: number[];
  triggerSelector?: string;
  scrollAmount?: number;
}

export const useCardStackAnimation = ({
  cardsRef,
  backScales = [1, 1, 1, 1, 1],
  backY = [20, 40, 60],
  triggerSelector = '.cards-container',
  scrollAmount = window.innerHeight,
}: UseCardStackAnimationOptions) => {
  useEffect(() => {
    const cards = cardsRef.current?.filter(Boolean) || [];

    cards.forEach((card, index) => {
      if (index === 0) return;

      gsap.to(card, {
        scale: backScales[index - 1] || 0.8,
        y: backY[index - 1] || 60,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerSelector,
          start: 'top top',
          end: () => `+=${scrollAmount}`,
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [cardsRef, backScales, backY, triggerSelector, scrollAmount]);
};