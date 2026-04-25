import { Header } from "../../ui/header";
import { StackedCards } from "./stackCards";
import { MessageCircle } from "lucide-react";
import { ShimmerBadge } from "../../ui/shimmerBadge";
import { NoiseTexture } from "../../ui/noiseTexture";
import { motion } from "motion/react";
import { Paragraph } from "@/components/ui/paragraph";
import { useNavigationContext } from "@/context/navigation.context";

export const Testimonial = () => {
    const { refs: { testimonialRef } } = useNavigationContext();

    return (
        <section ref={testimonialRef} className="relative py-20 md:py-28 bg-[#1c1c1c] overflow-hidden">
            <NoiseTexture />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

            <div className="relative z-10 w-[90%] lg:w-[85%] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid gap-4 w-full lg:w-[75%]"
                >
                    <ShimmerBadge text="Reviews" icon={MessageCircle} width="w-32" />
                    <Header
                        level={2}
                        className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mt-3"
                    >
                        <span className="block whitespace-nowrap">Trust is Built</span>
                        <span className="block whitespace-nowrap text-amber-500">With Consistency.</span>
                    </Header>
                    <Paragraph
                        className="font-roboto text-base md:text-lg text-white/50 leading-relaxed max-w-2xl"
                        content="Hear directly from the developers, architects, and businesses who trusted BSD Light to deliver."
                    />
                </motion.div>

                <StackedCards />
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        </section>
    );
};

Testimonial.displayName = "Testimonial";