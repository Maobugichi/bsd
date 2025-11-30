import { forwardRef } from "react"
import { Header } from "../ui/header"
import { StackedCards } from "../testimonial/stackCards"

export const Testimonial = forwardRef<HTMLElement>((_props,ref) => {
    return(
        <section ref={ref} tabIndex={4} className="flex flex-col  justify-center gap-5 h-fit py-16">
            <div className="w-[85%] mx-auto"> 
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