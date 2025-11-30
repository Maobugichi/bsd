import { Paragraph } from "@/components/ui/paragraph";
import Badge from "@/components/ui/badge";
import { Cta } from "@/components/ui/heroCta";
import type { HeroRefs } from "./types";
import { HeroHeading } from "./hero-heading";

export const HeroContent = ({refs,scrollToSection }: HeroRefs & { scrollToSection: (ref:any) => void }) => {
    return(
         <div className="md:w-[70%] [@media(min-width:1020px)_and_(max-width:1024px)]:w-[90%] overflow-hidden w-[90%] text-white grid place-items-center gap-5">
            <Badge/>      
            <HeroHeading/>                              
            <Paragraph 
                content="We are a global construction company dedicated to turning your imagination into reality. From concept to completion, we bring bold ideas to life with precision, innovation, and craftsmanship no matter where in the world you are" 
                className="[@media(min-width:1020px)_and_(max-width:1024px)]:text-2xl md:text-xl w-full md:w-[85%] tracking-wide leading-7 md:leading-8 text-center text-white/90"
            />
            
            <Cta ref={refs.featureRef} onClick={() => scrollToSection(refs.featureRef)}/>
        </div>
    )
}