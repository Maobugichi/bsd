import { useState, useRef, useCallback, useEffect } from "react";

interface UseDragOptions {
    onSwipeLeft: () => void;
    onSwipeRight: () => void;
    isAutoPlaying: boolean;
    pauseAutoPlay: () => void;
    resumeAutoPlay: () => void;
}

export const useDrag = ({
    onSwipeLeft,
    onSwipeRight,
    isAutoPlaying,
    pauseAutoPlay,
    resumeAutoPlay,
}: UseDragOptions) => {
    const [dragOffset, setDragOffset] = useState(0);

    const isDraggingRef     = useRef(false);
    const dragStartXRef     = useRef(0);
    const dragOffsetRef     = useRef(0);
    const wasDraggingRef    = useRef(false);
    const wasAutoPlayingRef = useRef(true);

    const handleDragStart = useCallback(
        (e: React.MouseEvent | React.TouchEvent) => {
            isDraggingRef.current     = true;
            wasDraggingRef.current    = false;
            wasAutoPlayingRef.current = isAutoPlaying;
            pauseAutoPlay();
            dragStartXRef.current =
                "touches" in e ? e.touches[0].clientX : e.clientX;
        },
        // isAutoPlaying must be captured at drag-start time
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [isAutoPlaying],
    );

    const handleDragMove = useCallback((e: MouseEvent | TouchEvent) => {
        if (!isDraggingRef.current) return;
        const clientX =
            "touches" in e
                ? (e as TouchEvent).touches[0].clientX
                : (e as MouseEvent).clientX;
        const offset = clientX - dragStartXRef.current;
        dragOffsetRef.current = offset;
        setDragOffset(offset);
    }, []);

    const handleDragEnd = useCallback(() => {
        if (!isDraggingRef.current) return;
        isDraggingRef.current = false;

        const offset = dragOffsetRef.current;
        wasDraggingRef.current = Math.abs(offset) > 5;

        if (Math.abs(offset) > 100) {
            if (offset > 0) onSwipeRight();
            else onSwipeLeft();
        }

        dragOffsetRef.current = 0;
        setDragOffset(0);

        if (wasAutoPlayingRef.current) resumeAutoPlay();
    }, [onSwipeLeft, onSwipeRight, resumeAutoPlay]);

    // Attach move/end to window so fast drags don't get stuck
    useEffect(() => {
        window.addEventListener("mousemove", handleDragMove);
        window.addEventListener("mouseup", handleDragEnd);
        window.addEventListener("touchmove", handleDragMove, { passive: true });
        window.addEventListener("touchend", handleDragEnd);
        return () => {
            window.removeEventListener("mousemove", handleDragMove);
            window.removeEventListener("mouseup", handleDragEnd);
            window.removeEventListener("touchmove", handleDragMove);
            window.removeEventListener("touchend", handleDragEnd);
        };
    }, [handleDragMove, handleDragEnd]);

    const handleCardClick = useCallback(() => {
        if (wasDraggingRef.current) return;
        onSwipeLeft();
    }, [onSwipeLeft]);

    return { dragOffset, handleDragStart, handleCardClick };
};