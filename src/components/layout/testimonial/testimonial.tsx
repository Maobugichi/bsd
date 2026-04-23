import { forwardRef } from "react"
import { Header } from "../../ui/header"
import { StackedCards } from "./stackCards"
import { MessageCircle } from "lucide-react"
import { ShimmerBadge } from "../../ui/shimmerBadge"
import { motion } from "motion/react"
import { Paragraph } from "@/components/ui/paragraph"

export const Testimonial = forwardRef<HTMLElement>((_props, ref) => {
    return (
        <section ref={ref} className="relative h-fit py-20 md:py-28 bg-[#1c1c1c] overflow-hidden">
            {/* Texture */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '128px',
                }}
            />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

            <div className="relative z-10 w-[90%] lg:w-[85%] [@media(min-width:1020px)_and_(max-width:1024px)]:w-[85%] mx-auto">
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
                     className="font-inter text-base md:text-lg text-white/50 leading-relaxed max-w-2xl"
                     content=' Hear directly from the developers, architects, and businesses who trusted BSD Light to deliver.'
                    />
                       
                    
                </motion.div>

                <StackedCards />
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        </section>
    )
})

Testimonial.displayName = "Testimonial"