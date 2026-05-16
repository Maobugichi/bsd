import { useState, useCallback } from "react";
import { cardsData } from "@/constants/testimonial.constant";

export const useCardStack = () => {
    const [cardStack, setCardStack] = useState(cardsData);
    const [currentIndex, setCurrentIndex] = useState(0);

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

    return { cardStack, currentIndex, moveToNext, moveToPrevious, goToIndex };
};