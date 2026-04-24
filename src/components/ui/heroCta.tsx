import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { forwardRef } from "react"

export const Cta = forwardRef<HTMLButtonElement, { onClick?: () => void }>(({ onClick }, ref) => {
    return (
        <Button
            ref={ref}
            onClick={onClick}
            className="group relative h-14 rounded-none px-8 rounded- bg-amber-500 hover:bg-amber-400 text-black font-semibold text-base tracking-wide overflow-hidden transition-all duration-300 shadow-[0_0_24px_rgba(245,158,11,0.35)] hover:shadow-[0_0_32px_rgba(245,158,11,0.55)] flex items-center gap-2"
        >
         
            <span className="absolute inset-0 overflow-hidden rounded pointer-events-none">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer" />
            </span>

            <span className="relative z-10">Our Services</span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
    )
})

Cta.displayName = "Cta"