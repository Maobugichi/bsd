import { Header } from "../ui/header"
import Carousel from "../features/swiper"
import { forwardRef } from "react"

export const Gallery = forwardRef<HTMLElement>((_props,ref) => {
    return(
        <section ref={ref} tabIndex={3} className=" py-16 h-fit ">
          <div className=" space-y-4 md:w-[85%] mx-auto mt-10  h-full flex flex-col gap-8  md:grid place-items-start">
            <div className="grid gap-4">
                <span className="text-left">Gallery</span>
                <Header level={2} className="text-3xl md:text-4xl font-semibold">
                    Our Latest Works
                </Header>
            </div>
            <Carousel/>
         </div>
        </section>
    )
})