import type { RefObject } from "react";
import { HeroBackground } from "./hero-background";
import { HeroContent } from "./hero-content";

interface HeroRefs {
     refs: {
        heroRef: RefObject<HTMLElement>;
        featureRef: RefObject<HTMLButtonElement>;
     }
}

export const Hero = ({refs, scrollToSection }: HeroRefs & { scrollToSection: (ref:any) => void }) => {

    return(
        <section 
         ref={refs.heroRef}
         tabIndex={0}
         className="h-[110vh] md:h-[140vh] [@media(max-width:380px)]:h-[140vh] [@media(min-width:1020px)_and_(max-width:1024px)]:h-[80vh] [@media(width:1024px)_and_(height:600px)]:h-[120vh] relative overflow-hidden"
        >
          
            <HeroBackground refs={refs}/>
            <div className="relative z-10 h-full grid place-items-center pt-16">
               <HeroContent refs={refs} scrollToSection={scrollToSection}/>
            </div>
        </section>
    )
}