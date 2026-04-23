import type { RefObject } from "react";
import { HeroBackground } from "./hero-background";
import { HeroContent } from "./hero-content";

interface HeroRefs {
     refs: {
        heroRef: RefObject<HTMLElement>;
        featureRef: RefObject<HTMLButtonElement>;
     }
}

export const Hero = ({refs, scrollToSection}: HeroRefs & { scrollToSection: (ref:  React.RefObject<HTMLElement>) => void }) => {
    return (
        <section
            ref={refs.heroRef}
            className="min-h-[100svh] [@media(min-width:1020px)_and_(max-width:1024px)]:min-h-[80vh] [@media(width:1024px)_and_(height:600px)]:min-h-[120vh] relative overflow-hidden"
        >
            <HeroBackground refs={refs} />
            <div className="relative z-10  [@media(min-width:1020px)_and_(max-width:1024px)]:min-h-[80vh] grid place-items-center  w-full mt-20">
                <HeroContent refs={refs} scrollToSection={scrollToSection} />
            </div>
        </section>
    )
}