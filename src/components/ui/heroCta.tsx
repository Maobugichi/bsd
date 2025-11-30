import { Button } from "@/components/ui/button"
import { forwardRef } from "react"

export const Cta = forwardRef<HTMLButtonElement,  { onClick?: () => void }>(({ onClick }, ref) => {
    return(
        <div className="w-fit [@media(min-width:1020px)_and_(max-width:1024px)]:w-[200px] flex relative   items-center justify-center overflow-hidden   gap-2 h-fit">
            <Button 
                ref={ref} 
                onClick={onClick}
                className="h-16 w-full rounded-4xl  bg-gradient-to-r from-[#333] to-[#000] text-white text-lg font-semibold overflow-hidden  transition-all duration-300  shadow-lg tracking-wider "
            >
               
                 <span className="absolute inset-0 overflow-hidden rounded-4xl">
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                </span>
                <span className="relative z-10 ">Our Services</span>
            </Button>
        </div>
    )
})

Cta.displayName = "Cta"