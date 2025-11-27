import { Button } from "@/components/ui/button"
import { forwardRef } from "react"

export const Cta = forwardRef<HTMLButtonElement>((_props, ref) => {
    return(
        <div className="w-[85%] flex items-center justify-center overflow-hidden gap-2 h-fit">
            <Button 
                ref={ref} 
                className="relative h-16 md:w-[30%] rounded-4xl  bg-gradient-to-r from-[#333] to-[#000] text-white text-lg font-semibold overflow-hidden hover:from-[#EA580C] hover:to-[#D97706] transition-all duration-300  shadow-lg tracking-wider "
            >
               
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                
               
                <span className="relative z-10">Our Services</span>
            </Button>

            <style >{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                
                .animate-shimmer {
                    animation: shimmer 2.5s ease-in-out infinite;
                }
            `}</style>
        </div>
    )
})

Cta.displayName = "Cta"