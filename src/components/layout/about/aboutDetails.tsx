import { Paragraph } from "@/components/ui/paragraph"
import { Header } from "../../ui/header"
import { AboutHighlights } from "./aboutHighlights"
import { ShimmerBadge } from "@/components/ui/shimmerBadge"
import { Info } from "lucide-react"
import { motion } from "motion/react"

export const AboutDetails = () => {
    return (
        <div className="w-full lg:w-[65%] [@media(min-width:1020px)_and_(max-width:1024px)]:w-[90%] flex flex-col justify-between gap-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mx-auto w-full grid gap-5"
            >
                <ShimmerBadge text="About Us" icon={Info} width="w-32" />

                <Header
                    level={2}
                    className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-[#1c1c1c] leading-tight"
                >
                    <span className="block whitespace-nowrap">Building Bold Ideas</span>
                    <span className="block whitespace-nowrap text-amber-500">Into Lasting Landmarks.</span>
                </Header>

                <Paragraph 
                 className=" text-[#1c1c1c]/60  max-w-2xl"
                 content='We are a global construction company delivering innovative, high-quality, and sustainable solutions. From towers to infrastructure, we shape cities, empower communities, and set new standards for the industry.'
                />
                
            </motion.div>

            <AboutHighlights />
        </div>
    )
}