import { Header } from "../../ui/header";
import { Paragraph } from "../../ui/paragraph";
import { ServiceCard } from "./serviceCard";
import { Layers } from "lucide-react";
import { ShimmerBadge } from "../../ui/shimmerBadge";
import { NoiseTexture } from "@/components/ui/noiseTexture";
import { motion } from "motion/react";
import { useNavigationContext } from "@/context/navigation.context";

export const Feature = () => {
    const { refs: { featureRef } } = useNavigationContext();

    return (
        <section
            ref={featureRef}
            className="font-montserrat bg-[#1c1c1c] py-20 md:py-28 text-white relative overflow-hidden"
        >
            <NoiseTexture />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

            <div className="w-[90%] lg:w-[85%] mx-auto grid gap-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid gap-5 w-full lg:w-[75%]"
                >
                    <ShimmerBadge text="Services" icon={Layers} width="w-32" />

                    <Header
                        level={2}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                    >
                        <span className="block whitespace-nowrap">Built on Expertise.</span>
                        <span className="block whitespace-nowrap text-amber-400">Delivered with Precision.</span>
                    </Header>

                    <Paragraph
                        className="text-white/50 font-inter font-light leading-relaxed text-base md:text-lg tracking-wide md:max-w-2xl"
                        content="Whether you're improving your home, optimizing a workspace, or starting a development — BSD Light handles it all. Renovations, fittings, drywall, partitions, finishes, and more. Quick setup, quality results, built exactly when you need it."
                    />
                </motion.div>

                <ServiceCard />
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        </section>
    );
};

Feature.displayName = "Feature";