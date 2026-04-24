import { createContext, useContext, useRef, useCallback, type RefObject, type ReactNode } from "react";

type NavigationContextValue = {
    refs: {
        heroRef: RefObject<HTMLElement>;
        aboutRef: RefObject<HTMLElement>;
        featureRef: RefObject<HTMLElement>;
        galleryRef: RefObject<HTMLElement>;
        testimonialRef: RefObject<HTMLElement>;
        faqRef: RefObject<HTMLElement>;
    };
    scrollToSection: (ref: RefObject<HTMLElement>) => void;
};

const NavigationContext = createContext<NavigationContextValue | null>(null);

export const useNavigationContext = () => {
    const ctx = useContext(NavigationContext);
    if (!ctx) throw new Error("useNavigationContext must be used within NavigationProvider");
    return ctx;
};

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
    const heroRef = useRef<HTMLElement>(null);
    const aboutRef = useRef<HTMLElement>(null);
    const featureRef = useRef<HTMLElement>(null);
    const galleryRef = useRef<HTMLElement>(null);
    const testimonialRef = useRef<HTMLElement>(null);
    const faqRef = useRef<HTMLElement>(null);

    const scrollToSection = useCallback((ref: RefObject<HTMLElement>) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
        <NavigationContext.Provider value={{ refs: { heroRef, aboutRef, featureRef, galleryRef, testimonialRef, faqRef }, scrollToSection }}>
            {children}
        </NavigationContext.Provider>
    );
};