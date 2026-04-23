import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"

export const HighlightCta = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center"
        >
            
            <a href="mailto:project@bsdlight.com?subject=Project Inquiry&body=Hello, I would like to discuss a project."
                className="inline-flex items-center gap-3 relative overflow-hidden
                           bg-amber-500 hover:bg-amber-400 text-[#1c1c1c]
                           font-montserrat font-bold text-base md:text-lg
                           rounded-2xl px-10 py-4 transition-all duration-300 
                           hover:scale-105 hover:shadow-xl hover:shadow-amber-500/30
                           cursor-pointer group"
            >
                <span className="absolute inset-0 overflow-hidden rounded-2xl">
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                </span>
                <span className="relative z-10">Ready to start your project?</span>
                <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
        </motion.div>
    )
}