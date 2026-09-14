import { useScroll, useSpring, useTransform } from "motion/react";
import { useNavigationContext } from "@/context/navigation.context";
import { HeroBackground } from "./heroBackground";
import { HeroContent, HeroProvider } from "./heroContent";

const HeroSection = () => {
    const { refs: { heroRef } } = useNavigationContext();

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
        layoutEffect: false
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const y = useTransform(smoothProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(smoothProgress, [0, 1], [1, 0.7]);

    return (
        <section
            ref={heroRef}
            className="min-h-[100svh] [@media(width:1024px)_and_(height:600px)]:min-h-[120vh] relative overflow-hidden flex items-start justify-start"
        >
            <HeroBackground y={y} opacity={opacity} />
            <div className="relative z-10 w-full max-w-3xl px-6 md:px-12 text-left">
                <HeroContent />
            </div>
        </section>
    );
};

export const Hero = () => (
    <HeroProvider>
        <HeroSection />
    </HeroProvider>
);