import { Paragraph } from "@/components/ui/paragraph";
import Badge from "@/components/ui/badge";
import { Cta } from "@/components/ui/heroCta";
import type { HeroRefs } from "./types";
import { HeroHeading } from "./hero-heading";

export const HeroContent = ({refs}:HeroRefs) => {
    return(
         <div className="md:w-[70%] overflow-hidden w-[90%] text-white grid place-items-center gap-5">
            <Badge/>      
            <HeroHeading/>                              
            <Paragraph 
                content="We are a global construction company dedicated to turning your imagination into reality. From concept to completion, we bring bold ideas to life with precision, innovation, and craftsmanship no matter where in the world you are" 
                className="text-lg md:text-xl w-full md:w-[85%] tracking-wide leading-7 md:leading-8 text-center text-white/90"
            />
            
            <Cta ref={refs.featureRef}/>
        </div>
    )
}