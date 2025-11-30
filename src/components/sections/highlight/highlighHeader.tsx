import { Paragraph } from "@/components/ui/paragraph"
import { ShimmerBadge } from "@/components/ui/shimmerBadge"
import { TrendingUp } from "lucide-react"

export const HightlightHeader = () => {
    return(
          <div className="grid space-y-4">
            <ShimmerBadge text="Achievements" icon={TrendingUp} width="w-40"/>
            <h2 className=" text-3xl text-left md:text-4xl  font-bold text-gray-900 mb-6">
            Why Choose Our Expertise?
            </h2>
            <Paragraph
            content="Discover the numbers and qualities that make us the trusted partner for your construction and design needs."/>
         </div>
    )
}