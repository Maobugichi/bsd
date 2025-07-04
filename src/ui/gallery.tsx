import { Header } from "../components/header"
import Carousel from "./swiper"
import { forwardRef } from "react"

export const Gallery = forwardRef<HTMLElement>((_props,ref) => {
    return(
        <section ref={ref} tabIndex={3} className="h-[50vh] lg:h-[100vh] ">
          <div className="w-[90%] md:w-[85%] mx-auto mt-10  h-full flex flex-col gap-2 md:grid place-items-center">
            <span>Gallery</span>
            <Header level={2} className=" text-4xl font-semibold">
                Our Latest Works
            </Header>
            <Carousel/>
         </div>
        </section>
    )
})