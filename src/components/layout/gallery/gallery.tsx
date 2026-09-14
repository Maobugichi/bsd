import { Header } from "../../ui/header";
import Carousel from "./swiper";
import { ShimmerBadge } from "../../ui/shimmerBadge";
import { NoiseTexture } from "../../ui/noiseTexture";
import { Images } from "lucide-react";
import { motion } from "motion/react";
import { Paragraph } from "@/components/ui/paragraph";
import { useNavigationContext } from "@/context/navigation.context";

export const Gallery = () => {
    const { refs: { galleryRef } } = useNavigationContext();

    return (
        <section ref={galleryRef} className="relative py-20 md:py-28 bg-[#f5f0eb] overflow-hidden">
            <NoiseTexture opacity="opacity-[0.04]" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

            <div className="relative z-10 w-[90%] lg:w-[85%] mx-auto flex flex-col gap-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid gap-4 w-full lg:w-[75%]"
                >
                    <ShimmerBadge text="Gallery" icon={Images} width="w-32" />
                    <Header
                        level={2}
                        className="font-manrope text-3xl md:text-4xl lg:text-5xl font-bold text-[#1c1c1c] leading-tight"
                    >
                        <span className="block whitespace-nowrap">Built to Last.</span>
                        <span className="block whitespace-nowrap text-amber-500">Shown to Impress.</span>
                    </Header>
                    <Paragraph
                        className="text-[#1c1c1c]/60 max-w-2xl"
                        content="A selection of our completed projects across construction, design, and installation — each one a testament to precision and craftsmanship."
                    />
                </motion.div>

                <Carousel />
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        </section>
    );
};

Gallery.displayName = "Gallery";