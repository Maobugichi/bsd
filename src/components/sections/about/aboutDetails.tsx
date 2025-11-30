import { Header } from "../../ui/header"
import { Paragraph } from "@/components/ui/paragraph"
import CompanyHighlights from "./cubes/mobile"
import { ShimmerBadge } from "@/components/ui/shimmerBadge"
import { Info } from "lucide-react"


export const AboutDetails = () => {
    return(
        <div className=" w-full lg:w-[70%] [@media(min-width:1020px)_and_(max-width:1024px)]:w-[90%]  flex flex-col  justify-between gap-10">
            <div className=" mx-auto w-full grid space-y-4">
             <ShimmerBadge text="About Us" icon={Info} width="w-32"/>
              <Header level={2} className="text-3xl tracking-wide leading-10 md:text-4xl font-semibold">
                Leading the way in global construction, we transform bold ideas into lasting landmarks.
              </Header>
              <Paragraph content="We are a global construction company delivering innovative, high-quality, and sustainable solutions. From towers to infrastructure, we shape cities, empower communities, and set new standards for the industry." />
            </div>
            
            <CompanyHighlights/>
        </div>
    )
}