import { useRef, useCallback, type ReactNode } from "react";
import { Paragraph } from "@/components/ui/paragraph";
import { Cta } from "@/components/ui/heroCta";
import { HeroHeading } from "./heroHeading";
import { HeroContext, useHeroContext } from "./heroContext";

export const HeroProvider = ({ children }: { children: ReactNode }) => {
    const featureRef = useRef<HTMLButtonElement>(null);

    const scrollToSection = useCallback((ref: React.RefObject<HTMLButtonElement>) => {
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
    paragraphContent = "Precision construction and engineering for ambitious projects — delivered without compromise.",
}: HeroContentProps) => {
    const { featureRef, scrollToSection } = useHeroContext();

    return (
        <div className="w-full px-5 md:px-0 mx-auto md:w-[80%] lg:w-[70%] xl:w-[75%] text-white flex flex-col justify-end items-start gap-8 md:gap-4  pt-30 h-[80vh] md:h-[100vh] pb-8">
            <HeroHeading />
            <Paragraph
                content={paragraphContent}
                className="text-left text-white/70"
            />
            <Cta ref={featureRef} onClick={() => scrollToSection(featureRef)} />
        </div>
    );
};