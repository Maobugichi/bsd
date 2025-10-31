import { Paragraph } from "../components/paragraph"
import Badge from "./badge";
import { Cta } from "./heroCta"
import type { RefObject } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

interface HeroRefs {
     refs: {
        heroRef: RefObject<HTMLElement>;
        featureRef: RefObject<HTMLElement>;
     }
}

export const Hero = ({refs}:HeroRefs) => {
     const { scrollYProgress } = useScroll({
        target: refs.heroRef,
        offset: ["start start", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    
    const y = useTransform(smoothProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(smoothProgress, [0, 1], [1, 0.7]);
    
    return(
        <section 
         ref={refs.heroRef}
         tabIndex={0}
         className="h-screen md:h-[140vh] relative overflow-hidden"
        >
            <motion.div 
                className="absolute inset-0 will-change-transform"
                style={{ 
                    y,
                    opacity,
                }}
            >
                <img
                    src="/bsd-1.jpg"
                    alt="Construction site background"
                    className="w-full h-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
            </motion.div>
            
            <div className="relative z-10 h-full grid place-items-center pt-16">
                <div className="md:w-[70%] overflow-hidden w-[90%] text-white grid place-items-center gap-5">
                    <Badge/>
                    
                  <h1 className="overflow-hidden font-montserrat md:leading-tight leading-14 tracking-wide text-4xl w-full md:w-[80%] md:text-5xl lg:text-6xl font-bold text-center">
                        <span className="text-white">Our Vision Got </span>
                        <span className="relative inline-block">
                            <span className="relative z-10">
                                Bigger
                            </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300/30 to-transparent blur-sm"></span>
                        </span>
                        <span className="text-white"> So Did Our </span>
                        <span className="relative px-2 inline-block overflow-hidden align-middle">
                            <>
                            <span className="absolute inset-0 bg-black rounded-xl" />
                            <span className="absolute inset-0 bg-gradient-to-r from-black/0 via-white/20 to-black/0 animate-shimmer" />
                            </>
                            <span className="relative z-10">Blueprint</span>
                        </span>
                        <span className="text-white"> for the Future.</span>
                  </h1>
                                        
                    <Paragraph 
                        content="We are a global construction company dedicated to turning your imagination into reality. From concept to completion, we bring bold ideas to life with precision, innovation, and craftsmanship no matter where in the world you are" 
                        className="text-lg md:text-xl w-full md:w-[85%] tracking-wide leading-7 md:leading-8 text-center text-white/90"
                    />
                    
                    <Cta ref={refs.featureRef}/>
                </div>
            </div>
        </section>
    )
}