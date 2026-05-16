import { useState, useEffect, useRef, useCallback } from "react";

export const useAutoPlay = (moveToNext: () => void) => {
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

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

    // Stable named callbacks instead of exposing the raw setter.
    // State setters are guaranteed stable by React, so empty deps arrays are correct.
    const pauseAutoPlay  = useCallback(() => setIsAutoPlaying(false), []);
    const resumeAutoPlay = useCallback(() => setIsAutoPlaying(true),  []);
    const toggleAutoPlay = useCallback(() => setIsAutoPlaying((v) => !v), []);

    return { isAutoPlaying, pauseAutoPlay, resumeAutoPlay, toggleAutoPlay };
};