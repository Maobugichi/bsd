// hero-background.tsx
import { motion, type MotionValue } from "motion/react";

type HeroBackgroundProps = {
    y: MotionValue<string>;
    opacity: MotionValue<number>;
};

export const HeroBackground = ({ y, opacity }: HeroBackgroundProps) => {
    const getCloudinaryUrl = (width: number) =>
        `https://res.cloudinary.com/dao2a3ib4/image/upload/f_auto,q_auto:low,w_${width},c_limit/v1760973515/bsd-1_zuaiyr.jpg`;

    return (
        <motion.div
            className="absolute inset-0 will-change-transform"
            style={{ y, opacity }}
        >
            <img
                src={getCloudinaryUrl(1920)}
                srcSet={`
                    ${getCloudinaryUrl(640)} 640w,
                    ${getCloudinaryUrl(1024)} 1024w,
                    ${getCloudinaryUrl(1366)} 1366w,
                    ${getCloudinaryUrl(1920)} 1920w
                `}
                sizes="100vw"
                alt="Construction site background"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
                decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </motion.div>
    );
};