import { createContext, useContext, type RefObject } from "react";

export type HeroContextValue = {
    featureRef: RefObject<HTMLButtonElement>;
    scrollToSection: (ref: RefObject<HTMLButtonElement>) => void;
};

export const HeroContext = createContext<HeroContextValue | null>(null);

export const useHeroContext = () => {
    const ctx = useContext(HeroContext);
    if (!ctx) throw new Error("useHeroContext must be used within HeroProvider");
    return ctx;
};