import { Paragraph } from "@/components/ui/paragraph";
import { Cta } from "@/components/ui/heroCta";
import type { HeroRefs } from "../../../types/hero.types";
import { HeroHeading } from "./hero-heading";

import type { RefObject } from "react";

type ScrollTarget = RefObject<HTMLElement | HTMLButtonElement>;

export const HeroContent = ({refs, scrollToSection}: HeroRefs & { scrollToSection: (ref: ScrollTarget) => void }) => {
    return (
        <div className="w-full px-5 md:px-0 md:w-[80%] lg:w-[70%] [@media(min-width:1020px)_and_(max-width:1024px)]:w-[90%] text-white flex flex-col items-center gap-8 md:gap-5 pt-24 md:pt-28 pb-8">
            <HeroHeading />
           <Paragraph
            content="BSD Light partners with developers, architects, and visionaries who refuse to compromise. Precision engineering. Global reach. Zero excuses."
            className="text-center text-white/70 font-inter  md:max-w-xl md:w-[80%] "
            />
            <Cta ref={refs.featureRef} onClick={() => scrollToSection(refs.featureRef)} />
        </div>
    )
}