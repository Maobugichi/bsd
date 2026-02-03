import { Header } from "../ui/header"
import Carousel from "../features/swiper"
import { forwardRef } from "react"
import { ShimmerBadge } from "../ui/shimmerBadge"
import { Images } from "lucide-react"

export const Gallery = forwardRef<HTMLElement>((_props,ref) => {
    return(
        <section ref={ref}  className="py-20 h-fit ">
          <div className=" space-y-4 w-[85%] [@media(min-width:1020px)_and_(max-width:1024px)]:w-[75%] mx-auto   h-full flex flex-col gap-8  md:grid place-items-start">
            <div className="grid gap-2">
                <ShimmerBadge text="Gallery" icon={Images} width="w-32"/>
            
                <Header level={2} className="text-3xl md:text-4xl font-semibold">
                    Our Latest Works
                </Header>
            </div>
            <Carousel/>
         </div>
        </section>
    )
})