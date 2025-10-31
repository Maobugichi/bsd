import { forwardRef } from "react"
import { Header } from "../components/header"
import { StackedCards } from "./stackCards"

export const Testimonial = forwardRef<HTMLElement>((_props,ref) => {
    return(
        <section ref={ref} tabIndex={4} className="flex flex-col items-center justify-center gap-5 h-fit py-16">
         <Header level={2} className="text-3xl md:text-4xl mt-3 font-semibold w-full md:w-1/2 text-center text-black">
            Trust is built with consistency
         </Header>
         <div className="h-[80%]  w-[95%]">
             <StackedCards/>
         </div>
        
        </section>
    )
})