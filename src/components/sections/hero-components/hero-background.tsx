import { motion, useTransform, useScroll, useSpring } from "motion/react"
import type { HeroRefs } from "./types";



export const HeroBackground = ({ refs }: HeroRefs) => {
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

    return (
        <motion.div 
            className="absolute inset-0 will-change-transform"
            style={{ y, opacity }}
        >
            <img
                src="https://res.cloudinary.com/dao2a3ib4/image/upload/f_auto,q_auto,w_1600/bsd-1_zuaiyr"
                srcSet="
                    https://res.cloudinary.com/dao2a3ib4/image/upload/f_auto,q_auto,w_480/bsd-1_zuaiyr 480w,  <-- Added for small mobiles
                    https://res.cloudinary.com/dao2a3ib4/image/upload/f_auto,q_auto,w_800/bsd-1_zuaiyr 800w,
                    https://res.cloudinary.com/dao2a3ib4/image/upload/f_auto,q_auto,w_1200/bsd-1_zuaiyr 1200w,
                    https://res.cloudinary.com/dao2a3ib4/image/upload/f_auto,q_auto,w_1600/bsd-1_zuaiyr 1600w,
                    https://res.cloudinary.com/dao2a3ib4/image/upload/f_auto,q_auto,w_2000/bsd-1_zuaiyr 2000w
                "
                sizes="100vw"
                alt="Construction site background"
                className="w-full h-full object-cover"
                fetchPriority="high"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </motion.div>
    )
}