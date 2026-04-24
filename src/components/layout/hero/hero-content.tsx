import { Paragraph } from "@/components/ui/paragraph";
import { Cta } from "@/components/ui/heroCta";
import { HeroHeading } from "./hero-heading";
import { createContext, useContext, useRef, useCallback, type RefObject, type ReactNode } from "react";

type HeroContextValue = {
    featureRef: RefObject<HTMLButtonElement>;
    scrollToSection: (ref: RefObject<HTMLButtonElement>) => void;
};

const HeroContext = createContext<HeroContextValue | null>(null);

export const useHeroContext = () => {
    const ctx = useContext(HeroContext);
    if (!ctx) throw new Error("useHeroContext must be used within HeroProvider");
    return ctx;
};

export const HeroProvider = ({ children }: { children: ReactNode }) => {
    const featureRef = useRef<HTMLButtonElement>(null);

    const scrollToSection = useCallback((ref: RefObject<HTMLButtonElement>) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
        <HeroContext.Provider value={{ featureRef, scrollToSection }}>
            {children}
        </HeroContext.Provider>
    );
};

type HeroContentProps = {
    paragraphContent?: string;
};

export const HeroContent = ({
    paragraphContent = "BSD Light partners with developers, architects, and visionaries who refuse to compromise. Precision engineering. Global reach. Zero excuses.",
}: HeroContentProps) => {
    const { featureRef, scrollToSection } = useHeroContext();

    return (
        <div className="w-full px-5 md:px-0 mx-auto md:w-[80%] lg:w-[70%] xl:w-[75%] text-white flex flex-col items-center gap-8 md:gap-5 pt-32 md:pt-28 pb-8">
            <HeroHeading />
            <Paragraph
                content={paragraphContent}
                className="text-center text-white/70  md:max-w-xl md:w-[80%]"
            />
            <Cta ref={featureRef} onClick={() => scrollToSection(featureRef)} />
        </div>
    );
};