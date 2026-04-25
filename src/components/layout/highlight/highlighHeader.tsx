import { Header } from "@/components/ui/header"
import { Paragraph } from "@/components/ui/paragraph"
import { ShimmerBadge } from "@/components/ui/shimmerBadge"
import { TrendingUp } from "lucide-react"
import { motion } from "motion/react"

export const HighlightHeader = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-5 w-full lg:w-[75%]"
        >
            <ShimmerBadge text="Achievements" icon={TrendingUp} width="w-40" />
            <Header
                level={2}
                className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-[#1c1c1c] leading-tight"
            >
                <span className="block whitespace-nowrap">Built on Trust.</span>
                <span className="block whitespace-nowrap text-amber-500">Proven by Numbers.</span>
            </Header>
            <Paragraph
                content="The numbers and qualities that make BSD Light the trusted partner for your construction and design needs."
                className="text-[#1c1c1c]/60 font-inter font-light leading-relaxed text-base md:text-lg tracking-wide md:max-w-2xl"
            />
        </motion.div>
    )
}