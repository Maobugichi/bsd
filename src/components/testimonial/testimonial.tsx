import { forwardRef } from "react"
import { Header } from "../ui/header"
import { StackedCards } from "./stackCards"
import { MessageCircle } from "lucide-react"
import { ShimmerBadge } from "../ui/shimmerBadge"

export const Testimonial = forwardRef<HTMLElement>((_props,ref) => {
    return(
        <section ref={ref} tabIndex={4} className="flex flex-col gap-5 h-fit py-10 md:py-20">
            <div className="w-[85%] mx-auto [@media(min-width:1020px)_and_(max-width:1024px)]:w-[75%]">
                <ShimmerBadge text="Reviews" icon={MessageCircle} width="w-32"/> 
                <Header level={2} className="text-3xl md:text-4xl mt-3 font-semibold w-full md:w-1/2 text-left text-black">
                    Trust is built with consistency
                </Header>
                <div className="h-[80%] ">
                    <StackedCards/>
                </div>
             </div>
        </section>
    )
})